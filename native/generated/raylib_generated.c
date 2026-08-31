// Generated from @raylib/api 6.0.1. Do not edit by hand.
#include "raylib_generated.h"
#include <raylib.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SCRL_MAX_RESOURCES 8192u
typedef enum ScrlResourceType { SCRL_RESOURCE_NONE = 0,
  SCRL_RESOURCE_IMAGE = 1,
  SCRL_RESOURCE_TEXTURE = 2,
  SCRL_RESOURCE_RENDER_TEXTURE = 3,
  SCRL_RESOURCE_GLYPH_INFO = 4,
  SCRL_RESOURCE_FONT = 5,
  SCRL_RESOURCE_MESH = 6,
  SCRL_RESOURCE_SHADER = 7,
  SCRL_RESOURCE_MATERIAL = 8,
  SCRL_RESOURCE_MODEL = 9,
  SCRL_RESOURCE_MODEL_ANIMATION = 10,
  SCRL_RESOURCE_WAVE = 11,
  SCRL_RESOURCE_AUDIO_STREAM = 12,
  SCRL_RESOURCE_SOUND = 13,
  SCRL_RESOURCE_MUSIC = 14,
  SCRL_RESOURCE_FILE_PATH_LIST = 15,
  SCRL_RESOURCE_AUTOMATION_EVENT_LIST = 16,
} ScrlResourceType;
typedef union ScrlResourceValue {
  Image image;
  Texture texture;
  RenderTexture renderTexture;
  GlyphInfo glyphInfo;
  Font font;
  Mesh mesh;
  Shader shader;
  Material material;
  Model model;
  ModelAnimation modelAnimation;
  Wave wave;
  AudioStream audioStream;
  Sound sound;
  Music music;
  FilePathList filePathList;
  AutomationEventList automationEventList;
} ScrlResourceValue;
typedef struct ScrlResourceSlot { uint16_t generation; uint16_t type; uint8_t active; uint8_t owned; ScrlResourceValue value; } ScrlResourceSlot;
static ScrlResourceSlot scrl_resources[SCRL_MAX_RESOURCES];
static void scrl_fail(const char *message) { fprintf(stderr, "scriptc-raylib: %s\n", message); abort(); }
static char *scrl_string_copy(const uint8_t *data, size_t length, uint8_t present) {
  if (!present) return NULL;
  if ((data == NULL && length != 0) || memchr(data, '\0', length) != NULL) scrl_fail("invalid FFI string");
  char *copy = (char *)malloc(length + 1); if (!copy) scrl_fail("out of memory");
  if (length) { memcpy(copy, data, length); }
  copy[length] = '\0';
  return copy;
}
static uint32_t scrl_resource_add(ScrlResourceType type, ScrlResourceValue value, uint8_t owned) {
  for (uint32_t i = 1; i < SCRL_MAX_RESOURCES; i++) if (!scrl_resources[i].active) {
    ScrlResourceSlot *slot = &scrl_resources[i]; slot->generation = (uint16_t)(slot->generation + 1u); if (!slot->generation) slot->generation = 1;
    slot->type = (uint16_t)type; slot->active = 1; slot->owned = owned; slot->value = value; return ((uint32_t)slot->generation << 16u) | i;
  }
  scrl_fail("native resource table is full"); return 0;
}
static ScrlResourceSlot *scrl_resource_get(uint32_t handle, ScrlResourceType type) {
  uint32_t i = handle & 0xffffu; uint16_t generation = (uint16_t)(handle >> 16u);
  if (!i || i >= SCRL_MAX_RESOURCES) scrl_fail("invalid native resource handle");
  ScrlResourceSlot *slot = &scrl_resources[i]; if (!slot->active || slot->generation != generation || slot->type != type) scrl_fail("stale or wrong native resource handle");
  return slot;
}
static void scrl_resource_release(uint32_t handle, ScrlResourceType type) { ScrlResourceSlot *slot = scrl_resource_get(handle, type); slot->active = 0; slot->type = SCRL_RESOURCE_NONE; }
static void scrl_resource_require_owned(uint32_t handle, ScrlResourceType type) { if (!scrl_resource_get(handle, type)->owned) scrl_fail("cannot unload a borrowed raylib resource"); }
void scrl_api_InitWindow(int32_t width, int32_t height, const uint8_t *title, size_t title_length, uint8_t title_present) {
  char *c_title = scrl_string_copy(title, title_length, title_present);
  InitWindow(width, height, c_title);
  free(c_title);
}
void scrl_api_CloseWindow(void) {
  CloseWindow();
}
uint8_t scrl_api_WindowShouldClose(void) {
  uint8_t scrl_result = (uint8_t)(WindowShouldClose());
  return scrl_result;
}
uint8_t scrl_api_IsWindowReady(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowReady());
  return scrl_result;
}
uint8_t scrl_api_IsWindowFullscreen(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowFullscreen());
  return scrl_result;
}
uint8_t scrl_api_IsWindowHidden(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowHidden());
  return scrl_result;
}
uint8_t scrl_api_IsWindowMinimized(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowMinimized());
  return scrl_result;
}
uint8_t scrl_api_IsWindowMaximized(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowMaximized());
  return scrl_result;
}
uint8_t scrl_api_IsWindowFocused(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowFocused());
  return scrl_result;
}
uint8_t scrl_api_IsWindowResized(void) {
  uint8_t scrl_result = (uint8_t)(IsWindowResized());
  return scrl_result;
}
uint8_t scrl_api_IsWindowState(uint32_t flag) {
  uint8_t scrl_result = (uint8_t)(IsWindowState(flag));
  return scrl_result;
}
void scrl_api_SetWindowState(uint32_t flags) {
  SetWindowState(flags);
}
void scrl_api_ClearWindowState(uint32_t flags) {
  ClearWindowState(flags);
}
void scrl_api_ToggleFullscreen(void) {
  ToggleFullscreen();
}
void scrl_api_ToggleBorderlessWindowed(void) {
  ToggleBorderlessWindowed();
}
void scrl_api_MaximizeWindow(void) {
  MaximizeWindow();
}
void scrl_api_MinimizeWindow(void) {
  MinimizeWindow();
}
void scrl_api_RestoreWindow(void) {
  RestoreWindow();
}
void scrl_api_SetWindowIcon(uint32_t image) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  SetWindowIcon(c_image);
}
void scrl_api_SetWindowTitle(const uint8_t *title, size_t title_length, uint8_t title_present) {
  char *c_title = scrl_string_copy(title, title_length, title_present);
  SetWindowTitle(c_title);
  free(c_title);
}
void scrl_api_SetWindowPosition(int32_t x, int32_t y) {
  SetWindowPosition(x, y);
}
void scrl_api_SetWindowMonitor(int32_t monitor) {
  SetWindowMonitor(monitor);
}
void scrl_api_SetWindowMinSize(int32_t width, int32_t height) {
  SetWindowMinSize(width, height);
}
void scrl_api_SetWindowMaxSize(int32_t width, int32_t height) {
  SetWindowMaxSize(width, height);
}
void scrl_api_SetWindowSize(int32_t width, int32_t height) {
  SetWindowSize(width, height);
}
void scrl_api_SetWindowOpacity(double opacity) {
  SetWindowOpacity((float)opacity);
}
void scrl_api_SetWindowFocused(void) {
  SetWindowFocused();
}
int32_t scrl_api_GetScreenWidth(void) {
  int32_t scrl_result = (int32_t)(GetScreenWidth());
  return scrl_result;
}
int32_t scrl_api_GetScreenHeight(void) {
  int32_t scrl_result = (int32_t)(GetScreenHeight());
  return scrl_result;
}
int32_t scrl_api_GetRenderWidth(void) {
  int32_t scrl_result = (int32_t)(GetRenderWidth());
  return scrl_result;
}
int32_t scrl_api_GetRenderHeight(void) {
  int32_t scrl_result = (int32_t)(GetRenderHeight());
  return scrl_result;
}
int32_t scrl_api_GetMonitorCount(void) {
  int32_t scrl_result = (int32_t)(GetMonitorCount());
  return scrl_result;
}
int32_t scrl_api_GetCurrentMonitor(void) {
  int32_t scrl_result = (int32_t)(GetCurrentMonitor());
  return scrl_result;
}
void scrl_api_GetMonitorPosition(int32_t monitor, void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetMonitorPosition(monitor);
  callback(result.x, result.y, context);
}
int32_t scrl_api_GetMonitorWidth(int32_t monitor) {
  int32_t scrl_result = (int32_t)(GetMonitorWidth(monitor));
  return scrl_result;
}
int32_t scrl_api_GetMonitorHeight(int32_t monitor) {
  int32_t scrl_result = (int32_t)(GetMonitorHeight(monitor));
  return scrl_result;
}
int32_t scrl_api_GetMonitorPhysicalWidth(int32_t monitor) {
  int32_t scrl_result = (int32_t)(GetMonitorPhysicalWidth(monitor));
  return scrl_result;
}
int32_t scrl_api_GetMonitorPhysicalHeight(int32_t monitor) {
  int32_t scrl_result = (int32_t)(GetMonitorPhysicalHeight(monitor));
  return scrl_result;
}
int32_t scrl_api_GetMonitorRefreshRate(int32_t monitor) {
  int32_t scrl_result = (int32_t)(GetMonitorRefreshRate(monitor));
  return scrl_result;
}
void scrl_api_GetWindowPosition(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetWindowPosition();
  callback(result.x, result.y, context);
}
void scrl_api_GetWindowScaleDPI(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetWindowScaleDPI();
  callback(result.x, result.y, context);
}
uint8_t scrl_api_GetMonitorName(int32_t monitor, void (*callback)(const char *, void *), void *context) {
  const char *result = GetMonitorName(monitor);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
void scrl_api_SetClipboardText(const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  SetClipboardText(c_text);
  free(c_text);
}
uint8_t scrl_api_GetClipboardText(void (*callback)(const char *, void *), void *context) {
  const char *result = GetClipboardText();
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint32_t scrl_api_GetClipboardImage(void) {
  Image result = GetClipboardImage();
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
void scrl_api_EnableEventWaiting(void) {
  EnableEventWaiting();
}
void scrl_api_DisableEventWaiting(void) {
  DisableEventWaiting();
}
void scrl_api_ShowCursor(void) {
  ShowCursor();
}
void scrl_api_HideCursor(void) {
  HideCursor();
}
uint8_t scrl_api_IsCursorHidden(void) {
  uint8_t scrl_result = (uint8_t)(IsCursorHidden());
  return scrl_result;
}
void scrl_api_EnableCursor(void) {
  EnableCursor();
}
void scrl_api_DisableCursor(void) {
  DisableCursor();
}
uint8_t scrl_api_IsCursorOnScreen(void) {
  uint8_t scrl_result = (uint8_t)(IsCursorOnScreen());
  return scrl_result;
}
void scrl_api_ClearBackground(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ClearBackground(c_color);
}
void scrl_api_BeginDrawing(void) {
  BeginDrawing();
}
void scrl_api_EndDrawing(void) {
  EndDrawing();
}
void scrl_api_BeginMode2D(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5) {
  Camera2D c_camera = (Camera2D){0};
  c_camera.offset.x = (float)camera_0;
  c_camera.offset.y = (float)camera_1;
  c_camera.target.x = (float)camera_2;
  c_camera.target.y = (float)camera_3;
  c_camera.rotation = (float)camera_4;
  c_camera.zoom = (float)camera_5;
  BeginMode2D(c_camera);
}
void scrl_api_EndMode2D(void) {
  EndMode2D();
}
void scrl_api_BeginMode3D(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10) {
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  BeginMode3D(c_camera);
}
void scrl_api_EndMode3D(void) {
  EndMode3D();
}
void scrl_api_BeginTextureMode(uint32_t target) {
  RenderTexture c_target = scrl_resource_get(target, SCRL_RESOURCE_RENDER_TEXTURE)->value.renderTexture;
  BeginTextureMode(c_target);
}
void scrl_api_EndTextureMode(void) {
  EndTextureMode();
}
void scrl_api_BeginShaderMode(uint32_t shader) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  BeginShaderMode(c_shader);
}
void scrl_api_EndShaderMode(void) {
  EndShaderMode();
}
void scrl_api_BeginBlendMode(int32_t mode) {
  BeginBlendMode(mode);
}
void scrl_api_EndBlendMode(void) {
  EndBlendMode();
}
void scrl_api_BeginScissorMode(int32_t x, int32_t y, int32_t width, int32_t height) {
  BeginScissorMode(x, y, width, height);
}
void scrl_api_EndScissorMode(void) {
  EndScissorMode();
}
void scrl_api_BeginVrStereoMode(double config_0, double config_1, double config_2, double config_3, double config_4, double config_5, double config_6, double config_7, double config_8, double config_9, double config_10, double config_11, double config_12, double config_13, double config_14, double config_15, double config_16, double config_17, double config_18, double config_19, double config_20, double config_21, double config_22, double config_23, double config_24, double config_25, double config_26, double config_27, double config_28, double config_29, double config_30, double config_31, double config_32, double config_33, double config_34, double config_35, double config_36, double config_37, double config_38, double config_39, double config_40, double config_41, double config_42, double config_43, double config_44, double config_45, double config_46, double config_47, double config_48, double config_49, double config_50, double config_51, double config_52, double config_53, double config_54, double config_55, double config_56, double config_57, double config_58, double config_59, double config_60, double config_61, double config_62, double config_63, double config_64, double config_65, double config_66, double config_67, double config_68, double config_69, double config_70, double config_71, double config_72, double config_73, double config_74, double config_75) {
  VrStereoConfig c_config = (VrStereoConfig){0};
  c_config.projection[0].m0 = (float)config_0;
  c_config.projection[0].m4 = (float)config_1;
  c_config.projection[0].m8 = (float)config_2;
  c_config.projection[0].m12 = (float)config_3;
  c_config.projection[0].m1 = (float)config_4;
  c_config.projection[0].m5 = (float)config_5;
  c_config.projection[0].m9 = (float)config_6;
  c_config.projection[0].m13 = (float)config_7;
  c_config.projection[0].m2 = (float)config_8;
  c_config.projection[0].m6 = (float)config_9;
  c_config.projection[0].m10 = (float)config_10;
  c_config.projection[0].m14 = (float)config_11;
  c_config.projection[0].m3 = (float)config_12;
  c_config.projection[0].m7 = (float)config_13;
  c_config.projection[0].m11 = (float)config_14;
  c_config.projection[0].m15 = (float)config_15;
  c_config.projection[1].m0 = (float)config_16;
  c_config.projection[1].m4 = (float)config_17;
  c_config.projection[1].m8 = (float)config_18;
  c_config.projection[1].m12 = (float)config_19;
  c_config.projection[1].m1 = (float)config_20;
  c_config.projection[1].m5 = (float)config_21;
  c_config.projection[1].m9 = (float)config_22;
  c_config.projection[1].m13 = (float)config_23;
  c_config.projection[1].m2 = (float)config_24;
  c_config.projection[1].m6 = (float)config_25;
  c_config.projection[1].m10 = (float)config_26;
  c_config.projection[1].m14 = (float)config_27;
  c_config.projection[1].m3 = (float)config_28;
  c_config.projection[1].m7 = (float)config_29;
  c_config.projection[1].m11 = (float)config_30;
  c_config.projection[1].m15 = (float)config_31;
  c_config.viewOffset[0].m0 = (float)config_32;
  c_config.viewOffset[0].m4 = (float)config_33;
  c_config.viewOffset[0].m8 = (float)config_34;
  c_config.viewOffset[0].m12 = (float)config_35;
  c_config.viewOffset[0].m1 = (float)config_36;
  c_config.viewOffset[0].m5 = (float)config_37;
  c_config.viewOffset[0].m9 = (float)config_38;
  c_config.viewOffset[0].m13 = (float)config_39;
  c_config.viewOffset[0].m2 = (float)config_40;
  c_config.viewOffset[0].m6 = (float)config_41;
  c_config.viewOffset[0].m10 = (float)config_42;
  c_config.viewOffset[0].m14 = (float)config_43;
  c_config.viewOffset[0].m3 = (float)config_44;
  c_config.viewOffset[0].m7 = (float)config_45;
  c_config.viewOffset[0].m11 = (float)config_46;
  c_config.viewOffset[0].m15 = (float)config_47;
  c_config.viewOffset[1].m0 = (float)config_48;
  c_config.viewOffset[1].m4 = (float)config_49;
  c_config.viewOffset[1].m8 = (float)config_50;
  c_config.viewOffset[1].m12 = (float)config_51;
  c_config.viewOffset[1].m1 = (float)config_52;
  c_config.viewOffset[1].m5 = (float)config_53;
  c_config.viewOffset[1].m9 = (float)config_54;
  c_config.viewOffset[1].m13 = (float)config_55;
  c_config.viewOffset[1].m2 = (float)config_56;
  c_config.viewOffset[1].m6 = (float)config_57;
  c_config.viewOffset[1].m10 = (float)config_58;
  c_config.viewOffset[1].m14 = (float)config_59;
  c_config.viewOffset[1].m3 = (float)config_60;
  c_config.viewOffset[1].m7 = (float)config_61;
  c_config.viewOffset[1].m11 = (float)config_62;
  c_config.viewOffset[1].m15 = (float)config_63;
  c_config.leftLensCenter[0] = (float)config_64;
  c_config.leftLensCenter[1] = (float)config_65;
  c_config.rightLensCenter[0] = (float)config_66;
  c_config.rightLensCenter[1] = (float)config_67;
  c_config.leftScreenCenter[0] = (float)config_68;
  c_config.leftScreenCenter[1] = (float)config_69;
  c_config.rightScreenCenter[0] = (float)config_70;
  c_config.rightScreenCenter[1] = (float)config_71;
  c_config.scale[0] = (float)config_72;
  c_config.scale[1] = (float)config_73;
  c_config.scaleIn[0] = (float)config_74;
  c_config.scaleIn[1] = (float)config_75;
  BeginVrStereoMode(c_config);
}
void scrl_api_EndVrStereoMode(void) {
  EndVrStereoMode();
}
void scrl_api_LoadVrStereoConfig(int32_t device_0, int32_t device_1, double device_2, double device_3, double device_4, double device_5, double device_6, double device_7, double device_8, double device_9, double device_10, double device_11, double device_12, double device_13, double device_14, void (*callback)(double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, void *), void *context) {
  VrDeviceInfo c_device = (VrDeviceInfo){0};
  c_device.hResolution = (int)device_0;
  c_device.vResolution = (int)device_1;
  c_device.hScreenSize = (float)device_2;
  c_device.vScreenSize = (float)device_3;
  c_device.eyeToScreenDistance = (float)device_4;
  c_device.lensSeparationDistance = (float)device_5;
  c_device.interpupillaryDistance = (float)device_6;
  c_device.lensDistortionValues[0] = (float)device_7;
  c_device.lensDistortionValues[1] = (float)device_8;
  c_device.lensDistortionValues[2] = (float)device_9;
  c_device.lensDistortionValues[3] = (float)device_10;
  c_device.chromaAbCorrection[0] = (float)device_11;
  c_device.chromaAbCorrection[1] = (float)device_12;
  c_device.chromaAbCorrection[2] = (float)device_13;
  c_device.chromaAbCorrection[3] = (float)device_14;
  VrStereoConfig result = LoadVrStereoConfig(c_device);
  callback(result.projection[0].m0, result.projection[0].m4, result.projection[0].m8, result.projection[0].m12, result.projection[0].m1, result.projection[0].m5, result.projection[0].m9, result.projection[0].m13, result.projection[0].m2, result.projection[0].m6, result.projection[0].m10, result.projection[0].m14, result.projection[0].m3, result.projection[0].m7, result.projection[0].m11, result.projection[0].m15, result.projection[1].m0, result.projection[1].m4, result.projection[1].m8, result.projection[1].m12, result.projection[1].m1, result.projection[1].m5, result.projection[1].m9, result.projection[1].m13, result.projection[1].m2, result.projection[1].m6, result.projection[1].m10, result.projection[1].m14, result.projection[1].m3, result.projection[1].m7, result.projection[1].m11, result.projection[1].m15, result.viewOffset[0].m0, result.viewOffset[0].m4, result.viewOffset[0].m8, result.viewOffset[0].m12, result.viewOffset[0].m1, result.viewOffset[0].m5, result.viewOffset[0].m9, result.viewOffset[0].m13, result.viewOffset[0].m2, result.viewOffset[0].m6, result.viewOffset[0].m10, result.viewOffset[0].m14, result.viewOffset[0].m3, result.viewOffset[0].m7, result.viewOffset[0].m11, result.viewOffset[0].m15, result.viewOffset[1].m0, result.viewOffset[1].m4, result.viewOffset[1].m8, result.viewOffset[1].m12, result.viewOffset[1].m1, result.viewOffset[1].m5, result.viewOffset[1].m9, result.viewOffset[1].m13, result.viewOffset[1].m2, result.viewOffset[1].m6, result.viewOffset[1].m10, result.viewOffset[1].m14, result.viewOffset[1].m3, result.viewOffset[1].m7, result.viewOffset[1].m11, result.viewOffset[1].m15, result.leftLensCenter[0], result.leftLensCenter[1], result.rightLensCenter[0], result.rightLensCenter[1], result.leftScreenCenter[0], result.leftScreenCenter[1], result.rightScreenCenter[0], result.rightScreenCenter[1], result.scale[0], result.scale[1], result.scaleIn[0], result.scaleIn[1], context);
}
void scrl_api_UnloadVrStereoConfig(double config_0, double config_1, double config_2, double config_3, double config_4, double config_5, double config_6, double config_7, double config_8, double config_9, double config_10, double config_11, double config_12, double config_13, double config_14, double config_15, double config_16, double config_17, double config_18, double config_19, double config_20, double config_21, double config_22, double config_23, double config_24, double config_25, double config_26, double config_27, double config_28, double config_29, double config_30, double config_31, double config_32, double config_33, double config_34, double config_35, double config_36, double config_37, double config_38, double config_39, double config_40, double config_41, double config_42, double config_43, double config_44, double config_45, double config_46, double config_47, double config_48, double config_49, double config_50, double config_51, double config_52, double config_53, double config_54, double config_55, double config_56, double config_57, double config_58, double config_59, double config_60, double config_61, double config_62, double config_63, double config_64, double config_65, double config_66, double config_67, double config_68, double config_69, double config_70, double config_71, double config_72, double config_73, double config_74, double config_75) {
  VrStereoConfig c_config = (VrStereoConfig){0};
  c_config.projection[0].m0 = (float)config_0;
  c_config.projection[0].m4 = (float)config_1;
  c_config.projection[0].m8 = (float)config_2;
  c_config.projection[0].m12 = (float)config_3;
  c_config.projection[0].m1 = (float)config_4;
  c_config.projection[0].m5 = (float)config_5;
  c_config.projection[0].m9 = (float)config_6;
  c_config.projection[0].m13 = (float)config_7;
  c_config.projection[0].m2 = (float)config_8;
  c_config.projection[0].m6 = (float)config_9;
  c_config.projection[0].m10 = (float)config_10;
  c_config.projection[0].m14 = (float)config_11;
  c_config.projection[0].m3 = (float)config_12;
  c_config.projection[0].m7 = (float)config_13;
  c_config.projection[0].m11 = (float)config_14;
  c_config.projection[0].m15 = (float)config_15;
  c_config.projection[1].m0 = (float)config_16;
  c_config.projection[1].m4 = (float)config_17;
  c_config.projection[1].m8 = (float)config_18;
  c_config.projection[1].m12 = (float)config_19;
  c_config.projection[1].m1 = (float)config_20;
  c_config.projection[1].m5 = (float)config_21;
  c_config.projection[1].m9 = (float)config_22;
  c_config.projection[1].m13 = (float)config_23;
  c_config.projection[1].m2 = (float)config_24;
  c_config.projection[1].m6 = (float)config_25;
  c_config.projection[1].m10 = (float)config_26;
  c_config.projection[1].m14 = (float)config_27;
  c_config.projection[1].m3 = (float)config_28;
  c_config.projection[1].m7 = (float)config_29;
  c_config.projection[1].m11 = (float)config_30;
  c_config.projection[1].m15 = (float)config_31;
  c_config.viewOffset[0].m0 = (float)config_32;
  c_config.viewOffset[0].m4 = (float)config_33;
  c_config.viewOffset[0].m8 = (float)config_34;
  c_config.viewOffset[0].m12 = (float)config_35;
  c_config.viewOffset[0].m1 = (float)config_36;
  c_config.viewOffset[0].m5 = (float)config_37;
  c_config.viewOffset[0].m9 = (float)config_38;
  c_config.viewOffset[0].m13 = (float)config_39;
  c_config.viewOffset[0].m2 = (float)config_40;
  c_config.viewOffset[0].m6 = (float)config_41;
  c_config.viewOffset[0].m10 = (float)config_42;
  c_config.viewOffset[0].m14 = (float)config_43;
  c_config.viewOffset[0].m3 = (float)config_44;
  c_config.viewOffset[0].m7 = (float)config_45;
  c_config.viewOffset[0].m11 = (float)config_46;
  c_config.viewOffset[0].m15 = (float)config_47;
  c_config.viewOffset[1].m0 = (float)config_48;
  c_config.viewOffset[1].m4 = (float)config_49;
  c_config.viewOffset[1].m8 = (float)config_50;
  c_config.viewOffset[1].m12 = (float)config_51;
  c_config.viewOffset[1].m1 = (float)config_52;
  c_config.viewOffset[1].m5 = (float)config_53;
  c_config.viewOffset[1].m9 = (float)config_54;
  c_config.viewOffset[1].m13 = (float)config_55;
  c_config.viewOffset[1].m2 = (float)config_56;
  c_config.viewOffset[1].m6 = (float)config_57;
  c_config.viewOffset[1].m10 = (float)config_58;
  c_config.viewOffset[1].m14 = (float)config_59;
  c_config.viewOffset[1].m3 = (float)config_60;
  c_config.viewOffset[1].m7 = (float)config_61;
  c_config.viewOffset[1].m11 = (float)config_62;
  c_config.viewOffset[1].m15 = (float)config_63;
  c_config.leftLensCenter[0] = (float)config_64;
  c_config.leftLensCenter[1] = (float)config_65;
  c_config.rightLensCenter[0] = (float)config_66;
  c_config.rightLensCenter[1] = (float)config_67;
  c_config.leftScreenCenter[0] = (float)config_68;
  c_config.leftScreenCenter[1] = (float)config_69;
  c_config.rightScreenCenter[0] = (float)config_70;
  c_config.rightScreenCenter[1] = (float)config_71;
  c_config.scale[0] = (float)config_72;
  c_config.scale[1] = (float)config_73;
  c_config.scaleIn[0] = (float)config_74;
  c_config.scaleIn[1] = (float)config_75;
  UnloadVrStereoConfig(c_config);
}
uint32_t scrl_api_LoadShader(const uint8_t *vsFileName, size_t vsFileName_length, uint8_t vsFileName_present, const uint8_t *fsFileName, size_t fsFileName_length, uint8_t fsFileName_present) {
  char *c_vsFileName = scrl_string_copy(vsFileName, vsFileName_length, vsFileName_present);
  char *c_fsFileName = scrl_string_copy(fsFileName, fsFileName_length, fsFileName_present);
  Shader result = LoadShader(c_vsFileName, c_fsFileName);
  ScrlResourceValue value = {0};
  value.shader = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_SHADER, value, 1);
  free(c_fsFileName);
  free(c_vsFileName);
  return scrl_result;
}
uint32_t scrl_api_LoadShaderFromMemory(const uint8_t *vsCode, size_t vsCode_length, uint8_t vsCode_present, const uint8_t *fsCode, size_t fsCode_length, uint8_t fsCode_present) {
  char *c_vsCode = scrl_string_copy(vsCode, vsCode_length, vsCode_present);
  char *c_fsCode = scrl_string_copy(fsCode, fsCode_length, fsCode_present);
  Shader result = LoadShaderFromMemory(c_vsCode, c_fsCode);
  ScrlResourceValue value = {0};
  value.shader = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_SHADER, value, 1);
  free(c_fsCode);
  free(c_vsCode);
  return scrl_result;
}
uint8_t scrl_api_IsShaderValid(uint32_t shader) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  uint8_t scrl_result = (uint8_t)(IsShaderValid(c_shader));
  return scrl_result;
}
int32_t scrl_api_GetShaderLocation(uint32_t shader, const uint8_t *uniformName, size_t uniformName_length, uint8_t uniformName_present) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  char *c_uniformName = scrl_string_copy(uniformName, uniformName_length, uniformName_present);
  int32_t scrl_result = (int32_t)(GetShaderLocation(c_shader, c_uniformName));
  free(c_uniformName);
  return scrl_result;
}
int32_t scrl_api_GetShaderLocationAttrib(uint32_t shader, const uint8_t *attribName, size_t attribName_length, uint8_t attribName_present) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  char *c_attribName = scrl_string_copy(attribName, attribName_length, attribName_present);
  int32_t scrl_result = (int32_t)(GetShaderLocationAttrib(c_shader, c_attribName));
  free(c_attribName);
  return scrl_result;
}
void scrl_api_SetShaderValue(uint32_t shader, int32_t locIndex, const uint8_t *value, size_t value_length, int32_t uniformType) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  (void)value_length;
  SetShaderValue(c_shader, locIndex, (const void *)value, uniformType);
}
void scrl_api_SetShaderValueV(uint32_t shader, int32_t locIndex, const uint8_t *value, size_t value_length, int32_t uniformType, int32_t count) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  (void)value_length;
  SetShaderValueV(c_shader, locIndex, (const void *)value, uniformType, count);
}
void scrl_api_SetShaderValueMatrix(uint32_t shader, int32_t locIndex, double mat_0, double mat_1, double mat_2, double mat_3, double mat_4, double mat_5, double mat_6, double mat_7, double mat_8, double mat_9, double mat_10, double mat_11, double mat_12, double mat_13, double mat_14, double mat_15) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  Matrix c_mat = (Matrix){0};
  c_mat.m0 = (float)mat_0;
  c_mat.m4 = (float)mat_1;
  c_mat.m8 = (float)mat_2;
  c_mat.m12 = (float)mat_3;
  c_mat.m1 = (float)mat_4;
  c_mat.m5 = (float)mat_5;
  c_mat.m9 = (float)mat_6;
  c_mat.m13 = (float)mat_7;
  c_mat.m2 = (float)mat_8;
  c_mat.m6 = (float)mat_9;
  c_mat.m10 = (float)mat_10;
  c_mat.m14 = (float)mat_11;
  c_mat.m3 = (float)mat_12;
  c_mat.m7 = (float)mat_13;
  c_mat.m11 = (float)mat_14;
  c_mat.m15 = (float)mat_15;
  SetShaderValueMatrix(c_shader, locIndex, c_mat);
}
void scrl_api_SetShaderValueTexture(uint32_t shader, int32_t locIndex, uint32_t texture) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  SetShaderValueTexture(c_shader, locIndex, c_texture);
}
void scrl_api_UnloadShader(uint32_t shader) {
  Shader c_shader = scrl_resource_get(shader, SCRL_RESOURCE_SHADER)->value.shader;
  scrl_resource_require_owned(shader, SCRL_RESOURCE_SHADER);
  UnloadShader(c_shader);
  scrl_resource_release(shader, SCRL_RESOURCE_SHADER);
}
void scrl_api_GetScreenToWorldRay(double position_0, double position_1, double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, void (*callback)(double, double, double, double, double, double, void *), void *context) {
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Ray result = GetScreenToWorldRay(c_position, c_camera);
  callback(result.position.x, result.position.y, result.position.z, result.direction.x, result.direction.y, result.direction.z, context);
}
void scrl_api_GetScreenToWorldRayEx(double position_0, double position_1, double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, int32_t width, int32_t height, void (*callback)(double, double, double, double, double, double, void *), void *context) {
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Ray result = GetScreenToWorldRayEx(c_position, c_camera, width, height);
  callback(result.position.x, result.position.y, result.position.z, result.direction.x, result.direction.y, result.direction.z, context);
}
void scrl_api_GetWorldToScreen(double position_0, double position_1, double position_2, double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, void (*callback)(double, double, void *), void *context) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Vector2 result = GetWorldToScreen(c_position, c_camera);
  callback(result.x, result.y, context);
}
void scrl_api_GetWorldToScreenEx(double position_0, double position_1, double position_2, double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, int32_t width, int32_t height, void (*callback)(double, double, void *), void *context) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Vector2 result = GetWorldToScreenEx(c_position, c_camera, width, height);
  callback(result.x, result.y, context);
}
void scrl_api_GetWorldToScreen2D(double position_0, double position_1, double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, void (*callback)(double, double, void *), void *context) {
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Camera2D c_camera = (Camera2D){0};
  c_camera.offset.x = (float)camera_0;
  c_camera.offset.y = (float)camera_1;
  c_camera.target.x = (float)camera_2;
  c_camera.target.y = (float)camera_3;
  c_camera.rotation = (float)camera_4;
  c_camera.zoom = (float)camera_5;
  Vector2 result = GetWorldToScreen2D(c_position, c_camera);
  callback(result.x, result.y, context);
}
void scrl_api_GetScreenToWorld2D(double position_0, double position_1, double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, void (*callback)(double, double, void *), void *context) {
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Camera2D c_camera = (Camera2D){0};
  c_camera.offset.x = (float)camera_0;
  c_camera.offset.y = (float)camera_1;
  c_camera.target.x = (float)camera_2;
  c_camera.target.y = (float)camera_3;
  c_camera.rotation = (float)camera_4;
  c_camera.zoom = (float)camera_5;
  Vector2 result = GetScreenToWorld2D(c_position, c_camera);
  callback(result.x, result.y, context);
}
void scrl_api_GetCameraMatrix(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, void (*callback)(double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, void *), void *context) {
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Matrix result = GetCameraMatrix(c_camera);
  callback(result.m0, result.m4, result.m8, result.m12, result.m1, result.m5, result.m9, result.m13, result.m2, result.m6, result.m10, result.m14, result.m3, result.m7, result.m11, result.m15, context);
}
void scrl_api_GetCameraMatrix2D(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, void (*callback)(double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, void *), void *context) {
  Camera2D c_camera = (Camera2D){0};
  c_camera.offset.x = (float)camera_0;
  c_camera.offset.y = (float)camera_1;
  c_camera.target.x = (float)camera_2;
  c_camera.target.y = (float)camera_3;
  c_camera.rotation = (float)camera_4;
  c_camera.zoom = (float)camera_5;
  Matrix result = GetCameraMatrix2D(c_camera);
  callback(result.m0, result.m4, result.m8, result.m12, result.m1, result.m5, result.m9, result.m13, result.m2, result.m6, result.m10, result.m14, result.m3, result.m7, result.m11, result.m15, context);
}
void scrl_api_SetTargetFPS(int32_t fps) {
  SetTargetFPS(fps);
}
double scrl_api_GetFrameTime(void) {
  double scrl_result = (double)(GetFrameTime());
  return scrl_result;
}
double scrl_api_GetTime(void) {
  double scrl_result = (double)(GetTime());
  return scrl_result;
}
int32_t scrl_api_GetFPS(void) {
  int32_t scrl_result = (int32_t)(GetFPS());
  return scrl_result;
}
void scrl_api_SwapScreenBuffer(void) {
  SwapScreenBuffer();
}
void scrl_api_PollInputEvents(void) {
  PollInputEvents();
}
void scrl_api_WaitTime(double seconds) {
  WaitTime(seconds);
}
void scrl_api_SetRandomSeed(uint32_t seed) {
  SetRandomSeed(seed);
}
int32_t scrl_api_GetRandomValue(int32_t min, int32_t max) {
  int32_t scrl_result = (int32_t)(GetRandomValue(min, max));
  return scrl_result;
}
void scrl_api_TakeScreenshot(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  TakeScreenshot(c_fileName);
  free(c_fileName);
}
void scrl_api_SetConfigFlags(uint32_t flags) {
  SetConfigFlags(flags);
}
void scrl_api_OpenURL(const uint8_t *url, size_t url_length, uint8_t url_present) {
  char *c_url = scrl_string_copy(url, url_length, url_present);
  OpenURL(c_url);
  free(c_url);
}
void scrl_api_SetTraceLogLevel(int32_t logLevel) {
  SetTraceLogLevel(logLevel);
}
uint8_t scrl_api_SaveFileData(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, const uint8_t *data, size_t data_length, int32_t dataSize) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  if (dataSize < 0 || (size_t)dataSize > data_length) scrl_fail("byte count exceeds Uint8Array length");
  uint8_t scrl_result = (uint8_t)(SaveFileData(c_fileName, (void *)data, dataSize));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_ExportDataAsCode(const uint8_t *data, size_t data_length, int32_t dataSize, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  if (dataSize < 0 || (size_t)dataSize > data_length) scrl_fail("byte count exceeds Uint8Array length");
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportDataAsCode((const unsigned char *)data, dataSize, c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_LoadFileText(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, void (*callback)(const char *, void *), void *context) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  const char *result = LoadFileText(c_fileName);
  free(c_fileName);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_SaveFileText(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  char *c_text = scrl_string_copy(text, text_length, text_present);
  uint8_t scrl_result = (uint8_t)(SaveFileText(c_fileName, c_text));
  free(c_text);
  free(c_fileName);
  return scrl_result;
}
int32_t scrl_api_FileRename(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, const uint8_t *fileRename, size_t fileRename_length, uint8_t fileRename_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  char *c_fileRename = scrl_string_copy(fileRename, fileRename_length, fileRename_present);
  int32_t scrl_result = (int32_t)(FileRename(c_fileName, c_fileRename));
  free(c_fileRename);
  free(c_fileName);
  return scrl_result;
}
int32_t scrl_api_FileRemove(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  int32_t scrl_result = (int32_t)(FileRemove(c_fileName));
  free(c_fileName);
  return scrl_result;
}
int32_t scrl_api_FileCopy(const uint8_t *srcPath, size_t srcPath_length, uint8_t srcPath_present, const uint8_t *dstPath, size_t dstPath_length, uint8_t dstPath_present) {
  char *c_srcPath = scrl_string_copy(srcPath, srcPath_length, srcPath_present);
  char *c_dstPath = scrl_string_copy(dstPath, dstPath_length, dstPath_present);
  int32_t scrl_result = (int32_t)(FileCopy(c_srcPath, c_dstPath));
  free(c_dstPath);
  free(c_srcPath);
  return scrl_result;
}
int32_t scrl_api_FileMove(const uint8_t *srcPath, size_t srcPath_length, uint8_t srcPath_present, const uint8_t *dstPath, size_t dstPath_length, uint8_t dstPath_present) {
  char *c_srcPath = scrl_string_copy(srcPath, srcPath_length, srcPath_present);
  char *c_dstPath = scrl_string_copy(dstPath, dstPath_length, dstPath_present);
  int32_t scrl_result = (int32_t)(FileMove(c_srcPath, c_dstPath));
  free(c_dstPath);
  free(c_srcPath);
  return scrl_result;
}
int32_t scrl_api_FileTextReplace(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, const uint8_t *search, size_t search_length, uint8_t search_present, const uint8_t *replacement, size_t replacement_length, uint8_t replacement_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  char *c_search = scrl_string_copy(search, search_length, search_present);
  char *c_replacement = scrl_string_copy(replacement, replacement_length, replacement_present);
  int32_t scrl_result = (int32_t)(FileTextReplace(c_fileName, c_search, c_replacement));
  free(c_replacement);
  free(c_search);
  free(c_fileName);
  return scrl_result;
}
int32_t scrl_api_FileTextFindIndex(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, const uint8_t *search, size_t search_length, uint8_t search_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  char *c_search = scrl_string_copy(search, search_length, search_present);
  int32_t scrl_result = (int32_t)(FileTextFindIndex(c_fileName, c_search));
  free(c_search);
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_FileExists(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(FileExists(c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_DirectoryExists(const uint8_t *dirPath, size_t dirPath_length, uint8_t dirPath_present) {
  char *c_dirPath = scrl_string_copy(dirPath, dirPath_length, dirPath_present);
  uint8_t scrl_result = (uint8_t)(DirectoryExists(c_dirPath));
  free(c_dirPath);
  return scrl_result;
}
uint8_t scrl_api_IsFileExtension(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, const uint8_t *ext, size_t ext_length, uint8_t ext_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  char *c_ext = scrl_string_copy(ext, ext_length, ext_present);
  uint8_t scrl_result = (uint8_t)(IsFileExtension(c_fileName, c_ext));
  free(c_ext);
  free(c_fileName);
  return scrl_result;
}
int32_t scrl_api_GetFileLength(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  int32_t scrl_result = (int32_t)(GetFileLength(c_fileName));
  free(c_fileName);
  return scrl_result;
}
double scrl_api_GetFileModTime(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  double scrl_result = (double)(GetFileModTime(c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_GetFileExtension(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, void (*callback)(const char *, void *), void *context) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  const char *result = GetFileExtension(c_fileName);
  free(c_fileName);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetFileName(const uint8_t *filePath, size_t filePath_length, uint8_t filePath_present, void (*callback)(const char *, void *), void *context) {
  char *c_filePath = scrl_string_copy(filePath, filePath_length, filePath_present);
  const char *result = GetFileName(c_filePath);
  free(c_filePath);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetFileNameWithoutExt(const uint8_t *filePath, size_t filePath_length, uint8_t filePath_present, void (*callback)(const char *, void *), void *context) {
  char *c_filePath = scrl_string_copy(filePath, filePath_length, filePath_present);
  const char *result = GetFileNameWithoutExt(c_filePath);
  free(c_filePath);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetDirectoryPath(const uint8_t *filePath, size_t filePath_length, uint8_t filePath_present, void (*callback)(const char *, void *), void *context) {
  char *c_filePath = scrl_string_copy(filePath, filePath_length, filePath_present);
  const char *result = GetDirectoryPath(c_filePath);
  free(c_filePath);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetPrevDirectoryPath(const uint8_t *dirPath, size_t dirPath_length, uint8_t dirPath_present, void (*callback)(const char *, void *), void *context) {
  char *c_dirPath = scrl_string_copy(dirPath, dirPath_length, dirPath_present);
  const char *result = GetPrevDirectoryPath(c_dirPath);
  free(c_dirPath);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetWorkingDirectory(void (*callback)(const char *, void *), void *context) {
  const char *result = GetWorkingDirectory();
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetApplicationDirectory(void (*callback)(const char *, void *), void *context) {
  const char *result = GetApplicationDirectory();
  if (!result) return 0;
  callback(result, context);
  return 1;
}
int32_t scrl_api_MakeDirectory(const uint8_t *dirPath, size_t dirPath_length, uint8_t dirPath_present) {
  char *c_dirPath = scrl_string_copy(dirPath, dirPath_length, dirPath_present);
  int32_t scrl_result = (int32_t)(MakeDirectory(c_dirPath));
  free(c_dirPath);
  return scrl_result;
}
uint8_t scrl_api_ChangeDirectory(const uint8_t *dirPath, size_t dirPath_length, uint8_t dirPath_present) {
  char *c_dirPath = scrl_string_copy(dirPath, dirPath_length, dirPath_present);
  uint8_t scrl_result = (uint8_t)(ChangeDirectory(c_dirPath));
  free(c_dirPath);
  return scrl_result;
}
uint8_t scrl_api_IsPathFile(const uint8_t *path, size_t path_length, uint8_t path_present) {
  char *c_path = scrl_string_copy(path, path_length, path_present);
  uint8_t scrl_result = (uint8_t)(IsPathFile(c_path));
  free(c_path);
  return scrl_result;
}
uint8_t scrl_api_IsFileNameValid(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(IsFileNameValid(c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadDirectoryFiles(const uint8_t *dirPath, size_t dirPath_length, uint8_t dirPath_present) {
  char *c_dirPath = scrl_string_copy(dirPath, dirPath_length, dirPath_present);
  FilePathList result = LoadDirectoryFiles(c_dirPath);
  ScrlResourceValue value = {0};
  value.filePathList = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FILE_PATH_LIST, value, 1);
  free(c_dirPath);
  return scrl_result;
}
uint32_t scrl_api_LoadDirectoryFilesEx(const uint8_t *basePath, size_t basePath_length, uint8_t basePath_present, const uint8_t *filter, size_t filter_length, uint8_t filter_present, uint8_t scanSubdirs) {
  char *c_basePath = scrl_string_copy(basePath, basePath_length, basePath_present);
  char *c_filter = scrl_string_copy(filter, filter_length, filter_present);
  FilePathList result = LoadDirectoryFilesEx(c_basePath, c_filter, scanSubdirs != 0);
  ScrlResourceValue value = {0};
  value.filePathList = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FILE_PATH_LIST, value, 1);
  free(c_filter);
  free(c_basePath);
  return scrl_result;
}
void scrl_api_UnloadDirectoryFiles(uint32_t files) {
  FilePathList c_files = scrl_resource_get(files, SCRL_RESOURCE_FILE_PATH_LIST)->value.filePathList;
  scrl_resource_require_owned(files, SCRL_RESOURCE_FILE_PATH_LIST);
  UnloadDirectoryFiles(c_files);
  scrl_resource_release(files, SCRL_RESOURCE_FILE_PATH_LIST);
}
uint8_t scrl_api_IsFileDropped(void) {
  uint8_t scrl_result = (uint8_t)(IsFileDropped());
  return scrl_result;
}
uint32_t scrl_api_LoadDroppedFiles(void) {
  FilePathList result = LoadDroppedFiles();
  ScrlResourceValue value = {0};
  value.filePathList = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FILE_PATH_LIST, value, 1);
  return scrl_result;
}
void scrl_api_UnloadDroppedFiles(uint32_t files) {
  FilePathList c_files = scrl_resource_get(files, SCRL_RESOURCE_FILE_PATH_LIST)->value.filePathList;
  scrl_resource_require_owned(files, SCRL_RESOURCE_FILE_PATH_LIST);
  UnloadDroppedFiles(c_files);
  scrl_resource_release(files, SCRL_RESOURCE_FILE_PATH_LIST);
}
uint32_t scrl_api_GetDirectoryFileCount(const uint8_t *dirPath, size_t dirPath_length, uint8_t dirPath_present) {
  char *c_dirPath = scrl_string_copy(dirPath, dirPath_length, dirPath_present);
  uint32_t scrl_result = (uint32_t)(GetDirectoryFileCount(c_dirPath));
  free(c_dirPath);
  return scrl_result;
}
uint32_t scrl_api_GetDirectoryFileCountEx(const uint8_t *basePath, size_t basePath_length, uint8_t basePath_present, const uint8_t *filter, size_t filter_length, uint8_t filter_present, uint8_t scanSubdirs) {
  char *c_basePath = scrl_string_copy(basePath, basePath_length, basePath_present);
  char *c_filter = scrl_string_copy(filter, filter_length, filter_present);
  uint32_t scrl_result = (uint32_t)(GetDirectoryFileCountEx(c_basePath, c_filter, scanSubdirs != 0));
  free(c_filter);
  free(c_basePath);
  return scrl_result;
}
uint32_t scrl_api_ComputeCRC32(const uint8_t *data, size_t data_length, int32_t dataSize) {
  if (dataSize < 0 || (size_t)dataSize > data_length) scrl_fail("byte count exceeds Uint8Array length");
  uint32_t scrl_result = (uint32_t)(ComputeCRC32((unsigned char *)data, dataSize));
  return scrl_result;
}
uint32_t scrl_api_LoadAutomationEventList(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  AutomationEventList result = LoadAutomationEventList(c_fileName);
  ScrlResourceValue value = {0};
  value.automationEventList = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_AUTOMATION_EVENT_LIST, value, 1);
  free(c_fileName);
  return scrl_result;
}
void scrl_api_UnloadAutomationEventList(uint32_t list) {
  AutomationEventList c_list = scrl_resource_get(list, SCRL_RESOURCE_AUTOMATION_EVENT_LIST)->value.automationEventList;
  scrl_resource_require_owned(list, SCRL_RESOURCE_AUTOMATION_EVENT_LIST);
  UnloadAutomationEventList(c_list);
  scrl_resource_release(list, SCRL_RESOURCE_AUTOMATION_EVENT_LIST);
}
uint8_t scrl_api_ExportAutomationEventList(uint32_t list, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  AutomationEventList c_list = scrl_resource_get(list, SCRL_RESOURCE_AUTOMATION_EVENT_LIST)->value.automationEventList;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportAutomationEventList(c_list, c_fileName));
  free(c_fileName);
  return scrl_result;
}
void scrl_api_SetAutomationEventList(uint32_t list) {
  AutomationEventList *c_list = &scrl_resource_get(list, SCRL_RESOURCE_AUTOMATION_EVENT_LIST)->value.automationEventList;
  SetAutomationEventList(c_list);
}
void scrl_api_SetAutomationEventBaseFrame(int32_t frame) {
  SetAutomationEventBaseFrame(frame);
}
void scrl_api_StartAutomationEventRecording(void) {
  StartAutomationEventRecording();
}
void scrl_api_StopAutomationEventRecording(void) {
  StopAutomationEventRecording();
}
void scrl_api_PlayAutomationEvent(uint32_t event_0, uint32_t event_1, int32_t event_2, int32_t event_3, int32_t event_4, int32_t event_5) {
  AutomationEvent c_event = (AutomationEvent){0};
  c_event.frame = (unsigned int)event_0;
  c_event.type = (unsigned int)event_1;
  c_event.params[0] = (int)event_2;
  c_event.params[1] = (int)event_3;
  c_event.params[2] = (int)event_4;
  c_event.params[3] = (int)event_5;
  PlayAutomationEvent(c_event);
}
uint8_t scrl_api_IsKeyPressed(int32_t key) {
  uint8_t scrl_result = (uint8_t)(IsKeyPressed(key));
  return scrl_result;
}
uint8_t scrl_api_IsKeyPressedRepeat(int32_t key) {
  uint8_t scrl_result = (uint8_t)(IsKeyPressedRepeat(key));
  return scrl_result;
}
uint8_t scrl_api_IsKeyDown(int32_t key) {
  uint8_t scrl_result = (uint8_t)(IsKeyDown(key));
  return scrl_result;
}
uint8_t scrl_api_IsKeyReleased(int32_t key) {
  uint8_t scrl_result = (uint8_t)(IsKeyReleased(key));
  return scrl_result;
}
uint8_t scrl_api_IsKeyUp(int32_t key) {
  uint8_t scrl_result = (uint8_t)(IsKeyUp(key));
  return scrl_result;
}
int32_t scrl_api_GetKeyPressed(void) {
  int32_t scrl_result = (int32_t)(GetKeyPressed());
  return scrl_result;
}
int32_t scrl_api_GetCharPressed(void) {
  int32_t scrl_result = (int32_t)(GetCharPressed());
  return scrl_result;
}
uint8_t scrl_api_GetKeyName(int32_t key, void (*callback)(const char *, void *), void *context) {
  const char *result = GetKeyName(key);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
void scrl_api_SetExitKey(int32_t key) {
  SetExitKey(key);
}
uint8_t scrl_api_IsGamepadAvailable(int32_t gamepad) {
  uint8_t scrl_result = (uint8_t)(IsGamepadAvailable(gamepad));
  return scrl_result;
}
uint8_t scrl_api_GetGamepadName(int32_t gamepad, void (*callback)(const char *, void *), void *context) {
  const char *result = GetGamepadName(gamepad);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_IsGamepadButtonPressed(int32_t gamepad, int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsGamepadButtonPressed(gamepad, button));
  return scrl_result;
}
uint8_t scrl_api_IsGamepadButtonDown(int32_t gamepad, int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsGamepadButtonDown(gamepad, button));
  return scrl_result;
}
uint8_t scrl_api_IsGamepadButtonReleased(int32_t gamepad, int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsGamepadButtonReleased(gamepad, button));
  return scrl_result;
}
uint8_t scrl_api_IsGamepadButtonUp(int32_t gamepad, int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsGamepadButtonUp(gamepad, button));
  return scrl_result;
}
int32_t scrl_api_GetGamepadButtonPressed(void) {
  int32_t scrl_result = (int32_t)(GetGamepadButtonPressed());
  return scrl_result;
}
int32_t scrl_api_GetGamepadAxisCount(int32_t gamepad) {
  int32_t scrl_result = (int32_t)(GetGamepadAxisCount(gamepad));
  return scrl_result;
}
double scrl_api_GetGamepadAxisMovement(int32_t gamepad, int32_t axis) {
  double scrl_result = (double)(GetGamepadAxisMovement(gamepad, axis));
  return scrl_result;
}
int32_t scrl_api_SetGamepadMappings(const uint8_t *mappings, size_t mappings_length, uint8_t mappings_present) {
  char *c_mappings = scrl_string_copy(mappings, mappings_length, mappings_present);
  int32_t scrl_result = (int32_t)(SetGamepadMappings(c_mappings));
  free(c_mappings);
  return scrl_result;
}
void scrl_api_SetGamepadVibration(int32_t gamepad, double leftMotor, double rightMotor, double duration) {
  SetGamepadVibration(gamepad, (float)leftMotor, (float)rightMotor, (float)duration);
}
uint8_t scrl_api_IsMouseButtonPressed(int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsMouseButtonPressed(button));
  return scrl_result;
}
uint8_t scrl_api_IsMouseButtonDown(int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsMouseButtonDown(button));
  return scrl_result;
}
uint8_t scrl_api_IsMouseButtonReleased(int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsMouseButtonReleased(button));
  return scrl_result;
}
uint8_t scrl_api_IsMouseButtonUp(int32_t button) {
  uint8_t scrl_result = (uint8_t)(IsMouseButtonUp(button));
  return scrl_result;
}
int32_t scrl_api_GetMouseX(void) {
  int32_t scrl_result = (int32_t)(GetMouseX());
  return scrl_result;
}
int32_t scrl_api_GetMouseY(void) {
  int32_t scrl_result = (int32_t)(GetMouseY());
  return scrl_result;
}
void scrl_api_GetMousePosition(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetMousePosition();
  callback(result.x, result.y, context);
}
void scrl_api_GetMouseDelta(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetMouseDelta();
  callback(result.x, result.y, context);
}
void scrl_api_SetMousePosition(int32_t x, int32_t y) {
  SetMousePosition(x, y);
}
void scrl_api_SetMouseOffset(int32_t offsetX, int32_t offsetY) {
  SetMouseOffset(offsetX, offsetY);
}
void scrl_api_SetMouseScale(double scaleX, double scaleY) {
  SetMouseScale((float)scaleX, (float)scaleY);
}
double scrl_api_GetMouseWheelMove(void) {
  double scrl_result = (double)(GetMouseWheelMove());
  return scrl_result;
}
void scrl_api_GetMouseWheelMoveV(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetMouseWheelMoveV();
  callback(result.x, result.y, context);
}
void scrl_api_SetMouseCursor(int32_t cursor) {
  SetMouseCursor(cursor);
}
int32_t scrl_api_GetTouchX(void) {
  int32_t scrl_result = (int32_t)(GetTouchX());
  return scrl_result;
}
int32_t scrl_api_GetTouchY(void) {
  int32_t scrl_result = (int32_t)(GetTouchY());
  return scrl_result;
}
void scrl_api_GetTouchPosition(int32_t index, void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetTouchPosition(index);
  callback(result.x, result.y, context);
}
int32_t scrl_api_GetTouchPointId(int32_t index) {
  int32_t scrl_result = (int32_t)(GetTouchPointId(index));
  return scrl_result;
}
int32_t scrl_api_GetTouchPointCount(void) {
  int32_t scrl_result = (int32_t)(GetTouchPointCount());
  return scrl_result;
}
void scrl_api_SetGesturesEnabled(uint32_t flags) {
  SetGesturesEnabled(flags);
}
uint8_t scrl_api_IsGestureDetected(uint32_t gesture) {
  uint8_t scrl_result = (uint8_t)(IsGestureDetected(gesture));
  return scrl_result;
}
int32_t scrl_api_GetGestureDetected(void) {
  int32_t scrl_result = (int32_t)(GetGestureDetected());
  return scrl_result;
}
double scrl_api_GetGestureHoldDuration(void) {
  double scrl_result = (double)(GetGestureHoldDuration());
  return scrl_result;
}
void scrl_api_GetGestureDragVector(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetGestureDragVector();
  callback(result.x, result.y, context);
}
double scrl_api_GetGestureDragAngle(void) {
  double scrl_result = (double)(GetGestureDragAngle());
  return scrl_result;
}
void scrl_api_GetGesturePinchVector(void (*callback)(double, double, void *), void *context) {
  Vector2 result = GetGesturePinchVector();
  callback(result.x, result.y, context);
}
double scrl_api_GetGesturePinchAngle(void) {
  double scrl_result = (double)(GetGesturePinchAngle());
  return scrl_result;
}
void scrl_api_SetShapesTexture(uint32_t texture, double source_0, double source_1, double source_2, double source_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Rectangle c_source = (Rectangle){0};
  c_source.x = (float)source_0;
  c_source.y = (float)source_1;
  c_source.width = (float)source_2;
  c_source.height = (float)source_3;
  SetShapesTexture(c_texture, c_source);
}
uint32_t scrl_api_GetShapesTexture(void) {
  Texture result = GetShapesTexture();
  ScrlResourceValue value = {0};
  value.texture = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_TEXTURE, value, 0);
  return scrl_result;
}
void scrl_api_GetShapesTextureRectangle(void (*callback)(double, double, double, double, void *), void *context) {
  Rectangle result = GetShapesTextureRectangle();
  callback(result.x, result.y, result.width, result.height, context);
}
void scrl_api_DrawPixel(int32_t posX, int32_t posY, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPixel(posX, posY, c_color);
}
void scrl_api_DrawPixelV(double position_0, double position_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPixelV(c_position, c_color);
}
void scrl_api_DrawLine(int32_t startPosX, int32_t startPosY, int32_t endPosX, int32_t endPosY, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLine(startPosX, startPosY, endPosX, endPosY, c_color);
}
void scrl_api_DrawLineV(double startPos_0, double startPos_1, double endPos_0, double endPos_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_startPos = (Vector2){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  Vector2 c_endPos = (Vector2){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLineV(c_startPos, c_endPos, c_color);
}
void scrl_api_DrawLineEx(double startPos_0, double startPos_1, double endPos_0, double endPos_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_startPos = (Vector2){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  Vector2 c_endPos = (Vector2){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLineEx(c_startPos, c_endPos, (float)thick, c_color);
}
void scrl_api_DrawLineStrip(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLineStrip(c_points, pointCount, c_color);
  free(c_points);
}
void scrl_api_DrawLineBezier(double startPos_0, double startPos_1, double endPos_0, double endPos_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_startPos = (Vector2){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  Vector2 c_endPos = (Vector2){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLineBezier(c_startPos, c_endPos, (float)thick, c_color);
}
void scrl_api_DrawLineDashed(double startPos_0, double startPos_1, double endPos_0, double endPos_1, int32_t dashSize, int32_t spaceSize, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_startPos = (Vector2){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  Vector2 c_endPos = (Vector2){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLineDashed(c_startPos, c_endPos, dashSize, spaceSize, c_color);
}
void scrl_api_DrawCircle(int32_t centerX, int32_t centerY, double radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircle(centerX, centerY, (float)radius, c_color);
}
void scrl_api_DrawCircleV(double center_0, double center_1, double radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircleV(c_center, (float)radius, c_color);
}
void scrl_api_DrawCircleGradient(double center_0, double center_1, double radius, uint8_t inner_0, uint8_t inner_1, uint8_t inner_2, uint8_t inner_3, uint8_t outer_0, uint8_t outer_1, uint8_t outer_2, uint8_t outer_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_inner = (Color){0};
  c_inner.r = (unsigned char)inner_0;
  c_inner.g = (unsigned char)inner_1;
  c_inner.b = (unsigned char)inner_2;
  c_inner.a = (unsigned char)inner_3;
  Color c_outer = (Color){0};
  c_outer.r = (unsigned char)outer_0;
  c_outer.g = (unsigned char)outer_1;
  c_outer.b = (unsigned char)outer_2;
  c_outer.a = (unsigned char)outer_3;
  DrawCircleGradient(c_center, (float)radius, c_inner, c_outer);
}
void scrl_api_DrawCircleSector(double center_0, double center_1, double radius, double startAngle, double endAngle, int32_t segments, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircleSector(c_center, (float)radius, (float)startAngle, (float)endAngle, segments, c_color);
}
void scrl_api_DrawCircleSectorLines(double center_0, double center_1, double radius, double startAngle, double endAngle, int32_t segments, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircleSectorLines(c_center, (float)radius, (float)startAngle, (float)endAngle, segments, c_color);
}
void scrl_api_DrawCircleLines(int32_t centerX, int32_t centerY, double radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircleLines(centerX, centerY, (float)radius, c_color);
}
void scrl_api_DrawCircleLinesV(double center_0, double center_1, double radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircleLinesV(c_center, (float)radius, c_color);
}
void scrl_api_DrawEllipse(int32_t centerX, int32_t centerY, double radiusH, double radiusV, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawEllipse(centerX, centerY, (float)radiusH, (float)radiusV, c_color);
}
void scrl_api_DrawEllipseV(double center_0, double center_1, double radiusH, double radiusV, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawEllipseV(c_center, (float)radiusH, (float)radiusV, c_color);
}
void scrl_api_DrawEllipseLines(int32_t centerX, int32_t centerY, double radiusH, double radiusV, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawEllipseLines(centerX, centerY, (float)radiusH, (float)radiusV, c_color);
}
void scrl_api_DrawEllipseLinesV(double center_0, double center_1, double radiusH, double radiusV, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawEllipseLinesV(c_center, (float)radiusH, (float)radiusV, c_color);
}
void scrl_api_DrawRing(double center_0, double center_1, double innerRadius, double outerRadius, double startAngle, double endAngle, int32_t segments, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRing(c_center, (float)innerRadius, (float)outerRadius, (float)startAngle, (float)endAngle, segments, c_color);
}
void scrl_api_DrawRingLines(double center_0, double center_1, double innerRadius, double outerRadius, double startAngle, double endAngle, int32_t segments, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRingLines(c_center, (float)innerRadius, (float)outerRadius, (float)startAngle, (float)endAngle, segments, c_color);
}
void scrl_api_DrawRectangle(int32_t posX, int32_t posY, int32_t width, int32_t height, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangle(posX, posY, width, height, c_color);
}
void scrl_api_DrawRectangleV(double position_0, double position_1, double size_0, double size_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Vector2 c_size = (Vector2){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleV(c_position, c_size, c_color);
}
void scrl_api_DrawRectangleRec(double rec_0, double rec_1, double rec_2, double rec_3, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleRec(c_rec, c_color);
}
void scrl_api_DrawRectanglePro(double rec_0, double rec_1, double rec_2, double rec_3, double origin_0, double origin_1, double rotation, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Vector2 c_origin = (Vector2){0};
  c_origin.x = (float)origin_0;
  c_origin.y = (float)origin_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectanglePro(c_rec, c_origin, (float)rotation, c_color);
}
void scrl_api_DrawRectangleGradientV(int32_t posX, int32_t posY, int32_t width, int32_t height, uint8_t top_0, uint8_t top_1, uint8_t top_2, uint8_t top_3, uint8_t bottom_0, uint8_t bottom_1, uint8_t bottom_2, uint8_t bottom_3) {
  Color c_top = (Color){0};
  c_top.r = (unsigned char)top_0;
  c_top.g = (unsigned char)top_1;
  c_top.b = (unsigned char)top_2;
  c_top.a = (unsigned char)top_3;
  Color c_bottom = (Color){0};
  c_bottom.r = (unsigned char)bottom_0;
  c_bottom.g = (unsigned char)bottom_1;
  c_bottom.b = (unsigned char)bottom_2;
  c_bottom.a = (unsigned char)bottom_3;
  DrawRectangleGradientV(posX, posY, width, height, c_top, c_bottom);
}
void scrl_api_DrawRectangleGradientH(int32_t posX, int32_t posY, int32_t width, int32_t height, uint8_t left_0, uint8_t left_1, uint8_t left_2, uint8_t left_3, uint8_t right_0, uint8_t right_1, uint8_t right_2, uint8_t right_3) {
  Color c_left = (Color){0};
  c_left.r = (unsigned char)left_0;
  c_left.g = (unsigned char)left_1;
  c_left.b = (unsigned char)left_2;
  c_left.a = (unsigned char)left_3;
  Color c_right = (Color){0};
  c_right.r = (unsigned char)right_0;
  c_right.g = (unsigned char)right_1;
  c_right.b = (unsigned char)right_2;
  c_right.a = (unsigned char)right_3;
  DrawRectangleGradientH(posX, posY, width, height, c_left, c_right);
}
void scrl_api_DrawRectangleGradientEx(double rec_0, double rec_1, double rec_2, double rec_3, uint8_t topLeft_0, uint8_t topLeft_1, uint8_t topLeft_2, uint8_t topLeft_3, uint8_t bottomLeft_0, uint8_t bottomLeft_1, uint8_t bottomLeft_2, uint8_t bottomLeft_3, uint8_t bottomRight_0, uint8_t bottomRight_1, uint8_t bottomRight_2, uint8_t bottomRight_3, uint8_t topRight_0, uint8_t topRight_1, uint8_t topRight_2, uint8_t topRight_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_topLeft = (Color){0};
  c_topLeft.r = (unsigned char)topLeft_0;
  c_topLeft.g = (unsigned char)topLeft_1;
  c_topLeft.b = (unsigned char)topLeft_2;
  c_topLeft.a = (unsigned char)topLeft_3;
  Color c_bottomLeft = (Color){0};
  c_bottomLeft.r = (unsigned char)bottomLeft_0;
  c_bottomLeft.g = (unsigned char)bottomLeft_1;
  c_bottomLeft.b = (unsigned char)bottomLeft_2;
  c_bottomLeft.a = (unsigned char)bottomLeft_3;
  Color c_bottomRight = (Color){0};
  c_bottomRight.r = (unsigned char)bottomRight_0;
  c_bottomRight.g = (unsigned char)bottomRight_1;
  c_bottomRight.b = (unsigned char)bottomRight_2;
  c_bottomRight.a = (unsigned char)bottomRight_3;
  Color c_topRight = (Color){0};
  c_topRight.r = (unsigned char)topRight_0;
  c_topRight.g = (unsigned char)topRight_1;
  c_topRight.b = (unsigned char)topRight_2;
  c_topRight.a = (unsigned char)topRight_3;
  DrawRectangleGradientEx(c_rec, c_topLeft, c_bottomLeft, c_bottomRight, c_topRight);
}
void scrl_api_DrawRectangleLines(int32_t posX, int32_t posY, int32_t width, int32_t height, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleLines(posX, posY, width, height, c_color);
}
void scrl_api_DrawRectangleLinesEx(double rec_0, double rec_1, double rec_2, double rec_3, double lineThick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleLinesEx(c_rec, (float)lineThick, c_color);
}
void scrl_api_DrawRectangleRounded(double rec_0, double rec_1, double rec_2, double rec_3, double roundness, int32_t segments, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleRounded(c_rec, (float)roundness, segments, c_color);
}
void scrl_api_DrawRectangleRoundedLines(double rec_0, double rec_1, double rec_2, double rec_3, double roundness, int32_t segments, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleRoundedLines(c_rec, (float)roundness, segments, c_color);
}
void scrl_api_DrawRectangleRoundedLinesEx(double rec_0, double rec_1, double rec_2, double rec_3, double roundness, int32_t segments, double lineThick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRectangleRoundedLinesEx(c_rec, (float)roundness, segments, (float)lineThick, c_color);
}
void scrl_api_DrawTriangle(double v1_0, double v1_1, double v2_0, double v2_1, double v3_0, double v3_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_v1 = (Vector2){0};
  c_v1.x = (float)v1_0;
  c_v1.y = (float)v1_1;
  Vector2 c_v2 = (Vector2){0};
  c_v2.x = (float)v2_0;
  c_v2.y = (float)v2_1;
  Vector2 c_v3 = (Vector2){0};
  c_v3.x = (float)v3_0;
  c_v3.y = (float)v3_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawTriangle(c_v1, c_v2, c_v3, c_color);
}
void scrl_api_DrawTriangleLines(double v1_0, double v1_1, double v2_0, double v2_1, double v3_0, double v3_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_v1 = (Vector2){0};
  c_v1.x = (float)v1_0;
  c_v1.y = (float)v1_1;
  Vector2 c_v2 = (Vector2){0};
  c_v2.x = (float)v2_0;
  c_v2.y = (float)v2_1;
  Vector2 c_v3 = (Vector2){0};
  c_v3.x = (float)v3_0;
  c_v3.y = (float)v3_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawTriangleLines(c_v1, c_v2, c_v3, c_color);
}
void scrl_api_DrawTriangleFan(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawTriangleFan(c_points, pointCount, c_color);
  free(c_points);
}
void scrl_api_DrawTriangleStrip(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawTriangleStrip(c_points, pointCount, c_color);
  free(c_points);
}
void scrl_api_DrawPoly(double center_0, double center_1, int32_t sides, double radius, double rotation, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPoly(c_center, sides, (float)radius, (float)rotation, c_color);
}
void scrl_api_DrawPolyLines(double center_0, double center_1, int32_t sides, double radius, double rotation, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPolyLines(c_center, sides, (float)radius, (float)rotation, c_color);
}
void scrl_api_DrawPolyLinesEx(double center_0, double center_1, int32_t sides, double radius, double rotation, double lineThick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPolyLinesEx(c_center, sides, (float)radius, (float)rotation, (float)lineThick, c_color);
}
void scrl_api_DrawSplineLinear(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineLinear(c_points, pointCount, (float)thick, c_color);
  free(c_points);
}
void scrl_api_DrawSplineBasis(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineBasis(c_points, pointCount, (float)thick, c_color);
  free(c_points);
}
void scrl_api_DrawSplineCatmullRom(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineCatmullRom(c_points, pointCount, (float)thick, c_color);
  free(c_points);
}
void scrl_api_DrawSplineBezierQuadratic(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineBezierQuadratic(c_points, pointCount, (float)thick, c_color);
  free(c_points);
}
void scrl_api_DrawSplineBezierCubic(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineBezierCubic(c_points, pointCount, (float)thick, c_color);
  free(c_points);
}
void scrl_api_DrawSplineSegmentLinear(double p1_0, double p1_1, double p2_0, double p2_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineSegmentLinear(c_p1, c_p2, (float)thick, c_color);
}
void scrl_api_DrawSplineSegmentBasis(double p1_0, double p1_1, double p2_0, double p2_1, double p3_0, double p3_1, double p4_0, double p4_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  Vector2 c_p4 = (Vector2){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineSegmentBasis(c_p1, c_p2, c_p3, c_p4, (float)thick, c_color);
}
void scrl_api_DrawSplineSegmentCatmullRom(double p1_0, double p1_1, double p2_0, double p2_1, double p3_0, double p3_1, double p4_0, double p4_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  Vector2 c_p4 = (Vector2){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineSegmentCatmullRom(c_p1, c_p2, c_p3, c_p4, (float)thick, c_color);
}
void scrl_api_DrawSplineSegmentBezierQuadratic(double p1_0, double p1_1, double c2_0, double c2_1, double p3_0, double p3_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_c2 = (Vector2){0};
  c_c2.x = (float)c2_0;
  c_c2.y = (float)c2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineSegmentBezierQuadratic(c_p1, c_c2, c_p3, (float)thick, c_color);
}
void scrl_api_DrawSplineSegmentBezierCubic(double p1_0, double p1_1, double c2_0, double c2_1, double c3_0, double c3_1, double p4_0, double p4_1, double thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_c2 = (Vector2){0};
  c_c2.x = (float)c2_0;
  c_c2.y = (float)c2_1;
  Vector2 c_c3 = (Vector2){0};
  c_c3.x = (float)c3_0;
  c_c3.y = (float)c3_1;
  Vector2 c_p4 = (Vector2){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSplineSegmentBezierCubic(c_p1, c_c2, c_c3, c_p4, (float)thick, c_color);
}
void scrl_api_GetSplinePointLinear(double startPos_0, double startPos_1, double endPos_0, double endPos_1, double t, void (*callback)(double, double, void *), void *context) {
  Vector2 c_startPos = (Vector2){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  Vector2 c_endPos = (Vector2){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  Vector2 result = GetSplinePointLinear(c_startPos, c_endPos, (float)t);
  callback(result.x, result.y, context);
}
void scrl_api_GetSplinePointBasis(double p1_0, double p1_1, double p2_0, double p2_1, double p3_0, double p3_1, double p4_0, double p4_1, double t, void (*callback)(double, double, void *), void *context) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  Vector2 c_p4 = (Vector2){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  Vector2 result = GetSplinePointBasis(c_p1, c_p2, c_p3, c_p4, (float)t);
  callback(result.x, result.y, context);
}
void scrl_api_GetSplinePointCatmullRom(double p1_0, double p1_1, double p2_0, double p2_1, double p3_0, double p3_1, double p4_0, double p4_1, double t, void (*callback)(double, double, void *), void *context) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  Vector2 c_p4 = (Vector2){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  Vector2 result = GetSplinePointCatmullRom(c_p1, c_p2, c_p3, c_p4, (float)t);
  callback(result.x, result.y, context);
}
void scrl_api_GetSplinePointBezierQuad(double p1_0, double p1_1, double c2_0, double c2_1, double p3_0, double p3_1, double t, void (*callback)(double, double, void *), void *context) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_c2 = (Vector2){0};
  c_c2.x = (float)c2_0;
  c_c2.y = (float)c2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  Vector2 result = GetSplinePointBezierQuad(c_p1, c_c2, c_p3, (float)t);
  callback(result.x, result.y, context);
}
void scrl_api_GetSplinePointBezierCubic(double p1_0, double p1_1, double c2_0, double c2_1, double c3_0, double c3_1, double p4_0, double p4_1, double t, void (*callback)(double, double, void *), void *context) {
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_c2 = (Vector2){0};
  c_c2.x = (float)c2_0;
  c_c2.y = (float)c2_1;
  Vector2 c_c3 = (Vector2){0};
  c_c3.x = (float)c3_0;
  c_c3.y = (float)c3_1;
  Vector2 c_p4 = (Vector2){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  Vector2 result = GetSplinePointBezierCubic(c_p1, c_c2, c_c3, c_p4, (float)t);
  callback(result.x, result.y, context);
}
uint8_t scrl_api_CheckCollisionRecs(double rec1_0, double rec1_1, double rec1_2, double rec1_3, double rec2_0, double rec2_1, double rec2_2, double rec2_3) {
  Rectangle c_rec1 = (Rectangle){0};
  c_rec1.x = (float)rec1_0;
  c_rec1.y = (float)rec1_1;
  c_rec1.width = (float)rec1_2;
  c_rec1.height = (float)rec1_3;
  Rectangle c_rec2 = (Rectangle){0};
  c_rec2.x = (float)rec2_0;
  c_rec2.y = (float)rec2_1;
  c_rec2.width = (float)rec2_2;
  c_rec2.height = (float)rec2_3;
  uint8_t scrl_result = (uint8_t)(CheckCollisionRecs(c_rec1, c_rec2));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionCircles(double center1_0, double center1_1, double radius1, double center2_0, double center2_1, double radius2) {
  Vector2 c_center1 = (Vector2){0};
  c_center1.x = (float)center1_0;
  c_center1.y = (float)center1_1;
  Vector2 c_center2 = (Vector2){0};
  c_center2.x = (float)center2_0;
  c_center2.y = (float)center2_1;
  uint8_t scrl_result = (uint8_t)(CheckCollisionCircles(c_center1, (float)radius1, c_center2, (float)radius2));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionCircleRec(double center_0, double center_1, double radius, double rec_0, double rec_1, double rec_2, double rec_3) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  uint8_t scrl_result = (uint8_t)(CheckCollisionCircleRec(c_center, (float)radius, c_rec));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionCircleLine(double center_0, double center_1, double radius, double p1_0, double p1_1, double p2_0, double p2_1) {
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  uint8_t scrl_result = (uint8_t)(CheckCollisionCircleLine(c_center, (float)radius, c_p1, c_p2));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionPointRec(double point_0, double point_1, double rec_0, double rec_1, double rec_2, double rec_3) {
  Vector2 c_point = (Vector2){0};
  c_point.x = (float)point_0;
  c_point.y = (float)point_1;
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  uint8_t scrl_result = (uint8_t)(CheckCollisionPointRec(c_point, c_rec));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionPointCircle(double point_0, double point_1, double center_0, double center_1, double radius) {
  Vector2 c_point = (Vector2){0};
  c_point.x = (float)point_0;
  c_point.y = (float)point_1;
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  uint8_t scrl_result = (uint8_t)(CheckCollisionPointCircle(c_point, c_center, (float)radius));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionPointTriangle(double point_0, double point_1, double p1_0, double p1_1, double p2_0, double p2_1, double p3_0, double p3_1) {
  Vector2 c_point = (Vector2){0};
  c_point.x = (float)point_0;
  c_point.y = (float)point_1;
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  Vector2 c_p3 = (Vector2){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  uint8_t scrl_result = (uint8_t)(CheckCollisionPointTriangle(c_point, c_p1, c_p2, c_p3));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionPointLine(double point_0, double point_1, double p1_0, double p1_1, double p2_0, double p2_1, int32_t threshold) {
  Vector2 c_point = (Vector2){0};
  c_point.x = (float)point_0;
  c_point.y = (float)point_1;
  Vector2 c_p1 = (Vector2){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  Vector2 c_p2 = (Vector2){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  uint8_t scrl_result = (uint8_t)(CheckCollisionPointLine(c_point, c_p1, c_p2, threshold));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionPointPoly(double point_0, double point_1, double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount) {
  Vector2 c_point = (Vector2){0};
  c_point.x = (float)point_0;
  c_point.y = (float)point_1;
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  uint8_t scrl_result = (uint8_t)(CheckCollisionPointPoly(c_point, c_points, pointCount));
  free(c_points);
  return scrl_result;
}
void scrl_api_GetCollisionRec(double rec1_0, double rec1_1, double rec1_2, double rec1_3, double rec2_0, double rec2_1, double rec2_2, double rec2_3, void (*callback)(double, double, double, double, void *), void *context) {
  Rectangle c_rec1 = (Rectangle){0};
  c_rec1.x = (float)rec1_0;
  c_rec1.y = (float)rec1_1;
  c_rec1.width = (float)rec1_2;
  c_rec1.height = (float)rec1_3;
  Rectangle c_rec2 = (Rectangle){0};
  c_rec2.x = (float)rec2_0;
  c_rec2.y = (float)rec2_1;
  c_rec2.width = (float)rec2_2;
  c_rec2.height = (float)rec2_3;
  Rectangle result = GetCollisionRec(c_rec1, c_rec2);
  callback(result.x, result.y, result.width, result.height, context);
}
uint32_t scrl_api_LoadImage(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Image result = LoadImage(c_fileName);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadImageRaw(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, int32_t width, int32_t height, int32_t format, int32_t headerSize) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Image result = LoadImageRaw(c_fileName, width, height, format, headerSize);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadImageFromMemory(const uint8_t *fileType, size_t fileType_length, uint8_t fileType_present, const uint8_t *fileData, size_t fileData_length, int32_t dataSize) {
  char *c_fileType = scrl_string_copy(fileType, fileType_length, fileType_present);
  if (dataSize < 0 || (size_t)dataSize > fileData_length) scrl_fail("byte count exceeds Uint8Array length");
  Image result = LoadImageFromMemory(c_fileType, (const unsigned char *)fileData, dataSize);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  free(c_fileType);
  return scrl_result;
}
uint32_t scrl_api_LoadImageFromTexture(uint32_t texture) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Image result = LoadImageFromTexture(c_texture);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_LoadImageFromScreen(void) {
  Image result = LoadImageFromScreen();
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint8_t scrl_api_IsImageValid(uint32_t image) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  uint8_t scrl_result = (uint8_t)(IsImageValid(c_image));
  return scrl_result;
}
void scrl_api_UnloadImage(uint32_t image) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  scrl_resource_require_owned(image, SCRL_RESOURCE_IMAGE);
  UnloadImage(c_image);
  scrl_resource_release(image, SCRL_RESOURCE_IMAGE);
}
uint8_t scrl_api_ExportImage(uint32_t image, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportImage(c_image, c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_ExportImageAsCode(uint32_t image, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportImageAsCode(c_image, c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_GenImageColor(int32_t width, int32_t height, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Image result = GenImageColor(width, height, c_color);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageGradientLinear(int32_t width, int32_t height, int32_t direction, uint8_t start_0, uint8_t start_1, uint8_t start_2, uint8_t start_3, uint8_t end_0, uint8_t end_1, uint8_t end_2, uint8_t end_3) {
  Color c_start = (Color){0};
  c_start.r = (unsigned char)start_0;
  c_start.g = (unsigned char)start_1;
  c_start.b = (unsigned char)start_2;
  c_start.a = (unsigned char)start_3;
  Color c_end = (Color){0};
  c_end.r = (unsigned char)end_0;
  c_end.g = (unsigned char)end_1;
  c_end.b = (unsigned char)end_2;
  c_end.a = (unsigned char)end_3;
  Image result = GenImageGradientLinear(width, height, direction, c_start, c_end);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageGradientRadial(int32_t width, int32_t height, double density, uint8_t inner_0, uint8_t inner_1, uint8_t inner_2, uint8_t inner_3, uint8_t outer_0, uint8_t outer_1, uint8_t outer_2, uint8_t outer_3) {
  Color c_inner = (Color){0};
  c_inner.r = (unsigned char)inner_0;
  c_inner.g = (unsigned char)inner_1;
  c_inner.b = (unsigned char)inner_2;
  c_inner.a = (unsigned char)inner_3;
  Color c_outer = (Color){0};
  c_outer.r = (unsigned char)outer_0;
  c_outer.g = (unsigned char)outer_1;
  c_outer.b = (unsigned char)outer_2;
  c_outer.a = (unsigned char)outer_3;
  Image result = GenImageGradientRadial(width, height, (float)density, c_inner, c_outer);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageGradientSquare(int32_t width, int32_t height, double density, uint8_t inner_0, uint8_t inner_1, uint8_t inner_2, uint8_t inner_3, uint8_t outer_0, uint8_t outer_1, uint8_t outer_2, uint8_t outer_3) {
  Color c_inner = (Color){0};
  c_inner.r = (unsigned char)inner_0;
  c_inner.g = (unsigned char)inner_1;
  c_inner.b = (unsigned char)inner_2;
  c_inner.a = (unsigned char)inner_3;
  Color c_outer = (Color){0};
  c_outer.r = (unsigned char)outer_0;
  c_outer.g = (unsigned char)outer_1;
  c_outer.b = (unsigned char)outer_2;
  c_outer.a = (unsigned char)outer_3;
  Image result = GenImageGradientSquare(width, height, (float)density, c_inner, c_outer);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageChecked(int32_t width, int32_t height, int32_t checksX, int32_t checksY, uint8_t col1_0, uint8_t col1_1, uint8_t col1_2, uint8_t col1_3, uint8_t col2_0, uint8_t col2_1, uint8_t col2_2, uint8_t col2_3) {
  Color c_col1 = (Color){0};
  c_col1.r = (unsigned char)col1_0;
  c_col1.g = (unsigned char)col1_1;
  c_col1.b = (unsigned char)col1_2;
  c_col1.a = (unsigned char)col1_3;
  Color c_col2 = (Color){0};
  c_col2.r = (unsigned char)col2_0;
  c_col2.g = (unsigned char)col2_1;
  c_col2.b = (unsigned char)col2_2;
  c_col2.a = (unsigned char)col2_3;
  Image result = GenImageChecked(width, height, checksX, checksY, c_col1, c_col2);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageWhiteNoise(int32_t width, int32_t height, double factor) {
  Image result = GenImageWhiteNoise(width, height, (float)factor);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImagePerlinNoise(int32_t width, int32_t height, int32_t offsetX, int32_t offsetY, double scale) {
  Image result = GenImagePerlinNoise(width, height, offsetX, offsetY, (float)scale);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageCellular(int32_t width, int32_t height, int32_t tileSize) {
  Image result = GenImageCellular(width, height, tileSize);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenImageText(int32_t width, int32_t height, const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Image result = GenImageText(width, height, c_text);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  free(c_text);
  return scrl_result;
}
uint32_t scrl_api_ImageCopy(uint32_t image) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Image result = ImageCopy(c_image);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_ImageFromImage(uint32_t image, double rec_0, double rec_1, double rec_2, double rec_3) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Image result = ImageFromImage(c_image, c_rec);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_ImageFromChannel(uint32_t image, int32_t selectedChannel) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Image result = ImageFromChannel(c_image, selectedChannel);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_ImageText(const uint8_t *text, size_t text_length, uint8_t text_present, int32_t fontSize, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Image result = ImageText(c_text, fontSize, c_color);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  free(c_text);
  return scrl_result;
}
uint32_t scrl_api_ImageTextEx(uint32_t font, const uint8_t *text, size_t text_length, uint8_t text_present, double fontSize, double spacing, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  Image result = ImageTextEx(c_font, c_text, (float)fontSize, (float)spacing, c_tint);
  ScrlResourceValue value = {0};
  value.image = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_IMAGE, value, 1);
  free(c_text);
  return scrl_result;
}
void scrl_api_ImageFormat(uint32_t image, int32_t newFormat) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageFormat(c_image, newFormat);
}
void scrl_api_ImageToPOT(uint32_t image, uint8_t fill_0, uint8_t fill_1, uint8_t fill_2, uint8_t fill_3) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_fill = (Color){0};
  c_fill.r = (unsigned char)fill_0;
  c_fill.g = (unsigned char)fill_1;
  c_fill.b = (unsigned char)fill_2;
  c_fill.a = (unsigned char)fill_3;
  ImageToPOT(c_image, c_fill);
}
void scrl_api_ImageCrop(uint32_t image, double crop_0, double crop_1, double crop_2, double crop_3) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Rectangle c_crop = (Rectangle){0};
  c_crop.x = (float)crop_0;
  c_crop.y = (float)crop_1;
  c_crop.width = (float)crop_2;
  c_crop.height = (float)crop_3;
  ImageCrop(c_image, c_crop);
}
void scrl_api_ImageAlphaCrop(uint32_t image, double threshold) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageAlphaCrop(c_image, (float)threshold);
}
void scrl_api_ImageAlphaClear(uint32_t image, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, double threshold) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageAlphaClear(c_image, c_color, (float)threshold);
}
void scrl_api_ImageAlphaMask(uint32_t image, uint32_t alphaMask) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Image c_alphaMask = scrl_resource_get(alphaMask, SCRL_RESOURCE_IMAGE)->value.image;
  ImageAlphaMask(c_image, c_alphaMask);
}
void scrl_api_ImageAlphaPremultiply(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageAlphaPremultiply(c_image);
}
void scrl_api_ImageBlurGaussian(uint32_t image, int32_t blurSize) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageBlurGaussian(c_image, blurSize);
}
void scrl_api_ImageKernelConvolution(uint32_t image, double (*kernel_read)(int32_t, int32_t, void *), void *kernel_read_context, int32_t kernelSize) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  if ((kernelSize*kernelSize) < 0) scrl_fail("negative array length");
  float *c_kernel = (float *)calloc((size_t)(kernelSize*kernelSize), sizeof(float));
  if ((kernelSize*kernelSize) > 0 && !c_kernel) scrl_fail("out of memory");
  for (int32_t i = 0; i < (kernelSize*kernelSize); i++) {
    c_kernel[i] = (float)kernel_read(i, 0, kernel_read_context);
  }
  ImageKernelConvolution(c_image, c_kernel, kernelSize);
  free(c_kernel);
}
void scrl_api_ImageResize(uint32_t image, int32_t newWidth, int32_t newHeight) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageResize(c_image, newWidth, newHeight);
}
void scrl_api_ImageResizeNN(uint32_t image, int32_t newWidth, int32_t newHeight) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageResizeNN(c_image, newWidth, newHeight);
}
void scrl_api_ImageResizeCanvas(uint32_t image, int32_t newWidth, int32_t newHeight, int32_t offsetX, int32_t offsetY, uint8_t fill_0, uint8_t fill_1, uint8_t fill_2, uint8_t fill_3) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_fill = (Color){0};
  c_fill.r = (unsigned char)fill_0;
  c_fill.g = (unsigned char)fill_1;
  c_fill.b = (unsigned char)fill_2;
  c_fill.a = (unsigned char)fill_3;
  ImageResizeCanvas(c_image, newWidth, newHeight, offsetX, offsetY, c_fill);
}
void scrl_api_ImageMipmaps(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageMipmaps(c_image);
}
void scrl_api_ImageDither(uint32_t image, int32_t rBpp, int32_t gBpp, int32_t bBpp, int32_t aBpp) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageDither(c_image, rBpp, gBpp, bBpp, aBpp);
}
void scrl_api_ImageFlipVertical(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageFlipVertical(c_image);
}
void scrl_api_ImageFlipHorizontal(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageFlipHorizontal(c_image);
}
void scrl_api_ImageRotate(uint32_t image, int32_t degrees) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageRotate(c_image, degrees);
}
void scrl_api_ImageRotateCW(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageRotateCW(c_image);
}
void scrl_api_ImageRotateCCW(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageRotateCCW(c_image);
}
void scrl_api_ImageColorTint(uint32_t image, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageColorTint(c_image, c_color);
}
void scrl_api_ImageColorInvert(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageColorInvert(c_image);
}
void scrl_api_ImageColorGrayscale(uint32_t image) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageColorGrayscale(c_image);
}
void scrl_api_ImageColorContrast(uint32_t image, double contrast) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageColorContrast(c_image, (float)contrast);
}
void scrl_api_ImageColorBrightness(uint32_t image, int32_t brightness) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  ImageColorBrightness(c_image, brightness);
}
void scrl_api_ImageColorReplace(uint32_t image, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, uint8_t replace_0, uint8_t replace_1, uint8_t replace_2, uint8_t replace_3) {
  Image *c_image = &scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Color c_replace = (Color){0};
  c_replace.r = (unsigned char)replace_0;
  c_replace.g = (unsigned char)replace_1;
  c_replace.b = (unsigned char)replace_2;
  c_replace.a = (unsigned char)replace_3;
  ImageColorReplace(c_image, c_color, c_replace);
}
void scrl_api_GetImageAlphaBorder(uint32_t image, double threshold, void (*callback)(double, double, double, double, void *), void *context) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Rectangle result = GetImageAlphaBorder(c_image, (float)threshold);
  callback(result.x, result.y, result.width, result.height, context);
}
void scrl_api_GetImageColor(uint32_t image, int32_t x, int32_t y, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color result = GetImageColor(c_image, x, y);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ImageClearBackground(uint32_t dst, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageClearBackground(c_dst, c_color);
}
void scrl_api_ImageDrawPixel(uint32_t dst, int32_t posX, int32_t posY, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawPixel(c_dst, posX, posY, c_color);
}
void scrl_api_ImageDrawPixelV(uint32_t dst, double position_0, double position_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawPixelV(c_dst, c_position, c_color);
}
void scrl_api_ImageDrawLine(uint32_t dst, int32_t startPosX, int32_t startPosY, int32_t endPosX, int32_t endPosY, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawLine(c_dst, startPosX, startPosY, endPosX, endPosY, c_color);
}
void scrl_api_ImageDrawLineV(uint32_t dst, double start_0, double start_1, double end_0, double end_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_start = (Vector2){0};
  c_start.x = (float)start_0;
  c_start.y = (float)start_1;
  Vector2 c_end = (Vector2){0};
  c_end.x = (float)end_0;
  c_end.y = (float)end_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawLineV(c_dst, c_start, c_end, c_color);
}
void scrl_api_ImageDrawLineEx(uint32_t dst, double start_0, double start_1, double end_0, double end_1, int32_t thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_start = (Vector2){0};
  c_start.x = (float)start_0;
  c_start.y = (float)start_1;
  Vector2 c_end = (Vector2){0};
  c_end.x = (float)end_0;
  c_end.y = (float)end_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawLineEx(c_dst, c_start, c_end, thick, c_color);
}
void scrl_api_ImageDrawCircle(uint32_t dst, int32_t centerX, int32_t centerY, int32_t radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawCircle(c_dst, centerX, centerY, radius, c_color);
}
void scrl_api_ImageDrawCircleV(uint32_t dst, double center_0, double center_1, int32_t radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawCircleV(c_dst, c_center, radius, c_color);
}
void scrl_api_ImageDrawCircleLines(uint32_t dst, int32_t centerX, int32_t centerY, int32_t radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawCircleLines(c_dst, centerX, centerY, radius, c_color);
}
void scrl_api_ImageDrawCircleLinesV(uint32_t dst, double center_0, double center_1, int32_t radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_center = (Vector2){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawCircleLinesV(c_dst, c_center, radius, c_color);
}
void scrl_api_ImageDrawRectangle(uint32_t dst, int32_t posX, int32_t posY, int32_t width, int32_t height, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawRectangle(c_dst, posX, posY, width, height, c_color);
}
void scrl_api_ImageDrawRectangleV(uint32_t dst, double position_0, double position_1, double size_0, double size_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Vector2 c_size = (Vector2){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawRectangleV(c_dst, c_position, c_size, c_color);
}
void scrl_api_ImageDrawRectangleRec(uint32_t dst, double rec_0, double rec_1, double rec_2, double rec_3, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawRectangleRec(c_dst, c_rec, c_color);
}
void scrl_api_ImageDrawRectangleLines(uint32_t dst, double rec_0, double rec_1, double rec_2, double rec_3, int32_t thick, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawRectangleLines(c_dst, c_rec, thick, c_color);
}
void scrl_api_ImageDrawTriangle(uint32_t dst, double v1_0, double v1_1, double v2_0, double v2_1, double v3_0, double v3_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_v1 = (Vector2){0};
  c_v1.x = (float)v1_0;
  c_v1.y = (float)v1_1;
  Vector2 c_v2 = (Vector2){0};
  c_v2.x = (float)v2_0;
  c_v2.y = (float)v2_1;
  Vector2 c_v3 = (Vector2){0};
  c_v3.x = (float)v3_0;
  c_v3.y = (float)v3_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawTriangle(c_dst, c_v1, c_v2, c_v3, c_color);
}
void scrl_api_ImageDrawTriangleEx(uint32_t dst, double v1_0, double v1_1, double v2_0, double v2_1, double v3_0, double v3_1, uint8_t c1_0, uint8_t c1_1, uint8_t c1_2, uint8_t c1_3, uint8_t c2_0, uint8_t c2_1, uint8_t c2_2, uint8_t c2_3, uint8_t c3_0, uint8_t c3_1, uint8_t c3_2, uint8_t c3_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_v1 = (Vector2){0};
  c_v1.x = (float)v1_0;
  c_v1.y = (float)v1_1;
  Vector2 c_v2 = (Vector2){0};
  c_v2.x = (float)v2_0;
  c_v2.y = (float)v2_1;
  Vector2 c_v3 = (Vector2){0};
  c_v3.x = (float)v3_0;
  c_v3.y = (float)v3_1;
  Color c_c1 = (Color){0};
  c_c1.r = (unsigned char)c1_0;
  c_c1.g = (unsigned char)c1_1;
  c_c1.b = (unsigned char)c1_2;
  c_c1.a = (unsigned char)c1_3;
  Color c_c2 = (Color){0};
  c_c2.r = (unsigned char)c2_0;
  c_c2.g = (unsigned char)c2_1;
  c_c2.b = (unsigned char)c2_2;
  c_c2.a = (unsigned char)c2_3;
  Color c_c3 = (Color){0};
  c_c3.r = (unsigned char)c3_0;
  c_c3.g = (unsigned char)c3_1;
  c_c3.b = (unsigned char)c3_2;
  c_c3.a = (unsigned char)c3_3;
  ImageDrawTriangleEx(c_dst, c_v1, c_v2, c_v3, c_c1, c_c2, c_c3);
}
void scrl_api_ImageDrawTriangleLines(uint32_t dst, double v1_0, double v1_1, double v2_0, double v2_1, double v3_0, double v3_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Vector2 c_v1 = (Vector2){0};
  c_v1.x = (float)v1_0;
  c_v1.y = (float)v1_1;
  Vector2 c_v2 = (Vector2){0};
  c_v2.x = (float)v2_0;
  c_v2.y = (float)v2_1;
  Vector2 c_v3 = (Vector2){0};
  c_v3.x = (float)v3_0;
  c_v3.y = (float)v3_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawTriangleLines(c_dst, c_v1, c_v2, c_v3, c_color);
}
void scrl_api_ImageDrawTriangleFan(uint32_t dst, double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawTriangleFan(c_dst, c_points, pointCount, c_color);
  free(c_points);
}
void scrl_api_ImageDrawTriangleStrip(uint32_t dst, double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector2 *c_points = (Vector2 *)calloc((size_t)(pointCount), sizeof(Vector2));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawTriangleStrip(c_dst, c_points, pointCount, c_color);
  free(c_points);
}
void scrl_api_ImageDraw(uint32_t dst, uint32_t src, double srcRec_0, double srcRec_1, double srcRec_2, double srcRec_3, double dstRec_0, double dstRec_1, double dstRec_2, double dstRec_3, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Image c_src = scrl_resource_get(src, SCRL_RESOURCE_IMAGE)->value.image;
  Rectangle c_srcRec = (Rectangle){0};
  c_srcRec.x = (float)srcRec_0;
  c_srcRec.y = (float)srcRec_1;
  c_srcRec.width = (float)srcRec_2;
  c_srcRec.height = (float)srcRec_3;
  Rectangle c_dstRec = (Rectangle){0};
  c_dstRec.x = (float)dstRec_0;
  c_dstRec.y = (float)dstRec_1;
  c_dstRec.width = (float)dstRec_2;
  c_dstRec.height = (float)dstRec_3;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  ImageDraw(c_dst, c_src, c_srcRec, c_dstRec, c_tint);
}
void scrl_api_ImageDrawText(uint32_t dst, const uint8_t *text, size_t text_length, uint8_t text_present, int32_t posX, int32_t posY, int32_t fontSize, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  ImageDrawText(c_dst, c_text, posX, posY, fontSize, c_color);
  free(c_text);
}
void scrl_api_ImageDrawTextEx(uint32_t dst, uint32_t font, const uint8_t *text, size_t text_length, uint8_t text_present, double position_0, double position_1, double fontSize, double spacing, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Image *c_dst = &scrl_resource_get(dst, SCRL_RESOURCE_IMAGE)->value.image;
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  ImageDrawTextEx(c_dst, c_font, c_text, c_position, (float)fontSize, (float)spacing, c_tint);
  free(c_text);
}
uint32_t scrl_api_LoadTexture(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Texture result = LoadTexture(c_fileName);
  ScrlResourceValue value = {0};
  value.texture = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_TEXTURE, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadTextureFromImage(uint32_t image) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Texture result = LoadTextureFromImage(c_image);
  ScrlResourceValue value = {0};
  value.texture = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_TEXTURE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_LoadTextureCubemap(uint32_t image, int32_t layout) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Texture result = LoadTextureCubemap(c_image, layout);
  ScrlResourceValue value = {0};
  value.texture = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_TEXTURE, value, 1);
  return scrl_result;
}
uint32_t scrl_api_LoadRenderTexture(int32_t width, int32_t height) {
  RenderTexture result = LoadRenderTexture(width, height);
  ScrlResourceValue value = {0};
  value.renderTexture = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_RENDER_TEXTURE, value, 1);
  return scrl_result;
}
uint8_t scrl_api_IsTextureValid(uint32_t texture) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  uint8_t scrl_result = (uint8_t)(IsTextureValid(c_texture));
  return scrl_result;
}
void scrl_api_UnloadTexture(uint32_t texture) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  scrl_resource_require_owned(texture, SCRL_RESOURCE_TEXTURE);
  UnloadTexture(c_texture);
  scrl_resource_release(texture, SCRL_RESOURCE_TEXTURE);
}
uint8_t scrl_api_IsRenderTextureValid(uint32_t target) {
  RenderTexture c_target = scrl_resource_get(target, SCRL_RESOURCE_RENDER_TEXTURE)->value.renderTexture;
  uint8_t scrl_result = (uint8_t)(IsRenderTextureValid(c_target));
  return scrl_result;
}
void scrl_api_UnloadRenderTexture(uint32_t target) {
  RenderTexture c_target = scrl_resource_get(target, SCRL_RESOURCE_RENDER_TEXTURE)->value.renderTexture;
  scrl_resource_require_owned(target, SCRL_RESOURCE_RENDER_TEXTURE);
  UnloadRenderTexture(c_target);
  scrl_resource_release(target, SCRL_RESOURCE_RENDER_TEXTURE);
}
void scrl_api_UpdateTexture(uint32_t texture, const uint8_t *pixels, size_t pixels_length) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  (void)pixels_length;
  UpdateTexture(c_texture, (const void *)pixels);
}
void scrl_api_UpdateTextureRec(uint32_t texture, double rec_0, double rec_1, double rec_2, double rec_3, const uint8_t *pixels, size_t pixels_length) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Rectangle c_rec = (Rectangle){0};
  c_rec.x = (float)rec_0;
  c_rec.y = (float)rec_1;
  c_rec.width = (float)rec_2;
  c_rec.height = (float)rec_3;
  (void)pixels_length;
  UpdateTextureRec(c_texture, c_rec, (const void *)pixels);
}
void scrl_api_GenTextureMipmaps(uint32_t texture) {
  Texture *c_texture = &scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  GenTextureMipmaps(c_texture);
}
void scrl_api_SetTextureFilter(uint32_t texture, int32_t filter) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  SetTextureFilter(c_texture, filter);
}
void scrl_api_SetTextureWrap(uint32_t texture, int32_t wrap) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  SetTextureWrap(c_texture, wrap);
}
void scrl_api_DrawTexture(uint32_t texture, int32_t posX, int32_t posY, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTexture(c_texture, posX, posY, c_tint);
}
void scrl_api_DrawTextureV(uint32_t texture, double position_0, double position_1, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextureV(c_texture, c_position, c_tint);
}
void scrl_api_DrawTextureEx(uint32_t texture, double position_0, double position_1, double rotation, double scale, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextureEx(c_texture, c_position, (float)rotation, (float)scale, c_tint);
}
void scrl_api_DrawTextureRec(uint32_t texture, double source_0, double source_1, double source_2, double source_3, double position_0, double position_1, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Rectangle c_source = (Rectangle){0};
  c_source.x = (float)source_0;
  c_source.y = (float)source_1;
  c_source.width = (float)source_2;
  c_source.height = (float)source_3;
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextureRec(c_texture, c_source, c_position, c_tint);
}
void scrl_api_DrawTexturePro(uint32_t texture, double source_0, double source_1, double source_2, double source_3, double dest_0, double dest_1, double dest_2, double dest_3, double origin_0, double origin_1, double rotation, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Rectangle c_source = (Rectangle){0};
  c_source.x = (float)source_0;
  c_source.y = (float)source_1;
  c_source.width = (float)source_2;
  c_source.height = (float)source_3;
  Rectangle c_dest = (Rectangle){0};
  c_dest.x = (float)dest_0;
  c_dest.y = (float)dest_1;
  c_dest.width = (float)dest_2;
  c_dest.height = (float)dest_3;
  Vector2 c_origin = (Vector2){0};
  c_origin.x = (float)origin_0;
  c_origin.y = (float)origin_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTexturePro(c_texture, c_source, c_dest, c_origin, (float)rotation, c_tint);
}
void scrl_api_DrawTextureNPatch(uint32_t texture, double nPatchInfo_0, double nPatchInfo_1, double nPatchInfo_2, double nPatchInfo_3, int32_t nPatchInfo_4, int32_t nPatchInfo_5, int32_t nPatchInfo_6, int32_t nPatchInfo_7, int32_t nPatchInfo_8, double dest_0, double dest_1, double dest_2, double dest_3, double origin_0, double origin_1, double rotation, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  NPatchInfo c_nPatchInfo = (NPatchInfo){0};
  c_nPatchInfo.source.x = (float)nPatchInfo_0;
  c_nPatchInfo.source.y = (float)nPatchInfo_1;
  c_nPatchInfo.source.width = (float)nPatchInfo_2;
  c_nPatchInfo.source.height = (float)nPatchInfo_3;
  c_nPatchInfo.left = (int)nPatchInfo_4;
  c_nPatchInfo.top = (int)nPatchInfo_5;
  c_nPatchInfo.right = (int)nPatchInfo_6;
  c_nPatchInfo.bottom = (int)nPatchInfo_7;
  c_nPatchInfo.layout = (int)nPatchInfo_8;
  Rectangle c_dest = (Rectangle){0};
  c_dest.x = (float)dest_0;
  c_dest.y = (float)dest_1;
  c_dest.width = (float)dest_2;
  c_dest.height = (float)dest_3;
  Vector2 c_origin = (Vector2){0};
  c_origin.x = (float)origin_0;
  c_origin.y = (float)origin_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextureNPatch(c_texture, c_nPatchInfo, c_dest, c_origin, (float)rotation, c_tint);
}
uint8_t scrl_api_ColorIsEqual(uint8_t col1_0, uint8_t col1_1, uint8_t col1_2, uint8_t col1_3, uint8_t col2_0, uint8_t col2_1, uint8_t col2_2, uint8_t col2_3) {
  Color c_col1 = (Color){0};
  c_col1.r = (unsigned char)col1_0;
  c_col1.g = (unsigned char)col1_1;
  c_col1.b = (unsigned char)col1_2;
  c_col1.a = (unsigned char)col1_3;
  Color c_col2 = (Color){0};
  c_col2.r = (unsigned char)col2_0;
  c_col2.g = (unsigned char)col2_1;
  c_col2.b = (unsigned char)col2_2;
  c_col2.a = (unsigned char)col2_3;
  uint8_t scrl_result = (uint8_t)(ColorIsEqual(c_col1, c_col2));
  return scrl_result;
}
void scrl_api_Fade(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, double alpha, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Color result = Fade(c_color, (float)alpha);
  callback(result.r, result.g, result.b, result.a, context);
}
int32_t scrl_api_ColorToInt(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  int32_t scrl_result = (int32_t)(ColorToInt(c_color));
  return scrl_result;
}
void scrl_api_ColorNormalize(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, void (*callback)(double, double, double, double, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Vector4 result = ColorNormalize(c_color);
  callback(result.x, result.y, result.z, result.w, context);
}
void scrl_api_ColorFromNormalized(double normalized_0, double normalized_1, double normalized_2, double normalized_3, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Vector4 c_normalized = (Vector4){0};
  c_normalized.x = (float)normalized_0;
  c_normalized.y = (float)normalized_1;
  c_normalized.z = (float)normalized_2;
  c_normalized.w = (float)normalized_3;
  Color result = ColorFromNormalized(c_normalized);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorToHSV(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, void (*callback)(double, double, double, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Vector3 result = ColorToHSV(c_color);
  callback(result.x, result.y, result.z, context);
}
void scrl_api_ColorFromHSV(double hue, double saturation, double value, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color result = ColorFromHSV((float)hue, (float)saturation, (float)value);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorTint(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  Color result = ColorTint(c_color, c_tint);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorBrightness(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, double factor, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Color result = ColorBrightness(c_color, (float)factor);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorContrast(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, double contrast, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Color result = ColorContrast(c_color, (float)contrast);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorAlpha(uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3, double alpha, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  Color result = ColorAlpha(c_color, (float)alpha);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorAlphaBlend(uint8_t dst_0, uint8_t dst_1, uint8_t dst_2, uint8_t dst_3, uint8_t src_0, uint8_t src_1, uint8_t src_2, uint8_t src_3, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_dst = (Color){0};
  c_dst.r = (unsigned char)dst_0;
  c_dst.g = (unsigned char)dst_1;
  c_dst.b = (unsigned char)dst_2;
  c_dst.a = (unsigned char)dst_3;
  Color c_src = (Color){0};
  c_src.r = (unsigned char)src_0;
  c_src.g = (unsigned char)src_1;
  c_src.b = (unsigned char)src_2;
  c_src.a = (unsigned char)src_3;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  Color result = ColorAlphaBlend(c_dst, c_src, c_tint);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_ColorLerp(uint8_t color1_0, uint8_t color1_1, uint8_t color1_2, uint8_t color1_3, uint8_t color2_0, uint8_t color2_1, uint8_t color2_2, uint8_t color2_3, double factor, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color c_color1 = (Color){0};
  c_color1.r = (unsigned char)color1_0;
  c_color1.g = (unsigned char)color1_1;
  c_color1.b = (unsigned char)color1_2;
  c_color1.a = (unsigned char)color1_3;
  Color c_color2 = (Color){0};
  c_color2.r = (unsigned char)color2_0;
  c_color2.g = (unsigned char)color2_1;
  c_color2.b = (unsigned char)color2_2;
  c_color2.a = (unsigned char)color2_3;
  Color result = ColorLerp(c_color1, c_color2, (float)factor);
  callback(result.r, result.g, result.b, result.a, context);
}
void scrl_api_GetColor(uint32_t hexValue, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) {
  Color result = GetColor(hexValue);
  callback(result.r, result.g, result.b, result.a, context);
}
int32_t scrl_api_GetPixelDataSize(int32_t width, int32_t height, int32_t format) {
  int32_t scrl_result = (int32_t)(GetPixelDataSize(width, height, format));
  return scrl_result;
}
uint32_t scrl_api_GetFontDefault(void) {
  Font result = GetFontDefault();
  ScrlResourceValue value = {0};
  value.font = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FONT, value, 0);
  return scrl_result;
}
uint32_t scrl_api_LoadFont(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Font result = LoadFont(c_fileName);
  ScrlResourceValue value = {0};
  value.font = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FONT, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadFontEx(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present, int32_t fontSize, double (*codepoints_read)(int32_t, int32_t, void *), void *codepoints_read_context, int32_t codepointCount) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  if ((codepointCount) < 0) scrl_fail("negative array length");
  int *c_codepoints = (int *)calloc((size_t)(codepointCount), sizeof(int));
  if ((codepointCount) > 0 && !c_codepoints) scrl_fail("out of memory");
  for (int32_t i = 0; i < (codepointCount); i++) {
    c_codepoints[i] = (int)codepoints_read(i, 0, codepoints_read_context);
  }
  Font result = LoadFontEx(c_fileName, fontSize, c_codepoints, codepointCount);
  ScrlResourceValue value = {0};
  value.font = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FONT, value, 1);
  free(c_codepoints);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadFontFromImage(uint32_t image, uint8_t key_0, uint8_t key_1, uint8_t key_2, uint8_t key_3, int32_t firstChar) {
  Image c_image = scrl_resource_get(image, SCRL_RESOURCE_IMAGE)->value.image;
  Color c_key = (Color){0};
  c_key.r = (unsigned char)key_0;
  c_key.g = (unsigned char)key_1;
  c_key.b = (unsigned char)key_2;
  c_key.a = (unsigned char)key_3;
  Font result = LoadFontFromImage(c_image, c_key, firstChar);
  ScrlResourceValue value = {0};
  value.font = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FONT, value, 1);
  return scrl_result;
}
uint32_t scrl_api_LoadFontFromMemory(const uint8_t *fileType, size_t fileType_length, uint8_t fileType_present, const uint8_t *fileData, size_t fileData_length, int32_t dataSize, int32_t fontSize, double (*codepoints_read)(int32_t, int32_t, void *), void *codepoints_read_context, int32_t codepointCount) {
  char *c_fileType = scrl_string_copy(fileType, fileType_length, fileType_present);
  if (dataSize < 0 || (size_t)dataSize > fileData_length) scrl_fail("byte count exceeds Uint8Array length");
  if ((codepointCount) < 0) scrl_fail("negative array length");
  int *c_codepoints = (int *)calloc((size_t)(codepointCount), sizeof(int));
  if ((codepointCount) > 0 && !c_codepoints) scrl_fail("out of memory");
  for (int32_t i = 0; i < (codepointCount); i++) {
    c_codepoints[i] = (int)codepoints_read(i, 0, codepoints_read_context);
  }
  Font result = LoadFontFromMemory(c_fileType, (const unsigned char *)fileData, dataSize, fontSize, c_codepoints, codepointCount);
  ScrlResourceValue value = {0};
  value.font = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_FONT, value, 1);
  free(c_codepoints);
  free(c_fileType);
  return scrl_result;
}
uint8_t scrl_api_IsFontValid(uint32_t font) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  uint8_t scrl_result = (uint8_t)(IsFontValid(c_font));
  return scrl_result;
}
void scrl_api_UnloadFontData(uint32_t glyphs, int32_t glyphCount) {
  GlyphInfo *c_glyphs = &scrl_resource_get(glyphs, SCRL_RESOURCE_GLYPH_INFO)->value.glyphInfo;
  UnloadFontData(c_glyphs, glyphCount);
}
void scrl_api_UnloadFont(uint32_t font) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  scrl_resource_require_owned(font, SCRL_RESOURCE_FONT);
  UnloadFont(c_font);
  scrl_resource_release(font, SCRL_RESOURCE_FONT);
}
uint8_t scrl_api_ExportFontAsCode(uint32_t font, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportFontAsCode(c_font, c_fileName));
  free(c_fileName);
  return scrl_result;
}
void scrl_api_DrawFPS(int32_t posX, int32_t posY) {
  DrawFPS(posX, posY);
}
void scrl_api_DrawText(const uint8_t *text, size_t text_length, uint8_t text_present, int32_t posX, int32_t posY, int32_t fontSize, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawText(c_text, posX, posY, fontSize, c_color);
  free(c_text);
}
void scrl_api_DrawTextEx(uint32_t font, const uint8_t *text, size_t text_length, uint8_t text_present, double position_0, double position_1, double fontSize, double spacing, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextEx(c_font, c_text, c_position, (float)fontSize, (float)spacing, c_tint);
  free(c_text);
}
void scrl_api_DrawTextPro(uint32_t font, const uint8_t *text, size_t text_length, uint8_t text_present, double position_0, double position_1, double origin_0, double origin_1, double rotation, double fontSize, double spacing, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Vector2 c_origin = (Vector2){0};
  c_origin.x = (float)origin_0;
  c_origin.y = (float)origin_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextPro(c_font, c_text, c_position, c_origin, (float)rotation, (float)fontSize, (float)spacing, c_tint);
  free(c_text);
}
void scrl_api_DrawTextCodepoint(uint32_t font, int32_t codepoint, double position_0, double position_1, double fontSize, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextCodepoint(c_font, codepoint, c_position, (float)fontSize, c_tint);
}
void scrl_api_DrawTextCodepoints(uint32_t font, double (*codepoints_read)(int32_t, int32_t, void *), void *codepoints_read_context, int32_t codepointCount, double position_0, double position_1, double fontSize, double spacing, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  if ((codepointCount) < 0) scrl_fail("negative array length");
  int *c_codepoints = (int *)calloc((size_t)(codepointCount), sizeof(int));
  if ((codepointCount) > 0 && !c_codepoints) scrl_fail("out of memory");
  for (int32_t i = 0; i < (codepointCount); i++) {
    c_codepoints[i] = (int)codepoints_read(i, 0, codepoints_read_context);
  }
  Vector2 c_position = (Vector2){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawTextCodepoints(c_font, c_codepoints, codepointCount, c_position, (float)fontSize, (float)spacing, c_tint);
  free(c_codepoints);
}
void scrl_api_SetTextLineSpacing(int32_t spacing) {
  SetTextLineSpacing(spacing);
}
int32_t scrl_api_MeasureText(const uint8_t *text, size_t text_length, uint8_t text_present, int32_t fontSize) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  int32_t scrl_result = (int32_t)(MeasureText(c_text, fontSize));
  free(c_text);
  return scrl_result;
}
void scrl_api_MeasureTextEx(uint32_t font, const uint8_t *text, size_t text_length, uint8_t text_present, double fontSize, double spacing, void (*callback)(double, double, void *), void *context) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  char *c_text = scrl_string_copy(text, text_length, text_present);
  Vector2 result = MeasureTextEx(c_font, c_text, (float)fontSize, (float)spacing);
  callback(result.x, result.y, context);
  free(c_text);
}
void scrl_api_MeasureTextCodepoints(uint32_t font, double (*codepoints_read)(int32_t, int32_t, void *), void *codepoints_read_context, int32_t length, double fontSize, double spacing, void (*callback)(double, double, void *), void *context) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  if ((length) < 0) scrl_fail("negative array length");
  int *c_codepoints = (int *)calloc((size_t)(length), sizeof(int));
  if ((length) > 0 && !c_codepoints) scrl_fail("out of memory");
  for (int32_t i = 0; i < (length); i++) {
    c_codepoints[i] = (int)codepoints_read(i, 0, codepoints_read_context);
  }
  Vector2 result = MeasureTextCodepoints(c_font, c_codepoints, length, (float)fontSize, (float)spacing);
  callback(result.x, result.y, context);
  free(c_codepoints);
}
int32_t scrl_api_GetGlyphIndex(uint32_t font, int32_t codepoint) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  int32_t scrl_result = (int32_t)(GetGlyphIndex(c_font, codepoint));
  return scrl_result;
}
uint32_t scrl_api_GetGlyphInfo(uint32_t font, int32_t codepoint) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  GlyphInfo result = GetGlyphInfo(c_font, codepoint);
  ScrlResourceValue value = {0};
  value.glyphInfo = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_GLYPH_INFO, value, 1);
  return scrl_result;
}
void scrl_api_GetGlyphAtlasRec(uint32_t font, int32_t codepoint, void (*callback)(double, double, double, double, void *), void *context) {
  Font c_font = scrl_resource_get(font, SCRL_RESOURCE_FONT)->value.font;
  Rectangle result = GetGlyphAtlasRec(c_font, codepoint);
  callback(result.x, result.y, result.width, result.height, context);
}
uint8_t scrl_api_LoadUTF8(double (*codepoints_read)(int32_t, int32_t, void *), void *codepoints_read_context, int32_t length, void (*callback)(const char *, void *), void *context) {
  if ((length) < 0) scrl_fail("negative array length");
  int *c_codepoints = (int *)calloc((size_t)(length), sizeof(int));
  if ((length) > 0 && !c_codepoints) scrl_fail("out of memory");
  for (int32_t i = 0; i < (length); i++) {
    c_codepoints[i] = (int)codepoints_read(i, 0, codepoints_read_context);
  }
  const char *result = LoadUTF8(c_codepoints, length);
  free(c_codepoints);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
int32_t scrl_api_GetCodepointCount(const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  int32_t scrl_result = (int32_t)(GetCodepointCount(c_text));
  free(c_text);
  return scrl_result;
}
int32_t scrl_api_TextCopy(const uint8_t *dst, size_t dst_length, uint8_t dst_present, const uint8_t *src, size_t src_length, uint8_t src_present) {
  char *c_dst = scrl_string_copy(dst, dst_length, dst_present);
  char *c_src = scrl_string_copy(src, src_length, src_present);
  int32_t scrl_result = (int32_t)(TextCopy(c_dst, c_src));
  free(c_src);
  free(c_dst);
  return scrl_result;
}
uint8_t scrl_api_TextIsEqual(const uint8_t *text1, size_t text1_length, uint8_t text1_present, const uint8_t *text2, size_t text2_length, uint8_t text2_present) {
  char *c_text1 = scrl_string_copy(text1, text1_length, text1_present);
  char *c_text2 = scrl_string_copy(text2, text2_length, text2_present);
  uint8_t scrl_result = (uint8_t)(TextIsEqual(c_text1, c_text2));
  free(c_text2);
  free(c_text1);
  return scrl_result;
}
uint32_t scrl_api_TextLength(const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  uint32_t scrl_result = (uint32_t)(TextLength(c_text));
  free(c_text);
  return scrl_result;
}
uint8_t scrl_api_TextSubtext(const uint8_t *text, size_t text_length, uint8_t text_present, int32_t position, int32_t length, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextSubtext(c_text, position, length);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextRemoveSpaces(const uint8_t *text, size_t text_length, uint8_t text_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextRemoveSpaces(c_text);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_GetTextBetween(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *begin, size_t begin_length, uint8_t begin_present, const uint8_t *end, size_t end_length, uint8_t end_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_begin = scrl_string_copy(begin, begin_length, begin_present);
  char *c_end = scrl_string_copy(end, end_length, end_present);
  const char *result = GetTextBetween(c_text, c_begin, c_end);
  free(c_end);
  free(c_begin);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextReplace(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *search, size_t search_length, uint8_t search_present, const uint8_t *replacement, size_t replacement_length, uint8_t replacement_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_search = scrl_string_copy(search, search_length, search_present);
  char *c_replacement = scrl_string_copy(replacement, replacement_length, replacement_present);
  const char *result = TextReplace(c_text, c_search, c_replacement);
  free(c_replacement);
  free(c_search);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextReplaceAlloc(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *search, size_t search_length, uint8_t search_present, const uint8_t *replacement, size_t replacement_length, uint8_t replacement_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_search = scrl_string_copy(search, search_length, search_present);
  char *c_replacement = scrl_string_copy(replacement, replacement_length, replacement_present);
  const char *result = TextReplaceAlloc(c_text, c_search, c_replacement);
  free(c_replacement);
  free(c_search);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextReplaceBetween(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *begin, size_t begin_length, uint8_t begin_present, const uint8_t *end, size_t end_length, uint8_t end_present, const uint8_t *replacement, size_t replacement_length, uint8_t replacement_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_begin = scrl_string_copy(begin, begin_length, begin_present);
  char *c_end = scrl_string_copy(end, end_length, end_present);
  char *c_replacement = scrl_string_copy(replacement, replacement_length, replacement_present);
  const char *result = TextReplaceBetween(c_text, c_begin, c_end, c_replacement);
  free(c_replacement);
  free(c_end);
  free(c_begin);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextReplaceBetweenAlloc(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *begin, size_t begin_length, uint8_t begin_present, const uint8_t *end, size_t end_length, uint8_t end_present, const uint8_t *replacement, size_t replacement_length, uint8_t replacement_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_begin = scrl_string_copy(begin, begin_length, begin_present);
  char *c_end = scrl_string_copy(end, end_length, end_present);
  char *c_replacement = scrl_string_copy(replacement, replacement_length, replacement_present);
  const char *result = TextReplaceBetweenAlloc(c_text, c_begin, c_end, c_replacement);
  free(c_replacement);
  free(c_end);
  free(c_begin);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextInsert(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *insert, size_t insert_length, uint8_t insert_present, int32_t position, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_insert = scrl_string_copy(insert, insert_length, insert_present);
  const char *result = TextInsert(c_text, c_insert, position);
  free(c_insert);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextInsertAlloc(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *insert, size_t insert_length, uint8_t insert_present, int32_t position, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_insert = scrl_string_copy(insert, insert_length, insert_present);
  const char *result = TextInsertAlloc(c_text, c_insert, position);
  free(c_insert);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
int32_t scrl_api_TextFindIndex(const uint8_t *text, size_t text_length, uint8_t text_present, const uint8_t *search, size_t search_length, uint8_t search_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  char *c_search = scrl_string_copy(search, search_length, search_present);
  int32_t scrl_result = (int32_t)(TextFindIndex(c_text, c_search));
  free(c_search);
  free(c_text);
  return scrl_result;
}
uint8_t scrl_api_TextToUpper(const uint8_t *text, size_t text_length, uint8_t text_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextToUpper(c_text);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextToLower(const uint8_t *text, size_t text_length, uint8_t text_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextToLower(c_text);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextToPascal(const uint8_t *text, size_t text_length, uint8_t text_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextToPascal(c_text);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextToSnake(const uint8_t *text, size_t text_length, uint8_t text_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextToSnake(c_text);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
uint8_t scrl_api_TextToCamel(const uint8_t *text, size_t text_length, uint8_t text_present, void (*callback)(const char *, void *), void *context) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  const char *result = TextToCamel(c_text);
  free(c_text);
  if (!result) return 0;
  callback(result, context);
  return 1;
}
int32_t scrl_api_TextToInteger(const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  int32_t scrl_result = (int32_t)(TextToInteger(c_text));
  free(c_text);
  return scrl_result;
}
double scrl_api_TextToFloat(const uint8_t *text, size_t text_length, uint8_t text_present) {
  char *c_text = scrl_string_copy(text, text_length, text_present);
  double scrl_result = (double)(TextToFloat(c_text));
  free(c_text);
  return scrl_result;
}
void scrl_api_DrawLine3D(double startPos_0, double startPos_1, double startPos_2, double endPos_0, double endPos_1, double endPos_2, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_startPos = (Vector3){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  c_startPos.z = (float)startPos_2;
  Vector3 c_endPos = (Vector3){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  c_endPos.z = (float)endPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawLine3D(c_startPos, c_endPos, c_color);
}
void scrl_api_DrawPoint3D(double position_0, double position_1, double position_2, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPoint3D(c_position, c_color);
}
void scrl_api_DrawCircle3D(double center_0, double center_1, double center_2, double radius, double rotationAxis_0, double rotationAxis_1, double rotationAxis_2, double rotationAngle, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_center = (Vector3){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  c_center.z = (float)center_2;
  Vector3 c_rotationAxis = (Vector3){0};
  c_rotationAxis.x = (float)rotationAxis_0;
  c_rotationAxis.y = (float)rotationAxis_1;
  c_rotationAxis.z = (float)rotationAxis_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCircle3D(c_center, (float)radius, c_rotationAxis, (float)rotationAngle, c_color);
}
void scrl_api_DrawTriangle3D(double v1_0, double v1_1, double v1_2, double v2_0, double v2_1, double v2_2, double v3_0, double v3_1, double v3_2, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_v1 = (Vector3){0};
  c_v1.x = (float)v1_0;
  c_v1.y = (float)v1_1;
  c_v1.z = (float)v1_2;
  Vector3 c_v2 = (Vector3){0};
  c_v2.x = (float)v2_0;
  c_v2.y = (float)v2_1;
  c_v2.z = (float)v2_2;
  Vector3 c_v3 = (Vector3){0};
  c_v3.x = (float)v3_0;
  c_v3.y = (float)v3_1;
  c_v3.z = (float)v3_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawTriangle3D(c_v1, c_v2, c_v3, c_color);
}
void scrl_api_DrawTriangleStrip3D(double (*points_read)(int32_t, int32_t, void *), void *points_read_context, int32_t pointCount, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  if ((pointCount) < 0) scrl_fail("negative array length");
  Vector3 *c_points = (Vector3 *)calloc((size_t)(pointCount), sizeof(Vector3));
  if ((pointCount) > 0 && !c_points) scrl_fail("out of memory");
  for (int32_t i = 0; i < (pointCount); i++) {
    c_points[i].x = (float)points_read(i, 0, points_read_context);
    c_points[i].y = (float)points_read(i, 1, points_read_context);
    c_points[i].z = (float)points_read(i, 2, points_read_context);
  }
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawTriangleStrip3D(c_points, pointCount, c_color);
  free(c_points);
}
void scrl_api_DrawCube(double position_0, double position_1, double position_2, double width, double height, double length, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCube(c_position, (float)width, (float)height, (float)length, c_color);
}
void scrl_api_DrawCubeV(double position_0, double position_1, double position_2, double size_0, double size_1, double size_2, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Vector3 c_size = (Vector3){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  c_size.z = (float)size_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCubeV(c_position, c_size, c_color);
}
void scrl_api_DrawCubeWires(double position_0, double position_1, double position_2, double width, double height, double length, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCubeWires(c_position, (float)width, (float)height, (float)length, c_color);
}
void scrl_api_DrawCubeWiresV(double position_0, double position_1, double position_2, double size_0, double size_1, double size_2, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Vector3 c_size = (Vector3){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  c_size.z = (float)size_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCubeWiresV(c_position, c_size, c_color);
}
void scrl_api_DrawSphere(double centerPos_0, double centerPos_1, double centerPos_2, double radius, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_centerPos = (Vector3){0};
  c_centerPos.x = (float)centerPos_0;
  c_centerPos.y = (float)centerPos_1;
  c_centerPos.z = (float)centerPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSphere(c_centerPos, (float)radius, c_color);
}
void scrl_api_DrawSphereEx(double centerPos_0, double centerPos_1, double centerPos_2, double radius, int32_t rings, int32_t slices, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_centerPos = (Vector3){0};
  c_centerPos.x = (float)centerPos_0;
  c_centerPos.y = (float)centerPos_1;
  c_centerPos.z = (float)centerPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSphereEx(c_centerPos, (float)radius, rings, slices, c_color);
}
void scrl_api_DrawSphereWires(double centerPos_0, double centerPos_1, double centerPos_2, double radius, int32_t rings, int32_t slices, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_centerPos = (Vector3){0};
  c_centerPos.x = (float)centerPos_0;
  c_centerPos.y = (float)centerPos_1;
  c_centerPos.z = (float)centerPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawSphereWires(c_centerPos, (float)radius, rings, slices, c_color);
}
void scrl_api_DrawCylinder(double position_0, double position_1, double position_2, double radiusTop, double radiusBottom, double height, int32_t slices, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCylinder(c_position, (float)radiusTop, (float)radiusBottom, (float)height, slices, c_color);
}
void scrl_api_DrawCylinderEx(double startPos_0, double startPos_1, double startPos_2, double endPos_0, double endPos_1, double endPos_2, double startRadius, double endRadius, int32_t sides, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_startPos = (Vector3){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  c_startPos.z = (float)startPos_2;
  Vector3 c_endPos = (Vector3){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  c_endPos.z = (float)endPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCylinderEx(c_startPos, c_endPos, (float)startRadius, (float)endRadius, sides, c_color);
}
void scrl_api_DrawCylinderWires(double position_0, double position_1, double position_2, double radiusTop, double radiusBottom, double height, int32_t slices, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCylinderWires(c_position, (float)radiusTop, (float)radiusBottom, (float)height, slices, c_color);
}
void scrl_api_DrawCylinderWiresEx(double startPos_0, double startPos_1, double startPos_2, double endPos_0, double endPos_1, double endPos_2, double startRadius, double endRadius, int32_t sides, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_startPos = (Vector3){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  c_startPos.z = (float)startPos_2;
  Vector3 c_endPos = (Vector3){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  c_endPos.z = (float)endPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCylinderWiresEx(c_startPos, c_endPos, (float)startRadius, (float)endRadius, sides, c_color);
}
void scrl_api_DrawCapsule(double startPos_0, double startPos_1, double startPos_2, double endPos_0, double endPos_1, double endPos_2, double radius, int32_t slices, int32_t rings, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_startPos = (Vector3){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  c_startPos.z = (float)startPos_2;
  Vector3 c_endPos = (Vector3){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  c_endPos.z = (float)endPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCapsule(c_startPos, c_endPos, (float)radius, slices, rings, c_color);
}
void scrl_api_DrawCapsuleWires(double startPos_0, double startPos_1, double startPos_2, double endPos_0, double endPos_1, double endPos_2, double radius, int32_t slices, int32_t rings, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_startPos = (Vector3){0};
  c_startPos.x = (float)startPos_0;
  c_startPos.y = (float)startPos_1;
  c_startPos.z = (float)startPos_2;
  Vector3 c_endPos = (Vector3){0};
  c_endPos.x = (float)endPos_0;
  c_endPos.y = (float)endPos_1;
  c_endPos.z = (float)endPos_2;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawCapsuleWires(c_startPos, c_endPos, (float)radius, slices, rings, c_color);
}
void scrl_api_DrawPlane(double centerPos_0, double centerPos_1, double centerPos_2, double size_0, double size_1, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Vector3 c_centerPos = (Vector3){0};
  c_centerPos.x = (float)centerPos_0;
  c_centerPos.y = (float)centerPos_1;
  c_centerPos.z = (float)centerPos_2;
  Vector2 c_size = (Vector2){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawPlane(c_centerPos, c_size, c_color);
}
void scrl_api_DrawRay(double ray_0, double ray_1, double ray_2, double ray_3, double ray_4, double ray_5, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  Ray c_ray = (Ray){0};
  c_ray.position.x = (float)ray_0;
  c_ray.position.y = (float)ray_1;
  c_ray.position.z = (float)ray_2;
  c_ray.direction.x = (float)ray_3;
  c_ray.direction.y = (float)ray_4;
  c_ray.direction.z = (float)ray_5;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawRay(c_ray, c_color);
}
void scrl_api_DrawGrid(int32_t slices, double spacing) {
  DrawGrid(slices, (float)spacing);
}
uint32_t scrl_api_LoadModel(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Model result = LoadModel(c_fileName);
  ScrlResourceValue value = {0};
  value.model = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MODEL, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadModelFromMesh(uint32_t mesh) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  Model result = LoadModelFromMesh(c_mesh);
  ScrlResourceValue value = {0};
  value.model = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MODEL, value, 1);
  return scrl_result;
}
uint8_t scrl_api_IsModelValid(uint32_t model) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  uint8_t scrl_result = (uint8_t)(IsModelValid(c_model));
  return scrl_result;
}
void scrl_api_UnloadModel(uint32_t model) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  scrl_resource_require_owned(model, SCRL_RESOURCE_MODEL);
  UnloadModel(c_model);
  scrl_resource_release(model, SCRL_RESOURCE_MODEL);
}
void scrl_api_GetModelBoundingBox(uint32_t model, void (*callback)(double, double, double, double, double, double, void *), void *context) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  BoundingBox result = GetModelBoundingBox(c_model);
  callback(result.min.x, result.min.y, result.min.z, result.max.x, result.max.y, result.max.z, context);
}
void scrl_api_DrawModel(uint32_t model, double position_0, double position_1, double position_2, double scale, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawModel(c_model, c_position, (float)scale, c_tint);
}
void scrl_api_DrawModelEx(uint32_t model, double position_0, double position_1, double position_2, double rotationAxis_0, double rotationAxis_1, double rotationAxis_2, double rotationAngle, double scale_0, double scale_1, double scale_2, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Vector3 c_rotationAxis = (Vector3){0};
  c_rotationAxis.x = (float)rotationAxis_0;
  c_rotationAxis.y = (float)rotationAxis_1;
  c_rotationAxis.z = (float)rotationAxis_2;
  Vector3 c_scale = (Vector3){0};
  c_scale.x = (float)scale_0;
  c_scale.y = (float)scale_1;
  c_scale.z = (float)scale_2;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawModelEx(c_model, c_position, c_rotationAxis, (float)rotationAngle, c_scale, c_tint);
}
void scrl_api_DrawModelWires(uint32_t model, double position_0, double position_1, double position_2, double scale, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawModelWires(c_model, c_position, (float)scale, c_tint);
}
void scrl_api_DrawModelWiresEx(uint32_t model, double position_0, double position_1, double position_2, double rotationAxis_0, double rotationAxis_1, double rotationAxis_2, double rotationAngle, double scale_0, double scale_1, double scale_2, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Vector3 c_rotationAxis = (Vector3){0};
  c_rotationAxis.x = (float)rotationAxis_0;
  c_rotationAxis.y = (float)rotationAxis_1;
  c_rotationAxis.z = (float)rotationAxis_2;
  Vector3 c_scale = (Vector3){0};
  c_scale.x = (float)scale_0;
  c_scale.y = (float)scale_1;
  c_scale.z = (float)scale_2;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawModelWiresEx(c_model, c_position, c_rotationAxis, (float)rotationAngle, c_scale, c_tint);
}
void scrl_api_DrawBoundingBox(double box_0, double box_1, double box_2, double box_3, double box_4, double box_5, uint8_t color_0, uint8_t color_1, uint8_t color_2, uint8_t color_3) {
  BoundingBox c_box = (BoundingBox){0};
  c_box.min.x = (float)box_0;
  c_box.min.y = (float)box_1;
  c_box.min.z = (float)box_2;
  c_box.max.x = (float)box_3;
  c_box.max.y = (float)box_4;
  c_box.max.z = (float)box_5;
  Color c_color = (Color){0};
  c_color.r = (unsigned char)color_0;
  c_color.g = (unsigned char)color_1;
  c_color.b = (unsigned char)color_2;
  c_color.a = (unsigned char)color_3;
  DrawBoundingBox(c_box, c_color);
}
void scrl_api_DrawBillboard(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, uint32_t texture, double position_0, double position_1, double position_2, double scale, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawBillboard(c_camera, c_texture, c_position, (float)scale, c_tint);
}
void scrl_api_DrawBillboardRec(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, uint32_t texture, double source_0, double source_1, double source_2, double source_3, double position_0, double position_1, double position_2, double size_0, double size_1, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Rectangle c_source = (Rectangle){0};
  c_source.x = (float)source_0;
  c_source.y = (float)source_1;
  c_source.width = (float)source_2;
  c_source.height = (float)source_3;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Vector2 c_size = (Vector2){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawBillboardRec(c_camera, c_texture, c_source, c_position, c_size, c_tint);
}
void scrl_api_DrawBillboardPro(double camera_0, double camera_1, double camera_2, double camera_3, double camera_4, double camera_5, double camera_6, double camera_7, double camera_8, double camera_9, int32_t camera_10, uint32_t texture, double source_0, double source_1, double source_2, double source_3, double position_0, double position_1, double position_2, double up_0, double up_1, double up_2, double size_0, double size_1, double origin_0, double origin_1, double rotation, uint8_t tint_0, uint8_t tint_1, uint8_t tint_2, uint8_t tint_3) {
  Camera3D c_camera = (Camera3D){0};
  c_camera.position.x = (float)camera_0;
  c_camera.position.y = (float)camera_1;
  c_camera.position.z = (float)camera_2;
  c_camera.target.x = (float)camera_3;
  c_camera.target.y = (float)camera_4;
  c_camera.target.z = (float)camera_5;
  c_camera.up.x = (float)camera_6;
  c_camera.up.y = (float)camera_7;
  c_camera.up.z = (float)camera_8;
  c_camera.fovy = (float)camera_9;
  c_camera.projection = (int)camera_10;
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  Rectangle c_source = (Rectangle){0};
  c_source.x = (float)source_0;
  c_source.y = (float)source_1;
  c_source.width = (float)source_2;
  c_source.height = (float)source_3;
  Vector3 c_position = (Vector3){0};
  c_position.x = (float)position_0;
  c_position.y = (float)position_1;
  c_position.z = (float)position_2;
  Vector3 c_up = (Vector3){0};
  c_up.x = (float)up_0;
  c_up.y = (float)up_1;
  c_up.z = (float)up_2;
  Vector2 c_size = (Vector2){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  Vector2 c_origin = (Vector2){0};
  c_origin.x = (float)origin_0;
  c_origin.y = (float)origin_1;
  Color c_tint = (Color){0};
  c_tint.r = (unsigned char)tint_0;
  c_tint.g = (unsigned char)tint_1;
  c_tint.b = (unsigned char)tint_2;
  c_tint.a = (unsigned char)tint_3;
  DrawBillboardPro(c_camera, c_texture, c_source, c_position, c_up, c_size, c_origin, (float)rotation, c_tint);
}
void scrl_api_UploadMesh(uint32_t mesh, uint8_t dynamic) {
  Mesh *c_mesh = &scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  UploadMesh(c_mesh, dynamic != 0);
}
void scrl_api_UpdateMeshBuffer(uint32_t mesh, int32_t index, const uint8_t *data, size_t data_length, int32_t dataSize, int32_t offset) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  if (dataSize < 0 || (size_t)dataSize > data_length) scrl_fail("byte count exceeds Uint8Array length");
  UpdateMeshBuffer(c_mesh, index, (const void *)data, dataSize, offset);
}
void scrl_api_UnloadMesh(uint32_t mesh) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  scrl_resource_require_owned(mesh, SCRL_RESOURCE_MESH);
  UnloadMesh(c_mesh);
  scrl_resource_release(mesh, SCRL_RESOURCE_MESH);
}
void scrl_api_DrawMesh(uint32_t mesh, uint32_t material, double transform_0, double transform_1, double transform_2, double transform_3, double transform_4, double transform_5, double transform_6, double transform_7, double transform_8, double transform_9, double transform_10, double transform_11, double transform_12, double transform_13, double transform_14, double transform_15) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  Material c_material = scrl_resource_get(material, SCRL_RESOURCE_MATERIAL)->value.material;
  Matrix c_transform = (Matrix){0};
  c_transform.m0 = (float)transform_0;
  c_transform.m4 = (float)transform_1;
  c_transform.m8 = (float)transform_2;
  c_transform.m12 = (float)transform_3;
  c_transform.m1 = (float)transform_4;
  c_transform.m5 = (float)transform_5;
  c_transform.m9 = (float)transform_6;
  c_transform.m13 = (float)transform_7;
  c_transform.m2 = (float)transform_8;
  c_transform.m6 = (float)transform_9;
  c_transform.m10 = (float)transform_10;
  c_transform.m14 = (float)transform_11;
  c_transform.m3 = (float)transform_12;
  c_transform.m7 = (float)transform_13;
  c_transform.m11 = (float)transform_14;
  c_transform.m15 = (float)transform_15;
  DrawMesh(c_mesh, c_material, c_transform);
}
void scrl_api_DrawMeshInstanced(uint32_t mesh, uint32_t material, double (*transforms_read)(int32_t, int32_t, void *), void *transforms_read_context, int32_t instances) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  Material c_material = scrl_resource_get(material, SCRL_RESOURCE_MATERIAL)->value.material;
  if ((instances) < 0) scrl_fail("negative array length");
  Matrix *c_transforms = (Matrix *)calloc((size_t)(instances), sizeof(Matrix));
  if ((instances) > 0 && !c_transforms) scrl_fail("out of memory");
  for (int32_t i = 0; i < (instances); i++) {
    c_transforms[i].m0 = (float)transforms_read(i, 0, transforms_read_context);
    c_transforms[i].m4 = (float)transforms_read(i, 1, transforms_read_context);
    c_transforms[i].m8 = (float)transforms_read(i, 2, transforms_read_context);
    c_transforms[i].m12 = (float)transforms_read(i, 3, transforms_read_context);
    c_transforms[i].m1 = (float)transforms_read(i, 4, transforms_read_context);
    c_transforms[i].m5 = (float)transforms_read(i, 5, transforms_read_context);
    c_transforms[i].m9 = (float)transforms_read(i, 6, transforms_read_context);
    c_transforms[i].m13 = (float)transforms_read(i, 7, transforms_read_context);
    c_transforms[i].m2 = (float)transforms_read(i, 8, transforms_read_context);
    c_transforms[i].m6 = (float)transforms_read(i, 9, transforms_read_context);
    c_transforms[i].m10 = (float)transforms_read(i, 10, transforms_read_context);
    c_transforms[i].m14 = (float)transforms_read(i, 11, transforms_read_context);
    c_transforms[i].m3 = (float)transforms_read(i, 12, transforms_read_context);
    c_transforms[i].m7 = (float)transforms_read(i, 13, transforms_read_context);
    c_transforms[i].m11 = (float)transforms_read(i, 14, transforms_read_context);
    c_transforms[i].m15 = (float)transforms_read(i, 15, transforms_read_context);
  }
  DrawMeshInstanced(c_mesh, c_material, c_transforms, instances);
  free(c_transforms);
}
void scrl_api_GetMeshBoundingBox(uint32_t mesh, void (*callback)(double, double, double, double, double, double, void *), void *context) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  BoundingBox result = GetMeshBoundingBox(c_mesh);
  callback(result.min.x, result.min.y, result.min.z, result.max.x, result.max.y, result.max.z, context);
}
void scrl_api_GenMeshTangents(uint32_t mesh) {
  Mesh *c_mesh = &scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  GenMeshTangents(c_mesh);
}
uint8_t scrl_api_ExportMesh(uint32_t mesh, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportMesh(c_mesh, c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_ExportMeshAsCode(uint32_t mesh, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportMeshAsCode(c_mesh, c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_GenMeshPoly(int32_t sides, double radius) {
  Mesh result = GenMeshPoly(sides, (float)radius);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshPlane(double width, double length, int32_t resX, int32_t resZ) {
  Mesh result = GenMeshPlane((float)width, (float)length, resX, resZ);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshCube(double width, double height, double length) {
  Mesh result = GenMeshCube((float)width, (float)height, (float)length);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshSphere(double radius, int32_t rings, int32_t slices) {
  Mesh result = GenMeshSphere((float)radius, rings, slices);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshHemiSphere(double radius, int32_t rings, int32_t slices) {
  Mesh result = GenMeshHemiSphere((float)radius, rings, slices);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshCylinder(double radius, double height, int32_t slices) {
  Mesh result = GenMeshCylinder((float)radius, (float)height, slices);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshCone(double radius, double height, int32_t slices) {
  Mesh result = GenMeshCone((float)radius, (float)height, slices);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshTorus(double radius, double size, int32_t radSeg, int32_t sides) {
  Mesh result = GenMeshTorus((float)radius, (float)size, radSeg, sides);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshKnot(double radius, double size, int32_t radSeg, int32_t sides) {
  Mesh result = GenMeshKnot((float)radius, (float)size, radSeg, sides);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshHeightmap(uint32_t heightmap, double size_0, double size_1, double size_2) {
  Image c_heightmap = scrl_resource_get(heightmap, SCRL_RESOURCE_IMAGE)->value.image;
  Vector3 c_size = (Vector3){0};
  c_size.x = (float)size_0;
  c_size.y = (float)size_1;
  c_size.z = (float)size_2;
  Mesh result = GenMeshHeightmap(c_heightmap, c_size);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_GenMeshCubicmap(uint32_t cubicmap, double cubeSize_0, double cubeSize_1, double cubeSize_2) {
  Image c_cubicmap = scrl_resource_get(cubicmap, SCRL_RESOURCE_IMAGE)->value.image;
  Vector3 c_cubeSize = (Vector3){0};
  c_cubeSize.x = (float)cubeSize_0;
  c_cubeSize.y = (float)cubeSize_1;
  c_cubeSize.z = (float)cubeSize_2;
  Mesh result = GenMeshCubicmap(c_cubicmap, c_cubeSize);
  ScrlResourceValue value = {0};
  value.mesh = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MESH, value, 1);
  return scrl_result;
}
uint32_t scrl_api_LoadMaterialDefault(void) {
  Material result = LoadMaterialDefault();
  ScrlResourceValue value = {0};
  value.material = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MATERIAL, value, 1);
  return scrl_result;
}
uint8_t scrl_api_IsMaterialValid(uint32_t material) {
  Material c_material = scrl_resource_get(material, SCRL_RESOURCE_MATERIAL)->value.material;
  uint8_t scrl_result = (uint8_t)(IsMaterialValid(c_material));
  return scrl_result;
}
void scrl_api_UnloadMaterial(uint32_t material) {
  Material c_material = scrl_resource_get(material, SCRL_RESOURCE_MATERIAL)->value.material;
  scrl_resource_require_owned(material, SCRL_RESOURCE_MATERIAL);
  UnloadMaterial(c_material);
  scrl_resource_release(material, SCRL_RESOURCE_MATERIAL);
}
void scrl_api_SetMaterialTexture(uint32_t material, int32_t mapType, uint32_t texture) {
  Material *c_material = &scrl_resource_get(material, SCRL_RESOURCE_MATERIAL)->value.material;
  Texture c_texture = scrl_resource_get(texture, SCRL_RESOURCE_TEXTURE)->value.texture;
  SetMaterialTexture(c_material, mapType, c_texture);
}
void scrl_api_SetModelMeshMaterial(uint32_t model, int32_t meshId, int32_t materialId) {
  Model *c_model = &scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  SetModelMeshMaterial(c_model, meshId, materialId);
}
void scrl_api_UpdateModelAnimation(uint32_t model, uint32_t anim, double frame) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  ModelAnimation c_anim = scrl_resource_get(anim, SCRL_RESOURCE_MODEL_ANIMATION)->value.modelAnimation;
  UpdateModelAnimation(c_model, c_anim, (float)frame);
}
void scrl_api_UpdateModelAnimationEx(uint32_t model, uint32_t animA, double frameA, uint32_t animB, double frameB, double blend) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  ModelAnimation c_animA = scrl_resource_get(animA, SCRL_RESOURCE_MODEL_ANIMATION)->value.modelAnimation;
  ModelAnimation c_animB = scrl_resource_get(animB, SCRL_RESOURCE_MODEL_ANIMATION)->value.modelAnimation;
  UpdateModelAnimationEx(c_model, c_animA, (float)frameA, c_animB, (float)frameB, (float)blend);
}
void scrl_api_UnloadModelAnimations(uint32_t animations, int32_t animCount) {
  ModelAnimation *c_animations = &scrl_resource_get(animations, SCRL_RESOURCE_MODEL_ANIMATION)->value.modelAnimation;
  UnloadModelAnimations(c_animations, animCount);
}
uint8_t scrl_api_IsModelAnimationValid(uint32_t model, uint32_t anim) {
  Model c_model = scrl_resource_get(model, SCRL_RESOURCE_MODEL)->value.model;
  ModelAnimation c_anim = scrl_resource_get(anim, SCRL_RESOURCE_MODEL_ANIMATION)->value.modelAnimation;
  uint8_t scrl_result = (uint8_t)(IsModelAnimationValid(c_model, c_anim));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionSpheres(double center1_0, double center1_1, double center1_2, double radius1, double center2_0, double center2_1, double center2_2, double radius2) {
  Vector3 c_center1 = (Vector3){0};
  c_center1.x = (float)center1_0;
  c_center1.y = (float)center1_1;
  c_center1.z = (float)center1_2;
  Vector3 c_center2 = (Vector3){0};
  c_center2.x = (float)center2_0;
  c_center2.y = (float)center2_1;
  c_center2.z = (float)center2_2;
  uint8_t scrl_result = (uint8_t)(CheckCollisionSpheres(c_center1, (float)radius1, c_center2, (float)radius2));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionBoxes(double box1_0, double box1_1, double box1_2, double box1_3, double box1_4, double box1_5, double box2_0, double box2_1, double box2_2, double box2_3, double box2_4, double box2_5) {
  BoundingBox c_box1 = (BoundingBox){0};
  c_box1.min.x = (float)box1_0;
  c_box1.min.y = (float)box1_1;
  c_box1.min.z = (float)box1_2;
  c_box1.max.x = (float)box1_3;
  c_box1.max.y = (float)box1_4;
  c_box1.max.z = (float)box1_5;
  BoundingBox c_box2 = (BoundingBox){0};
  c_box2.min.x = (float)box2_0;
  c_box2.min.y = (float)box2_1;
  c_box2.min.z = (float)box2_2;
  c_box2.max.x = (float)box2_3;
  c_box2.max.y = (float)box2_4;
  c_box2.max.z = (float)box2_5;
  uint8_t scrl_result = (uint8_t)(CheckCollisionBoxes(c_box1, c_box2));
  return scrl_result;
}
uint8_t scrl_api_CheckCollisionBoxSphere(double box_0, double box_1, double box_2, double box_3, double box_4, double box_5, double center_0, double center_1, double center_2, double radius) {
  BoundingBox c_box = (BoundingBox){0};
  c_box.min.x = (float)box_0;
  c_box.min.y = (float)box_1;
  c_box.min.z = (float)box_2;
  c_box.max.x = (float)box_3;
  c_box.max.y = (float)box_4;
  c_box.max.z = (float)box_5;
  Vector3 c_center = (Vector3){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  c_center.z = (float)center_2;
  uint8_t scrl_result = (uint8_t)(CheckCollisionBoxSphere(c_box, c_center, (float)radius));
  return scrl_result;
}
void scrl_api_GetRayCollisionSphere(double ray_0, double ray_1, double ray_2, double ray_3, double ray_4, double ray_5, double center_0, double center_1, double center_2, double radius, void (*callback)(uint8_t, double, double, double, double, double, double, double, void *), void *context) {
  Ray c_ray = (Ray){0};
  c_ray.position.x = (float)ray_0;
  c_ray.position.y = (float)ray_1;
  c_ray.position.z = (float)ray_2;
  c_ray.direction.x = (float)ray_3;
  c_ray.direction.y = (float)ray_4;
  c_ray.direction.z = (float)ray_5;
  Vector3 c_center = (Vector3){0};
  c_center.x = (float)center_0;
  c_center.y = (float)center_1;
  c_center.z = (float)center_2;
  RayCollision result = GetRayCollisionSphere(c_ray, c_center, (float)radius);
  callback(result.hit, result.distance, result.point.x, result.point.y, result.point.z, result.normal.x, result.normal.y, result.normal.z, context);
}
void scrl_api_GetRayCollisionBox(double ray_0, double ray_1, double ray_2, double ray_3, double ray_4, double ray_5, double box_0, double box_1, double box_2, double box_3, double box_4, double box_5, void (*callback)(uint8_t, double, double, double, double, double, double, double, void *), void *context) {
  Ray c_ray = (Ray){0};
  c_ray.position.x = (float)ray_0;
  c_ray.position.y = (float)ray_1;
  c_ray.position.z = (float)ray_2;
  c_ray.direction.x = (float)ray_3;
  c_ray.direction.y = (float)ray_4;
  c_ray.direction.z = (float)ray_5;
  BoundingBox c_box = (BoundingBox){0};
  c_box.min.x = (float)box_0;
  c_box.min.y = (float)box_1;
  c_box.min.z = (float)box_2;
  c_box.max.x = (float)box_3;
  c_box.max.y = (float)box_4;
  c_box.max.z = (float)box_5;
  RayCollision result = GetRayCollisionBox(c_ray, c_box);
  callback(result.hit, result.distance, result.point.x, result.point.y, result.point.z, result.normal.x, result.normal.y, result.normal.z, context);
}
void scrl_api_GetRayCollisionMesh(double ray_0, double ray_1, double ray_2, double ray_3, double ray_4, double ray_5, uint32_t mesh, double transform_0, double transform_1, double transform_2, double transform_3, double transform_4, double transform_5, double transform_6, double transform_7, double transform_8, double transform_9, double transform_10, double transform_11, double transform_12, double transform_13, double transform_14, double transform_15, void (*callback)(uint8_t, double, double, double, double, double, double, double, void *), void *context) {
  Ray c_ray = (Ray){0};
  c_ray.position.x = (float)ray_0;
  c_ray.position.y = (float)ray_1;
  c_ray.position.z = (float)ray_2;
  c_ray.direction.x = (float)ray_3;
  c_ray.direction.y = (float)ray_4;
  c_ray.direction.z = (float)ray_5;
  Mesh c_mesh = scrl_resource_get(mesh, SCRL_RESOURCE_MESH)->value.mesh;
  Matrix c_transform = (Matrix){0};
  c_transform.m0 = (float)transform_0;
  c_transform.m4 = (float)transform_1;
  c_transform.m8 = (float)transform_2;
  c_transform.m12 = (float)transform_3;
  c_transform.m1 = (float)transform_4;
  c_transform.m5 = (float)transform_5;
  c_transform.m9 = (float)transform_6;
  c_transform.m13 = (float)transform_7;
  c_transform.m2 = (float)transform_8;
  c_transform.m6 = (float)transform_9;
  c_transform.m10 = (float)transform_10;
  c_transform.m14 = (float)transform_11;
  c_transform.m3 = (float)transform_12;
  c_transform.m7 = (float)transform_13;
  c_transform.m11 = (float)transform_14;
  c_transform.m15 = (float)transform_15;
  RayCollision result = GetRayCollisionMesh(c_ray, c_mesh, c_transform);
  callback(result.hit, result.distance, result.point.x, result.point.y, result.point.z, result.normal.x, result.normal.y, result.normal.z, context);
}
void scrl_api_GetRayCollisionTriangle(double ray_0, double ray_1, double ray_2, double ray_3, double ray_4, double ray_5, double p1_0, double p1_1, double p1_2, double p2_0, double p2_1, double p2_2, double p3_0, double p3_1, double p3_2, void (*callback)(uint8_t, double, double, double, double, double, double, double, void *), void *context) {
  Ray c_ray = (Ray){0};
  c_ray.position.x = (float)ray_0;
  c_ray.position.y = (float)ray_1;
  c_ray.position.z = (float)ray_2;
  c_ray.direction.x = (float)ray_3;
  c_ray.direction.y = (float)ray_4;
  c_ray.direction.z = (float)ray_5;
  Vector3 c_p1 = (Vector3){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  c_p1.z = (float)p1_2;
  Vector3 c_p2 = (Vector3){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  c_p2.z = (float)p2_2;
  Vector3 c_p3 = (Vector3){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  c_p3.z = (float)p3_2;
  RayCollision result = GetRayCollisionTriangle(c_ray, c_p1, c_p2, c_p3);
  callback(result.hit, result.distance, result.point.x, result.point.y, result.point.z, result.normal.x, result.normal.y, result.normal.z, context);
}
void scrl_api_GetRayCollisionQuad(double ray_0, double ray_1, double ray_2, double ray_3, double ray_4, double ray_5, double p1_0, double p1_1, double p1_2, double p2_0, double p2_1, double p2_2, double p3_0, double p3_1, double p3_2, double p4_0, double p4_1, double p4_2, void (*callback)(uint8_t, double, double, double, double, double, double, double, void *), void *context) {
  Ray c_ray = (Ray){0};
  c_ray.position.x = (float)ray_0;
  c_ray.position.y = (float)ray_1;
  c_ray.position.z = (float)ray_2;
  c_ray.direction.x = (float)ray_3;
  c_ray.direction.y = (float)ray_4;
  c_ray.direction.z = (float)ray_5;
  Vector3 c_p1 = (Vector3){0};
  c_p1.x = (float)p1_0;
  c_p1.y = (float)p1_1;
  c_p1.z = (float)p1_2;
  Vector3 c_p2 = (Vector3){0};
  c_p2.x = (float)p2_0;
  c_p2.y = (float)p2_1;
  c_p2.z = (float)p2_2;
  Vector3 c_p3 = (Vector3){0};
  c_p3.x = (float)p3_0;
  c_p3.y = (float)p3_1;
  c_p3.z = (float)p3_2;
  Vector3 c_p4 = (Vector3){0};
  c_p4.x = (float)p4_0;
  c_p4.y = (float)p4_1;
  c_p4.z = (float)p4_2;
  RayCollision result = GetRayCollisionQuad(c_ray, c_p1, c_p2, c_p3, c_p4);
  callback(result.hit, result.distance, result.point.x, result.point.y, result.point.z, result.normal.x, result.normal.y, result.normal.z, context);
}
void scrl_api_InitAudioDevice(void) {
  InitAudioDevice();
}
void scrl_api_CloseAudioDevice(void) {
  CloseAudioDevice();
}
uint8_t scrl_api_IsAudioDeviceReady(void) {
  uint8_t scrl_result = (uint8_t)(IsAudioDeviceReady());
  return scrl_result;
}
void scrl_api_SetMasterVolume(double volume) {
  SetMasterVolume((float)volume);
}
double scrl_api_GetMasterVolume(void) {
  double scrl_result = (double)(GetMasterVolume());
  return scrl_result;
}
uint32_t scrl_api_LoadWave(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Wave result = LoadWave(c_fileName);
  ScrlResourceValue value = {0};
  value.wave = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_WAVE, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadWaveFromMemory(const uint8_t *fileType, size_t fileType_length, uint8_t fileType_present, const uint8_t *fileData, size_t fileData_length, int32_t dataSize) {
  char *c_fileType = scrl_string_copy(fileType, fileType_length, fileType_present);
  if (dataSize < 0 || (size_t)dataSize > fileData_length) scrl_fail("byte count exceeds Uint8Array length");
  Wave result = LoadWaveFromMemory(c_fileType, (const unsigned char *)fileData, dataSize);
  ScrlResourceValue value = {0};
  value.wave = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_WAVE, value, 1);
  free(c_fileType);
  return scrl_result;
}
uint8_t scrl_api_IsWaveValid(uint32_t wave) {
  Wave c_wave = scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  uint8_t scrl_result = (uint8_t)(IsWaveValid(c_wave));
  return scrl_result;
}
uint32_t scrl_api_LoadSound(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Sound result = LoadSound(c_fileName);
  ScrlResourceValue value = {0};
  value.sound = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_SOUND, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadSoundFromWave(uint32_t wave) {
  Wave c_wave = scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  Sound result = LoadSoundFromWave(c_wave);
  ScrlResourceValue value = {0};
  value.sound = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_SOUND, value, 1);
  return scrl_result;
}
uint32_t scrl_api_LoadSoundAlias(uint32_t source) {
  Sound c_source = scrl_resource_get(source, SCRL_RESOURCE_SOUND)->value.sound;
  Sound result = LoadSoundAlias(c_source);
  ScrlResourceValue value = {0};
  value.sound = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_SOUND, value, 1);
  return scrl_result;
}
uint8_t scrl_api_IsSoundValid(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  uint8_t scrl_result = (uint8_t)(IsSoundValid(c_sound));
  return scrl_result;
}
void scrl_api_UpdateSound(uint32_t sound, const uint8_t *data, size_t data_length, int32_t sampleCount) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  (void)data_length;
  UpdateSound(c_sound, (const void *)data, sampleCount);
}
void scrl_api_UnloadWave(uint32_t wave) {
  Wave c_wave = scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  scrl_resource_require_owned(wave, SCRL_RESOURCE_WAVE);
  UnloadWave(c_wave);
  scrl_resource_release(wave, SCRL_RESOURCE_WAVE);
}
void scrl_api_UnloadSound(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  scrl_resource_require_owned(sound, SCRL_RESOURCE_SOUND);
  UnloadSound(c_sound);
  scrl_resource_release(sound, SCRL_RESOURCE_SOUND);
}
void scrl_api_UnloadSoundAlias(uint32_t alias) {
  Sound c_alias = scrl_resource_get(alias, SCRL_RESOURCE_SOUND)->value.sound;
  scrl_resource_require_owned(alias, SCRL_RESOURCE_SOUND);
  UnloadSoundAlias(c_alias);
  scrl_resource_release(alias, SCRL_RESOURCE_SOUND);
}
uint8_t scrl_api_ExportWave(uint32_t wave, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Wave c_wave = scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportWave(c_wave, c_fileName));
  free(c_fileName);
  return scrl_result;
}
uint8_t scrl_api_ExportWaveAsCode(uint32_t wave, const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  Wave c_wave = scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  uint8_t scrl_result = (uint8_t)(ExportWaveAsCode(c_wave, c_fileName));
  free(c_fileName);
  return scrl_result;
}
void scrl_api_PlaySound(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  PlaySound(c_sound);
}
void scrl_api_StopSound(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  StopSound(c_sound);
}
void scrl_api_PauseSound(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  PauseSound(c_sound);
}
void scrl_api_ResumeSound(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  ResumeSound(c_sound);
}
uint8_t scrl_api_IsSoundPlaying(uint32_t sound) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  uint8_t scrl_result = (uint8_t)(IsSoundPlaying(c_sound));
  return scrl_result;
}
void scrl_api_SetSoundVolume(uint32_t sound, double volume) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  SetSoundVolume(c_sound, (float)volume);
}
void scrl_api_SetSoundPitch(uint32_t sound, double pitch) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  SetSoundPitch(c_sound, (float)pitch);
}
void scrl_api_SetSoundPan(uint32_t sound, double pan) {
  Sound c_sound = scrl_resource_get(sound, SCRL_RESOURCE_SOUND)->value.sound;
  SetSoundPan(c_sound, (float)pan);
}
uint32_t scrl_api_WaveCopy(uint32_t wave) {
  Wave c_wave = scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  Wave result = WaveCopy(c_wave);
  ScrlResourceValue value = {0};
  value.wave = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_WAVE, value, 1);
  return scrl_result;
}
void scrl_api_WaveCrop(uint32_t wave, int32_t initFrame, int32_t finalFrame) {
  Wave *c_wave = &scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  WaveCrop(c_wave, initFrame, finalFrame);
}
void scrl_api_WaveFormat(uint32_t wave, int32_t sampleRate, int32_t sampleSize, int32_t channels) {
  Wave *c_wave = &scrl_resource_get(wave, SCRL_RESOURCE_WAVE)->value.wave;
  WaveFormat(c_wave, sampleRate, sampleSize, channels);
}
uint32_t scrl_api_LoadMusicStream(const uint8_t *fileName, size_t fileName_length, uint8_t fileName_present) {
  char *c_fileName = scrl_string_copy(fileName, fileName_length, fileName_present);
  Music result = LoadMusicStream(c_fileName);
  ScrlResourceValue value = {0};
  value.music = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MUSIC, value, 1);
  free(c_fileName);
  return scrl_result;
}
uint32_t scrl_api_LoadMusicStreamFromMemory(const uint8_t *fileType, size_t fileType_length, uint8_t fileType_present, const uint8_t *data, size_t data_length, int32_t dataSize) {
  char *c_fileType = scrl_string_copy(fileType, fileType_length, fileType_present);
  if (dataSize < 0 || (size_t)dataSize > data_length) scrl_fail("byte count exceeds Uint8Array length");
  Music result = LoadMusicStreamFromMemory(c_fileType, (const unsigned char *)data, dataSize);
  ScrlResourceValue value = {0};
  value.music = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_MUSIC, value, 1);
  free(c_fileType);
  return scrl_result;
}
uint8_t scrl_api_IsMusicValid(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  uint8_t scrl_result = (uint8_t)(IsMusicValid(c_music));
  return scrl_result;
}
void scrl_api_UnloadMusicStream(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  scrl_resource_require_owned(music, SCRL_RESOURCE_MUSIC);
  UnloadMusicStream(c_music);
  scrl_resource_release(music, SCRL_RESOURCE_MUSIC);
}
void scrl_api_PlayMusicStream(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  PlayMusicStream(c_music);
}
uint8_t scrl_api_IsMusicStreamPlaying(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  uint8_t scrl_result = (uint8_t)(IsMusicStreamPlaying(c_music));
  return scrl_result;
}
void scrl_api_UpdateMusicStream(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  UpdateMusicStream(c_music);
}
void scrl_api_StopMusicStream(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  StopMusicStream(c_music);
}
void scrl_api_PauseMusicStream(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  PauseMusicStream(c_music);
}
void scrl_api_ResumeMusicStream(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  ResumeMusicStream(c_music);
}
void scrl_api_SeekMusicStream(uint32_t music, double position) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  SeekMusicStream(c_music, (float)position);
}
void scrl_api_SetMusicVolume(uint32_t music, double volume) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  SetMusicVolume(c_music, (float)volume);
}
void scrl_api_SetMusicPitch(uint32_t music, double pitch) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  SetMusicPitch(c_music, (float)pitch);
}
void scrl_api_SetMusicPan(uint32_t music, double pan) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  SetMusicPan(c_music, (float)pan);
}
double scrl_api_GetMusicTimeLength(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  double scrl_result = (double)(GetMusicTimeLength(c_music));
  return scrl_result;
}
double scrl_api_GetMusicTimePlayed(uint32_t music) {
  Music c_music = scrl_resource_get(music, SCRL_RESOURCE_MUSIC)->value.music;
  double scrl_result = (double)(GetMusicTimePlayed(c_music));
  return scrl_result;
}
uint32_t scrl_api_LoadAudioStream(uint32_t sampleRate, uint32_t sampleSize, uint32_t channels) {
  AudioStream result = LoadAudioStream(sampleRate, sampleSize, channels);
  ScrlResourceValue value = {0};
  value.audioStream = result;
  uint32_t scrl_result = scrl_resource_add(SCRL_RESOURCE_AUDIO_STREAM, value, 1);
  return scrl_result;
}
uint8_t scrl_api_IsAudioStreamValid(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  uint8_t scrl_result = (uint8_t)(IsAudioStreamValid(c_stream));
  return scrl_result;
}
void scrl_api_UnloadAudioStream(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  scrl_resource_require_owned(stream, SCRL_RESOURCE_AUDIO_STREAM);
  UnloadAudioStream(c_stream);
  scrl_resource_release(stream, SCRL_RESOURCE_AUDIO_STREAM);
}
void scrl_api_UpdateAudioStream(uint32_t stream, const uint8_t *data, size_t data_length, int32_t frameCount) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  (void)data_length;
  UpdateAudioStream(c_stream, (const void *)data, frameCount);
}
uint8_t scrl_api_IsAudioStreamProcessed(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  uint8_t scrl_result = (uint8_t)(IsAudioStreamProcessed(c_stream));
  return scrl_result;
}
void scrl_api_PlayAudioStream(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  PlayAudioStream(c_stream);
}
void scrl_api_PauseAudioStream(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  PauseAudioStream(c_stream);
}
void scrl_api_ResumeAudioStream(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  ResumeAudioStream(c_stream);
}
uint8_t scrl_api_IsAudioStreamPlaying(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  uint8_t scrl_result = (uint8_t)(IsAudioStreamPlaying(c_stream));
  return scrl_result;
}
void scrl_api_StopAudioStream(uint32_t stream) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  StopAudioStream(c_stream);
}
void scrl_api_SetAudioStreamVolume(uint32_t stream, double volume) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  SetAudioStreamVolume(c_stream, (float)volume);
}
void scrl_api_SetAudioStreamPitch(uint32_t stream, double pitch) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  SetAudioStreamPitch(c_stream, (float)pitch);
}
void scrl_api_SetAudioStreamPan(uint32_t stream, double pan) {
  AudioStream c_stream = scrl_resource_get(stream, SCRL_RESOURCE_AUDIO_STREAM)->value.audioStream;
  SetAudioStreamPan(c_stream, (float)pan);
}
void scrl_api_SetAudioStreamBufferSizeDefault(int32_t size) {
  SetAudioStreamBufferSizeDefault(size);
}
uint8_t scrl_custom_load_file_data(const uint8_t *name, size_t length, uint8_t present, void (*callback)(const uint8_t *, size_t, void *), void *context) {
  char *file = scrl_string_copy(name, length, present); int size = 0; unsigned char *data = LoadFileData(file, &size); free(file);
  if (!data) return 0;
  callback(data, (size_t)size, context);
  UnloadFileData(data);
  return 1;
}
uint8_t scrl_custom_compress_data(const uint8_t *data, size_t data_length, int32_t data_size, void (*callback)(const uint8_t *, size_t, void *), void *context) { if (data_size < 0 || (size_t)data_size > data_length) scrl_fail("invalid byte length"); int output_size = 0; unsigned char *result = CompressData((const unsigned char *)data, data_size, &output_size);  if (!result) return 0; callback((const uint8_t *)result, (size_t)output_size, context); MemFree(result); return 1; }
uint8_t scrl_custom_decompress_data(const uint8_t *data, size_t data_length, int32_t data_size, void (*callback)(const uint8_t *, size_t, void *), void *context) { if (data_size < 0 || (size_t)data_size > data_length) scrl_fail("invalid byte length"); int output_size = 0; unsigned char *result = DecompressData((const unsigned char *)data, data_size, &output_size);  if (!result) return 0; callback((const uint8_t *)result, (size_t)output_size, context); MemFree(result); return 1; }
uint8_t scrl_custom_encode_base64(const uint8_t *data, size_t data_length, int32_t data_size, void (*callback)(const uint8_t *, size_t, void *), void *context) { if (data_size < 0 || (size_t)data_size > data_length) scrl_fail("invalid byte length"); int output_size = 0; char *result = EncodeDataBase64((const unsigned char *)data, data_size, &output_size);  if (!result) return 0; callback((const uint8_t *)result, (size_t)(output_size > 0 ? output_size - 1 : 0), context); MemFree(result); return 1; }
uint8_t scrl_custom_decode_base64(const uint8_t *text, size_t text_length, uint8_t present, void (*callback)(const uint8_t *, size_t, void *), void *context) { char *input = scrl_string_copy(text, text_length, present); int output_size = 0; unsigned char *result = DecodeDataBase64(input, &output_size); free(input); if (!result) return 0; callback((const uint8_t *)result, (size_t)output_size, context); MemFree(result); return 1; }
void scrl_custom_compute_md5(const uint8_t *data, size_t length, int32_t size, void (*callback)(int32_t, uint32_t, void *), void *context) { if (size < 0 || (size_t)size > length) scrl_fail("invalid byte length"); unsigned int *result = ComputeMD5((unsigned char *)data, size); for (int32_t i = 0; i < 4; i++) callback(i, result[i], context); }
void scrl_custom_compute_sha1(const uint8_t *data, size_t length, int32_t size, void (*callback)(int32_t, uint32_t, void *), void *context) { if (size < 0 || (size_t)size > length) scrl_fail("invalid byte length"); unsigned int *result = ComputeSHA1((unsigned char *)data, size); for (int32_t i = 0; i < 5; i++) callback(i, result[i], context); }
void scrl_custom_compute_sha256(const uint8_t *data, size_t length, int32_t size, void (*callback)(int32_t, uint32_t, void *), void *context) { if (size < 0 || (size_t)size > length) scrl_fail("invalid byte length"); unsigned int *result = ComputeSHA256((unsigned char *)data, size); for (int32_t i = 0; i < 8; i++) callback(i, result[i], context); }
uint8_t scrl_custom_random_sequence(uint32_t count, int32_t min, int32_t max, void (*callback)(int32_t, int32_t, void *), void *context) { int *values = LoadRandomSequence(count, min, max); if (!values && count) return 0; for (uint32_t i = 0; i < count; i++) callback((int32_t)i, values[i], context); UnloadRandomSequence(values); return 1; }
uint8_t scrl_custom_export_image_memory(uint32_t handle, const uint8_t *type, size_t length, uint8_t present, void (*callback)(const uint8_t *, size_t, void *), void *context) { Image image = scrl_resource_get(handle, SCRL_RESOURCE_IMAGE)->value.image; char *file_type = scrl_string_copy(type, length, present); int size = 0; unsigned char *data = ExportImageToMemory(image, file_type, &size); free(file_type); if (!data) return 0; callback(data, (size_t)size, context); MemFree(data); return 1; }
uint8_t scrl_custom_image_colors(uint32_t handle, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) { Image image = scrl_resource_get(handle, SCRL_RESOURCE_IMAGE)->value.image; Color *colors = LoadImageColors(image); if (!colors) return 0; int count = image.width*image.height; for (int i = 0; i < count; i++) callback(colors[i].r, colors[i].g, colors[i].b, colors[i].a, context); UnloadImageColors(colors); return 1; }
uint8_t scrl_custom_image_palette(uint32_t handle, int32_t maximum, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) { Image image = scrl_resource_get(handle, SCRL_RESOURCE_IMAGE)->value.image; int count = 0; Color *colors = LoadImagePalette(image, maximum, &count); if (!colors) return 0; for (int i = 0; i < count; i++) callback(colors[i].r, colors[i].g, colors[i].b, colors[i].a, context); UnloadImagePalette(colors); return 1; }
void scrl_custom_load_codepoints(const uint8_t *text, size_t length, uint8_t present, void (*callback)(int32_t, int32_t, void *), void *context) { char *input = scrl_string_copy(text, length, present); int count = 0; int *values = LoadCodepoints(input, &count); free(input); for (int i = 0; i < count; i++) callback(i, values[i], context); UnloadCodepoints(values); }
void scrl_custom_codepoint_utf8(int32_t codepoint, void (*callback)(const uint8_t *, size_t, void *), void *context) { int size = 0; const char *text = CodepointToUTF8(codepoint, &size); callback((const uint8_t *)text, (size_t)size, context); }
void scrl_custom_text_lines(const uint8_t *text, size_t length, uint8_t present, void (*callback)(int32_t, const char *, void *), void *context) { char *input = scrl_string_copy(text, length, present); int count = 0; char **lines = LoadTextLines(input, &count); free(input); for (int i = 0; i < count; i++) callback(i, lines[i], context); UnloadTextLines(lines, count); }
void scrl_custom_text_split(const uint8_t *text, size_t length, uint8_t present, const uint8_t *delimiter, size_t delimiter_length, void (*callback)(int32_t, const char *, void *), void *context) { if (delimiter_length != 1) scrl_fail("textSplit delimiter must be one UTF-8 byte"); char *input = scrl_string_copy(text, length, present); int count = 0; char **parts = TextSplit(input, (char)delimiter[0], &count); for (int i = 0; i < count; i++) callback(i, parts[i], context); free(input); }
uint8_t scrl_custom_wave_samples(uint32_t handle, void (*callback)(int32_t, double, void *), void *context) { Wave wave = scrl_resource_get(handle, SCRL_RESOURCE_WAVE)->value.wave; float *samples = LoadWaveSamples(wave); if (!samples) return 0; uint64_t count = (uint64_t)wave.frameCount*wave.channels; if (count > INT32_MAX) { UnloadWaveSamples(samples); scrl_fail("wave sample count is too large"); } for (int32_t i = 0; i < (int32_t)count; i++) callback(i, samples[i], context); UnloadWaveSamples(samples); return 1; }
void scrl_custom_get_pixel_color(const uint8_t *data, size_t length, int32_t format, void (*callback)(uint8_t, uint8_t, uint8_t, uint8_t, void *), void *context) { int required = GetPixelDataSize(1, 1, format); if (required < 0 || (size_t)required > length) scrl_fail("pixel buffer is too small"); Color color = GetPixelColor((void *)data, format); callback(color.r, color.g, color.b, color.a, context); }
void scrl_custom_set_pixel_color(const uint8_t *data, size_t length, uint8_t r, uint8_t g, uint8_t b, uint8_t a, int32_t format, void (*callback)(const uint8_t *, size_t, void *), void *context) { int required = GetPixelDataSize(1, 1, format); if (required < 0 || (size_t)required > length) scrl_fail("pixel buffer is too small"); uint8_t *copy = (uint8_t *)malloc(length); if (!copy && length) scrl_fail("out of memory"); memcpy(copy, data, length); SetPixelColor(copy, (Color){r,g,b,a}, format); callback(copy, length, context); free(copy); }
void scrl_custom_set_window_icons(int32_t count, uint32_t (*callback)(int32_t, void *), void *context) { if (count < 0) scrl_fail("negative image count"); Image *images = (Image *)calloc((size_t)count, sizeof(Image)); if (!images && count) scrl_fail("out of memory"); for (int32_t i = 0; i < count; i++) images[i] = scrl_resource_get(callback(i, context), SCRL_RESOURCE_IMAGE)->value.image; SetWindowIcons(images, count); free(images); }
void scrl_custom_update_camera(double px, double py, double pz, double tx, double ty, double tz, double ux, double uy, double uz, double fovy, int32_t projection, int32_t mode, void (*callback)(double,double,double,double,double,double,double,double,double,double,int32_t,void *), void *context) { Camera camera = { .position = {(float)px,(float)py,(float)pz}, .target = {(float)tx,(float)ty,(float)tz}, .up = {(float)ux,(float)uy,(float)uz}, .fovy = (float)fovy, .projection = projection }; UpdateCamera(&camera, mode); callback(camera.position.x,camera.position.y,camera.position.z,camera.target.x,camera.target.y,camera.target.z,camera.up.x,camera.up.y,camera.up.z,camera.fovy,camera.projection,context); }
void scrl_custom_update_camera_pro(double px, double py, double pz, double tx, double ty, double tz, double ux, double uy, double uz, double fovy, int32_t projection, double mx,double my,double mz,double rx,double ry,double rz,double zoom, void (*callback)(double,double,double,double,double,double,double,double,double,double,int32_t,void *), void *context) { Camera camera = { .position = {(float)px,(float)py,(float)pz}, .target = {(float)tx,(float)ty,(float)tz}, .up = {(float)ux,(float)uy,(float)uz}, .fovy = (float)fovy, .projection = projection }; UpdateCameraPro(&camera, (Vector3){(float)mx,(float)my,(float)mz}, (Vector3){(float)rx,(float)ry,(float)rz}, (float)zoom); callback(camera.position.x,camera.position.y,camera.position.z,camera.target.x,camera.target.y,camera.target.z,camera.up.x,camera.up.y,camera.up.z,camera.fovy,camera.projection,context); }
void scrl_custom_collision_lines(double ax,double ay,double bx,double by,double cx,double cy,double dx,double dy,void (*callback)(uint8_t,double,double,void *),void *context) { Vector2 point = {0}; bool hit = CheckCollisionLines((Vector2){(float)ax,(float)ay},(Vector2){(float)bx,(float)by},(Vector2){(float)cx,(float)cy},(Vector2){(float)dx,(float)dy},&point); callback(hit ? 1 : 0,point.x,point.y,context); }
void scrl_custom_load_image_anim(const uint8_t *name,size_t name_length,uint8_t present,void (*callback)(uint32_t,int32_t,void *),void *context) { char *input = scrl_string_copy(name,name_length,present); int frames=0; Image image=LoadImageAnim(input,&frames); free(input); ScrlResourceValue value={0}; value.image=image; uint32_t handle=scrl_resource_add(SCRL_RESOURCE_IMAGE,value,1); callback(handle,frames,context); }
void scrl_custom_load_image_anim_memory(const uint8_t *type,size_t type_length,uint8_t present,const uint8_t *data,size_t data_length,int32_t size,void (*callback)(uint32_t,int32_t,void *),void *context) { if (size < 0 || (size_t)size > data_length) scrl_fail("invalid image data length"); char *input = scrl_string_copy(type,type_length,present); int frames=0; Image image=LoadImageAnimFromMemory(input,data,size,&frames); free(input); ScrlResourceValue value={0}; value.image=image; uint32_t handle=scrl_resource_add(SCRL_RESOURCE_IMAGE,value,1); callback(handle,frames,context); }
void scrl_custom_get_codepoint(const uint8_t *text,size_t length,uint8_t present,void (*callback)(int32_t,int32_t,void *),void *context) { char *input=scrl_string_copy(text,length,present); int size=0; int result=GetCodepoint(input,&size); free(input); callback(result,size,context); }
void scrl_custom_get_codepoint_next(const uint8_t *text,size_t length,uint8_t present,void (*callback)(int32_t,int32_t,void *),void *context) { char *input=scrl_string_copy(text,length,present); int size=0; int result=GetCodepointNext(input,&size); free(input); callback(result,size,context); }
void scrl_custom_get_codepoint_previous(const uint8_t *text,size_t length,uint8_t present,void (*callback)(int32_t,int32_t,void *),void *context) { char *input=scrl_string_copy(text,length,present); int size=0; int result=GetCodepointPrevious(input,&size); free(input); callback(result,size,context); }
