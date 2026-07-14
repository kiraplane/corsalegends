# Corsa Legends Wiki PRD and Implementation Plan

Checked: 2026-07-14  
Canonical site: https://www.corsalegends.wiki  
Project / GitHub / Cloudflare name: `corsalegends`

## 1. Product Positioning

Corsa Legends Wiki is an English, independent Roblox guide hub for Cogito's Corsa Legends experience. It should answer the questions players search immediately after joining: which codes are current, how to earn Cash without exploits, how tuning works, how to choose a useful car, how to read races, and where verified community links lead.

The game is still in ALPHA and changes quickly. The product must therefore separate first-party facts, recently cross-checked community facts, and update-sensitive advice. It must not present a frozen all-cars database, a permanent tier list, or exact tune values as universal truth when the available evidence cannot support them.

## 2. Verified Identity and First-Party Snapshot

| Field | Verified value |
| --- | --- |
| Game | Corsa Legends |
| Platform | Roblox |
| Official experience | https://www.roblox.com/games/122720857080780/Corsa-Legends |
| Place ID | `122720857080780` |
| Universe ID | `6786784563` |
| Creator | Cogito (verified Roblox Group) |
| Creator Group ID | `6670214` |
| Creator page | https://www.roblox.com/communities/6670214/Cogito |
| Current genre | Simulation / Vehicle Sim |
| Status | Live ALPHA |
| Current public capacity | 28 players |
| Current content claim | 80+ cars and trims, paint/interior/rim/tint customization, performance upgrades, live races, dynamic weather, damage and advanced tuning |

Identity boundary: do not mix the target with Assetto Corsa mods, FR Legends, Vehicle Legends, Corsa: Roblox Motorsport Sim, or similarly named driving games. The Linktree at `linktr.ee/corsaroblox` belongs to a different Roblox experience and is excluded.

## 3. Discovery Method

- Serper was unavailable in the current environment, so no Serper requests were used.
- Candidate discovery used Google autocomplete for the head term and limited modifiers: `codes`, `cars`, `tuning`, `how to`, `best`, `map`, `controls`, `money`, `roblox`, `dealership`, `races`, `supra tune`, `discord`, `update`, and `mobile`.
- Selected candidates were validated with the official Roblox page/API, current web results, competitor pages, and direct YouTube search metadata.
- Search intent was merged where splitting would create near-duplicates. `best car` and `fastest car` share one decision page; `best engine` and `best build` feed the tuning/fusion cluster.

## 4. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence / notes |
| --- | --- | --- | --- | --- | --- |
| corsa legends | Head term | `/` | P0 | keep | Exact official game name and active autocomplete term. |
| corsa legends wiki | Wiki/navigation | `/` | P0 | keep | Autocomplete plus a very thin 3-page Fandom competitor. |
| corsa legends roblox | Official entity/play | `/official-links` | P0 | keep | Official experience and creator identity. |
| corsa legends codes | Fresh rewards | `/codes` | P0 | keep | Strong autocomplete and many current July 2026 competitors. |
| corsa legends codes not expired | Active-code check | `/codes` | P0 | keep | Autocomplete; page must expose checked date and conflicts. |
| corsa legends cars | Vehicle discovery | `/cars` | P0 | keep | Autocomplete; official description confirms 80+ cars and trims. |
| corsa legends all cars | Complete roster | `/cars` | P1 | keep | Serve as an update-aware car hub, not an invented complete database. |
| corsa legends best car | Purchase decision | `/guides/best-car-and-fastest-car` | P0 | keep | Strong autocomplete; merge with fastest-car intent. |
| corsa legends fastest car | Performance decision | `/guides/best-car-and-fastest-car` | P0 | keep | Strong autocomplete; no stable universal winner verified. |
| corsa legends tuning | System hub | `/tuning` | P0 | keep | Autocomplete and core official mechanic. |
| corsa legends tuning guide | How-to | `/guides/full-tuning-guide` | P0 | keep | Exact autocomplete and a directly matching 14-minute guide video. |
| corsa legends best tune | Setup decision | `/guides/full-tuning-guide` | P1 | keep | Answer with a test loop rather than one universal value. |
| corsa legends supra tune | Exact vehicle tune | `/guides/supra-tune` | P0 | keep | Repeated autocomplete and target-specific videos. |
| corsa legends best engine | Upgrade decision | `/guides/engine-swaps-and-fusions` | P1 | keep | Autocomplete; must explain fit and use case, not a universal engine. |
| corsa legends best build | Upgrade decision | `/guides/engine-swaps-and-fusions` | P1 | keep | Autocomplete and official engine/suspension/tire systems. |
| corsa legends money method | Progression | `/guides/make-money-fast` | P0 | keep | Autocomplete and direct target-game videos. |
| corsa legends best paying job | Progression | `/guides/make-money-fast` | P1 | keep | Autocomplete and a high-view target-specific jobs short. |
| corsa legends money glitch | Unsafe shortcut | `/guides/make-money-fast` | P1 | keep | Address with safe earning methods and an explicit no-exploit boundary. |
| corsa legends races | Race navigation | `/races` | P1 | keep | Official live-race mechanic plus update-title evidence. |
| corsa legends map | Navigation | `/map` | P1 | keep | Exact autocomplete; source data is thin, so avoid fabricated location lists. |
| corsa legends update | Freshness | `/updates` | P1 | keep | Autocomplete and current official update title/media. |
| corsa legends discord | Community access | `/official-links` | P0 | keep | Strong autocomplete; current vanity invite is cross-checked but not exposed as developer API proof. |
| corsa legends beginner guide | First session | `/guides/beginner-guide` | P0 | keep | General high-intent route supported by current gameplay video. |
| corsa legends controls | Device help | `/guides/beginner-guide` | P2 | watch | No direct autocomplete completion after modifier; cover basic menu discovery inside beginner guide. |
| corsa legends mobile | Platform help | `/guides/beginner-guide` | P2 | watch | No direct autocomplete completion; do not launch a thin platform page. |
| corsa legends dealership | Purchase location | `/cars` | P2 | watch | Mechanically relevant but no standalone autocomplete result. |
| corsa legends special cars | Roster discovery | `/cars` | P2 | watch | Autocomplete exists, but reliable current inventory is incomplete. |
| corsa legends music codes | Radio/audio codes | none | P2 | ignore | Ambiguous music-ID intent; no reliable current target-game source. |
| corsa legends how to sell parts | Inventory action | none | P2 | ignore | Candidate appears under broad `how to` but lacks target-game validation. |
| corsa legends capacity | Inventory action | none | P2 | ignore | Likely wrong-game contamination. |
| assetto corsa legends cars | Different product | none | P0 | ignore | Assetto Corsa mod/search ambiguity. |
| corsa legends tier list | Static ranking | none | P2 | ignore | No strong demand or evidence-based stable ranking system. |
| corsa legends script / executor | Exploit | none | P0 | ignore | Unsafe and against site policy; only link to legitimate money/tuning guidance. |
| corsa legends códigos / codigos | Localized codes | future locale | P2 | localize_later | English core first; localize only after GSC evidence and full translation. |

## 5. Competitor Benchmark

### Corsa Legends Fandom

URL: https://corsa-legends-roblox.fandom.com/wiki/Corsa_Legends_Wiki

- Inventory: approximately 3 pages; homepage claims Vehicles, Locations, Races and Q&A but most content is placeholder material.
- Strength: exact-match wiki entity and one dealership/car-row clue.
- Weakness: placeholder images from unrelated topics, incomplete vehicle rows, one-word tuning section, no useful route architecture or current-source handling.
- Improve: publish complete player decisions, official media, current metadata, schema, related paths and source boundaries.

### Earnaldo Corsa Legends hub

URL: https://earnaldo.com/blog/corsa-legends

- Inventory: one hub linking a general guide, codes page, and comparison page.
- Strength: concise positioning around 80+ cars, tuning, racing and Cash.
- Weakness: small route breadth, affiliate/Robux CTA competes with player navigation, no dedicated car/tuning/map/race hubs.
- Improve: stronger information architecture, more exact-intent pages, neutral player-first CTAs, and internal-link coverage.

### Pro Game Guides / Twinfinite / Roblox Den code pages

URLs:

- https://progameguides.com/roblox/corsa-legends-codes/
- https://twinfinite.net/codes/corsa-legends-codes/
- https://robloxden.com/game-codes/corsa-legends

- Strength: code tables, active/expired separation, checked dates and redeem instructions.
- Weakness: active-code conflicts across dates; first-party Roblox description still advertises `75K` while current July code pages converge on `UNDERGLOW`, `4THOFJULY`, and `60K`.
- Improve: show a checked date, distinguish cross-checked active codes from a first-party-description watch item, and never imply that community trackers are official patch notes.

## 6. Codes Source Decision

Launch active list, checked 2026-07-14:

- `UNDERGLOW` — 25,000 Cash; supported by Pro Game Guides (updated 2026-07-12) and Twinfinite (updated 2026-07-13).
- `4THOFJULY` — 25,000 Cash; supported by both current pages.
- `60K` — 25,000 Cash; supported by both current pages.

Watch item:

- `75K` — the current Roblox description still advertises it, but current July tracker consensus does not list it among the same active three. Present it as “official-description watch / may have rotated,” not as guaranteed active.

Redeem flow: open Settings/cogwheel, find `Enter Code`, enter the exact case, and press OK. Never ask for account credentials.

## 7. YouTube Source Selection

| Page | Selected video | Channel | Published | Views at check | Strategy |
| --- | --- | --- | --- | --- | --- |
| Homepage / beginner | `I_9t-KS6re4` — Playing CORSA LEGENDS, IS This The NEW BEST CAR GAME? | Dema | 2026-01-20 | 11.5K | popular_youtube |
| Full tuning | `KaL7_RBdp78` — FULL Tuning Guide in Roblox Corsa Legends (Engine Swaps + Turbo) | JJboy438 Gaming | 2026-04-09 | 15.3K | user_intent_youtube |
| Money | `qCRcb54UKXM` — here’s how to make money fast! In Corsa Legends | Otwoplayz | 2026-04-22 | 5.2K | user_intent_youtube |
| Money cross-check | `wPqfTuIoqOw` — TOP 3 HIGHEST PAYING JOBS IN CORSA LEGENDS | eliogmaing | 2026-01-31 | 26.1K | community_crosscheck |
| Engine/fusions | `4njWOkEQ6VU` — CORSA LEGENDS FUSIONS TUTORIAL | Uni | 2025-12-22 | 25.7K | youtube_explainer |
| Supra tune | `q_ZEQKBlxbs` — 17s Supra Tune Revamp Corsa Legends | Hellwhip1211 | 2026-01-20 | 11.9K | user_intent_youtube |

Rejected or restricted:

- `GwnupxEbwb8` labels itself outdated and must not support a current best-car claim.
- Shorts showing a single high-horsepower car can prove a build exists but cannot establish a universal fastest-car ranking.
- Script/executor videos are excluded entirely.

## 8. Launch Route Set

Core English routes:

1. `/`
2. `/guides`
3. `/codes`
4. `/cars`
5. `/tuning`
6. `/races`
7. `/map`
8. `/updates`
9. `/official-links`
10. `/guides/beginner-guide`
11. `/guides/make-money-fast`
12. `/guides/best-car-and-fastest-car`
13. `/guides/full-tuning-guide`
14. `/guides/supra-tune`
15. `/guides/engine-swaps-and-fusions`

Supporting legal routes: `/disclaimer`, `/privacy`, `/terms`, `/cookie`.

This 15-route core fits an active but data-thin ALPHA game: broader than the incomplete competitor, but small enough to keep every page useful. Expand with a real car database, location details, or platform pages only after reliable data or GSC demand appears.

## 9. Information Architecture and Internal Links

- Homepage: compact hero, official gameplay video, Start Here path, latest update/code pulse, core hubs, featured guides, FAQ and official CTA.
- Desktop: sticky grouped wiki sidebar, groups collapsed by default, current group auto-open, active route highlighted and count badges accurate.
- Mobile: compact expandable Wiki Menu.
- Topic hubs: exact-intent H1, source-aware answer, Featured & Essential routes, body sections, FAQ and ItemList/Article schema.
- Guide details: one query per URL, answer-first copy, selected video embedded after useful written context, Article + BreadcrumbList schema, and explicit related next steps.

## 10. Visual Direction

Use current official Roblox icon and thumbnail media. The visual system should feel like a night garage and performance workshop:

- asphalt black and graphite surfaces;
- warm white text;
- red performance accent from the Corsa logo;
- amber/gold secondary accent from sunset and car photography;
- compact panels, mechanical dividers, restrained rounded corners;
- 36px square logo in navigation;
- no inherited cyan/purple pixel-game styling.

## 11. Metadata and Schema

- Homepage description target: under 160 characters and game-specific.
- Homepage schema: `WebSite`, `Organization`, `VideoGame`, and `VideoObject` for the selected gameplay embed.
- Hubs: `ItemList` or `Article` plus breadcrumbs where appropriate.
- Guides: `Article` and `BreadcrumbList`.
- Codes: `Article` + `FAQPage`.
- Canonical: `https://www.corsalegends.wiki`.
- English only at launch; canonical and x-default handled by the existing locale system.

## 12. Migration and QA Checklist

- Rename route group, data folder, component folder and official asset folder to `corsalegends`.
- Remove old PRD, route files, assets, IDs, names, creator details, colors, messages, manifests, mail domains and middleware redirects.
- Ensure no old template strings remain outside Git internals.
- Ensure every high-value route has an explicit short related label.
- Verify long guide links wrap in the 264px sidebar.
- Check desktop hero text/video balance and mobile stacking.
- Run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm next:build`, and `pnpm build`.
- Preview homepage, codes, a topic hub, a guide article, sitemap, robots and manifest.

## 13. Launch Automation

1. Create GitHub repository `corsalegends`, set `origin`, commit validated files and push `main`.
2. Deploy Cloudflare Worker `corsalegends` with `keep_vars: true`.
3. Bind `corsalegends.wiki` and `www.corsalegends.wiki`; use `www` as canonical.
4. Attempt Cloudflare GitHub automatic builds on `main`; stop only if an OAuth/approval screen requires the user.
5. Create or reuse the GA4 property/stream for `https://www.corsalegends.wiki`, update GA-GTM registries, and add the measurement ID through the existing project env/config path.
6. Register `corsalegends.wiki` in Shipmanager as `game_guide`, P0, with homepage and `/codes` core links if the implemented launch route remains the strongest second hub.
