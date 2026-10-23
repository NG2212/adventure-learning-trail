# AGENTS

- All app data reads/writes go through the `AdventureStore` interface in `src/store/`; the localStorage implementation is swappable. Why: the mockup is a spec for a rebuild on another platform.
- Adventures are Markdown files in `src/content/adventures/`, indexed from frontmatter at startup; the parser separates page-head sections, numbered core steps, optional Go further, proof and footer; named prompt headings title fenced Prompt windows. Why: content-driven, no code change to add an adventure.
- Recommendation scoring lives only in `src/lib/recommend.ts`. Why: the real build replaces it with an AI call.
- Keep `docs/BBS-PROMPTS.md` and `docs/backend-requirements.md` updated with every feature change. Why: they are client deliverables.
- Adventure step navigation uses one reader-initiated scroll path and the measured sticky header height, including the mobile rail. Why: rail and Next/Back must align headings consistently without hiding them or skipping the initial page head.
- Render page-head trails through the shared AdventureTrail component, including admin previews, without modifying Markdown parsing. Why: one presentation keeps the walking-path treatment consistent across all adventures.
- Admin mock data and aggregate calculations live in `src/store/adminMock.ts`, with an explicit fixed reference date and seeded generator; Admin mutations notify the shared store but remain session-only. Why: predictable demos and a replaceable data layer without backend calls.
- Admin is a parent layout with leaf routes for each tab; Manager view is shared in the layout and removes employee names and detail controls. Why: direct links work and aggregate-only views remain consistent across tabs.
