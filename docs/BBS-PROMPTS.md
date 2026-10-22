# AI Adventure: build prompts, feature by feature

Each section is a self-contained prompt to rebuild one feature on another platform. Shared rules for every feature:

- Palette: purple #9450FD (~70%), white #FFFFFF, near-black #242424 text, stone #E3D9CF panels; blue #1E77FD, coral #FF644D, green #06A24B for labels and states only; lime #D8F81E, pink #F07FFF, yellow #FBD54D only for "next up", celebrations and progress.
- Poppins everywhere. Rounded corners 16-24px, subtle shadows, no gradients (except a faint lime glow on celebrations), no emojis, no stock imagery.
- Motif: flat footprints (sole + heel shape) in accent colours.
- No time estimates, streaks, leaderboards or rankings. Titles describe distance travelled, never ability.
- Footer on every page: "AI Adventure · Built for monday.com by Nufar Gaspar".
- All reads/writes go through one store interface (see `docs/backend-requirements.md`).

---

## 1. Content index

**Build:** Adventures are Markdown files with YAML frontmatter (slug, emoji, icon, title, walkaway, category, levels[], professions[], audience[], tool, effort, outcome, wave, slot, next[]). At startup, parse all files into an index sorted by wave then slot. `emoji` is ignored in the UI. Icon = `icon:` or a fallback per category. Wave 1 is open; wave 2 opens 23 Nov, wave 3 opens 7 Dec, wave 4 opens 4 Jan. Non-open adventures render the body "This adventure opens on <date>" plus the walkaway.

**Accept:** adding a file makes it appear in the grid, progress badges and onboarding pool with no code change.

## 2. Store

**Build:** One interface: getPerson, getItinerary, addToItinerary, removeFromItinerary, reorderItinerary(slug, up|down), markComplete(slug) → {count, newTitle, alreadyDone}, getCompletions, getTitle, dismissAnnouncement (plus signIn, isSignedIn, isAnnouncementDismissed, subscribe, getSnapshot for the UI). One localStorage implementation. Seed: Noa Levi, Product Manager, admin; 1 completed adventure; 3 in itinerary.

**Accept:** refresh keeps changes; clearing storage restores the seed; marking an adventure complete twice does not double count.

## 3. Sign-in (`/`)

**Build:** Full purple screen with footprint trails in lime, pink, yellow, white, green, coral, blue branching in several directions. Wordmark, H1 "AI Adventure", subtitle "Pick a path. Build something real. Keep it.", one white button "Continue with your monday account". Clicking signs in the sample employee and goes to `/welcome`. No form, no global header.

**Accept:** one button only; lands on welcome with "Welcome, Noa".

## 4. Global header and announcement

**Build:** On every page except `/`: wordmark (links to welcome), nav My itinerary · All adventures · Progress · Admin (Admin only if person is admin), right side "Hi Noa" and a purple pill "<title> · N completed" linking to progress. Below it a dismissible banner "New on Monday: two new adventures opened." with a link to `/adventures`. Dismissal persists via the store.

**Accept:** pill updates immediately after completing an adventure; banner stays gone after refresh.

## 5. Welcome (`/welcome`)

**Build:** 16:9 stone video placeholder labelled "A welcome from L&D", one paragraph, three big choice cards: Suggest an itinerary for me → `/onboarding`; Build my own itinerary → `/adventures?build=true`; See all destinations → `/adventures`.

**Accept:** in build mode the "Add to my itinerary" buttons are highlighted (filled purple with lime ring).

## 6. Suggest an itinerary (`/onboarding`)

**Build:** Six single-choice questions, one per step, with a segmented progress bar and Back: role; what you use AI for today; which tools you open weekly; what you want to get better at; how you prefer to learn; how comfortable you are with AI today. Results: 3-4 cards (icon, title, walkaway, labels, "Why this for you: …", per-card Add toggle), plus "Add all to my itinerary", "Go to my itinerary", "Start over". Scoring lives in its own module (`src/lib/recommend.ts`) and is replaced by an AI call in the real build.

**Accept:** results never mention the comfort answer or any level/score; "Add all" adds all recommended slugs once.

## 7. All adventures (`/adventures`)

**Build:** Toggle-chip filter rows: Category, Level, Profession, Works with, Effort, Status (Open / Coming soon / Done). Chips within a row are OR, rows are AND. Card grid grouped by the five categories. Card: icon disc (purple open, stone not), status chip, title, walkaway, label chips, itinerary toggle. Coming-soon cards show "Opens 23 Nov" style text and do not navigate; their itinerary toggle still works. Empty-filter state shows footprints and "Clear filters".

**Accept:** filtering "Status: Done" shows only the seeded completion.

## 8. My itinerary (`/itinerary`)

**Build:** Stops top to bottom, joined by a winding dotted line with two footprints between each pair. Each stop card: icon, title (links if open), labels, status chip done / next up / later (or wave label if not open). The first undone open stop is highlighted lime as "Next up". Up/down and remove controls per stop. "Find more destinations" link. Empty state: footprints, message, the three welcome choices.

**Accept:** reorder and remove persist; completing the next-up adventure moves "Next up" to the following open stop.

## 9. Adventure page (`/adventures/:slug`)

**Build:** Header with icon, title, walkaway, label chips and itinerary toggle. Body split at each `## ` heading into steps; left rail lists steps (all clickable, current highlighted); Back/Next buttons at the bottom. Markdown tables render as bordered tables; every fenced code block renders as a Prompt window (stone panel, "Prompt" label, 15px text, Copy button that shows "Copied"). The final step shows "Mark this adventure complete"; clicking records the completion and opens a celebration (lime glow disc, footprints stepping in, new count, new title if a threshold was crossed, Share → share card preview, Back to my itinerary). Unknown slug → not found.

**Accept:** the Meeting Sponge page has 9 steps, one table, two Prompt windows; completing it again is not possible once done.

## 10. Progress (`/progress`)

**Build:** "Adventures completed: N of 30". Four titles on a horizontal line (First Steps 1, Day Tripper 3, Frequent Flyer 11, Globetrotter 20) with current highlighted yellow and "Next title: X at T completed (k to go)". Badge grid of 30: real adventures in full colour when earned, faint dashed outline when not; remaining planned slots as "To be announced" outlines. Share card preview (purple panel: name, title, count, footprints).

**Accept:** no comparison with other people anywhere.

## 11. Admin (`/admin`)

**Build:** "Coming soon" placeholder listing: Adventure directory (labels and waves), Add or edit an adventure (Markdown + labels form), Analytics and CSV export.

---

## Assumptions made

- Onboarding questions are single choice (simplest version).
- Before any completion the title shows "Ready to set off".
- "N of 30" uses a fixed planned total of 30; badge slots beyond the seeded adventures show as "To be announced".
- "Next up" skips stops that are not open yet.
- Sign-in is not enforced on other routes; it only records that the sample user signed in.
- The comfort answer only nudges level matching and is never shown or stored.
- Coming-soon cards can still be added to an itinerary.
