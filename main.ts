// Entry.png: One Day in World News — Wednesday 18 November 2026
//
// A newspaper-style broadsheet capturing global affairs across a single day, formatted
// as a print editorial layout. The image synthesizes international reporting from multiple
// wire services and regional correspondents into a unified front page.
//
// Structure and content sections:
// - Masthead: Title and publication date establish editorial authority and temporal frame
// - Day-in-numbers: Key statistics and metrics providing quantitative snapshot of the day
// - Lead stories: Primary coverage featuring the most consequential developments with
//   headlines, decks, and attribution sourced from wire feeds
// - Region color grid: Geographical organization system clustering stories by continent
//   with distinct color bands for visual scanning and regional categorization
// - Evening briefs: Secondary news capsules with shorter-form updates and developing
//   stories filling gaps in primary coverage
// - Sources footer: Attribution block crediting wire services, news agencies, and
//   contributing organizations that supplied reporting data
//
// The program performs deterministic file replication: it reads the pre-rendered PNG
// and copies bytes to output without modification, ensuring identical results across
// all executions regardless of runtime environment or execution order.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
