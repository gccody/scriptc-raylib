import { existsSync } from "node:fs";
import { delimiter, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { spawnSync } from "node:child_process";

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function hostTarget() {
  if (process.platform === "darwin") return "macos-universal";
  if (process.platform === "linux" && process.arch === "x64") return "linux-x64";
  if (process.platform === "linux" && process.arch === "arm64") return "linux-arm64";
  if (process.platform === "win32" && process.arch === "x64") return "windows-x64";
  console.error(`scriptc-raylib run error: unsupported host ${process.platform}/${process.arch}.`);
  process.exit(1);
}

const targetBuildDir = join(projectDir, "build", hostTarget());
const executable = join(targetBuildDir, process.platform === "win32" ? "scriptc-raylib.exe" : "scriptc-raylib");

if (!existsSync(executable)) {
  console.error("scriptc-raylib run error: native executable is missing. Run 'npm run build' first.");
  process.exit(1);
}

const env = { ...process.env };
if (process.platform === "linux") {
  env.LD_LIBRARY_PATH = env.LD_LIBRARY_PATH
    ? `${targetBuildDir}${delimiter}${env.LD_LIBRARY_PATH}`
    : targetBuildDir;
}

const result = spawnSync(executable, [], { cwd: projectDir, env, stdio: "inherit" });
if (result.error) {
  console.error(`scriptc-raylib run error: ${result.error.message}`);
  process.exit(1);
}
if (result.signal) process.kill(process.pid, result.signal);
process.exit(result.status ?? 1);
