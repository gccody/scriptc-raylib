import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fixtureDir = mkdtempSync(join(tmpdir(), "scriptc-raylib-consumer-"));
const sharedEnvironment = {
  ...process.env,
  SCRIPTC_RAYLIB_VENDOR_DIR: join(packageDir, ".vendor"),
};

function run(command, args, options = {}) {
  const executable = process.platform === "win32" && (command === "npm" || command === "npx")
    ? `${command}.cmd`
    : command;
  const result = spawnSync(executable, args, {
    cwd: options.cwd ?? fixtureDir,
    env: sharedEnvironment,
    encoding: options.capture ? "utf8" : undefined,
    stdio: options.capture ? "pipe" : "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const output = options.capture ? `${result.stdout ?? ""}${result.stderr ?? ""}` : "";
    throw new Error(`${command} failed with status ${result.status}.\n${output}`);
  }
  return result;
}

try {
  mkdirSync(join(fixtureDir, "src"), { recursive: true });
  mkdirSync(join(fixtureDir, "src", "game"), { recursive: true });
  run("npm", ["pack", packageDir, "--pack-destination", fixtureDir]);
  const archive = readdirSync(fixtureDir).find((file) => file.endsWith(".tgz"));
  if (!archive) throw new Error("npm pack did not create an archive");

  writeFileSync(join(fixtureDir, "package.json"), `${JSON.stringify({
    name: "scriptc-raylib-consumer-test",
    private: true,
    type: "module",
    dependencies: {
      "scriptc-raylib": `file:./${archive}`,
    },
  }, null, 2)}\n`);
  writeFileSync(join(fixtureDir, "tsconfig.json"), `${JSON.stringify({
    compilerOptions: {
      strict: true,
      target: "ES2022",
      module: "ESNext",
      moduleResolution: "Bundler",
      rootDir: "src",
      skipLibCheck: true,
    },
    include: ["src/**/*.ts"],
  }, null, 2)}\n`);
  writeFileSync(join(fixtureDir, "src", "game", "color.ts"), `import {
  BLACK,
  colorToInt,
  type Color,
} from "scriptc-raylib";

export function blackValue(color: Color = BLACK): number {
  return colorToInt(color);
}
`);
  writeFileSync(join(fixtureDir, "src", "main.ts"), `import {
  PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,
  RAYWHITE,
  compressData,
  decompressData,
  getPixelColor,
  type Color,
} from "scriptc-raylib";
import { blackValue } from "./game/color";

const background: Color = RAYWHITE;
const source = new TextEncoder().encode("npm package works");
const compressed = compressData(source);
if (compressed === null) throw new Error("compression failed");
const restored = decompressData(compressed);
if (restored === null || new TextDecoder().decode(restored) !== "npm package works") {
  throw new Error("compression round trip failed");
}
const pixel = getPixelColor(new Uint8Array([1, 2, 3, 255]), PIXELFORMAT_UNCOMPRESSED_R8G8B8A8);
if (pixel.r !== 1 || pixel.a !== 255) throw new Error("pixel adapter failed");
console.log(` + "`package-ok ${blackValue(background)} ${restored.length}`" + `);
`);

  run("npm", ["install", "--ignore-scripts"]);

  const scaffoldDir = join(fixtureDir, "created-game");
  run("npx", ["--no-install", "scriptc-raylib", "create", "created-game", "--no-install"]);
  for (const required of ["package.json", "tsconfig.json", ".gitignore", "README.md", "src/main.ts", "assets/.gitkeep", "build/.gitkeep"]) {
    if (!existsSync(join(scaffoldDir, required))) throw new Error(`create command omitted ${required}`);
  }
  const scaffoldPackage = JSON.parse(readFileSync(join(scaffoldDir, "package.json"), "utf8"));
  if (scaffoldPackage.name !== "created-game" || scaffoldPackage.devDependencies?.["scriptc-raylib"] !== "^1.0.0") {
    throw new Error("create command generated an incorrect package.json");
  }
  const scaffoldMain = readFileSync(join(scaffoldDir, "src", "main.ts"), "utf8");
  if (!scaffoldMain.includes('from "scriptc-raylib"')) throw new Error("created game does not import scriptc-raylib");
  const overwrite = spawnSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["--no-install", "scriptc-raylib", "create", "created-game", "--no-install"],
    { cwd: fixtureDir, env: sharedEnvironment, encoding: "utf8" },
  );
  const overwriteOutput = `${overwrite.stdout ?? ""}${overwrite.stderr ?? ""}`;
  if (overwrite.status === 0 || !overwriteOutput.includes("not empty")) {
    throw new Error("create command did not protect a non-empty target directory");
  }
  const scaffoldCoverage = run(
    "npx",
    ["--no-install", "scriptc-raylib", "coverage", "src/main.ts"],
    { cwd: scaffoldDir, capture: true },
  );
  const scaffoldCoverageOutput = `${scaffoldCoverage.stdout ?? ""}${scaffoldCoverage.stderr ?? ""}`;
  if (!scaffoldCoverageOutput.includes("100%") || !scaffoldCoverageOutput.includes("fully static")) {
    throw new Error(`created game was not fully static:\n${scaffoldCoverageOutput}`);
  }

  const coverage = run("npx", ["--no-install", "scriptc-raylib", "coverage", "src/main.ts"], { capture: true });
  const coverageOutput = `${coverage.stdout ?? ""}${coverage.stderr ?? ""}`;
  const analyzed = /statements analyzed\s+(\d+)/.exec(coverageOutput);
  if (!coverageOutput.includes("100%") ||
      !coverageOutput.includes("fully static") ||
      coverageOutput.includes("runs with --dynamic") ||
      Number(analyzed?.[1] ?? 0) === 0) {
    throw new Error(`package coverage was not fully static:\n${coverageOutput}`);
  }

  const output = join("dist", process.platform === "win32" ? "consumer.exe" : "consumer");
  run("npx", ["--no-install", "scriptc-raylib", "build", "src/main.ts", "--dev", "-o", output]);
  const executable = join(fixtureDir, output);
  const executed = run(executable, [], { capture: true });
  const stdout = String(executed.stdout ?? "");
  if (!stdout.includes("package-ok")) throw new Error(`unexpected consumer output: ${stdout}`);
  console.log(`Packed npm consumer test passed: ${basename(fixtureDir)}`);
} finally {
  rmSync(fixtureDir, { recursive: true, force: true });
}
