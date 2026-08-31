import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, extname, relative, resolve, sep } from "node:path";

const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".cjs", ".json"]);
const EXCLUDED_DIRECTORIES = new Set([".git", ".vendor", "build", "node_modules"]);

function slash(path) {
  return path.split(sep).join("/");
}

function relativeModule(from, to) {
  let path = slash(relative(from, to));
  if (!path.startsWith("./") && !path.startsWith("../")) path = `./${path}`;
  const extension = extname(path);
  return [".ts", ".tsx", ".js", ".mjs", ".cjs"].includes(extension)
    ? path.slice(0, -extension.length)
    : path;
}

function rewriteBindingImports(source, replacement, file) {
  if (/(["'])scriptc-raylib\//.test(source)) {
    throw new Error(`${file} imports an unsupported scriptc-raylib subpath; import from "scriptc-raylib".`);
  }
  return source
    .replace(/(\bfrom\s*)(["'])scriptc-raylib\2/g, `$1$2${replacement}$2`)
    .replace(/(\bimport\s*)(["'])scriptc-raylib\2/g, `$1$2${replacement}$2`)
    .replace(/(\bimport\s*\(\s*)(["'])scriptc-raylib\2/g, `$1$2${replacement}$2`);
}

function mirrorProject({ callerDir, sourceDir, bindingEntry }) {
  function visit(inputDir) {
    const outputDir = resolve(sourceDir, relative(callerDir, inputDir));
    mkdirSync(outputDir, { recursive: true });
    for (const entry of readdirSync(inputDir, { withFileTypes: true })) {
      if (entry.isDirectory() && EXCLUDED_DIRECTORIES.has(entry.name)) continue;
      const input = resolve(inputDir, entry.name);
      const output = resolve(outputDir, entry.name);
      if (entry.isDirectory()) {
        visit(input);
      } else if (entry.isFile() && SOURCE_EXTENSIONS.has(extname(entry.name))) {
        if (entry.name.endsWith(".json")) {
          cpSync(input, output);
        } else {
          const replacement = relativeModule(dirname(output), bindingEntry);
          const source = readFileSync(input, "utf8");
          writeFileSync(output, rewriteBindingImports(source, replacement, input));
        }
      }
    }
  }
  visit(callerDir);
}

export function preparePackageEntry({ callerDir, entry, packageDir, stagingDir }) {
  const entryRelative = relative(callerDir, entry);
  if (entryRelative.startsWith("..") || resolve(callerDir, entryRelative) !== resolve(entry)) {
    throw new Error(`entry file must be inside the project directory: ${callerDir}`);
  }

  rmSync(stagingDir, { recursive: true, force: true });
  const appDir = resolve(stagingDir, "app");
  const bindingDir = resolve(appDir, dirname(entryRelative), ".scriptc-raylib");
  mkdirSync(appDir, { recursive: true });
  cpSync(resolve(packageDir, "src"), bindingDir, { recursive: true });
  const bindingEntry = resolve(bindingDir, "raylib.ts");
  mirrorProject({ callerDir, sourceDir: appDir, bindingEntry });
  return resolve(appDir, entryRelative);
}
