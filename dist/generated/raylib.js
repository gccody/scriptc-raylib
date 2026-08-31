// Generated from the official raylib 6.0 API metadata.
import { nativeInitWindow, nativeCloseWindow, nativeWindowShouldClose, nativeIsWindowReady, nativeIsWindowFullscreen, nativeIsWindowHidden, nativeIsWindowMinimized, nativeIsWindowMaximized, nativeIsWindowFocused, nativeIsWindowResized, nativeIsWindowState, nativeSetWindowState, nativeClearWindowState, nativeToggleFullscreen, nativeToggleBorderlessWindowed, nativeMaximizeWindow, nativeMinimizeWindow, nativeRestoreWindow, nativeSetWindowIcon, nativeSetWindowTitle, nativeSetWindowPosition, nativeSetWindowMonitor, nativeSetWindowMinSize, nativeSetWindowMaxSize, nativeSetWindowSize, nativeSetWindowOpacity, nativeSetWindowFocused, nativeGetScreenWidth, nativeGetScreenHeight, nativeGetRenderWidth, nativeGetRenderHeight, nativeGetMonitorCount, nativeGetCurrentMonitor, nativeGetMonitorPosition, nativeGetMonitorWidth, nativeGetMonitorHeight, nativeGetMonitorPhysicalWidth, nativeGetMonitorPhysicalHeight, nativeGetMonitorRefreshRate, nativeGetWindowPosition, nativeGetWindowScaleDPI, nativeGetMonitorName, nativeSetClipboardText, nativeGetClipboardText, nativeGetClipboardImage, nativeEnableEventWaiting, nativeDisableEventWaiting, nativeShowCursor, nativeHideCursor, nativeIsCursorHidden, nativeEnableCursor, nativeDisableCursor, nativeIsCursorOnScreen, nativeClearBackground, nativeBeginDrawing, nativeEndDrawing, nativeBeginMode2D, nativeEndMode2D, nativeBeginMode3D, nativeEndMode3D, nativeBeginTextureMode, nativeEndTextureMode, nativeBeginShaderMode, nativeEndShaderMode, nativeBeginBlendMode, nativeEndBlendMode, nativeBeginScissorMode, nativeEndScissorMode, nativeBeginVrStereoMode, nativeEndVrStereoMode, nativeLoadVrStereoConfig, nativeUnloadVrStereoConfig, nativeLoadShader, nativeLoadShaderFromMemory, nativeIsShaderValid, nativeGetShaderLocation, nativeGetShaderLocationAttrib, nativeSetShaderValue, nativeSetShaderValueV, nativeSetShaderValueMatrix, nativeSetShaderValueTexture, nativeUnloadShader, nativeGetScreenToWorldRay, nativeGetScreenToWorldRayEx, nativeGetWorldToScreen, nativeGetWorldToScreenEx, nativeGetWorldToScreen2D, nativeGetScreenToWorld2D, nativeGetCameraMatrix, nativeGetCameraMatrix2D, nativeSetTargetFPS, nativeGetFrameTime, nativeGetTime, nativeGetFPS, nativeSwapScreenBuffer, nativePollInputEvents, nativeWaitTime, nativeSetRandomSeed, nativeGetRandomValue, nativeTakeScreenshot, nativeSetConfigFlags, nativeOpenURL, nativeSetTraceLogLevel, nativeSaveFileData, nativeExportDataAsCode, nativeLoadFileText, nativeSaveFileText, nativeFileRename, nativeFileRemove, nativeFileCopy, nativeFileMove, nativeFileTextReplace, nativeFileTextFindIndex, nativeFileExists, nativeDirectoryExists, nativeIsFileExtension, nativeGetFileLength, nativeGetFileModTime, nativeGetFileExtension, nativeGetFileName, nativeGetFileNameWithoutExt, nativeGetDirectoryPath, nativeGetPrevDirectoryPath, nativeGetWorkingDirectory, nativeGetApplicationDirectory, nativeMakeDirectory, nativeChangeDirectory, nativeIsPathFile, nativeIsFileNameValid, nativeLoadDirectoryFiles, nativeLoadDirectoryFilesEx, nativeUnloadDirectoryFiles, nativeIsFileDropped, nativeLoadDroppedFiles, nativeUnloadDroppedFiles, nativeGetDirectoryFileCount, nativeGetDirectoryFileCountEx, nativeComputeCRC32, nativeLoadAutomationEventList, nativeUnloadAutomationEventList, nativeExportAutomationEventList, nativeSetAutomationEventList, nativeSetAutomationEventBaseFrame, nativeStartAutomationEventRecording, nativeStopAutomationEventRecording, nativePlayAutomationEvent, nativeIsKeyPressed, nativeIsKeyPressedRepeat, nativeIsKeyDown, nativeIsKeyReleased, nativeIsKeyUp, nativeGetKeyPressed, nativeGetCharPressed, nativeGetKeyName, nativeSetExitKey, nativeIsGamepadAvailable, nativeGetGamepadName, nativeIsGamepadButtonPressed, nativeIsGamepadButtonDown, nativeIsGamepadButtonReleased, nativeIsGamepadButtonUp, nativeGetGamepadButtonPressed, nativeGetGamepadAxisCount, nativeGetGamepadAxisMovement, nativeSetGamepadMappings, nativeSetGamepadVibration, nativeIsMouseButtonPressed, nativeIsMouseButtonDown, nativeIsMouseButtonReleased, nativeIsMouseButtonUp, nativeGetMouseX, nativeGetMouseY, nativeGetMousePosition, nativeGetMouseDelta, nativeSetMousePosition, nativeSetMouseOffset, nativeSetMouseScale, nativeGetMouseWheelMove, nativeGetMouseWheelMoveV, nativeSetMouseCursor, nativeGetTouchX, nativeGetTouchY, nativeGetTouchPosition, nativeGetTouchPointId, nativeGetTouchPointCount, nativeSetGesturesEnabled, nativeIsGestureDetected, nativeGetGestureDetected, nativeGetGestureHoldDuration, nativeGetGestureDragVector, nativeGetGestureDragAngle, nativeGetGesturePinchVector, nativeGetGesturePinchAngle, nativeSetShapesTexture, nativeGetShapesTexture, nativeGetShapesTextureRectangle, nativeDrawPixel, nativeDrawPixelV, nativeDrawLine, nativeDrawLineV, nativeDrawLineEx, nativeDrawLineStrip, nativeDrawLineBezier, nativeDrawLineDashed, nativeDrawCircle, nativeDrawCircleV, nativeDrawCircleGradient, nativeDrawCircleSector, nativeDrawCircleSectorLines, nativeDrawCircleLines, nativeDrawCircleLinesV, nativeDrawEllipse, nativeDrawEllipseV, nativeDrawEllipseLines, nativeDrawEllipseLinesV, nativeDrawRing, nativeDrawRingLines, nativeDrawRectangle, nativeDrawRectangleV, nativeDrawRectangleRec, nativeDrawRectanglePro, nativeDrawRectangleGradientV, nativeDrawRectangleGradientH, nativeDrawRectangleGradientEx, nativeDrawRectangleLines, nativeDrawRectangleLinesEx, nativeDrawRectangleRounded, nativeDrawRectangleRoundedLines, nativeDrawRectangleRoundedLinesEx, nativeDrawTriangle, nativeDrawTriangleLines, nativeDrawTriangleFan, nativeDrawTriangleStrip, nativeDrawPoly, nativeDrawPolyLines, nativeDrawPolyLinesEx, nativeDrawSplineLinear, nativeDrawSplineBasis, nativeDrawSplineCatmullRom, nativeDrawSplineBezierQuadratic, nativeDrawSplineBezierCubic, nativeDrawSplineSegmentLinear, nativeDrawSplineSegmentBasis, nativeDrawSplineSegmentCatmullRom, nativeDrawSplineSegmentBezierQuadratic, nativeDrawSplineSegmentBezierCubic, nativeGetSplinePointLinear, nativeGetSplinePointBasis, nativeGetSplinePointCatmullRom, nativeGetSplinePointBezierQuad, nativeGetSplinePointBezierCubic, nativeCheckCollisionRecs, nativeCheckCollisionCircles, nativeCheckCollisionCircleRec, nativeCheckCollisionCircleLine, nativeCheckCollisionPointRec, nativeCheckCollisionPointCircle, nativeCheckCollisionPointTriangle, nativeCheckCollisionPointLine, nativeCheckCollisionPointPoly, nativeGetCollisionRec, nativeLoadImage, nativeLoadImageRaw, nativeLoadImageFromMemory, nativeLoadImageFromTexture, nativeLoadImageFromScreen, nativeIsImageValid, nativeUnloadImage, nativeExportImage, nativeExportImageAsCode, nativeGenImageColor, nativeGenImageGradientLinear, nativeGenImageGradientRadial, nativeGenImageGradientSquare, nativeGenImageChecked, nativeGenImageWhiteNoise, nativeGenImagePerlinNoise, nativeGenImageCellular, nativeGenImageText, nativeImageCopy, nativeImageFromImage, nativeImageFromChannel, nativeImageText, nativeImageTextEx, nativeImageFormat, nativeImageToPOT, nativeImageCrop, nativeImageAlphaCrop, nativeImageAlphaClear, nativeImageAlphaMask, nativeImageAlphaPremultiply, nativeImageBlurGaussian, nativeImageKernelConvolution, nativeImageResize, nativeImageResizeNN, nativeImageResizeCanvas, nativeImageMipmaps, nativeImageDither, nativeImageFlipVertical, nativeImageFlipHorizontal, nativeImageRotate, nativeImageRotateCW, nativeImageRotateCCW, nativeImageColorTint, nativeImageColorInvert, nativeImageColorGrayscale, nativeImageColorContrast, nativeImageColorBrightness, nativeImageColorReplace, nativeGetImageAlphaBorder, nativeGetImageColor, nativeImageClearBackground, nativeImageDrawPixel, nativeImageDrawPixelV, nativeImageDrawLine, nativeImageDrawLineV, nativeImageDrawLineEx, nativeImageDrawCircle, nativeImageDrawCircleV, nativeImageDrawCircleLines, nativeImageDrawCircleLinesV, nativeImageDrawRectangle, nativeImageDrawRectangleV, nativeImageDrawRectangleRec, nativeImageDrawRectangleLines, nativeImageDrawTriangle, nativeImageDrawTriangleEx, nativeImageDrawTriangleLines, nativeImageDrawTriangleFan, nativeImageDrawTriangleStrip, nativeImageDraw, nativeImageDrawText, nativeImageDrawTextEx, nativeLoadTexture, nativeLoadTextureFromImage, nativeLoadTextureCubemap, nativeLoadRenderTexture, nativeIsTextureValid, nativeUnloadTexture, nativeIsRenderTextureValid, nativeUnloadRenderTexture, nativeUpdateTexture, nativeUpdateTextureRec, nativeGenTextureMipmaps, nativeSetTextureFilter, nativeSetTextureWrap, nativeDrawTexture, nativeDrawTextureV, nativeDrawTextureEx, nativeDrawTextureRec, nativeDrawTexturePro, nativeDrawTextureNPatch, nativeColorIsEqual, nativeFade, nativeColorToInt, nativeColorNormalize, nativeColorFromNormalized, nativeColorToHSV, nativeColorFromHSV, nativeColorTint, nativeColorBrightness, nativeColorContrast, nativeColorAlpha, nativeColorAlphaBlend, nativeColorLerp, nativeGetColor, nativeGetPixelDataSize, nativeGetFontDefault, nativeLoadFont, nativeLoadFontEx, nativeLoadFontFromImage, nativeLoadFontFromMemory, nativeIsFontValid, nativeUnloadFontData, nativeUnloadFont, nativeExportFontAsCode, nativeDrawFPS, nativeDrawText, nativeDrawTextEx, nativeDrawTextPro, nativeDrawTextCodepoint, nativeDrawTextCodepoints, nativeSetTextLineSpacing, nativeMeasureText, nativeMeasureTextEx, nativeMeasureTextCodepoints, nativeGetGlyphIndex, nativeGetGlyphInfo, nativeGetGlyphAtlasRec, nativeLoadUTF8, nativeGetCodepointCount, nativeTextCopy, nativeTextIsEqual, nativeTextLength, nativeTextSubtext, nativeTextRemoveSpaces, nativeGetTextBetween, nativeTextReplace, nativeTextReplaceAlloc, nativeTextReplaceBetween, nativeTextReplaceBetweenAlloc, nativeTextInsert, nativeTextInsertAlloc, nativeTextFindIndex, nativeTextToUpper, nativeTextToLower, nativeTextToPascal, nativeTextToSnake, nativeTextToCamel, nativeTextToInteger, nativeTextToFloat, nativeDrawLine3D, nativeDrawPoint3D, nativeDrawCircle3D, nativeDrawTriangle3D, nativeDrawTriangleStrip3D, nativeDrawCube, nativeDrawCubeV, nativeDrawCubeWires, nativeDrawCubeWiresV, nativeDrawSphere, nativeDrawSphereEx, nativeDrawSphereWires, nativeDrawCylinder, nativeDrawCylinderEx, nativeDrawCylinderWires, nativeDrawCylinderWiresEx, nativeDrawCapsule, nativeDrawCapsuleWires, nativeDrawPlane, nativeDrawRay, nativeDrawGrid, nativeLoadModel, nativeLoadModelFromMesh, nativeIsModelValid, nativeUnloadModel, nativeGetModelBoundingBox, nativeDrawModel, nativeDrawModelEx, nativeDrawModelWires, nativeDrawModelWiresEx, nativeDrawBoundingBox, nativeDrawBillboard, nativeDrawBillboardRec, nativeDrawBillboardPro, nativeUploadMesh, nativeUpdateMeshBuffer, nativeUnloadMesh, nativeDrawMesh, nativeDrawMeshInstanced, nativeGetMeshBoundingBox, nativeGenMeshTangents, nativeExportMesh, nativeExportMeshAsCode, nativeGenMeshPoly, nativeGenMeshPlane, nativeGenMeshCube, nativeGenMeshSphere, nativeGenMeshHemiSphere, nativeGenMeshCylinder, nativeGenMeshCone, nativeGenMeshTorus, nativeGenMeshKnot, nativeGenMeshHeightmap, nativeGenMeshCubicmap, nativeLoadMaterialDefault, nativeIsMaterialValid, nativeUnloadMaterial, nativeSetMaterialTexture, nativeSetModelMeshMaterial, nativeUpdateModelAnimation, nativeUpdateModelAnimationEx, nativeUnloadModelAnimations, nativeIsModelAnimationValid, nativeCheckCollisionSpheres, nativeCheckCollisionBoxes, nativeCheckCollisionBoxSphere, nativeGetRayCollisionSphere, nativeGetRayCollisionBox, nativeGetRayCollisionMesh, nativeGetRayCollisionTriangle, nativeGetRayCollisionQuad, nativeInitAudioDevice, nativeCloseAudioDevice, nativeIsAudioDeviceReady, nativeSetMasterVolume, nativeGetMasterVolume, nativeLoadWave, nativeLoadWaveFromMemory, nativeIsWaveValid, nativeLoadSound, nativeLoadSoundFromWave, nativeLoadSoundAlias, nativeIsSoundValid, nativeUpdateSound, nativeUnloadWave, nativeUnloadSound, nativeUnloadSoundAlias, nativeExportWave, nativeExportWaveAsCode, nativePlaySound, nativeStopSound, nativePauseSound, nativeResumeSound, nativeIsSoundPlaying, nativeSetSoundVolume, nativeSetSoundPitch, nativeSetSoundPan, nativeWaveCopy, nativeWaveCrop, nativeWaveFormat, nativeLoadMusicStream, nativeLoadMusicStreamFromMemory, nativeIsMusicValid, nativeUnloadMusicStream, nativePlayMusicStream, nativeIsMusicStreamPlaying, nativeUpdateMusicStream, nativeStopMusicStream, nativePauseMusicStream, nativeResumeMusicStream, nativeSeekMusicStream, nativeSetMusicVolume, nativeSetMusicPitch, nativeSetMusicPan, nativeGetMusicTimeLength, nativeGetMusicTimePlayed, nativeLoadAudioStream, nativeIsAudioStreamValid, nativeUnloadAudioStream, nativeUpdateAudioStream, nativeIsAudioStreamProcessed, nativePlayAudioStream, nativePauseAudioStream, nativeResumeAudioStream, nativeIsAudioStreamPlaying, nativeStopAudioStream, nativeSetAudioStreamVolume, nativeSetAudioStreamPitch, nativeSetAudioStreamPan, nativeSetAudioStreamBufferSizeDefault, nativeTraceLogText, nativeLoadFileDataCopy, nativeCompressDataCopy, nativeDecompressDataCopy, nativeEncodeDataBase64Copy, nativeDecodeDataBase64Copy, nativeComputeMD5, nativeComputeSHA1, nativeComputeSHA256, nativeLoadRandomSequenceCopy, nativeExportImageToMemoryCopy, nativeLoadImageColorsCopy, nativeLoadImagePaletteCopy, nativeLoadCodepointsCopy, nativeCodepointToUTF8Copy, nativeLoadTextLinesCopy, nativeTextSplitCopy, nativeLoadWaveSamplesCopy, nativeGetPixelColorCopy, nativeSetPixelColorCopy, nativeSetWindowIconsCopy, nativeUpdateCameraCopy, nativeUpdateCameraProCopy, nativeCheckCollisionLinesCopy, nativeLoadImageAnimCopy, nativeLoadImageAnimFromMemoryCopy, nativeGetCodepointCopy, nativeGetCodepointNextCopy, nativeGetCodepointPreviousCopy } from "./native";
export * from "./types";
export * from "./constants";
export function initWindow(width, height, title) {
    nativeInitWindow(width, height, title, true);
}
export function closeWindow() {
    nativeCloseWindow();
}
export function windowShouldClose() {
    return nativeWindowShouldClose();
}
export function isWindowReady() {
    return nativeIsWindowReady();
}
export function isWindowFullscreen() {
    return nativeIsWindowFullscreen();
}
export function isWindowHidden() {
    return nativeIsWindowHidden();
}
export function isWindowMinimized() {
    return nativeIsWindowMinimized();
}
export function isWindowMaximized() {
    return nativeIsWindowMaximized();
}
export function isWindowFocused() {
    return nativeIsWindowFocused();
}
export function isWindowResized() {
    return nativeIsWindowResized();
}
export function isWindowState(flag) {
    return nativeIsWindowState(flag);
}
export function setWindowState(flags) {
    nativeSetWindowState(flags);
}
export function clearWindowState(flags) {
    nativeClearWindowState(flags);
}
export function toggleFullscreen() {
    nativeToggleFullscreen();
}
export function toggleBorderlessWindowed() {
    nativeToggleBorderlessWindowed();
}
export function maximizeWindow() {
    nativeMaximizeWindow();
}
export function minimizeWindow() {
    nativeMinimizeWindow();
}
export function restoreWindow() {
    nativeRestoreWindow();
}
export function setWindowIcon(image) {
    nativeSetWindowIcon(image.handle);
}
export function setWindowTitle(title) {
    nativeSetWindowTitle(title, true);
}
export function setWindowPosition(x, y) {
    nativeSetWindowPosition(x, y);
}
export function setWindowMonitor(monitor) {
    nativeSetWindowMonitor(monitor);
}
export function setWindowMinSize(width, height) {
    nativeSetWindowMinSize(width, height);
}
export function setWindowMaxSize(width, height) {
    nativeSetWindowMaxSize(width, height);
}
export function setWindowSize(width, height) {
    nativeSetWindowSize(width, height);
}
export function setWindowOpacity(opacity) {
    nativeSetWindowOpacity(opacity);
}
export function setWindowFocused() {
    nativeSetWindowFocused();
}
export function getScreenWidth() {
    return nativeGetScreenWidth();
}
export function getScreenHeight() {
    return nativeGetScreenHeight();
}
export function getRenderWidth() {
    return nativeGetRenderWidth();
}
export function getRenderHeight() {
    return nativeGetRenderHeight();
}
export function getMonitorCount() {
    return nativeGetMonitorCount();
}
export function getCurrentMonitor() {
    return nativeGetCurrentMonitor();
}
export function getMonitorPosition(monitor) {
    let result = { x: 0, y: 0 };
    nativeGetMonitorPosition(monitor, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getMonitorWidth(monitor) {
    return nativeGetMonitorWidth(monitor);
}
export function getMonitorHeight(monitor) {
    return nativeGetMonitorHeight(monitor);
}
export function getMonitorPhysicalWidth(monitor) {
    return nativeGetMonitorPhysicalWidth(monitor);
}
export function getMonitorPhysicalHeight(monitor) {
    return nativeGetMonitorPhysicalHeight(monitor);
}
export function getMonitorRefreshRate(monitor) {
    return nativeGetMonitorRefreshRate(monitor);
}
export function getWindowPosition() {
    let result = { x: 0, y: 0 };
    nativeGetWindowPosition((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getWindowScaleDPI() {
    let result = { x: 0, y: 0 };
    nativeGetWindowScaleDPI((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getMonitorName(monitor) {
    let result = null;
    nativeGetMonitorName(monitor, (value) => { result = value; });
    return result;
}
export function setClipboardText(text) {
    nativeSetClipboardText(text, true);
}
export function getClipboardText() {
    let result = null;
    nativeGetClipboardText((value) => { result = value; });
    return result;
}
export function getClipboardImage() {
    return { handle: nativeGetClipboardImage(), kind: "Image" };
}
export function enableEventWaiting() {
    nativeEnableEventWaiting();
}
export function disableEventWaiting() {
    nativeDisableEventWaiting();
}
export function showCursor() {
    nativeShowCursor();
}
export function hideCursor() {
    nativeHideCursor();
}
export function isCursorHidden() {
    return nativeIsCursorHidden();
}
export function enableCursor() {
    nativeEnableCursor();
}
export function disableCursor() {
    nativeDisableCursor();
}
export function isCursorOnScreen() {
    return nativeIsCursorOnScreen();
}
export function clearBackground(color) {
    nativeClearBackground(color.r, color.g, color.b, color.a);
}
export function beginDrawing() {
    nativeBeginDrawing();
}
export function endDrawing() {
    nativeEndDrawing();
}
export function beginMode2D(camera) {
    nativeBeginMode2D(camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom);
}
export function endMode2D() {
    nativeEndMode2D();
}
export function beginMode3D(camera) {
    nativeBeginMode3D(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection);
}
export function endMode3D() {
    nativeEndMode3D();
}
export function beginTextureMode(target) {
    nativeBeginTextureMode(target.handle);
}
export function endTextureMode() {
    nativeEndTextureMode();
}
export function beginShaderMode(shader) {
    nativeBeginShaderMode(shader.handle);
}
export function endShaderMode() {
    nativeEndShaderMode();
}
export function beginBlendMode(mode) {
    nativeBeginBlendMode(mode);
}
export function endBlendMode() {
    nativeEndBlendMode();
}
export function beginScissorMode(x, y, width, height) {
    nativeBeginScissorMode(x, y, width, height);
}
export function endScissorMode() {
    nativeEndScissorMode();
}
export function beginVrStereoMode(config) {
    nativeBeginVrStereoMode(config.projection[0].m0, config.projection[0].m4, config.projection[0].m8, config.projection[0].m12, config.projection[0].m1, config.projection[0].m5, config.projection[0].m9, config.projection[0].m13, config.projection[0].m2, config.projection[0].m6, config.projection[0].m10, config.projection[0].m14, config.projection[0].m3, config.projection[0].m7, config.projection[0].m11, config.projection[0].m15, config.projection[1].m0, config.projection[1].m4, config.projection[1].m8, config.projection[1].m12, config.projection[1].m1, config.projection[1].m5, config.projection[1].m9, config.projection[1].m13, config.projection[1].m2, config.projection[1].m6, config.projection[1].m10, config.projection[1].m14, config.projection[1].m3, config.projection[1].m7, config.projection[1].m11, config.projection[1].m15, config.viewOffset[0].m0, config.viewOffset[0].m4, config.viewOffset[0].m8, config.viewOffset[0].m12, config.viewOffset[0].m1, config.viewOffset[0].m5, config.viewOffset[0].m9, config.viewOffset[0].m13, config.viewOffset[0].m2, config.viewOffset[0].m6, config.viewOffset[0].m10, config.viewOffset[0].m14, config.viewOffset[0].m3, config.viewOffset[0].m7, config.viewOffset[0].m11, config.viewOffset[0].m15, config.viewOffset[1].m0, config.viewOffset[1].m4, config.viewOffset[1].m8, config.viewOffset[1].m12, config.viewOffset[1].m1, config.viewOffset[1].m5, config.viewOffset[1].m9, config.viewOffset[1].m13, config.viewOffset[1].m2, config.viewOffset[1].m6, config.viewOffset[1].m10, config.viewOffset[1].m14, config.viewOffset[1].m3, config.viewOffset[1].m7, config.viewOffset[1].m11, config.viewOffset[1].m15, config.leftLensCenter[0], config.leftLensCenter[1], config.rightLensCenter[0], config.rightLensCenter[1], config.leftScreenCenter[0], config.leftScreenCenter[1], config.rightScreenCenter[0], config.rightScreenCenter[1], config.scale[0], config.scale[1], config.scaleIn[0], config.scaleIn[1]);
}
export function endVrStereoMode() {
    nativeEndVrStereoMode();
}
export function loadVrStereoConfig(device) {
    let result = { projection: [{ m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 }, { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 }], viewOffset: [{ m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 }, { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 }], leftLensCenter: [0, 0], rightLensCenter: [0, 0], leftScreenCenter: [0, 0], rightScreenCenter: [0, 0], scale: [0, 0], scaleIn: [0, 0] };
    nativeLoadVrStereoConfig(device.hResolution, device.vResolution, device.hScreenSize, device.vScreenSize, device.eyeToScreenDistance, device.lensSeparationDistance, device.interpupillaryDistance, device.lensDistortionValues[0], device.lensDistortionValues[1], device.lensDistortionValues[2], device.lensDistortionValues[3], device.chromaAbCorrection[0], device.chromaAbCorrection[1], device.chromaAbCorrection[2], device.chromaAbCorrection[3], (value0, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21, value22, value23, value24, value25, value26, value27, value28, value29, value30, value31, value32, value33, value34, value35, value36, value37, value38, value39, value40, value41, value42, value43, value44, value45, value46, value47, value48, value49, value50, value51, value52, value53, value54, value55, value56, value57, value58, value59, value60, value61, value62, value63, value64, value65, value66, value67, value68, value69, value70, value71, value72, value73, value74, value75) => {
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
export function unloadVrStereoConfig(config) {
    nativeUnloadVrStereoConfig(config.projection[0].m0, config.projection[0].m4, config.projection[0].m8, config.projection[0].m12, config.projection[0].m1, config.projection[0].m5, config.projection[0].m9, config.projection[0].m13, config.projection[0].m2, config.projection[0].m6, config.projection[0].m10, config.projection[0].m14, config.projection[0].m3, config.projection[0].m7, config.projection[0].m11, config.projection[0].m15, config.projection[1].m0, config.projection[1].m4, config.projection[1].m8, config.projection[1].m12, config.projection[1].m1, config.projection[1].m5, config.projection[1].m9, config.projection[1].m13, config.projection[1].m2, config.projection[1].m6, config.projection[1].m10, config.projection[1].m14, config.projection[1].m3, config.projection[1].m7, config.projection[1].m11, config.projection[1].m15, config.viewOffset[0].m0, config.viewOffset[0].m4, config.viewOffset[0].m8, config.viewOffset[0].m12, config.viewOffset[0].m1, config.viewOffset[0].m5, config.viewOffset[0].m9, config.viewOffset[0].m13, config.viewOffset[0].m2, config.viewOffset[0].m6, config.viewOffset[0].m10, config.viewOffset[0].m14, config.viewOffset[0].m3, config.viewOffset[0].m7, config.viewOffset[0].m11, config.viewOffset[0].m15, config.viewOffset[1].m0, config.viewOffset[1].m4, config.viewOffset[1].m8, config.viewOffset[1].m12, config.viewOffset[1].m1, config.viewOffset[1].m5, config.viewOffset[1].m9, config.viewOffset[1].m13, config.viewOffset[1].m2, config.viewOffset[1].m6, config.viewOffset[1].m10, config.viewOffset[1].m14, config.viewOffset[1].m3, config.viewOffset[1].m7, config.viewOffset[1].m11, config.viewOffset[1].m15, config.leftLensCenter[0], config.leftLensCenter[1], config.rightLensCenter[0], config.rightLensCenter[1], config.leftScreenCenter[0], config.leftScreenCenter[1], config.rightScreenCenter[0], config.rightScreenCenter[1], config.scale[0], config.scale[1], config.scaleIn[0], config.scaleIn[1]);
}
export function loadShader(vsFileName, fsFileName) {
    return { handle: nativeLoadShader(vsFileName ?? "", vsFileName !== null, fsFileName ?? "", fsFileName !== null), kind: "Shader" };
}
export function loadShaderFromMemory(vsCode, fsCode) {
    return { handle: nativeLoadShaderFromMemory(vsCode ?? "", vsCode !== null, fsCode ?? "", fsCode !== null), kind: "Shader" };
}
export function isShaderValid(shader) {
    return nativeIsShaderValid(shader.handle);
}
export function getShaderLocation(shader, uniformName) {
    return nativeGetShaderLocation(shader.handle, uniformName, true);
}
export function getShaderLocationAttrib(shader, attribName) {
    return nativeGetShaderLocationAttrib(shader.handle, attribName, true);
}
export function setShaderValue(shader, locIndex, value, uniformType) {
    nativeSetShaderValue(shader.handle, locIndex, value, uniformType);
}
export function setShaderValueV(shader, locIndex, value, uniformType, count) {
    nativeSetShaderValueV(shader.handle, locIndex, value, uniformType, count);
}
export function setShaderValueMatrix(shader, locIndex, mat) {
    nativeSetShaderValueMatrix(shader.handle, locIndex, mat.m0, mat.m4, mat.m8, mat.m12, mat.m1, mat.m5, mat.m9, mat.m13, mat.m2, mat.m6, mat.m10, mat.m14, mat.m3, mat.m7, mat.m11, mat.m15);
}
export function setShaderValueTexture(shader, locIndex, texture) {
    nativeSetShaderValueTexture(shader.handle, locIndex, texture.handle);
}
export function unloadShader(shader) {
    nativeUnloadShader(shader.handle);
}
export function getScreenToWorldRay(position, camera) {
    let result = { position: { x: 0, y: 0, z: 0 }, direction: { x: 0, y: 0, z: 0 } };
    nativeGetScreenToWorldRay(position.x, position.y, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, (value0, value1, value2, value3, value4, value5) => {
        result.position.x = value0;
        result.position.y = value1;
        result.position.z = value2;
        result.direction.x = value3;
        result.direction.y = value4;
        result.direction.z = value5;
    });
    return result;
}
export function getScreenToWorldRayEx(position, camera, width, height) {
    let result = { position: { x: 0, y: 0, z: 0 }, direction: { x: 0, y: 0, z: 0 } };
    nativeGetScreenToWorldRayEx(position.x, position.y, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, width, height, (value0, value1, value2, value3, value4, value5) => {
        result.position.x = value0;
        result.position.y = value1;
        result.position.z = value2;
        result.direction.x = value3;
        result.direction.y = value4;
        result.direction.z = value5;
    });
    return result;
}
export function getWorldToScreen(position, camera) {
    let result = { x: 0, y: 0 };
    nativeGetWorldToScreen(position.x, position.y, position.z, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getWorldToScreenEx(position, camera, width, height) {
    let result = { x: 0, y: 0 };
    nativeGetWorldToScreenEx(position.x, position.y, position.z, camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, width, height, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getWorldToScreen2D(position, camera) {
    let result = { x: 0, y: 0 };
    nativeGetWorldToScreen2D(position.x, position.y, camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getScreenToWorld2D(position, camera) {
    let result = { x: 0, y: 0 };
    nativeGetScreenToWorld2D(position.x, position.y, camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getCameraMatrix(camera) {
    let result = { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 };
    nativeGetCameraMatrix(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, (value0, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15) => {
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
export function getCameraMatrix2D(camera) {
    let result = { m0: 0, m4: 0, m8: 0, m12: 0, m1: 0, m5: 0, m9: 0, m13: 0, m2: 0, m6: 0, m10: 0, m14: 0, m3: 0, m7: 0, m11: 0, m15: 0 };
    nativeGetCameraMatrix2D(camera.offset.x, camera.offset.y, camera.target.x, camera.target.y, camera.rotation, camera.zoom, (value0, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15) => {
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
export function setTargetFPS(fps) {
    nativeSetTargetFPS(fps);
}
export function getFrameTime() {
    return nativeGetFrameTime();
}
export function getTime() {
    return nativeGetTime();
}
export function getFPS() {
    return nativeGetFPS();
}
export function swapScreenBuffer() {
    nativeSwapScreenBuffer();
}
export function pollInputEvents() {
    nativePollInputEvents();
}
export function waitTime(seconds) {
    nativeWaitTime(seconds);
}
export function setRandomSeed(seed) {
    nativeSetRandomSeed(seed);
}
export function getRandomValue(min, max) {
    return nativeGetRandomValue(min, max);
}
export function takeScreenshot(fileName) {
    nativeTakeScreenshot(fileName, true);
}
export function setConfigFlags(flags) {
    nativeSetConfigFlags(flags);
}
export function openURL(url) {
    nativeOpenURL(url, true);
}
export function setTraceLogLevel(logLevel) {
    nativeSetTraceLogLevel(logLevel);
}
export function saveFileData(fileName, data, dataSize) {
    return nativeSaveFileData(fileName, true, data, dataSize);
}
export function exportDataAsCode(data, dataSize, fileName) {
    return nativeExportDataAsCode(data, dataSize, fileName, true);
}
export function loadFileText(fileName) {
    let result = null;
    nativeLoadFileText(fileName, true, (value) => { result = value; });
    return result;
}
export function saveFileText(fileName, text) {
    return nativeSaveFileText(fileName, true, text, true);
}
export function fileRename(fileName, fileRename) {
    return nativeFileRename(fileName, true, fileRename, true);
}
export function fileRemove(fileName) {
    return nativeFileRemove(fileName, true);
}
export function fileCopy(srcPath, dstPath) {
    return nativeFileCopy(srcPath, true, dstPath, true);
}
export function fileMove(srcPath, dstPath) {
    return nativeFileMove(srcPath, true, dstPath, true);
}
export function fileTextReplace(fileName, search, replacement) {
    return nativeFileTextReplace(fileName, true, search, true, replacement, true);
}
export function fileTextFindIndex(fileName, search) {
    return nativeFileTextFindIndex(fileName, true, search, true);
}
export function fileExists(fileName) {
    return nativeFileExists(fileName, true);
}
export function directoryExists(dirPath) {
    return nativeDirectoryExists(dirPath, true);
}
export function isFileExtension(fileName, ext) {
    return nativeIsFileExtension(fileName, true, ext, true);
}
export function getFileLength(fileName) {
    return nativeGetFileLength(fileName, true);
}
export function getFileModTime(fileName) {
    return nativeGetFileModTime(fileName, true);
}
export function getFileExtension(fileName) {
    let result = null;
    nativeGetFileExtension(fileName, true, (value) => { result = value; });
    return result;
}
export function getFileName(filePath) {
    let result = null;
    nativeGetFileName(filePath, true, (value) => { result = value; });
    return result;
}
export function getFileNameWithoutExt(filePath) {
    let result = null;
    nativeGetFileNameWithoutExt(filePath, true, (value) => { result = value; });
    return result;
}
export function getDirectoryPath(filePath) {
    let result = null;
    nativeGetDirectoryPath(filePath, true, (value) => { result = value; });
    return result;
}
export function getPrevDirectoryPath(dirPath) {
    let result = null;
    nativeGetPrevDirectoryPath(dirPath, true, (value) => { result = value; });
    return result;
}
export function getWorkingDirectory() {
    let result = null;
    nativeGetWorkingDirectory((value) => { result = value; });
    return result;
}
export function getApplicationDirectory() {
    let result = null;
    nativeGetApplicationDirectory((value) => { result = value; });
    return result;
}
export function makeDirectory(dirPath) {
    return nativeMakeDirectory(dirPath, true);
}
export function changeDirectory(dirPath) {
    return nativeChangeDirectory(dirPath, true);
}
export function isPathFile(path) {
    return nativeIsPathFile(path, true);
}
export function isFileNameValid(fileName) {
    return nativeIsFileNameValid(fileName, true);
}
export function loadDirectoryFiles(dirPath) {
    return { handle: nativeLoadDirectoryFiles(dirPath, true), kind: "FilePathList" };
}
export function loadDirectoryFilesEx(basePath, filter, scanSubdirs) {
    return { handle: nativeLoadDirectoryFilesEx(basePath, true, filter, true, scanSubdirs), kind: "FilePathList" };
}
export function unloadDirectoryFiles(files) {
    nativeUnloadDirectoryFiles(files.handle);
}
export function isFileDropped() {
    return nativeIsFileDropped();
}
export function loadDroppedFiles() {
    return { handle: nativeLoadDroppedFiles(), kind: "FilePathList" };
}
export function unloadDroppedFiles(files) {
    nativeUnloadDroppedFiles(files.handle);
}
export function getDirectoryFileCount(dirPath) {
    return nativeGetDirectoryFileCount(dirPath, true);
}
export function getDirectoryFileCountEx(basePath, filter, scanSubdirs) {
    return nativeGetDirectoryFileCountEx(basePath, true, filter, true, scanSubdirs);
}
export function computeCRC32(data, dataSize) {
    return nativeComputeCRC32(data, dataSize);
}
export function loadAutomationEventList(fileName) {
    return { handle: nativeLoadAutomationEventList(fileName ?? "", fileName !== null), kind: "AutomationEventList" };
}
export function unloadAutomationEventList(list) {
    nativeUnloadAutomationEventList(list.handle);
}
export function exportAutomationEventList(list, fileName) {
    return nativeExportAutomationEventList(list.handle, fileName, true);
}
export function setAutomationEventList(list) {
    nativeSetAutomationEventList(list.handle);
}
export function setAutomationEventBaseFrame(frame) {
    nativeSetAutomationEventBaseFrame(frame);
}
export function startAutomationEventRecording() {
    nativeStartAutomationEventRecording();
}
export function stopAutomationEventRecording() {
    nativeStopAutomationEventRecording();
}
export function playAutomationEvent(event) {
    nativePlayAutomationEvent(event.frame, event.type, event.params[0], event.params[1], event.params[2], event.params[3]);
}
export function isKeyPressed(key) {
    return nativeIsKeyPressed(key);
}
export function isKeyPressedRepeat(key) {
    return nativeIsKeyPressedRepeat(key);
}
export function isKeyDown(key) {
    return nativeIsKeyDown(key);
}
export function isKeyReleased(key) {
    return nativeIsKeyReleased(key);
}
export function isKeyUp(key) {
    return nativeIsKeyUp(key);
}
export function getKeyPressed() {
    return nativeGetKeyPressed();
}
export function getCharPressed() {
    return nativeGetCharPressed();
}
export function getKeyName(key) {
    let result = null;
    nativeGetKeyName(key, (value) => { result = value; });
    return result;
}
export function setExitKey(key) {
    nativeSetExitKey(key);
}
export function isGamepadAvailable(gamepad) {
    return nativeIsGamepadAvailable(gamepad);
}
export function getGamepadName(gamepad) {
    let result = null;
    nativeGetGamepadName(gamepad, (value) => { result = value; });
    return result;
}
export function isGamepadButtonPressed(gamepad, button) {
    return nativeIsGamepadButtonPressed(gamepad, button);
}
export function isGamepadButtonDown(gamepad, button) {
    return nativeIsGamepadButtonDown(gamepad, button);
}
export function isGamepadButtonReleased(gamepad, button) {
    return nativeIsGamepadButtonReleased(gamepad, button);
}
export function isGamepadButtonUp(gamepad, button) {
    return nativeIsGamepadButtonUp(gamepad, button);
}
export function getGamepadButtonPressed() {
    return nativeGetGamepadButtonPressed();
}
export function getGamepadAxisCount(gamepad) {
    return nativeGetGamepadAxisCount(gamepad);
}
export function getGamepadAxisMovement(gamepad, axis) {
    return nativeGetGamepadAxisMovement(gamepad, axis);
}
export function setGamepadMappings(mappings) {
    return nativeSetGamepadMappings(mappings, true);
}
export function setGamepadVibration(gamepad, leftMotor, rightMotor, duration) {
    nativeSetGamepadVibration(gamepad, leftMotor, rightMotor, duration);
}
export function isMouseButtonPressed(button) {
    return nativeIsMouseButtonPressed(button);
}
export function isMouseButtonDown(button) {
    return nativeIsMouseButtonDown(button);
}
export function isMouseButtonReleased(button) {
    return nativeIsMouseButtonReleased(button);
}
export function isMouseButtonUp(button) {
    return nativeIsMouseButtonUp(button);
}
export function getMouseX() {
    return nativeGetMouseX();
}
export function getMouseY() {
    return nativeGetMouseY();
}
export function getMousePosition() {
    let result = { x: 0, y: 0 };
    nativeGetMousePosition((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getMouseDelta() {
    let result = { x: 0, y: 0 };
    nativeGetMouseDelta((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function setMousePosition(x, y) {
    nativeSetMousePosition(x, y);
}
export function setMouseOffset(offsetX, offsetY) {
    nativeSetMouseOffset(offsetX, offsetY);
}
export function setMouseScale(scaleX, scaleY) {
    nativeSetMouseScale(scaleX, scaleY);
}
export function getMouseWheelMove() {
    return nativeGetMouseWheelMove();
}
export function getMouseWheelMoveV() {
    let result = { x: 0, y: 0 };
    nativeGetMouseWheelMoveV((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function setMouseCursor(cursor) {
    nativeSetMouseCursor(cursor);
}
export function getTouchX() {
    return nativeGetTouchX();
}
export function getTouchY() {
    return nativeGetTouchY();
}
export function getTouchPosition(index) {
    let result = { x: 0, y: 0 };
    nativeGetTouchPosition(index, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getTouchPointId(index) {
    return nativeGetTouchPointId(index);
}
export function getTouchPointCount() {
    return nativeGetTouchPointCount();
}
export function setGesturesEnabled(flags) {
    nativeSetGesturesEnabled(flags);
}
export function isGestureDetected(gesture) {
    return nativeIsGestureDetected(gesture);
}
export function getGestureDetected() {
    return nativeGetGestureDetected();
}
export function getGestureHoldDuration() {
    return nativeGetGestureHoldDuration();
}
export function getGestureDragVector() {
    let result = { x: 0, y: 0 };
    nativeGetGestureDragVector((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getGestureDragAngle() {
    return nativeGetGestureDragAngle();
}
export function getGesturePinchVector() {
    let result = { x: 0, y: 0 };
    nativeGetGesturePinchVector((value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getGesturePinchAngle() {
    return nativeGetGesturePinchAngle();
}
export function setShapesTexture(texture, source) {
    nativeSetShapesTexture(texture.handle, source.x, source.y, source.width, source.height);
}
export function getShapesTexture() {
    return { handle: nativeGetShapesTexture(), kind: "Texture" };
}
export function getShapesTextureRectangle() {
    let result = { x: 0, y: 0, width: 0, height: 0 };
    nativeGetShapesTextureRectangle((value0, value1, value2, value3) => {
        result.x = value0;
        result.y = value1;
        result.width = value2;
        result.height = value3;
    });
    return result;
}
export function drawPixel(posX, posY, color) {
    nativeDrawPixel(posX, posY, color.r, color.g, color.b, color.a);
}
export function drawPixelV(position, color) {
    nativeDrawPixelV(position.x, position.y, color.r, color.g, color.b, color.a);
}
export function drawLine(startPosX, startPosY, endPosX, endPosY, color) {
    nativeDrawLine(startPosX, startPosY, endPosX, endPosY, color.r, color.g, color.b, color.a);
}
export function drawLineV(startPos, endPos, color) {
    nativeDrawLineV(startPos.x, startPos.y, endPos.x, endPos.y, color.r, color.g, color.b, color.a);
}
export function drawLineEx(startPos, endPos, thick, color) {
    nativeDrawLineEx(startPos.x, startPos.y, endPos.x, endPos.y, thick, color.r, color.g, color.b, color.a);
}
export function drawLineStrip(points, pointCount, color) {
    nativeDrawLineStrip((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawLineBezier(startPos, endPos, thick, color) {
    nativeDrawLineBezier(startPos.x, startPos.y, endPos.x, endPos.y, thick, color.r, color.g, color.b, color.a);
}
export function drawLineDashed(startPos, endPos, dashSize, spaceSize, color) {
    nativeDrawLineDashed(startPos.x, startPos.y, endPos.x, endPos.y, dashSize, spaceSize, color.r, color.g, color.b, color.a);
}
export function drawCircle(centerX, centerY, radius, color) {
    nativeDrawCircle(centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function drawCircleV(center, radius, color) {
    nativeDrawCircleV(center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function drawCircleGradient(center, radius, inner, outer) {
    nativeDrawCircleGradient(center.x, center.y, radius, inner.r, inner.g, inner.b, inner.a, outer.r, outer.g, outer.b, outer.a);
}
export function drawCircleSector(center, radius, startAngle, endAngle, segments, color) {
    nativeDrawCircleSector(center.x, center.y, radius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawCircleSectorLines(center, radius, startAngle, endAngle, segments, color) {
    nativeDrawCircleSectorLines(center.x, center.y, radius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawCircleLines(centerX, centerY, radius, color) {
    nativeDrawCircleLines(centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function drawCircleLinesV(center, radius, color) {
    nativeDrawCircleLinesV(center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function drawEllipse(centerX, centerY, radiusH, radiusV, color) {
    nativeDrawEllipse(centerX, centerY, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawEllipseV(center, radiusH, radiusV, color) {
    nativeDrawEllipseV(center.x, center.y, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawEllipseLines(centerX, centerY, radiusH, radiusV, color) {
    nativeDrawEllipseLines(centerX, centerY, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawEllipseLinesV(center, radiusH, radiusV, color) {
    nativeDrawEllipseLinesV(center.x, center.y, radiusH, radiusV, color.r, color.g, color.b, color.a);
}
export function drawRing(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
    nativeDrawRing(center.x, center.y, innerRadius, outerRadius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawRingLines(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
    nativeDrawRingLines(center.x, center.y, innerRadius, outerRadius, startAngle, endAngle, segments, color.r, color.g, color.b, color.a);
}
export function drawRectangle(posX, posY, width, height, color) {
    nativeDrawRectangle(posX, posY, width, height, color.r, color.g, color.b, color.a);
}
export function drawRectangleV(position, size, color) {
    nativeDrawRectangleV(position.x, position.y, size.x, size.y, color.r, color.g, color.b, color.a);
}
export function drawRectangleRec(rec, color) {
    nativeDrawRectangleRec(rec.x, rec.y, rec.width, rec.height, color.r, color.g, color.b, color.a);
}
export function drawRectanglePro(rec, origin, rotation, color) {
    nativeDrawRectanglePro(rec.x, rec.y, rec.width, rec.height, origin.x, origin.y, rotation, color.r, color.g, color.b, color.a);
}
export function drawRectangleGradientV(posX, posY, width, height, top, bottom) {
    nativeDrawRectangleGradientV(posX, posY, width, height, top.r, top.g, top.b, top.a, bottom.r, bottom.g, bottom.b, bottom.a);
}
export function drawRectangleGradientH(posX, posY, width, height, left, right) {
    nativeDrawRectangleGradientH(posX, posY, width, height, left.r, left.g, left.b, left.a, right.r, right.g, right.b, right.a);
}
export function drawRectangleGradientEx(rec, topLeft, bottomLeft, bottomRight, topRight) {
    nativeDrawRectangleGradientEx(rec.x, rec.y, rec.width, rec.height, topLeft.r, topLeft.g, topLeft.b, topLeft.a, bottomLeft.r, bottomLeft.g, bottomLeft.b, bottomLeft.a, bottomRight.r, bottomRight.g, bottomRight.b, bottomRight.a, topRight.r, topRight.g, topRight.b, topRight.a);
}
export function drawRectangleLines(posX, posY, width, height, color) {
    nativeDrawRectangleLines(posX, posY, width, height, color.r, color.g, color.b, color.a);
}
export function drawRectangleLinesEx(rec, lineThick, color) {
    nativeDrawRectangleLinesEx(rec.x, rec.y, rec.width, rec.height, lineThick, color.r, color.g, color.b, color.a);
}
export function drawRectangleRounded(rec, roundness, segments, color) {
    nativeDrawRectangleRounded(rec.x, rec.y, rec.width, rec.height, roundness, segments, color.r, color.g, color.b, color.a);
}
export function drawRectangleRoundedLines(rec, roundness, segments, color) {
    nativeDrawRectangleRoundedLines(rec.x, rec.y, rec.width, rec.height, roundness, segments, color.r, color.g, color.b, color.a);
}
export function drawRectangleRoundedLinesEx(rec, roundness, segments, lineThick, color) {
    nativeDrawRectangleRoundedLinesEx(rec.x, rec.y, rec.width, rec.height, roundness, segments, lineThick, color.r, color.g, color.b, color.a);
}
export function drawTriangle(v1, v2, v3, color) {
    nativeDrawTriangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function drawTriangleLines(v1, v2, v3, color) {
    nativeDrawTriangleLines(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function drawTriangleFan(points, pointCount, color) {
    nativeDrawTriangleFan((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawTriangleStrip(points, pointCount, color) {
    nativeDrawTriangleStrip((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawPoly(center, sides, radius, rotation, color) {
    nativeDrawPoly(center.x, center.y, sides, radius, rotation, color.r, color.g, color.b, color.a);
}
export function drawPolyLines(center, sides, radius, rotation, color) {
    nativeDrawPolyLines(center.x, center.y, sides, radius, rotation, color.r, color.g, color.b, color.a);
}
export function drawPolyLinesEx(center, sides, radius, rotation, lineThick, color) {
    nativeDrawPolyLinesEx(center.x, center.y, sides, radius, rotation, lineThick, color.r, color.g, color.b, color.a);
}
export function drawSplineLinear(points, pointCount, thick, color) {
    nativeDrawSplineLinear((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineBasis(points, pointCount, thick, color) {
    nativeDrawSplineBasis((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineCatmullRom(points, pointCount, thick, color) {
    nativeDrawSplineCatmullRom((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineBezierQuadratic(points, pointCount, thick, color) {
    nativeDrawSplineBezierQuadratic((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineBezierCubic(points, pointCount, thick, color) {
    nativeDrawSplineBezierCubic((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentLinear(p1, p2, thick, color) {
    nativeDrawSplineSegmentLinear(p1.x, p1.y, p2.x, p2.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentBasis(p1, p2, p3, p4, thick, color) {
    nativeDrawSplineSegmentBasis(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentCatmullRom(p1, p2, p3, p4, thick, color) {
    nativeDrawSplineSegmentCatmullRom(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentBezierQuadratic(p1, c2, p3, thick, color) {
    nativeDrawSplineSegmentBezierQuadratic(p1.x, p1.y, c2.x, c2.y, p3.x, p3.y, thick, color.r, color.g, color.b, color.a);
}
export function drawSplineSegmentBezierCubic(p1, c2, c3, p4, thick, color) {
    nativeDrawSplineSegmentBezierCubic(p1.x, p1.y, c2.x, c2.y, c3.x, c3.y, p4.x, p4.y, thick, color.r, color.g, color.b, color.a);
}
export function getSplinePointLinear(startPos, endPos, t) {
    let result = { x: 0, y: 0 };
    nativeGetSplinePointLinear(startPos.x, startPos.y, endPos.x, endPos.y, t, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getSplinePointBasis(p1, p2, p3, p4, t) {
    let result = { x: 0, y: 0 };
    nativeGetSplinePointBasis(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, t, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getSplinePointCatmullRom(p1, p2, p3, p4, t) {
    let result = { x: 0, y: 0 };
    nativeGetSplinePointCatmullRom(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, t, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getSplinePointBezierQuad(p1, c2, p3, t) {
    let result = { x: 0, y: 0 };
    nativeGetSplinePointBezierQuad(p1.x, p1.y, c2.x, c2.y, p3.x, p3.y, t, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getSplinePointBezierCubic(p1, c2, c3, p4, t) {
    let result = { x: 0, y: 0 };
    nativeGetSplinePointBezierCubic(p1.x, p1.y, c2.x, c2.y, c3.x, c3.y, p4.x, p4.y, t, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function checkCollisionRecs(rec1, rec2) {
    return nativeCheckCollisionRecs(rec1.x, rec1.y, rec1.width, rec1.height, rec2.x, rec2.y, rec2.width, rec2.height);
}
export function checkCollisionCircles(center1, radius1, center2, radius2) {
    return nativeCheckCollisionCircles(center1.x, center1.y, radius1, center2.x, center2.y, radius2);
}
export function checkCollisionCircleRec(center, radius, rec) {
    return nativeCheckCollisionCircleRec(center.x, center.y, radius, rec.x, rec.y, rec.width, rec.height);
}
export function checkCollisionCircleLine(center, radius, p1, p2) {
    return nativeCheckCollisionCircleLine(center.x, center.y, radius, p1.x, p1.y, p2.x, p2.y);
}
export function checkCollisionPointRec(point, rec) {
    return nativeCheckCollisionPointRec(point.x, point.y, rec.x, rec.y, rec.width, rec.height);
}
export function checkCollisionPointCircle(point, center, radius) {
    return nativeCheckCollisionPointCircle(point.x, point.y, center.x, center.y, radius);
}
export function checkCollisionPointTriangle(point, p1, p2, p3) {
    return nativeCheckCollisionPointTriangle(point.x, point.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
}
export function checkCollisionPointLine(point, p1, p2, threshold) {
    return nativeCheckCollisionPointLine(point.x, point.y, p1.x, p1.y, p2.x, p2.y, threshold);
}
export function checkCollisionPointPoly(point, points, pointCount) {
    return nativeCheckCollisionPointPoly(point.x, point.y, (index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount);
}
export function getCollisionRec(rec1, rec2) {
    let result = { x: 0, y: 0, width: 0, height: 0 };
    nativeGetCollisionRec(rec1.x, rec1.y, rec1.width, rec1.height, rec2.x, rec2.y, rec2.width, rec2.height, (value0, value1, value2, value3) => {
        result.x = value0;
        result.y = value1;
        result.width = value2;
        result.height = value3;
    });
    return result;
}
export function loadImage(fileName) {
    return { handle: nativeLoadImage(fileName, true), kind: "Image" };
}
export function loadImageRaw(fileName, width, height, format, headerSize) {
    return { handle: nativeLoadImageRaw(fileName, true, width, height, format, headerSize), kind: "Image" };
}
export function loadImageFromMemory(fileType, fileData, dataSize) {
    return { handle: nativeLoadImageFromMemory(fileType, true, fileData, dataSize), kind: "Image" };
}
export function loadImageFromTexture(texture) {
    return { handle: nativeLoadImageFromTexture(texture.handle), kind: "Image" };
}
export function loadImageFromScreen() {
    return { handle: nativeLoadImageFromScreen(), kind: "Image" };
}
export function isImageValid(image) {
    return nativeIsImageValid(image.handle);
}
export function unloadImage(image) {
    nativeUnloadImage(image.handle);
}
export function exportImage(image, fileName) {
    return nativeExportImage(image.handle, fileName, true);
}
export function exportImageAsCode(image, fileName) {
    return nativeExportImageAsCode(image.handle, fileName, true);
}
export function genImageColor(width, height, color) {
    return { handle: nativeGenImageColor(width, height, color.r, color.g, color.b, color.a), kind: "Image" };
}
export function genImageGradientLinear(width, height, direction, start, end) {
    return { handle: nativeGenImageGradientLinear(width, height, direction, start.r, start.g, start.b, start.a, end.r, end.g, end.b, end.a), kind: "Image" };
}
export function genImageGradientRadial(width, height, density, inner, outer) {
    return { handle: nativeGenImageGradientRadial(width, height, density, inner.r, inner.g, inner.b, inner.a, outer.r, outer.g, outer.b, outer.a), kind: "Image" };
}
export function genImageGradientSquare(width, height, density, inner, outer) {
    return { handle: nativeGenImageGradientSquare(width, height, density, inner.r, inner.g, inner.b, inner.a, outer.r, outer.g, outer.b, outer.a), kind: "Image" };
}
export function genImageChecked(width, height, checksX, checksY, col1, col2) {
    return { handle: nativeGenImageChecked(width, height, checksX, checksY, col1.r, col1.g, col1.b, col1.a, col2.r, col2.g, col2.b, col2.a), kind: "Image" };
}
export function genImageWhiteNoise(width, height, factor) {
    return { handle: nativeGenImageWhiteNoise(width, height, factor), kind: "Image" };
}
export function genImagePerlinNoise(width, height, offsetX, offsetY, scale) {
    return { handle: nativeGenImagePerlinNoise(width, height, offsetX, offsetY, scale), kind: "Image" };
}
export function genImageCellular(width, height, tileSize) {
    return { handle: nativeGenImageCellular(width, height, tileSize), kind: "Image" };
}
export function genImageText(width, height, text) {
    return { handle: nativeGenImageText(width, height, text, true), kind: "Image" };
}
export function imageCopy(image) {
    return { handle: nativeImageCopy(image.handle), kind: "Image" };
}
export function imageFromImage(image, rec) {
    return { handle: nativeImageFromImage(image.handle, rec.x, rec.y, rec.width, rec.height), kind: "Image" };
}
export function imageFromChannel(image, selectedChannel) {
    return { handle: nativeImageFromChannel(image.handle, selectedChannel), kind: "Image" };
}
export function imageText(text, fontSize, color) {
    return { handle: nativeImageText(text, true, fontSize, color.r, color.g, color.b, color.a), kind: "Image" };
}
export function imageTextEx(font, text, fontSize, spacing, tint) {
    return { handle: nativeImageTextEx(font.handle, text, true, fontSize, spacing, tint.r, tint.g, tint.b, tint.a), kind: "Image" };
}
export function imageFormat(image, newFormat) {
    nativeImageFormat(image.handle, newFormat);
}
export function imageToPOT(image, fill) {
    nativeImageToPOT(image.handle, fill.r, fill.g, fill.b, fill.a);
}
export function imageCrop(image, crop) {
    nativeImageCrop(image.handle, crop.x, crop.y, crop.width, crop.height);
}
export function imageAlphaCrop(image, threshold) {
    nativeImageAlphaCrop(image.handle, threshold);
}
export function imageAlphaClear(image, color, threshold) {
    nativeImageAlphaClear(image.handle, color.r, color.g, color.b, color.a, threshold);
}
export function imageAlphaMask(image, alphaMask) {
    nativeImageAlphaMask(image.handle, alphaMask.handle);
}
export function imageAlphaPremultiply(image) {
    nativeImageAlphaPremultiply(image.handle);
}
export function imageBlurGaussian(image, blurSize) {
    nativeImageBlurGaussian(image.handle, blurSize);
}
export function imageKernelConvolution(image, kernel, kernelSize) {
    nativeImageKernelConvolution(image.handle, (index, component) => { const item = kernel[index]; if (item === undefined)
        return 0; return item; }, kernelSize);
}
export function imageResize(image, newWidth, newHeight) {
    nativeImageResize(image.handle, newWidth, newHeight);
}
export function imageResizeNN(image, newWidth, newHeight) {
    nativeImageResizeNN(image.handle, newWidth, newHeight);
}
export function imageResizeCanvas(image, newWidth, newHeight, offsetX, offsetY, fill) {
    nativeImageResizeCanvas(image.handle, newWidth, newHeight, offsetX, offsetY, fill.r, fill.g, fill.b, fill.a);
}
export function imageMipmaps(image) {
    nativeImageMipmaps(image.handle);
}
export function imageDither(image, rBpp, gBpp, bBpp, aBpp) {
    nativeImageDither(image.handle, rBpp, gBpp, bBpp, aBpp);
}
export function imageFlipVertical(image) {
    nativeImageFlipVertical(image.handle);
}
export function imageFlipHorizontal(image) {
    nativeImageFlipHorizontal(image.handle);
}
export function imageRotate(image, degrees) {
    nativeImageRotate(image.handle, degrees);
}
export function imageRotateCW(image) {
    nativeImageRotateCW(image.handle);
}
export function imageRotateCCW(image) {
    nativeImageRotateCCW(image.handle);
}
export function imageColorTint(image, color) {
    nativeImageColorTint(image.handle, color.r, color.g, color.b, color.a);
}
export function imageColorInvert(image) {
    nativeImageColorInvert(image.handle);
}
export function imageColorGrayscale(image) {
    nativeImageColorGrayscale(image.handle);
}
export function imageColorContrast(image, contrast) {
    nativeImageColorContrast(image.handle, contrast);
}
export function imageColorBrightness(image, brightness) {
    nativeImageColorBrightness(image.handle, brightness);
}
export function imageColorReplace(image, color, replace) {
    nativeImageColorReplace(image.handle, color.r, color.g, color.b, color.a, replace.r, replace.g, replace.b, replace.a);
}
export function getImageAlphaBorder(image, threshold) {
    let result = { x: 0, y: 0, width: 0, height: 0 };
    nativeGetImageAlphaBorder(image.handle, threshold, (value0, value1, value2, value3) => {
        result.x = value0;
        result.y = value1;
        result.width = value2;
        result.height = value3;
    });
    return result;
}
export function getImageColor(image, x, y) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeGetImageColor(image.handle, x, y, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function imageClearBackground(dst, color) {
    nativeImageClearBackground(dst.handle, color.r, color.g, color.b, color.a);
}
export function imageDrawPixel(dst, posX, posY, color) {
    nativeImageDrawPixel(dst.handle, posX, posY, color.r, color.g, color.b, color.a);
}
export function imageDrawPixelV(dst, position, color) {
    nativeImageDrawPixelV(dst.handle, position.x, position.y, color.r, color.g, color.b, color.a);
}
export function imageDrawLine(dst, startPosX, startPosY, endPosX, endPosY, color) {
    nativeImageDrawLine(dst.handle, startPosX, startPosY, endPosX, endPosY, color.r, color.g, color.b, color.a);
}
export function imageDrawLineV(dst, start, end, color) {
    nativeImageDrawLineV(dst.handle, start.x, start.y, end.x, end.y, color.r, color.g, color.b, color.a);
}
export function imageDrawLineEx(dst, start, end, thick, color) {
    nativeImageDrawLineEx(dst.handle, start.x, start.y, end.x, end.y, thick, color.r, color.g, color.b, color.a);
}
export function imageDrawCircle(dst, centerX, centerY, radius, color) {
    nativeImageDrawCircle(dst.handle, centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawCircleV(dst, center, radius, color) {
    nativeImageDrawCircleV(dst.handle, center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawCircleLines(dst, centerX, centerY, radius, color) {
    nativeImageDrawCircleLines(dst.handle, centerX, centerY, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawCircleLinesV(dst, center, radius, color) {
    nativeImageDrawCircleLinesV(dst.handle, center.x, center.y, radius, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangle(dst, posX, posY, width, height, color) {
    nativeImageDrawRectangle(dst.handle, posX, posY, width, height, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangleV(dst, position, size, color) {
    nativeImageDrawRectangleV(dst.handle, position.x, position.y, size.x, size.y, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangleRec(dst, rec, color) {
    nativeImageDrawRectangleRec(dst.handle, rec.x, rec.y, rec.width, rec.height, color.r, color.g, color.b, color.a);
}
export function imageDrawRectangleLines(dst, rec, thick, color) {
    nativeImageDrawRectangleLines(dst.handle, rec.x, rec.y, rec.width, rec.height, thick, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangle(dst, v1, v2, v3, color) {
    nativeImageDrawTriangle(dst.handle, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangleEx(dst, v1, v2, v3, c1, c2, c3) {
    nativeImageDrawTriangleEx(dst.handle, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, c1.r, c1.g, c1.b, c1.a, c2.r, c2.g, c2.b, c2.a, c3.r, c3.g, c3.b, c3.a);
}
export function imageDrawTriangleLines(dst, v1, v2, v3, color) {
    nativeImageDrawTriangleLines(dst.handle, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangleFan(dst, points, pointCount, color) {
    nativeImageDrawTriangleFan(dst.handle, (index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, color.r, color.g, color.b, color.a);
}
export function imageDrawTriangleStrip(dst, points, pointCount, color) {
    nativeImageDrawTriangleStrip(dst.handle, (index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        default: return 0;
    } }, pointCount, color.r, color.g, color.b, color.a);
}
export function imageDraw(dst, src, srcRec, dstRec, tint) {
    nativeImageDraw(dst.handle, src.handle, srcRec.x, srcRec.y, srcRec.width, srcRec.height, dstRec.x, dstRec.y, dstRec.width, dstRec.height, tint.r, tint.g, tint.b, tint.a);
}
export function imageDrawText(dst, text, posX, posY, fontSize, color) {
    nativeImageDrawText(dst.handle, text, true, posX, posY, fontSize, color.r, color.g, color.b, color.a);
}
export function imageDrawTextEx(dst, font, text, position, fontSize, spacing, tint) {
    nativeImageDrawTextEx(dst.handle, font.handle, text, true, position.x, position.y, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function loadTexture(fileName) {
    return { handle: nativeLoadTexture(fileName, true), kind: "Texture" };
}
export function loadTextureFromImage(image) {
    return { handle: nativeLoadTextureFromImage(image.handle), kind: "Texture" };
}
export function loadTextureCubemap(image, layout) {
    return { handle: nativeLoadTextureCubemap(image.handle, layout), kind: "Texture" };
}
export function loadRenderTexture(width, height) {
    return { handle: nativeLoadRenderTexture(width, height), kind: "RenderTexture" };
}
export function isTextureValid(texture) {
    return nativeIsTextureValid(texture.handle);
}
export function unloadTexture(texture) {
    nativeUnloadTexture(texture.handle);
}
export function isRenderTextureValid(target) {
    return nativeIsRenderTextureValid(target.handle);
}
export function unloadRenderTexture(target) {
    nativeUnloadRenderTexture(target.handle);
}
export function updateTexture(texture, pixels) {
    nativeUpdateTexture(texture.handle, pixels);
}
export function updateTextureRec(texture, rec, pixels) {
    nativeUpdateTextureRec(texture.handle, rec.x, rec.y, rec.width, rec.height, pixels);
}
export function genTextureMipmaps(texture) {
    nativeGenTextureMipmaps(texture.handle);
}
export function setTextureFilter(texture, filter) {
    nativeSetTextureFilter(texture.handle, filter);
}
export function setTextureWrap(texture, wrap) {
    nativeSetTextureWrap(texture.handle, wrap);
}
export function drawTexture(texture, posX, posY, tint) {
    nativeDrawTexture(texture.handle, posX, posY, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureV(texture, position, tint) {
    nativeDrawTextureV(texture.handle, position.x, position.y, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureEx(texture, position, rotation, scale, tint) {
    nativeDrawTextureEx(texture.handle, position.x, position.y, rotation, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureRec(texture, source, position, tint) {
    nativeDrawTextureRec(texture.handle, source.x, source.y, source.width, source.height, position.x, position.y, tint.r, tint.g, tint.b, tint.a);
}
export function drawTexturePro(texture, source, dest, origin, rotation, tint) {
    nativeDrawTexturePro(texture.handle, source.x, source.y, source.width, source.height, dest.x, dest.y, dest.width, dest.height, origin.x, origin.y, rotation, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextureNPatch(texture, nPatchInfo, dest, origin, rotation, tint) {
    nativeDrawTextureNPatch(texture.handle, nPatchInfo.source.x, nPatchInfo.source.y, nPatchInfo.source.width, nPatchInfo.source.height, nPatchInfo.left, nPatchInfo.top, nPatchInfo.right, nPatchInfo.bottom, nPatchInfo.layout, dest.x, dest.y, dest.width, dest.height, origin.x, origin.y, rotation, tint.r, tint.g, tint.b, tint.a);
}
export function colorIsEqual(col1, col2) {
    return nativeColorIsEqual(col1.r, col1.g, col1.b, col1.a, col2.r, col2.g, col2.b, col2.a);
}
export function fade(color, alpha) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeFade(color.r, color.g, color.b, color.a, alpha, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorToInt(color) {
    return nativeColorToInt(color.r, color.g, color.b, color.a);
}
export function colorNormalize(color) {
    let result = { x: 0, y: 0, z: 0, w: 0 };
    nativeColorNormalize(color.r, color.g, color.b, color.a, (value0, value1, value2, value3) => {
        result.x = value0;
        result.y = value1;
        result.z = value2;
        result.w = value3;
    });
    return result;
}
export function colorFromNormalized(normalized) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorFromNormalized(normalized.x, normalized.y, normalized.z, normalized.w, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorToHSV(color) {
    let result = { x: 0, y: 0, z: 0 };
    nativeColorToHSV(color.r, color.g, color.b, color.a, (value0, value1, value2) => {
        result.x = value0;
        result.y = value1;
        result.z = value2;
    });
    return result;
}
export function colorFromHSV(hue, saturation, value) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorFromHSV(hue, saturation, value, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorTint(color, tint) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorTint(color.r, color.g, color.b, color.a, tint.r, tint.g, tint.b, tint.a, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorBrightness(color, factor) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorBrightness(color.r, color.g, color.b, color.a, factor, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorContrast(color, contrast) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorContrast(color.r, color.g, color.b, color.a, contrast, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorAlpha(color, alpha) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorAlpha(color.r, color.g, color.b, color.a, alpha, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorAlphaBlend(dst, src, tint) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorAlphaBlend(dst.r, dst.g, dst.b, dst.a, src.r, src.g, src.b, src.a, tint.r, tint.g, tint.b, tint.a, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function colorLerp(color1, color2, factor) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeColorLerp(color1.r, color1.g, color1.b, color1.a, color2.r, color2.g, color2.b, color2.a, factor, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function getColor(hexValue) {
    let result = { r: 0, g: 0, b: 0, a: 0 };
    nativeGetColor(hexValue, (value0, value1, value2, value3) => {
        result.r = value0;
        result.g = value1;
        result.b = value2;
        result.a = value3;
    });
    return result;
}
export function getPixelDataSize(width, height, format) {
    return nativeGetPixelDataSize(width, height, format);
}
export function getFontDefault() {
    return { handle: nativeGetFontDefault(), kind: "Font" };
}
export function loadFont(fileName) {
    return { handle: nativeLoadFont(fileName, true), kind: "Font" };
}
export function loadFontEx(fileName, fontSize, codepoints, codepointCount) {
    return { handle: nativeLoadFontEx(fileName, true, fontSize, (index, component) => { const item = codepoints[index]; if (item === undefined)
            return 0; return item; }, codepointCount), kind: "Font" };
}
export function loadFontFromImage(image, key, firstChar) {
    return { handle: nativeLoadFontFromImage(image.handle, key.r, key.g, key.b, key.a, firstChar), kind: "Font" };
}
export function loadFontFromMemory(fileType, fileData, dataSize, fontSize, codepoints, codepointCount) {
    return { handle: nativeLoadFontFromMemory(fileType, true, fileData, dataSize, fontSize, (index, component) => { const item = codepoints[index]; if (item === undefined)
            return 0; return item; }, codepointCount), kind: "Font" };
}
export function isFontValid(font) {
    return nativeIsFontValid(font.handle);
}
export function unloadFontData(glyphs, glyphCount) {
    nativeUnloadFontData(glyphs.handle, glyphCount);
}
export function unloadFont(font) {
    nativeUnloadFont(font.handle);
}
export function exportFontAsCode(font, fileName) {
    return nativeExportFontAsCode(font.handle, fileName, true);
}
export function drawFPS(posX, posY) {
    nativeDrawFPS(posX, posY);
}
export function drawText(text, posX, posY, fontSize, color) {
    nativeDrawText(text, true, posX, posY, fontSize, color.r, color.g, color.b, color.a);
}
export function drawTextEx(font, text, position, fontSize, spacing, tint) {
    nativeDrawTextEx(font.handle, text, true, position.x, position.y, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextPro(font, text, position, origin, rotation, fontSize, spacing, tint) {
    nativeDrawTextPro(font.handle, text, true, position.x, position.y, origin.x, origin.y, rotation, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextCodepoint(font, codepoint, position, fontSize, tint) {
    nativeDrawTextCodepoint(font.handle, codepoint, position.x, position.y, fontSize, tint.r, tint.g, tint.b, tint.a);
}
export function drawTextCodepoints(font, codepoints, codepointCount, position, fontSize, spacing, tint) {
    nativeDrawTextCodepoints(font.handle, (index, component) => { const item = codepoints[index]; if (item === undefined)
        return 0; return item; }, codepointCount, position.x, position.y, fontSize, spacing, tint.r, tint.g, tint.b, tint.a);
}
export function setTextLineSpacing(spacing) {
    nativeSetTextLineSpacing(spacing);
}
export function measureText(text, fontSize) {
    return nativeMeasureText(text, true, fontSize);
}
export function measureTextEx(font, text, fontSize, spacing) {
    let result = { x: 0, y: 0 };
    nativeMeasureTextEx(font.handle, text, true, fontSize, spacing, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function measureTextCodepoints(font, codepoints, length, fontSize, spacing) {
    let result = { x: 0, y: 0 };
    nativeMeasureTextCodepoints(font.handle, (index, component) => { const item = codepoints[index]; if (item === undefined)
        return 0; return item; }, length, fontSize, spacing, (value0, value1) => {
        result.x = value0;
        result.y = value1;
    });
    return result;
}
export function getGlyphIndex(font, codepoint) {
    return nativeGetGlyphIndex(font.handle, codepoint);
}
export function getGlyphInfo(font, codepoint) {
    return { handle: nativeGetGlyphInfo(font.handle, codepoint), kind: "GlyphInfo" };
}
export function getGlyphAtlasRec(font, codepoint) {
    let result = { x: 0, y: 0, width: 0, height: 0 };
    nativeGetGlyphAtlasRec(font.handle, codepoint, (value0, value1, value2, value3) => {
        result.x = value0;
        result.y = value1;
        result.width = value2;
        result.height = value3;
    });
    return result;
}
export function loadUTF8(codepoints, length) {
    let result = null;
    nativeLoadUTF8((index, component) => { const item = codepoints[index]; if (item === undefined)
        return 0; return item; }, length, (value) => { result = value; });
    return result;
}
export function getCodepointCount(text) {
    return nativeGetCodepointCount(text, true);
}
export function textCopy(dst, src) {
    return nativeTextCopy(dst, true, src, true);
}
export function textIsEqual(text1, text2) {
    return nativeTextIsEqual(text1, true, text2, true);
}
export function textLength(text) {
    return nativeTextLength(text, true);
}
export function textSubtext(text, position, length) {
    let result = null;
    nativeTextSubtext(text, true, position, length, (value) => { result = value; });
    return result;
}
export function textRemoveSpaces(text) {
    let result = null;
    nativeTextRemoveSpaces(text, true, (value) => { result = value; });
    return result;
}
export function getTextBetween(text, begin, end) {
    let result = null;
    nativeGetTextBetween(text, true, begin, true, end, true, (value) => { result = value; });
    return result;
}
export function textReplace(text, search, replacement) {
    let result = null;
    nativeTextReplace(text, true, search, true, replacement, true, (value) => { result = value; });
    return result;
}
export function textReplaceAlloc(text, search, replacement) {
    let result = null;
    nativeTextReplaceAlloc(text, true, search, true, replacement, true, (value) => { result = value; });
    return result;
}
export function textReplaceBetween(text, begin, end, replacement) {
    let result = null;
    nativeTextReplaceBetween(text, true, begin, true, end, true, replacement, true, (value) => { result = value; });
    return result;
}
export function textReplaceBetweenAlloc(text, begin, end, replacement) {
    let result = null;
    nativeTextReplaceBetweenAlloc(text, true, begin, true, end, true, replacement, true, (value) => { result = value; });
    return result;
}
export function textInsert(text, insert, position) {
    let result = null;
    nativeTextInsert(text, true, insert, true, position, (value) => { result = value; });
    return result;
}
export function textInsertAlloc(text, insert, position) {
    let result = null;
    nativeTextInsertAlloc(text, true, insert, true, position, (value) => { result = value; });
    return result;
}
export function textFindIndex(text, search) {
    return nativeTextFindIndex(text, true, search, true);
}
export function textToUpper(text) {
    let result = null;
    nativeTextToUpper(text, true, (value) => { result = value; });
    return result;
}
export function textToLower(text) {
    let result = null;
    nativeTextToLower(text, true, (value) => { result = value; });
    return result;
}
export function textToPascal(text) {
    let result = null;
    nativeTextToPascal(text, true, (value) => { result = value; });
    return result;
}
export function textToSnake(text) {
    let result = null;
    nativeTextToSnake(text, true, (value) => { result = value; });
    return result;
}
export function textToCamel(text) {
    let result = null;
    nativeTextToCamel(text, true, (value) => { result = value; });
    return result;
}
export function textToInteger(text) {
    return nativeTextToInteger(text, true);
}
export function textToFloat(text) {
    return nativeTextToFloat(text, true);
}
export function drawLine3D(startPos, endPos, color) {
    nativeDrawLine3D(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, color.r, color.g, color.b, color.a);
}
export function drawPoint3D(position, color) {
    nativeDrawPoint3D(position.x, position.y, position.z, color.r, color.g, color.b, color.a);
}
export function drawCircle3D(center, radius, rotationAxis, rotationAngle, color) {
    nativeDrawCircle3D(center.x, center.y, center.z, radius, rotationAxis.x, rotationAxis.y, rotationAxis.z, rotationAngle, color.r, color.g, color.b, color.a);
}
export function drawTriangle3D(v1, v2, v3, color) {
    nativeDrawTriangle3D(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z, color.r, color.g, color.b, color.a);
}
export function drawTriangleStrip3D(points, pointCount, color) {
    nativeDrawTriangleStrip3D((index, component) => { const item = points[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.x;
        case 1: return item.y;
        case 2: return item.z;
        default: return 0;
    } }, pointCount, color.r, color.g, color.b, color.a);
}
export function drawCube(position, width, height, length, color) {
    nativeDrawCube(position.x, position.y, position.z, width, height, length, color.r, color.g, color.b, color.a);
}
export function drawCubeV(position, size, color) {
    nativeDrawCubeV(position.x, position.y, position.z, size.x, size.y, size.z, color.r, color.g, color.b, color.a);
}
export function drawCubeWires(position, width, height, length, color) {
    nativeDrawCubeWires(position.x, position.y, position.z, width, height, length, color.r, color.g, color.b, color.a);
}
export function drawCubeWiresV(position, size, color) {
    nativeDrawCubeWiresV(position.x, position.y, position.z, size.x, size.y, size.z, color.r, color.g, color.b, color.a);
}
export function drawSphere(centerPos, radius, color) {
    nativeDrawSphere(centerPos.x, centerPos.y, centerPos.z, radius, color.r, color.g, color.b, color.a);
}
export function drawSphereEx(centerPos, radius, rings, slices, color) {
    nativeDrawSphereEx(centerPos.x, centerPos.y, centerPos.z, radius, rings, slices, color.r, color.g, color.b, color.a);
}
export function drawSphereWires(centerPos, radius, rings, slices, color) {
    nativeDrawSphereWires(centerPos.x, centerPos.y, centerPos.z, radius, rings, slices, color.r, color.g, color.b, color.a);
}
export function drawCylinder(position, radiusTop, radiusBottom, height, slices, color) {
    nativeDrawCylinder(position.x, position.y, position.z, radiusTop, radiusBottom, height, slices, color.r, color.g, color.b, color.a);
}
export function drawCylinderEx(startPos, endPos, startRadius, endRadius, sides, color) {
    nativeDrawCylinderEx(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, startRadius, endRadius, sides, color.r, color.g, color.b, color.a);
}
export function drawCylinderWires(position, radiusTop, radiusBottom, height, slices, color) {
    nativeDrawCylinderWires(position.x, position.y, position.z, radiusTop, radiusBottom, height, slices, color.r, color.g, color.b, color.a);
}
export function drawCylinderWiresEx(startPos, endPos, startRadius, endRadius, sides, color) {
    nativeDrawCylinderWiresEx(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, startRadius, endRadius, sides, color.r, color.g, color.b, color.a);
}
export function drawCapsule(startPos, endPos, radius, slices, rings, color) {
    nativeDrawCapsule(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, radius, slices, rings, color.r, color.g, color.b, color.a);
}
export function drawCapsuleWires(startPos, endPos, radius, slices, rings, color) {
    nativeDrawCapsuleWires(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z, radius, slices, rings, color.r, color.g, color.b, color.a);
}
export function drawPlane(centerPos, size, color) {
    nativeDrawPlane(centerPos.x, centerPos.y, centerPos.z, size.x, size.y, color.r, color.g, color.b, color.a);
}
export function drawRay(ray, color) {
    nativeDrawRay(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, color.r, color.g, color.b, color.a);
}
export function drawGrid(slices, spacing) {
    nativeDrawGrid(slices, spacing);
}
export function loadModel(fileName) {
    return { handle: nativeLoadModel(fileName, true), kind: "Model" };
}
export function loadModelFromMesh(mesh) {
    return { handle: nativeLoadModelFromMesh(mesh.handle), kind: "Model" };
}
export function isModelValid(model) {
    return nativeIsModelValid(model.handle);
}
export function unloadModel(model) {
    nativeUnloadModel(model.handle);
}
export function getModelBoundingBox(model) {
    let result = { min: { x: 0, y: 0, z: 0 }, max: { x: 0, y: 0, z: 0 } };
    nativeGetModelBoundingBox(model.handle, (value0, value1, value2, value3, value4, value5) => {
        result.min.x = value0;
        result.min.y = value1;
        result.min.z = value2;
        result.max.x = value3;
        result.max.y = value4;
        result.max.z = value5;
    });
    return result;
}
export function drawModel(model, position, scale, tint) {
    nativeDrawModel(model.handle, position.x, position.y, position.z, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawModelEx(model, position, rotationAxis, rotationAngle, scale, tint) {
    nativeDrawModelEx(model.handle, position.x, position.y, position.z, rotationAxis.x, rotationAxis.y, rotationAxis.z, rotationAngle, scale.x, scale.y, scale.z, tint.r, tint.g, tint.b, tint.a);
}
export function drawModelWires(model, position, scale, tint) {
    nativeDrawModelWires(model.handle, position.x, position.y, position.z, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawModelWiresEx(model, position, rotationAxis, rotationAngle, scale, tint) {
    nativeDrawModelWiresEx(model.handle, position.x, position.y, position.z, rotationAxis.x, rotationAxis.y, rotationAxis.z, rotationAngle, scale.x, scale.y, scale.z, tint.r, tint.g, tint.b, tint.a);
}
export function drawBoundingBox(box, color) {
    nativeDrawBoundingBox(box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, color.r, color.g, color.b, color.a);
}
export function drawBillboard(camera, texture, position, scale, tint) {
    nativeDrawBillboard(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, texture.handle, position.x, position.y, position.z, scale, tint.r, tint.g, tint.b, tint.a);
}
export function drawBillboardRec(camera, texture, source, position, size, tint) {
    nativeDrawBillboardRec(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, texture.handle, source.x, source.y, source.width, source.height, position.x, position.y, position.z, size.x, size.y, tint.r, tint.g, tint.b, tint.a);
}
export function drawBillboardPro(camera, texture, source, position, up, size, origin, rotation, tint) {
    nativeDrawBillboardPro(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, texture.handle, source.x, source.y, source.width, source.height, position.x, position.y, position.z, up.x, up.y, up.z, size.x, size.y, origin.x, origin.y, rotation, tint.r, tint.g, tint.b, tint.a);
}
export function uploadMesh(mesh, dynamic) {
    nativeUploadMesh(mesh.handle, dynamic);
}
export function updateMeshBuffer(mesh, index, data, dataSize, offset) {
    nativeUpdateMeshBuffer(mesh.handle, index, data, dataSize, offset);
}
export function unloadMesh(mesh) {
    nativeUnloadMesh(mesh.handle);
}
export function drawMesh(mesh, material, transform) {
    nativeDrawMesh(mesh.handle, material.handle, transform.m0, transform.m4, transform.m8, transform.m12, transform.m1, transform.m5, transform.m9, transform.m13, transform.m2, transform.m6, transform.m10, transform.m14, transform.m3, transform.m7, transform.m11, transform.m15);
}
export function drawMeshInstanced(mesh, material, transforms, instances) {
    nativeDrawMeshInstanced(mesh.handle, material.handle, (index, component) => { const item = transforms[index]; if (item === undefined)
        return 0; switch (component) {
        case 0: return item.m0;
        case 1: return item.m4;
        case 2: return item.m8;
        case 3: return item.m12;
        case 4: return item.m1;
        case 5: return item.m5;
        case 6: return item.m9;
        case 7: return item.m13;
        case 8: return item.m2;
        case 9: return item.m6;
        case 10: return item.m10;
        case 11: return item.m14;
        case 12: return item.m3;
        case 13: return item.m7;
        case 14: return item.m11;
        case 15: return item.m15;
        default: return 0;
    } }, instances);
}
export function getMeshBoundingBox(mesh) {
    let result = { min: { x: 0, y: 0, z: 0 }, max: { x: 0, y: 0, z: 0 } };
    nativeGetMeshBoundingBox(mesh.handle, (value0, value1, value2, value3, value4, value5) => {
        result.min.x = value0;
        result.min.y = value1;
        result.min.z = value2;
        result.max.x = value3;
        result.max.y = value4;
        result.max.z = value5;
    });
    return result;
}
export function genMeshTangents(mesh) {
    nativeGenMeshTangents(mesh.handle);
}
export function exportMesh(mesh, fileName) {
    return nativeExportMesh(mesh.handle, fileName, true);
}
export function exportMeshAsCode(mesh, fileName) {
    return nativeExportMeshAsCode(mesh.handle, fileName, true);
}
export function genMeshPoly(sides, radius) {
    return { handle: nativeGenMeshPoly(sides, radius), kind: "Mesh" };
}
export function genMeshPlane(width, length, resX, resZ) {
    return { handle: nativeGenMeshPlane(width, length, resX, resZ), kind: "Mesh" };
}
export function genMeshCube(width, height, length) {
    return { handle: nativeGenMeshCube(width, height, length), kind: "Mesh" };
}
export function genMeshSphere(radius, rings, slices) {
    return { handle: nativeGenMeshSphere(radius, rings, slices), kind: "Mesh" };
}
export function genMeshHemiSphere(radius, rings, slices) {
    return { handle: nativeGenMeshHemiSphere(radius, rings, slices), kind: "Mesh" };
}
export function genMeshCylinder(radius, height, slices) {
    return { handle: nativeGenMeshCylinder(radius, height, slices), kind: "Mesh" };
}
export function genMeshCone(radius, height, slices) {
    return { handle: nativeGenMeshCone(radius, height, slices), kind: "Mesh" };
}
export function genMeshTorus(radius, size, radSeg, sides) {
    return { handle: nativeGenMeshTorus(radius, size, radSeg, sides), kind: "Mesh" };
}
export function genMeshKnot(radius, size, radSeg, sides) {
    return { handle: nativeGenMeshKnot(radius, size, radSeg, sides), kind: "Mesh" };
}
export function genMeshHeightmap(heightmap, size) {
    return { handle: nativeGenMeshHeightmap(heightmap.handle, size.x, size.y, size.z), kind: "Mesh" };
}
export function genMeshCubicmap(cubicmap, cubeSize) {
    return { handle: nativeGenMeshCubicmap(cubicmap.handle, cubeSize.x, cubeSize.y, cubeSize.z), kind: "Mesh" };
}
export function loadMaterialDefault() {
    return { handle: nativeLoadMaterialDefault(), kind: "Material" };
}
export function isMaterialValid(material) {
    return nativeIsMaterialValid(material.handle);
}
export function unloadMaterial(material) {
    nativeUnloadMaterial(material.handle);
}
export function setMaterialTexture(material, mapType, texture) {
    nativeSetMaterialTexture(material.handle, mapType, texture.handle);
}
export function setModelMeshMaterial(model, meshId, materialId) {
    nativeSetModelMeshMaterial(model.handle, meshId, materialId);
}
export function updateModelAnimation(model, anim, frame) {
    nativeUpdateModelAnimation(model.handle, anim.handle, frame);
}
export function updateModelAnimationEx(model, animA, frameA, animB, frameB, blend) {
    nativeUpdateModelAnimationEx(model.handle, animA.handle, frameA, animB.handle, frameB, blend);
}
export function unloadModelAnimations(animations, animCount) {
    nativeUnloadModelAnimations(animations.handle, animCount);
}
export function isModelAnimationValid(model, anim) {
    return nativeIsModelAnimationValid(model.handle, anim.handle);
}
export function checkCollisionSpheres(center1, radius1, center2, radius2) {
    return nativeCheckCollisionSpheres(center1.x, center1.y, center1.z, radius1, center2.x, center2.y, center2.z, radius2);
}
export function checkCollisionBoxes(box1, box2) {
    return nativeCheckCollisionBoxes(box1.min.x, box1.min.y, box1.min.z, box1.max.x, box1.max.y, box1.max.z, box2.min.x, box2.min.y, box2.min.z, box2.max.x, box2.max.y, box2.max.z);
}
export function checkCollisionBoxSphere(box, center, radius) {
    return nativeCheckCollisionBoxSphere(box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, center.x, center.y, center.z, radius);
}
export function getRayCollisionSphere(ray, center, radius) {
    let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 }, normal: { x: 0, y: 0, z: 0 } };
    nativeGetRayCollisionSphere(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, center.x, center.y, center.z, radius, (value0, value1, value2, value3, value4, value5, value6, value7) => {
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
export function getRayCollisionBox(ray, box) {
    let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 }, normal: { x: 0, y: 0, z: 0 } };
    nativeGetRayCollisionBox(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, (value0, value1, value2, value3, value4, value5, value6, value7) => {
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
export function getRayCollisionMesh(ray, mesh, transform) {
    let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 }, normal: { x: 0, y: 0, z: 0 } };
    nativeGetRayCollisionMesh(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, mesh.handle, transform.m0, transform.m4, transform.m8, transform.m12, transform.m1, transform.m5, transform.m9, transform.m13, transform.m2, transform.m6, transform.m10, transform.m14, transform.m3, transform.m7, transform.m11, transform.m15, (value0, value1, value2, value3, value4, value5, value6, value7) => {
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
export function getRayCollisionTriangle(ray, p1, p2, p3) {
    let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 }, normal: { x: 0, y: 0, z: 0 } };
    nativeGetRayCollisionTriangle(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z, (value0, value1, value2, value3, value4, value5, value6, value7) => {
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
export function getRayCollisionQuad(ray, p1, p2, p3, p4) {
    let result = { hit: false, distance: 0, point: { x: 0, y: 0, z: 0 }, normal: { x: 0, y: 0, z: 0 } };
    nativeGetRayCollisionQuad(ray.position.x, ray.position.y, ray.position.z, ray.direction.x, ray.direction.y, ray.direction.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z, p4.x, p4.y, p4.z, (value0, value1, value2, value3, value4, value5, value6, value7) => {
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
export function initAudioDevice() {
    nativeInitAudioDevice();
}
export function closeAudioDevice() {
    nativeCloseAudioDevice();
}
export function isAudioDeviceReady() {
    return nativeIsAudioDeviceReady();
}
export function setMasterVolume(volume) {
    nativeSetMasterVolume(volume);
}
export function getMasterVolume() {
    return nativeGetMasterVolume();
}
export function loadWave(fileName) {
    return { handle: nativeLoadWave(fileName, true), kind: "Wave" };
}
export function loadWaveFromMemory(fileType, fileData, dataSize) {
    return { handle: nativeLoadWaveFromMemory(fileType, true, fileData, dataSize), kind: "Wave" };
}
export function isWaveValid(wave) {
    return nativeIsWaveValid(wave.handle);
}
export function loadSound(fileName) {
    return { handle: nativeLoadSound(fileName, true), kind: "Sound" };
}
export function loadSoundFromWave(wave) {
    return { handle: nativeLoadSoundFromWave(wave.handle), kind: "Sound" };
}
export function loadSoundAlias(source) {
    return { handle: nativeLoadSoundAlias(source.handle), kind: "Sound" };
}
export function isSoundValid(sound) {
    return nativeIsSoundValid(sound.handle);
}
export function updateSound(sound, data, sampleCount) {
    nativeUpdateSound(sound.handle, data, sampleCount);
}
export function unloadWave(wave) {
    nativeUnloadWave(wave.handle);
}
export function unloadSound(sound) {
    nativeUnloadSound(sound.handle);
}
export function unloadSoundAlias(alias) {
    nativeUnloadSoundAlias(alias.handle);
}
export function exportWave(wave, fileName) {
    return nativeExportWave(wave.handle, fileName, true);
}
export function exportWaveAsCode(wave, fileName) {
    return nativeExportWaveAsCode(wave.handle, fileName, true);
}
export function playSound(sound) {
    nativePlaySound(sound.handle);
}
export function stopSound(sound) {
    nativeStopSound(sound.handle);
}
export function pauseSound(sound) {
    nativePauseSound(sound.handle);
}
export function resumeSound(sound) {
    nativeResumeSound(sound.handle);
}
export function isSoundPlaying(sound) {
    return nativeIsSoundPlaying(sound.handle);
}
export function setSoundVolume(sound, volume) {
    nativeSetSoundVolume(sound.handle, volume);
}
export function setSoundPitch(sound, pitch) {
    nativeSetSoundPitch(sound.handle, pitch);
}
export function setSoundPan(sound, pan) {
    nativeSetSoundPan(sound.handle, pan);
}
export function waveCopy(wave) {
    return { handle: nativeWaveCopy(wave.handle), kind: "Wave" };
}
export function waveCrop(wave, initFrame, finalFrame) {
    nativeWaveCrop(wave.handle, initFrame, finalFrame);
}
export function waveFormat(wave, sampleRate, sampleSize, channels) {
    nativeWaveFormat(wave.handle, sampleRate, sampleSize, channels);
}
export function loadMusicStream(fileName) {
    return { handle: nativeLoadMusicStream(fileName, true), kind: "Music" };
}
export function loadMusicStreamFromMemory(fileType, data, dataSize) {
    return { handle: nativeLoadMusicStreamFromMemory(fileType, true, data, dataSize), kind: "Music" };
}
export function isMusicValid(music) {
    return nativeIsMusicValid(music.handle);
}
export function unloadMusicStream(music) {
    nativeUnloadMusicStream(music.handle);
}
export function playMusicStream(music) {
    nativePlayMusicStream(music.handle);
}
export function isMusicStreamPlaying(music) {
    return nativeIsMusicStreamPlaying(music.handle);
}
export function updateMusicStream(music) {
    nativeUpdateMusicStream(music.handle);
}
export function stopMusicStream(music) {
    nativeStopMusicStream(music.handle);
}
export function pauseMusicStream(music) {
    nativePauseMusicStream(music.handle);
}
export function resumeMusicStream(music) {
    nativeResumeMusicStream(music.handle);
}
export function seekMusicStream(music, position) {
    nativeSeekMusicStream(music.handle, position);
}
export function setMusicVolume(music, volume) {
    nativeSetMusicVolume(music.handle, volume);
}
export function setMusicPitch(music, pitch) {
    nativeSetMusicPitch(music.handle, pitch);
}
export function setMusicPan(music, pan) {
    nativeSetMusicPan(music.handle, pan);
}
export function getMusicTimeLength(music) {
    return nativeGetMusicTimeLength(music.handle);
}
export function getMusicTimePlayed(music) {
    return nativeGetMusicTimePlayed(music.handle);
}
export function loadAudioStream(sampleRate, sampleSize, channels) {
    return { handle: nativeLoadAudioStream(sampleRate, sampleSize, channels), kind: "AudioStream" };
}
export function isAudioStreamValid(stream) {
    return nativeIsAudioStreamValid(stream.handle);
}
export function unloadAudioStream(stream) {
    nativeUnloadAudioStream(stream.handle);
}
export function updateAudioStream(stream, data, frameCount) {
    nativeUpdateAudioStream(stream.handle, data, frameCount);
}
export function isAudioStreamProcessed(stream) {
    return nativeIsAudioStreamProcessed(stream.handle);
}
export function playAudioStream(stream) {
    nativePlayAudioStream(stream.handle);
}
export function pauseAudioStream(stream) {
    nativePauseAudioStream(stream.handle);
}
export function resumeAudioStream(stream) {
    nativeResumeAudioStream(stream.handle);
}
export function isAudioStreamPlaying(stream) {
    return nativeIsAudioStreamPlaying(stream.handle);
}
export function stopAudioStream(stream) {
    nativeStopAudioStream(stream.handle);
}
export function setAudioStreamVolume(stream, volume) {
    nativeSetAudioStreamVolume(stream.handle, volume);
}
export function setAudioStreamPitch(stream, pitch) {
    nativeSetAudioStreamPitch(stream.handle, pitch);
}
export function setAudioStreamPan(stream, pan) {
    nativeSetAudioStreamPan(stream.handle, pan);
}
export function setAudioStreamBufferSizeDefault(size) {
    nativeSetAudioStreamBufferSizeDefault(size);
}
export function traceLogText(level, text) { nativeTraceLogText(level, text); }
export function loadFileData(fileName) { let result = null; nativeLoadFileDataCopy(fileName, true, (data) => { result = data; }); return result; }
export function compressData(data) { let result = null; nativeCompressDataCopy(data, data.length, (value) => { result = value; }); return result; }
export function decompressData(data) { let result = null; nativeDecompressDataCopy(data, data.length, (value) => { result = value; }); return result; }
export function encodeDataBase64(data) { let result = null; nativeEncodeDataBase64Copy(data, data.length, (value) => { result = value; }); return result; }
export function decodeDataBase64(text) { let result = null; nativeDecodeDataBase64Copy(text, true, (value) => { result = value; }); return result; }
export function computeMD5(data) { const result = []; nativeComputeMD5(data, data.length, (_index, word) => { result.push(word); }); return result; }
export function computeSHA1(data) { const result = []; nativeComputeSHA1(data, data.length, (_index, word) => { result.push(word); }); return result; }
export function computeSHA256(data) { const result = []; nativeComputeSHA256(data, data.length, (_index, word) => { result.push(word); }); return result; }
export function loadRandomSequence(count, min, max) { const result = []; nativeLoadRandomSequenceCopy(count, min, max, (_index, value) => { result.push(value); }); return result; }
export function exportImageToMemory(image, fileType) { let result = null; nativeExportImageToMemoryCopy(image.handle, fileType, true, (data) => { result = data; }); return result; }
export function loadImageColors(image) { const result = []; nativeLoadImageColorsCopy(image.handle, (r, g, b, a) => { result.push({ r: r, g: g, b: b, a: a }); }); return result; }
export function loadImagePalette(image, maximum) { const result = []; nativeLoadImagePaletteCopy(image.handle, maximum, (r, g, b, a) => { result.push({ r: r, g: g, b: b, a: a }); }); return result; }
export function loadCodepoints(text) { const result = []; nativeLoadCodepointsCopy(text, true, (_index, codepoint) => { result.push(codepoint); }); return result; }
export function codepointToUTF8(codepoint) { let result = ""; nativeCodepointToUTF8Copy(codepoint, (text) => { result = text; }); return result; }
export function loadTextLines(text) { const result = []; nativeLoadTextLinesCopy(text, true, (_index, line) => { result.push(line); }); return result; }
export function textSplit(text, delimiter) { const result = []; nativeTextSplitCopy(text, true, delimiter, (_index, part) => { result.push(part); }); return result; }
export function loadWaveSamples(wave) { const result = []; nativeLoadWaveSamplesCopy(wave.handle, (_index, sample) => { result.push(sample); }); return result; }
export function getPixelColor(data, format) { let result = { r: 0, g: 0, b: 0, a: 0 }; nativeGetPixelColorCopy(data, format, (r, g, b, a) => { result = { r: r, g: g, b: b, a: a }; }); return result; }
export function setPixelColor(data, color, format) { let result = new Uint8Array(0); nativeSetPixelColorCopy(data, color.r, color.g, color.b, color.a, format, (value) => { result = value; }); return result; }
export function setWindowIcons(images) { nativeSetWindowIconsCopy(images.length, (index) => { const image = images[index]; return image === undefined ? 0 : image.handle; }); }
export function updateCamera(camera, mode) { let result = camera; nativeUpdateCameraCopy(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, mode, (px, py, pz, tx, ty, tz, ux, uy, uz, fovy, projection) => { result = { position: { x: px, y: py, z: pz }, target: { x: tx, y: ty, z: tz }, up: { x: ux, y: uy, z: uz }, fovy: fovy, projection: projection }; }); return result; }
export function updateCameraPro(camera, movement, rotation, zoom) { let result = camera; nativeUpdateCameraProCopy(camera.position.x, camera.position.y, camera.position.z, camera.target.x, camera.target.y, camera.target.z, camera.up.x, camera.up.y, camera.up.z, camera.fovy, camera.projection, movement.x, movement.y, movement.z, rotation.x, rotation.y, rotation.z, zoom, (px, py, pz, tx, ty, tz, ux, uy, uz, fovy, projection) => { result = { position: { x: px, y: py, z: pz }, target: { x: tx, y: ty, z: tz }, up: { x: ux, y: uy, z: uz }, fovy: fovy, projection: projection }; }); return result; }
export function checkCollisionLines(start1, end1, start2, end2) { let result = { hit: false, point: { x: 0, y: 0 } }; nativeCheckCollisionLinesCopy(start1.x, start1.y, end1.x, end1.y, start2.x, start2.y, end2.x, end2.y, (hit, x, y) => { result = { hit: hit, point: { x: x, y: y } }; }); return result; }
export function loadImageAnim(fileName) { let result = { image: { handle: 0, kind: "Image" }, frames: 0 }; nativeLoadImageAnimCopy(fileName, true, (handle, frames) => { result = { image: { handle: handle, kind: "Image" }, frames: frames }; }); return result; }
export function loadImageAnimFromMemory(fileType, data) { let result = { image: { handle: 0, kind: "Image" }, frames: 0 }; nativeLoadImageAnimFromMemoryCopy(fileType, true, data, data.length, (handle, frames) => { result = { image: { handle: handle, kind: "Image" }, frames: frames }; }); return result; }
export function getCodepoint(text) { let result = { codepoint: 0, size: 0 }; nativeGetCodepointCopy(text, true, (codepoint, size) => { result = { codepoint: codepoint, size: size }; }); return result; }
export function getCodepointNext(text) { let result = { codepoint: 0, size: 0 }; nativeGetCodepointNextCopy(text, true, (codepoint, size) => { result = { codepoint: codepoint, size: size }; }); return result; }
export function getCodepointPrevious(text) { let result = { codepoint: 0, size: 0 }; nativeGetCodepointPreviousCopy(text, true, (codepoint, size) => { result = { codepoint: codepoint, size: size }; }); return result; }
export function textJoin(textList, delimiter) { return textList.join(delimiter); }
export function textAppend(text, append, position) { const prefix = text.slice(0, position); const result = prefix + append; return { text: result, position: result.length }; }
