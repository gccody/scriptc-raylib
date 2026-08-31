export function parsePackOutput(output) {
  for (let index = 0; index < output.length; index += 1) {
    const character = output[index];
    if (character !== "[" && character !== "{") continue;
    try {
      const value = JSON.parse(output.slice(index));
      if (value !== null && typeof value === "object") return value;
    } catch {
      // Lifecycle scripts can write non-JSON text before npm's final payload.
    }
  }
  throw new Error(`npm pack returned no JSON manifest:\n${output}`);
}
