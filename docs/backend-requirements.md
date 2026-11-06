# AI Adventure: backend requirements

Current-state data and behavior contract for the Big Brain Studio port. The current frontend is demo-only: localStorage employee data, deterministic in-memory Admin data, no real authentication, backend or external calls. Implement AdventureStore (src/store/types.ts) without changing the employee flows. Requirements for production authorization, identity and analytics below are explicitly separate from mock behavior.

## Entities

| Entity | Fields | Notes |
| --- | --- | --- |
| Person | id, name, firstName, role, isAdmin, onboardingAnswers? | Mock person now; company SSO identity in production. Answers are private to the owner and recommendation logic. |
| Adventure | slug, icon, title, walkaway, category, levels[], professions[], audience[], tool, effort, time?, video?, outcome, wave, slot, next[], body, review?, iconAsset? | Markdown/frontmatter content. time is optional free text; video is an optional preview URL (file or hosted YouTube/Vimeo/Loom page) shown beside the trail panel and editable in the Admin adventure editor; review is demo-only, not production status. iconAsset is derived badge-art path. Extra author fields and design comments are never displayed. |
| Wave | number, opensOn | Wave data defines schedule. W1 open; W2 23 Nov, W3 7 Dec, W4 4 Jan in the demo. Production uses actual dates. |
| ItineraryItem | personId, adventureSlug, position | Internal ordered model behind employee-facing My journey. |
| Completion | personId, adventureSlug, completedAt | Unique person/adventure; one earned badge per completion. |
| ProofOfWork | personId, adventureSlug, built, learned, rating, completed_at | Built nonblank, learned optional, integer rating 1–5. Atomic entry/completion write; edits retain original date and badge. |
| Title | name, threshold | First Steps 1, Day Tripper 3, Frequent Flyer 11, Globetrotter 20; derived from completion count. |
| Announcement | id, text, linkTo, activeFrom, activeTo | Active announcement with date window. |
| AnnouncementDismissal | personId, announcementId | Employee dismissal. |

### Person.onboardingAnswers

Eight questions map to the following fields (aspirations includes an additional free-text property):

| Question | Stored fields / values |
| --- | --- |
| What's your role? | role: Customer Facing, Marketing, Engineering, Product, Design, HR, Finance, Managers, Other |
| Which team do you belong to? | team: required free text in the UI, with suggestions |
| What do you use AI for today? | aiUseToday: nothing, writing, analysis, building |
| Which tools do you open weekly? | weeklyTools[]: one or more of office, claude, coding |
| What do you want to get better at? | goal[]: one or more of productivity, creating, setup, automation, leading |
| What do you want to get out of this? | aspirations: selected strings (Build confidence with AI / Make everyday work easier / Build something new); aspirationText: optional Anything else text |
| How do you prefer to learn? | learningStyle[]: one or more of quick, steady, deep |
| How comfortable are you with AI today? | comfort: new, some, confident |

weeklyTools, goal and learningStyle are arrays (multi-select). Reads and saves migrate a stored single value to a one-item array. Profile joins selections with “ · ”; Redo prefills them. saveOnboardingAnswers saves all fields atomically, trims text and recomputes recommendations. Replace incomplete suggested stops, retain completed stops already on the trail (in their existing relative order), then append deduplicated recommendations. Never mutate completions, proof entries, completion dates or earned badges. Profile reads the owner's answers; Redo prefills onboarding. Team/aspirations are currently stored context, not scoring signals. In the demo `/` and `/welcome` route to onboarding when answers are absent; production checks follow SSO identity.

## Label values (enumerations)

| Field | Allowed values |
| --- | --- |
| category | Work smarter with AI, Create with AI, Set up your AI, Automate and delegate, Lead with AI |
| levels | Foundations, Intermediate, Advanced |
| professions | Everyone, Customer Facing, Marketing, Engineering, Product, Design, HR, Finance; free text allowed (filters as "Other") |
| audience | Managers (shows a neutral stone “For managers” chip right after the category chip on cards and page heads) |
| tool | Any AI tool, Claude, Agentic coding tool |
| effort | 30 minutes, 1 hour, Longer |
| video | Optional URL; when absent nothing renders |
| time | Optional free text, e.g. ~1 h; overrides the effort duration default |
| review | Optional demo-only frontmatter; exact ready shows Ready, other/missing values show Draft while showReviewState is true |
| outcome | Build something, Learn something, Work differently |
| wave | W1 (open), W2 (23 Nov), W3 (7 Dec), W4 (4 Jan) |
| icon | sponge, masks, robot, scale, compass, book, toolbox, magnifier, document, chat, palette, calendar, id-card, map-pin, brain, briefcase, gauge, layers, shield, clock, terminal, newspaper, chart, loop, network, people, balance |

Filter semantics: "Everyone" matches every profession filter; the "Managers" filter reads `audience`.


### Effort duration and label presentation

effortLabel returns the effort value as written: 30 minutes, 1 hour or Longer. No learning-duration tracking field is required.

Category chips everywhere use about 12% soft tint and #242424 text, with a small category dot: Work smarter purple, Create pink, Set up blue, Automate green, Lead yellow. Strong category colour appears only in dots/section underlines; other metadata is neutral stone. Label hints support hover, focus and touch. This is presentation derived from existing categories, not additional data.

## Mock-store flags and production settings

- **Demo-only:** demoOpenAll=true permits all reader pages regardless of wave. It never changes schedule-derived dates, badge states or faded scheduled journey stops. Remove for production; restore real date gating.
- **Demo-only:** showReviewState=true shows top-left Ready/Draft review marks; exact optional review: ready means Ready, missing/other values Draft. Remove the switch, marks and demo review field in production; publication status is separate.
- **Keep in production:** ratingDisplayMinimum=5 is a real aggregate display/privacy setting. getAdventureRating returns only mean/count at or above threshold; otherwise undefined with no rendered icon/placeholder. Cards/head show footprint, one-decimal average and count; no employee-side ranking.
- **Demo-only infrastructure:** deterministic Admin dataset, session-only mutations and client-side isAdmin/Manager view gating. Replace with authorized data and server enforcement. Mock signIn is not SSO.

## Reads and writes per screen

| Screen | Reads | Writes |
| --- | --- | --- |
| Entry / | Person and saved-answer presence | Demo signIn; production SSO session |
| Header | Person, completion count/title, announcement/dismissal | dismissAnnouncement |
| Home /welcome | Person, saved-answer presence, adventure/wave index, own journey and completions (badges, Your journey panel) | Journey entry navigation; Continue / Add destinations |
| Onboarding /onboarding | Own saved answers, adventure index/recommendations | saveOnboardingAnswers; individual add/remove journey toggles on results |
| Profile /profile | Own Person.onboardingAnswers, own completions, adventures/waves | Redo navigation to prefilled onboarding |
| All adventures /adventures | Index, waves, own completions/journey, thresholded ratings | addToItinerary, removeFromItinerary; filters are local presentation state |
| My journey /my-journey | Ordered journey, adventures/waves, own completions, titles, person, badge states, ratings | reorderItinerary, removeFromItinerary |
| Adventure /adventures/:slug | Body under current access rules, own proof/completion/journey, ratings, What's next | add/remove journey, saveProofOfWork |
| Admin /admin/* | Directory, waves, people/activity, aggregates, permitted proof entries, settings | Mock CRUD/waves/announcements/admin-list edits; client CSV export |

## Catalogue presentation contract

One measured sticky band contains a single category navigation/selection row with five pills, and directly beneath it a left-aligned line with the “More filters” button and the disc legend to its right (wrapping below on phones). Pills jump/highlight sections rather than filtering other categories out. No Category in the secondary panel; panel has Level, Profession, Works with, Effort, Outcome. OR within families, AND across them. Active filters are removable chips under the More filters line; sections are initially open and collapsible. Four desktop/three tablet/one phone cards. The Your journey panel (see below) sits in a sticky right column on desktop and above the grid on phones. Filters and collapse state need no persistence.

### Catalogue helper line

Under the page intro and above filters, retain: “Every adventure works best on a strong model, for example Opus, with extended thinking on.” Platform copy, not per-adventure Markdown. Shared legend on the More filters line: Open · In my journey · Completed · Opens later, each rendered with one sample badge art (the drafting-compass art of Your Team's AI Blueprint) in the matching card-disc treatment.

### Your journey panel

Shown on Home and All adventures: about 300px right column sticky under the header on desktop, a card on phones (Home: after the three choice cards; All adventures: above the grid). Reads only existing data: current title and N of 30 completed; Next up = first incomplete schedule-open journey stop (else first incomplete stop) with Continue to its page, or Add destinations → build mode when none; Last badge earned = most recent completion's badge, name and date, hidden with no completions.

### Employee wording

Employee-facing copy uses “journey”, never “itinerary” (Home choices “Suggest a journey for me”, “Build my own journey”, “See all destinations”; “Add to my journey”; What's next “Next in your journey”). Store methods, events and Admin labels may keep itinerary.

### Home order

Welcome line, then the three choice cards, then the L&D video placeholder and intro copy, then the badge grid.

## My journey presentation contract

Sections: In progress, Completed, Your title, Your badges, share card. `/itinerary` and `/progress` redirect to `/my-journey`; there is no standalone Progress or Opens soon section. In progress contains only saved ordered stops, retaining completed stops/checks. Scheduled added stops stay faded in place with actual wave date and no Start action until open, regardless of demoOpenAll. Unadded scheduled destinations belong only in All adventures. Empty state links there with “Add destinations from All adventures”.

Completed entries retain dates and passport stamps. Title ladder uses shared thresholds 1/3/11/20, current purple highlight and next title/threshold/count remaining. Shared grouped badge grid is also on Profile and Home. Share preview uses person's name/title/count; no external transmission. Connector footprints use current 160°/190° angles, alternating left/right feet and mirrored connectors over the unchanged winding dotted path. Onboarding has no connector today; future previews must match. No new store fields for these visuals.

## Adventure reader presentation contract

Page head: title/promise/disc, shared labels and effort/time, thresholded rating line, journey toggle; optional `video:` renders a small 16:9 player (native video, or embed for hosted URLs) beside the trail panel with caption “A short preview”, nothing when absent. Parse Markdown into head sections, core steps, optional Go further, proof and related footer. Hide HTML design notes; keep authored prompt names, tables, tool callouts and details. Render head sections once outside the rail. Core steps plus optional Go further are the only rail items; authored headings remain intact. Bodies without numbered steps retain a single-page fallback.

### AdventureTrail and step navigation

Shared AdventureTrail, including Admin Preview, renders the authored list with purple numbered discs, alternating faint-purple prints and a stone dotted path; preserve bold clauses and fixed mobile text spacing. No Markdown parser or data-model changes for decoration. Measure sticky header/mobile rail heights; reader-initiated rail/Next/Back smoothly aligns headings below them, with reduced-motion support. Initial loads retain page head. Scroll state is not persisted.

### Completion entry points and atomic proof

Proof remains under the last core step, before Next, never a rail item or moved to Go further. Proof action and desktop rail footer/mobile strip action open the same page-owned dialog. Desktop footer is separated by a stone divider and becomes Completed with lime check/Edit link; mobile keeps completion/edit action at the strip's right edge. Preview disables completion with Preview tooltip.

Dialog: required built text, optional learned text, required five-footprint integer rating; authored guidance and example placeholder remain. Save is disabled for blank built or absent rating; cancel writes nothing. saveProofOfWork validates/trims and atomically upserts proof plus idempotent completion. First completion triggers badge/title celebration; edits retain date/badge and do not replay awards. Completed page shows own reflection/date/rating and Edit.

### What's next and related adventures

Platform-computed, not authored: first saved journey stop not completed and not current (no schedule test on this branch); otherwise schedule-open incomplete candidates scored using saved answers or role-based defaults. Slot order breaks fallback ties and zero scores. Otherwise Browse all adventures. Related adventures stays authored/title-matched below the computed panel. Neither is a rail item. Celebration uses the same selection.

## Card style and motion (presentation note)

Presentation only; no data or API impact. Every box uses one shared card style: white fill, 2px dark navy #1C1F3B outline, ~20px radius, hard 6px navy ledge, and a 4px accent strip (category colour for adventure cards/heads/journey stops, lime for completed items, purple otherwise). Buttons have a navy outline, ~12px radius and a 4px ledge that disappears on press. Purple uppercase mono eyebrow labels sit above page titles, section headings and steps ("STEP N OF M"); Home choice cards, Admin KPI tiles and Go further cards use solid rounded-square icon tiles. Page surface is cream #F6F1EA, headings navy. Motion: cards rise and fade in on first view with a 50ms stagger, step changes reveal blocks in turn, trail items and connector footprints draw in, journey reordering animates, hover lifts cards 2px, the Completed stamp lands with a stamp-down scale; transforms and opacity only, at most 400ms, no loops. Reduced motion shows every final state instantly.

## Disc, badge and Completed stamp rules

### Card and page discs

Derived priority: Completed if own completion exists; otherwise added if in own journey; otherwise open/later by wave. Completed = purple disc plus lime check; added = purple/white; open not added = white/purple glyph/thin purple ring; scheduled not added = faded stone/muted glyph. Generated PNG treatment: supplied art for added/Completed, purple-white colour swap and ring for open, greyscale about 45% opacity for later; Lucide fallback matches states. Journey scheduled stops explicitly fade the whole item independently of membership and demo access.

### Reward badge grids

Shared Profile/Home/My journey BadgeGrid uses mapped Lucide glyphs and 56px discs, grouped by category. Earned = purple/white; open unearned = white/purple outline/purple glyph; scheduled unearned = stone-grey outline/grey glyph, muted-grey label, reduced whole-item opacity and real wave-date hover/tap tooltip. Earned wins; wave schedule ignores demoOpenAll and membership. No lime ring/check or PNG lime detail on rewards. No new entity fields.

### Completed passport stamp

Uppercase COMPLETED, small footprint, lime circular ring and -12° rotation. Card top-right above label area without moving chips; also on dated journey Completed entries. Distinct from faint diagonal demo Ready/Draft marks.

## Events to log in production

- adventure_opened (personId, slug, at)
- itinerary_added / itinerary_removed (personId, slug, source: onboarding | grid | adventure_page)
- adventure_completed (personId, slug, at)
- badge_earned and title_reached when a threshold is crossed

No live logging backend exists in the current demo. Do not count read-only previews as activity.

## Recommendation rules and replacement contract

Local src/lib/recommend.ts is the replacement boundary for a production AI call. Input is the full saved-answer object; current deterministic scoring uses role, AI use, tools, goal, learning style and comfort. Output is 3–4 recommendations with internal why/score; employees never see scores or personal levels.

| Signal | Rule | Points |
| --- | --- | --- |
| Role | named in adventure.professions (Managers: in audience) | +3 |
| Role | adventure is for "Everyone" (only when not named) | +1 |
| Goal | each selected goal that maps to the category (productivity → Work smarter, creating → Create, setup → Set up, automation → Automate and delegate, leading → Lead) | +3 per match |
| Comfort | maps to level (new → Foundations, some → Intermediate, confident → Advanced) | +2 |
| Weekly tools | maps to tool (office → Any AI tool, Claude → Claude, coding → Agentic coding tool); "Any AI tool" always matches once | +1 per selected matching tool |
| AI use today | maps to category | +1 |
| Learning style | maps to effort (one sitting → 30 minutes, steady → 1 hour, big → Longer) | +1 per selected matching style |
| Open now | wave is open | +1 |

Seed for the demo person: completed `de-slop`; itinerary `board-of-advisors`, `your-ai-identity`, `skills-when-how-and-how-well`.

Return top 4 when at least 4 score above 0, else top 3. Recommendation ties use wave order, with stable content-index order for remaining ties; the separate What’s next fallback uses slot order. The internal why value never references comfort or level and current results display only cards, not why lines. Team, aspirations and aspirationText are stored but do not affect this scoring.


## Admin operations and privacy boundary

Directory/editor, waves/announcements, settings and client CSV use the shared store. L&D view includes individual employee activity/completion and proof entries. Overview includes content satisfaction averages and aggregate engagement. Manager mock view hides names/details but is not server-enforced or automatically restricted to a manager's own team. Production managers receive only team-limited aggregates produced by L&D; enforce this on reads/exports, not CSS.

## Privacy rules

- No employee scores, levels, rankings, leaderboards or streaks. Adventure content levels and satisfaction averages are not employee scoring; Admin may sort content by satisfaction.
- All onboarding answers, including comfort and self-reported team/aspirations, belong to the owner/recommendation logic, not L&D or Manager reports. Owner reads/edits through Profile/Redo only.
- Proof reflections are visible to the author and L&D only, never other employees/managers. Author edits only their own entry; L&D exports require authorization.
- Individual engagement/completion data is L&D-only; managers receive only team-limited aggregate reports from L&D.
- Share card is a local preview; transmit only on an explicit employee action in a production sharing flow.

## Admin analytics and mock contract

Admin currently uses deterministic seeded in-memory analytics: 140 employees and 60 days of activity, fixed reference date 2026-10-22. Admin edits, drafts, waves, announcements and added admins last only for the browser session; they never mutate source Markdown or a backend. Real authorization remains a rebuild requirement, not the client-side demo flag.

### Identity fields from Monday's identity source

Extend Person with email, profession, org, team, managerId, isManager, joinedAt and lastActiveAt. **Org, team and manager must come from Monday's identity source**, with stable identifiers and manager references to employees in that source. Do not infer reporting relationships from names. Titles remain derived from lifetime completions; employee levels and scores are never stored; comfort is stored only in private Person.onboardingAnswers and is excluded from identity synchronization and Admin reporting. Self-reported onboarding team text must not overwrite identity-source reporting relationships.

### Queries and metric events

- `getProofOfWork(slug)` reads the current person's entry; `saveProofOfWork(slug, {built, learned, rating})` validates nonblank built text and integer 1–5 rating, trims text, and atomically upserts the entry and idempotent completion. Existing completion timestamps never change on edits; edits do not re-award badges or titles. Mock employee entries persist through the browser-storage AdventureStore; generated colleagues remain deterministic mock data, not a backend.
- `listProofEntries({personId, slug, category, profession, search})` is L&D-only; search matches person/adventure/built/learned text, newest completed_at first. Overview table and CSV use the identical filtered rows. Employee drawers query by personId. Manager view must not request/display individual entries or expose exports.
- `getRatingSummaries({category, profession})` returns adventure slug/title, rating count and arithmetic mean (zero with no ratings). Profession filters the respondent, category filters the adventure. One current rating per person/adventure; edits replace the old rating. Most loved sorts mean descending, count descending then title; it uses all lifetime entries independently of Overview activity dates, so new demo completions appear immediately. Directory uses the same all-entry averages/counts; zero-rating rows show a dash. No identities in rating summaries.
- Every seeded completion in the 140-person mock dataset has a deterministic proof entry (QBR briefs, board automations, release-notes skills, customer-feedback summaries and other Monday work); most ratings are 4–5 with some 3s. An independent hash leaves the existing activity seed unchanged.

- `listPeople(filters)`: employee dimension filters, case-insensitive name/email search, lifetime title filter, inactive >30 days or never active; return current itinerary/completion counts and estimated lifetime session time. Support sorting/pagination in the real build.
- `getPersonActivity(personId, filters)`: authorized L&D-only dated event timeline of opens, adds and completions.
- `getAggregates(filters)`: employee dimensions + wave + date bounds; never return employee names in manager reports. Active distinct employees requires `adventure_opened`. Active % denominator includes every matching employee. Completion counts require unique `adventure_completed` person/adventure records. Average completed / active = completed events divided by distinct active employees. Rate = completed events / open events; repeat opens count and this is not a matched funnel. Adds require `itinerary_added`; removals must also be logged for reconstructing itineraries.
- Weekly buckets, adventure counts, category counts and org/profession tables join events to employee and adventure dimensions; tables use all employees in each group as denominator for average per person and active %. Titles use lifetime completion count; badges use distinct person/adventure completions in range. Real build must decide whether dimension attribution is event-time or current; mock uses current labels/waves.
- Estimated time requires session events (`session_started`, `session_ended` or activity heartbeats) with sessionId, personId, adventureSlug, startedAt/endedAt and estimated duration. Sum per active employee within the filtered period/wave, then total and median of those sums. Explicitly label all time estimates; use zero-safe divisions and include zero-minute active employees in median. Never claim this measures learning quality.
- Org/team/manager/profession/last-active attributes require identity synchronization and login/activity events. CSV uses the identical filter/query result as the visible table; employee exports are L&D-only. Manager reports include aggregates only, produced by L&D.

### Admin write operations

L&D-authorized content CRUD with validated slug, Markdown/frontmatter and fixed label lists; new records default to Draft. Upload parses and validates Markdown, never executes embedded content. Set status Open/Scheduled/Draft, assign wave, edit wave dates; validate scheduling. Announcement text/date edits with date-order validation. Add/remove admins through explicit permissions administration and audit logs in the real build; the mock only edits a name list. Draft nudge currently emits a toast; real delivery needs a separate authorized messaging service and audit event. All writes must enforce L&D permissions server-side in the rebuild, including direct URLs, exports and individual employee reads.

### Privacy in Admin views

No per-person scores or levels, onboarding comfort, employee rankings, leaderboards or streaks. Adventure satisfaction averages are content feedback only. Adventure content levels are labels only and may appear in the directory. Manager view hides names, named manager filters, employee table/drawers, individual proof entries/exports and admin names on every tab; aggregates remain available. A real manager account must receive only team-limited aggregates from L&D, not employee data hidden with CSS or client flags. Overview footer: "Analytics are for L&D; managers receive aggregates only."

## Scheduled adventure access and Admin Preview

Current demoOpenAll permits scheduled body inspection; schedule hints and reward states still follow waves. Admin Preview action explicitly renders full body read-only with disabled completion. With demo access removed, production readers receive only scheduled title/promise/labels/date until opening. Authorized L&D previews may receive the body; verify server-side caller permissions before serving it. Client-side person.isAdmin is only mock gating.

## Head tags, icons and manifest

The port must carry public/favicon.ico, favicon-512.png, apple-touch-icon.png, og-image.png (1200×630) and site.webmanifest, retaining icon/apple/manifest links. Use page-specific title/description and OG title/description, og:type=website and twitter:card=summary_large_image. Entry title AI Adventure; reader title “<adventure title> · AI Adventure”. Preserve the preview-image requirement: identical absolute-site og-image URL in OG and Twitter image tags, never relative URLs, with verified asset responses. Current code has route title/description tags and root icon/manifest links; the supplied og-image asset does not itself establish configured OG/Twitter image tags. Add those on the port; documentation consolidation does not change head code.
