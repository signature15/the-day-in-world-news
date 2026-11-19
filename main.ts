// One Day in World News — Wednesday 18 November 2026
// A broadsheet-format news poster capturing the global narrative for a single day,
// rendered as a classic front page. This entry synthesizes international reporting
// into a structured visual layout that balances hierarchy, information density, and
// visual rhythm across six continental regions.
//
// The poster is organized in six distinct sections from top to bottom:
// - Masthead: The publication title, full date (Wednesday 18 November 2026), and
//   decorative rule establishing the newspaper aesthetic.
// - Day-in-numbers: A statistics band featuring key figures, percentages, and metrics
//   that summarize the day's major developments at a glance.
// - Lead stories: Prominent coverage area with large display headlines, subheadings,
//   and bylines for the most significant news events of the day.
// - Region color grid: A geographic breakdown of stories arranged by continent,
//   using distinct color coding to help readers navigate coverage by location.
// - Evening briefs: A condensed section of shorter bulletins, updates, and
//   developing stories that round out the day's reporting.
// - Sources footer: Attribution line listing wire services and news outlets that
//   contributed reporting and data to the broadsheet.
//
// Implementation: The program performs a byte-for-byte copy of a pre-rendered
// entry.png file to the output directory. This guarantees deterministic output—
// every execution produces identical bytes without network calls, timing dependencies,
// or state variations.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
