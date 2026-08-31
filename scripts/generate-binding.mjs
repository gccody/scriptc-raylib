import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { raylib as api } from "@raylib/api";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const generatedSrc = join(root, "src", "generated");
const generatedNative = join(root, "native", "generated");
mkdirSync(generatedSrc, { recursive: true });
mkdirSync(generatedNative, { recursive: true });

const simpleStructNames = new Set([
  "Vector2", "Vector3", "Vector4", "Matrix", "Color", "Rectangle",
  "NPatchInfo", "Camera3D", "Camera", "Camera2D", "Transform", "Ray",
  "RayCollision", "BoundingBox", "VrDeviceInfo", "VrStereoConfig",
  "AutomationEvent",
]);
const aliases = new Map(api.aliases.map((item) => [item.name.replace(/^\*/, ""), item.type]));
const structMap = new Map(api.structs.map((item) => [item.name, item]));
const resourceNames = new Set([
  "Image", "Texture", "Texture2D", "TextureCubemap", "RenderTexture",
  "RenderTexture2D", "GlyphInfo", "Font", "Mesh", "Shader", "Material",
  "Model", "ModelAnimation", "Wave", "AudioStream", "Sound", "Music",
  "FilePathList", "AutomationEventList",
]);
const canonicalResource = new Map([
  ["Texture2D", "Texture"], ["TextureCubemap", "Texture"],
  ["RenderTexture2D", "RenderTexture"],
]);

const exclusions = new Map([
  ["GetWindowHandle", "Returns an unmanaged platform pointer."],
  ["SetWindowIcons", "A C Image pointer denotes an array, not one resource handle; the single-icon SetWindowIcon API remains available."],
  ["TraceLog", "The C API is variadic; use traceLogText()."],
  ["SetTraceLogCallback", "va_list callbacks cannot cross the scriptc ABI."],
  ["SetLoadFileDataCallback", "scriptc callbacks cannot return owned byte buffers."],
  ["SetLoadFileTextCallback", "scriptc callbacks cannot return owned C strings."],
  ["SetAudioStreamCallback", "Real-time mutable audio callbacks cannot run safely on the script thread."],
  ["AttachAudioStreamProcessor", "Real-time mutable audio callbacks cannot run safely on the script thread."],
  ["DetachAudioStreamProcessor", "Real-time mutable audio callbacks cannot run safely on the script thread."],
  ["AttachAudioMixedProcessor", "Real-time mutable audio callbacks cannot run safely on the script thread."],
  ["DetachAudioMixedProcessor", "Real-time mutable audio callbacks cannot run safely on the script thread."],
  ["TextFormat", "The C API is variadic; use JavaScript template strings."],
  ["UnloadFileData", "Only paired copied byte results are exposed; arbitrary borrowed TypeScript bytes must never be passed to raylib's allocator free."],
  ["UnloadFileText", "Strings returned to TypeScript are copied and released inside the shim; no manual unload is needed."],
  ["UnloadUTF8", "Strings returned to TypeScript are copied and released inside the shim; no manual unload is needed."],
]);
const customOfficialNames = new Set([
  "LoadRandomSequence", "LoadFileData", "CompressData", "DecompressData",
  "EncodeDataBase64", "DecodeDataBase64", "ComputeMD5", "ComputeSHA1",
  "ComputeSHA256", "ExportImageToMemory", "LoadImageColors", "LoadImagePalette",
  "LoadCodepoints", "CodepointToUTF8", "LoadTextLines", "TextSplit",
  "LoadWaveSamples", "GetPixelColor", "SetPixelColor",
  "SetWindowIcons", "UpdateCamera", "UpdateCameraPro", "CheckCollisionLines",
  "LoadImageAnim", "LoadImageAnimFromMemory", "GetCodepoint", "GetCodepointNext",
  "GetCodepointPrevious", "TextJoin", "TextAppend",
]);
const absorbedOfficialNames = new Set([
  "UnloadRandomSequence", "UnloadFileData", "UnloadFileText", "UnloadImageColors",
  "UnloadImagePalette", "UnloadUTF8", "UnloadCodepoints", "UnloadTextLines",
  "UnloadWaveSamples",
]);
const nullableStringParameters = new Set([
  "LoadShader.vsFileName", "LoadShader.fsFileName",
  "LoadShaderFromMemory.vsCode", "LoadShaderFromMemory.fsCode",
  "LoadAutomationEventList.fileName",
]);

function canonical(type) {
  let value = type.replace(/^const /, "").trim();
  while (aliases.has(value)) value = aliases.get(value);
  return value;
}

function structFields(name, prefix = "", seen = new Set()) {
  name = canonical(name);
  if (seen.has(name)) throw new Error(`recursive value struct ${name}`);
  const definition = structMap.get(name);
  if (!definition) throw new Error(`unknown struct ${name}`);
  const fields = [];
  for (const field of definition.fields) {
    const array = field.type.match(/^(.+)\[(\d+)\]$/);
    if (array) {
      const base = canonical(array[1]);
      const count = Number(array[2]);
      if (isScalar(base)) {
        for (let index = 0; index < count; index += 1) fields.push({ path: `${prefix}${field.name}[${index}]`, type: base });
      } else if (simpleStructNames.has(base)) {
        for (let index = 0; index < count; index += 1) fields.push(...structFields(base, `${prefix}${field.name}[${index}].`, new Set([...seen, name])));
      } else throw new Error(`unsupported array field ${name}.${field.name}: ${field.type}`);
    } else {
      const base = canonical(field.type);
      if (isScalar(base)) fields.push({ path: `${prefix}${field.name}`, type: base });
      else if (simpleStructNames.has(base)) fields.push(...structFields(base, `${prefix}${field.name}.`, new Set([...seen, name])));
      else throw new Error(`unsupported field ${name}.${field.name}: ${field.type}`);
    }
  }
  return fields;
}

function isScalar(type) {
  return ["int", "unsigned int", "unsigned char", "float", "double", "long", "bool"].includes(canonical(type));
}

function abi(type) {
  type = canonical(type);
  if (type === "bool") return "bool";
  if (type === "unsigned char") return "u8";
  if (type === "unsigned int") return "u32";
  if (type === "int") return "i32";
  if (["float", "double", "long"].includes(type)) return "f64";
  throw new Error(`no ABI for ${type}`);
}

function cAbi(type) {
  return { bool: "uint8_t", u8: "uint8_t", u32: "uint32_t", i32: "int32_t", f64: "double" }[abi(type)];
}

function tsScalar(type) {
  return canonical(type) === "bool" ? "boolean" : "number";
}

function lowerName(name) {
  return name[0].toLowerCase() + name.slice(1);
}

function cResource(type) {
  return canonicalResource.get(canonical(type)) ?? canonical(type);
}

function resourceEnum(type) {
  return `SCRL_RESOURCE_${cResource(type).replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase()}`;
}

function tsFieldType(type) {
  const array = type.match(/^(.+)\[(\d+)\]$/);
  if (array) return `[${Array.from({ length: Number(array[2]) }, () => tsFieldType(array[1])).join(", ")}]`;
  const base = canonical(type);
  if (isScalar(base)) return tsScalar(base);
  if (simpleStructNames.has(base)) return base;
  if (resourceNames.has(base)) return cResource(base);
  return "never";
}

const typeLines = [
  "// Generated from @raylib/api 6.0.1. Do not edit by hand.",
  "export type ByteData = Uint8Array;",
];
for (const definition of api.structs) {
  if (simpleStructNames.has(definition.name)) {
    typeLines.push(`export interface ${definition.name} {`);
    for (const field of definition.fields) typeLines.push(`  ${field.name}: ${tsFieldType(field.type)};`);
    typeLines.push("}");
  }
}
typeLines.push("export type Quaternion = Vector4;");
for (const name of [...new Set([...resourceNames].map(cResource))]) {
  typeLines.push(`export interface ${name} { readonly handle: number; readonly kind: \"${name}\"; }`);
}
typeLines.push("export type Texture2D = Texture;", "export type TextureCubemap = Texture;", "export type RenderTexture2D = RenderTexture;", "export type Camera = Camera3D;");

const constantLines = ["// Generated raylib 6.0 constants.", "import type { Color } from \"./types\";"];
for (const enumeration of api.enums) {
  constantLines.push(`export type ${enumeration.name} = number;`);
  for (const value of enumeration.values) constantLines.push(`export const ${value.name}: ${enumeration.name} = ${value.value};`);
}
for (const define of api.defines) {
  if (define.type === "INT" || define.type === "FLOAT") constantLines.push(`export const ${define.name} = ${JSON.stringify(define.value)};`);
  if (define.type === "STRING") constantLines.push(`export const ${define.name} = ${JSON.stringify(define.value)};`);
  if (define.type === "COLOR") {
    const values = [...String(define.value).matchAll(/\d+/g)].map((match) => Number(match[0])).slice(-4);
    constantLines.push(`export const ${define.name}: Color = { r: ${values[0]}, g: ${values[1]}, b: ${values[2]}, a: ${values[3]} };`);
  }
}
for (const define of api.defines) {
  if (define.type === "UNKNOWN" && /^[A-Z][A-Z0-9_]+$/.test(define.name) && /^[A-Z][A-Z0-9_]+$/.test(String(define.value))) {
    constantLines.push(`export const ${define.name} = ${define.value};`);
  }
}

const nativeLines = ["// Generated direct FFI declarations. Do not call these from application code."];
const wrapperLines = [
  "// Generated from the official raylib 6.0 API metadata.",
  "__NATIVE_IMPORT__",
  "export * from \"./types\";",
  "export * from \"./constants\";",
  "import type * as T from \"./types\";",
];
const cLines = [
  "// Generated from @raylib/api 6.0.1. Do not edit by hand.",
  "#include \"raylib_generated.h\"",
  "#include <raylib.h>",
  "#include <stdint.h>",
  "#include <stdio.h>",
  "#include <stdlib.h>",
  "#include <string.h>",
  "#define SCRL_MAX_RESOURCES 8192u",
  "typedef enum ScrlResourceType { SCRL_RESOURCE_NONE = 0,",
];
const resourceTypes = [...new Set([...resourceNames].map(cResource))];
for (const [index, name] of resourceTypes.entries()) cLines.push(`  ${resourceEnum(name)} = ${index + 1},`);
cLines.push(
  "} ScrlResourceType;",
  "typedef union ScrlResourceValue {",
  ...resourceTypes.map((name) => `  ${name} ${lowerName(name)};`),
  "} ScrlResourceValue;",
  "typedef struct ScrlResourceSlot { uint16_t generation; uint16_t type; uint8_t active; uint8_t owned; ScrlResourceValue value; } ScrlResourceSlot;",
  "static ScrlResourceSlot scrl_resources[SCRL_MAX_RESOURCES];",
  "static void scrl_fail(const char *message) { fprintf(stderr, \"scriptc-raylib: %s\\n\", message); abort(); }",
  "static char *scrl_string_copy(const uint8_t *data, size_t length, uint8_t present) {",
  "  if (!present) return NULL;",
  "  if ((data == NULL && length != 0) || memchr(data, '\\0', length) != NULL) scrl_fail(\"invalid FFI string\");",
  "  char *copy = (char *)malloc(length + 1); if (!copy) scrl_fail(\"out of memory\");",
  "  if (length) { memcpy(copy, data, length); }",
  "  copy[length] = '\\0';",
  "  return copy;",
  "}",
  "static uint32_t scrl_resource_add(ScrlResourceType type, ScrlResourceValue value, uint8_t owned) {",
  "  for (uint32_t i = 1; i < SCRL_MAX_RESOURCES; i++) if (!scrl_resources[i].active) {",
  "    ScrlResourceSlot *slot = &scrl_resources[i]; slot->generation = (uint16_t)(slot->generation + 1u); if (!slot->generation) slot->generation = 1;",
  "    slot->type = (uint16_t)type; slot->active = 1; slot->owned = owned; slot->value = value; return ((uint32_t)slot->generation << 16u) | i;",
  "  }",
  "  scrl_fail(\"native resource table is full\"); return 0;",
  "}",
  "static ScrlResourceSlot *scrl_resource_get(uint32_t handle, ScrlResourceType type) {",
  "  uint32_t i = handle & 0xffffu; uint16_t generation = (uint16_t)(handle >> 16u);",
  "  if (!i || i >= SCRL_MAX_RESOURCES) scrl_fail(\"invalid native resource handle\");",
  "  ScrlResourceSlot *slot = &scrl_resources[i]; if (!slot->active || slot->generation != generation || slot->type != type) scrl_fail(\"stale or wrong native resource handle\");",
  "  return slot;",
  "}",
  "static void scrl_resource_release(uint32_t handle, ScrlResourceType type) { ScrlResourceSlot *slot = scrl_resource_get(handle, type); slot->active = 0; slot->type = SCRL_RESOURCE_NONE; }",
  "static void scrl_resource_require_owned(uint32_t handle, ScrlResourceType type) { if (!scrl_resource_get(handle, type)->owned) scrl_fail(\"cannot unload a borrowed raylib resource\"); }",
);

const headerLines = ["#ifndef SCRIPTC_RAYLIB_GENERATED_H", "#define SCRIPTC_RAYLIB_GENERATED_H", "#include <stddef.h>", "#include <stdint.h>"];
const manifest = { ffi_format: 3, functions: [], libraries: [], system_libraries: [] };
const included = [];
const excluded = [];

function countForArray(parameter, fn) {
  const preferred = ["count", "pointCount", "codepointCount", "length", "instances", "glyphCount", "animCount", "materialCount"];
  const candidates = fn.params ?? [];
  let count = candidates.find((item) => preferred.includes(item.name) && canonical(item.type) === "int")?.name;
  if (fn.name === "ImageKernelConvolution") count = "kernelSize*kernelSize";
  return count;
}

function paramPlan(parameter, fn) {
  const raw = parameter.type.trim();
  const noConst = raw.replace(/^const /, "");
  const pointer = noConst.endsWith(" *");
  const base = canonical(pointer ? noConst.slice(0, -2).trim() : noConst);
  const name = parameter.name;
  if (!pointer && isScalar(base)) return { ts: `${name}: ${tsScalar(base)}`, nativeTs: `${name}: ${tsScalar(base)}`, manifest: [abi(base)], c: [`${cAbi(base)} ${name}`], call: [base === "float" ? `(float)${name}` : base === "bool" ? `${name} != 0` : name], invoke: [name] };
  if (!pointer && base === "char") return { unsupported: "Single-byte char parameters need a dedicated string adapter." };
  if (!pointer && base === "void") return { unsupported: "void parameter" };
  if (!pointer && simpleStructNames.has(base)) {
    const fields = structFields(base);
    return {
      ts: `${name}: T.${base}`,
      nativeTs: fields.map((field, index) => `${name}_${index}: ${tsScalar(field.type)}`).join(", "),
      manifest: fields.map((field) => abi(field.type)),
      c: fields.map((field, index) => `${cAbi(field.type)} ${name}_${index}`),
      pre: [`${base} c_${name} = (${base}){0};`, ...fields.map((field, index) => `c_${name}.${field.path} = (${field.type})${name}_${index};`)],
      call: [`c_${name}`],
      invoke: fields.map((field) => `${name}.${field.path}`),
    };
  }
  if (!pointer && resourceNames.has(base)) {
    const canonicalName = cResource(base);
    return { ts: `${name}: T.${canonicalName}`, nativeTs: `${name}: number`, manifest: ["u32"], c: [`uint32_t ${name}`], pre: [`${canonicalName} c_${name} = scrl_resource_get(${name}, ${resourceEnum(base)})->value.${lowerName(canonicalName)};`], call: [`c_${name}`], invoke: [`${name}.handle`] };
  }
  if (raw === "const char *" || raw === "char *") {
    const nullable = nullableStringParameters.has(`${fn.name}.${name}`);
    return { ts: `${name}: ${nullable ? "string | null" : "string"}`, nativeTs: `${name}: string, ${name}Present: boolean`, manifest: ["string", "bool"], c: [`const uint8_t *${name}`, `size_t ${name}_length`, `uint8_t ${name}_present`], pre: [`char *c_${name} = scrl_string_copy(${name}, ${name}_length, ${name}_present);`], call: [`c_${name}`], post: [`free(c_${name});`], invoke: [nullable ? `${name} ?? \"\"` : name, nullable ? `${name} !== null` : "true"] };
  }
  if (pointer && resourceNames.has(base)) {
    const canonicalName = cResource(base);
    return { ts: `${name}: T.${canonicalName}`, nativeTs: `${name}: number`, manifest: ["u32"], c: [`uint32_t ${name}`], pre: [`${canonicalName} *c_${name} = &scrl_resource_get(${name}, ${resourceEnum(base)})->value.${lowerName(canonicalName)};`], call: [`c_${name}`], invoke: [`${name}.handle`] };
  }
  if (pointer && raw.startsWith("const ") && base !== "unsigned char" && (isScalar(base) || simpleStructNames.has(base))) {
    const count = countForArray(parameter, fn);
    if (!count) return { unsupported: `No array length parameter was found for ${raw}.` };
    const fields = isScalar(base) ? [{ path: "", type: base }] : structFields(base);
    const itemTs = isScalar(base) ? tsScalar(base) : `T.${base}`;
    const callbackName = `${name}_read`;
    return {
      ts: `${name}: ReadonlyArray<${itemTs}>`,
      nativeTs: `${callbackName}: (index: number, component: number) => number`,
      manifest: [{ callback: { id: callbackName, params: ["i32", "i32", { context: callbackName }], returns: "f64", lifetime: "call" } }, { context: callbackName }],
      c: [`double (*${callbackName})(int32_t, int32_t, void *)`, `void *${callbackName}_context`],
      pre: [
        `if ((${count}) < 0) scrl_fail(\"negative array length\");`,
        `${base} *c_${name} = (${base} *)calloc((size_t)(${count}), sizeof(${base}));`,
        `if ((${count}) > 0 && !c_${name}) scrl_fail(\"out of memory\");`,
        `for (int32_t i = 0; i < (${count}); i++) {`,
        ...fields.map((field, index) => `  c_${name}[i]${field.path ? `.${field.path}` : ""} = (${field.type})${callbackName}(i, ${index}, ${callbackName}_context);`),
        `}`,
      ],
      call: [`c_${name}`],
      post: [`free(c_${name});`],
      invoke: [`(index: number, component: number): number => { const item = ${name}[index]; if (item === undefined) return 0; ${isScalar(base) ? "return item;" : `switch (component) { ${fields.map((field, index) => `case ${index}: return item.${field.path};`).join(" ")} default: return 0; }`} }`],
    };
  }
  if ((raw === "const void *" || raw === "void *" || raw === "const unsigned char *" || raw === "unsigned char *") && parameter.name !== "ptr" && parameter.name !== "srcPtr" && parameter.name !== "dstPtr") {
    const cast = raw.includes("unsigned char") ? (raw.startsWith("const ") ? "const unsigned char *" : "unsigned char *") : (raw.startsWith("const ") ? "const void *" : "void *");
    const hasDataSize = (fn.params ?? []).some((item) => item.name === "dataSize" && canonical(item.type) === "int");
    const lengthCheck = hasDataSize ? [`if (dataSize < 0 || (size_t)dataSize > ${name}_length) scrl_fail(\"byte count exceeds Uint8Array length\");`] : [`(void)${name}_length;`];
    return { ts: `${name}: Uint8Array`, nativeTs: `${name}: Uint8Array`, manifest: ["bytes"], c: [`const uint8_t *${name}`, `size_t ${name}_length`], pre: lengthCheck, call: [`(${cast})${name}`], invoke: [name] };
  }
  return { unsupported: `Unsupported parameter type ${raw}.` };
}

function returnPlan(type, functionName) {
  const raw = type.trim();
  const pointer = raw.replace(/^const /, "").endsWith(" *");
  const base = canonical(pointer ? raw.replace(/^const /, "").slice(0, -2).trim() : raw);
  if (raw === "void") return { ts: "void", manifestReturn: "void", cReturn: "void", bodyCall: (call) => [`${call};`], finish: [] };
  if (!pointer && isScalar(base)) return { ts: tsScalar(base), manifestReturn: abi(base), cReturn: cAbi(base), bodyCall: (call) => [`${cAbi(base)} scrl_result = (${cAbi(base)})(${call});`], finish: ["return scrl_result;"] };
  if (!pointer && resourceNames.has(base)) {
    const canonicalName = cResource(base);
    const borrowed = new Set(["GetFontDefault", "GetShapesTexture"]).has(functionName) ? 0 : 1;
    return { ts: `T.${canonicalName}`, manifestReturn: "u32", cReturn: "uint32_t", wrap: (expr) => `{ handle: ${expr}, kind: \"${canonicalName}\" }`, bodyCall: (call) => [`${canonicalName} result = ${call};`, "ScrlResourceValue value = {0};", `value.${lowerName(canonicalName)} = result;`, `uint32_t scrl_result = scrl_resource_add(${resourceEnum(base)}, value, ${borrowed});`], finish: ["return scrl_result;"] };
  }
  if (!pointer && simpleStructNames.has(base)) {
    const fields = structFields(base);
    return { ts: `T.${base}`, manifestReturn: "void", cReturn: "void", callback: fields, bodyCall: (call) => [`${base} result = ${call};`, `callback(${fields.map((field) => `result.${field.path}`).join(", ")}${fields.length ? ", " : ""}context);`], finish: [] };
  }
  if (raw === "const char *" || raw === "char *") return { ts: "string | null", manifestReturn: "bool", cReturn: "uint8_t", stringCallback: true, bodyCall: (call) => [`const char *result = ${call};`], finish: ["if (!result) return 0;", "callback(result, context);", "return 1;"] };
  return { unsupported: `Unsupported return type ${raw}.` };
}

for (const fn of api.functions) {
  if (customOfficialNames.has(fn.name)) continue;
  if (absorbedOfficialNames.has(fn.name)) continue;
  const forced = exclusions.get(fn.name);
  const params = (fn.params ?? []).map((parameter) => paramPlan(parameter, fn));
  if (/^Unload/.test(fn.name)) {
    for (let index = 0; index < (fn.params ?? []).length; index += 1) {
      const rawType = fn.params[index].type.replace(/^const /, "").trim();
      if (!rawType.endsWith(" *") && resourceNames.has(canonical(rawType)) && params[index] && !params[index].unsupported) {
        (params[index].pre ??= []).push(`scrl_resource_require_owned(${fn.params[index].name}, ${resourceEnum(rawType)});`);
        (params[index].post ??= []).push(`scrl_resource_release(${fn.params[index].name}, ${resourceEnum(rawType)});`);
      }
    }
  }
  const result = returnPlan(fn.returnType, fn.name);
  const reason = forced ?? params.find((item) => item.unsupported)?.unsupported ?? result.unsupported;
  if (reason) { excluded.push({ name: fn.name, reason }); continue; }

  const nativeName = `native${fn.name}`;
  const symbol = `scrl_api_${fn.name}`;
  const publicName = lowerName(fn.name);
  const tsParams = params.map((plan) => plan.ts).join(", ");
  const rawTsParams = params.flatMap((plan) => plan.nativeTs ? plan.nativeTs.split(", ") : []).filter(Boolean);
  const manifestParams = params.flatMap((plan) => plan.manifest);
  const cParams = params.flatMap((plan) => plan.c);
  const callbackId = `${publicName}Result`;
  if (result.callback) {
    rawTsParams.push(`callback: (${result.callback.map((field, i) => `value${i}: ${tsScalar(field.type)}`).join(", ")}) => void`);
    manifestParams.push({ callback: { id: callbackId, params: [...result.callback.map((field) => abi(field.type)), { context: callbackId }], returns: "void", lifetime: "call" } }, { context: callbackId });
    cParams.push(`void (*callback)(${result.callback.map((field) => cAbi(field.type)).join(", ")}${result.callback.length ? ", " : ""}void *)`, "void *context");
  } else if (result.stringCallback) {
    rawTsParams.push("callback: (value: string) => void");
    manifestParams.push({ callback: { id: callbackId, params: ["cstring", { context: callbackId }], returns: "void", lifetime: "call" } }, { context: callbackId });
    cParams.push("void (*callback)(const char *, void *)", "void *context");
  }
  nativeLines.push(`export declare function ${nativeName}(${rawTsParams.join(", ")}): ${result.manifestReturn === "void" ? "void" : result.manifestReturn === "bool" ? "boolean" : "number"};`);
  manifest.functions.push({ name: nativeName, symbol, params: manifestParams, returns: result.manifestReturn });
  headerLines.push(`${result.cReturn} ${symbol}(${cParams.length ? cParams.join(", ") : "void"});`);
  cLines.push(`${result.cReturn} ${symbol}(${cParams.length ? cParams.join(", ") : "void"}) {`);
  for (const plan of params) for (const line of plan.pre ?? []) cLines.push(`  ${line}`);
  const call = `${fn.name}(${params.flatMap((plan) => plan.call).join(", ")})`;
  for (const line of result.bodyCall(call)) cLines.push(`  ${line}`);
  for (const plan of params.slice().reverse()) for (const line of plan.post ?? []) cLines.push(`  ${line}`);
  for (const line of result.finish ?? []) cLines.push(`  ${line}`);
  cLines.push("}");

  const invokeArgs = params.flatMap((plan) => plan.invoke).join(", ");
  wrapperLines.push(`export function ${publicName}(${tsParams}): ${result.ts} {`);
  if (result.callback) {
    const defaults = result.callback.map((field) => canonical(field.type) === "bool" ? "false" : "0");
    const values = result.callback.map((field, index) => `value${index}`);
    const fieldAssignments = result.callback.map((field, index) => `${field.path}: ${values[index]}`);
    // Nested value structs are built as a flat object expression by assigning into a zero-shaped value in the callback.
    wrapperLines.push(`  let result = ${defaultValue(baseForReturn(fn.returnType))};`);
    wrapperLines.push(`  native.${nativeName}(${invokeArgs}${invokeArgs ? ", " : ""}(${values.map((value, index) => `${value}: ${tsScalar(result.callback[index].type)}`).join(", ")}) => {`);
    wrapperLines.push(...assignmentLines("result", baseForReturn(fn.returnType), result.callback));
    wrapperLines.push("  });", "  return result;", "}");
  } else if (result.stringCallback) {
    wrapperLines.push("  let result: string | null = null;", `  native.${nativeName}(${invokeArgs}${invokeArgs ? ", " : ""}(value: string) => { result = value; });`, "  return result;", "}");
  } else if (result.ts === "void") wrapperLines.push(`  native.${nativeName}(${invokeArgs});`, "}");
  else {
    const rawCall = `native.${nativeName}(${invokeArgs})`;
    wrapperLines.push(`  return ${result.wrap ? result.wrap(rawCall) : rawCall};`, "}");
  }
  included.push(fn.name);
}

function baseForReturn(type) { return canonical(type); }
function defaultValue(type) {
  const definition = structMap.get(type);
  const parts = definition.fields.map((field) => {
    const array = field.type.match(/^(.+)\[(\d+)\]$/);
    if (array) return `${field.name}: [${Array.from({ length: Number(array[2]) }, () => isScalar(array[1]) ? (canonical(array[1]) === "bool" ? "false" : "0") : defaultValue(canonical(array[1]))).join(", ")}]`;
    const base = canonical(field.type);
    return `${field.name}: ${isScalar(base) ? (base === "bool" ? "false" : "0") : defaultValue(base)}`;
  });
  return `{ ${parts.join(", ")} } as T.${type}`;
}
function assignmentLines(target, type, fields) {
  return fields.map((field, index) => `    ${target}.${field.path} = value${index};`);
}

// Safe substitutes for the two variadic APIs.
nativeLines.push("export declare function nativeTraceLogText(level: number, text: string): void;");
manifest.functions.push({ name: "nativeTraceLogText", symbol: "scrl_trace_log_text", params: ["i32", "string"], returns: "void" });
wrapperLines.push("export function traceLogText(level: number, text: string): void { native.nativeTraceLogText(level, text); }");
included.push("traceLogText (safe TraceLog adapter)");

function addCustomBinding(name, symbol, params, returns, nativeDeclaration, wrapper, header, cBody) {
  nativeLines.push(nativeDeclaration);
  wrapperLines.push(wrapper);
  headerLines.push(header);
  cLines.push(cBody);
  manifest.functions.push({ name, symbol, params, returns });
}

addCustomBinding(
  "nativeLoadFileDataCopy", "scrl_custom_load_file_data", ["string", "bool", { callback: { id: "data", params: ["bytes", { context: "data" }], returns: "void", lifetime: "call" } }, { context: "data" }], "bool",
  "export declare function nativeLoadFileDataCopy(fileName: string, present: boolean, callback: (data: Uint8Array) => void): boolean;",
  "export function loadFileData(fileName: string): Uint8Array | null { let result: Uint8Array | null = null; native.nativeLoadFileDataCopy(fileName, true, (data: Uint8Array) => { result = data; }); return result; }",
  "uint8_t scrl_custom_load_file_data(const uint8_t *, size_t, uint8_t, void (*)(const uint8_t *, size_t, void *), void *);",
  `uint8_t scrl_custom_load_file_data(const uint8_t *name, size_t length, uint8_t present, void (*callback)(const uint8_t *, size_t, void *), void *context) {
  char *file = scrl_string_copy(name, length, present); int size = 0; unsigned char *data = LoadFileData(file, &size); free(file);
  if (!data) return 0;
  callback(data, (size_t)size, context);
  UnloadFileData(data);
  return 1;
}`,
);

function addByteTransform(publicName, nativeName, cName, rayName, inputName, sizeName, outputKind) {
  const stringInput = rayName === "DecodeDataBase64";
  const callbackClass = outputKind === "string" ? "string" : "bytes";
  const callbackTs = outputKind === "string" ? "string" : "Uint8Array";
  const cCallback = outputKind === "string" ? "const uint8_t *, size_t" : "const uint8_t *, size_t";
  const params = stringInput
    ? ["string", "bool", { callback: { id: "result", params: [callbackClass, { context: "result" }], returns: "void", lifetime: "call" } }, { context: "result" }]
    : ["bytes", "i32", { callback: { id: "result", params: [callbackClass, { context: "result" }], returns: "void", lifetime: "call" } }, { context: "result" }];
  const nativeDecl = stringInput
    ? `export declare function ${nativeName}(text: string, present: boolean, callback: (value: ${callbackTs}) => void): boolean;`
    : `export declare function ${nativeName}(data: Uint8Array, dataSize: number, callback: (value: ${callbackTs}) => void): boolean;`;
  const wrapper = stringInput
    ? `export function ${publicName}(text: string): ${callbackTs} | null { let result: ${callbackTs} | null = null; native.${nativeName}(text, true, (value: ${callbackTs}) => { result = value; }); return result; }`
    : `export function ${publicName}(data: Uint8Array): ${callbackTs} | null { let result: ${callbackTs} | null = null; native.${nativeName}(data, data.length, (value: ${callbackTs}) => { result = value; }); return result; }`;
  const cParams = stringInput
    ? `const uint8_t *text, size_t text_length, uint8_t present, void (*callback)(${cCallback}, void *), void *context`
    : `const uint8_t *data, size_t data_length, int32_t data_size, void (*callback)(${cCallback}, void *), void *context`;
  const setup = stringInput ? "char *input = scrl_string_copy(text, text_length, present);" : "if (data_size < 0 || (size_t)data_size > data_length) scrl_fail(\"invalid byte length\");";
  const input = stringInput ? "input" : `(const unsigned char *)data`;
  const call = `${rayName}(${input}${stringInput ? "" : ", data_size"}, &output_size)`;
  const cleanupInput = stringInput ? "free(input);" : "";
  const callbackLength = outputKind === "string" ? "(size_t)(output_size > 0 ? output_size - 1 : 0)" : "(size_t)output_size";
  addCustomBinding(nativeName, cName, params, "bool", nativeDecl, wrapper,
    `uint8_t ${cName}(${cParams});`,
    `uint8_t ${cName}(${cParams}) { ${setup} int output_size = 0; ${outputKind === "string" ? "char" : "unsigned char"} *result = ${call}; ${cleanupInput} if (!result) return 0; callback((const uint8_t *)result, ${callbackLength}, context); MemFree(result); return 1; }`);
}
addByteTransform("compressData", "nativeCompressDataCopy", "scrl_custom_compress_data", "CompressData", "data", "dataSize", "bytes");
addByteTransform("decompressData", "nativeDecompressDataCopy", "scrl_custom_decompress_data", "DecompressData", "data", "compDataSize", "bytes");
addByteTransform("encodeDataBase64", "nativeEncodeDataBase64Copy", "scrl_custom_encode_base64", "EncodeDataBase64", "data", "dataSize", "string");
addByteTransform("decodeDataBase64", "nativeDecodeDataBase64Copy", "scrl_custom_decode_base64", "DecodeDataBase64", "text", "", "bytes");

for (const [publicName, nativeName, symbol, rayName, words] of [
  ["computeMD5", "nativeComputeMD5", "scrl_custom_compute_md5", "ComputeMD5", 4],
  ["computeSHA1", "nativeComputeSHA1", "scrl_custom_compute_sha1", "ComputeSHA1", 5],
  ["computeSHA256", "nativeComputeSHA256", "scrl_custom_compute_sha256", "ComputeSHA256", 8],
]) {
  addCustomBinding(nativeName, symbol, ["bytes", "i32", { callback: { id: "word", params: ["i32", "u32", { context: "word" }], returns: "void", lifetime: "call" } }, { context: "word" }], "void",
    `export declare function ${nativeName}(data: Uint8Array, size: number, callback: (index: number, word: number) => void): void;`,
    `export function ${publicName}(data: Uint8Array): number[] { const result: number[] = []; native.${nativeName}(data, data.length, (_index: number, word: number) => { result.push(word); }); return result; }`,
    `void ${symbol}(const uint8_t *, size_t, int32_t, void (*)(int32_t, uint32_t, void *), void *);`,
    `void ${symbol}(const uint8_t *data, size_t length, int32_t size, void (*callback)(int32_t, uint32_t, void *), void *context) { if (size < 0 || (size_t)size > length) scrl_fail("invalid byte length"); unsigned int *result = ${rayName}((unsigned char *)data, size); for (int32_t i = 0; i < ${words}; i++) callback(i, result[i], context); }`);
}

addCustomBinding("nativeLoadRandomSequenceCopy", "scrl_custom_random_sequence", ["u32", "i32", "i32", { callback: { id: "item", params: ["i32", "i32", { context: "item" }], returns: "void", lifetime: "call" } }, { context: "item" }], "bool",
  "export declare function nativeLoadRandomSequenceCopy(count: number, min: number, max: number, callback: (index: number, value: number) => void): boolean;",
  "export function loadRandomSequence(count: number, min: number, max: number): number[] { const result: number[] = []; native.nativeLoadRandomSequenceCopy(count, min, max, (_index: number, value: number) => { result.push(value); }); return result; }",
  "uint8_t scrl_custom_random_sequence(uint32_t, int32_t, int32_t, void (*)(int32_t, int32_t, void *), void *);",
  "uint8_t scrl_custom_random_sequence(uint32_t count, int32_t min, int32_t max, void (*callback)(int32_t, int32_t, void *), void *context) { int *values = LoadRandomSequence(count, min, max); if (!values && count) return 0; for (uint32_t i = 0; i < count; i++) callback((int32_t)i, values[i], context); UnloadRandomSequence(values); return 1; }",
);

addCustomBinding("nativeExportImageToMemoryCopy", "scrl_custom_export_image_memory", ["u32", "string", "bool", { callback: { id: "data", params: ["bytes", { context: "data" }], returns: "void", lifetime: "call" } }, { context: "data" }], "bool",
  "export declare function nativeExportImageToMemoryCopy(image: number, fileType: string, present: boolean, callback: (data: Uint8Array) => void): boolean;",
  "export function exportImageToMemory(image: T.Image, fileType: string): Uint8Array | null { let result: Uint8Array | null = null; native.nativeExportImageToMemoryCopy(image.handle, fileType, true, (data: Uint8Array) => { result = data; }); return result; }",
  "uint8_t scrl_custom_export_image_memory(uint32_t, const uint8_t *, size_t, uint8_t, void (*)(const uint8_t *, size_t, void *), void *);",
  "uint8_t scrl_custom_export_image_memory(uint32_t handle, const uint8_t *type, size_t length, uint8_t present, void (*callback)(const uint8_t *, size_t, void *), void *context) { Image image = scrl_resource_get(handle, SCRL_RESOURCE_IMAGE)->value.image; char *file_type = scrl_string_copy(type, length, present); int size = 0; unsigned char *data = ExportImageToMemory(image, file_type, &size); free(file_type); if (!data) return 0; callback(data, (size_t)size, context); MemFree(data); return 1; }",
);

addCustomBinding("nativeLoadImageColorsCopy", "scrl_custom_image_colors", ["u32", { callback: { id: "color", params: ["u8", "u8", "u8", "u8", { context: "color" }], returns: "void", lifetime: "call" } }, { context: "color" }], "bool",
  "export declare function nativeLoadImageColorsCopy(image: number, callback: (r: number, g: number, b: number, a: number) => void): boolean;",
  "export function loadImageColors(image: T.Image): T.Color[] { const result: T.Color[] = []; native.nativeLoadImageColorsCopy(image.handle, (r: number, g: number, b: number, a: number) => { result.push({ r: r, g: g, b: b, a: a }); }); return result; }",
  "uint8_t scrl_custom_image_colors(uint32_t, void (*)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *);",
  "uint8_t scrl_custom_image_colors(uint32_t handle, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) { Image image = scrl_resource_get(handle, SCRL_RESOURCE_IMAGE)->value.image; Color *colors = LoadImageColors(image); if (!colors) return 0; int count = image.width*image.height; for (int i = 0; i < count; i++) callback(colors[i].r, colors[i].g, colors[i].b, colors[i].a, context); UnloadImageColors(colors); return 1; }",
);

addCustomBinding("nativeLoadImagePaletteCopy", "scrl_custom_image_palette", ["u32", "i32", { callback: { id: "color", params: ["u8", "u8", "u8", "u8", { context: "color" }], returns: "void", lifetime: "call" } }, { context: "color" }], "bool",
  "export declare function nativeLoadImagePaletteCopy(image: number, maximum: number, callback: (r: number, g: number, b: number, a: number) => void): boolean;",
  "export function loadImagePalette(image: T.Image, maximum: number): T.Color[] { const result: T.Color[] = []; native.nativeLoadImagePaletteCopy(image.handle, maximum, (r: number, g: number, b: number, a: number) => { result.push({ r: r, g: g, b: b, a: a }); }); return result; }",
  "uint8_t scrl_custom_image_palette(uint32_t, int32_t, void (*)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *);",
  "uint8_t scrl_custom_image_palette(uint32_t handle, int32_t maximum, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) { Image image = scrl_resource_get(handle, SCRL_RESOURCE_IMAGE)->value.image; int count = 0; Color *colors = LoadImagePalette(image, maximum, &count); if (!colors) return 0; for (int i = 0; i < count; i++) callback(colors[i].r, colors[i].g, colors[i].b, colors[i].a, context); UnloadImagePalette(colors); return 1; }",
);

addCustomBinding("nativeLoadCodepointsCopy", "scrl_custom_load_codepoints", ["string", "bool", { callback: { id: "codepoint", params: ["i32", "i32", { context: "codepoint" }], returns: "void", lifetime: "call" } }, { context: "codepoint" }], "void",
  "export declare function nativeLoadCodepointsCopy(text: string, present: boolean, callback: (index: number, codepoint: number) => void): void;",
  "export function loadCodepoints(text: string): number[] { const result: number[] = []; native.nativeLoadCodepointsCopy(text, true, (_index: number, codepoint: number) => { result.push(codepoint); }); return result; }",
  "void scrl_custom_load_codepoints(const uint8_t *, size_t, uint8_t, void (*)(int32_t, int32_t, void *), void *);",
  "void scrl_custom_load_codepoints(const uint8_t *text, size_t length, uint8_t present, void (*callback)(int32_t, int32_t, void *), void *context) { char *input = scrl_string_copy(text, length, present); int count = 0; int *values = LoadCodepoints(input, &count); free(input); for (int i = 0; i < count; i++) callback(i, values[i], context); UnloadCodepoints(values); }",
);

addCustomBinding("nativeCodepointToUTF8Copy", "scrl_custom_codepoint_utf8", ["i32", { callback: { id: "text", params: ["string", { context: "text" }], returns: "void", lifetime: "call" } }, { context: "text" }], "void",
  "export declare function nativeCodepointToUTF8Copy(codepoint: number, callback: (text: string) => void): void;",
  "export function codepointToUTF8(codepoint: number): string { let result = \"\"; native.nativeCodepointToUTF8Copy(codepoint, (text: string) => { result = text; }); return result; }",
  "void scrl_custom_codepoint_utf8(int32_t, void (*)(const uint8_t *, size_t, void *), void *);",
  "void scrl_custom_codepoint_utf8(int32_t codepoint, void (*callback)(const uint8_t *, size_t, void *), void *context) { int size = 0; const char *text = CodepointToUTF8(codepoint, &size); callback((const uint8_t *)text, (size_t)size, context); }",
);

addCustomBinding("nativeLoadTextLinesCopy", "scrl_custom_text_lines", ["string", "bool", { callback: { id: "line", params: ["i32", "cstring", { context: "line" }], returns: "void", lifetime: "call" } }, { context: "line" }], "void",
  "export declare function nativeLoadTextLinesCopy(text: string, present: boolean, callback: (index: number, line: string) => void): void;",
  "export function loadTextLines(text: string): string[] { const result: string[] = []; native.nativeLoadTextLinesCopy(text, true, (_index: number, line: string) => { result.push(line); }); return result; }",
  "void scrl_custom_text_lines(const uint8_t *, size_t, uint8_t, void (*)(int32_t, const char *, void *), void *);",
  "void scrl_custom_text_lines(const uint8_t *text, size_t length, uint8_t present, void (*callback)(int32_t, const char *, void *), void *context) { char *input = scrl_string_copy(text, length, present); int count = 0; char **lines = LoadTextLines(input, &count); free(input); for (int i = 0; i < count; i++) callback(i, lines[i], context); UnloadTextLines(lines, count); }",
);

addCustomBinding("nativeTextSplitCopy", "scrl_custom_text_split", ["string", "bool", "string", { callback: { id: "part", params: ["i32", "cstring", { context: "part" }], returns: "void", lifetime: "call" } }, { context: "part" }], "void",
  "export declare function nativeTextSplitCopy(text: string, present: boolean, delimiter: string, callback: (index: number, part: string) => void): void;",
  "export function textSplit(text: string, delimiter: string): string[] { const result: string[] = []; native.nativeTextSplitCopy(text, true, delimiter, (_index: number, part: string) => { result.push(part); }); return result; }",
  "void scrl_custom_text_split(const uint8_t *, size_t, uint8_t, const uint8_t *, size_t, void (*)(int32_t, const char *, void *), void *);",
  "void scrl_custom_text_split(const uint8_t *text, size_t length, uint8_t present, const uint8_t *delimiter, size_t delimiter_length, void (*callback)(int32_t, const char *, void *), void *context) { if (delimiter_length != 1) scrl_fail(\"textSplit delimiter must be one UTF-8 byte\"); char *input = scrl_string_copy(text, length, present); int count = 0; char **parts = TextSplit(input, (char)delimiter[0], &count); for (int i = 0; i < count; i++) callback(i, parts[i], context); free(input); }",
);

addCustomBinding("nativeLoadWaveSamplesCopy", "scrl_custom_wave_samples", ["u32", { callback: { id: "sample", params: ["i32", "f64", { context: "sample" }], returns: "void", lifetime: "call" } }, { context: "sample" }], "bool",
  "export declare function nativeLoadWaveSamplesCopy(wave: number, callback: (index: number, sample: number) => void): boolean;",
  "export function loadWaveSamples(wave: T.Wave): number[] { const result: number[] = []; native.nativeLoadWaveSamplesCopy(wave.handle, (_index: number, sample: number) => { result.push(sample); }); return result; }",
  "uint8_t scrl_custom_wave_samples(uint32_t, void (*)(int32_t, double, void *), void *);",
  "uint8_t scrl_custom_wave_samples(uint32_t handle, void (*callback)(int32_t, double, void *), void *context) { Wave wave = scrl_resource_get(handle, SCRL_RESOURCE_WAVE)->value.wave; float *samples = LoadWaveSamples(wave); if (!samples) return 0; uint64_t count = (uint64_t)wave.frameCount*wave.channels; if (count > INT32_MAX) { UnloadWaveSamples(samples); scrl_fail(\"wave sample count is too large\"); } for (int32_t i = 0; i < (int32_t)count; i++) callback(i, samples[i], context); UnloadWaveSamples(samples); return 1; }",
);

addCustomBinding("nativeGetPixelColorCopy", "scrl_custom_get_pixel_color", ["bytes", "i32", { callback: { id: "color", params: ["u8", "u8", "u8", "u8", { context: "color" }], returns: "void", lifetime: "call" } }, { context: "color" }], "void",
  "export declare function nativeGetPixelColorCopy(data: Uint8Array, format: number, callback: (r: number, g: number, b: number, a: number) => void): void;",
  "export function getPixelColor(data: Uint8Array, format: number): T.Color { let result: T.Color = { r: 0, g: 0, b: 0, a: 0 }; native.nativeGetPixelColorCopy(data, format, (r: number, g: number, b: number, a: number) => { result = { r: r, g: g, b: b, a: a }; }); return result; }",
  "void scrl_custom_get_pixel_color(const uint8_t *, size_t, int32_t, void (*)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *);",
  "void scrl_custom_get_pixel_color(const uint8_t *data, size_t length, int32_t format, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) { int required = GetPixelDataSize(1, 1, format); if (required < 0 || (size_t)required > length) scrl_fail(\"pixel buffer is too small\"); Color color = GetPixelColor((void *)data, format); callback(color.r, color.g, color.b, color.a, context); }",
);

addCustomBinding("nativeSetPixelColorCopy", "scrl_custom_set_pixel_color", ["bytes", "u8", "u8", "u8", "u8", "i32", { callback: { id: "data", params: ["bytes", { context: "data" }], returns: "void", lifetime: "call" } }, { context: "data" }], "void",
  "export declare function nativeSetPixelColorCopy(data: Uint8Array, r: number, g: number, b: number, a: number, format: number, callback: (result: Uint8Array) => void): void;",
  "export function setPixelColor(data: Uint8Array, color: T.Color, format: number): Uint8Array { let result: Uint8Array = new Uint8Array(0); native.nativeSetPixelColorCopy(data, color.r, color.g, color.b, color.a, format, (value: Uint8Array) => { result = value; }); return result; }",
  "void scrl_custom_set_pixel_color(const uint8_t *, size_t, uint8_t, uint8_t, uint8_t, uint8_t, int32_t, void (*)(const uint8_t *, size_t, void *), void *);",
  "void scrl_custom_set_pixel_color(const uint8_t *data, size_t length, uint8_t r, uint8_t g, uint8_t b, uint8_t a, int32_t format, void (*callback)(const uint8_t *, size_t, void *), void *context) { int required = GetPixelDataSize(1, 1, format); if (required < 0 || (size_t)required > length) scrl_fail(\"pixel buffer is too small\"); uint8_t *copy = (uint8_t *)malloc(length); if (!copy && length) scrl_fail(\"out of memory\"); memcpy(copy, data, length); SetPixelColor(copy, (Color){r,g,b,a}, format); callback(copy, length, context); free(copy); }",
);

typeLines.push(
  "export interface CollisionLinesResult { hit: boolean; point: Vector2; }",
  "export interface ImageAnimation { image: Image; frames: number; }",
  "export interface CodepointResult { codepoint: number; size: number; }",
  "export interface TextAppendResult { text: string; position: number; }",
);

addCustomBinding("nativeSetWindowIconsCopy", "scrl_custom_set_window_icons", ["i32", { callback: { id: "image", params: ["i32", { context: "image" }], returns: "u32", lifetime: "call" } }, { context: "image" }], "void",
  "export declare function nativeSetWindowIconsCopy(count: number, callback: (index: number) => number): void;",
  "export function setWindowIcons(images: ReadonlyArray<T.Image>): void { nativeSetWindowIconsCopy(images.length, (index: number): number => { const image = images[index]; return image === undefined ? 0 : image.handle; }); }",
  "void scrl_custom_set_window_icons(int32_t, uint32_t (*)(int32_t, void *), void *);",
  "void scrl_custom_set_window_icons(int32_t count, uint32_t (*callback)(int32_t, void *), void *context) { if (count < 0) scrl_fail(\"negative image count\"); Image *images = (Image *)calloc((size_t)count, sizeof(Image)); if (!images && count) scrl_fail(\"out of memory\"); for (int32_t i = 0; i < count; i++) images[i] = scrl_resource_get(callback(i, context), SCRL_RESOURCE_IMAGE)->value.image; SetWindowIcons(images, count); free(images); }",
);

const cameraCallback = { callback: { id: "camera", params: ["f64", "f64", "f64", "f64", "f64", "f64", "f64", "f64", "f64", "f64", "i32", { context: "camera" }], returns: "void", lifetime: "call" } };
const cameraNativeParameters = "px: number, py: number, pz: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number, fovy: number, projection: number";
const cameraInput = "camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection";
const cameraCallbackTs = "(px: number, py: number, pz: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number, fovy: number, projection: number) => void";
const cameraAssign = "result = { position: { x: px, y: py, z: pz }, target: { x: tx, y: ty, z: tz }, up: { x: ux, y: uy, z: uz }, fovy: fovy, projection: projection };";
const cameraCParams = "double px, double py, double pz, double tx, double ty, double tz, double ux, double uy, double uz, double fovy, int32_t projection";
const cameraCInit = "Camera camera = { .position = {(float)px,(float)py,(float)pz}, .target = {(float)tx,(float)ty,(float)tz}, .up = {(float)ux,(float)uy,(float)uz}, .fovy = (float)fovy, .projection = projection };";
const cameraCCallback = "void (*callback)(double,double,double,double,double,double,double,double,double,double,int32_t,void *), void *context";
const cameraCEmit = "callback(camera.position.x,camera.position.y,camera.position.z,camera.target.x,camera.target.y,camera.target.z,camera.up.x,camera.up.y,camera.up.z,camera.fovy,camera.projection,context);";
addCustomBinding("nativeUpdateCameraCopy", "scrl_custom_update_camera", [...Array(10).fill("f64"), "i32", "i32", cameraCallback, { context: "camera" }], "void",
  `export declare function nativeUpdateCameraCopy(${cameraNativeParameters}, mode: number, callback: ${cameraCallbackTs}): void;`,
  `export function updateCamera(camera: T.Camera, mode: number): T.Camera { let result = camera; nativeUpdateCameraCopy(${cameraInput}, mode, (px: number, py: number, pz: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number, fovy: number, projection: number) => { ${cameraAssign} }); return result; }`,
  `void scrl_custom_update_camera(${cameraCParams}, int32_t, ${cameraCCallback});`,
  `void scrl_custom_update_camera(${cameraCParams}, int32_t mode, ${cameraCCallback}) { ${cameraCInit} UpdateCamera(&camera, mode); ${cameraCEmit} }`);
addCustomBinding("nativeUpdateCameraProCopy", "scrl_custom_update_camera_pro", [...Array(10).fill("f64"), "i32", ...Array(7).fill("f64"), cameraCallback, { context: "camera" }], "void",
  `export declare function nativeUpdateCameraProCopy(${cameraNativeParameters}, mx: number, my: number, mz: number, rx: number, ry: number, rz: number, zoom: number, callback: ${cameraCallbackTs}): void;`,
  `export function updateCameraPro(camera: T.Camera, movement: T.Vector3, rotation: T.Vector3, zoom: number): T.Camera { let result = camera; nativeUpdateCameraProCopy(${cameraInput}, movement.x, movement.y, movement.z, rotation.x, rotation.y, rotation.z, zoom, (px: number, py: number, pz: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number, fovy: number, projection: number) => { ${cameraAssign} }); return result; }`,
  `void scrl_custom_update_camera_pro(${cameraCParams}, double,double,double,double,double,double,double, ${cameraCCallback});`,
  `void scrl_custom_update_camera_pro(${cameraCParams}, double mx,double my,double mz,double rx,double ry,double rz,double zoom, ${cameraCCallback}) { ${cameraCInit} UpdateCameraPro(&camera, (Vector3){(float)mx,(float)my,(float)mz}, (Vector3){(float)rx,(float)ry,(float)rz}, (float)zoom); ${cameraCEmit} }`);

addCustomBinding("nativeCheckCollisionLinesCopy", "scrl_custom_collision_lines", [...Array(8).fill("f64"), { callback: { id: "result", params: ["bool", "f64", "f64", { context: "result" }], returns: "void", lifetime: "call" } }, { context: "result" }], "void",
  "export declare function nativeCheckCollisionLinesCopy(a0: number, a1: number, b0: number, b1: number, c0: number, c1: number, d0: number, d1: number, callback: (hit: boolean, x: number, y: number) => void): void;",
  "export function checkCollisionLines(start1: T.Vector2, end1: T.Vector2, start2: T.Vector2, end2: T.Vector2): T.CollisionLinesResult { let result: T.CollisionLinesResult = { hit: false, point: { x: 0, y: 0 } }; nativeCheckCollisionLinesCopy(start1.x, start1.y, end1.x, end1.y, start2.x, start2.y, end2.x, end2.y, (hit: boolean, x: number, y: number) => { result = { hit: hit, point: { x: x, y: y } }; }); return result; }",
  "void scrl_custom_collision_lines(double,double,double,double,double,double,double,double,void (*)(uint8_t,double,double,void *),void *);",
  "void scrl_custom_collision_lines(double ax,double ay,double bx,double by,double cx,double cy,double dx,double dy,void (*callback)(uint8_t,double,double,void *),void *context) { Vector2 point = {0}; bool hit = CheckCollisionLines((Vector2){(float)ax,(float)ay},(Vector2){(float)bx,(float)by},(Vector2){(float)cx,(float)cy},(Vector2){(float)dx,(float)dy},&point); callback(hit ? 1 : 0,point.x,point.y,context); }",
);

for (const memory of [false, true]) {
  const nativeName = memory ? "nativeLoadImageAnimFromMemoryCopy" : "nativeLoadImageAnimCopy";
  const symbol = memory ? "scrl_custom_load_image_anim_memory" : "scrl_custom_load_image_anim";
  const manifestParams = memory ? ["string", "bool", "bytes", "i32"] : ["string", "bool"];
  manifestParams.push({ callback: { id: "result", params: ["u32", "i32", { context: "result" }], returns: "void", lifetime: "call" } }, { context: "result" });
  const declaration = memory
    ? `export declare function ${nativeName}(fileType: string, present: boolean, data: Uint8Array, size: number, callback: (handle: number, frames: number) => void): void;`
    : `export declare function ${nativeName}(fileName: string, present: boolean, callback: (handle: number, frames: number) => void): void;`;
  const wrapper = memory
    ? `export function loadImageAnimFromMemory(fileType: string, data: Uint8Array): T.ImageAnimation { let result: T.ImageAnimation = { image: { handle: 0, kind: \"Image\" }, frames: 0 }; ${nativeName}(fileType, true, data, data.length, (handle: number, frames: number) => { result = { image: { handle: handle, kind: \"Image\" }, frames: frames }; }); return result; }`
    : `export function loadImageAnim(fileName: string): T.ImageAnimation { let result: T.ImageAnimation = { image: { handle: 0, kind: \"Image\" }, frames: 0 }; ${nativeName}(fileName, true, (handle: number, frames: number) => { result = { image: { handle: handle, kind: \"Image\" }, frames: frames }; }); return result; }`;
  const cParams = memory ? "const uint8_t *type,size_t type_length,uint8_t present,const uint8_t *data,size_t data_length,int32_t size" : "const uint8_t *name,size_t name_length,uint8_t present";
  const setup = memory ? "if (size < 0 || (size_t)size > data_length) scrl_fail(\"invalid image data length\"); char *input = scrl_string_copy(type,type_length,present);" : "char *input = scrl_string_copy(name,name_length,present);";
  const call = memory ? "LoadImageAnimFromMemory(input,data,size,&frames)" : "LoadImageAnim(input,&frames)";
  addCustomBinding(nativeName, symbol, manifestParams, "void", declaration, wrapper,
    `void ${symbol}(${cParams},void (*)(uint32_t,int32_t,void *),void *);`,
    `void ${symbol}(${cParams},void (*callback)(uint32_t,int32_t,void *),void *context) { ${setup} int frames=0; Image image=${call}; free(input); ScrlResourceValue value={0}; value.image=image; uint32_t handle=scrl_resource_add(SCRL_RESOURCE_IMAGE,value,1); callback(handle,frames,context); }`);
}

for (const [publicName, rayName] of [["getCodepoint", "GetCodepoint"], ["getCodepointNext", "GetCodepointNext"], ["getCodepointPrevious", "GetCodepointPrevious"]]) {
  const nativeName = `native${rayName}Copy`; const symbol = `scrl_custom_${publicName.replace(/[A-Z]/g, (value) => `_${value.toLowerCase()}`)}`;
  addCustomBinding(nativeName, symbol, ["string", "bool", { callback: { id: "result", params: ["i32", "i32", { context: "result" }], returns: "void", lifetime: "call" } }, { context: "result" }], "void",
    `export declare function ${nativeName}(text: string, present: boolean, callback: (codepoint: number, size: number) => void): void;`,
    `export function ${publicName}(text: string): T.CodepointResult { let result: T.CodepointResult = { codepoint: 0, size: 0 }; ${nativeName}(text, true, (codepoint: number, size: number) => { result = { codepoint: codepoint, size: size }; }); return result; }`,
    `void ${symbol}(const uint8_t *,size_t,uint8_t,void (*)(int32_t,int32_t,void *),void *);`,
    `void ${symbol}(const uint8_t *text,size_t length,uint8_t present,void (*callback)(int32_t,int32_t,void *),void *context) { char *input=scrl_string_copy(text,length,present); int size=0; int result=${rayName}(input,&size); free(input); callback(result,size,context); }`);
}

wrapperLines.push(
  "export function textJoin(textList: ReadonlyArray<string>, delimiter: string): string { return textList.join(delimiter); }",
  "export function textAppend(text: string, append: string, position: number): T.TextAppendResult { const prefix = text.slice(0, position); const result = prefix + append; return { text: result, position: result.length }; }",
);

for (const name of customOfficialNames) included.push(`${name} (copying adapter)`);

headerLines.push("#endif");
writeFileSync(join(generatedSrc, "types.ts"), `${typeLines.join("\n")}\n`);
writeFileSync(join(generatedSrc, "constants.ts"), `${constantLines.join("\n")}\n`);
writeFileSync(join(generatedSrc, "native.ts"), `${nativeLines.join("\n")}\n`);
const nativeImport = `import { ${manifest.functions.map((binding) => binding.name).join(", ")} } from \"./native\";`;
const publicSource = wrapperLines.join("\n").replace("__NATIVE_IMPORT__", nativeImport).replaceAll("native.", "");
writeFileSync(join(generatedSrc, "raylib.ts"), `${publicSource}\n`);
writeFileSync(join(generatedNative, "raylib_generated.h"), `${headerLines.join("\n")}\n`);
writeFileSync(join(generatedNative, "raylib_generated.c"), `${cLines.join("\n")}\n`);
writeFileSync(join(root, "ffi.json"), `${JSON.stringify(manifest, null, 2)}\n`);
const callableOfficialFunctions = included.filter((name) => name !== "traceLogText (safe TraceLog adapter)").length;
writeFileSync(join(root, "binding-report.json"), `${JSON.stringify({
  raylibVersion: "6.0",
  metadataVersion: "6.0.1",
  totalOfficialFunctions: api.functions.length,
  callableOfficialFunctions,
  automaticCleanupFunctions: absorbedOfficialNames.size,
  unsupportedOfficialFunctions: excluded.length,
  additionalSafeAdapters: ["traceLogText"],
  included,
  automaticCleanup: [...absorbedOfficialNames],
  excluded,
}, null, 2)}\n`);
console.log(`Generated ${callableOfficialFunctions} callable raylib APIs; ${absorbedOfficialNames.size} deallocators are automatic; ${excluded.length} APIs are explicitly unsafe or impossible.`);
