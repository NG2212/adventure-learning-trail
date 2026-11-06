# Effort labels: where the old values live

New labels: "30 minutes", "1 hour", "Longer" (replacing Quick win ~15 min, Moderate ~45 min, Ambitious 1.5–2 h).

## Code
- `src/content/adventures.ts:18` — `EFFORTS = ["Quick win","Moderate","Ambitious"]`; the master list. Drives the `Effort` type (line 24), the catalogue filter options and the admin editor dropdown.
- `src/content/adventures.ts:124` — parser default: missing `effort:` becomes `"Moderate"`.
- `src/content/adventures.ts:125` — reads optional `time:` frontmatter.
- `src/content/adventures.ts:175` — `EFFORT_TIMES` maps each value to `~15 min` / `~45 min` / `1.5–2 h`.
- `src/content/adventures.ts:176-177` — `effortLabel()` builds `"<effort> · <time override or default>"`. Sole label renderer.
- `src/components/LabelChips.tsx:37` — renders `effortLabel()` as a neutral stone chip; used on cards and page heads (and journey stops). Hint text line 21: "Effort: the size of the task and its estimated duration".

## Filters
- `src/routes/adventures.index.tsx:21` — More filters "Effort" group lists `EFFORTS` verbatim as option labels.
- `src/routes/adventures.index.tsx:25` — matches selected values against `a.effort` exactly.

## Recommendation logic and onboarding
- `src/lib/recommend.ts:77-80` — `STYLE_TO_EFFORT`: quick → Quick win, steady → Moderate, deep → Ambitious.
- `src/lib/recommend.ts:96` — +1 per selected learning style whose effort equals the adventure's effort.
- `src/routes/onboarding.tsx:22` — "How do you prefer to learn?" options ("Small wins I can finish in one sitting", "A steady project over a few sessions", "A big, ambitious build") map to quick/steady/deep. No effort label text shown; wording may want aligning.
- `src/routes/profile.tsx:9` — display text for those same style values (no effort names).

## Admin
- `src/components/admin/AdminAdventures.tsx:12, 401` — editor Effort dropdown uses `EFFORTS`.
- `:42` — new-adventure draft default `effort: "Moderate"`.
- `:110` — validation rejects effort not in `EFFORTS`.
- `:186, 222` — table "Effort" column shows raw value (no time).
- `:446` — editor preview line "category · effort".
- Admin mock data (`src/store/adminMock.ts`) and proof seed have no effort references.

## Seed data (adventure frontmatter, 30 files)
- `effort:` values today: 4 Quick win, 19 Moderate, 7 Ambitious. All need remapping.
- Non-rendered design notes mentioning old names (no behaviour): making-decisions-with-ai 47, 53; token-smartness 29; hard-conversations 28, 34; your-ai-identity 37; use-case-discovery 31; build-your-professional-partner 31; understanding-ai-agents 30; ai-as-your-tutor 35; claude-in-your-docs-sheets-and-slides 30; creating-apps-with-ai-done-right 59.

## Tests
- `src/store/ldReview.test.ts:48-49` — asserts the three default labels exactly.
- `src/store/ldReview.test.ts:52-53` — `effort: Moderate` + `time: "~1 h"` must give `"Moderate · ~1 h"`.

## Docs
- `docs/BBS-PROMPTS.md:22` — effort values, default labels, `time:` override example.
- `docs/BBS-PROMPTS.md:78` — Effort listed in More filters.
- `docs/backend-requirements.md:45` — label table row for effort values.
- `docs/backend-requirements.md:56-58` — "Effort duration and label presentation": defaults and override rule.
- `docs/backend-requirements.md:166` — learning-style → effort mapping in scoring.
- Project rule (AGENTS) "Effort duration is derived by effortLabel…" and memory Core note on duration estimates.

## `time:` override
- Not used in any adventure file. Only exercised by the test at `ldReview.test.ts:52` and documented in both docs.

## How the label renders
- Cards, page heads and journey stops: one stone chip via `LabelChips` → `effortLabel()`, e.g. "Moderate · ~45 min". Admin shows the bare value without time.

## Decision needed before building
- Since the new labels are themselves durations, the chip would read just "30 minutes" / "1 hour" / "Longer", and the `time:` override would become redundant — propose removing it (or keep it to override the text). Confirm the mapping Quick win → 30 minutes, Moderate → 1 hour, Ambitious → Longer.
