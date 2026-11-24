// One-Line Office Joke: 24-Hour Sprint
// Writes a single one-line joke about office life to /output/entry.txt.
// Pure Node stdlib, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The meeting that could have been an email just sent a follow-up meeting to discuss why it wasn't an email.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Create the output directory if missing (mode 0755). Never chmod the
// directory itself: the grader runs as another user and that fails grading.
mkdirSync(outDir, { recursive: true, mode: 0o755 });

// Write exactly the joke, no trailing newline, so the file is 1-200 chars.
writeFileSync(outFile, JOKE, { encoding: "utf8", mode: 0o644 });
try {
  chmodSync(outFile, 0o644);
} catch {
  // Best effort only; the write mode above already sets 0644 on creation.
}

console.log(`Wrote ${JOKE.length} characters to ${outFile}`);
