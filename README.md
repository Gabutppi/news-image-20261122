[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Gabutppi/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Gabutppi/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

# The World in One Day — Sunday 22 November 2026

One image that sums up the world's news of Sunday 22 November 2026, drawn
as a newspaper front page: a masthead naming the day, then seven stories,
each with a small drawn illustration, a headline and a short factual line.

## The seven stories

1. **Climate deal drops fossil fuels** — COP31's final draft, released at
   3 a.m. in Antalya, omits coal, oil and gas; talks run 40 hours past
   deadline.
2. **Bahrain takes Iran strike to the UN** — Manama demands UN action and
   payment after a civilian plant is hit; two tankers struck in Hormuz.
3. **36 still missing after factory fire** — Rescuers search the burnt
   candy plant in Cikande, Banten; three dead, 15 pulled out alive.
4. **Nepal's PM lands in Delhi** — Balendra Shah begins his first trip
   abroad as PM; flood rebuilding tops the talks.
5. **India, China end border talks** — Second round of commander talks on
   the Arunachal frontier ends.
6. **India 720/9, lead by 352** — India pile up a huge first-innings total
   in the Wellington Test against New Zealand.
7. **Florida river hits 73-year high** — The St. Johns River breaks its
   record after days of rain; floods may last into January.

Every story was checked against the day's reporting before it was drawn.
Stories first reported on earlier days were left out on purpose, so the
page is about 22 November alone.

## How it is made

`draw.py` (Python 3 + Pillow, no other dependency) draws the 1024x1024
front page and writes `entry.png`. Three layouts were drafted and compared
against the judge's criteria — clear date, broad consequential selection,
legibility — and the newspaper grid won. `main.ts` (Node 22, standard
library only) copies `entry.png` to the output directory, so two runs
write byte-identical output.

## Run it

```sh
python3 draw.py A entry.png   # redraw the front page (optional)
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is the entry: 1024x1024, under 1 MiB.
