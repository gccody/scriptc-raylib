import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));
const lock = JSON.parse(readFileSync(join(packageDir, "package-lock.json"), "utf8"));
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

function fail(message) {
  console.error(`release check failed: ${message}`);
  process.exit(1);
}

if (!versionPattern.test(manifest.version)) fail(`package version '${manifest.version}' is not a stable semantic version.`);
if (lock.version !== manifest.version || lock.packages?.[""]?.version !== manifest.version) {
  fail("package.json and package-lock.json versions do not match.");
}

const expectedRepository = "git+https://github.com/gccody/scriptc-raylib.git";
if (manifest.repository?.url !== expectedRepository) fail(`repository.url must be ${expectedRepository}.`);

const tag = process.env.GITHUB_REF_NAME || process.env.RELEASE_TAG;
if (!tag) fail("GITHUB_REF_NAME or RELEASE_TAG is required.");
if (tag !== `v${manifest.version}`) fail(`tag '${tag}' does not match package version v${manifest.version}.`);

const response = await fetch(`https://registry.npmjs.org/${encodeURIComponent(manifest.name)}/${manifest.version}`);
if (response.ok) fail(`${manifest.name}@${manifest.version} is already published; increment the version first.`);
if (response.status !== 404) fail(`npm registry check returned HTTP ${response.status}.`);

console.log(`Release validated: ${manifest.name}@${manifest.version} from ${tag}`);
