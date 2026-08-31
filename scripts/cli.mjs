#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { preparePackageEntry } from "./package-entry.mjs";

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const callerDir = process.cwd();
const require = createRequire(import.meta.url);

function fail(message) {
  console.error(`scriptc-raylib: ${message}`);
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, { cwd: callerDir, env: process.env, stdio: "inherit" });
  if (result.error) fail(result.error.message);
  if (result.signal) process.kill(process.pid, result.signal);
  process.exit(result.status ?? 1);
}

function packageVersion() {
  return JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8")).version;
}

function projectName(target) {
  const normalized = basename(target)
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^[._-]+|[._-]+$/g, "");
  return normalized || "scriptc-raylib-game";
}

function copyTemplate(inputDir, outputDir, replacements) {
  mkdirSync(outputDir, { recursive: true });
  for (const entry of readdirSync(inputDir, { withFileTypes: true })) {
    const input = join(inputDir, entry.name);
    const outputName = entry.name === "gitignore" ? ".gitignore" : entry.name;
    const output = join(outputDir, outputName);
    if (entry.isDirectory()) {
      copyTemplate(input, output, replacements);
    } else if (entry.isFile()) {
      if ([".ts", ".json", ".md"].some((extension) => entry.name.endsWith(extension))) {
        let source = readFileSync(input, "utf8");
        for (const [needle, value] of Object.entries(replacements)) source = source.replaceAll(needle, value);
        writeFileSync(output, source);
      } else {
        copyFileSync(input, output);
      }
    }
  }
}

function createProject(args) {
  if (args.length === 1 && (args[0] === "--help" || args[0] === "-h")) {
    console.log(`Usage: scriptc-raylib create <directory> [--no-install]

Creates a TypeScript + scriptc + raylib game and runs npm install by default.`);
    return;
  }
  const noInstall = args.includes("--no-install");
  const unknown = args.filter((argument) => argument.startsWith("-") && argument !== "--no-install");
  if (unknown.length > 0) fail(`unknown create option '${unknown[0]}'.`);
  const positional = args.filter((argument) => !argument.startsWith("-"));
  if (positional.length !== 1) fail("usage: scriptc-raylib create <directory> [--no-install]");

  const target = resolve(callerDir, positional[0]);
  if (existsSync(target)) {
    if (!statSync(target).isDirectory()) fail(`target exists and is not a directory: ${target}`);
    if (readdirSync(target).length > 0) fail(`target directory is not empty: ${target}`);
  }

  const name = projectName(target);
  copyTemplate(join(packageDir, "templates", "starter"), target, {
    "{{PROJECT_NAME}}": name,
    "{{PACKAGE_VERSION}}": packageVersion(),
  });
  mkdirSync(join(target, "assets"), { recursive: true });
  mkdirSync(join(target, "build"), { recursive: true });
  writeFileSync(join(target, "assets", ".gitkeep"), "");
  writeFileSync(join(target, "build", ".gitkeep"), "");

  if (!noInstall) {
    console.log(`Created ${name}. Installing dependencies...`);
    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
    const result = spawnSync(npmCommand, ["install"], { cwd: target, env: process.env, stdio: "inherit" });
    if (result.error || result.status !== 0) {
      fail(`project files were created at ${target}, but npm install failed. Run 'npm install' there to retry.`);
    }
  } else {
    console.log(`Created ${name} without installing dependencies.`);
  }

  const relativeTarget = resolve(target) === resolve(callerDir) ? "." : positional[0];
  console.log(`\nNext steps:\n  cd ${relativeTarget}\n  npm run dev`);
}

function help() {
  console.log(`scriptc-raylib — build static native TypeScript + raylib applications

Usage:
  scriptc-raylib create <directory> [--no-install]
  scriptc-raylib build [entry.ts] [--dev] [--target <target>] [-o <path>]
  scriptc-raylib run [entry.ts] [--target <host-target>] [-o <path>]
  scriptc-raylib coverage [entry.ts]

Targets:
  macos-universal, linux-x64, linux-arm64, windows-x64

Examples:
  scriptc-raylib create my-game
  scriptc-raylib build src/main.ts -o build/game
  scriptc-raylib run src/main.ts --dev
  scriptc-raylib coverage src/main.ts

The build is fully static on the TypeScript side. The CLI stages the binding
as local TypeScript and supplies --ffi automatically; --dynamic is never enabled.`);
}

const [command = "help", ...args] = process.argv.slice(2);
if (command === "help" || command === "--help" || command === "-h") {
  help();
  process.exit(0);
}

if (command === "create") {
  createProject(args);
  process.exit(0);
}

if (command === "build" || command === "run") {
  const forwarded = [...args];
  if (command === "run") forwarded.push("--run");
  run(process.execPath, [join(packageDir, "scripts", "build-native.mjs"), ...forwarded]);
}

if (command === "coverage") {
  const entryArgument = args.find((argument) => !argument.startsWith("-"));
  const entry = resolve(callerDir, entryArgument ?? "src/main.ts");
  if (!existsSync(entry)) fail(`entry file was not found: ${entry}`);
  let scriptcBootstrap;
  try {
    scriptcBootstrap = require.resolve("scriptc/dist/bootstrap.js");
  } catch {
    fail("scriptc was not found. Reinstall scriptc-raylib.");
  }
  const compileEntry = preparePackageEntry({
    callerDir,
    entry,
    packageDir,
    stagingDir: join(callerDir, "build", ".scriptc-raylib-coverage"),
  });
  run(process.execPath, [
    scriptcBootstrap,
    "coverage",
    compileEntry,
    "--ffi",
    join(packageDir, "ffi.json"),
  ]);
}

fail(`unknown command '${command}'. Run 'scriptc-raylib --help'.`);
