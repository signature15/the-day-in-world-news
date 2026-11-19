// news-image entry — r12-the-day-in-world-news
// A v14 broadsheet front page for Wednesday, 18 November 2026, built for the
// make.fun news-image contest. The composition reads like a classic printed
// world-news paper and is laid out top to bottom as follows:
//
// 1. Masthead — the paper's title, the full date line "Wednesday 18 November
//    2026", edition markers, and the rule that anchors the whole page.
// 2. Day-in-numbers strip — a horizontal band of headline statistics pulled
//    from the day's events: counts, percentages, and figures that tell the
//    story at a glance before any prose is read.
// 3. Lead stories — the dominant coverage of the day set across wide columns
//    with large headlines, subheads, and bylines, hierarchically above the
//    secondary news.
// 4. Region grid — a geographic matrix of shorter items organized by world
//    region, so readers can scan continent by continent for local reporting.
// 5. Evening briefs — a condensed closing digest of developing stories and
//    overnight updates, the traditional end-of-paper roundup.
// 6. Sources footer — attribution row crediting the wire services and outlets
//    behind every story and figure on the page.
//
// Mechanics: the program performs a deterministic copy of the pre-rendered
// entry.png into the grading output directory (override with MAKEFUN_OUTPUT_DIR).
// The output is byte-identical on every run, with no network access and no
// dependence on timing or execution order.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
