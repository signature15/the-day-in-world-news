// This program copies the pre-rendered entry.png image to the output directory.
// It serves as the entrypoint for the make.fun image contest submission.
// The image is a front-page style news poster showing the world's headlines
// from Wednesday 18 November 2026, featuring a masthead, six-continent map band,
// and regional headline cards across three columns.
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
