import {
  PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,
  codepointToUTF8,
  checkCollisionLines,
  colorAlpha,
  colorBrightness,
  colorToInt,
  compressData,
  computeMD5,
  computeSHA1,
  computeSHA256,
  decodeDataBase64,
  decompressData,
  encodeDataBase64,
  getPixelColor,
  getCodepoint,
  genImageColor,
  exportImageToMemory,
  isImageValid,
  loadImageColors,
  loadImagePalette,
  loadCodepoints,
  loadRandomSequence,
  loadTextLines,
  setPixelColor,
  textAppend,
  textJoin,
  textSplit,
  unloadImage,
} from "../src/raylib";

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(`native smoke test failed: ${message}`);
}

const red = { r: 230, g: 41, b: 55, a: 255 };
check((colorToInt(red) >>> 0) === 0xe62937ff, "colorToInt");
check(colorAlpha(red, 0.5).a === 127, "struct return through callback");
check(colorBrightness(red, 0).r === red.r, "struct input and output");

const utf8 = new TextEncoder().encode("scriptc + raylib: ✓");
const compressed = compressData(utf8);
check(compressed !== null, "compressData result");
const decompressed = decompressData(compressed!);
check(decompressed !== null && new TextDecoder().decode(decompressed) === "scriptc + raylib: ✓", "compression round trip");
const encoded = encodeDataBase64(utf8);
check(encoded !== null, "base64 encode");
const decoded = decodeDataBase64(encoded!);
check(decoded !== null && new TextDecoder().decode(decoded) === "scriptc + raylib: ✓", "base64 round trip");
check(computeMD5(utf8).length === 4, "MD5 words");
check(computeSHA1(utf8).length === 5, "SHA-1 words");
check(computeSHA256(utf8).length === 8, "SHA-256 words");

check(loadCodepoints("A✓").length === 2, "codepoint copy");
check(codepointToUTF8(0x2713) === "✓", "codepoint encoding");
const firstCodepoint = getCodepoint("✓");
check(firstCodepoint.codepoint === 0x2713 && firstCodepoint.size === 3, "codepoint out parameter");
check(loadTextLines("one\ntwo").length === 2, "text lines copy");
check(textSplit("a,b,c", ",").length === 3, "text split copy");
check(textJoin(["a", "b", "c"], "-") === "a-b-c", "safe text join");
const appended = textAppend("hello", "!", 5);
check(appended.text === "hello!" && appended.position === 6, "safe text append");
check(loadRandomSequence(8, 0, 7).length === 8, "random sequence copy");
const collision = checkCollisionLines({ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }, { x: 10, y: 0 });
check(collision.hit && collision.point.x === 5 && collision.point.y === 5, "out-vector collision adapter");

const pixel = new Uint8Array([1, 2, 3, 4]);
const read = getPixelColor(pixel, PIXELFORMAT_UNCOMPRESSED_R8G8B8A8);
check(read.r === 1 && read.a === 4, "pixel read");
const changed = setPixelColor(pixel, red, PIXELFORMAT_UNCOMPRESSED_R8G8B8A8);
check(changed[0] === red.r && pixel[0] === 1, "copy-on-write pixel update");

const image = genImageColor(2, 2, red);
check(isImageValid(image), "image resource handle");
check(loadImageColors(image).length === 4, "image color copy and cleanup");
check(loadImagePalette(image, 8).length === 1, "image palette copy and cleanup");
const png = exportImageToMemory(image, ".png");
check(png !== null && png.length > 8, "image memory export and cleanup");
unloadImage(image);

console.log("native raylib binding smoke tests passed");
