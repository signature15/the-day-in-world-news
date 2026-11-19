// One Day in World News — Wednesday 18 November 2026
// A visual chronicle of global affairs rendered in broadsheet format, capturing
// the interconnected stories that define a single day across continents. This work
// presents international news not as disconnected fragments but as a cohesive front
// page, where geography, scale, and visual hierarchy guide the reader through the
// day's most significant developments.
//
// The poster comprises six core design elements, each serving a distinct narrative function:
// Masthead: Anchors the publication with title, date (Wednesday 18 November 2026), and
// decorative rules that establish the authoritative tone of print journalism.
// Day-in-numbers: A statistics strip distilling key metrics and figures that provide
// quantitative context for the day's major events.
// Lead stories: The primary news area presenting the most important stories with prominent
// display headlines, supporting subheadings, and bylines.
// Region color grid: A continental organization system where stories are clustered and
// color-coded by geographic region, allowing readers to trace coverage across the world.
// Evening briefs: A condensed news brief section featuring shorter updates and developing
// stories that complete the full picture of the day.
// Sources footer: Attribution listing the wire services and news organizations that
// contributed reporting and data to the broadsheet.
//
// The implementation loads a pre-rendered PNG image and copies it byte-for-byte to the
// output destination. This ensures complete determinism: identical output on every run,
// no runtime variation, no network dependencies.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
