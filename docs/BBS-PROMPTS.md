# AI Adventure: build prompts, feature by feature

Current-state frontend specification for the Big Brain Studio port. Each feature below describes the current demo; production requirements are explicitly identified. All application data reads and writes use the swappable AdventureStore. There is no authentication service, database, backend or external call in this mockup.

Shared rules for every feature:

- Purple #9450FD is the strong interface colour; white #FFFFFF card fills, dark navy #1C1F3B headings, outlines and ledges, near-black #242424 body text, stone #E3D9CF and a warm cream #F6F1EA page surface support it. Category chips use 12% light tints and dark text, with colour confined to a small dot and catalogue section underline. No saturated pink/blue/green/yellow chip fills. Lime #D8F81E marks Completed and completion checks; existing artwork and celebration accents remain.
- Poppins; every box uses the one shared deck-style card (see Visual system: card language); buttons use the pressable outlined style; no soft drop shadows; no gradients except a faint lime celebration glow; no emojis or stock imagery. Reuse existing controls and tokens.
- Motif: flat footprints with sole and heel. Motion is light (transforms and opacity only, at most 400ms, never looping); with reduced motion everything appears instantly in its final state.
- Show approved effort estimates. No streaks, employee rankings, leaderboards, personal scores or competitive elements. Titles describe distance travelled, never ability. Admin session-time analytics are explicitly estimated.
- Footer on every page: “AI Adventure · Built for monday.com by Nufar Gaspar”.
- Data access uses one AdventureStore interface; see docs/backend-requirements.md.

## 1. Content index

**Build:** 30 Markdown adventures, indexed from YAML frontmatter at startup and sorted by wave/slot. Fields: slug, icon, title, walkaway, category, levels[], professions[], audience[], tool, effort, optional time, optional video (URL), outcome, wave (W1–W4), slot, next[], optional demo-only review. Extra emoji/pattern/source fields are ignored. Normalise CRLF. Frontmatter is authoritative for labels; adding a file adds it to catalogue, badges and recommendation pool without page-code changes.

- Categories: Work smarter with AI, Create with AI, Set up your AI, Automate and delegate, Lead with AI.
- Levels: Foundations, Intermediate, Advanced.
- Professions: Everyone, Customer Facing, Marketing, Engineering, Product, Design, HR, Finance; free text matches Other. Managers matches audience: [Managers]. Adventures with audience: [Managers] (e.g. Managing with AI, Your Team's AI Blueprint, Hard Conversations) show a neutral stone “For managers” chip immediately after the category chip on cards and page heads.
- Works with: Any AI tool, Claude, Agentic coding tool.
- Effort: 30 minutes, 1 hour, Longer. The chip shows the value as written, and the same derived effortLabel is used on cards and page heads.
- Outcomes: Build something, Learn something, Work differently.
- Opening dates: each adventure has its own `opensOn` (ISO date, stored through AdventureStore, not Markdown), seeded from its wave as placeholders: W1 2026-11-09, W2 2026-11-23, W3 2026-12-07, W4 2027-01-04. An adventure is open when today (local date) is on or after its opensOn. Every schedule surface (card chip/hint, scheduled styling, badge state/tooltip, journey Next up, recommendations, the “This adventure opens on …” page, admin preview) reads that date and shows it as “Opens 23 Nov”, adding the year only outside the current year. demoOpenAll still lets anyone read every page.
- Icons: sponge, masks, robot, scale, compass, book, toolbox, magnifier, document, chat, palette, calendar, id-card, map-pin, brain, briefcase, gauge, layers, shield, clock, terminal, newspaper, chart, loop, network, people, balance. Unknown icons fall back by category: compass, palette, toolbox, robot, people respectively.

All 30 bodies are loaded and contain their authored head sections, core steps, optional Go further, proof and related links. Current demoOpenAll allows every body to be inspected, while dates and schedule styling remain wave-derived. With that switch off, scheduled readers see title/promise/date until opening. Admin Preview (`/adventures/<slug>?preview=1`) renders the full body read-only for the demo admin. Empty open bodies retain Content coming fallback. Review marks follow frontmatter, not wave or body presence.

## 2. Store

**Build:** one localStorage-backed AdventureStore, replaceable on port. Employee contract: getPerson, getItinerary, addToItinerary, removeFromItinerary, reorderItinerary, getCompletions, getTitle, getProofOfWork, saveProofOfWork, saveOnboardingAnswers, getAdventureRating, getDemoSettings, announcement dismissal, subscribe/getSnapshot and demo sign-in methods. Admin reads/writes use the same interface. Employee changes persist; Admin mutations are session-only.

Seed: Noa Levi, Product Manager, demo admin; completed `de-slop`; journey `board-of-advisors`, `your-ai-identity`, `skills-when-how-and-how-well`, in that order. One completion means First Steps. No saved onboarding answers initially. Completion is idempotent; saveProofOfWork is the employee completion path and atomically saves reflection and completion. Editing retains the badge and original date.

Demo settings are source-configured, not employee-persisted. demoOpenAll and showReviewState default true; ratingDisplayMinimum defaults 5. ReviewStamp is a faint top-left uppercase diagonal mark, rotated -20°, no box/border: exact `review: ready` means Ready; other/missing values mean Draft. It does not move chips and can be hidden globally.

## 3. Entry and first visit (`/`)

After hydration, `/` redirects to `/onboarding` without saved answers or `/welcome` with answers. The purple branded sign-in design is the pre-hydration entry shell, not a persistent login gate: logo, footprint trails, AI Adventure headline, “Pick a path. Build something real. Keep it.” and the demo “Continue with your monday account” action. There is no real authentication. Production entry must be SSO-driven.

## 4. Global header and announcement

**Build:** shared sticky header outside the entry route: monday.com logo and AI Adventure wordmark linking to Home, navigation Home · My journey · All adventures · Admin (Admin visible to the demo admin). Greeting “Hi Noa” links to `/profile`; purple title/completion-count pill links to `/my-journey`. Measure actual header height, including mobile navigation and announcement. Dismissible “New on Monday: two new adventures opened.” banner links to `/adventures`; dismissal persists through AdventureStore.

**Accept:** greeting opens Profile, title pill updates after completion, navigation works on direct load and phones, dismissal survives refresh.

## 5. Welcome (`/welcome`)

Home opens onboarding before rendering if Person has no saved answers. Otherwise, in this order: “Welcome, Noa” with “How would you like to start?”; directly beneath it the three choice cards: “Suggest a journey for me” → `/onboarding`; “Build my own journey” → `/adventures?build=true`; “See all destinations” → `/adventures` (descriptions speak of the journey); then the “Welcome to the AI Adventure” heading above the opening video (16:9, poster, controls, no autoplay), introductory copy and the grouped three-state badge grid. Build mode highlights the “Add to my journey” controls. The Your journey panel sits in a right column on desktop and below the choice cards on phones, so the choices always come first.

**Your journey panel (Home and All adventures):** compact card, about 300px wide in a right column sticky under the header on desktop; on phones a card above the content (on Home after the choice cards, on All adventures above the grid). Contents: current title (or Ready to set off) and “N of 30 completed”; Next up = first incomplete schedule-open journey stop (else first incomplete stop) with its disc, title and Continue to its page, or “Add destinations” → `/adventures?build=true` when there is none; Last badge earned = the most recent completion's earned badge with name and date, hidden when nothing is completed. Reads existing store data only; no new fields.

**Employee wording:** the employee UI never says “itinerary”; it says journey (“Add to my journey”, “In my journey”, “Next in your journey”). Internal store method and Admin names may keep the word.

## 6. Onboarding and Profile (`/onboarding`, `/profile`)

**Build:** eight questions, one per step, segmented progress and Back. Prefill from the person's saved answers when present (Redo prefills multi-select arrays). A saved single value from an older save is migrated to a one-item array:

1. “What's your role?” — single choice (`role`).
2. “Which team do you belong to?” — required free text with suggestions (`team`).
3. “What do you use AI for today?” — single choice (`aiUseToday`).
4. “Which tools do you open weekly?” — multi-select, one or more (`weeklyTools[]`).
5. “What do you want to get better at?” — multi-select, one or more (`goal[]`).
6. “What do you want to get out of this?” — multi-select Build confidence with AI / Make everyday work easier / Build something new (`aspirations`), plus “Anything else?” free text (`aspirationText`); require a choice or text.
7. “How do you prefer to learn?” — multi-select, one or more (`learningStyle[]`).
8. “How comfortable are you with AI today?” — single choice (`comfort`).

Eight questions map to nine stored properties because question 6 includes both selections and text. Save all answers together through saveOnboardingAnswers at the final step. Saving recomputes suggested journey destinations while retaining completed stops already in the trail, completions, dates, badges and proof entries. Results show 3–4 suggested cards with individual journey toggles and Home, Go to My journey, Edit answers actions; no scores, comfort explanation or bulk Add all control is displayed. Recommendation logic is isolated in src/lib/recommend.ts for replacement by an AI call; team/aspirations are saved but do not yet affect scoring. For the multi-select fields, scoring sums the matches across all selected values (each matching goal +3, each matching tool +1 — “Any AI tool” counts once — each matching learning preference +1).

Profile shows name/role, a “Your answers” card displaying the owner's saved answers (including comfort; multi-select answers joined with “ · ”), and Redo linking to prefilled onboarding. Its grouped badge grid remains. Answers are private to the employee, never Admin or Manager reporting.

**Accept:** a fresh visit shows onboarding before Home; Profile answers survive refresh; Redo never erases completion/proof records.

## 7. All adventures (`/adventures`)

**Build:** one sticky category-navigation/selection row under the measured header: five pills with a small category dot and dark text. Directly beneath it, a second line, left-aligned: a “More filters” button followed on the same line by the disc legend (the legend wraps below on phones). Active filter chips sit under that line. Pills jump to their category section and highlight the section in view; they do not hide other sections. On phones the pills scroll horizontally; More filters stays on its own line. No separate Category filter row or Category in the panel.

More filters opens Level, Profession, Works with, Time, Outcome. OR within a family, AND between families. Everyone matches any profession; Managers reads audience; Other matches free-text professions. Active selections appear as removable labelled chips below the More filters line, with Clear filters. Five sections are initially expanded, collapsible, and have matching coloured heading dots/underlines. Grid: four cards desktop, three tablet, one phone; compact spacing, padding and icons. Empty results show footprints and Clear filters.

Category chips on cards, page heads, journey stops and the bar use about 12% category-colour tint with #242424 text: Work smarter purple, Create pink, Set up blue, Automate green, Lead yellow. Colour itself appears as the dot and section underline; other metadata chips are neutral stone. Label-family explanations are available on hover, focus and touch.

Cards show disc, title, walkaway, labels, add/remove journey action and wave-date hint where scheduled. Review marks remain separate. Completed passport stamp: lime ring, uppercase COMPLETED, central footprint, rotated -12°, top-right above the labels without shifting them; also on journey completion entries. Scheduled styling and hover/tap opening-date hints follow wave data independently of demoOpenAll.

The shared disc legend reads “Open · In my journey · Completed · Opens later” and renders one sample badge art (the drafting-compass art of Your Team's AI Blueprint) in each of the four card-disc states with exactly the card treatments, so it reads identically to the grid. Helper line above the sticky band: “Every adventure works best on a strong model, for example Opus, with extended thinking on.” This is platform copy, not Markdown content.

**Rating line:** getAdventureRating returns lifetime aggregate mean/count only at or above ratingDisplayMinimum (default 5). Show a small footprint and muted one-decimal average/count beside effort on catalogue, journey, home and suggested cards; the reader head shows it below the title. Below threshold render nothing, including no placeholder. No employee-side ranking or top-rated mark.

**Accept:** one category row, More filters and legend on the line beneath it, Your journey panel (right column desktop, card above grid on phones), working jumps/current-section highlight, removable secondary filters, four-up desktop grid and no saturated category fills.

## 8. My journey (`/my-journey`)

**Build:** header completion count/current title and Find more destinations link. `/itinerary` and `/progress` redirect here; there is no separate Progress page. Sections, in order:

1. **In progress:** only saved added destinations, in their saved order, including completed stops with checks. Up/down/remove controls persist and stop card navigation. The whole stop opens its reader under demo access. The first incomplete schedule-open stop is Next up. Added scheduled stops remain faded in place with actual “Opens 23 Nov” style chip and no Start action until open; demoOpenAll permits page inspection but does not change scheduling. Unadded scheduled destinations appear only in All adventures. Empty state links there with “Add destinations from All adventures”.
2. **Completed:** completed destinations with original dates and Completed passport stamps.
3. **Your title:** First Steps at 1, Day Tripper at 3, Frequent Flyer at 11, Globetrotter at 20 completions; current title highlighted purple, next title/threshold and remaining count. Before the first completion use Ready to set off; after Globetrotter there is no next threshold.
4. **Your badges:** shared category-grouped three-state grid, 56px discs: earned purple/white glyph; open unearned white/purple outline/purple glyph; scheduled unearned stone-grey outline/grey glyph/muted label and reduced whole-item opacity. Earned wins over scheduling; journey membership and demoOpenAll never change badge state. Actual wave-date tooltip on hover/tap. No lime badge ring/check. Profile and Home retain this same grid.
5. **Share card:** purple preview with name, current title, completion count and footprint artwork; no automatic sharing or external call.

No Opens soon section. Between trail cards retain the winding dotted path, alternating left/right feet and mirrored connector alternation. Each footprint is rotated to the current toe direction, at 160° and 190° respectively (opposite the original glyph orientation). Onboarding currently has no connector preview; any future preview must match these angles.

**Accept:** reorder/remove and completion dates persist; all five sections appear; scheduled unadded adventures do not become journey suggestions.

## 9. Adventure page (`/adventures/:slug`)

**Build:** page head with disc, title, promise, shared soft-tint/neutral labels, shared effort/time estimate, thresholded rating line and journey toggle (“Add to my journey” / “In my journey”). Optional `video:` frontmatter (native video file, or a YouTube, Vimeo or Loom URL rendered as an embed). When the adventure has `video` and an introduction section headed “Why this adventure”, that section shows its heading, then the video as its main element: full width of the max-w-3xl column, 16:9, rounded like the other cards, native controls, playsInline, preload="metadata", no autoplay; a native file uses a poster at the same path with `.jpg` in place of the extension (e.g. `/videos/ai-as-your-tutor.mp4` → `/videos/ai-as-your-tutor.jpg`). The section text sits under the player in a Collapsible titled “Prefer to read?”, closed by default. No second player appears beside the trail and there is no caption. When `video` is present without that section, a small 16:9 player sits beside the trail panel with the caption “A short preview”. Without `video`, Why this adventure is plain open text and nothing video-related renders. ai-as-your-tutor, understanding-ai-agents, de-slop, board-of-advisors, making-decisions-with-ai, skills-when-how-and-how-well, your-own-chief-of-staff, creating-apps-with-ai-done-right, your-ai-identity, use-case-discovery, hard-conversations, claude-in-your-docs-sheets-and-slides, research-done-right, build-a-personal-brain-for-your-ai and automation-done-right carry `video: /videos/<slug>.mp4`. Must fit phone width without horizontal scroll. Why this adventure, shared AdventureTrail and Before you start appear once above the rail. Scheduled access follows demo settings; Admin Preview is read-only.

- Strip HTML design comments; drop the Markdown title/tagline before the first section.
- The shared AdventureTrail panel (also in admin preview) keeps the authored title and list, adding purple number discs and alternating faint-purple footprints along a thin stone dotted path; the final print is slightly stronger, and the text stays in its own column on phones. No Markdown parser changes.
- The rail contains only `## Step N: …` sections, in file order, plus a final Go further item when authored. Use the complete heading verbatim: no separate renderer numbering. Four core steps plus Go further = five items. Clicking the rail or Next/Back switches only these sections.
- Keep the global header sticky and measure its actual height (including the announcement). Desktop rail sticks below it; mobile rail is a compact horizontal strip directly beneath it, with full heading names retained as accessible labels. Rail and Next/Back smoothly align the new step heading below the header (and mobile strip), with a small reading gap, never at the page top. Initial loads show the page head; respect reduced-motion preferences.
- Completion entry points: Proof of work section and rail footer open the same dialog; the desktop footer has a stone divider and full-width outline purple “Complete this adventure” action (no step number, footprint or active state), becoming “Completed” with a lime check and “Edit your proof of work” link; mobile pins “Complete” / completed check at the strip’s right end for completion/editing; admin preview disables the action with a “Preview” tooltip.
- `### Prompt: <name>` titles the next Prompt window, without added numbering. Keep **What this does:** above the window. Every fenced block is a Prompt window with Copy; untitled fences use “Prompt”. Older numbered prompt headings still supply a name without their number.
- Bold-led Claude, Claude Cowork, Claude Code, monday agents and other AI tools paragraphs/blockquotes remain small tool callouts. Tables remain tables; HTML details remain collapsible with nested Prompt windows.
- Go further consists of collapsed cards for sub-headings or bold-led paragraphs. Labels ending in a colon are not card headings; fenced text and nested details do not split cards.
- Proof of work appears beneath the last **core** step (the last `## Step N:` section of the file), highlighted and followed by Mark this adventure complete, before Next. It is not a rail item and does not move to Go further. That button opens a small dialog titled with the adventure name: required multiline "What did you build?", optional two-line "What did you learn?", and required "How was this adventure?" with five small footprint choices (purple hover/selection, keyboard accessible). The authored Proof of work instruction appears above the built field; its "For example:" line supplies the placeholder, with a generic fallback. "Complete adventure" stays disabled until built text is nonblank and a 1–5 rating is selected; "Not yet" cancels without saving. Saving writes the entry and completion together, then runs the existing badge/celebration. A completed page shows "Your proof of work" beneath Proof of work with date, rating, built/learned text and Edit. Editing saves without another badge, celebration or date change. Entries are visible to the person and L&D admins, never to other employees or managers.
- Footer beneath the reading section: computed What's next, then Related adventures (older title: Where to next) as a small link list. Neither enters the rail. Matching bold adventure titles become links.
- No trail injection in any step. Older Core task / nested Step headings are supported; bodies without numbered steps show a single reading page, retaining older headings and proof/footer without a rail.

**Accept:** all 30 authored bodies retain their own core-step counts, optional Go further, named prompts, proof instructions and related links; no design notes leak. Page-head sections appear once and completion stays below the last core step.

## 9a. What's next panel

Below the reader and in completion celebration, choose dynamically: first saved journey destination not completed and not current; otherwise a schedule-open, incomplete destination scored with saved answers, or role-based defaults without answers; otherwise Browse all adventures. The journey-first branch follows saved order. Suggested ties use slot order. Display “Next in your journey” or “Suggested for you”; keep authored Related adventures below it and outside the rail. No static next-adventure text.

## 10. Admin (`/admin`)

Five routed mock tabs: Overview, Employees, Adventures, Waves & announcements, Settings. Sections 10a–10f specify them. Manager view is aggregate-only. All demo mutations remain session-only, with no backend or messaging.

## 10a. Admin data and shared shell

**Build:** `/admin` redirects to `/admin/overview`; five routed tabs share the existing app header and a Programme admin heading. Admin nav and area are visible only for the demo admin. One Manager view switch applies across all tabs: hide employee tab, employee drawers, names in manager filters and the admin list. This is presentation-only demo privacy, not real authorization. Default is L&D view. Reuse existing colours, badge art, form controls and toast system.

**Mock data:** deterministic seeded generator (`20261022`) with a fixed reference date, 22 Oct 2026. Exactly 140 employees, 28 managers from that list, eight professions and orgs, 2–4 teams per org. Employee: id, name, email, profession, org, team, managerId, isManager (Managers tag), joinedAt, lastActiveAt (null = never), derived title, completions with timestamps, ordered itinerary, estimatedMinutes. Exactly 21 never active; approximately 20% have no completions, most have 1–4, a small tail has 8–12. Almost all completions are W1; a rare later-wave completion represents mock early access. Names and activity are invented except Noa's requested seed: Stay Original completed; Board of Advisors → Your AI Identity → Skills itinerary. Store reads reflect Noa's current local completion/itinerary state.

Activity is a timestamped event ledger: id, personId, slug, kind (opened / added / completed), at; estimated sessions: personId, slug, at, estimatedMinutes. The Admin dataset contains no personal level, score, onboarding answer or comfort field; private answers belong only to Person. Admin reads (`listPeople`, `getPersonActivity`, `getAggregates`, directory/waves/announcement/admin reads) and every write go through AdventureStore. Admin writes remain in-memory for this session; refresh restores deterministic data. Never call external services.

## 10b. Admin Overview (`/admin/overview`)

**Build:** org, team, manager, profession, wave and last 7/30/60-day filters. Manager view omits named manager options. Six KPI tiles; weekly completion bars, top 10 adventure bars (completed and opens), five category bars, title distribution including Not started, sorted badge distribution with art, org and profession tables. CSV exports for group and badge tables use the currently displayed data, generated client-side. Empty results show zeros safely. Footer: "Analytics are for L&D; managers receive aggregates only."

**Aggregate definitions:** apply employee org/team/manager/profession filters to the population; apply date and wave filters to events. Active = distinct employees with an open event in range; active % = active / all matching employees, including never active. Completed = completion events (unique person/adventure); average = completed / active. Completion rate = completed / open events, not a conversion funnel; repeat opens count. Adds = add events. Estimated time = estimated session minutes for active employees in range; median = median summed minutes per active employee, including zeros. Under a wave filter, session time is attributed to that wave's adventures. Title distribution uses lifetime completion-derived titles within the filtered population (not a score or personal level). Badge distribution counts distinct employees completing each adventure in the selected range. Weekly buckets cover the chosen interval; the final bucket may be partial. Group tables use matching employees for their active % and average completion denominators. Zero denominators yield zero. Wave/category attribution uses current directory labels in this mock.

**Accept:** default shows 140 employees; choosing Product changes totals; Manager view shows aggregates and no employee names. CSV agrees with each displayed table.

**Proof-of-work reporting:** Overview includes "Most loved adventures", sorted by average adventure satisfaction rating with rating counts and independent category/profession filters (profession means the respondent's profession). This is adventure feedback, not employee scoring. A separate L&D-only "Proof of work" section lists all latest entries with adventure, person, completion date, rating, built and learned text; search person/adventure/text, filter adventure/category/profession, and export exactly the visible rows to CSV. Manager view renders neither entries nor their export controls. The adventure directory shows average rating/count per row; employee drawers list that person's entries with adventure/date/rating/built text. Every existing mock completion has a deterministic short, varied Monday-work reflection; ratings are mostly 4–5 with some 3s. No backend or messaging is added.

## 10c. Admin Employees (`/admin/employees`)

**Build:** search name/email, org/team/manager/profession/title filters, inactive-for-30+-days checkbox (includes never active). Sort every table column; name, email, org, team, manager, profession, derived title, completed count, itinerary count, last active, estimated time. Export filtered and sorted rows. Row click/Enter opens a drawer with all badge art (earned highlighted), ordered itinerary and dated opens/adds/completions. Send a nudge displays only "Nudge drafted: new adventures for Product opened this week"; no message is sent. Manager mode hides the entire table and any open drawer.

**Accept:** searching Noa finds Noa Levi; her drawer reads First Steps, one completion and three stops.

## 10d. Admin Adventures (`/admin/adventures`)

**Build:** directory starts with 30 rows, badge art and all authored labels, wave, Open/Scheduled-date/Draft state, opens, completions and completed/open rate (60-day mock window). Edit opens a two-column sheet: Markdown on left, fixed-list labels, an optional “Preview video URL” field (frontmatter `video:`) and a live card preview on right. Add starts with standard Why / The trail / Before you start / Step 1–3 / Go further / Proof / Related headings and a named fenced prompt. Validate title, promise, slug and uniqueness; retain slug on edits. New saves are Draft, in-memory only. Upload .md reads YAML frontmatter/body into this editor; invalid files show a toast. Extra author fields may be ignored. Inline wave and status selectors update the mock store.

**Accept:** Add adventure saves a Draft visible in the directory with zero opens/completions; refresh returns to 30. No files or real content are published.

## 10e. Admin Waves & announcements (`/admin/waves`)

**Build:** note at top: “Dates are placeholders until the launch date is confirmed. Each adventure opens on its own date.” plus a “Reset all to wave defaults” action with confirm. Four wave sections with date inputs; saving a wave date asks once whether to apply it to all adventures in the wave. Each assigned adventure shows its own opening date input, Save (toast “Opening date saved”) and a wave dropdown; moving wave keeps its own date unless it still had the old wave's date, then it takes the new wave's. Opening dates persist through AdventureStore. Announcement text, show-from and show-until controls; validate date order. Saving updates the global banner when the reference date is within the interval (existing dismissal still applies). No drag operation required.

## 10f. Admin Settings (`/admin/settings`)

**Build:** names of current L&D admins; choose an employee to Add admin (mock list only, no permissions change). Hide names and this editor in Manager view. Read-only thresholds: First Steps 1, Day Tripper 3, Frequent Flyer 11, Globetrotter 20, with note that these are configurable in the real build.

## Visual system: logo, icons and states

**Surface:** warm cream page background #F6F1EA with the sparse footprint pattern at low opacity; headings dark navy #1C1F3B; cards are white.

**Card language (one shared style for every box):** white fill, 2px #1C1F3B outline, ~20px radius, and a hard 6px #1C1F3B ledge under the card (no blur) that follows the bottom radius. A 4px accent strip sits inside the card just above the ledge: the category colour for adventure cards, adventure page heads and journey stops; lime for completed items (completed cards, completed journey stops, Completed list, own proof of work, celebration, share card frame); purple for everything else. Generous padding, semibold navy titles, muted grey supporting text and an optional hairline rule under it. Used by adventure cards, journey stops and Completed entries, title ladder tiles, the Your journey panel, the trail panel, prompt windows' outer frame, proof of work, What's next, collapsibles and Go further cards, the three Home choice cards, onboarding option tiles, Profile's Your answers, badge-group panels, the share card frame, all dialogs (completion and celebration), and Admin KPI tiles, panels, table containers and drawers. Chips and tooltips keep their own style. Hover on an interactive card lifts it 2px and grows the ledge to 8px.

**Buttons and controls:** filled or outlined buttons (primary, outline, secondary, destructive) have a 2px navy outline, ~12px radius and a hard 4px navy ledge; outline buttons are white, primary stays purple. On press the button moves down 4px and the ledge disappears. Applies to buttons, More filters, rail completion control, journey reorder controls, Back/Next and dialog actions. Ghost and link buttons (category pills, rail step items) stay flat.

**Eyebrow labels:** small uppercase, letter-spaced mono label in purple above page titles and section headings, e.g. "AI ADVENTURE · ALL ADVENTURES", "AI ADVENTURE · HOME", "MY JOURNEY · THE TRAIL". Adventure page heads show "AI ADVENTURE · <CATEGORY>"; steps show "STEP N OF M" (core steps only) or "GO FURTHER"; onboarding shows "QUESTION N OF 8".

**Icon tiles:** a card's small leading icon sits in a solid ~14px-radius rounded square in the accent colour with a white glyph: Home choice cards, Admin KPI tiles and Go further cards. Adventure discs keep their round badge art.

**Motion:** cards rise 12px and fade in (280ms ease-out) the first time they scroll into view, staggered 50ms within a grid, list or section. On a step change (rail, Next, Back) the section fades and its blocks (eyebrow and heading, paragraphs, tables, prompt windows, callouts, collapsibles) rise in one after another with the same stagger. The trail panel's numbered items and footprints rise in turn on first view while each dotted path segment draws downward. On My journey stops and connector footprints appear one after the other along the trail, and reordering animates stops to their new positions. The active rail item slides its highlight 4px (desktop). The Completed stamp lands with a short stamp-down scale; the existing celebration is unchanged. Transforms and opacity only, no layout shift, nothing over 400ms, nothing loops. With prefers-reduced-motion there is no movement: content, hovers and presses show their final state instantly.

**Logo:** shared MondayLogo left of the AI Adventure wordmark (~22px); light-surface artwork as supplied, inverted wordmark on the entry shell with original coloured marks. Favicon uses the marks.

**Icons:** Lucide stroke 1.75, centred at about 58% of card disc. Frontmatter mapping: sponge→Eraser, masks→Drama, robot→Bot, scale/balance→Scale, compass→Compass, book→BookOpen, toolbox→Wrench, magnifier→Search, document→FileText, chat→MessageSquare, palette→Palette, calendar→CalendarCheck, id-card→IdCard, map-pin→MapPin, brain→Brain, briefcase→Briefcase, gauge→Gauge, layers→Layers, shield→ShieldCheck, clock→Clock, terminal→Terminal, newspaper→Newspaper, chart→BarChart3, loop→Repeat, network→Network, people→Users. Category fallback applies to unknown names.

**Card/page discs:** Completed > journey membership > schedule-open/later. Open not added: white/purple glyph/thin purple ring. Added: purple/white glyph. Completed: purple with lime check. Scheduled not added: faded stone/muted glyph. An added scheduled journey stop also has its explicit whole-stop faded treatment. Keep these separate from reward badges.

**Reward badges:** Profile, Home and My journey use only earned/open/scheduled states, not membership: purple/white earned, white/purple open unearned, stone-grey outline/grey glyph/muted label and reduced item opacity scheduled unearned. Schedule ignores demoOpenAll; earned has priority. No lime accents on this grid.

**Completed stamp:** round passport treatment described in §7; Ready/Draft review marks remain separate.

**Backgrounds and links:** cream signed-in surface with sparse low-opacity footprint pattern; reading content sits in white cards. Slug lookup is case-insensitive with canonical lowercase redirect; unknown slugs show a friendly not-found state linking to All adventures. Direct routes and refresh must work.

## Badge art and state treatments

**Assets:** `src/assets/icons/<slug>.png`, one per adventure (30 files), 512x512, transparent outside the circle. Each is a purple disc (#9450FD) with a white glyph and one lime accent, cut from five 3x2 generated sheets in reading order: sheet 1 your-ai-identity, understanding-ai-agents, de-slop, use-case-discovery, board-of-advisors, hard-conversations; sheet 2 claude-in-your-docs-sheets-and-slides, skills-when-how-and-how-well, your-own-chief-of-staff, creating-apps-with-ai-done-right, making-decisions-with-ai, research-done-right; sheet 3 build-a-personal-brain-for-your-ai, automation-done-right, managing-with-ai, personalising-claude-code, voice-of-customers-and-employees, your-ai-taste-test; sheet 4 token-smartness, designing-with-ai-results-you-actually-like, planning-with-ai, advanced-skill-patterns, audit-and-improve-your-ai-system, your-team-s-ai-blueprint; sheet 5 the-daily-dispatch, ai-as-your-tutor, redesign-your-week-with-ai, the-loop, agent-teams-and-orchestration, build-your-professional-partner. Adventures are matched to art by slug at startup; a slug without a PNG falls back to the Lucide glyph for its `icon:`.

**Card/page art:** added = PNG as supplied; Completed = supplied PNG plus lime check; open not added = SVG colour-matrix purple/white swap (lime detail becomes purple) and thin purple ring; scheduled not added = greyscale at about 45% opacity. Legend uses these same art treatments. Lucide fallback follows the same card-disc meanings.

**Badge grids:** render the mapped Lucide glyph in the shared 56px three-state disc, not the generated PNG. Earned purple/white, open white/purple, scheduled grey/muted with reduced item opacity and wave tooltip. Never bring the PNG lime detail into badge-grid rewards.

## Head tags, icons and manifest

Carry public/favicon.ico, favicon-512.png, apple-touch-icon.png, og-image.png (1200×630) and site.webmanifest into the Big Brain Studio port, with favicon/apple icon/manifest links. Each content page has app-specific title/description, og:title/og:description, og:type=website and twitter:card=summary_large_image. Entry title is AI Adventure; adventures use “<adventure title> · AI Adventure”. Preserve the shared absolute-site og-image URL where configured; never emit a relative image URL. Port must retain both OG and Twitter preview image tags with the same absolute og-image URL and verify asset responses. Current leaf metadata is supplied by route head functions and the root supplies icon/manifest links. The image asset is present, but current head code does not configure OG/Twitter image tags; the absolute image-tag requirement must be implemented during the port, not assumed present.

## Demo-only switches to remove for production

- Remove demoOpenAll; enforce actual wave opening dates and authorised previews.
- Remove showReviewState and demo-only `review: ready` frontmatter/review marks; they are review aids, not production publication status.
- Keep ratingDisplayMinimum as a real aggregate-privacy/display setting, default 5.
- Replace the deterministic mock Admin dataset and session-only writes with authorised real data; replace client-side admin gating with server-enforced access.
- Replace demo entry/onboarding-on-first-visit with SSO-driven identity plus saved-answer checks. Onboarding answers remain private and editable.

## Assumptions made

- Six questions are single-choice; team is free text; aspirations is multi-select plus optional text.
- Team and aspirations are stored for the port but not yet used by deterministic scoring.
- Ready to set off applies before a first completion. The planned total is 30.
- Free-text professions match Other; Managers matches adventure audience.
- Recommendation named profession scores +3, Everyone +1. Comfort affects matching only, never an employee level/score; the owner can see their own comfort answer in Profile.
- Adventure next[] remains authored data but the displayed next destination is computed. Related links come from authored title matching.
- What's next uses saved answers when available and role-based defaults otherwise. Next up skips schedule-closed stops.
- Demo sign-in is not security; entry/Home check saved answers, not a real session.
- Coming-soon cards can still be added to a journey. Added scheduled stops retain their position; only demo reader access bypasses their date.
- Share card is a local preview; no external sharing occurs automatically.
