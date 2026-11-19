// Entry point for the make.fun news-image contest: a v14 broadsheet-style layout
// capturing the day in world news for Wednesday, 18 November 2026.
// This program reads the pre-rendered entry.png and writes it to the output
// directory, preserving the carefully designed news-image composition.
//
// The broadsheet is structured in five major sections:
// - Masthead: date and publication styling at the top
// - Day-in-numbers: a visual strip summarizing key statistics from global events
// - Lead stories: prominent headlines and coverage of the day's major breaking news
// - Region grid: a geographic breakdown of stories across continents and countries
// - Evening briefs: condensed digest of developing stories as the day closes
// - Sources footer: attribution and source references for all coverage
//
// Determinism: reads entry.png once and writes byte-identical output each run,
// independent of timing or execution order. No network calls. Set MAKEFUN_OUTPUT_DIR
// to override the output path (defaults to /output/entry.png in the grading container).

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
