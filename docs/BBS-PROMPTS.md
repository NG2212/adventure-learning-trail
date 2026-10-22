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

**Build:** 30 adventures, one Markdown file each, YAML frontmatter: slug, icon, title, walkaway (the one-line promise), category, levels[], professions[], audience[], tool, effort, outcome, wave (`W1`-`W4`), slot, next[]. Extra fields (`emoji`, `pattern`, `source`) are ignored. At startup, parse all files into an index sorted by wave then slot.

Label values:
- category: Work smarter with AI · Create with AI · Set up your AI · Automate and delegate · Lead with AI
- levels: Foundations · Intermediate · Advanced
- professions: Everyone (matches every profession filter), Customer Facing, Marketing, Engineering, Product, Design, HR, Finance, or free text (e.g. "Advanced users"), which matches the "Other" chip
- audience: Managers (matched by the "Managers" chip under Profession)
- tool ("Works with"): Any AI tool · Claude · Agentic coding tool
- effort: Quick win · Moderate · Ambitious
- outcome: Build something · Learn something · Work differently
- wave: W1 open now · W2 opens 23 Nov · W3 opens 7 Dec · W4 opens 4 Jan
- icon: sponge, masks, robot, scale, compass, book, toolbox, magnifier, document, chat, palette, calendar, id-card, map-pin, brain, briefcase, gauge, layers, shield, clock, terminal, newspaper, chart, loop, network, people, balance. Unknown or missing → the category's default glyph (Work smarter: compass, Create: palette, Set up: toolbox, Automate: robot, Lead: people). Glyphs are flat SVG, one or two colours.

Bodies: `de-slop` and `board-of-advisors` have full bodies. Other W1 adventures render a short "Content coming" page from the promise; W2-W4 render "This adventure opens on <date>" plus the promise.

**Accept:** /adventures shows 30 cards; adding a file makes it appear in the grid, progress badges and onboarding pool with no code change.

## 2. Store

**Build:** One interface: getPerson, getItinerary, addToItinerary, removeFromItinerary, reorderItinerary(slug, up|down), markComplete(slug) → {count, newTitle, alreadyDone}, getCompletions, getTitle, dismissAnnouncement (plus signIn, isSignedIn, isAnnouncementDismissed, subscribe, getSnapshot for the UI). One localStorage implementation. Seed: Noa Levi, Product Manager, admin; completed `de-slop`; itinerary `board-of-advisors`, `your-ai-identity`, `skills-when-how-and-how-well` in that order (Board of Advisors is Next up). Progress shows 1 of 30, First Steps.

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

Profession chips: an adventure for "Everyone" matches every chip; "Managers" matches `audience: [Managers]`; "Other" also matches free-text professions.

**Accept:** filtering "Status: Done" shows only De-Slop Your Work; "Status: Coming soon" shows 19.

## 8. My itinerary (`/itinerary`)

**Build:** Stops top to bottom, joined by a winding dotted line with two footprints between each pair. Each stop card: icon, title (links if open), labels, status chip done / next up / later (or wave label if not open). The first undone open stop is highlighted lime as "Next up". Up/down and remove controls per stop. "Find more destinations" link. Empty state: footprints, message, the three welcome choices.

**Accept:** reorder and remove persist; completing the next-up adventure moves "Next up" to the following open stop.

## 9. Adventure page (`/adventures/:slug`)

**Build:** Header with icon, title, walkaway, label chips and itinerary toggle. Body rules:
- HTML comments (design notes) are stripped and never rendered. The `# ` title and tagline before the first `## ` are dropped (the header covers them).
- Each `## ` heading is a rail step. Inside "Core task", each `### Step N` is its own step, indented in the rail; text before the first `### Step` stays as a "Core task" step only if non-empty.
- `### Prompt N:` headings and their fenced blocks stay inside their step. Every fenced block is a Prompt window (stone panel, "Prompt" label, 15px text, Copy → "Copied").
- Blockquotes starting with "**In Claude:**" render as a small purple-tinted callout; other blockquotes as a stone example box.
- Tables render as bordered tables.
- In "Where to next", bold names matching an adventure title (case-insensitive, optional trailing colon) become links to that adventure.
Rail items are all clickable; Back/Next at the bottom. The final step of an open adventure shows "Mark this adventure complete" → celebration (lime glow, footprints, new count, new title if crossed, Share → share card). Unknown slug → not found.

**Accept:** /adventures/de-slop has 12 steps including "Step 1: Spot the slop" … "Step 4: Compare the two versions", no design notes, In Claude callouts, and Where to next links to Your AI Identity, Board of Advisors and Skills. /adventures/board-of-advisors has 11 steps.

## 10. Progress (`/progress`)

**Build:** "Adventures completed: N of 30". Four titles on a horizontal line (First Steps 1, Day Tripper 3, Frequent Flyer 11, Globetrotter 20) with current highlighted yellow and "Next title: X at T completed (k to go)". Badge grid of all 30 adventures: full colour when earned, faint dashed outline when not. Share card preview (purple panel: name, title, count, footprints).

**Accept:** no comparison with other people anywhere.

## 11. Admin (`/admin`)

**Build:** "Coming soon" placeholder listing: Adventure directory (labels and waves), Add or edit an adventure (Markdown + labels form), Analytics and CSV export.

---

## Assumptions made

- Onboarding questions are single choice (simplest version).
- Before any completion the title shows "Ready to set off".
- "N of 30" uses a fixed planned total of 30 (now equal to the content count).
- Free-text professions ("Advanced users", "People with sophisticated AI systems", "advanced Claude Code users") match the "Other" chip.
- In recommendations, a named profession scores +3 and "Everyone" scores +1, so specific adventures rank above general ones.
- Adventure `next:` slugs are kept but not used for links; Where to next links come from title matches (some `next` slugs are provisional).
- "Next up" skips stops that are not open yet.
- Sign-in is not enforced on other routes; it only records that the sample user signed in.
- The comfort answer only nudges level matching and is never shown or stored.
- Coming-soon cards can still be added to an itinerary.
