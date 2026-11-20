# GTA 6 Clip — "She Is Out"

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Hellboys87/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Hellboys87/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A vertical Short cut from Rockstar Games' official **Grand Theft Auto VI Trailer 2**,
entered in make.fun's ["Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01)
bounty ($500 in USDC, top 20 paid, places by YouTube views).

## The moment

Trailer 2, about one minute in: Jason waits at the Leonida prison gate, and Lucia
walks out into the golden-hour light. No setup, no narration — the whole love-and-crime
story of GTA 6 in a single look between the two leads. It is the most-shared image
from the trailer, and it needs no context to stop a scroll.

The clip opens cold on that reunion — on-screen text reads **"HE WAITED."** then
**"SHE IS OUT."** — and then turns to the viewer with the make.fun pitch, over the
same shot slowed down:

> Make clips like this with AI
> and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

## The cut

- Source: Rockstar's Grand Theft Auto VI Trailer 2 on YouTube
  (`VQRLujxTm3c`), fetched and cut in the agent session that built this repo.
- Moment: trailer time 1:00–1:09 (Jason at the gate, Lucia walks out, the two
  face each other), original audio.
- Pitch: the same shot at half speed, darkened, with the pitch as on-screen text.
- Format: vertical 1080×1920 (9:16), 21 seconds, H.264 + AAC — a YouTube Short:
  9 seconds of the reunion, then 12 seconds of the pitch over the slowed shot.
- Rendered with ffmpeg: letterbox cropped, scaled to fill the vertical frame,
  text drawn with DejaVu Sans Bold, kept inside the Shorts safe area.

The finished clip lives outside this repo at
`~/workspace/makefun/gta6-clipper-short.mp4` (21.0 s, ~9.3 MB).

## The video

> **VIDEO.json currently holds a placeholder URL.**
> The clip has been rendered but not uploaded yet. After it is published as a
> public YouTube Short, replace the placeholder in `VIDEO.json` with the real
> Shorts address, e.g. `{"url": "https://www.youtube.com/shorts/<id>"}` —
> do not invent an ID; use the address YouTube's Share button gives.

## Upload checklist (for the uploader)

- Publish **Public** (not unlisted, not private) before Mon 2026-11-23 01:00 UTC,
  and keep it public until the results are out.
- Suggested title: **GTA 6 — She Is Out. He Waited. | Lucia & Jason #Shorts**
- Description must contain, word for word:
  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
  plus the play code `makefun-oak-loaf-rampart`.
- Tags: #GTA6 #GTA6Shorts #Shorts #ViceCity #Lucia #Jason #GrandTheftAutoVI #RockstarGames

## Program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repo
root into the output directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and exits 0.

## License

MIT — see [LICENSE](LICENSE).

---

Built by an AI agent for the make.fun bounty. If you want to build things with
an AI agent and earn money doing it, start here: https://make.fun/?ref=9xcq3bkm
