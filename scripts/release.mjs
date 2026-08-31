import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const allowedBumps = new Set(["patch", "minor", "major"]);

function fail(message) {
  console.error(`release aborted: ${message}`);
  process.exit(1);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: packageDir,
    env: options.env ?? process.env,
    encoding: options.capture ? "utf8" : undefined,
    stdio: options.capture ? "pipe" : "inherit",
  });
  if (result.error) fail(`could not run '${command}': ${result.error.message}`);
  if (result.status !== 0 && !options.allowFailure) {
    fail(`'${command} ${args.join(" ")}' exited with status ${result.status ?? "unknown"}.`);
  }
  return result;
}

function output(command, args) {
  return String(run(command, args, { capture: true }).stdout ?? "").trim();
}

function manifest() {
  return JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));
}

const [bump, ...extra] = process.argv.slice(2);
if (bump === "--help" || bump === "-h") {
  console.log("Usage: npm run release -- <patch|minor|major> [--dry-run]");
  process.exit(0);
}
if (!allowedBumps.has(bump) || extra.some((value) => value !== "--dry-run")) {
  fail("usage: npm run release -- <patch|minor|major> [--dry-run]");
}
const dryRun = extra.includes("--dry-run");

if (output("git", ["rev-parse", "--show-toplevel"]) !== packageDir) fail("run this command from the repository checkout.");
if (output("git", ["branch", "--show-current"]) !== "main") fail("releases must be made from the main branch.");
if (output("git", ["status", "--porcelain"]) !== "") fail("commit or stash all changes before releasing.");

const remote = output("git", ["remote", "get-url", "origin"]);
if (!/github\.com[:/]gccody\/scriptc-raylib(?:\.git)?$/.test(remote)) {
  fail(`origin must be github.com/gccody/scriptc-raylib, received '${remote}'.`);
}

run("git", ["fetch", "origin", "main", "--tags"]);
const ancestry = run("git", ["merge-base", "--is-ancestor", "origin/main", "HEAD"], { allowFailure: true });
if (ancestry.status !== 0) fail("local main is behind or diverged from origin/main; synchronize it first.");

const current = manifest().version;
const publishedResult = JSON.parse(output(npmCommand, ["view", "scriptc-raylib", "dist-tags.latest", "--json"]));
const published = Array.isArray(publishedResult) ? publishedResult.at(-1) : publishedResult;
if (current !== published) {
  fail(`local version ${current} must equal published latest ${published} before the release bump.`);
}

console.log(`Running the full release suite before bumping ${current} (${bump})...`);
run(npmCommand, ["test"]);
if (output("git", ["status", "--porcelain"]) !== "") {
  fail("tests changed generated files; review and commit those changes before releasing.");
}

if (dryRun) {
  console.log(`Dry run passed. 'npm run release -- ${bump}' will bump, tag, and push atomically.`);
  process.exit(0);
}

run(npmCommand, ["version", bump, "-m", "chore(release): v%s"]);
const next = manifest().version;
const tag = `v${next}`;
run(process.execPath, [join(packageDir, "scripts", "check-release.mjs")], {
  env: { ...process.env, RELEASE_TAG: tag },
});

console.log(`Pushing main and ${tag} atomically. GitHub will publish ${manifest().name}@${next}.`);
const pushed = run("git", ["push", "--atomic", "origin", "HEAD:main", tag], { allowFailure: true });
if (pushed.status !== 0) {
  fail(`push failed after creating the local release commit and tag. Retry with: git push --atomic origin HEAD:main ${tag}`);
}
