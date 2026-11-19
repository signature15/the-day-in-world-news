// This program copies the pre-rendered entry.png image to the output directory.
// It serves as the entrypoint for the make.fun image contest submission.
// The image is a v14 broadsheet-style news poster covering the world's news of
// Wednesday 18 November 2026. Its layout, top to bottom: a newspaper masthead
// with the date; horizontal time bands that group the day's stories by when
// they broke (morning, midday, afternoon); stat cards summarizing key figures
// from the day's events; and evening briefs closing out the day in a digest
// band.
//
// Determinism: The program reads a fixed file (entry.png) and writes identical
// bytes to the output location on every run, producing byte-for-byte identical
// output regardless of execution order or timing.
//
// Network: No network access is required or used. The image is pre-rendered and
// stored in the repository; the program simply copies it.
//
// Output directory: Inside the grading container, the program writes to
// /output/entry.png. Outside the container, set MAKEFUN_OUTPUT_DIR to override
// the output path (e.g., for local testing).

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
