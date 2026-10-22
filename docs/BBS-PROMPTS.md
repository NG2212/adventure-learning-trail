# AI Adventure: build prompts, feature by feature

Each section is a self-contained prompt to rebuild one feature on another platform. Shared rules for every feature:

- Palette: purple #9450FD (~70%), white #FFFFFF, near-black #242424 text, stone #E3D9CF panels; blue #1E77FD, coral #FF644D, green #06A24B for labels and states only; lime #D8F81E, pink #F07FFF, yellow #FBD54D only for "next up", celebrations and progress.
- Poppins everywhere. Rounded corners 16-24px, subtle shadows, no gradients (except a faint lime glow on celebrations), no emojis, no stock imagery.
- Motif: flat footprints (sole + heel shape) in accent colours.
- No adventure-duration estimates, streaks, leaderboards or rankings. Admin session-time analytics are explicitly labelled estimated. Titles describe distance travelled, never ability.
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
- icon: sponge, masks, robot, scale, compass, book, toolbox, magnifier, document, chat, palette, calendar, id-card, map-pin, brain, briefcase, gauge, layers, shield, clock, terminal, newspaper, chart, loop, network, people, balance. Unknown or missing → the category's default glyph (Work smarter: compass, Create: palette, Set up: toolbox, Automate: robot, Lead: people). Discs use badge PNG art with Lucide fallback (see Badge art below).

Bodies: `de-slop`, `board-of-advisors`, `skills-when-how-and-how-well` and `your-own-chief-of-staff` have full bodies (all in the revised structure: The trail, Before you start, Step 1-4, Go further, Proof of work, Related adventures). Other W1 adventures render a short "Content coming" page from the promise; W2-W4 render "This adventure opens on <date>" plus the promise.

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

**Build:** Toggle-chip filter rows: Category, Level, Profession, Works with, Effort, Status (Open / Coming soon / Done). Chips within a row are OR, rows are AND. Card grid grouped by the five categories. Card: icon disc (purple open, stone not), status chip (Done; Ready = open with full body; Content coming = open without body; Opens <date>), title, walkaway, label chips, itinerary toggle. Coming-soon cards show "Opens 23 Nov" style text and do not navigate; their itinerary toggle still works. Empty-filter state shows footprints and "Clear filters".

Profession chips: an adventure for "Everyone" matches every chip; "Managers" matches `audience: [Managers]`; "Other" also matches free-text professions.

**Accept:** filtering "Status: Done" shows only Stay Original with AI; "Status: Coming soon" shows 19.

## 8. My itinerary (`/itinerary`)

**Build:** Stops top to bottom, joined by a winding dotted line with two footprints between each pair. Each stop card: icon, title (links if open), labels, status chip done / next up / later (or wave label if not open). The first undone open stop is highlighted lime as "Next up". Up/down and remove controls per stop. "Find more destinations" link. Empty state: footprints, message, the three welcome choices.

**Accept:** reorder and remove persist; completing the next-up adventure moves "Next up" to the following open stop.

## 9. Adventure page (`/adventures/:slug`)

**Build:** Persistent page head with disc, title, promise, label chips and itinerary toggle. Below it, render Why this adventure as paragraphs, The trail as a compact numbered list in a stone panel, and Before you start as its authored short lines. These sections appear once, above the rail, never inside a step.

- Strip HTML design comments; drop the Markdown title/tagline before the first section.
- The rail contains only `## Step N: …` sections, in file order, plus a final Go further item when authored. Use the complete heading verbatim: no separate renderer numbering. Four core steps plus Go further = five items. Clicking the rail or Next/Back switches only these sections.
- Keep the global header sticky and measure its actual height (including the announcement). Desktop rail sticks below it; mobile rail is a compact horizontal strip directly beneath it, with full heading names retained as accessible labels. Rail and Next/Back smoothly align the new step heading below the header (and mobile strip), with a small reading gap, never at the page top. Initial loads show the page head; respect reduced-motion preferences.
- `### Prompt: <name>` titles the next Prompt window, without added numbering. Keep **What this does:** above the window. Every fenced block is a Prompt window with Copy; untitled fences use “Prompt”. Older numbered prompt headings still supply a name without their number.
- Bold-led Claude, Claude Cowork, Claude Code, monday agents and other AI tools paragraphs/blockquotes remain small tool callouts. Tables remain tables; HTML details remain collapsible with nested Prompt windows.
- Go further consists of collapsed cards for sub-headings or bold-led paragraphs. Labels ending in a colon are not card headings; fenced text and nested details do not split cards.
- Proof of work appears beneath the last **core** step (Step 4 in these files), highlighted and followed by Mark this adventure complete, before Next. It is not a rail item and does not move to Go further. Completing opens the existing celebration; repeating completion is idempotent.
- Footer beneath the reading section: computed What's next, then Related adventures (older title: Where to next) as a small link list. Neither enters the rail. Matching bold adventure titles become links.
- No trail injection in any step. Older Core task / nested Step headings are supported; bodies without numbered steps show a single reading page, retaining older headings and proof/footer without a rail.

**Accept:** All four full-content adventures show the three head sections once, Step 1–4 + Go further in the rail, named Prompt windows, proof and completion under Step 4, and What's next followed by related links below. Stay Original's Step 3 keeps the think-without-AI instruction before the first prompt. No design notes leak.

## 9a. What's next panel

**Build:** In the footer beneath the steps on every adventure page, and inside the completion celebration, show a "What's next" panel chosen by rule: (1) the first itinerary adventure not done and not the current one, labelled "Next in your itinerary"; (2) else one open, undone adventure picked by the onboarding scoring using the person's role (neutral defaults for other answers; ties fall back to lowest slot), labelled "Suggested for you"; (3) else "Browse all adventures". Never static text.

**Accept:** As Noa, /adventures/board-of-advisors ends with What's next = Your AI Identity; after marking it complete, the celebration shows Your AI Identity too.

## 10. Progress (`/progress`)

**Build:** "Adventures completed: N of 30". Four titles on a horizontal line (First Steps 1, Day Tripper 3, Frequent Flyer 11, Globetrotter 20) with current highlighted yellow and "Next title: X at T completed (k to go)". Badge grid of all 30 adventures: full colour when earned, faint dashed outline when not. Share card preview (purple panel: name, title, count, footprints).

**Accept:** no comparison with other people anywhere.

## 11. Admin (`/admin`)

**Build:** five routed Admin tabs with deterministic activity data, filtering and exports, employee drawers, a session-only adventure editor, waves/announcements and settings. See sections 11a–11f below.

---

## Assumptions made

- Onboarding questions are single choice (simplest version).
- Before any completion the title shows "Ready to set off".
- "N of 30" uses a fixed planned total of 30 (now equal to the content count).
- Free-text professions ("Advanced users", "People with sophisticated AI systems", "advanced Claude Code users") match the "Other" chip.
- In recommendations, a named profession scores +3 and "Everyone" scores +1, so specific adventures rank above general ones.
- Adventure `next:` slugs are kept but not used; What's next is computed, and Related adventures links come from title matches.
- The What's next fallback scores with the profile role only, because onboarding answers are not stored.
- "Next up" skips stops that are not open yet.
- Sign-in is not enforced on other routes; it only records that the sample user signed in.
- The comfort answer only nudges level matching and is never shown or stored.
- Coming-soon cards can still be added to an itinerary.

## Design fixes (client review 1)

**Logo:** one `MondayLogo` component, shown left of the "AI Adventure" wordmark in the header and above the wordmark on sign-in. It renders `src/assets/monday-logo.svg` at ~22px high: as-is on light surfaces; on the purple sign-in the wordmark is white while the three marks keep their colours. The favicon uses the three marks.

**Icons:** Lucide icons, stroke 1.75, 58% of the disc, centred. Mapping from frontmatter `icon:`: sponge→Eraser, masks→Drama, robot→Bot, scale→Scale, compass→Compass, book→BookOpen, toolbox→Wrench, magnifier→Search, document→FileText, chat→MessageSquare, palette→Palette, calendar→CalendarCheck, id-card→IdCard, map-pin→MapPin, brain→Brain, briefcase→Briefcase, gauge→Gauge, layers→Layers, shield→ShieldCheck, clock→Clock, terminal→Terminal, newspaper→Newspaper, chart→BarChart3, loop→Repeat, network→Network, people→Users, balance→Scale. Unknown names fall back to the category glyph. On cards the disc is large and centred at the top with the title below; on the adventure page it sits left of the title.

**Disc state (one meaning per colour, everywhere: cards, itinerary, progress badges, What's next):** white disc + purple icon + thin purple ring = open, not in itinerary; solid purple + white icon = in my itinerary; solid purple + small lime check badge = done; faded stone + muted icon = opens later. Priority: done > itinerary > open/later. A legend line "Open · In my itinerary · Done · Opens later" sits under the filters on /adventures. No other purple-vs-stone styling carries meaning.

**Itinerary:** the whole stop card opens the adventure; reorder and remove buttons stop propagation.

**Backgrounds:** signed-in pages use a warm surface #FBF9F6 with a sparse fixed pattern of small footprints in the accent colours at ~8% opacity. The adventure reading column sits on a white card. Sign-in is unchanged.

**Adventure links:** slugs match case-insensitively; a mis-cased link (e.g. /adventures/De-Slop) redirects to the canonical lowercase URL, and an unknown slug shows a friendly "We couldn't find that adventure" page with a link to All adventures. Every page resolves on a direct load or refresh.

## Badge art (replaces Lucide on discs)

**Assets:** `src/assets/icons/<slug>.png`, one per adventure (30 files), 512x512, transparent outside the circle. Each is a purple disc (#9450FD) with a white glyph and one lime accent, cut from five 3x2 generated sheets in reading order: sheet 1 your-ai-identity, understanding-ai-agents, de-slop, use-case-discovery, board-of-advisors, hard-conversations; sheet 2 claude-in-your-docs-sheets-and-slides, skills-when-how-and-how-well, your-own-chief-of-staff, creating-apps-with-ai-done-right, making-decisions-with-ai, research-done-right; sheet 3 build-a-personal-brain-for-your-ai, automation-done-right, managing-with-ai, personalising-claude-code, voice-of-customers-and-employees, your-ai-taste-test; sheet 4 token-smartness, designing-with-ai-results-you-actually-like, planning-with-ai, advanced-skill-patterns, audit-and-improve-your-ai-system, your-team-s-ai-blueprint; sheet 5 the-daily-dispatch, ai-as-your-tutor, redesign-your-week-with-ai, the-loop, agent-teams-and-orchestration, build-your-professional-partner. Adventures are matched to art by slug at startup; a slug without a PNG falls back to the Lucide glyph for its `icon:`.

**State treatments on the art (same disc-state rule):** in my itinerary = art as-is; done = art as-is + small lime check badge; open, not in itinerary = an SVG colour-matrix filter that swaps purple and white (white disc, purple glyph; the lime accent also turns purple) plus a thin purple ring; opens later = art greyscale at 45% opacity. The legend uses the same art treatments.

## 11a. Admin data and shared shell

**Build:** `/admin` redirects to `/admin/overview`; five routed tabs share the existing app header and a Programme admin heading. Admin nav and area are visible only for the demo admin. One Manager view switch applies across all tabs: hide employee tab, employee drawers, names in manager filters and the admin list. This is presentation-only demo privacy, not real authorization. Default is L&D view. Reuse existing colours, badge art, form controls and toast system.

**Mock data:** deterministic seeded generator (`20261022`) with a fixed reference date, 22 Oct 2026. Exactly 140 employees, 28 managers from that list, eight professions and orgs, 2–4 teams per org. Employee: id, name, email, profession, org, team, managerId, isManager (Managers tag), joinedAt, lastActiveAt (null = never), derived title, completions with timestamps, ordered itinerary, estimatedMinutes. Exactly 21 never active; approximately 20% have no completions, most have 1–4, a small tail has 8–12. Almost all completions are W1; a rare later-wave completion represents mock early access. Names and activity are invented except Noa's requested seed: Stay Original completed; Board of Advisors → Your AI Identity → Skills itinerary. Store reads reflect Noa's current local completion/itinerary state.

Activity is a timestamped event ledger: id, personId, slug, kind (opened / added / completed), at; estimated sessions: personId, slug, at, estimatedMinutes. No personal level, score, onboarding answer or comfort field exists. Admin reads (`listPeople`, `getPersonActivity`, `getAggregates`, directory/waves/announcement/admin reads) and every write go through AdventureStore. Admin writes remain in-memory for this session; refresh restores deterministic data. Never call external services.

## 11b. Admin Overview (`/admin/overview`)

**Build:** org, team, manager, profession, wave and last 7/30/60-day filters. Manager view omits named manager options. Six KPI tiles; weekly completion bars, top 10 adventure bars (completed and opens), five category bars, title distribution including Not started, sorted badge distribution with art, org and profession tables. CSV exports for group and badge tables use the currently displayed data, generated client-side. Empty results show zeros safely. Footer: "Analytics are for L&D; managers receive aggregates only."

**Aggregate definitions:** apply employee org/team/manager/profession filters to the population; apply date and wave filters to events. Active = distinct employees with an open event in range; active % = active / all matching employees, including never active. Completed = completion events (unique person/adventure); average = completed / active. Completion rate = completed / open events, not a conversion funnel; repeat opens count. Adds = add events. Estimated time = estimated session minutes for active employees in range; median = median summed minutes per active employee, including zeros. Under a wave filter, session time is attributed to that wave's adventures. Title distribution uses lifetime completion-derived titles within the filtered population (not a score or personal level). Badge distribution counts distinct employees completing each adventure in the selected range. Weekly buckets cover the chosen interval; the final bucket may be partial. Group tables use matching employees for their active % and average completion denominators. Zero denominators yield zero. Wave/category attribution uses current directory labels in this mock.

**Accept:** default shows 140 employees; choosing Product changes totals; Manager view shows aggregates and no employee names. CSV agrees with each displayed table.

## 11c. Admin Employees (`/admin/employees`)

**Build:** search name/email, org/team/manager/profession/title filters, inactive-for-30+-days checkbox (includes never active). Sort every table column; name, email, org, team, manager, profession, derived title, completed count, itinerary count, last active, estimated time. Export filtered and sorted rows. Row click/Enter opens a drawer with all badge art (earned highlighted), ordered itinerary and dated opens/adds/completions. Send a nudge displays only "Nudge drafted: new adventures for Product opened this week"; no message is sent. Manager mode hides the entire table and any open drawer.

**Accept:** searching Noa finds Noa Levi; her drawer reads First Steps, one completion and three stops.

## 11d. Admin Adventures (`/admin/adventures`)

**Build:** directory starts with 30 rows, badge art and all authored labels, wave, Open/Scheduled-date/Draft state, opens, completions and completed/open rate (60-day mock window). Edit opens a two-column sheet: Markdown on left, fixed-list labels and a live card preview on right. Add starts with standard Why / The trail / Before you start / Step 1–3 / Go further / Proof / Related headings and a named fenced prompt. Validate title, promise, slug and uniqueness; retain slug on edits. New saves are Draft, in-memory only. Upload .md reads YAML frontmatter/body into this editor; invalid files show a toast. Extra author fields may be ignored. Inline wave and status selectors update the mock store.

**Accept:** Add adventure saves a Draft visible in the directory with zero opens/completions; refresh returns to 30. No files or real content are published.

## 11e. Admin Waves & announcements (`/admin/waves`)

**Build:** four wave sections, dates and each assigned adventure with a wave dropdown. Save date edits in the mock store. Announcement text, show-from and show-until controls; validate date order. Saving updates the global banner when the reference date is within the interval (existing dismissal still applies). No drag operation required.

## 11f. Admin Settings (`/admin/settings`)

**Build:** names of current L&D admins; choose an employee to Add admin (mock list only, no permissions change). Hide names and this editor in Manager view. Read-only thresholds: First Steps 1, Day Tripper 3, Frequent Flyer 11, Globetrotter 20, with note that these are configurable in the real build.
