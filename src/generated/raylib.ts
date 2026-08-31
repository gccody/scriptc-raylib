// Generated from the official raylib 6.0 API metadata.
import { nativeInitWindow, nativeCloseWindow, nativeWindowShouldClose, nativeIsWindowReady, nativeIsWindowFullscreen, nativeIsWindowHidden, nativeIsWindowMinimized, nativeIsWindowMaximized, nativeIsWindowFocused, nativeIsWindowResized, nativeIsWindowState, nativeSetWindowState, nativeClearWindowState, nativeToggleFullscreen, nativeToggleBorderlessWindowed, nativeMaximizeWindow, nativeMinimizeWindow, nativeRestoreWindow, nativeSetWindowIcon, nativeSetWindowTitle, nativeSetWindowPosition, nativeSetWindowMonitor, nativeSetWindowMinSize, nativeSetWindowMaxSize, nativeSetWindowSize, nativeSetWindowOpacity, nativeSetWindowFocused, nativeGetScreenWidth, nativeGetScreenHeight, nativeGetRenderWidth, nativeGetRenderHeight, nativeGetMonitorCount, nativeGetCurrentMonitor, nativeGetMonitorPosition, nativeGetMonitorWidth, nativeGetMonitorHeight, nativeGetMonitorPhysicalWidth, nativeGetMonitorPhysicalHeight, nativeGetMonitorRefreshRate, nativeGetWindowPosition, nativeGetWindowScaleDPI, nativeGetMonitorName, nativeSetClipboardText, nativeGetClipboardText, nativeGetClipboardImage, nativeEnableEventWaiting, nativeDisableEventWaiting, nativeShowCursor, nativeHideCursor, nativeIsCursorHidden, nativeEnableCursor, nativeDisableCursor, nativeIsCursorOnScreen, nativeClearBackground, nativeBeginDrawing, nativeEndDrawing, nativeBeginMode2D, nativeEndMode2D, nativeBeginMode3D, nativeEndMode3D, nativeBeginTextureMode, nativeEndTextureMode, nativeBeginShaderMode, nativeEndShaderMode, nativeBeginBlendMode, nativeEndBlendMode, nativeBeginScissorMode, nativeEndScissorMode, nativeBeginVrStereoMode, nativeEndVrStereoMode, nativeLoadVrStereoConfig, nativeUnloadVrStereoConfig, nativeLoadShader, nativeLoadShaderFromMemory, nativeIsShaderValid, nativeGetShaderLocation, nativeGetShaderLocationAttrib, nativeSetShaderValue, nativeSetShaderValueV, nativeSetShaderValueMatrix, nativeSetShaderValueTexture, nativeUnloadShader, nativeGetScreenToWorldRay, nativeGetScreenToWorldRayEx, nativeGetWorldToScreen, nativeGetWorldToScreenEx, nativeGetWorldToScreen2D, nativeGetScreenToWorld2D, nativeGetCameraMatrix, nativeGetCameraMatrix2D, nativeSetTargetFPS, nativeGetFrameTime, nativeGetTime, nativeGetFPS, nativeSwapScreenBuffer, nativePollInputEvents, nativeWaitTime, nativeSetRandomSeed, nativeGetRandomValue, nativeTakeScreenshot, nativeSetConfigFlags, nativeOpenURL, nativeSetTraceLogLevel, nativeSaveFileData, nativeExportDataAsCode, nativeLoadFileText, nativeSaveFileText, nativeFileRename, nativeFileRemove, nativeFileCopy, nativeFileMove, nativeFileTextReplace, nativeFileTextFindIndex, nativeFileExists, nativeDirectoryExists, nativeIsFileExtension, nativeGetFileLength, nativeGetFileModTime, nativeGetFileExtension, nativeGetFileName, nativeGetFileNameWithoutExt, nativeGetDirectoryPath, nativeGetPrevDirectoryPath, nativeGetWorkingDirectory, nativeGetApplicationDirectory, nativeMakeDirectory, nativeChangeDirectory, nativeIsPathFile, nativeIsFileNameValid, nativeLoadDirectoryFiles, nativeLoadDirectoryFilesEx, nativeUnloadDirectoryFiles, nativeIsFileDropped, nativeLoadDroppedFiles, nativeUnloadDroppedFiles, nativeGetDirectoryFileCount, nativeGetDirectoryFileCountEx, nativeComputeCRC32, nativeLoadAutomationEventList, nativeUnloadAutomationEventList, nativeExportAutomationEventList, nativeSetAutomationEventList, nativeSetAutomationEventBaseFrame, nativeStartAutomationEventRecording, nativeStopAutomationEventRecording, nativePlayAutomationEvent, nativeIsKeyPressed, nativeIsKeyPressedRepeat, nativeIsKeyDown, nativeIsKeyReleased, nativeIsKeyUp, nativeGetKeyPressed, nativeGetCharPressed, nativeGetKeyName, nativeSetExitKey, nativeIsGamepadAvailable, nativeGetGamepadName, nativeIsGamepadButtonPressed, nativeIsGamepadButtonDown, nativeIsGamepadButtonReleased, nativeIsGamepadButtonUp, nativeGetGamepadButtonPressed, nativeGetGamepadAxisCount, nativeGetGamepadAxisMovement, nativeSetGamepadMappings, nativeSetGamepadVibration, nativeIsMouseButtonPressed, nativeIsMouseButtonDown, nativeIsMouseButtonReleased, nativeIsMouseButtonUp, nativeGetMouseX, nativeGetMouseY, nativeGetMousePosition, nativeGetMouseDelta, nativeSetMousePosition, nativeSetMouseOffset, nativeSetMouseScale, nativeGetMouseWheelMove, nativeGetMouseWheelMoveV, nativeSetMouseCursor, nativeGetTouchX, nativeGetTouchY, nativeGetTouchPosition, nativeGetTouchPointId, nativeGetTouchPointCount, nativeSetGesturesEnabled, nativeIsGestureDetected, nativeGetGestureDetected, nativeGetGestureHoldDuration, nativeGetGestureDragVector, nativeGetGestureDragAngle, nativeGetGesturePinchVector, nativeGetGesturePinchAngle, nativeSetShapesTexture, nativeGetShapesTexture, nativeGetShapesTextureRectangle, nativeDrawPixel, nativeDrawPixelV, nativeDrawLine, nativeDrawLineV, nativeDrawLineEx, nativeDrawLineStrip, nativeDrawLineBezier, nativeDrawLineDashed, nativeDrawCircle, nativeDrawCircleV, nativeDrawCircleGradient, nativeDrawCircleSector, nativeDrawCircleSectorLines, nativeDrawCircleLines, nativeDrawCircleLinesV, nativeDrawEllipse, nativeDrawEllipseV, nativeDrawEllipseLines, nativeDrawEllipseLinesV, nativeDrawRing, nativeDrawRingLines, nativeDrawRectangle, nativeDrawRectangleV, nativeDrawRectangleRec, nativeDrawRectanglePro, nativeDrawRectangleGradientV, nativeDrawRectangleGradientH, nativeDrawRectangleGradientEx, nativeDrawRectangleLines, nativeDrawRectangleLinesEx, nativeDrawRectangleRounded, nativeDrawRectangleRoundedLines, nativeDrawRectangleRoundedLinesEx, nativeDrawTriangle, nativeDrawTriangleLines, nativeDrawTriangleFan, nativeDrawTriangleStrip, nativeDrawPoly, nativeDrawPolyLines, nativeDrawPolyLinesEx, nativeDrawSplineLinear, nativeDrawSplineBasis, nativeDrawSplineCatmullRom, nativeDrawSplineBezierQuadratic, nativeDrawSplineBezierCubic, nativeDrawSplineSegmentLinear, nativeDrawSplineSegmentBasis, nativeDrawSplineSegmentCatmullRom, nativeDrawSplineSegmentBezierQuadratic, nativeDrawSplineSegmentBezierCubic, nativeGetSplinePointLinear, nativeGetSplinePointBasis, nativeGetSplinePointCatmullRom, nativeGetSplinePointBezierQuad, nativeGetSplinePointBezierCubic, nativeCheckCollisionRecs, nativeCheckCollisionCircles, nativeCheckCollisionCircleRec, nativeCheckCollisionCircleLine, nativeCheckCollisionPointRec, nativeCheckCollisionPointCircle, nativeCheckCollisionPointTriangle, nativeCheckCollisionPointLine, nativeCheckCollisionPointPoly, nativeGetCollisionRec, nativeLoadImage, nativeLoadImageRaw, nativeLoadImageFromMemory, nativeLoadImageFromTexture, nativeLoadImageFromScreen, nativeIsImageValid, nativeUnloadImage, nativeExportImage, nativeExportImageAsCode, nativeGenImageColor, nativeGenImageGradientLinear, nativeGenImageGradientRadial, nativeGenImageGradientSquare, nativeGenImageChecked, nativeGenImageWhiteNoise, nativeGenImagePerlinNoise, nativeGenImageCellular, nativeGenImageText, nativeImageCopy, nativeImageFromImage, nativeImageFromChannel, nativeImageText, nativeImageTextEx, nativeImageFormat, nativeImageToPOT, nativeImageCrop, nativeImageAlphaCrop, nativeImageAlphaClear, nativeImageAlphaMask, nativeImageAlphaPremultiply, nativeImageBlurGaussian, nativeImageKernelConvolution, nativeImageResize, nativeImageResizeNN, nativeImageResizeCanvas, nativeImageMipmaps, nativeImageDither, nativeImageFlipVertical, nativeImageFlipHorizontal, nativeImageRotate, nativeImageRotateCW, nativeImageRotateCCW, nativeImageColorTint, nativeImageColorInvert, nativeImageColorGrayscale, nativeImageColorContrast, nativeImageColorBrightness, nativeImageColorReplace, nativeGetImageAlphaBorder, nativeGetImageColor, nativeImageClearBackground, nativeImageDrawPixel, nativeImageDrawPixelV, nativeImageDrawLine, nativeImageDrawLineV, nativeImageDrawLineEx, nativeImageDrawCircle, nativeImageDrawCircleV, nativeImageDrawCircleLines, nativeImageDrawCircleLinesV, nativeImageDrawRectangle, nativeImageDrawRectangleV, nativeImageDrawRectangleRec, nativeImageDrawRectangleLines, nativeImageDrawTriangle, nativeImageDrawTriangleEx, nativeImageDrawTriangleLines, nativeImageDrawTriangleFan, nativeImageDrawTriangleStrip, nativeImageDraw, nativeImageDrawText, nativeImageDrawTextEx, nativeLoadTexture, nativeLoadTextureFromImage, nativeLoadTextureCubemap, nativeLoadRenderTexture, nativeIsTextureValid, nativeUnloadTexture, nativeIsRenderTextureValid, nativeUnloadRenderTexture, nativeUpdateTexture, nativeUpdateTextureRec, nativeGenTextureMipmaps, nativeSetTextureFilter, nativeSetTextureWrap, nativeDrawTexture, nativeDrawTextureV, nativeDrawTextureEx, nativeDrawTextureRec, nativeDrawTexturePro, nativeDrawTextureNPatch, nativeColorIsEqual, nativeFade, nativeColorToInt, nativeColorNormalize, nativeColorFromNormalized, nativeColorToHSV, nativeColorFromHSV, nativeColorTint, nativeColorBrightness, nativeColorContrast, nativeColorAlpha, nativeColorAlphaBlend, nativeColorLerp, nativeGetColor, nativeGetPixelDataSize, nativeGetFontDefault, nativeLoadFont, nativeLoadFontEx, nativeLoadFontFromImage, nativeLoadFontFromMemory, nativeIsFontValid, nativeUnloadFontData, nativeUnloadFont, nativeExportFontAsCode, nativeDrawFPS, nativeDrawText, nativeDrawTextEx, nativeDrawTextPro, nativeDrawTextCodepoint, nativeDrawTextCodepoints, nativeSetTextLineSpacing, nativeMeasureText, nativeMeasureTextEx, nativeMeasureTextCodepoints, nativeGetGlyphIndex, nativeGetGlyphInfo, nativeGetGlyphAtlasRec, nativeLoadUTF8, nativeGetCodepointCount, nativeTextCopy, nativeTextIsEqual, nativeTextLength, nativeTextSubtext, nativeTextRemoveSpaces, nativeGetTextBetween, nativeTextReplace, nativeTextReplaceAlloc, nativeTextReplaceBetween, nativeTextReplaceBetweenAlloc, nativeTextInsert, nativeTextInsertAlloc, nativeTextFindIndex, nativeTextToUpper, nativeTextToLower, nativeTextToPascal, nativeTextToSnake, nativeTextToCamel, nativeTextToInteger, nativeTextToFloat, nativeDrawLine3D, nativeDrawPoint3D, nativeDrawCircle3D, nativeDrawTriangle3D, nativeDrawTriangleStrip3D, nativeDrawCube, nativeDrawCubeV, nativeDrawCubeWires, nativeDrawCubeWiresV, nativeDrawSphere, nativeDrawSphereEx, nativeDrawSphereWires, nativeDrawCylinder, nativeDrawCylinderEx, nativeDrawCylinderWires, nativeDrawCylinderWiresEx, nativeDrawCapsule, nativeDrawCapsuleWires, nativeDrawPlane, nativeDrawRay, nativeDrawGrid, nativeLoadModel, nativeLoadModelFromMesh, nativeIsModelValid, nativeUnloadModel, nativeGetModelBoundingBox, nativeDrawModel, nativeDrawModelEx, nativeDrawModelWires, nativeDrawModelWiresEx, nativeDrawBoundingBox, nativeDrawBillboard, nativeDrawBillboardRec, nativeDrawBillboardPro, nativeUploadMesh, nativeUpdateMeshBuffer, nativeUnloadMesh, nativeDrawMesh, nativeDrawMeshInstanced, nativeGetMeshBoundingBox, nativeGenMeshTangents, nativeExportMesh, nativeExportMeshAsCode, nativeGenMeshPoly, nativeGenMeshPlane, nativeGenMeshCube, nativeGenMeshSphere, nativeGenMeshHemiSphere, nativeGenMeshCylinder, nativeGenMeshCone, nativeGenMeshTorus, nativeGenMeshKnot, nativeGenMeshHeightmap, nativeGenMeshCubicmap, nativeLoadMaterialDefault, nativeIsMaterialValid, nativeUnloadMaterial, nativeSetMaterialTexture, nativeSetModelMeshMaterial, nativeUpdateModelAnimation, nativeUpdateModelAnimationEx, nativeUnloadModelAnimations, nativeIsModelAnimationValid, nativeCheckCollisionSpheres, nativeCheckCollisionBoxes, nativeCheckCollisionBoxSphere, nativeGetRayCollisionSphere, nativeGetRayCollisionBox, nativeGetRayCollisionMesh, nativeGetRayCollisionTriangle, nativeGetRayCollisionQuad, nativeInitAudioDevice, nativeCloseAudioDevice, nativeIsAudioDeviceReady, nativeSetMasterVolume, nativeGetMasterVolume, nativeLoadWave, nativeLoadWaveFromMemory, nativeIsWaveValid, nativeLoadSound, nativeLoadSoundFromWave, nativeLoadSoundAlias, nativeIsSoundValid, nativeUpdateSound, nativeUnloadWave, nativeUnloadSound, nativeUnloadSoundAlias, nativeExportWave, nativeExportWaveAsCode, nativePlaySound, nativeStopSound, nativePauseSound, nativeResumeSound, nativeIsSoundPlaying, nativeSetSoundVolume, nativeSetSoundPitch, nativeSetSoundPan, nativeWaveCopy, nativeWaveCrop, nativeWaveFormat, nativeLoadMusicStream, nativeLoadMusicStreamFromMemory, nativeIsMusicValid, nativeUnloadMusicStream, nativePlayMusicStream, nativeIsMusicStreamPlaying, nativeUpdateMusicStream, nativeStopMusicStream, nativePauseMusicStream, nativeResumeMusicStream, nativeSeekMusicStream, nativeSetMusicVolume, nativeSetMusicPitch, nativeSetMusicPan, nativeGetMusicTimeLength, nativeGetMusicTimePlayed, nativeLoadAudioStream, nativeIsAudioStreamValid, nativeUnloadAudioStream, nativeUpdateAudioStream, nativeIsAudioStreamProcessed, nativePlayAudioStream, nativePauseAudioStream, nativeResumeAudioStream, nativeIsAudioStreamPlaying, nativeStopAudioStream, nativeSetAudioStreamVolume, nativeSetAudioStreamPitch, nativeSetAudioStreamPan, nativeSetAudioStreamBufferSizeDefault, nativeTraceLogText, nativeLoadFileDataCopy, nativeCompressDataCopy, nativeDecompressDataCopy, nativeEncodeDataBase64Copy, nativeDecodeDataBase64Copy, nativeComputeMD5, nativeComputeSHA1, nativeComputeSHA256, nativeLoadRandomSequenceCopy, nativeExportImageToMemoryCopy, nativeLoadImageColorsCopy, nativeLoadImagePaletteCopy, nativeLoadCodepointsCopy, nativeCodepointToUTF8Copy, nativeLoadTextLinesCopy, nativeTextSplitCopy, nativeLoadWaveSamplesCopy, nativeGetPixelColorCopy, nativeSetPixelColorCopy, nativeSetWindowIconsCopy, nativeUpdateCameraCopy, nativeUpdateCameraProCopy, nativeCheckCollisionLinesCopy, nativeLoadImageAnimCopy, nativeLoadImageAnimFromMemoryCopy, nativeGetCodepointCopy, nativeGetCodepointNextCopy, nativeGetCodepointPreviousCopy } from "./native";
export * from "./types";
export * from "./constants";
import type * as T from "./types";
export function initWindow(width: number, height: number, title: string): void {
  nativeInitWindow(width, height, title, true);
}
export function closeWindow(): void {
  nativeCloseWindow();
}
export function windowShouldClose(): boolean {
  return nativeWindowShouldClose();
}
export function isWindowReady(): boolean {
  return nativeIsWindowReady();
}
export function isWindowFullscreen(): boolean {
  return nativeIsWindowFullscreen();
}
export function isWindowHidden(): boolean {
  return nativeIsWindowHidden();
}
export function isWindowMinimized(): boolean {
  return nativeIsWindowMinimized();
}
export function isWindowMaximized(): boolean {
  return nativeIsWindowMaximized();
}
export function isWindowFocused(): boolean {
  return nativeIsWindowFocused();
}
export function isWindowResized(): boolean {
  return nativeIsWindowResized();
}
export function isWindowState(flag: number): boolean {
  return nativeIsWindowState(flag);
}
export function setWindowState(flags: number): void {
  nativeSetWindowState(flags);
}
export function clearWindowState(flags: number): void {
  nativeClearWindowState(flags);
}
export function toggleFullscreen(): void {
  nativeToggleFullscreen();
}
export function toggleBorderlessWindowed(): void {
  nativeToggleBorderlessWindowed();
}
export function maximizeWindow(): void {
  nativeMaximizeWindow();
}
export function minimizeWindow(): void {
  nativeMinimizeWindow();
}
export function restoreWindow(): void {
  nativeRestoreWindow();
}
export function setWindowIcon(image: T.Image): void {
  nativeSetWindowIcon(image.handle);
}
export function setWindowTitle(title: string): void {
  nativeSetWindowTitle(title, true);
}
export function setWindowPosition(x: number, y: number): void {
  nativeSetWindowPosition(x, y);
}
export function setWindowMonitor(monitor: number): void {
  nativeSetWindowMonitor(monitor);
}
export function setWindowMinSize(width: number, height: number): void {
  nativeSetWindowMinSize(width, height);
}
export function setWindowMaxSize(width: number, height: number): void {
  nativeSetWindowMaxSize(width, height);
}
export function setWindowSize(width: number, height: number): void {
  nativeSetWindowSize(width, height);
}
export function setWindowOpacity(opacity: number): void {
  nativeSetWindowOpacity(opacity);
}
export function setWindowFocused(): void {
  nativeSetWindowFocused();
}
export function getScreenWidth(): number {
  return nativeGetScreenWidth();
}
export function getScreenHeight(): number {
  return nativeGetScreenHeight();
}
export function getRenderWidth(): number {
  return nativeGetRenderWidth();
}
export function getRenderHeight(): number {
  return nativeGetRenderHeight();
}
export function getMonitorCount(): number {
  return nativeGetMonitorCount();
}
export function getCurrentMonitor(): number {
  return nativeGetCurrentMonitor();
}
export function getMonitorPosition(monitor: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetMonitorPosition(monitor, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getMonitorWidth(monitor: number): number {
  return nativeGetMonitorWidth(monitor);
}
export function getMonitorHeight(monitor: number): number {
  return nativeGetMonitorHeight(monitor);
}
export function getMonitorPhysicalWidth(monitor: number): number {
  return nativeGetMonitorPhysicalWidth(monitor);
}
export function getMonitorPhysicalHeight(monitor: number): number {
  return nativeGetMonitorPhysicalHeight(monitor);
}
export function getMonitorRefreshRate(monitor: number): number {
  return nativeGetMonitorRefreshRate(monitor);
}
export function getWindowPosition(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetWindowPosition((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getWindowScaleDPI(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetWindowScaleDPI((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getMonitorName(monitor: number): string | null {
  let result: string | null = null;
  nativeGetMonitorName(monitor, (value: string) => { result = value; });
  return result;
}
export function setClipboardText(text: string): void {
  nativeSetClipboardText(text, true);
}
export function getClipboardText(): string | null {
  let result: string | null = null;
  nativeGetClipboardText((value: string) => { result = value; });
  return result;
}
export function getClipboardImage(): T.Image {
  return { handle: nativeGetClipboardImage(), kind: "Image" };
}
export function enableEventWaiting(): void {
  nativeEnableEventWaiting();
}
export function disableEventWaiting(): void {
  nativeDisableEventWaiting();
}
export function showCursor(): void {
  nativeShowCursor();
}
export function hideCursor(): void {
  nativeHideCursor();
}
export function isCursorHidden(): boolean {
  return nativeIsCursorHidden();
}
export function enableCursor(): void {
  nativeEnableCursor();
}
export function disableCursor(): void {
  nativeDisableCursor();
}
export function isCursorOnScreen(): boolean {
  return nativeIsCursorOnScreen();
}
export function clearBackground(color: T.Color): void {
  nativeClearBackground(color.r, color.g, color.b, color.a);
}
export function beginDrawing(): void {
  nativeBeginDrawing();
}
export function endDrawing(): void {
  nativeEndDrawing();
}
export function beginMode2D(camera: T.Camera2D): void {
  nativeBeginMode2D(camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom);
}
export function endMode2D(): void {
  nativeEndMode2D();
}
export function beginMode3D(camera: T.Camera3D): void {
  nativeBeginMode3D(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection);
}
export function endMode3D(): void {
  nativeEndMode3D();
}
export function beginTextureMode(target: T.RenderTexture): void {
  nativeBeginTextureMode(target.handle);
}
export function endTextureMode(): void {
  nativeEndTextureMode();
}
export function beginShaderMode(shader: T.Shader): void {
  nativeBeginShaderMode(shader.handle);
}
export function endShaderMode(): void {
  nativeEndShaderMode();
}
export function beginBlendMode(mode: number): void {
  nativeBeginBlendMode(mode);
}
export function endBlendMode(): void {
  nativeEndBlendMode();
}
export function beginScissorMode(x: number, y: number, width: number, height: number): void {
  nativeBeginScissorMode(x, y, width, height);
}
export function endScissorMode(): void {
  nativeEndScissorMode();
}
export function beginVrStereoMode(config: T.VrStereoConfig): void {
  nativeBeginVrStereoMode(config.projection[0].m0, config.projection[0].m4, config.projection[0].m8, config.projection[0].m12, config.projection[0].m1, config.projection[0].m5, config.projection[0].m9, config.projection[0].m13, config.projection[0].m2, config.projection[0].m6, config.projection[0].m10, config.projection[0].m14, config.projection[0].m3, config.projection[0].m7, config.projection[0].m11, config.projection[0].m15, config.projection[1].m0, config.projection[1].m4, config.projection[1].m8, config.projection[1].m12, config.projection[1].m1, config.projection[1].m5, config.projection[1].m9, config.projection[1].m13, config.projection[1].m2, config.projection[1].m6, config.projection[1].m10, config.projection[1].m14, config.projection[1].m3, config.projection[1].m7, config.projection[1].m11, config.projection[1].m15, config.viewOffset[0].m0, config.viewOffset[0].m4, config.viewOffset[0].m8, config.viewOffset[0].m12, config.viewOffset[0].m1, config.viewOffset[0].m5, config.viewOffset[0].m9, config.viewOffset[0].m13, config.viewOffset[0].m2, config.viewOffset[0].m6, config.viewOffset[0].m10, config.viewOffset[0].m14, config.viewOffset[0].m3, config.viewOffset[0].m7, config.viewOffset[0].m11, config.viewOffset[0].m15, config.viewOffset[1].m0, config.viewOffset[1].m4, config.viewOffset[1].m8, config.viewOffset[1].m12, config.viewOffset[1].m1, config.viewOffset[1].m5, config.viewOffset[1].m9, config.viewOffset[1].m13, config.viewOffset[1].m2, config.viewOffset[1].m6, config.viewOffset[1].m10, config.viewOffset[1].m14, config.viewOffset[1].m3, config.viewOffset[1].m7, config.viewOffset[1].m11, config.viewOffset[1].m15, config.leftLensCenter[0], config.leftLensCenter[1], config.rightLensCenter[0], config.rightLensCenter[1], config.leftScreenCenter[0], config.leftScreenCenter[1], config.rightScreenCenter[0], config.rightScreenCenter[1], config.scale[0], config.scale[1], config.scaleIn[0], config.scaleIn[1]);
}
export function endVrStereoMode(): void {
  nativeEndVrStereoMode();
}
export function loadVrStereoConfig(device: T.VrDeviceInfo): T.VrStereoConfig {
  let result = { projection: [{ m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 } as T.Matrix, { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 } as T.Matrix], viewOffset: [{ m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 } as T.Matrix, { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 } as T.Matrix], leftLensCenter: [0, 0], rightLensCenter: [0, 0], leftScreenCenter: [0, 0], rightScreenCenter: [0, 0], scale: [0, 0], scaleIn: [0, 0] } as T.VrStereoConfig;
  nativeLoadVrStereoConfig(device.hResolution, device.vResolution, device.hScreenSize, device.vScreenSize, device.eyeToScreenDistance, device.lensSeparationDistance, device.interpupillaryDistance, device.lensDistortionValues[0], device.lensDistortionValues[1], device.lensDistortionValues[2], device.lensDistortionValues[3], device.chromaAbCorrection[0], device.chromaAbCorrection[1], device.chromaAbCorrection[2], device.chromaAbCorrection[3], (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, value8: number, value9: number, value10: number, value11: number, value12: number, value13: number, value14: number, value15: number, value16: number, value17: number, value18: number, value19: number, value20: number, value21: number, value22: number, value23: number, value24: number, value25: number, value26: number, value27: number, value28: number, value29: number, value30: number, value31: number, value32: number, value33: number, value34: number, value35: number, value36: number, value37: number, value38: number, value39: number, value40: number, value41: number, value42: number, value43: number, value44: number, value45: number, value46: number, value47: number, value48: number, value49: number, value50: number, value51: number, value52: number, value53: number, value54: number, value55: number, value56: number, value57: number, value58: number, value59: number, value60: number, value61: number, value62: number, value63: number, value64: number, value65: number, value66: number, value67: number, value68: number, value69: number, value70: number, value71: number, value72: number, value73: number, value74: number, value75: number) => {
    result.projection[0].m0 = value0;
    result.projection[0].m4 = value1;
    result.projection[0].m8 = value2;
    result.projection[0].m12 = value3;
    result.projection[0].m1 = value4;
    result.projection[0].m5 = value5;
    result.projection[0].m9 = value6;
    result.projection[0].m13 = value7;
    result.projection[0].m2 = value8;
    result.projection[0].m6 = value9;
    result.projection[0].m10 = value10;
    result.projection[0].m14 = value11;
    result.projection[0].m3 = value12;
    result.projection[0].m7 = value13;
    result.projection[0].m11 = value14;
    result.projection[0].m15 = value15;
    result.projection[1].m0 = value16;
    result.projection[1].m4 = value17;
    result.projection[1].m8 = value18;
    result.projection[1].m12 = value19;
    result.projection[1].m1 = value20;
    result.projection[1].m5 = value21;
    result.projection[1].m9 = value22;
    result.projection[1].m13 = value23;
    result.projection[1].m2 = value24;
    result.projection[1].m6 = value25;
    result.projection[1].m10 = value26;
    result.projection[1].m14 = value27;
    result.projection[1].m3 = value28;
    result.projection[1].m7 = value29;
    result.projection[1].m11 = value30;
    result.projection[1].m15 = value31;
    result.viewOffset[0].m0 = value32;
    result.viewOffset[0].m4 = value33;
    result.viewOffset[0].m8 = value34;
    result.viewOffset[0].m12 = value35;
    result.viewOffset[0].m1 = value36;
    result.viewOffset[0].m5 = value37;
    result.viewOffset[0].m9 = value38;
    result.viewOffset[0].m13 = value39;
    result.viewOffset[0].m2 = value40;
    result.viewOffset[0].m6 = value41;
    result.viewOffset[0].m10 = value42;
    result.viewOffset[0].m14 = value43;
    result.viewOffset[0].m3 = value44;
    result.viewOffset[0].m7 = value45;
    result.viewOffset[0].m11 = value46;
    result.viewOffset[0].m15 = value47;
    result.viewOffset[1].m0 = value48;
    result.viewOffset[1].m4 = value49;
    result.viewOffset[1].m8 = value50;
    result.viewOffset[1].m12 = value51;
    result.viewOffset[1].m1 = value52;
    result.viewOffset[1].m5 = value53;
    result.viewOffset[1].m9 = value54;
    result.viewOffset[1].m13 = value55;
    result.viewOffset[1].m2 = value56;
    result.viewOffset[1].m6 = value57;
    result.viewOffset[1].m10 = value58;
    result.viewOffset[1].m14 = value59;
    result.viewOffset[1].m3 = value60;
    result.viewOffset[1].m7 = value61;
    result.viewOffset[1].m11 = value62;
    result.viewOffset[1].m15 = value63;
    result.leftLensCenter[0] = value64;
    result.leftLensCenter[1] = value65;
    result.rightLensCenter[0] = value66;
    result.rightLensCenter[1] = value67;
    result.leftScreenCenter[0] = value68;
    result.leftScreenCenter[1] = value69;
    result.rightScreenCenter[0] = value70;
    result.rightScreenCenter[1] = value71;
    result.scale[0] = value72;
    result.scale[1] = value73;
    result.scaleIn[0] = value74;
    result.scaleIn[1] = value75;
  });
  return result;
}
export function unloadVrStereoConfig(config: T.VrStereoConfig): void {
  nativeUnloadVrStereoConfig(config.projection[0].m0, config.projection[0].m4, config.projection[0].m8, config.projection[0].m12, config.projection[0].m1, config.projection[0].m5, config.projection[0].m9, config.projection[0].m13, config.projection[0].m2, config.projection[0].m6, config.projection[0].m10, config.projection[0].m14, config.projection[0].m3, config.projection[0].m7, config.projection[0].m11, config.projection[0].m15, config.projection[1].m0, config.projection[1].m4, config.projection[1].m8, config.projection[1].m12, config.projection[1].m1, config.projection[1].m5, config.projection[1].m9, config.projection[1].m13, config.projection[1].m2, config.projection[1].m6, config.projection[1].m10, config.projection[1].m14, config.projection[1].m3, config.projection[1].m7, config.projection[1].m11, config.projection[1].m15, config.viewOffset[0].m0, config.viewOffset[0].m4, config.viewOffset[0].m8, config.viewOffset[0].m12, config.viewOffset[0].m1, config.viewOffset[0].m5, config.viewOffset[0].m9, config.viewOffset[0].m13, config.viewOffset[0].m2, config.viewOffset[0].m6, config.viewOffset[0].m10, config.viewOffset[0].m14, config.viewOffset[0].m3, config.viewOffset[0].m7, config.viewOffset[0].m11, config.viewOffset[0].m15, config.viewOffset[1].m0, config.viewOffset[1].m4, config.viewOffset[1].m8, config.viewOffset[1].m12, config.viewOffset[1].m1, config.viewOffset[1].m5, config.viewOffset[1].m9, config.viewOffset[1].m13, config.viewOffset[1].m2, config.viewOffset[1].m6, config.viewOffset[1].m10, config.viewOffset[1].m14, config.viewOffset[1].m3, config.viewOffset[1].m7, config.viewOffset[1].m11, config.viewOffset[1].m15, config.leftLensCenter[0], config.leftLensCenter[1], config.rightLensCenter[0], config.rightLensCenter[1], config.leftScreenCenter[0], config.leftScreenCenter[1], config.rightScreenCenter[0], config.rightScreenCenter[1], config.scale[0], config.scale[1], config.scaleIn[0], config.scaleIn[1]);
}
export function loadShader(vsFileName: string | null, fsFileName: string | null): T.Shader {
  return { handle: nativeLoadShader(vsFileName ?? "", vsFileName !== null, fsFileName ?? "", fsFileName !== null), kind: "Shader" };
}
export function loadShaderFromMemory(vsCode: string | null, fsCode: string | null): T.Shader {
  return { handle: nativeLoadShaderFromMemory(vsCode ?? "", vsCode !== null, fsCode ?? "", fsCode !== null), kind: "Shader" };
}
export function isShaderValid(shader: T.Shader): boolean {
  return nativeIsShaderValid(shader.handle);
}
export function getShaderLocation(shader: T.Shader, uniformName: string): number {
  return nativeGetShaderLocation(shader.handle, uniformName, true);
}
export function getShaderLocationAttrib(shader: T.Shader, attribName: string): number {
  return nativeGetShaderLocationAttrib(shader.handle, attribName, true);
}
export function setShaderValue(shader: T.Shader, locIndex: number, value: Uint8Array, uniformType: number): void {
  nativeSetShaderValue(shader.handle, locIndex, value, uniformType);
}
export function setShaderValueV(shader: T.Shader, locIndex: number, value: Uint8Array, uniformType: number, count: number): void {
  nativeSetShaderValueV(shader.handle, locIndex, value, uniformType, count);
}
export function setShaderValueMatrix(shader: T.Shader, locIndex: number, mat: T.Matrix): void {
  nativeSetShaderValueMatrix(shader.handle, locIndex, mat.m0, mat.m4, mat.m8, mat.m12, mat.m1, mat.m5, mat.m9, mat.m13, mat.m2, mat.m6, mat.m10, mat.m14, mat.m3, mat.m7, mat.m11, mat.m15);
}
export function setShaderValueTexture(shader: T.Shader, locIndex: number, texture: T.Texture): void {
  nativeSetShaderValueTexture(shader.handle, locIndex, texture.handle);
}
export function unloadShader(shader: T.Shader): void {
  nativeUnloadShader(shader.handle);
}
export function getScreenToWorldRay(position: T.Vector2, camera: T.Camera3D): T.Ray {
  let result = { position: { x: 0, y: 0, z: 0 } as T.Vector3, direction: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.Ray;
  nativeGetScreenToWorldRay(position.x, position.y, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number) => {
    result.position.x = value0;
    result.position.y = value1;
    result.position.z = value2;
    result.direction.x = value3;
    result.direction.y = value4;
    result.direction.z = value5;
  });
  return result;
}
export function getScreenToWorldRayEx(position: T.Vector2, camera: T.Camera3D, width: number, height: number): T.Ray {
  let result = { position: { x: 0, y: 0, z: 0 } as T.Vector3, direction: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.Ray;
  nativeGetScreenToWorldRayEx(position.x, position.y, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, width, height, (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number) => {
    result.position.x = value0;
    result.position.y = value1;
    result.position.z = value2;
    result.direction.x = value3;
    result.direction.y = value4;
    result.direction.z = value5;
  });
  return result;
}
export function getWorldToScreen(position: T.Vector3, camera: T.Camera3D): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetWorldToScreen(position.x, position.y, position.z, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getWorldToScreenEx(position: T.Vector3, camera: T.Camera3D, width: number, height: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetWorldToScreenEx(position.x, position.y, position.z, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, width, height, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getWorldToScreen2D(position: T.Vector2, camera: T.Camera2D): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetWorldToScreen2D(position.x, position.y, camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getScreenToWorld2D(position: T.Vector2, camera: T.Camera2D): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetScreenToWorld2D(position.x, position.y, camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getCameraMatrix(camera: T.Camera3D): T.Matrix {
  let result = { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 } as T.Matrix;
  nativeGetCameraMatrix(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, value8: number, value9: number, value10: number, value11: number, value12: number, value13: number, value14: number, value15: number) => {
    result.m0 = value0;
    result.m4 = value1;
    result.m8 = value2;
    result.m12 = value3;
    result.m1 = value4;
    result.m5 = value5;
    result.m9 = value6;
    result.m13 = value7;
    result.m2 = value8;
    result.m6 = value9;
    result.m10 = value10;
    result.m14 = value11;
    result.m3 = value12;
    result.m7 = value13;
    result.m11 = value14;
    result.m15 = value15;
  });
  return result;
}
export function getCameraMatrix2D(camera: T.Camera2D): T.Matrix {
  let result = { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 } as T.Matrix;
  nativeGetCameraMatrix2D(camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom, (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, value8: number, value9: number, value10: number, value11: number, value12: number, value13: number, value14: number, value15: number) => {
    result.m0 = value0;
    result.m4 = value1;
    result.m8 = value2;
    result.m12 = value3;
    result.m1 = value4;
    result.m5 = value5;
    result.m9 = value6;
    result.m13 = value7;
    result.m2 = value8;
    result.m6 = value9;
    result.m10 = value10;
    result.m14 = value11;
    result.m3 = value12;
    result.m7 = value13;
    result.m11 = value14;
    result.m15 = value15;
  });
  return result;
}
export function setTargetFPS(fps: number): void {
  nativeSetTargetFPS(fps);
}
export function getFrameTime(): number {
  return nativeGetFrameTime();
}
export function getTime(): number {
  return nativeGetTime();
}
export function getFPS(): number {
  return nativeGetFPS();
}
export function swapScreenBuffer(): void {
  nativeSwapScreenBuffer();
}
export function pollInputEvents(): void {
  nativePollInputEvents();
}
export function waitTime(seconds: number): void {
  nativeWaitTime(seconds);
}
export function setRandomSeed(seed: number): void {
  nativeSetRandomSeed(seed);
}
export function getRandomValue(min: number, max: number): number {
  return nativeGetRandomValue(min, max);
}
export function takeScreenshot(fileName: string): void {
  nativeTakeScreenshot(fileName, true);
}
export function setConfigFlags(flags: number): void {
  nativeSetConfigFlags(flags);
}
export function openURL(url: string): void {
  nativeOpenURL(url, true);
}
export function setTraceLogLevel(logLevel: number): void {
  nativeSetTraceLogLevel(logLevel);
}
export function saveFileData(fileName: string, data: Uint8Array, dataSize: number): boolean {
  return nativeSaveFileData(fileName, true, data, dataSize);
}
export function exportDataAsCode(data: Uint8Array, dataSize: number, fileName: string): boolean {
  return nativeExportDataAsCode(data, dataSize, fileName, true);
}
export function loadFileText(fileName: string): string | null {
  let result: string | null = null;
  nativeLoadFileText(fileName, true, (value: string) => { result = value; });
  return result;
}
export function saveFileText(fileName: string, text: string): boolean {
  return nativeSaveFileText(fileName, true, text, true);
}
export function fileRename(fileName: string, fileRename: string): number {
  return nativeFileRename(fileName, true, fileRename, true);
}
export function fileRemove(fileName: string): number {
  return nativeFileRemove(fileName, true);
}
export function fileCopy(srcPath: string, dstPath: string): number {
  return nativeFileCopy(srcPath, true, dstPath, true);
}
export function fileMove(srcPath: string, dstPath: string): number {
  return nativeFileMove(srcPath, true, dstPath, true);
}
export function fileTextReplace(fileName: string, search: string, replacement: string): number {
  return nativeFileTextReplace(fileName, true, search, true, replacement, true);
}
export function fileTextFindIndex(fileName: string, search: string): number {
  return nativeFileTextFindIndex(fileName, true, search, true);
}
export function fileExists(fileName: string): boolean {
  return nativeFileExists(fileName, true);
}
export function directoryExists(dirPath: string): boolean {
  return nativeDirectoryExists(dirPath, true);
}
export function isFileExtension(fileName: string, ext: string): boolean {
  return nativeIsFileExtension(fileName, true, ext, true);
}
export function getFileLength(fileName: string): number {
  return nativeGetFileLength(fileName, true);
}
export function getFileModTime(fileName: string): number {
  return nativeGetFileModTime(fileName, true);
}
export function getFileExtension(fileName: string): string | null {
  let result: string | null = null;
  nativeGetFileExtension(fileName, true, (value: string) => { result = value; });
  return result;
}
export function getFileName(filePath: string): string | null {
  let result: string | null = null;
  nativeGetFileName(filePath, true, (value: string) => { result = value; });
  return result;
}
export function getFileNameWithoutExt(filePath: string): string | null {
  let result: string | null = null;
  nativeGetFileNameWithoutExt(filePath, true, (value: string) => { result = value; });
  return result;
}
export function getDirectoryPath(filePath: string): string | null {
  let result: string | null = null;
  nativeGetDirectoryPath(filePath, true, (value: string) => { result = value; });
  return result;
}
export function getPrevDirectoryPath(dirPath: string): string | null {
  let result: string | null = null;
  nativeGetPrevDirectoryPath(dirPath, true, (value: string) => { result = value; });
  return result;
}
export function getWorkingDirectory(): string | null {
  let result: string | null = null;
  nativeGetWorkingDirectory((value: string) => { result = value; });
  return result;
}
export function getApplicationDirectory(): string | null {
  let result: string | null = null;
  nativeGetApplicationDirectory((value: string) => { result = value; });
  return result;
}
export function makeDirectory(dirPath: string): number {
  return nativeMakeDirectory(dirPath, true);
}
export function changeDirectory(dirPath: string): boolean {
  return nativeChangeDirectory(dirPath, true);
}
export function isPathFile(path: string): boolean {
  return nativeIsPathFile(path, true);
}
export function isFileNameValid(fileName: string): boolean {
  return nativeIsFileNameValid(fileName, true);
}
export function loadDirectoryFiles(dirPath: string): T.FilePathList {
  return { handle: nativeLoadDirectoryFiles(dirPath, true), kind: "FilePathList" };
}
export function loadDirectoryFilesEx(basePath: string, filter: string, scanSubdirs: boolean): T.FilePathList {
  return { handle: nativeLoadDirectoryFilesEx(basePath, true, filter, true, scanSubdirs), kind: "FilePathList" };
}
export function unloadDirectoryFiles(files: T.FilePathList): void {
  nativeUnloadDirectoryFiles(files.handle);
}
export function isFileDropped(): boolean {
  return nativeIsFileDropped();
}
export function loadDroppedFiles(): T.FilePathList {
  return { handle: nativeLoadDroppedFiles(), kind: "FilePathList" };
}
export function unloadDroppedFiles(files: T.FilePathList): void {
  nativeUnloadDroppedFiles(files.handle);
}
export function getDirectoryFileCount(dirPath: string): number {
  return nativeGetDirectoryFileCount(dirPath, true);
}
export function getDirectoryFileCountEx(basePath: string, filter: string, scanSubdirs: boolean): number {
  return nativeGetDirectoryFileCountEx(basePath, true, filter, true, scanSubdirs);
}
export function computeCRC32(data: Uint8Array, dataSize: number): number {
  return nativeComputeCRC32(data, dataSize);
}
export function loadAutomationEventList(fileName: string | null): T.AutomationEventList {
  return { handle: nativeLoadAutomationEventList(fileName ?? "", fileName !== null), kind: "AutomationEventList" };
}
export function unloadAutomationEventList(list: T.AutomationEventList): void {
  nativeUnloadAutomationEventList(list.handle);
}
export function exportAutomationEventList(list: T.AutomationEventList, fileName: string): boolean {
  return nativeExportAutomationEventList(list.handle, fileName, true);
}
export function setAutomationEventList(list: T.AutomationEventList): void {
  nativeSetAutomationEventList(list.handle);
}
export function setAutomationEventBaseFrame(frame: number): void {
  nativeSetAutomationEventBaseFrame(frame);
}
export function startAutomationEventRecording(): void {
  nativeStartAutomationEventRecording();
}
export function stopAutomationEventRecording(): void {
  nativeStopAutomationEventRecording();
}
export function playAutomationEvent(event: T.AutomationEvent): void {
  nativePlayAutomationEvent(event.frame, event.type, event.params[0], event.params[1], event.params[2], event.params[3]);
}
export function isKeyPressed(key: number): boolean {
  return nativeIsKeyPressed(key);
}
export function isKeyPressedRepeat(key: number): boolean {
  return nativeIsKeyPressedRepeat(key);
}
export function isKeyDown(key: number): boolean {
  return nativeIsKeyDown(key);
}
export function isKeyReleased(key: number): boolean {
  return nativeIsKeyReleased(key);
}
export function isKeyUp(key: number): boolean {
  return nativeIsKeyUp(key);
}
export function getKeyPressed(): number {
  return nativeGetKeyPressed();
}
export function getCharPressed(): number {
  return nativeGetCharPressed();
}
export function getKeyName(key: number): string | null {
  let result: string | null = null;
  nativeGetKeyName(key, (value: string) => { result = value; });
  return result;
}
export function setExitKey(key: number): void {
  nativeSetExitKey(key);
}
export function isGamepadAvailable(gamepad: number): boolean {
  return nativeIsGamepadAvailable(gamepad);
}
export function getGamepadName(gamepad: number): string | null {
  let result: string | null = null;
  nativeGetGamepadName(gamepad, (value: string) => { result = value; });
  return result;
}
export function isGamepadButtonPressed(gamepad: number, button: number): boolean {
  return nativeIsGamepadButtonPressed(gamepad, button);
}
export function isGamepadButtonDown(gamepad: number, button: number): boolean {
  return nativeIsGamepadButtonDown(gamepad, button);
}
export function isGamepadButtonReleased(gamepad: number, button: number): boolean {
  return nativeIsGamepadButtonReleased(gamepad, button);
}
export function isGamepadButtonUp(gamepad: number, button: number): boolean {
  return nativeIsGamepadButtonUp(gamepad, button);
}
export function getGamepadButtonPressed(): number {
  return nativeGetGamepadButtonPressed();
}
export function getGamepadAxisCount(gamepad: number): number {
  return nativeGetGamepadAxisCount(gamepad);
}
export function getGamepadAxisMovement(gamepad: number, axis: number): number {
  return nativeGetGamepadAxisMovement(gamepad, axis);
}
export function setGamepadMappings(mappings: string): number {
  return nativeSetGamepadMappings(mappings, true);
}
export function setGamepadVibration(gamepad: number, leftMotor: number, rightMotor: number, duration: number): void {
  nativeSetGamepadVibration(gamepad, leftMotor, rightMotor, duration);
}
export function isMouseButtonPressed(button: number): boolean {
  return nativeIsMouseButtonPressed(button);
}
export function isMouseButtonDown(button: number): boolean {
  return nativeIsMouseButtonDown(button);
}
export function isMouseButtonReleased(button: number): boolean {
  return nativeIsMouseButtonReleased(button);
}
export function isMouseButtonUp(button: number): boolean {
  return nativeIsMouseButtonUp(button);
}
export function getMouseX(): number {
  return nativeGetMouseX();
}
export function getMouseY(): number {
  return nativeGetMouseY();
}
export function getMousePosition(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetMousePosition((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getMouseDelta(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetMouseDelta((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function setMousePosition(x: number, y: number): void {
  nativeSetMousePosition(x, y);
}
export function setMouseOffset(offsetX: number, offsetY: number): void {
  nativeSetMouseOffset(offsetX, offsetY);
}
export function setMouseScale(scaleX: number, scaleY: number): void {
  nativeSetMouseScale(scaleX, scaleY);
}
export function getMouseWheelMove(): number {
  return nativeGetMouseWheelMove();
}
export function getMouseWheelMoveV(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetMouseWheelMoveV((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function setMouseCursor(cursor: number): void {
  nativeSetMouseCursor(cursor);
}
export function getTouchX(): number {
  return nativeGetTouchX();
}
export function getTouchY(): number {
  return nativeGetTouchY();
}
export function getTouchPosition(index: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetTouchPosition(index, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getTouchPointId(index: number): number {
  return nativeGetTouchPointId(index);
}
export function getTouchPointCount(): number {
  return nativeGetTouchPointCount();
}
export function setGesturesEnabled(flags: number): void {
  nativeSetGesturesEnabled(flags);
}
export function isGestureDetected(gesture: number): boolean {
  return nativeIsGestureDetected(gesture);
}
export function getGestureDetected(): number {
  return nativeGetGestureDetected();
}
export function getGestureHoldDuration(): number {
  return nativeGetGestureHoldDuration();
}
export function getGestureDragVector(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetGestureDragVector((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getGestureDragAngle(): number {
  return nativeGetGestureDragAngle();
}
export function getGesturePinchVector(): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetGesturePinchVector((value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getGesturePinchAngle(): number {
  return nativeGetGesturePinchAngle();
}
export function setShapesTexture(texture: T.Texture, source: T.Rectangle): void {
  nativeSetShapesTexture(texture.handle, source.x, source.y, source.width, source.height);
}
export function getShapesTexture(): T.Texture {
  return { handle: nativeGetShapesTexture(), kind: "Texture" };
}
export function getShapesTextureRectangle(): T.Rectangle {
  let result = { x: 0, y: 0, width: 0, height: 0 } as T.Rectangle;
  nativeGetShapesTextureRectangle((value0: number, value1: number, value2: number, value3: number) => {
    result.x = value0;
    result.y = value1;
    result.width = value2;
    result.height = value3;
  });
  return result;
}
export function drawPixel(posX: number, posY: number, color: T.Color): void {
  nativeDrawPixel(posX, posY, color.r, color.g, color.b, color.a);
}
export function drawPixelV(position: T.Vector2, color: T.Color): void {
  nativeDrawPixelV(position.x, position.y, color.r, color.g, color.b, color.a);
}
export function drawLine(startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: T.Color): void {
  nativeDrawLine(startPosX, startPosY, endPosX, endPosY, color.r, color.g, color.b, color.a);
}
export function drawLineV(startPos: T.Vector2, endPos: T.Vector2, color: T.Color): void {
  nativeDrawLineV(startPos.x, startPos.y, endPos.x, endPos.y, color.r, color.g, color.b, color.a);
}
export function drawLineEx(startPos: T.Vector2, endPos: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawLineEx(startPos.x, startPos.y, endPos.x, endPos.y, thick, color.r, color.g, color.b, color.a);
}
export function drawLineStrip(points: ReadonlyArray<T.Vector2>, pointCount: number, color: T.Color): void {
  nativeDrawLineStrip((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawLineBezier(startPos: T.Vector2, endPos: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawLineBezier(startPos.x, startPos.y, endPos.x, endPos.y, thick, color.r, color.g, color.b, color.a);
}
export function drawLineDashed(startPos: T.Vector2, endPos: T.Vector2, dashSize: number, spaceSize: number, color: T.Color): void {
  nativeDrawLineDashed(startPos.x, startPos.y, endPos.x, endPos.y, dashSize, spaceSize, color.r, color.g, color.b, color.a);
}
export function drawCircle(centerX: number, centerY: number, radius: number, color: T.Color): void {
  nativeDrawCircle(centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function drawCircleV(center: T.Vector2, radius: number, color: T.Color): void {
  nativeDrawCircleV(center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function drawCircleGradient(center: T.Vector2, radius: number, inner: T.Color, outer: T.Color): void {
  nativeDrawCircleGradient(center.x, center.y, radius, inner.r, inner.g, inner.b, inner.a, outer.r, outer.g, outer.b, outer.a);
}
export function drawCircleSector(center: T.Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: T.Color): void {
  nativeDrawCircleSector(center.x, center.y, radius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawCircleSectorLines(center: T.Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: T.Color): void {
  nativeDrawCircleSectorLines(center.x, center.y, radius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawCircleLines(centerX: number, centerY: number, radius: number, color: T.Color): void {
  nativeDrawCircleLines(centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function drawCircleLinesV(center: T.Vector2, radius: number, color: T.Color): void {
  nativeDrawCircleLinesV(center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function drawEllipse(centerX: number, centerY: number, radiusH: number, radiusV: number, color: T.Color): void {
  nativeDrawEllipse(centerX, centerY, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawEllipseV(center: T.Vector2, radiusH: number, radiusV: number, color: T.Color): void {
  nativeDrawEllipseV(center.x, center.y, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawEllipseLines(centerX: number, centerY: number, radiusH: number, radiusV: number, color: T.Color): void {
  nativeDrawEllipseLines(centerX, centerY, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawEllipseLinesV(center: T.Vector2, radiusH: number, radiusV: number, color: T.Color): void {
  nativeDrawEllipseLinesV(center.x, center.y, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawRing(center: T.Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: T.Color): void {
  nativeDrawRing(center.x, center.y, innerRadius, outerRadius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawRingLines(center: T.Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: T.Color): void {
  nativeDrawRingLines(center.x, center.y, innerRadius, outerRadius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawRectangle(posX: number, posY: number, width: number, height: number, color: T.Color): void {
  nativeDrawRectangle(posX, posY, width, height, color.r, color.g, color.b, color.a);
}
export function drawRectangleV(position: T.Vector2, size: T.Vector2, color: T.Color): void {
  nativeDrawRectangleV(position.x, position.y, size.x, size.y, color.r, color.g, color.b, color.a);
}
export function drawRectangleRec(rec: T.Rectangle, color: T.Color): void {
  nativeDrawRectangleRec(rec.x, rec.y, rec.width, rec.height, color.r, color.g, color.b, color.a);
}
export function drawRectanglePro(rec: T.Rectangle, origin: T.Vector2, rotation: number, color: T.Color): void {
  nativeDrawRectanglePro(rec.x, rec.y, rec.width, rec.height, origin.x, origin.y, rotation, color.r, color.g, color.b, color.a);
}
export function drawRectangleGradientV(posX: number, posY: number, width: number, height: number, top: T.Color, bottom: T.Color): void {
  nativeDrawRectangleGradientV(posX, posY, width, height, top.r, top.g, top.b, top.a, bottom.r, bottom.g, bottom.b, bottom.a);
}
export function drawRectangleGradientH(posX: number, posY: number, width: number, height: number, left: T.Color, right: T.Color): void {
  nativeDrawRectangleGradientH(posX, posY, width, height, left.r, left.g, left.b, left.a, right.r, right.g, right.b, right.a);
}
export function drawRectangleGradientEx(rec: T.Rectangle, topLeft: T.Color, bottomLeft: T.Color, bottomRight: T.Color, topRight: T.Color): void {
  nativeDrawRectangleGradientEx(rec.x, rec.y, rec.width, rec.height, topLeft.r, topLeft.g, topLeft.b, topLeft.a, bottomLeft.r, bottomLeft.g, bottomLeft.b, bottomLeft.a, bottomRight.r, bottomRight.g, bottomRight.b, bottomRight.a, topRight.r, topRight.g, topRight.b, topRight.a);
}
export function drawRectangleLines(posX: number, posY: number, width: number, height: number, color: T.Color): void {
  nativeDrawRectangleLines(posX, posY, width, height, color.r, color.g, color.b, color.a);
}
export function drawRectangleLinesEx(rec: T.Rectangle, lineThick: number, color: T.Color): void {
  nativeDrawRectangleLinesEx(rec.x, rec.y, rec.width, rec.height, lineThick, color.r, color.g, color.b, color.a);
}
export function drawRectangleRounded(rec: T.Rectangle, roundness: number, segments: number, color: T.Color): void {
  nativeDrawRectangleRounded(rec.x, rec.y, rec.width, rec.height, roundness, segments, color.r, color.g, color.b, color.a);
}
export function drawRectangleRoundedLines(rec: T.Rectangle, roundness: number, segments: number, color: T.Color): void {
  nativeDrawRectangleRoundedLines(rec.x, rec.y, rec.width, rec.height, roundness, segments, color.r, color.g, color.b, color.a);
}
export function drawRectangleRoundedLinesEx(rec: T.Rectangle, roundness: number, segments: number, lineThick: number, color: T.Color): void {
  nativeDrawRectangleRoundedLinesEx(rec.x, rec.y, rec.width, rec.height, roundness, segments, lineThick, color.r, color.g, color.b, color.a);
}
export function drawTriangle(v1: T.Vector2, v2: T.Vector2, v3: T.Vector2, color: T.Color): void {
  nativeDrawTriangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function drawTriangleLines(v1: T.Vector2, v2: T.Vector2, v3: T.Vector2, color: T.Color): void {
  nativeDrawTriangleLines(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function drawTriangleFan(points: ReadonlyArray<T.Vector2>, pointCount: number, color: T.Color): void {
  nativeDrawTriangleFan((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawTriangleStrip(points: ReadonlyArray<T.Vector2>, pointCount: number, color: T.Color): void {
  nativeDrawTriangleStrip((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawPoly(center: T.Vector2, sides: number, radius: number, rotation: number, color: T.Color): void {
  nativeDrawPoly(center.x, center.y, sides, radius, rotation, color.r, color.g, color.b, color.a);
}
export function drawPolyLines(center: T.Vector2, sides: number, radius: number, rotation: number, color: T.Color): void {
  nativeDrawPolyLines(center.x, center.y, sides, radius, rotation, color.r, color.g, color.b, color.a);
}
export function drawPolyLinesEx(center: T.Vector2, sides: number, radius: number, rotation: number, lineThick: number, color: T.Color): void {
  nativeDrawPolyLinesEx(center.x, center.y, sides, radius, rotation, lineThick, color.r, color.g, color.b, color.a);
}
export function drawSplineLinear(points: ReadonlyArray<T.Vector2>, pointCount: number, thick: number, color: T.Color): void {
  nativeDrawSplineLinear((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineBasis(points: ReadonlyArray<T.Vector2>, pointCount: number, thick: number, color: T.Color): void {
  nativeDrawSplineBasis((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineCatmullRom(points: ReadonlyArray<T.Vector2>, pointCount: number, thick: number, color: T.Color): void {
  nativeDrawSplineCatmullRom((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineBezierQuadratic(points: ReadonlyArray<T.Vector2>, pointCount: number, thick: number, color: T.Color): void {
  nativeDrawSplineBezierQuadratic((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineBezierCubic(points: ReadonlyArray<T.Vector2>, pointCount: number, thick: number, color: T.Color): void {
  nativeDrawSplineBezierCubic((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentLinear(p1: T.Vector2, p2: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawSplineSegmentLinear(p1.x, p1.y, p2.x, p2.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentBasis(p1: T.Vector2, p2: T.Vector2, p3: T.Vector2, p4: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawSplineSegmentBasis(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentCatmullRom(p1: T.Vector2, p2: T.Vector2, p3: T.Vector2, p4: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawSplineSegmentCatmullRom(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentBezierQuadratic(p1: T.Vector2, c2: T.Vector2, p3: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawSplineSegmentBezierQuadratic(p1.x, p1.y, c2.x, c2.y, p3.x, p3.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentBezierCubic(p1: T.Vector2, c2: T.Vector2, c3: T.Vector2, p4: T.Vector2, thick: number, color: T.Color): void {
  nativeDrawSplineSegmentBezierCubic(p1.x, p1.y, c2.x, c2.y, c3.x, c3.y, p4.x, p4.y, thick, color.r, color.g, color.b, color.a);
}
export function getSplinePointLinear(startPos: T.Vector2, endPos: T.Vector2, t: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetSplinePointLinear(startPos.x, startPos.y, endPos.x, endPos.y, t, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getSplinePointBasis(p1: T.Vector2, p2: T.Vector2, p3: T.Vector2, p4: T.Vector2, t: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetSplinePointBasis(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, t, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getSplinePointCatmullRom(p1: T.Vector2, p2: T.Vector2, p3: T.Vector2, p4: T.Vector2, t: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetSplinePointCatmullRom(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, t, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getSplinePointBezierQuad(p1: T.Vector2, c2: T.Vector2, p3: T.Vector2, t: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetSplinePointBezierQuad(p1.x, p1.y, c2.x, c2.y, p3.x, p3.y, t, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getSplinePointBezierCubic(p1: T.Vector2, c2: T.Vector2, c3: T.Vector2, p4: T.Vector2, t: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeGetSplinePointBezierCubic(p1.x, p1.y, c2.x, c2.y, c3.x, c3.y, p4.x, p4.y, t, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function checkCollisionRecs(rec1: T.Rectangle, rec2: T.Rectangle): boolean {
  return nativeCheckCollisionRecs(rec1.x, rec1.y, rec1.width, rec1.height, rec2.x, rec2.y, rec2.width, rec2.height);
}
export function checkCollisionCircles(center1: T.Vector2, radius1: number, center2: T.Vector2, radius2: number): boolean {
  return nativeCheckCollisionCircles(center1.x, center1.y, radius1, center2.x, center2.y, radius2);
}
export function checkCollisionCircleRec(center: T.Vector2, radius: number, rec: T.Rectangle): boolean {
  return nativeCheckCollisionCircleRec(center.x, center.y, radius, rec.x, rec.y, rec.width, rec.height);
}
export function checkCollisionCircleLine(center: T.Vector2, radius: number, p1: T.Vector2, p2: T.Vector2): boolean {
  return nativeCheckCollisionCircleLine(center.x, center.y, radius, p1.x, p1.y, p2.x, p2.y);
}
export function checkCollisionPointRec(point: T.Vector2, rec: T.Rectangle): boolean {
  return nativeCheckCollisionPointRec(point.x, point.y, rec.x, rec.y, rec.width, rec.height);
}
export function checkCollisionPointCircle(point: T.Vector2, center: T.Vector2, radius: number): boolean {
  return nativeCheckCollisionPointCircle(point.x, point.y, center.x, center.y, radius);
}
export function checkCollisionPointTriangle(point: T.Vector2, p1: T.Vector2, p2: T.Vector2, p3: T.Vector2): boolean {
  return nativeCheckCollisionPointTriangle(point.x, point.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
}
export function checkCollisionPointLine(point: T.Vector2, p1: T.Vector2, p2: T.Vector2, threshold: number): boolean {
  return nativeCheckCollisionPointLine(point.x, point.y, p1.x, p1.y, p2.x, p2.y, threshold);
}
export function checkCollisionPointPoly(point: T.Vector2, points: ReadonlyArray<T.Vector2>, pointCount: number): boolean {
  return nativeCheckCollisionPointPoly(point.x, point.y, (index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount);
}
export function getCollisionRec(rec1: T.Rectangle, rec2: T.Rectangle): T.Rectangle {
  let result = { x: 0, y: 0, width: 0, height: 0 } as T.Rectangle;
  nativeGetCollisionRec(rec1.x, rec1.y, rec1.width, rec1.height, rec2.x, rec2.y, rec2.width, rec2.height, (value0: number, value1: number, value2: number, value3: number) => {
    result.x = value0;
    result.y = value1;
    result.width = value2;
    result.height = value3;
  });
  return result;
}
export function loadImage(fileName: string): T.Image {
  return { handle: nativeLoadImage(fileName, true), kind: "Image" };
}
export function loadImageRaw(fileName: string, width: number, height: number, format: number, headerSize: number): T.Image {
  return { handle: nativeLoadImageRaw(fileName, true, width, height, format, headerSize), kind: "Image" };
}
export function loadImageFromMemory(fileType: string, fileData: Uint8Array, dataSize: number): T.Image {
  return { handle: nativeLoadImageFromMemory(fileType, true, fileData, dataSize), kind: "Image" };
}
export function loadImageFromTexture(texture: T.Texture): T.Image {
  return { handle: nativeLoadImageFromTexture(texture.handle), kind: "Image" };
}
export function loadImageFromScreen(): T.Image {
  return { handle: nativeLoadImageFromScreen(), kind: "Image" };
}
export function isImageValid(image: T.Image): boolean {
  return nativeIsImageValid(image.handle);
}
export function unloadImage(image: T.Image): void {
  nativeUnloadImage(image.handle);
}
export function exportImage(image: T.Image, fileName: string): boolean {
  return nativeExportImage(image.handle, fileName, true);
}
export function exportImageAsCode(image: T.Image, fileName: string): boolean {
  return nativeExportImageAsCode(image.handle, fileName, true);
}
export function genImageColor(width: number, height: number, color: T.Color): T.Image {
  return { handle: nativeGenImageColor(width, height, color.r, color.g, color.b, color.a), kind: "Image" };
}
export function genImageGradientLinear(width: number, height: number, direction: number, start: T.Color, end: T.Color): T.Image {
  return { handle: nativeGenImageGradientLinear(width, height, direction, start.r, start.g, start.b, start.a, end.r, end.g, end.b, end.a), kind: "Image" };
}
export function genImageGradientRadial(width: number, height: number, density: number, inner: T.Color, outer: T.Color): T.Image {
  return { handle: nativeGenImageGradientRadial(width, height, density, inner.r, inner.g, inner.b, inner.a, outer.r, outer.g, outer.b, outer.a), kind: "Image" };
}
export function genImageGradientSquare(width: number, height: number, density: number, inner: T.Color, outer: T.Color): T.Image {
  return { handle: nativeGenImageGradientSquare(width, height, density, inner.r, inner.g, inner.b, inner.a, outer.r, outer.g, outer.b, outer.a), kind: "Image" };
}
export function genImageChecked(width: number, height: number, checksX: number, checksY: number, col1: T.Color, col2: T.Color): T.Image {
  return { handle: nativeGenImageChecked(width, height, checksX, checksY, col1.r, col1.g, col1.b, col1.a, col2.r, col2.g, col2.b, col2.a), kind: "Image" };
}
export function genImageWhiteNoise(width: number, height: number, factor: number): T.Image {
  return { handle: nativeGenImageWhiteNoise(width, height, factor), kind: "Image" };
}
export function genImagePerlinNoise(width: number, height: number, offsetX: number, offsetY: number, scale: number): T.Image {
  return { handle: nativeGenImagePerlinNoise(width, height, offsetX, offsetY, scale), kind: "Image" };
}
export function genImageCellular(width: number, height: number, tileSize: number): T.Image {
  return { handle: nativeGenImageCellular(width, height, tileSize), kind: "Image" };
}
export function genImageText(width: number, height: number, text: string): T.Image {
  return { handle: nativeGenImageText(width, height, text, true), kind: "Image" };
}
export function imageCopy(image: T.Image): T.Image {
  return { handle: nativeImageCopy(image.handle), kind: "Image" };
}
export function imageFromImage(image: T.Image, rec: T.Rectangle): T.Image {
  return { handle: nativeImageFromImage(image.handle, rec.x, rec.y, rec.width, rec.height), kind: "Image" };
}
export function imageFromChannel(image: T.Image, selectedChannel: number): T.Image {
  return { handle: nativeImageFromChannel(image.handle, selectedChannel), kind: "Image" };
}
export function imageText(text: string, fontSize: number, color: T.Color): T.Image {
  return { handle: nativeImageText(text, true, fontSize, color.r, color.g, color.b, color.a), kind: "Image" };
}
export function imageTextEx(font: T.Font, text: string, fontSize: number, spacing: number, tint: T.Color): T.Image {
  return { handle: nativeImageTextEx(font.handle, text, true, fontSize, spacing, tint.r, tint.g, tint.b, tint.a), kind: "Image" };
}
export function imageFormat(image: T.Image, newFormat: number): void {
  nativeImageFormat(image.handle, newFormat);
}
export function imageToPOT(image: T.Image, fill: T.Color): void {
  nativeImageToPOT(image.handle, fill.r, fill.g, fill.b, fill.a);
}
export function imageCrop(image: T.Image, crop: T.Rectangle): void {
  nativeImageCrop(image.handle, crop.x, crop.y, crop.width, crop.height);
}
export function imageAlphaCrop(image: T.Image, threshold: number): void {
  nativeImageAlphaCrop(image.handle, threshold);
}
export function imageAlphaClear(image: T.Image, color: T.Color, threshold: number): void {
  nativeImageAlphaClear(image.handle, color.r, color.g, color.b, color.a, threshold);
}
export function imageAlphaMask(image: T.Image, alphaMask: T.Image): void {
  nativeImageAlphaMask(image.handle, alphaMask.handle);
}
export function imageAlphaPremultiply(image: T.Image): void {
  nativeImageAlphaPremultiply(image.handle);
}
export function imageBlurGaussian(image: T.Image, blurSize: number): void {
  nativeImageBlurGaussian(image.handle, blurSize);
}
export function imageKernelConvolution(image: T.Image, kernel: ReadonlyArray<number>, kernelSize: number): void {
  nativeImageKernelConvolution(image.handle, (index: number, component: number): number => { const item = kernel[index]; if (item === undefined) return 0; return item; }, kernelSize);
}
export function imageResize(image: T.Image, newWidth: number, newHeight: number): void {
  nativeImageResize(image.handle, newWidth, newHeight);
}
export function imageResizeNN(image: T.Image, newWidth: number, newHeight: number): void {
  nativeImageResizeNN(image.handle, newWidth, newHeight);
}
export function imageResizeCanvas(image: T.Image, newWidth: number, newHeight: number, offsetX: number, offsetY: number, fill: T.Color): void {
  nativeImageResizeCanvas(image.handle, newWidth, newHeight, offsetX, offsetY, fill.r, fill.g, fill.b, fill.a);
}
export function imageMipmaps(image: T.Image): void {
  nativeImageMipmaps(image.handle);
}
export function imageDither(image: T.Image, rBpp: number, gBpp: number, bBpp: number, aBpp: number): void {
  nativeImageDither(image.handle, rBpp, gBpp, bBpp, aBpp);
}
export function imageFlipVertical(image: T.Image): void {
  nativeImageFlipVertical(image.handle);
}
export function imageFlipHorizontal(image: T.Image): void {
  nativeImageFlipHorizontal(image.handle);
}
export function imageRotate(image: T.Image, degrees: number): void {
  nativeImageRotate(image.handle, degrees);
}
export function imageRotateCW(image: T.Image): void {
  nativeImageRotateCW(image.handle);
}
export function imageRotateCCW(image: T.Image): void {
  nativeImageRotateCCW(image.handle);
}
export function imageColorTint(image: T.Image, color: T.Color): void {
  nativeImageColorTint(image.handle, color.r, color.g, color.b, color.a);
}
export function imageColorInvert(image: T.Image): void {
  nativeImageColorInvert(image.handle);
}
export function imageColorGrayscale(image: T.Image): void {
  nativeImageColorGrayscale(image.handle);
}
export function imageColorContrast(image: T.Image, contrast: number): void {
  nativeImageColorContrast(image.handle, contrast);
}
export function imageColorBrightness(image: T.Image, brightness: number): void {
  nativeImageColorBrightness(image.handle, brightness);
}
export function imageColorReplace(image: T.Image, color: T.Color, replace: T.Color): void {
  nativeImageColorReplace(image.handle, color.r, color.g, color.b, color.a, replace.r, replace.g, replace.b, replace.a);
}
export function getImageAlphaBorder(image: T.Image, threshold: number): T.Rectangle {
  let result = { x: 0, y: 0, width: 0, height: 0 } as T.Rectangle;
  nativeGetImageAlphaBorder(image.handle, threshold, (value0: number, value1: number, value2: number, value3: number) => {
    result.x = value0;
    result.y = value1;
    result.width = value2;
    result.height = value3;
  });
  return result;
}
export function getImageColor(image: T.Image, x: number, y: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeGetImageColor(image.handle, x, y, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function imageClearBackground(dst: T.Image, color: T.Color): void {
  nativeImageClearBackground(dst.handle, color.r, color.g, color.b, color.a);
}
export function imageDrawPixel(dst: T.Image, posX: number, posY: number, color: T.Color): void {
  nativeImageDrawPixel(dst.handle, posX, posY, color.r, color.g, color.b, color.a);
}
export function imageDrawPixelV(dst: T.Image, position: T.Vector2, color: T.Color): void {
  nativeImageDrawPixelV(dst.handle, position.x, position.y, color.r, color.g, color.b, color.a);
}
export function imageDrawLine(dst: T.Image, startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: T.Color): void {
  nativeImageDrawLine(dst.handle, startPosX, startPosY, endPosX, endPosY, color.r, color.g, color.b, color.a);
}
export function imageDrawLineV(dst: T.Image, start: T.Vector2, end: T.Vector2, color: T.Color): void {
  nativeImageDrawLineV(dst.handle, start.x, start.y, end.x, end.y, color.r, color.g, color.b, color.a);
}
export function imageDrawLineEx(dst: T.Image, start: T.Vector2, end: T.Vector2, thick: number, color: T.Color): void {
  nativeImageDrawLineEx(dst.handle, start.x, start.y, end.x, end.y, thick, color.r, color.g, color.b, color.a);
}
export function imageDrawCircle(dst: T.Image, centerX: number, centerY: number, radius: number, color: T.Color): void {
  nativeImageDrawCircle(dst.handle, centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawCircleV(dst: T.Image, center: T.Vector2, radius: number, color: T.Color): void {
  nativeImageDrawCircleV(dst.handle, center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawCircleLines(dst: T.Image, centerX: number, centerY: number, radius: number, color: T.Color): void {
  nativeImageDrawCircleLines(dst.handle, centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawCircleLinesV(dst: T.Image, center: T.Vector2, radius: number, color: T.Color): void {
  nativeImageDrawCircleLinesV(dst.handle, center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangle(dst: T.Image, posX: number, posY: number, width: number, height: number, color: T.Color): void {
  nativeImageDrawRectangle(dst.handle, posX, posY, width, height, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangleV(dst: T.Image, position: T.Vector2, size: T.Vector2, color: T.Color): void {
  nativeImageDrawRectangleV(dst.handle, position.x, position.y, size.x, size.y, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangleRec(dst: T.Image, rec: T.Rectangle, color: T.Color): void {
  nativeImageDrawRectangleRec(dst.handle, rec.x, rec.y, rec.width, rec.height, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangleLines(dst: T.Image, rec: T.Rectangle, thick: number, color: T.Color): void {
  nativeImageDrawRectangleLines(dst.handle, rec.x, rec.y, rec.width, rec.height, thick, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangle(dst: T.Image, v1: T.Vector2, v2: T.Vector2, v3: T.Vector2, color: T.Color): void {
  nativeImageDrawTriangle(dst.handle, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangleEx(dst: T.Image, v1: T.Vector2, v2: T.Vector2, v3: T.Vector2, c1: T.Color, c2: T.Color, c3: T.Color): void {
  nativeImageDrawTriangleEx(dst.handle, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, c1.r, c1.g, c1.b, c1.a, c2.r, c2.g, c2.b, c2.a, c3.r, c3.g, c3.b, c3.a);
}
export function imageDrawTriangleLines(dst: T.Image, v1: T.Vector2, v2: T.Vector2, v3: T.Vector2, color: T.Color): void {
  nativeImageDrawTriangleLines(dst.handle, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangleFan(dst: T.Image, points: ReadonlyArray<T.Vector2>, pointCount: number, color: T.Color): void {
  nativeImageDrawTriangleFan(dst.handle, (index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangleStrip(dst: T.Image, points: ReadonlyArray<T.Vector2>, pointCount: number, color: T.Color): void {
  nativeImageDrawTriangleStrip(dst.handle, (index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; default: return 0; } }, pointCount, color.r, color.g, color.b, color.a);
}
export function imageDraw(dst: T.Image, src: T.Image, srcRec: T.Rectangle, dstRec: T.Rectangle, tint: T.Color): void {
  nativeImageDraw(dst.handle, src.handle, srcRec.x, srcRec.y, srcRec.width, srcRec.height, dstRec.x, dstRec.y, dstRec.width, dstRec.height, tint.r, tint.g, tint.b, tint.a);
}
export function imageDrawText(dst: T.Image, text: string, posX: number, posY: number, fontSize: number, color: T.Color): void {
  nativeImageDrawText(dst.handle, text, true, posX, posY, fontSize, color.r, color.g, color.b, color.a);
}
export function imageDrawTextEx(dst: T.Image, font: T.Font, text: string, position: T.Vector2, fontSize: number, spacing: number, tint: T.Color): void {
  nativeImageDrawTextEx(dst.handle, font.handle, text, true, position.x, position.y, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function loadTexture(fileName: string): T.Texture {
  return { handle: nativeLoadTexture(fileName, true), kind: "Texture" };
}
export function loadTextureFromImage(image: T.Image): T.Texture {
  return { handle: nativeLoadTextureFromImage(image.handle), kind: "Texture" };
}
export function loadTextureCubemap(image: T.Image, layout: number): T.Texture {
  return { handle: nativeLoadTextureCubemap(image.handle, layout), kind: "Texture" };
}
export function loadRenderTexture(width: number, height: number): T.RenderTexture {
  return { handle: nativeLoadRenderTexture(width, height), kind: "RenderTexture" };
}
export function isTextureValid(texture: T.Texture): boolean {
  return nativeIsTextureValid(texture.handle);
}
export function unloadTexture(texture: T.Texture): void {
  nativeUnloadTexture(texture.handle);
}
export function isRenderTextureValid(target: T.RenderTexture): boolean {
  return nativeIsRenderTextureValid(target.handle);
}
export function unloadRenderTexture(target: T.RenderTexture): void {
  nativeUnloadRenderTexture(target.handle);
}
export function updateTexture(texture: T.Texture, pixels: Uint8Array): void {
  nativeUpdateTexture(texture.handle, pixels);
}
export function updateTextureRec(texture: T.Texture, rec: T.Rectangle, pixels: Uint8Array): void {
  nativeUpdateTextureRec(texture.handle, rec.x, rec.y, rec.width, rec.height, pixels);
}
export function genTextureMipmaps(texture: T.Texture): void {
  nativeGenTextureMipmaps(texture.handle);
}
export function setTextureFilter(texture: T.Texture, filter: number): void {
  nativeSetTextureFilter(texture.handle, filter);
}
export function setTextureWrap(texture: T.Texture, wrap: number): void {
  nativeSetTextureWrap(texture.handle, wrap);
}
export function drawTexture(texture: T.Texture, posX: number, posY: number, tint: T.Color): void {
  nativeDrawTexture(texture.handle, posX, posY, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureV(texture: T.Texture, position: T.Vector2, tint: T.Color): void {
  nativeDrawTextureV(texture.handle, position.x, position.y, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureEx(texture: T.Texture, position: T.Vector2, rotation: number, scale: number, tint: T.Color): void {
  nativeDrawTextureEx(texture.handle, position.x, position.y, rotation, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureRec(texture: T.Texture, source: T.Rectangle, position: T.Vector2, tint: T.Color): void {
  nativeDrawTextureRec(texture.handle, source.x, source.y, source.width, source.height, position.x, position.y, tint.r, tint.g, tint.b, tint.a);
}
export function drawTexturePro(texture: T.Texture, source: T.Rectangle, dest: T.Rectangle, origin: T.Vector2, rotation: number, tint: T.Color): void {
  nativeDrawTexturePro(texture.handle, source.x, source.y, source.width, source.height, dest.x, dest.y, dest.width, dest.height, origin.x, origin.y, rotation, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureNPatch(texture: T.Texture, nPatchInfo: T.NPatchInfo, dest: T.Rectangle, origin: T.Vector2, rotation: number, tint: T.Color): void {
  nativeDrawTextureNPatch(texture.handle, nPatchInfo.source.x, nPatchInfo.source.y, nPatchInfo.source.width, nPatchInfo.source.height, nPatchInfo.left, nPatchInfo.top, nPatchInfo.right, nPatchInfo.bottom, nPatchInfo.layout, dest.x, dest.y, dest.width, dest.height, origin.x, origin.y, rotation, tint.r, tint.g, tint.b, tint.a);
}
export function colorIsEqual(col1: T.Color, col2: T.Color): boolean {
  return nativeColorIsEqual(col1.r, col1.g, col1.b, col1.a, col2.r, col2.g, col2.b, col2.a);
}
export function fade(color: T.Color, alpha: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeFade(color.r, color.g, color.b, color.a, alpha, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorToInt(color: T.Color): number {
  return nativeColorToInt(color.r, color.g, color.b, color.a);
}
export function colorNormalize(color: T.Color): T.Vector4 {
  let result = { x: 0, y: 0, z: 0, w: 0 } as T.Vector4;
  nativeColorNormalize(color.r, color.g, color.b, color.a, (value0: number, value1: number, value2: number, value3: number) => {
    result.x = value0;
    result.y = value1;
    result.z = value2;
    result.w = value3;
  });
  return result;
}
export function colorFromNormalized(normalized: T.Vector4): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorFromNormalized(normalized.x, normalized.y, normalized.z, normalized.w, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorToHSV(color: T.Color): T.Vector3 {
  let result = { x: 0, y: 0, z: 0 } as T.Vector3;
  nativeColorToHSV(color.r, color.g, color.b, color.a, (value0: number, value1: number, value2: number) => {
    result.x = value0;
    result.y = value1;
    result.z = value2;
  });
  return result;
}
export function colorFromHSV(hue: number, saturation: number, value: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorFromHSV(hue, saturation, value, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorTint(color: T.Color, tint: T.Color): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorTint(color.r, color.g, color.b, color.a, tint.r, tint.g, tint.b, tint.a, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorBrightness(color: T.Color, factor: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorBrightness(color.r, color.g, color.b, color.a, factor, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorContrast(color: T.Color, contrast: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorContrast(color.r, color.g, color.b, color.a, contrast, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorAlpha(color: T.Color, alpha: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorAlpha(color.r, color.g, color.b, color.a, alpha, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorAlphaBlend(dst: T.Color, src: T.Color, tint: T.Color): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorAlphaBlend(dst.r, dst.g, dst.b, dst.a, src.r, src.g, src.b, src.a, tint.r, tint.g, tint.b, tint.a, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function colorLerp(color1: T.Color, color2: T.Color, factor: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeColorLerp(color1.r, color1.g, color1.b, color1.a, color2.r, color2.g, color2.b, color2.a, factor, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function getColor(hexValue: number): T.Color {
  let result = { r: 0, g: 0, b: 0, a: 0 } as T.Color;
  nativeGetColor(hexValue, (value0: number, value1: number, value2: number, value3: number) => {
    result.r = value0;
    result.g = value1;
    result.b = value2;
    result.a = value3;
  });
  return result;
}
export function getPixelDataSize(width: number, height: number, format: number): number {
  return nativeGetPixelDataSize(width, height, format);
}
export function getFontDefault(): T.Font {
  return { handle: nativeGetFontDefault(), kind: "Font" };
}
export function loadFont(fileName: string): T.Font {
  return { handle: nativeLoadFont(fileName, true), kind: "Font" };
}
export function loadFontEx(fileName: string, fontSize: number, codepoints: ReadonlyArray<number>, codepointCount: number): T.Font {
  return { handle: nativeLoadFontEx(fileName, true, fontSize, (index: number, component: number): number => { const item = codepoints[index]; if (item === undefined) return 0; return item; }, codepointCount), kind: "Font" };
}
export function loadFontFromImage(image: T.Image, key: T.Color, firstChar: number): T.Font {
  return { handle: nativeLoadFontFromImage(image.handle, key.r, key.g, key.b, key.a, firstChar), kind: "Font" };
}
export function loadFontFromMemory(fileType: string, fileData: Uint8Array, dataSize: number, fontSize: number, codepoints: ReadonlyArray<number>, codepointCount: number): T.Font {
  return { handle: nativeLoadFontFromMemory(fileType, true, fileData, dataSize, fontSize, (index: number, component: number): number => { const item = codepoints[index]; if (item === undefined) return 0; return item; }, codepointCount), kind: "Font" };
}
export function isFontValid(font: T.Font): boolean {
  return nativeIsFontValid(font.handle);
}
export function unloadFontData(glyphs: T.GlyphInfo, glyphCount: number): void {
  nativeUnloadFontData(glyphs.handle, glyphCount);
}
export function unloadFont(font: T.Font): void {
  nativeUnloadFont(font.handle);
}
export function exportFontAsCode(font: T.Font, fileName: string): boolean {
  return nativeExportFontAsCode(font.handle, fileName, true);
}
export function drawFPS(posX: number, posY: number): void {
  nativeDrawFPS(posX, posY);
}
export function drawText(text: string, posX: number, posY: number, fontSize: number, color: T.Color): void {
  nativeDrawText(text, true, posX, posY, fontSize, color.r, color.g, color.b, color.a);
}
export function drawTextEx(font: T.Font, text: string, position: T.Vector2, fontSize: number, spacing: number, tint: T.Color): void {
  nativeDrawTextEx(font.handle, text, true, position.x, position.y, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextPro(font: T.Font, text: string, position: T.Vector2, origin: T.Vector2, rotation: number, fontSize: number, spacing: number, tint: T.Color): void {
  nativeDrawTextPro(font.handle, text, true, position.x, position.y, origin.x, origin.y, rotation, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextCodepoint(font: T.Font, codepoint: number, position: T.Vector2, fontSize: number, tint: T.Color): void {
  nativeDrawTextCodepoint(font.handle, codepoint, position.x, position.y, fontSize, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextCodepoints(font: T.Font, codepoints: ReadonlyArray<number>, codepointCount: number, position: T.Vector2, fontSize: number, spacing: number, tint: T.Color): void {
  nativeDrawTextCodepoints(font.handle, (index: number, component: number): number => { const item = codepoints[index]; if (item === undefined) return 0; return item; }, codepointCount, position.x, position.y, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function setTextLineSpacing(spacing: number): void {
  nativeSetTextLineSpacing(spacing);
}
export function measureText(text: string, fontSize: number): number {
  return nativeMeasureText(text, true, fontSize);
}
export function measureTextEx(font: T.Font, text: string, fontSize: number, spacing: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeMeasureTextEx(font.handle, text, true, fontSize, spacing, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function measureTextCodepoints(font: T.Font, codepoints: ReadonlyArray<number>, length: number, fontSize: number, spacing: number): T.Vector2 {
  let result = { x: 0, y: 0 } as T.Vector2;
  nativeMeasureTextCodepoints(font.handle, (index: number, component: number): number => { const item = codepoints[index]; if (item === undefined) return 0; return item; }, length, fontSize, spacing, (value0: number, value1: number) => {
    result.x = value0;
    result.y = value1;
  });
  return result;
}
export function getGlyphIndex(font: T.Font, codepoint: number): number {
  return nativeGetGlyphIndex(font.handle, codepoint);
}
export function getGlyphInfo(font: T.Font, codepoint: number): T.GlyphInfo {
  return { handle: nativeGetGlyphInfo(font.handle, codepoint), kind: "GlyphInfo" };
}
export function getGlyphAtlasRec(font: T.Font, codepoint: number): T.Rectangle {
  let result = { x: 0, y: 0, width: 0, height: 0 } as T.Rectangle;
  nativeGetGlyphAtlasRec(font.handle, codepoint, (value0: number, value1: number, value2: number, value3: number) => {
    result.x = value0;
    result.y = value1;
    result.width = value2;
    result.height = value3;
  });
  return result;
}
export function loadUTF8(codepoints: ReadonlyArray<number>, length: number): string | null {
  let result: string | null = null;
  nativeLoadUTF8((index: number, component: number): number => { const item = codepoints[index]; if (item === undefined) return 0; return item; }, length, (value: string) => { result = value; });
  return result;
}
export function getCodepointCount(text: string): number {
  return nativeGetCodepointCount(text, true);
}
export function textCopy(dst: string, src: string): number {
  return nativeTextCopy(dst, true, src, true);
}
export function textIsEqual(text1: string, text2: string): boolean {
  return nativeTextIsEqual(text1, true, text2, true);
}
export function textLength(text: string): number {
  return nativeTextLength(text, true);
}
export function textSubtext(text: string, position: number, length: number): string | null {
  let result: string | null = null;
  nativeTextSubtext(text, true, position, length, (value: string) => { result = value; });
  return result;
}
export function textRemoveSpaces(text: string): string | null {
  let result: string | null = null;
  nativeTextRemoveSpaces(text, true, (value: string) => { result = value; });
  return result;
}
export function getTextBetween(text: string, begin: string, end: string): string | null {
  let result: string | null = null;
  nativeGetTextBetween(text, true, begin, true, end, true, (value: string) => { result = value; });
  return result;
}
export function textReplace(text: string, search: string, replacement: string): string | null {
  let result: string | null = null;
  nativeTextReplace(text, true, search, true, replacement, true, (value: string) => { result = value; });
  return result;
}
export function textReplaceAlloc(text: string, search: string, replacement: string): string | null {
  let result: string | null = null;
  nativeTextReplaceAlloc(text, true, search, true, replacement, true, (value: string) => { result = value; });
  return result;
}
export function textReplaceBetween(text: string, begin: string, end: string, replacement: string): string | null {
  let result: string | null = null;
  nativeTextReplaceBetween(text, true, begin, true, end, true, replacement, true, (value: string) => { result = value; });
  return result;
}
export function textReplaceBetweenAlloc(text: string, begin: string, end: string, replacement: string): string | null {
  let result: string | null = null;
  nativeTextReplaceBetweenAlloc(text, true, begin, true, end, true, replacement, true, (value: string) => { result = value; });
  return result;
}
export function textInsert(text: string, insert: string, position: number): string | null {
  let result: string | null = null;
  nativeTextInsert(text, true, insert, true, position, (value: string) => { result = value; });
  return result;
}
export function textInsertAlloc(text: string, insert: string, position: number): string | null {
  let result: string | null = null;
  nativeTextInsertAlloc(text, true, insert, true, position, (value: string) => { result = value; });
  return result;
}
export function textFindIndex(text: string, search: string): number {
  return nativeTextFindIndex(text, true, search, true);
}
export function textToUpper(text: string): string | null {
  let result: string | null = null;
  nativeTextToUpper(text, true, (value: string) => { result = value; });
  return result;
}
export function textToLower(text: string): string | null {
  let result: string | null = null;
  nativeTextToLower(text, true, (value: string) => { result = value; });
  return result;
}
export function textToPascal(text: string): string | null {
  let result: string | null = null;
  nativeTextToPascal(text, true, (value: string) => { result = value; });
  return result;
}
export function textToSnake(text: string): string | null {
  let result: string | null = null;
  nativeTextToSnake(text, true, (value: string) => { result = value; });
  return result;
}
export function textToCamel(text: string): string | null {
  let result: string | null = null;
  nativeTextToCamel(text, true, (value: string) => { result = value; });
  return result;
}
export function textToInteger(text: string): number {
  return nativeTextToInteger(text, true);
}
export function textToFloat(text: string): number {
  return nativeTextToFloat(text, true);
}
export function drawLine3D(startPos: T.Vector3, endPos: T.Vector3, color: T.Color): void {
  nativeDrawLine3D(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, color.r, color.g, color.b, color.a);
}
export function drawPoint3D(position: T.Vector3, color: T.Color): void {
  nativeDrawPoint3D(position.x, position.y, position.z, color.r, color.g, color.b, color.a);
}
export function drawCircle3D(center: T.Vector3, radius: number, rotationAxis: T.Vector3, rotationAngle: number, color: T.Color): void {
  nativeDrawCircle3D(center.x, center.y, center.z, radius, rotationAxis.x, rotationAxis.y, rotationAxis.z, rotationAngle, color.r, color.g, color.b, color.a);
}
export function drawTriangle3D(v1: T.Vector3, v2: T.Vector3, v3: T.Vector3, color: T.Color): void {
  nativeDrawTriangle3D(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z, color.r, color.g, color.b, color.a);
}
export function drawTriangleStrip3D(points: ReadonlyArray<T.Vector3>, pointCount: number, color: T.Color): void {
  nativeDrawTriangleStrip3D((index: number, component: number): number => { const item = points[index]; if (item === undefined) return 0; switch (component) { case 0: return item.x; case 1: return item.y; case 2: return item.z; default: return 0; } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawCube(position: T.Vector3, width: number, height: number, length: number, color: T.Color): void {
  nativeDrawCube(position.x, position.y, position.z, width, height, length, color.r, color.g, color.b, color.a);
}
export function drawCubeV(position: T.Vector3, size: T.Vector3, color: T.Color): void {
  nativeDrawCubeV(position.x, position.y, position.z, size.x, size.y, size.z, color.r, color.g, color.b, color.a);
}
export function drawCubeWires(position: T.Vector3, width: number, height: number, length: number, color: T.Color): void {
  nativeDrawCubeWires(position.x, position.y, position.z, width, height, length, color.r, color.g, color.b, color.a);
}
export function drawCubeWiresV(position: T.Vector3, size: T.Vector3, color: T.Color): void {
  nativeDrawCubeWiresV(position.x, position.y, position.z, size.x, size.y, size.z, color.r, color.g, color.b, color.a);
}
export function drawSphere(centerPos: T.Vector3, radius: number, color: T.Color): void {
  nativeDrawSphere(centerPos.x, centerPos.y, centerPos.z, radius, color.r, color.g, color.b, color.a);
}
export function drawSphereEx(centerPos: T.Vector3, radius: number, rings: number, slices: number, color: T.Color): void {
  nativeDrawSphereEx(centerPos.x, centerPos.y, centerPos.z, radius, rings, slices, color.r, color.g, color.b, color.a);
}
export function drawSphereWires(centerPos: T.Vector3, radius: number, rings: number, slices: number, color: T.Color): void {
  nativeDrawSphereWires(centerPos.x, centerPos.y, centerPos.z, radius, rings, slices, color.r, color.g, color.b, color.a);
}
export function drawCylinder(position: T.Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: T.Color): void {
  nativeDrawCylinder(position.x, position.y, position.z, radiusTop, radiusBottom, height, slices, color.r, color.g, color.b, color.a);
}
export function drawCylinderEx(startPos: T.Vector3, endPos: T.Vector3, startRadius: number, endRadius: number, sides: number, color: T.Color): void {
  nativeDrawCylinderEx(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, startRadius, endRadius, sides, color.r, color.g, color.b, color.a);
}
export function drawCylinderWires(position: T.Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: T.Color): void {
  nativeDrawCylinderWires(position.x, position.y, position.z, radiusTop, radiusBottom, height, slices, color.r, color.g, color.b, color.a);
}
export function drawCylinderWiresEx(startPos: T.Vector3, endPos: T.Vector3, startRadius: number, endRadius: number, sides: number, color: T.Color): void {
  nativeDrawCylinderWiresEx(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, startRadius, endRadius, sides, color.r, color.g, color.b, color.a);
}
export function drawCapsule(startPos: T.Vector3, endPos: T.Vector3, radius: number, slices: number, rings: number, color: T.Color): void {
  nativeDrawCapsule(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, radius, slices, rings, color.r, color.g, color.b, color.a);
}
export function drawCapsuleWires(startPos: T.Vector3, endPos: T.Vector3, radius: number, slices: number, rings: number, color: T.Color): void {
  nativeDrawCapsuleWires(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, radius, slices, rings, color.r, color.g, color.b, color.a);
}
export function drawPlane(centerPos: T.Vector3, size: T.Vector2, color: T.Color): void {
  nativeDrawPlane(centerPos.x, centerPos.y, centerPos.z, size.x, size.y, color.r, color.g, color.b, color.a);
}
export function drawRay(ray: T.Ray, color: T.Color): void {
  nativeDrawRay(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, color.r, color.g, color.b, color.a);
}
export function drawGrid(slices: number, spacing: number): void {
  nativeDrawGrid(slices, spacing);
}
export function loadModel(fileName: string): T.Model {
  return { handle: nativeLoadModel(fileName, true), kind: "Model" };
}
export function loadModelFromMesh(mesh: T.Mesh): T.Model {
  return { handle: nativeLoadModelFromMesh(mesh.handle), kind: "Model" };
}
export function isModelValid(model: T.Model): boolean {
  return nativeIsModelValid(model.handle);
}
export function unloadModel(model: T.Model): void {
  nativeUnloadModel(model.handle);
}
export function getModelBoundingBox(model: T.Model): T.BoundingBox {
  let result = { min: { x: 0, y: 0, z: 0 } as T.Vector3, max: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.BoundingBox;
  nativeGetModelBoundingBox(model.handle, (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number) => {
    result.min.x = value0;
    result.min.y = value1;
    result.min.z = value2;
    result.max.x = value3;
    result.max.y = value4;
    result.max.z = value5;
  });
  return result;
}
export function drawModel(model: T.Model, position: T.Vector3, scale: number, tint: T.Color): void {
  nativeDrawModel(model.handle, position.x, position.y, position.z, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawModelEx(model: T.Model, position: T.Vector3, rotationAxis: T.Vector3, rotationAngle: number, scale: T.Vector3, tint: T.Color): void {
  nativeDrawModelEx(model.handle, position.x, position.y, position.z, rotationAxis.x, rotationAxis.y, rotationAxis.z, rotationAngle, scale.x, scale.y, scale.z, tint.r, tint.g, tint.b, tint.a);
}
export function drawModelWires(model: T.Model, position: T.Vector3, scale: number, tint: T.Color): void {
  nativeDrawModelWires(model.handle, position.x, position.y, position.z, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawModelWiresEx(model: T.Model, position: T.Vector3, rotationAxis: T.Vector3, rotationAngle: number, scale: T.Vector3, tint: T.Color): void {
  nativeDrawModelWiresEx(model.handle, position.x, position.y, position.z, rotationAxis.x, rotationAxis.y, rotationAxis.z, rotationAngle, scale.x, scale.y, scale.z, tint.r, tint.g, tint.b, tint.a);
}
export function drawBoundingBox(box: T.BoundingBox, color: T.Color): void {
  nativeDrawBoundingBox(box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, color.r, color.g, color.b, color.a);
}
export function drawBillboard(camera: T.Camera3D, texture: T.Texture, position: T.Vector3, scale: number, tint: T.Color): void {
  nativeDrawBillboard(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, texture.handle, position.x, position.y, position.z, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawBillboardRec(camera: T.Camera3D, texture: T.Texture, source: T.Rectangle, position: T.Vector3, size: T.Vector2, tint: T.Color): void {
  nativeDrawBillboardRec(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, texture.handle, source.x, source.y, source.width, source.height, position.x, position.y, position.z, size.x, size.y, tint.r, tint.g, tint.b, tint.a);
}
export function drawBillboardPro(camera: T.Camera3D, texture: T.Texture, source: T.Rectangle, position: T.Vector3, up: T.Vector3, size: T.Vector2, origin: T.Vector2, rotation: number, tint: T.Color): void {
  nativeDrawBillboardPro(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, texture.handle, source.x, source.y, source.width, source.height, position.x, position.y, position.z, up.x, up.y, up.z, size.x, size.y, origin.x, origin.y, rotation, tint.r, tint.g, tint.b, tint.a);
}
export function uploadMesh(mesh: T.Mesh, dynamic: boolean): void {
  nativeUploadMesh(mesh.handle, dynamic);
}
export function updateMeshBuffer(mesh: T.Mesh, index: number, data: Uint8Array, dataSize: number, offset: number): void {
  nativeUpdateMeshBuffer(mesh.handle, index, data, dataSize, offset);
}
export function unloadMesh(mesh: T.Mesh): void {
  nativeUnloadMesh(mesh.handle);
}
export function drawMesh(mesh: T.Mesh, material: T.Material, transform: T.Matrix): void {
  nativeDrawMesh(mesh.handle, material.handle, transform.m0, transform.m4, transform.m8, transform.m12, transform.m1, transform.m5, transform.m9, transform.m13, transform.m2, transform.m6, transform.m10, transform.m14, transform.m3, transform.m7, transform.m11, transform.m15);
}
export function drawMeshInstanced(mesh: T.Mesh, material: T.Material, transforms: ReadonlyArray<T.Matrix>, instances: number): void {
  nativeDrawMeshInstanced(mesh.handle, material.handle, (index: number, component: number): number => { const item = transforms[index]; if (item === undefined) return 0; switch (component) { case 0: return item.m0; case 1: return item.m4; case 2: return item.m8; case 3: return item.m12; case 4: return item.m1; case 5: return item.m5; case 6: return item.m9; case 7: return item.m13; case 8: return item.m2; case 9: return item.m6; case 10: return item.m10; case 11: return item.m14; case 12: return item.m3; case 13: return item.m7; case 14: return item.m11; case 15: return item.m15; default: return 0; } }, instances);
}
export function getMeshBoundingBox(mesh: T.Mesh): T.BoundingBox {
  let result = { min: { x: 0, y: 0, z: 0 } as T.Vector3, max: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.BoundingBox;
  nativeGetMeshBoundingBox(mesh.handle, (value0: number, value1: number, value2: number, value3: number, value4: number, value5: number) => {
    result.min.x = value0;
    result.min.y = value1;
    result.min.z = value2;
    result.max.x = value3;
    result.max.y = value4;
    result.max.z = value5;
  });
  return result;
}
export function genMeshTangents(mesh: T.Mesh): void {
  nativeGenMeshTangents(mesh.handle);
}
export function exportMesh(mesh: T.Mesh, fileName: string): boolean {
  return nativeExportMesh(mesh.handle, fileName, true);
}
export function exportMeshAsCode(mesh: T.Mesh, fileName: string): boolean {
  return nativeExportMeshAsCode(mesh.handle, fileName, true);
}
export function genMeshPoly(sides: number, radius: number): T.Mesh {
  return { handle: nativeGenMeshPoly(sides, radius), kind: "Mesh" };
}
export function genMeshPlane(width: number, length: number, resX: number, resZ: number): T.Mesh {
  return { handle: nativeGenMeshPlane(width, length, resX, resZ), kind: "Mesh" };
}
export function genMeshCube(width: number, height: number, length: number): T.Mesh {
  return { handle: nativeGenMeshCube(width, height, length), kind: "Mesh" };
}
export function genMeshSphere(radius: number, rings: number, slices: number): T.Mesh {
  return { handle: nativeGenMeshSphere(radius, rings, slices), kind: "Mesh" };
}
export function genMeshHemiSphere(radius: number, rings: number, slices: number): T.Mesh {
  return { handle: nativeGenMeshHemiSphere(radius, rings, slices), kind: "Mesh" };
}
export function genMeshCylinder(radius: number, height: number, slices: number): T.Mesh {
  return { handle: nativeGenMeshCylinder(radius, height, slices), kind: "Mesh" };
}
export function genMeshCone(radius: number, height: number, slices: number): T.Mesh {
  return { handle: nativeGenMeshCone(radius, height, slices), kind: "Mesh" };
}
export function genMeshTorus(radius: number, size: number, radSeg: number, sides: number): T.Mesh {
  return { handle: nativeGenMeshTorus(radius, size, radSeg, sides), kind: "Mesh" };
}
export function genMeshKnot(radius: number, size: number, radSeg: number, sides: number): T.Mesh {
  return { handle: nativeGenMeshKnot(radius, size, radSeg, sides), kind: "Mesh" };
}
export function genMeshHeightmap(heightmap: T.Image, size: T.Vector3): T.Mesh {
  return { handle: nativeGenMeshHeightmap(heightmap.handle, size.x, size.y, size.z), kind: "Mesh" };
}
export function genMeshCubicmap(cubicmap: T.Image, cubeSize: T.Vector3): T.Mesh {
  return { handle: nativeGenMeshCubicmap(cubicmap.handle, cubeSize.x, cubeSize.y, cubeSize.z), kind: "Mesh" };
}
export function loadMaterialDefault(): T.Material {
  return { handle: nativeLoadMaterialDefault(), kind: "Material" };
}
export function isMaterialValid(material: T.Material): boolean {
  return nativeIsMaterialValid(material.handle);
}
export function unloadMaterial(material: T.Material): void {
  nativeUnloadMaterial(material.handle);
}
export function setMaterialTexture(material: T.Material, mapType: number, texture: T.Texture): void {
  nativeSetMaterialTexture(material.handle, mapType, texture.handle);
}
export function setModelMeshMaterial(model: T.Model, meshId: number, materialId: number): void {
  nativeSetModelMeshMaterial(model.handle, meshId, materialId);
}
export function updateModelAnimation(model: T.Model, anim: T.ModelAnimation, frame: number): void {
  nativeUpdateModelAnimation(model.handle, anim.handle, frame);
}
export function updateModelAnimationEx(model: T.Model, animA: T.ModelAnimation, frameA: number, animB: T.ModelAnimation, frameB: number, blend: number): void {
  nativeUpdateModelAnimationEx(model.handle, animA.handle, frameA, animB.handle, frameB, blend);
}
export function unloadModelAnimations(animations: T.ModelAnimation, animCount: number): void {
  nativeUnloadModelAnimations(animations.handle, animCount);
}
export function isModelAnimationValid(model: T.Model, anim: T.ModelAnimation): boolean {
  return nativeIsModelAnimationValid(model.handle, anim.handle);
}
export function checkCollisionSpheres(center1: T.Vector3, radius1: number, center2: T.Vector3, radius2: number): boolean {
  return nativeCheckCollisionSpheres(center1.x, center1.y, center1.z, radius1, center2.x, center2.y, center2.z, radius2);
}
export function checkCollisionBoxes(box1: T.BoundingBox, box2: T.BoundingBox): boolean {
  return nativeCheckCollisionBoxes(box1.min.x, box1.min.y, box1.min.z, box1.max.x, box1.max.y, box1.max.z, box2.min.x, box2.min.y, box2.min.z, box2.max.x, box2.max.y, box2.max.z);
}
export function checkCollisionBoxSphere(box: T.BoundingBox, center: T.Vector3, radius: number): boolean {
  return nativeCheckCollisionBoxSphere(box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, center.x, center.y, center.z, radius);
}
export function getRayCollisionSphere(ray: T.Ray, center: T.Vector3, radius: number): T.RayCollision {
  let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 } as T.Vector3, normal: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.RayCollision;
  nativeGetRayCollisionSphere(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, center.x, center.y, center.z, radius, (value0: boolean, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number) => {
    result.hit = value0;
    result.distance = value1;
    result.point.x = value2;
    result.point.y = value3;
    result.point.z = value4;
    result.normal.x = value5;
    result.normal.y = value6;
    result.normal.z = value7;
  });
  return result;
}
export function getRayCollisionBox(ray: T.Ray, box: T.BoundingBox): T.RayCollision {
  let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 } as T.Vector3, normal: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.RayCollision;
  nativeGetRayCollisionBox(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, (value0: boolean, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number) => {
    result.hit = value0;
    result.distance = value1;
    result.point.x = value2;
    result.point.y = value3;
    result.point.z = value4;
    result.normal.x = value5;
    result.normal.y = value6;
    result.normal.z = value7;
  });
  return result;
}
export function getRayCollisionMesh(ray: T.Ray, mesh: T.Mesh, transform: T.Matrix): T.RayCollision {
  let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 } as T.Vector3, normal: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.RayCollision;
  nativeGetRayCollisionMesh(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, mesh.handle, transform.m0, transform.m4, transform.m8, transform.m12, transform.m1, transform.m5, transform.m9, transform.m13, transform.m2, transform.m6, transform.m10, transform.m14, transform.m3, transform.m7, transform.m11, transform.m15, (value0: boolean, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number) => {
    result.hit = value0;
    result.distance = value1;
    result.point.x = value2;
    result.point.y = value3;
    result.point.z = value4;
    result.normal.x = value5;
    result.normal.y = value6;
    result.normal.z = value7;
  });
  return result;
}
export function getRayCollisionTriangle(ray: T.Ray, p1: T.Vector3, p2: T.Vector3, p3: T.Vector3): T.RayCollision {
  let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 } as T.Vector3, normal: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.RayCollision;
  nativeGetRayCollisionTriangle(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z, (value0: boolean, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number) => {
    result.hit = value0;
    result.distance = value1;
    result.point.x = value2;
    result.point.y = value3;
    result.point.z = value4;
    result.normal.x = value5;
    result.normal.y = value6;
    result.normal.z = value7;
  });
  return result;
}
export function getRayCollisionQuad(ray: T.Ray, p1: T.Vector3, p2: T.Vector3, p3: T.Vector3, p4: T.Vector3): T.RayCollision {
  let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 } as T.Vector3, normal: { x: 0, y: 0, z: 0 } as T.Vector3 } as T.RayCollision;
  nativeGetRayCollisionQuad(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z, p4.x, p4.y, p4.z, (value0: boolean, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number) => {
    result.hit = value0;
    result.distance = value1;
    result.point.x = value2;
    result.point.y = value3;
    result.point.z = value4;
    result.normal.x = value5;
    result.normal.y = value6;
    result.normal.z = value7;
  });
  return result;
}
export function initAudioDevice(): void {
  nativeInitAudioDevice();
}
export function closeAudioDevice(): void {
  nativeCloseAudioDevice();
}
export function isAudioDeviceReady(): boolean {
  return nativeIsAudioDeviceReady();
}
export function setMasterVolume(volume: number): void {
  nativeSetMasterVolume(volume);
}
export function getMasterVolume(): number {
  return nativeGetMasterVolume();
}
export function loadWave(fileName: string): T.Wave {
  return { handle: nativeLoadWave(fileName, true), kind: "Wave" };
}
export function loadWaveFromMemory(fileType: string, fileData: Uint8Array, dataSize: number): T.Wave {
  return { handle: nativeLoadWaveFromMemory(fileType, true, fileData, dataSize), kind: "Wave" };
}
export function isWaveValid(wave: T.Wave): boolean {
  return nativeIsWaveValid(wave.handle);
}
export function loadSound(fileName: string): T.Sound {
  return { handle: nativeLoadSound(fileName, true), kind: "Sound" };
}
export function loadSoundFromWave(wave: T.Wave): T.Sound {
  return { handle: nativeLoadSoundFromWave(wave.handle), kind: "Sound" };
}
export function loadSoundAlias(source: T.Sound): T.Sound {
  return { handle: nativeLoadSoundAlias(source.handle), kind: "Sound" };
}
export function isSoundValid(sound: T.Sound): boolean {
  return nativeIsSoundValid(sound.handle);
}
export function updateSound(sound: T.Sound, data: Uint8Array, sampleCount: number): void {
  nativeUpdateSound(sound.handle, data, sampleCount);
}
export function unloadWave(wave: T.Wave): void {
  nativeUnloadWave(wave.handle);
}
export function unloadSound(sound: T.Sound): void {
  nativeUnloadSound(sound.handle);
}
export function unloadSoundAlias(alias: T.Sound): void {
  nativeUnloadSoundAlias(alias.handle);
}
export function exportWave(wave: T.Wave, fileName: string): boolean {
  return nativeExportWave(wave.handle, fileName, true);
}
export function exportWaveAsCode(wave: T.Wave, fileName: string): boolean {
  return nativeExportWaveAsCode(wave.handle, fileName, true);
}
export function playSound(sound: T.Sound): void {
  nativePlaySound(sound.handle);
}
export function stopSound(sound: T.Sound): void {
  nativeStopSound(sound.handle);
}
export function pauseSound(sound: T.Sound): void {
  nativePauseSound(sound.handle);
}
export function resumeSound(sound: T.Sound): void {
  nativeResumeSound(sound.handle);
}
export function isSoundPlaying(sound: T.Sound): boolean {
  return nativeIsSoundPlaying(sound.handle);
}
export function setSoundVolume(sound: T.Sound, volume: number): void {
  nativeSetSoundVolume(sound.handle, volume);
}
export function setSoundPitch(sound: T.Sound, pitch: number): void {
  nativeSetSoundPitch(sound.handle, pitch);
}
export function setSoundPan(sound: T.Sound, pan: number): void {
  nativeSetSoundPan(sound.handle, pan);
}
export function waveCopy(wave: T.Wave): T.Wave {
  return { handle: nativeWaveCopy(wave.handle), kind: "Wave" };
}
export function waveCrop(wave: T.Wave, initFrame: number, finalFrame: number): void {
  nativeWaveCrop(wave.handle, initFrame, finalFrame);
}
export function waveFormat(wave: T.Wave, sampleRate: number, sampleSize: number, channels: number): void {
  nativeWaveFormat(wave.handle, sampleRate, sampleSize, channels);
}
export function loadMusicStream(fileName: string): T.Music {
  return { handle: nativeLoadMusicStream(fileName, true), kind: "Music" };
}
export function loadMusicStreamFromMemory(fileType: string, data: Uint8Array, dataSize: number): T.Music {
  return { handle: nativeLoadMusicStreamFromMemory(fileType, true, data, dataSize), kind: "Music" };
}
export function isMusicValid(music: T.Music): boolean {
  return nativeIsMusicValid(music.handle);
}
export function unloadMusicStream(music: T.Music): void {
  nativeUnloadMusicStream(music.handle);
}
export function playMusicStream(music: T.Music): void {
  nativePlayMusicStream(music.handle);
}
export function isMusicStreamPlaying(music: T.Music): boolean {
  return nativeIsMusicStreamPlaying(music.handle);
}
export function updateMusicStream(music: T.Music): void {
  nativeUpdateMusicStream(music.handle);
}
export function stopMusicStream(music: T.Music): void {
  nativeStopMusicStream(music.handle);
}
export function pauseMusicStream(music: T.Music): void {
  nativePauseMusicStream(music.handle);
}
export function resumeMusicStream(music: T.Music): void {
  nativeResumeMusicStream(music.handle);
}
export function seekMusicStream(music: T.Music, position: number): void {
  nativeSeekMusicStream(music.handle, position);
}
export function setMusicVolume(music: T.Music, volume: number): void {
  nativeSetMusicVolume(music.handle, volume);
}
export function setMusicPitch(music: T.Music, pitch: number): void {
  nativeSetMusicPitch(music.handle, pitch);
}
export function setMusicPan(music: T.Music, pan: number): void {
  nativeSetMusicPan(music.handle, pan);
}
export function getMusicTimeLength(music: T.Music): number {
  return nativeGetMusicTimeLength(music.handle);
}
export function getMusicTimePlayed(music: T.Music): number {
  return nativeGetMusicTimePlayed(music.handle);
}
export function loadAudioStream(sampleRate: number, sampleSize: number, channels: number): T.AudioStream {
  return { handle: nativeLoadAudioStream(sampleRate, sampleSize, channels), kind: "AudioStream" };
}
export function isAudioStreamValid(stream: T.AudioStream): boolean {
  return nativeIsAudioStreamValid(stream.handle);
}
export function unloadAudioStream(stream: T.AudioStream): void {
  nativeUnloadAudioStream(stream.handle);
}
export function updateAudioStream(stream: T.AudioStream, data: Uint8Array, frameCount: number): void {
  nativeUpdateAudioStream(stream.handle, data, frameCount);
}
export function isAudioStreamProcessed(stream: T.AudioStream): boolean {
  return nativeIsAudioStreamProcessed(stream.handle);
}
export function playAudioStream(stream: T.AudioStream): void {
  nativePlayAudioStream(stream.handle);
}
export function pauseAudioStream(stream: T.AudioStream): void {
  nativePauseAudioStream(stream.handle);
}
export function resumeAudioStream(stream: T.AudioStream): void {
  nativeResumeAudioStream(stream.handle);
}
export function isAudioStreamPlaying(stream: T.AudioStream): boolean {
  return nativeIsAudioStreamPlaying(stream.handle);
}
export function stopAudioStream(stream: T.AudioStream): void {
  nativeStopAudioStream(stream.handle);
}
export function setAudioStreamVolume(stream: T.AudioStream, volume: number): void {
  nativeSetAudioStreamVolume(stream.handle, volume);
}
export function setAudioStreamPitch(stream: T.AudioStream, pitch: number): void {
  nativeSetAudioStreamPitch(stream.handle, pitch);
}
export function setAudioStreamPan(stream: T.AudioStream, pan: number): void {
  nativeSetAudioStreamPan(stream.handle, pan);
}
export function setAudioStreamBufferSizeDefault(size: number): void {
  nativeSetAudioStreamBufferSizeDefault(size);
}
export function traceLogText(level: number, text: string): void { nativeTraceLogText(level, text); }
export function loadFileData(fileName: string): Uint8Array | null { let result: Uint8Array | null = null; nativeLoadFileDataCopy(fileName, true, (data: Uint8Array) => { result = data; }); return result; }
export function compressData(data: Uint8Array): Uint8Array | null { let result: Uint8Array | null = null; nativeCompressDataCopy(data, data.length, (value: Uint8Array) => { result = value; }); return result; }
export function decompressData(data: Uint8Array): Uint8Array | null { let result: Uint8Array | null = null; nativeDecompressDataCopy(data, data.length, (value: Uint8Array) => { result = value; }); return result; }
export function encodeDataBase64(data: Uint8Array): string | null { let result: string | null = null; nativeEncodeDataBase64Copy(data, data.length, (value: string) => { result = value; }); return result; }
export function decodeDataBase64(text: string): Uint8Array | null { let result: Uint8Array | null = null; nativeDecodeDataBase64Copy(text, true, (value: Uint8Array) => { result = value; }); return result; }
export function computeMD5(data: Uint8Array): number[] { const result: number[] = []; nativeComputeMD5(data, data.length, (_index: number, word: number) => { result.push(word); }); return result; }
export function computeSHA1(data: Uint8Array): number[] { const result: number[] = []; nativeComputeSHA1(data, data.length, (_index: number, word: number) => { result.push(word); }); return result; }
export function computeSHA256(data: Uint8Array): number[] { const result: number[] = []; nativeComputeSHA256(data, data.length, (_index: number, word: number) => { result.push(word); }); return result; }
export function loadRandomSequence(count: number, min: number, max: number): number[] { const result: number[] = []; nativeLoadRandomSequenceCopy(count, min, max, (_index: number, value: number) => { result.push(value); }); return result; }
export function exportImageToMemory(image: T.Image, fileType: string): Uint8Array | null { let result: Uint8Array | null = null; nativeExportImageToMemoryCopy(image.handle, fileType, true, (data: Uint8Array) => { result = data; }); return result; }
export function loadImageColors(image: T.Image): T.Color[] { const result: T.Color[] = []; nativeLoadImageColorsCopy(image.handle, (r: number, g: number, b: number, a: number) => { result.push({ r: r, g: g, b: b, a: a }); }); return result; }
export function loadImagePalette(image: T.Image, maximum: number): T.Color[] { const result: T.Color[] = []; nativeLoadImagePaletteCopy(image.handle, maximum, (r: number, g: number, b: number, a: number) => { result.push({ r: r, g: g, b: b, a: a }); }); return result; }
export function loadCodepoints(text: string): number[] { const result: number[] = []; nativeLoadCodepointsCopy(text, true, (_index: number, codepoint: number) => { result.push(codepoint); }); return result; }
export function codepointToUTF8(codepoint: number): string { let result = ""; nativeCodepointToUTF8Copy(codepoint, (text: string) => { result = text; }); return result; }
export function loadTextLines(text: string): string[] { const result: string[] = []; nativeLoadTextLinesCopy(text, true, (_index: number, line: string) => { result.push(line); }); return result; }
export function textSplit(text: string, delimiter: string): string[] { const result: string[] = []; nativeTextSplitCopy(text, true, delimiter, (_index: number, part: string) => { result.push(part); }); return result; }
export function loadWaveSamples(wave: T.Wave): number[] { const result: number[] = []; nativeLoadWaveSamplesCopy(wave.handle, (_index: number, sample: number) => { result.push(sample); }); return result; }
export function getPixelColor(data: Uint8Array, format: number): T.Color { let result: T.Color = { r: 0, g: 0, b: 0, a: 0 }; nativeGetPixelColorCopy(data, format, (r: number, g: number, b: number, a: number) => { result = { r: r, g: g, b: b, a: a }; }); return result; }
export function setPixelColor(data: Uint8Array, color: T.Color, format: number): Uint8Array { let result: Uint8Array = new Uint8Array(0); nativeSetPixelColorCopy(data, color.r, color.g, color.b, color.a, format, (value: Uint8Array) => { result = value; }); return result; }
export function setWindowIcons(images: ReadonlyArray<T.Image>): void { nativeSetWindowIconsCopy(images.length, (index: number): number => { const image = images[index]; return image === undefined ? 0 : image.handle; }); }
export function updateCamera(camera: T.Camera, mode: number): T.Camera { let result = camera; nativeUpdateCameraCopy(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, mode, (px: number, py: number, pz: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number, fovy: number, projection: number) => { result = { position: { x: px, y: py, z: pz }, target: { x: tx, y: ty, z: tz }, up: { x: ux, y: uy, z: uz }, fovy: fovy, projection: projection }; }); return result; }
export function updateCameraPro(camera: T.Camera, movement: T.Vector3, rotation: T.Vector3, zoom: number): T.Camera { let result = camera; nativeUpdateCameraProCopy(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, movement.x, movement.y, movement.z, rotation.x, rotation.y, rotation.z, zoom, (px: number, py: number, pz: number, tx: number, ty: number, tz: number, ux: number, uy: number, uz: number, fovy: number, projection: number) => { result = { position: { x: px, y: py, z: pz }, target: { x: tx, y: ty, z: tz }, up: { x: ux, y: uy, z: uz }, fovy: fovy, projection: projection }; }); return result; }
export function checkCollisionLines(start1: T.Vector2, end1: T.Vector2, start2: T.Vector2, end2: T.Vector2): T.CollisionLinesResult { let result: T.CollisionLinesResult = { hit: false, point: { x: 0, y: 0 } }; nativeCheckCollisionLinesCopy(start1.x, start1.y, end1.x, end1.y, start2.x, start2.y, end2.x, end2.y, (hit: boolean, x: number, y: number) => { result = { hit: hit, point: { x: x, y: y } }; }); return result; }
export function loadImageAnim(fileName: string): T.ImageAnimation { let result: T.ImageAnimation = { image: { handle: 0, kind: "Image" }, frames: 0 }; nativeLoadImageAnimCopy(fileName, true, (handle: number, frames: number) => { result = { image: { handle: handle, kind: "Image" }, frames: frames }; }); return result; }
export function loadImageAnimFromMemory(fileType: string, data: Uint8Array): T.ImageAnimation { let result: T.ImageAnimation = { image: { handle: 0, kind: "Image" }, frames: 0 }; nativeLoadImageAnimFromMemoryCopy(fileType, true, data, data.length, (handle: number, frames: number) => { result = { image: { handle: handle, kind: "Image" }, frames: frames }; }); return result; }
export function getCodepoint(text: string): T.CodepointResult { let result: T.CodepointResult = { codepoint: 0, size: 0 }; nativeGetCodepointCopy(text, true, (codepoint: number, size: number) => { result = { codepoint: codepoint, size: size }; }); return result; }
export function getCodepointNext(text: string): T.CodepointResult { let result: T.CodepointResult = { codepoint: 0, size: 0 }; nativeGetCodepointNextCopy(text, true, (codepoint: number, size: number) => { result = { codepoint: codepoint, size: size }; }); return result; }
export function getCodepointPrevious(text: string): T.CodepointResult { let result: T.CodepointResult = { codepoint: 0, size: 0 }; nativeGetCodepointPreviousCopy(text, true, (codepoint: number, size: number) => { result = { codepoint: codepoint, size: size }; }); return result; }
export function textJoin(textList: ReadonlyArray<string>, delimiter: string): string { return textList.join(delimiter); }
export function textAppend(text: string, append: string, position: number): T.TextAppendResult { const prefix = text.slice(0, position); const result = prefix + append; return { text: result, position: result.length }; }
