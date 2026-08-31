import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { raylib as api } from "@raylib/api";

const report = JSON.parse(readFileSync(new URL("../binding-report.json", import.meta.url)));
const manifest = JSON.parse(readFileSync(new URL("../ffi.json", import.meta.url)));
const generatedC = readFileSync(new URL("../native/generated/raylib_generated.c", import.meta.url), "utf8");
const handwrittenC = readFileSync(new URL("../native/raylib_shim.c", import.meta.url), "utf8");
const generatedTs = readFileSync(new URL("../src/generated/raylib.ts", import.meta.url), "utf8");

test("the official raylib 6.0 inventory is completely classified", () => {
  assert.equal(api.functions.length, 600);
  const classified = new Set([
    ...report.included.map((name) => name.replace(/ \(.+\)$/, "")),
    ...report.automaticCleanup,
    ...report.excluded.map(({ name }) => name),
  ]);
  for (const fn of api.functions) assert.ok(classified.has(fn.name), `${fn.name} is unclassified`);
  assert.equal(report.callableOfficialFunctions + report.automaticCleanupFunctions + report.unsupportedOfficialFunctions, 600);
});

test("every FFI binding has one native symbol and one TypeScript declaration", () => {
  const names = new Set();
  const symbols = new Set();
  for (const binding of manifest.functions) {
    assert.ok(!names.has(binding.name), `duplicate FFI name ${binding.name}`);
    assert.ok(!symbols.has(binding.symbol), `duplicate C symbol ${binding.symbol}`);
    names.add(binding.name);
    symbols.add(binding.symbol);
    assert.match(`${generatedC}\n${handwrittenC}`, new RegExp(`\\b${binding.symbol}\\s*\\(`));
  }
  assert.equal(manifest.ffi_format, 3);
});

test("the public API contains no any or pointer-shaped TypeScript types", () => {
  assert.doesNotMatch(generatedTs, /\bany\b/);
  assert.doesNotMatch(generatedTs, /\bPointer\b|\buintptr\b|\bvoid\s*\*/);
});

test("all enum members and color constants are exported", () => {
  const constants = readFileSync(new URL("../src/generated/constants.ts", import.meta.url), "utf8");
  for (const enumeration of api.enums) {
    for (const value of enumeration.values) assert.match(constants, new RegExp(`export const ${value.name}\\b`));
  }
  for (const define of api.defines.filter(({ type }) => type === "COLOR")) {
    assert.match(constants, new RegExp(`export const ${define.name}\\b`));
  }
});

test("unavoidable exclusions state a concrete reason", () => {
  for (const item of report.excluded) {
    assert.ok(item.reason.length >= 20, `${item.name} has a vague exclusion reason`);
    assert.doesNotMatch(item.reason, /todo|later|unimplemented/i);
  }
});
