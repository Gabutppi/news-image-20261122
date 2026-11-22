// main.ts — entrypoint for the news-image-20261122 bounty.
//
// The front page is drawn ahead of time by draw.py (Python + Pillow) and
// shipped as entry.png. This program only copies those bytes to the
// output directory, so two runs always write byte-identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
