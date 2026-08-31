import {
  BLACK,
  BLUE,
  DARKBLUE,
  DARKGRAY,
  GREEN,
  ORANGE,
  RAYWHITE,
  RED,
  beginDrawing,
  clearBackground,
  closeWindow,
  drawCircle,
  drawFPS,
  drawRectangle,
  drawText,
  endDrawing,
  getTime,
  initWindow,
  setTargetFPS,
  windowShouldClose,
} from "../raylib";

const screenWidth = 1280;
const screenHeight = 720;
const warmupSeconds = 2;
const baselineSeconds = 5;
const stressSeconds = 5;
const stressRectangleCount = 1000;

interface BenchmarkResult {
  frames: number;
  seconds: number;
  minimumFrameSeconds: number;
  maximumFrameSeconds: number;
}

function drawBaselineScene(frame: number): void {
  const rectangleX = 80 + (frame % 900);
  const circleX = 1180 - (frame % 1100);

  beginDrawing();
  clearBackground(RAYWHITE);
  drawText("Uncapped baseline: starter-sized scene", 20, 20, 24, BLACK);
  drawText("No target FPS and no VSYNC hint", 20, 55, 18, DARKGRAY);
  drawText("This phase draws three strings, one rectangle, and one circle.", 20, 82, 18, DARKGRAY);
  drawRectangle(rectangleX, 330, 110, 55, BLUE);
  drawCircle(circleX, 480, 24, RED);
  drawFPS(20, 120);
  endDrawing();
}

function drawStressScene(frame: number): void {
  const offset = frame % 24;

  beginDrawing();
  clearBackground(RAYWHITE);

  let index = 0;
  while (index < stressRectangleCount) {
    const column = index % 50;
    const row = Math.floor(index / 50);
    const x = column * 26 + offset - 24;
    const y = row * 31 + 96;
    const colorIndex = index % 4;
    if (colorIndex === 0) drawRectangle(x, y, 20, 20, BLUE);
    else if (colorIndex === 1) drawRectangle(x, y, 20, 20, GREEN);
    else if (colorIndex === 2) drawRectangle(x, y, 20, 20, ORANGE);
    else drawRectangle(x, y, 20, 20, RED);
    index += 1;
  }

  drawRectangle(0, 0, screenWidth, 90, RAYWHITE);
  drawText("Uncapped draw-call stress: 1,000 rectangles per frame", 20, 18, 24, DARKBLUE);
  drawFPS(20, 52);
  endDrawing();
}

function runWarmup(): boolean {
  const startedAt = getTime();
  let frame = 0;
  while (!windowShouldClose() && getTime() - startedAt < warmupSeconds) {
    drawBaselineScene(frame);
    frame += 1;
  }
  return !windowShouldClose();
}

function runBenchmark(duration: number, stress: boolean): BenchmarkResult {
  const startedAt = getTime();
  let frame = 0;
  let minimumFrameSeconds = 1000000000;
  let maximumFrameSeconds = 0;

  while (!windowShouldClose()) {
    const frameStartedAt = getTime();
    if (stress) drawStressScene(frame);
    else drawBaselineScene(frame);
    const frameSeconds = getTime() - frameStartedAt;

    if (frameSeconds < minimumFrameSeconds) minimumFrameSeconds = frameSeconds;
    if (frameSeconds > maximumFrameSeconds) maximumFrameSeconds = frameSeconds;
    frame += 1;

    if (getTime() - startedAt >= duration) break;
  }

  return {
    frames: frame,
    seconds: getTime() - startedAt,
    minimumFrameSeconds,
    maximumFrameSeconds,
  };
}

function printResult(name: string, result: BenchmarkResult): void {
  if (result.frames === 0) {
    console.log(`${name}: no frames recorded`);
    return;
  }

  const averageFPS = result.frames / result.seconds;
  const averageFrameMilliseconds = (result.seconds * 1000) / result.frames;
  console.log(`${name}:`);
  console.log(`  frames: ${result.frames} in ${result.seconds.toFixed(3)} seconds`);
  console.log(`  average: ${averageFPS.toFixed(1)} FPS (${averageFrameMilliseconds.toFixed(3)} ms/frame)`);
  console.log(`  best frame: ${(result.minimumFrameSeconds * 1000).toFixed(3)} ms`);
  console.log(`  worst frame: ${(result.maximumFrameSeconds * 1000).toFixed(3)} ms`);
}

console.log("scriptc-raylib uncapped FPS benchmark");
console.log(`Resolution: ${screenWidth}x${screenHeight}`);
console.log(`Warm-up: ${warmupSeconds}s; samples: ${baselineSeconds}s baseline + ${stressSeconds}s stress`);

initWindow(screenWidth, screenHeight, "scriptc-raylib uncapped FPS benchmark");
setTargetFPS(0);

if (runWarmup()) {
  const baseline = runBenchmark(baselineSeconds, false);
  if (!windowShouldClose()) {
    const stress = runBenchmark(stressSeconds, true);
    closeWindow();
    printResult("Baseline scene", baseline);
    printResult(`Stress scene (${stressRectangleCount} rectangles/frame)`, stress);
  } else {
    closeWindow();
    console.log("Benchmark stopped before the stress phase.");
    printResult("Baseline scene", baseline);
  }
} else {
  closeWindow();
  console.log("Benchmark stopped during warm-up.");
}
