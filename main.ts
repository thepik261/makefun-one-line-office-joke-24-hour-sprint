// One-Line Office Joke: 24-Hour Sprint
// Entry program: writes a single-line office joke to /output/entry.txt.
// Pure Node stdlib, deterministic: every run writes the same text.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One sentence, one line, well under the 200-character gate.
// Verified locally: 61 characters plus the trailing newline (62 bytes),
// a single line of valid UTF-8, so the gate's 1-200 character check passes
// with room to spare and both grading runs produce identical output.
const JOKE =
  "Our standup ran so long the chairs filed a complaint with HR.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
  try {
    // Only chmod the file this program creates, never /output itself.
    chmodSync("/output/entry.txt", 0o644);
  } catch {
    // The output directory may be mounted read-only for metadata;
    // the file content is what the gate reads.
  }
}

main();
