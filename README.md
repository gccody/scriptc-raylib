# scriptc-raylib: npm binding and game template

An installable Node development package and GitHub-template-ready starter for native games written in TypeScript and compiled by [scriptc](https://scriptc.dev). The executable does not embed Node.js, Bun, Deno, Electron, a browser, WebAssembly, or a JavaScript engine.

```text
TypeScript game
  ↓ import from scriptc-raylib (or this template's src/raylib.ts)
generated strongly typed wrappers
  ↓ scriptc native C FFI
ABI-safe generated C shim
  ↓
raylib 6.0
  ↓
Windows / macOS / Linux
```

## Start a game

Create a new project with one command:

```bash
npx scriptc-raylib create my-game
cd my-game
npm run dev
```

The command creates `package.json`, strict `tsconfig.json`, `.gitignore`, `src/main.ts`, `assets/`, and `build/`, then runs `npm install`. The generated demo opens an 800×450 window with keyboard movement and a mouse-following circle. Use `--no-install` when a package manager or CI job should install dependencies later:

```bash
npx scriptc-raylib create my-game --no-install
```

### Use the Node module

After this package is published to npm, install it as a development dependency:

```bash
npm install --save-dev scriptc-raylib
```

Until then, install a checkout, packed archive, or GitHub repository:

```bash
npm install --save-dev ../scriptc-raylib
# or: npm install --save-dev github:YOUR_ORG/scriptc-raylib
```

Import values and types from the one public module:

```ts
import {
  BLUE,
  RAYWHITE,
  beginDrawing,
  clearBackground,
  drawRectangle,
  endDrawing,
  initWindow,
  windowShouldClose,
  type Color,
  type Vector2,
} from "scriptc-raylib";
```

Add convenient scripts to the consuming application's `package.json`:

```json
{
  "scripts": {
    "build": "scriptc-raylib build src/main.ts -o build/game",
    "dev": "scriptc-raylib run src/main.ts --dev",
    "coverage": "scriptc-raylib coverage src/main.ts"
  }
}
```

Then use `npm run build` or `npm run dev`. The package CLI locates the correct shim, downloads and verifies raylib for the host, supplies the FFI manifest, invokes scriptc, and copies the project's `assets/` directory beside the executable. Do not replace this command with a bare `scriptc build`: scriptc currently cannot discover an npm package's native manifest or preserve TypeScript declaration-only FFI symbols by itself.

The CLI makes a disposable source staging tree under `build/`, replacing only bare `"scriptc-raylib"` module specifiers with the package's checked-in TypeScript binding source. This is a compile-time packaging adapter, not runtime dynamic loading. Coverage tests require 100% static compilation, and `--dynamic` is never enabled.

### Use the GitHub template

Create a repository from this GitHub template (or clone/download it), then run:

```bash
npm install
npm run dev
```

The self-contained template imports everything through one file:

```ts
import {
  BLACK,
  BLUE,
  KEY_RIGHT,
  RAYWHITE,
  beginDrawing,
  clearBackground,
  closeWindow,
  drawRectangle,
  drawText,
  endDrawing,
  initWindow,
  isKeyDown,
  setTargetFPS,
  windowShouldClose,
} from "./raylib";
```

`src/main.ts` is a working 800×450 demo with delta-time movement, WASD/arrow input, text, a rectangle, and a mouse-following circle. Replace it with game code and put data files under `assets/`.

To publish this folder as a GitHub template, push it to an empty repository and enable **Settings → General → Template repository**.

## Binding scope

The binding is generated from the official `@raylib/api` 6.0.1 metadata for raylib 6.0. It exports all 21 enum families, every enum member, raylib's color constants, strongly typed value interfaces, validated native resource handles, and one public TypeScript module.

Current generated coverage is recorded in `binding-report.json`:

- 571 official functions are directly callable through safe wrappers;
- nine matching C deallocators are deliberately automatic because their allocations are copied into TypeScript-owned arrays/strings during the same call;
- 20 functions are explicitly unavailable because their semantics cannot currently cross scriptc safely;
- `traceLogText()` is provided as a non-variadic replacement for `TraceLog()`.

This is the maximum-safe binding, not a fake pointer binding. The 20 unavailable functions are the raw platform window pointer; raw allocator calls; variadic log/format calls; file-load callbacks that must synchronously return newly owned C memory; two pointer-array resource loaders for fonts/models; and real-time mutable audio callbacks. The exact symbol-by-symbol reason is machine-readable in `binding-report.json` and contract-tested.

Several C allocation pairs are intentionally represented as one TypeScript operation. For example, `loadFileData()`, `compressData()`, `loadCodepoints()`, `loadImageColors()`, and `loadWaveSamples()` invoke raylib, copy the result through a call-scoped scriptc callback, and call the correct raylib deallocator before returning. Calling an unload function from TypeScript would be both unnecessary and unsafe, so those unload symbols are classified as automatic cleanup rather than omitted by accident.

## Types and ownership

Value types remain ordinary TypeScript objects:

```ts
export interface Vector2 { x: number; y: number }
export interface Color { r: number; g: number; b: number; a: number }
export interface Rectangle { x: number; y: number; width: number; height: number }
```

The wrapper flattens them into scalar FFI parameters. C reconstructs `Color`, `Vector2`, `Matrix`, `Camera`, and other raylib structs on its side. Struct results travel through call-scoped scalar callbacks and are rebuilt as TypeScript values.

Resource types are opaque objects containing a generational integer handle:

```ts
export interface Texture { readonly handle: number; readonly kind: "Texture" }
export interface Sound { readonly handle: number; readonly kind: "Sound" }
```

The C registry owns the actual `Texture2D`, `Image`, `Font`, `Mesh`, `Shader`, `Material`, `Model`, `Wave`, `Sound`, `Music`, `AudioStream`, render texture, and automation structs. It rejects stale handles, wrong resource kinds, double unloads, and attempts to unload borrowed defaults. Raw C pointers never appear in the TypeScript API. This design extends naturally to future raylib resource types without exposing addresses as numbers.

scriptc strings arrive as borrowed UTF-8 `pointer + length` spans. The shim checks the span, rejects embedded NUL bytes, creates a temporary NUL-terminated string for raylib, and frees it after the call. Native string/byte results are copied before their raylib lifetime ends.

## Commands

```bash
npx scriptc-raylib create my-game
npx scriptc-raylib create my-game --no-install
npm run generate          # regenerate TypeScript, C, manifest, and coverage report
npm run typecheck         # strict TypeScript check
npm test                  # core/native tests + packed npm consumer test
npm run test:core         # contracts + ABI checks + native headless smoke executable
npm run test:package      # pack, install, import, compile, link, and run a consumer
npm run build             # release build for this host
npm run build:dev         # faster development build
npm start                 # run the host build
npm run dev               # build:dev, then run
npm run build:windows     # Windows x64 GNU target
npm run build:linux-x64
npm run build:linux-arm64
```

Target artifacts are isolated under `build/macos-universal`, `build/linux-x64`, `build/linux-arm64`, and `build/windows-x64`. Each release folder contains the executable, adjacent raylib runtime library, `RAYLIB_LICENSE.txt`, and a copy of the project's `assets/` directory when it exists.

## Runtime footprint

This remains a normal raylib native process; scriptc does not ship a JavaScript VM in it. A measured release demo on the current Apple M1/macOS host, after window and OpenGL initialization at 60 FPS, used about 85,392 KiB RSS (83.4 MiB) and 9.6% of one CPU core. Its application executable was 600 KiB and the adjacent universal raylib dylib was 3.4 MiB. GPU/driver allocations are not included in RSS. Windows and Linux binaries currently total roughly 2.7 MiB and 4.2 MiB respectively with their adjacent raylib libraries. Treat these as one-machine observations: resolution, drivers, loaded textures/audio, target, debug symbols, and game logic change the result.

The FPS benchmarks are checkout-only development tools and are deliberately excluded from the npm package. From a repository checkout, run the TypeScript/scriptc benchmark with:

```bash
node scripts/build-native.mjs --entry src/benchmarks/uncapped-fps.ts --output-name uncapped-fps --run
```

It release-builds a 1280×720 benchmark, warms up for two seconds, then records a five-second starter-sized baseline and a five-second 1,000-rectangle-per-frame draw-call stress test. The window closes automatically and prints average FPS plus average, best, and worst frame times. No VSYNC flag is requested and `setTargetFPS(0)` disables raylib's software frame limiter. Closing the window or pressing Escape stops the benchmark early.

Run `node scripts/run-c-benchmark.mjs` to follow it with the equivalent C benchmark. The C version uses the same pinned raylib library and mirrors the resolution, timing, scene, draw order, animation, and result calculations so the difference primarily measures the generated TypeScript wrappers and native FFI boundary.

## Requirements

All platforms need Node.js 24+, npm, and internet access on the first build. Node runs development tooling only and is absent from the game runtime.

### macOS

Install Xcode Command Line Tools:

```bash
xcode-select --install
```

The official universal raylib dylib carries its Cocoa, IOKit, CoreAudio, CoreVideo, and OpenGL dependencies. The build changes its load path to `@executable_path`, so Homebrew raylib is not required. scriptc currently treats Apple Silicon as its primary macOS target.

### Linux

On Ubuntu 24.04 or newer:

```bash
sudo apt-get update
sudo apt-get install -y clang binutils libx11-6 patchelf
```

The pinned official raylib binaries require glibc 2.38+. They depend on `libc`, `libm`, and X11; no guessed development linker flags are added. `patchelf` adds `$ORIGIN` runtime lookup. Without it, `npm start` supplies `LD_LIBRARY_PATH`.

### Windows

Install Node.js 24+ and Zig 0.15+ and put them on `PATH`. One Chocolatey option from an administrator PowerShell is:

```powershell
choco install nodejs-lts zig -y
```

scriptc targets `x86_64-windows-gnu`. The build uses Zig's compiler/archiver, links the official MinGW raylib import library, and places `raylib.dll` beside the `.exe`. Visual Studio and MSYS2 are not required.

Cross-compilation from macOS/Linux to Windows or Linux uses Zig. macOS output requires Apple's SDK and therefore builds on macOS.

## Reproducible native build

`scripts/build-native.mjs`:

1. generates the complete binding from pinned metadata when building the template itself;
2. downloads the selected official raylib 6.0 release archive;
3. verifies the archive against a checked-in SHA-256 value;
4. strictly type-checks the project;
5. compiles the handwritten helper and generated C shim with warnings as errors;
6. creates a target-specific static shim archive and FFI manifest;
7. for an installed npm package, stages its binding source and rewrites the consumer's bare package import;
8. invokes scriptc with documented `build`, `--ffi`, and `--optimization` options;
9. bundles and fixes the target's raylib runtime lookup.

Missing compilers, Zig, scriptc dependencies, unexpected archive contents, checksum failures, compile errors, and linker errors terminate with a specific message.

## Testing

`npm test` performs:

- a complete classification check against all 600 official raylib functions;
- uniqueness and existence checks for every generated FFI name and C symbol;
- enum/color export checks;
- public-surface checks forbidding `any` and pointer-shaped TypeScript types;
- strict TypeScript checking;
- C compilation with `-Wall -Wextra -Wpedantic -Werror`;
- a native scriptc executable that exercises scalar calls, flattened structs, struct-result callbacks, compression/decompression, Base64, MD5/SHA, codepoints, text arrays, random arrays, and copy-on-write pixel buffers;
- a real `npm pack` into an isolated consumer, bare `import ... from "scriptc-raylib"`, 100% static coverage verification, native compilation/linking, and executable run.

The GitHub Actions matrix runs tests and full builds on macOS, Linux, and Windows. Interactive graphics, audio devices, gamepads, cameras, and every filesystem codec cannot be behaviorally exercised on headless hosted runners; their wrappers are nevertheless generated from the same metadata, type-checked, C-compiled, manifest-validated, and linked. The demo has been launched locally on macOS to confirm window initialization. This project does not claim that a headless CI job physically tested unavailable hardware.

## Releasing updates

Releases use npm trusted publishing from GitHub Actions; the repository stores no npm write token. Make and commit changes on `main`, then run exactly one of:

```bash
npm run release -- patch
npm run release -- minor
npm run release -- major
```

The release command requires a clean `main` branch whose current version equals npm's `latest`, fetches the remote, runs the complete test suite, increments both package manifests with `npm version`, creates the matching `vX.Y.Z` Git tag, and atomically pushes `main` and the tag. Use `--dry-run` after the bump name to run every preflight without changing Git or npm.

If GitHub rejects a tag before npm publishes it, fix and commit the CI failure, then run `npm run release -- retry`. It verifies that the current version is still unpublished, reruns every test, and safely moves only that failed tag to the tested fix.

`.github/workflows/publish.yml` runs only for version tags. It independently rejects a tag that does not exactly match `package.json`, rejects an already-published version, runs all tests again, and publishes through short-lived GitHub OIDC credentials. A normal branch push can run CI but cannot publish an npm update.

## Adding or updating a raylib function

Ordinary scalar/value/resource functions are generated automatically from `@raylib/api`. After updating the pinned raylib and metadata versions, run:

```bash
npm run generate
npm test
npm run build
```

For a function with pointer ownership or callback semantics:

1. add its name to `customOfficialNames` in `scripts/generate-binding.mjs`;
2. add an ABI-safe C adapter that copies arrays, owns resources, or flattens values;
3. add its raw manifest/declaration and strongly typed public wrapper through `addCustomBinding()`;
4. add a native smoke assertion when the API does not require special hardware;
5. regenerate and ensure `binding-report.json` still classifies all 600 functions.

Never expose a `void *`, retain borrowed scriptc string/byte memory, pass a raylib struct by value through FFI, or represent an owned native resource as an unchecked pointer-sized number.

## Layout

```text
.
├── .github/workflows/build.yml
├── assets/
├── native/
│   ├── generated/raylib_generated.c
│   ├── generated/raylib_generated.h
│   ├── raylib_shim.c
│   └── raylib_shim.h
├── scripts/
│   ├── build-native.mjs
│   ├── build-package.mjs
│   ├── cli.mjs
│   ├── generate-binding.mjs
│   ├── package-entry.mjs
│   ├── run-native.mjs
│   ├── test-package.mjs
│   └── test-native.mjs
├── src/
│   ├── generated/{constants,native,raylib,types}.ts
│   ├── main.ts
│   └── raylib.ts
├── tests/
├── binding-report.json
├── ffi.json
├── package.json
├── tsconfig.json
└── tsconfig.package.json
```

Generated outputs are checked in so GitHub users can inspect and search the API immediately; every build regenerates them to prevent drift. `build/`, `.vendor/`, and `node_modules/` are ignored.

Authoritative references: [scriptc Native FFI](https://scriptc.dev/ffi), [scriptc platform support](https://scriptc.dev/platforms), [raylib 6.0 header](https://github.com/raysan5/raylib/blob/6.0/src/raylib.h), and [raylib 6.0 release](https://github.com/raysan5/raylib/releases/tag/6.0).
