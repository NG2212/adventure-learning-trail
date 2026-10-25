# AGENTS

- All app data reads/writes go through the `AdventureStore` interface in `src/store/`; the localStorage implementation is swappable. Why: the mockup is a spec for a rebuild on another platform.
- Temporary demo settings are read through AdventureStore, not persisted with employee state; access uses canOpenAdventure while wave-derived hints stay intact, and review marks use shared ReviewStamp. Why: two source flags restore scheduling and hide review marks without stale browser settings or layout shifts.
- Adventures are Markdown files in `src/content/adventures/`, indexed from frontmatter at startup; the parser separates page-head sections, numbered core steps, optional Go further, proof and footer; named prompt headings title fenced Prompt windows. Why: content-driven, no code change to add an adventure.
- Recommendation scoring lives only in `src/lib/recommend.ts`. Why: the real build replaces it with an AI call.
- Keep `docs/BBS-PROMPTS.md` and `docs/backend-requirements.md` updated with every feature change. Why: they are client deliverables.
- Adventure step navigation uses one reader-initiated scroll path and the measured sticky header height, including the mobile rail. Why: rail and Next/Back must align headings consistently without hiding them or skipping the initial page head.
- Render page-head trails through the shared AdventureTrail component, including admin previews, without modifying Markdown parsing. Why: one presentation keeps the walking-path treatment consistent across all adventures.
- Admin mock data and aggregate calculations live in `src/store/adminMock.ts`, with an explicit fixed reference date and seeded generator; Admin mutations notify the shared store but remain session-only. Why: predictable demos and a replaceable data layer without backend calls.
- Admin is a parent layout with leaf routes for each tab; Manager view is shared in the layout and removes employee names and detail controls. Why: direct links work and aggregate-only views remain consistent across tabs.
- Proof reflections use AdventureStore.saveProofOfWork for one atomic entry/completion write; seedProof uses an independent deterministic hash and rating summaries live in adminMock. Why: edits preserve badge/date, seeded activity stays stable, and the data layer remains swappable.
- Proof guidance is extracted from the parser-separated proof body by proofGuidance; footprint rating and completion dialog are shared presentation components. Why: authored instructions remain authoritative without changing step parsing.
- Rail completion/edit actions and the Proof of work section open the same page-owned dialog without entering the step list; preview disables rail actions. Why: all entry points share one atomic completion write and preserve authored navigation.
- Company proof entries are an L&D-only Overview section and employee drawer section; rating summaries contain no identities. Why: existing Admin tabs stay intact and Manager view exposes aggregates only.
- Render Admin leaf content after hydration through ClientOnly in the shared layout. Why: direct mock-store reads must not mismatch server seed with browser-persisted completions and proof entries on refresh.
- Employee rating lines use a shared AdventureRating presentation and AdventureStore.getAdventureRating for thresholded aggregate-only reads; reuse the admin averages without ranking employee cards. Why: one display rule stays swappable and reflects edited ratings without exposing individual entries.

- Employee onboarding answers are saved atomically on Person through AdventureStore; redo replaces suggestions but retains completed trail stops and completion/proof records. Why: personal preferences remain swappable and cannot erase earned work.
- My journey is the canonical merged route; legacy itinerary/progress routes redirect and the shared BadgeGrid uses independent earned styling. Why: old links survive while card state cannot introduce lime into badges.
- Catalogue navigation and filter rows share a measured sticky band; label hints support hover, focus and touch. Why: scrolling headings and explanations remain accessible under the real header height.
- Effort duration is derived by effortLabel from frontmatter or defaults. Why: card and reader labels cannot diverge.
