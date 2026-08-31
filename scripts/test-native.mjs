import { spawnSync } from "node:child_process";
import { arch, platform } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const target = platform() === "darwin" ? "macos-universal" : platform() === "win32" ? "windows-x64" : arch() === "arm64" ? "linux-arm64" : "linux-x64";
const build = spawnSync(process.execPath, [join(root, "scripts", "build-native.mjs"), "--dev", "--entry", "tests/native-smoke.ts", "--output-name", "binding-smoke"], { cwd: root, stdio: "inherit" });
if (build.status !== 0) process.exit(build.status ?? 1);
const executable = join(root, "build", target, platform() === "win32" ? "binding-smoke.exe" : "binding-smoke");
const environment = { ...process.env };
if (platform() === "linux") environment.LD_LIBRARY_PATH = join(root, "build", target);
const run = spawnSync(executable, [], { cwd: join(root, "build", target), env: environment, stdio: "inherit" });
process.exit(run.status ?? 1);
