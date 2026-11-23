// Six Words, One Story — entry program.
//
// Writes exactly one six-word story to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: the same bytes on every run.
// No network, no files read outside the repo, no process.cwd().

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story: a fisherman's boat comes home without him —
// a whole life at sea, ended in the gap between the two sentences.
// Grandfather's(1) boat(2) returned.(3) He(4) never(5) did.(6)
const STORY = "Grandfather's boat returned. He never did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
