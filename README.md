[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/the-day-in-world-news/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/the-day-in-world-news/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# the-day-in-world-news

An entry for make.fun's [news image contest](https://make.fun/bounty/news-image-20261118) — the world's news of Tuesday 17 November 2026 rendered as a front-page style poster.

## What it does

The program copies a pre-rendered news poster image to the output directory. The image deterministically represents the day's top stories across six continents, produced without network access and guaranteed to write identical bytes on every run.

## The image

The poster follows a front-page newspaper layout:

- Masthead with the date: Tuesday, 17 November 2026
- A stylized six-continent map band
- Regional headline cards organized in three columns
- 30 stories chosen for breadth across regions and topics

## How to run

```bash
node main.ts
```

The program writes to `/output/entry.png` inside the grading container. For local testing, set the output directory with an environment variable:

```bash
MAKEFUN_OUTPUT_DIR=./local-output node main.ts
```

## Determinism

The program reads a single fixed file (`entry.png`) from the repository and copies it byte-for-byte to the output location. Two runs write identical bytes regardless of timing, order, or execution context.

## License

MIT — see LICENSE file.
