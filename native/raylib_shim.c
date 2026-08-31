#include "raylib_shim.h"

#include <raylib.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static char *scrl_c_string(const uint8_t *bytes, size_t length) {
    if ((bytes == NULL && length != 0) || memchr(bytes, '\0', length) != NULL) {
        fputs("scriptc-raylib: invalid string span\n", stderr);
        abort();
    }
    char *copy = malloc(length + 1);
    if (copy == NULL) {
        fputs("scriptc-raylib: unable to allocate a C string\n", stderr);
        abort();
    }
    if (length != 0) memcpy(copy, bytes, length);
    copy[length] = '\0';
    return copy;
}

void scrl_trace_log_text(
    int32_t level,
    const uint8_t *text,
    size_t text_length) {
    char *c_text = scrl_c_string(text, text_length);
    TraceLog(level, "%s", c_text);
    free(c_text);
}
