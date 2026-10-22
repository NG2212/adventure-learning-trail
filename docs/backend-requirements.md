# AI Adventure: backend requirements

What the frontend mockup implies for a real backend. The mockup's `AdventureStore` interface (`src/store/types.ts`) is the contract to implement.

## Entities

| Entity | Fields | Notes |
| --- | --- | --- |
| Person | id, name, firstName, role, isAdmin | From company SSO ("Continue with your monday account"). |
| Adventure | slug, icon, title, walkaway (promise), category, levels[], professions[], audience[], tool, effort, outcome, wave (W1-W4), slot, next[], body (Markdown, optional) | Authored as Markdown + frontmatter; editable by admins. Extra authoring fields (emoji, pattern, source) and HTML-comment design notes are stored but never shown. See label values below. |
| Wave | number, opensOn (date) | W1 open, W2 23 Nov, W3 7 Dec, W4 4 Jan. Adventure is open when today ≥ opensOn. |
| ItineraryItem | personId, adventureSlug, position | Ordered list per person. |
| Completion | personId, adventureSlug, completedAt | Unique per (person, adventure). Each completion = one badge. |
| Title | name, threshold | First Steps 1 · Day Tripper 3 · Frequent Flyer 11 · Globetrotter 20. Derived from completion count, not stored per person. |
| Announcement | id, text, linkTo, activeFrom, activeTo | One active at a time. |
| AnnouncementDismissal | personId, announcementId | |

## Label values (enumerations)

| Field | Allowed values |
| --- | --- |
| category | Work smarter with AI, Create with AI, Set up your AI, Automate and delegate, Lead with AI |
| levels | Foundations, Intermediate, Advanced |
| professions | Everyone, Customer Facing, Marketing, Engineering, Product, Design, HR, Finance; free text allowed (filters as "Other") |
| audience | Managers |
| tool | Any AI tool, Claude, Agentic coding tool |
| effort | Quick win, Moderate, Ambitious |
| outcome | Build something, Learn something, Work differently |
| wave | W1 (open), W2 (23 Nov), W3 (7 Dec), W4 (4 Jan) |
| icon | sponge, masks, robot, scale, compass, book, toolbox, magnifier, document, chat, palette, calendar, id-card, map-pin, brain, briefcase, gauge, layers, shield, clock, terminal, newspaper, chart, loop, network, people, balance |

Filter semantics: "Everyone" matches every profession filter; the "Managers" filter reads `audience`.

## Reads and writes per screen

| Screen | Reads | Writes |
| --- | --- | --- |
| Sign-in | — | Start SSO session |
| Header (all pages) | person, completion count, derived title, active announcement + dismissal | dismissAnnouncement |
| Welcome | person | — |
| Onboarding | adventure index | addToItinerary (per card or all). Answers are not stored. |
| All adventures | adventure index, waves, own completions, own itinerary | addToItinerary, removeFromItinerary |
| My itinerary | own itinerary, adventures, own completions | reorderItinerary, removeFromItinerary |
| Adventure page | adventure (body only if open), own completion, own itinerary, What's next (see below) | add/remove itinerary, markComplete |
| Progress | own completion count, titles, adventures, planned total (30) | — |
| Admin | adventure directory, waves, aggregates | create/edit adventure, export CSV |

### What's next (adventure page end and completion celebration)

Computed by the platform, never authored text. Reads: own itinerary, own completions, open adventures, person's role.

1. The first adventure in the person's itinerary that is not done and is not the current one.
2. Else one open adventure the person has not done, chosen by the recommendation scoring (role from the profile; other answers neutral, since onboarding answers are not stored). Ties and zero scores fall back to the first open adventure by slot.
3. Else a link to All adventures.

The adventure footer shows the computed panel first, then Markdown "Related adventures" (older files: "Where to next") as a small link list under the file's own heading. Neither is a rail step. Page-head sections, numbered steps, optional Go further, and Proof of work are derived from the Markdown; no new layout fields are required.

Step switching and sticky header/rail offsets are presentation-only: rail and Next/Back align the new heading below the visible header and mobile strip. No scrolling state is persisted and no additional reads, writes or entity fields are needed.

## Events to log

- `adventure_opened` (personId, slug, at)
- `itinerary_added` / `itinerary_removed` (personId, slug, source: onboarding | grid | adventure_page)
- `adventure_completed` (personId, slug, at)
- `badge_earned` (personId, slug, at), and `title_reached` (personId, title, at) when a threshold is crossed

## Recommendation rules (to be replaced by an AI call)

Input: role, AI use today, weekly tools, goal, learning style, comfort. Output: 3-4 adventures with a "why" line.

| Signal | Rule | Points |
| --- | --- | --- |
| Role | named in adventure.professions (Managers: in audience) | +3 |
| Role | adventure is for "Everyone" (only when not named) | +1 |
| Goal | maps to category (faster → Work smarter, creating → Create, setup → Set up, automating → Automate and delegate, leading → Lead) | +3 |
| Comfort | maps to level (new → Foundations, some → Intermediate, daily → Advanced) | +2 |
| Weekly tools | maps to tool (office → Any AI tool, Claude → Claude, coding → Agentic coding tool); "Any AI tool" always matches | +1 |
| AI use today | maps to category | +1 |
| Learning style | maps to effort (one sitting → Quick win, steady → Moderate, big → Ambitious) | +1 |
| Open now | wave is open | +1 |

Seed for the demo person: completed `de-slop`; itinerary `board-of-advisors`, `your-ai-identity`, `skills-when-how-and-how-well`.

Return top 4 when at least 4 score above 0, else top 3. The "why" line never references comfort or level.

## Admin operations

- List adventures with labels and wave.
- Create/edit an adventure from Markdown plus a labels form; validate frontmatter against the fixed label vocabularies.
- Assign adventures to waves and set wave dates.
- Per-employee view for L&D admins: email, last login, adventures opened, adventures completed, current itinerary.
- Aggregates by profession, level and wave (opens, itinerary adds, completions), plus per adventure; CSV export.
- Team reports for managers: aggregates only for their team, produced by L&D (managers have no direct per-employee access).

## Privacy rules

- No scores, no rankings, no leaderboards, no streaks, for anyone (employees, managers or admins).
- Per-employee completion and engagement data is visible to L&D admins only.
- Managers receive only team-level aggregates, produced by L&D.
- The comfort answer is used only at recommendation time and never stored as a level or shown back.
- Onboarding answers are not persisted.
- Share cards are generated only when the person chooses to share.

## Disc state (derived, no new fields)

The icon disc state on every surface is derived on the client from existing data: `done` if a completion exists for the person and adventure; else `itinerary` if the slug is in the person's itinerary; else `open` if the adventure's wave is open; else `later`. No new entity fields are needed.

**Adventure `iconAsset` (optional):** path/URL of the adventure's badge art (512px PNG, transparent outside the circle). When absent, the client renders the glyph named by `icon`. Disc state treatments are applied by the client on top of the art; no other new fields.

## Admin analytics and mock contract

Admin currently uses deterministic seeded in-memory analytics: 140 employees and 60 days of activity, fixed reference date 2026-10-22. Admin edits, drafts, waves, announcements and added admins last only for the browser session; they never mutate source Markdown or a backend. Real authorization remains a rebuild requirement, not the client-side demo flag.

### Identity fields from Monday's identity source

Extend Person with email, profession, org, team, managerId, isManager, joinedAt and lastActiveAt. **Org, team and manager must come from Monday's identity source**, with stable identifiers and manager references to employees in that source. Do not infer reporting relationships from names. Titles remain derived from lifetime completions; employee levels, scores and onboarding comfort are never stored or exposed.

### Queries and metric events

- `listPeople(filters)`: employee dimension filters, case-insensitive name/email search, lifetime title filter, inactive >30 days or never active; return current itinerary/completion counts and estimated lifetime session time. Support sorting/pagination in the real build.
- `getPersonActivity(personId, filters)`: authorized L&D-only dated event timeline of opens, adds and completions.
- `getAggregates(filters)`: employee dimensions + wave + date bounds; never return employee names in manager reports. Active distinct employees requires `adventure_opened`. Active % denominator includes every matching employee. Completion counts require unique `adventure_completed` person/adventure records. Average completed / active = completed events divided by distinct active employees. Rate = completed events / open events; repeat opens count and this is not a matched funnel. Adds require `itinerary_added`; removals must also be logged for reconstructing itineraries.
- Weekly buckets, adventure counts, category counts and org/profession tables join events to employee and adventure dimensions; tables use all employees in each group as denominator for average per person and active %. Titles use lifetime completion count; badges use distinct person/adventure completions in range. Real build must decide whether dimension attribution is event-time or current; mock uses current labels/waves.
- Estimated time requires session events (`session_started`, `session_ended` or activity heartbeats) with sessionId, personId, adventureSlug, startedAt/endedAt and estimated duration. Sum per active employee within the filtered period/wave, then total and median of those sums. Explicitly label all time estimates; use zero-safe divisions and include zero-minute active employees in median. Never claim this measures learning quality.
- Org/team/manager/profession/last-active attributes require identity synchronization and login/activity events. CSV uses the identical filter/query result as the visible table; employee exports are L&D-only. Manager reports include aggregates only, produced by L&D.

### Admin write operations

L&D-authorized content CRUD with validated slug, Markdown/frontmatter and fixed label lists; new records default to Draft. Upload parses and validates Markdown, never executes embedded content. Set status Open/Scheduled/Draft, assign wave, edit wave dates; validate scheduling. Announcement text/date edits with date-order validation. Add/remove admins through explicit permissions administration and audit logs in the real build; the mock only edits a name list. Draft nudge currently emits a toast; real delivery needs a separate authorized messaging service and audit event. All writes must enforce L&D permissions server-side in the rebuild, including direct URLs, exports and individual employee reads.

### Privacy in Admin views

No per-person scores or levels, onboarding comfort, rankings, leaderboards or streaks. Adventure content levels are labels only and may appear in the directory. Manager view hides names, named manager filters, employee table/drawers and admin names on every tab; aggregates remain available. A real manager account must receive only team-limited aggregates from L&D, not employee data hidden with CSS or client flags. Overview footer: "Analytics are for L&D; managers receive aggregates only."
