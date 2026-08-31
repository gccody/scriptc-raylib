import {
  BLACK,
  BLUE,
  KEY_A,
  KEY_D,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_S,
  KEY_UP,
  KEY_W,
  RAYWHITE,
  RED,
  beginDrawing,
  clearBackground,
  closeWindow,
  drawCircle,
  drawRectangle,
  drawText,
  endDrawing,
  getFrameTime,
  getMouseX,
  getMouseY,
  initWindow,
  isKeyDown,
  setTargetFPS,
  windowShouldClose,
} from "./raylib";

const screenWidth = 800;
const screenHeight = 450;
const rectangleWidth = 110;
const rectangleHeight = 55;
const movementSpeed = 220;

initWindow(screenWidth, screenHeight, "scriptc + TypeScript + raylib");
setTargetFPS(60);

let x = 100;
let y = 200;

while (!windowShouldClose()) {
  const distance = movementSpeed * getFrameTime();

  if (isKeyDown(KEY_RIGHT) || isKeyDown(KEY_D)) x += distance;
  if (isKeyDown(KEY_LEFT) || isKeyDown(KEY_A)) x -= distance;
  if (isKeyDown(KEY_DOWN) || isKeyDown(KEY_S)) y += distance;
  if (isKeyDown(KEY_UP) || isKeyDown(KEY_W)) y -= distance;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > screenWidth - rectangleWidth) x = screenWidth - rectangleWidth;
  if (y > screenHeight - rectangleHeight) y = screenHeight - rectangleHeight;

  beginDrawing();
  clearBackground(RAYWHITE);
  drawText("Hello from TypeScript + scriptc + raylib!", 20, 20, 24, BLACK);
  drawText("Move the blue rectangle with WASD or the arrow keys.", 20, 55, 18, BLACK);
  drawText("The red circle follows your mouse. Press Escape to quit.", 20, 80, 18, BLACK);
  drawRectangle(x, y, rectangleWidth, rectangleHeight, BLUE);
  drawCircle(getMouseX(), getMouseY(), 20, RED);
  endDrawing();
}

closeWindow();
