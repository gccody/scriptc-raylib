#include "raylib.h"

#include <stdbool.h>
#include <stdio.h>

enum {
    SCREEN_WIDTH = 1280,
    SCREEN_HEIGHT = 720,
    STRESS_RECTANGLE_COUNT = 1000,
};

static const double WARMUP_SECONDS = 2.0;
static const double BASELINE_SECONDS = 5.0;
static const double STRESS_SECONDS = 5.0;

typedef struct BenchmarkResult {
    int frames;
    double seconds;
    double minimum_frame_seconds;
    double maximum_frame_seconds;
} BenchmarkResult;

static void draw_baseline_scene(int frame) {
    const int rectangle_x = 80 + (frame % 900);
    const int circle_x = 1180 - (frame % 1100);

    BeginDrawing();
    ClearBackground(RAYWHITE);
    DrawText("Uncapped baseline: starter-sized scene", 20, 20, 24, BLACK);
    DrawText("No target FPS and no VSYNC hint", 20, 55, 18, DARKGRAY);
    DrawText("This phase draws three strings, one rectangle, and one circle.", 20, 82, 18, DARKGRAY);
    DrawRectangle(rectangle_x, 330, 110, 55, BLUE);
    DrawCircle(circle_x, 480, 24.0f, RED);
    DrawFPS(20, 120);
    EndDrawing();
}

static void draw_stress_scene(int frame) {
    const int offset = frame % 24;

    BeginDrawing();
    ClearBackground(RAYWHITE);

    int index = 0;
    while (index < STRESS_RECTANGLE_COUNT) {
        const int column = index % 50;
        const int row = index / 50;
        const int x = column * 26 + offset - 24;
        const int y = row * 31 + 96;
        const int color_index = index % 4;
        if (color_index == 0) DrawRectangle(x, y, 20, 20, BLUE);
        else if (color_index == 1) DrawRectangle(x, y, 20, 20, GREEN);
        else if (color_index == 2) DrawRectangle(x, y, 20, 20, ORANGE);
        else DrawRectangle(x, y, 20, 20, RED);
        index += 1;
    }

    DrawRectangle(0, 0, SCREEN_WIDTH, 90, RAYWHITE);
    DrawText("Uncapped draw-call stress: 1,000 rectangles per frame", 20, 18, 24, DARKBLUE);
    DrawFPS(20, 52);
    EndDrawing();
}

static bool run_warmup(void) {
    const double started_at = GetTime();
    int frame = 0;
    while (!WindowShouldClose() && GetTime() - started_at < WARMUP_SECONDS) {
        draw_baseline_scene(frame);
        frame += 1;
    }
    return !WindowShouldClose();
}

static BenchmarkResult run_benchmark(double duration, bool stress) {
    const double started_at = GetTime();
    int frame = 0;
    double minimum_frame_seconds = 1000000000.0;
    double maximum_frame_seconds = 0.0;

    while (!WindowShouldClose()) {
        const double frame_started_at = GetTime();
        if (stress) draw_stress_scene(frame);
        else draw_baseline_scene(frame);
        const double frame_seconds = GetTime() - frame_started_at;

        if (frame_seconds < minimum_frame_seconds) minimum_frame_seconds = frame_seconds;
        if (frame_seconds > maximum_frame_seconds) maximum_frame_seconds = frame_seconds;
        frame += 1;

        if (GetTime() - started_at >= duration) break;
    }

    const BenchmarkResult result = {
        .frames = frame,
        .seconds = GetTime() - started_at,
        .minimum_frame_seconds = minimum_frame_seconds,
        .maximum_frame_seconds = maximum_frame_seconds,
    };
    return result;
}

static void print_result(const char *name, BenchmarkResult result) {
    if (result.frames == 0) {
        printf("%s: no frames recorded\n", name);
        return;
    }

    const double average_fps = (double)result.frames / result.seconds;
    const double average_frame_milliseconds = (result.seconds * 1000.0) / (double)result.frames;
    printf("%s:\n", name);
    printf("  frames: %d in %.3f seconds\n", result.frames, result.seconds);
    printf("  average: %.1f FPS (%.3f ms/frame)\n", average_fps, average_frame_milliseconds);
    printf("  best frame: %.3f ms\n", result.minimum_frame_seconds * 1000.0);
    printf("  worst frame: %.3f ms\n", result.maximum_frame_seconds * 1000.0);
}

int main(void) {
    printf("native C raylib uncapped FPS benchmark\n");
    printf("Resolution: %dx%d\n", SCREEN_WIDTH, SCREEN_HEIGHT);
    printf(
        "Warm-up: %.0fs; samples: %.0fs baseline + %.0fs stress\n",
        WARMUP_SECONDS,
        BASELINE_SECONDS,
        STRESS_SECONDS
    );

    InitWindow(SCREEN_WIDTH, SCREEN_HEIGHT, "native C raylib uncapped FPS benchmark");
    SetTargetFPS(0);

    if (run_warmup()) {
        const BenchmarkResult baseline = run_benchmark(BASELINE_SECONDS, false);
        if (!WindowShouldClose()) {
            const BenchmarkResult stress = run_benchmark(STRESS_SECONDS, true);
            CloseWindow();
            print_result("Baseline scene", baseline);
            print_result("Stress scene (1000 rectangles/frame)", stress);
        } else {
            CloseWindow();
            printf("Benchmark stopped before the stress phase.\n");
            print_result("Baseline scene", baseline);
        }
    } else {
        CloseWindow();
        printf("Benchmark stopped during warm-up.\n");
    }

    return 0;
}
