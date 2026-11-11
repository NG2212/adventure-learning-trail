# Big Brain Studio handoff data

Files the Big Brain Studio rebuild needs that are not on `main`:

- `captions/<slug>.vtt`: the 30 approved caption files.
- `manifest/adventures.json` and `.csv`: one record per adventure with labels, wave, slot, placeholder opening dates, and MD5 checksums for every Markdown, video, poster and caption file.
- `content/use-case-discovery.md`: the approved version. It differs from `src/content/adventures/use-case-discovery.md` on `main` only inside the hidden design-notes comment; this copy matches the manifest MD5.

Read-only reference. Do not merge into `main`.
