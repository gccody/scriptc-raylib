#ifndef SCRIPTC_RAYLIB_SHIM_H
#define SCRIPTC_RAYLIB_SHIM_H

#include <stddef.h>
#include <stdint.h>

void scrl_trace_log_text(int32_t level, const uint8_t *text, size_t text_length);

#endif
