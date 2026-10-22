# AGENTS

- All app data reads/writes go through the `AdventureStore` interface in `src/store/`; the localStorage implementation is swappable. Why: the mockup is a spec for a rebuild on another platform.
- Adventures are Markdown files in `src/content/adventures/`, indexed from frontmatter at startup; the parser separates page-head sections, numbered core steps, optional Go further, proof and footer; named prompt headings title fenced Prompt windows. Why: content-driven, no code change to add an adventure.
- Recommendation scoring lives only in `src/lib/recommend.ts`. Why: the real build replaces it with an AI call.
- Keep `docs/BBS-PROMPTS.md` and `docs/backend-requirements.md` updated with every feature change. Why: they are client deliverables.
