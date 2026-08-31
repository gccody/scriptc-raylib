export type ByteData = Uint8Array;
export interface Vector2 {
    x: number;
    y: number;
}
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
export interface Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface Matrix {
    m0: number;
    m4: number;
    m8: number;
    m12: number;
    m1: number;
    m5: number;
    m9: number;
    m13: number;
    m2: number;
    m6: number;
    m10: number;
    m14: number;
    m3: number;
    m7: number;
    m11: number;
    m15: number;
}
export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface NPatchInfo {
    source: Rectangle;
    left: number;
    top: number;
    right: number;
    bottom: number;
    layout: number;
}
export interface Camera3D {
    position: Vector3;
    target: Vector3;
    up: Vector3;
    fovy: number;
    projection: number;
}
export interface Camera2D {
    offset: Vector2;
    target: Vector2;
    rotation: number;
    zoom: number;
}
export interface Transform {
    translation: Vector3;
    rotation: Vector4;
    scale: Vector3;
}
export interface Ray {
    position: Vector3;
    direction: Vector3;
}
export interface RayCollision {
    hit: boolean;
    distance: number;
    point: Vector3;
    normal: Vector3;
}
export interface BoundingBox {
    min: Vector3;
    max: Vector3;
}
export interface VrDeviceInfo {
    hResolution: number;
    vResolution: number;
    hScreenSize: number;
    vScreenSize: number;
    eyeToScreenDistance: number;
    lensSeparationDistance: number;
    interpupillaryDistance: number;
    lensDistortionValues: [number, number, number, number];
    chromaAbCorrection: [number, number, number, number];
}
export interface VrStereoConfig {
    projection: [Matrix, Matrix];
    viewOffset: [Matrix, Matrix];
    leftLensCenter: [number, number];
    rightLensCenter: [number, number];
    leftScreenCenter: [number, number];
    rightScreenCenter: [number, number];
    scale: [number, number];
    scaleIn: [number, number];
}
export interface AutomationEvent {
    frame: number;
    type: number;
    params: [number, number, number, number];
}
export type Quaternion = Vector4;
export interface Image {
    readonly handle: number;
    readonly kind: "Image";
}
export interface Texture {
    readonly handle: number;
    readonly kind: "Texture";
}
export interface RenderTexture {
    readonly handle: number;
    readonly kind: "RenderTexture";
}
export interface GlyphInfo {
    readonly handle: number;
    readonly kind: "GlyphInfo";
}
export interface Font {
    readonly handle: number;
    readonly kind: "Font";
}
export interface Mesh {
    readonly handle: number;
    readonly kind: "Mesh";
}
export interface Shader {
    readonly handle: number;
    readonly kind: "Shader";
}
export interface Material {
    readonly handle: number;
    readonly kind: "Material";
}
export interface Model {
    readonly handle: number;
    readonly kind: "Model";
}
export interface ModelAnimation {
    readonly handle: number;
    readonly kind: "ModelAnimation";
}
export interface Wave {
    readonly handle: number;
    readonly kind: "Wave";
}
export interface AudioStream {
    readonly handle: number;
    readonly kind: "AudioStream";
}
export interface Sound {
    readonly handle: number;
    readonly kind: "Sound";
}
export interface Music {
    readonly handle: number;
    readonly kind: "Music";
}
export interface FilePathList {
    readonly handle: number;
    readonly kind: "FilePathList";
}
export interface AutomationEventList {
    readonly handle: number;
    readonly kind: "AutomationEventList";
}
export type Texture2D = Texture;
export type TextureCubemap = Texture;
export type RenderTexture2D = RenderTexture;
export type Camera = Camera3D;
export interface CollisionLinesResult {
    hit: boolean;
    point: Vector2;
}
export interface ImageAnimation {
    image: Image;
    frames: number;
}
export interface CodepointResult {
    codepoint: number;
    size: number;
}
export interface TextAppendResult {
    text: string;
    position: number;
}
