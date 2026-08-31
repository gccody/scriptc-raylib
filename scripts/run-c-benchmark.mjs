import { chmodSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import { arch, platform } from "node:os";
import { basename, delimiter, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function fail(message) {
  console.error(`C benchmark error: ${message}`);
  process.exit(1);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: projectDir,
    env: options.env ?? process.env,
    stdio: "inherit",
  });
  if (result.error) fail(`could not run '${command}': ${result.error.message}`);
  if (result.status !== 0) fail(`'${command}' exited with status ${result.status ?? "unknown"}.`);
}

function commandWorks(command, args = ["--version"]) {
  const result = spawnSync(command, args, { stdio: "ignore" });
  return !result.error && result.status === 0;
}

function hostConfiguration() {
  if (platform() === "darwin" && (arch() === "arm64" || arch() === "x64")) {
    return {
      target: "macos-universal",
      vendorRoot: "raylib-6.0_macos",
      linkLibrary: "libraylib.dylib",
      runtimeLibrary: "libraylib.600.dylib",
    };
  }
  if (platform() === "linux" && arch() === "x64") {
    return {
      target: "linux-x64",
      vendorRoot: "raylib-6.0_linux_amd64",
      linkLibrary: "libraylib.so",
      runtimeLibrary: "libraylib.so.600",
    };
  }
  if (platform() === "linux" && arch() === "arm64") {
    return {
      target: "linux-arm64",
      vendorRoot: "raylib-6.0_linux_arm64",
      linkLibrary: "libraylib.so",
      runtimeLibrary: "libraylib.so.600",
    };
  }
  if (platform() === "win32" && arch() === "x64") {
    return {
      target: "windows-x64",
      vendorRoot: "raylib-6.0_win64_mingw-w64",
      linkLibrary: "libraylibdll.a",
      runtimeLibrary: "raylib.dll",
    };
  }
  fail(`unsupported host ${platform()}/${arch()}.`);
}

const configuration = hostConfiguration();
const vendorRoot = join(projectDir, ".vendor", configuration.vendorRoot);
const header = join(vendorRoot, "include", "raylib.h");
const linkLibrary = join(vendorRoot, "lib", configuration.linkLibrary);
const runtimeLibrary = join(vendorRoot, "lib", configuration.runtimeLibrary);

if (!existsSync(header) || !existsSync(linkLibrary) || !existsSync(runtimeLibrary)) {
  console.log("Preparing the pinned raylib 6.0 dependency through the standard package build...");
  run(process.execPath, [
    join(projectDir, "scripts", "build-native.mjs"),
    "--entry",
    "src/benchmarks/uncapped-fps.ts",
    "--output-name",
    "uncapped-fps",
  ]);
}

if (!existsSync(header) || !existsSync(linkLibrary) || !existsSync(runtimeLibrary)) {
  fail("the pinned raylib headers and library are unavailable after preparation.");
}

const buildDir = join(projectDir, "build", configuration.target);
const executable = join(buildDir, platform() === "win32" ? "uncapped-fps-c.exe" : "uncapped-fps-c");
const compiler = process.env.CC || (platform() === "win32" ? "zig" : "cc");
const compilerArguments = [
  ...(platform() === "win32" && !process.env.CC ? ["cc", "-target", "x86_64-windows-gnu"] : []),
  "-std=c11",
  "-O2",
  "-Wall",
  "-Wextra",
  "-Wpedantic",
  "-Werror",
  ...(platform() === "win32" ? ["-DUSE_LIBTYPE_SHARED"] : []),
  `-I${join(vendorRoot, "include")}`,
  join(projectDir, "benchmarks", "uncapped-fps.c"),
  linkLibrary,
  "-o",
  executable,
];

mkdirSync(buildDir, { recursive: true });
run(compiler, compilerArguments);
copyFileSync(runtimeLibrary, join(buildDir, basename(runtimeLibrary)));

if (platform() === "darwin") {
  run("install_name_tool", [
    "-change",
    "@rpath/libraylib.600.dylib",
    "@executable_path/libraylib.600.dylib",
    executable,
  ]);
} else if (platform() === "linux" && commandWorks("patchelf")) {
  run("patchelf", ["--set-rpath", "$ORIGIN", executable]);
}

if (platform() !== "win32") chmodSync(executable, 0o755);
console.log(`Built native C benchmark: ${executable}`);

const runEnvironment = { ...process.env };
if (platform() === "linux") {
  runEnvironment.LD_LIBRARY_PATH = runEnvironment.LD_LIBRARY_PATH
    ? `${buildDir}${delimiter}${runEnvironment.LD_LIBRARY_PATH}`
    : buildDir;
}
run(executable, [], { env: runEnvironment });
