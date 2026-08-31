import assert from "node:assert/strict";
import test from "node:test";
import { parsePackOutput } from "../scripts/parse-pack-output.mjs";

const packEntry = {
  filename: "scriptc-raylib-1.0.4.tgz",
  files: [{ path: "package.json" }],
};

test("parses npm 11 array output after lifecycle logs", () => {
  const output = `Generated binding files.\n${JSON.stringify([packEntry])}\n`;
  assert.deepEqual(parsePackOutput(output), [packEntry]);
});

test("parses npm 12 keyed-object output after lifecycle logs", () => {
  const manifest = { "scriptc-raylib": packEntry };
  const output = `Generated binding files.\n${JSON.stringify(manifest)}\n`;
  assert.deepEqual(parsePackOutput(output), manifest);
});

test("ignores JSON-like lifecycle noise before the manifest", () => {
  const output = `prepack emitted {not-json}\n${JSON.stringify([packEntry])}\n`;
  assert.deepEqual(parsePackOutput(output), [packEntry]);
});

test("rejects output without a JSON manifest", () => {
  assert.throws(() => parsePackOutput("prepack completed\n"), /no JSON manifest/);
});
