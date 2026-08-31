import { createHash } from "node:crypto";
import {
  chmodSync,
  cpSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { arch, platform } from "node:os";
import { basename, delimiter, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { preparePackageEntry } from "./package-entry.mjs";

const RAYLIB_VERSION = "6.0";
const RELEASE_BASE = `https://github.com/raysan5/raylib/releases/download/${RAYLIB_VERSION}`;

const RELEASES = {
  "macos-universal": {
    archive: "raylib-6.0_macos.tar.gz",
    sha256: "6ae5947fbd36aee4c280e3a2b3e1893316c433e292bda6e94e0f2b037498ad70",
    root: "raylib-6.0_macos",
    linkLibrary: "libraylib.dylib",
    runtimeLibrary: "libraylib.600.dylib",
  },
  "linux-x64": {
    archive: "raylib-6.0_linux_amd64.tar.gz",
    sha256: "b64ba618a19e7da9e9c0e09bb398ecfd477a77d2d7231901bafc8739d27c08d2",
    root: "raylib-6.0_linux_amd64",
    linkLibrary: "libraylib.so",
    runtimeLibrary: "libraylib.so.600",
  },
  "linux-arm64": {
    archive: "raylib-6.0_linux_arm64.tar.gz",
    sha256: "d39ca0b36fe865b41b058a5646576e6b98b4875352502b41ed303f2c38a39ec9",
    root: "raylib-6.0_linux_arm64",
    linkLibrary: "libraylib.so",
    runtimeLibrary: "libraylib.so.600",
  },
  "windows-x64": {
    archive: "raylib-6.0_win64_mingw-w64.zip",
    sha256: "69688e025812c8132634c609c30938eda4a3fa14d63c4031108873a4d797e2d3",
    root: "raylib-6.0_win64_mingw-w64",
    linkLibrary: "libraylibdll.a",
    runtimeLibrary: "raylib.dll",
  },
};

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const callerDir = resolve(process.env.SCRIPTC_RAYLIB_PROJECT_DIR || process.cwd());
const packageWorkspace = packageDir === callerDir;
const buildDir = join(callerDir, "build");
const vendorDir = resolve(process.env.SCRIPTC_RAYLIB_VENDOR_DIR || join(callerDir, ".vendor"));
const downloadDir = join(vendorDir, "downloads");
const require = createRequire(import.meta.url);

function fail(message) {
  console.error(`scriptc-raylib build error: ${message}`);
  process.exit(1);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? callerDir,
    env: options.env ?? process.env,
    stdio: "inherit",
  });
  if (result.error) {
    fail(`could not run '${command}': ${result.error.message}`);
  }
  if (result.status !== 0) {
    fail(`'${command}' exited with status ${result.status ?? "unknown"}.`);
  }
}

function commandWorks(command, args = ["--version"]) {
  const result = spawnSync(command, args, { stdio: "ignore" });
  return !result.error && result.status === 0;
}

function commandExists(command) {
  const result = spawnSync(command, [], { stdio: "ignore" });
  return !result.error;
}

function hostTarget() {
  if (platform() === "darwin" && (arch() === "arm64" || arch() === "x64")) {
    return "macos-universal";
  }
  if (platform() === "linux" && arch() === "x64") return "linux-x64";
  if (platform() === "linux" && arch() === "arm64") return "linux-arm64";
  if (platform() === "win32" && arch() === "x64") return "windows-x64";
  fail(`unsupported host ${platform()}/${arch()}; supported hosts are macOS arm64/x64, Linux arm64/x64, and Windows x64.`);
}

function parseArguments() {
  let optimization = "release";
  let target = hostTarget();
  let entry = join(callerDir, "src", "main.ts");
  let outputName = packageWorkspace ? "scriptc-raylib" : "main";
  let outputPath;
  let runAfterBuild = false;
  let positionalEntrySeen = false;
  for (let index = 2; index < process.argv.length; index += 1) {
    const argument = process.argv[index];
    if (argument === "--dev") {
      optimization = "dev";
    } else if (argument === "--target") {
      const value = process.argv[index + 1];
      if (!value || !(value in RELEASES)) {
        fail(`--target must be one of ${Object.keys(RELEASES).join(", ")}.`);
      }
      target = value;
      index += 1;
    } else if (argument === "--entry") {
      const value = process.argv[index + 1];
      if (!value) fail("--entry requires a TypeScript file path.");
      entry = resolve(callerDir, value);
      index += 1;
    } else if (argument === "--output-name") {
      const value = process.argv[index + 1];
      if (!value || !/^[A-Za-z0-9._-]+$/.test(value)) fail("--output-name requires a simple file name.");
      outputName = value;
      index += 1;
    } else if (argument === "-o" || argument === "--out") {
      const value = process.argv[index + 1];
      if (!value) fail(`${argument} requires an output path.`);
      outputPath = resolve(callerDir, value);
      index += 1;
    } else if (argument === "--run") {
      runAfterBuild = true;
    } else if (!argument.startsWith("-") && !positionalEntrySeen) {
      entry = resolve(callerDir, argument);
      positionalEntrySeen = true;
    } else {
      fail(`unknown argument '${argument}'. Usage: scriptc-raylib build [entry.ts] [--dev] [--target <target>] [-o <path>] [--run].`);
    }
  }
  if (!existsSync(entry)) fail(`entry file was not found: ${entry}`);
  return { optimization, target, entry, outputName, outputPath, runAfterBuild };
}

async function download(url, destination) {
  console.log(`Downloading ${url}`);
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    fail(`raylib download failed with HTTP ${response.status}: ${url}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  writeFileSync(destination, bytes);
}

function sha256(file) {
  return createHash("sha256").update(readFileSync(file)).digest("hex");
}

async function ensureRaylib(target) {
  const release = RELEASES[target];
  const extractedRoot = join(vendorDir, release.root);
  const header = join(extractedRoot, "include", "raylib.h");
  const library = join(extractedRoot, "lib", release.linkLibrary);
  const runtime = join(extractedRoot, "lib", release.runtimeLibrary);
  if (existsSync(header) && existsSync(library) && existsSync(runtime)) {
    return { release, extractedRoot, header, library, runtime };
  }

  mkdirSync(downloadDir, { recursive: true });
  const archivePath = join(downloadDir, release.archive);
  if (!existsSync(archivePath) || sha256(archivePath) !== release.sha256) {
    if (existsSync(archivePath)) rmSync(archivePath);
    await download(`${RELEASE_BASE}/${release.archive}`, archivePath);
  }
  const actualHash = sha256(archivePath);
  if (actualHash !== release.sha256) {
    rmSync(archivePath);
    fail(`SHA-256 mismatch for ${release.archive}: expected ${release.sha256}, received ${actualHash}.`);
  }

  if (existsSync(extractedRoot)) rmSync(extractedRoot, { recursive: true });
  const tarArgs = release.archive.endsWith(".zip")
    ? ["-xf", archivePath, "-C", vendorDir]
    : ["-xzf", archivePath, "-C", vendorDir];
  run("tar", tarArgs);

  if (!existsSync(header) || !existsSync(library) || !existsSync(runtime)) {
    fail(`the verified ${release.archive} archive did not contain the expected raylib files.`);
  }
  return { release, extractedRoot, header, library, runtime };
}

function compilerFor(target) {
  const crossCompiling = target !== hostTarget();
  const windowsTarget = target === "windows-x64";
  if (crossCompiling || windowsTarget) {
    if (!commandWorks("zig", ["version"])) {
      fail("Zig was not found. Install Zig 0.15 or newer to build Windows or cross-compile targets.");
    }
    const triples = {
      "windows-x64": "x86_64-windows-gnu",
      "linux-x64": "x86_64-linux-gnu.2.36",
      "linux-arm64": "aarch64-linux-gnu.2.36",
    };
    const triple = triples[target];
    if (!triple) fail(`cross-compiling ${target} is not supported from this host.`);
    return {
      cc: "zig",
      ccPrefix: ["cc", "-target", triple],
      ar: "zig",
      arPrefix: ["ar"],
      scriptcEnvironment: { SCRIPTC_CC: "zigcc", SCRIPTC_TARGET: triple },
    };
  }

  const cc = process.env.CC || (platform() === "win32" ? "clang" : "cc");
  const ar = process.env.AR || (platform() === "win32" ? "llvm-ar" : "ar");
  if (!commandExists(cc)) fail(`C compiler '${cc}' was not found. Install Clang or set CC.`);
  if (!commandExists(ar)) fail(`archiver '${ar}' was not found. Install LLVM/binutils or set AR.`);
  return { cc, ccPrefix: [], ar, arPrefix: [], scriptcEnvironment: {} };
}

function patchAndBundleRuntime(target, runtimeDir, executable, raylibRoot, raylibRuntime) {
  const runtimeName = basename(raylibRuntime);
  const bundledRuntime = join(runtimeDir, runtimeName);
  copyFileSync(raylibRuntime, bundledRuntime);
  copyFileSync(join(raylibRoot, "LICENSE"), join(runtimeDir, "RAYLIB_LICENSE.txt"));

  if (target === "macos-universal") {
    if (!commandExists("install_name_tool")) {
      fail("install_name_tool was not found. Install Xcode Command Line Tools.");
    }
    run("install_name_tool", [
      "-change",
      "@rpath/libraylib.600.dylib",
      "@executable_path/libraylib.600.dylib",
      executable,
    ]);
  } else if (target.startsWith("linux-") && commandWorks("patchelf", ["--version"])) {
    run("patchelf", ["--set-rpath", "$ORIGIN", executable]);
  }
}

function bundleProjectAssets(runtimeDir) {
  const source = join(callerDir, "assets");
  if (!existsSync(source)) return;

  const destination = join(runtimeDir, "assets");
  if (resolve(source) === resolve(destination)) return;
  cpSync(source, destination, { recursive: true, force: true });
}

const { optimization, target, entry, outputName, outputPath, runAfterBuild } = parseArguments();
const raylib = await ensureRaylib(target);
const compiler = compilerFor(target);
const targetIsWindows = target === "windows-x64";
const targetBuildDir = join(buildDir, target);

let scriptcBootstrap;
try {
  scriptcBootstrap = require.resolve("scriptc/dist/bootstrap.js");
} catch {
  fail("scriptc was not found. Install this package normally, or add scriptc 0.0.35 to the application.");
}

mkdirSync(targetBuildDir, { recursive: true });
if (packageWorkspace) {
  let tscBootstrap;
  try {
    tscBootstrap = require.resolve("typescript/bin/tsc");
  } catch {
    fail("TypeScript was not found. Run 'npm install' in the package workspace.");
  }
  run(process.execPath, [join(packageDir, "scripts", "generate-binding.mjs")], { cwd: packageDir });
  run(process.execPath, [tscBootstrap, "--project", join(packageDir, "tsconfig.json"), "--noEmit"], { cwd: packageDir });
}

const shimObject = join(targetBuildDir, targetIsWindows ? "raylib_shim.obj" : "raylib_shim.o");
const generatedObject = join(targetBuildDir, targetIsWindows ? "raylib_generated.obj" : "raylib_generated.o");
const shimArchive = join(targetBuildDir, "libraylib_shim.a");
const compileArguments = [
  ...compiler.ccPrefix,
  "-std=c11",
  "-O2",
  "-Wall",
  "-Wextra",
  "-Wpedantic",
  "-Werror",
  ...(targetIsWindows ? ["-DUSE_LIBTYPE_SHARED"] : []),
  `-I${join(raylib.extractedRoot, "include")}`,
  `-I${join(packageDir, "native")}`,
  "-c",
  join(packageDir, "native", "raylib_shim.c"),
  "-o",
  shimObject,
];
run(compiler.cc, compileArguments);
run(compiler.cc, [
  ...compiler.ccPrefix,
  "-std=c11", "-O2", "-Wall", "-Wextra", "-Wpedantic", "-Werror",
  ...(targetIsWindows ? ["-DUSE_LIBTYPE_SHARED"] : []),
  `-I${join(raylib.extractedRoot, "include")}`,
  `-I${join(packageDir, "native", "generated")}`,
  "-c", join(packageDir, "native", "generated", "raylib_generated.c"),
  "-o", generatedObject,
]);
if (existsSync(shimArchive)) rmSync(shimArchive);
run(compiler.ar, [...compiler.arPrefix, "rcs", shimArchive, shimObject, generatedObject]);

const baseManifest = JSON.parse(readFileSync(join(packageDir, "ffi.json"), "utf8"));
const generatedManifest = {
  ...baseManifest,
  libraries: [shimArchive, raylib.library],
  system_libraries: [],
};
const generatedManifestPath = join(targetBuildDir, "ffi.json");
writeFileSync(generatedManifestPath, `${JSON.stringify(generatedManifest, null, 2)}\n`);

let executable = outputPath ?? join(targetBuildDir, targetIsWindows ? `${outputName}.exe` : outputName);
if (targetIsWindows && extname(executable).toLowerCase() !== ".exe") executable += ".exe";
mkdirSync(dirname(executable), { recursive: true });
const scriptcEnvironment = { ...process.env, ...compiler.scriptcEnvironment };
const compileEntry = packageWorkspace
  ? entry
  : preparePackageEntry({
      callerDir,
      entry,
      packageDir,
      stagingDir: join(targetBuildDir, ".scriptc-raylib-source"),
    });
const scriptcArguments = [
  scriptcBootstrap,
  "build",
  compileEntry,
  "--ffi",
  generatedManifestPath,
  "--optimization",
  optimization,
  "--no-keep-c",
  "-o",
  executable,
];
run(process.execPath, scriptcArguments, { env: scriptcEnvironment });

const runtimeDir = dirname(executable);
patchAndBundleRuntime(target, runtimeDir, executable, raylib.extractedRoot, raylib.runtime);
bundleProjectAssets(runtimeDir);
if (!targetIsWindows) chmodSync(executable, 0o755);

console.log(`Built ${target} native game: ${executable}`);
if (target.startsWith("linux-") && !commandWorks("patchelf", ["--version"])) {
  console.log("Linux note: patchelf was not found; the package runner supplies the adjacent raylib library path.");
}

if (runAfterBuild) {
  if (target !== hostTarget()) fail(`cannot run cross-compiled target ${target} on this host.`);
  const runEnvironment = { ...process.env };
  if (platform() === "linux") {
    runEnvironment.LD_LIBRARY_PATH = runEnvironment.LD_LIBRARY_PATH
      ? `${runtimeDir}${delimiter}${runEnvironment.LD_LIBRARY_PATH}`
      : runtimeDir;
  }
  run(executable, [], { cwd: callerDir, env: runEnvironment });
}
