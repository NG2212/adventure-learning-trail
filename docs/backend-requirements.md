# AI Adventure: backend requirements

What the frontend mockup implies for a real backend. The mockup's `AdventureStore` interface (`src/store/types.ts`) is the contract to implement.

## Entities

| Entity | Fields | Notes |
| --- | --- | --- |
| Person | id, name, firstName, role, isAdmin | From company SSO ("Continue with your monday account"). |
| Adventure | slug, icon, title, walkaway, category, levels[], professions[], audience[], tool, effort, outcome, wave, slot, next[], body (Markdown) | Authored as Markdown + frontmatter; editable by admins. |
| Wave | number, opensOn (date) | W1 open, W2 23 Nov, W3 7 Dec, W4 4 Jan. Adventure is open when today ≥ opensOn. |
| ItineraryItem | personId, adventureSlug, position | Ordered list per person. |
| Completion | personId, adventureSlug, completedAt | Unique per (person, adventure). Each completion = one badge. |
| Title | name, threshold | First Steps 1 · Day Tripper 3 · Frequent Flyer 11 · Globetrotter 20. Derived from completion count, not stored per person. |
| Announcement | id, text, linkTo, activeFrom, activeTo | One active at a time. |
| AnnouncementDismissal | personId, announcementId | |

## Reads and writes per screen

| Screen | Reads | Writes |
| --- | --- | --- |
| Sign-in | — | Start SSO session |
| Header (all pages) | person, completion count, derived title, active announcement + dismissal | dismissAnnouncement |
| Welcome | person | — |
| Onboarding | adventure index | addToItinerary (per card or all). Answers are not stored. |
| All adventures | adventure index, waves, own completions, own itinerary | addToItinerary, removeFromItinerary |
| My itinerary | own itinerary, adventures, own completions | reorderItinerary, removeFromItinerary |
| Adventure page | adventure (body only if open), own completion, own itinerary | add/remove itinerary, markComplete |
| Progress | own completion count, titles, adventures, planned total (30) | — |
| Admin | adventure directory, waves, aggregates | create/edit adventure, export CSV |

## Events to log

- `adventure_opened` (personId, slug, at)
- `itinerary_added` / `itinerary_removed` (personId, slug, source: onboarding | grid | adventure_page)
- `adventure_completed` (personId, slug, at)
- `badge_earned` (personId, slug, at), and `title_reached` (personId, title, at) when a threshold is crossed

## Recommendation rules (to be replaced by an AI call)

Input: role, AI use today, weekly tools, goal, learning style, comfort. Output: 3-4 adventures with a "why" line.

| Signal | Rule | Points |
| --- | --- | --- |
| Role | in adventure.professions | +3 |
| Goal | maps to category (faster → Work smarter, creating → Create, setup → Set up, automating → Automate and delegate, leading → Lead) | +3 |
| Comfort | maps to level (new → Foundations, some → Intermediate, daily → Advanced) | +2 |
| Weekly tools | maps to tool (office → Any AI tool, Claude → Claude, coding → Agentic coding tool); "Any AI tool" always matches | +1 |
| AI use today | maps to category | +1 |
| Learning style | maps to effort (one sitting → Quick win, steady → Moderate, big → Ambitious) | +1 |
| Open now | wave is open | +1 |

Return top 4 when at least 4 score above 0, else top 3. The "why" line never references comfort or level.

## Admin operations

- List adventures with labels and wave.
- Create/edit an adventure from Markdown plus a labels form; validate frontmatter against the fixed label vocabularies.
- Assign adventures to waves and set wave dates.
- Programme analytics: counts of opens, itinerary adds, completions per adventure and per wave; CSV export of aggregates.

## Privacy rules

- No per-person scores, no rankings, no leaderboards, no streaks.
- The comfort answer is used only at recommendation time and never stored as a level or shown back.
- Onboarding answers are not persisted.
- Analytics and CSV exports are aggregate only; no per-person views.
- Share cards are generated only when the person chooses to share.
