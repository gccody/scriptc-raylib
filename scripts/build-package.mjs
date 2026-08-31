import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

function run(command, args) {
  const result = spawnSync(command, args, { cwd: packageDir, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run(process.execPath, [require.resolve("typescript/bin/tsc"), "--project", join(packageDir, "tsconfig.package.json")]);
