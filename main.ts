// main.ts — entrypoint for the news-image-20261122 bounty.
//
// The front page is drawn ahead of time by draw.py (Python + Pillow) and
// shipped as entry.png. This program only copies those bytes to the
// output directory, so two runs always write byte-identical output.
// After copying it verifies the output byte-for-byte, so a truncated or
// corrupted copy fails loudly instead of being graded as a broken image.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify: the output must be byte-identical to the shipped image.
const expected = readFileSync(src);
const actual = readFileSync(dst);
if (!expected.equals(actual)) {
  throw new Error(`entry.png copy mismatch: wrote ${actual.length} bytes, expected ${expected.length}`);
}
const size = statSync(dst).size;
if (size > 1024 * 1024) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
console.log(`wrote entry.png (${size} bytes, verified byte-identical)`);
