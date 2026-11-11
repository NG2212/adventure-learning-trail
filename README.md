# Adventure Learning Trail

Build a frontend mockup of **AI Adventure**, a self-serve AI learning platform for employees of one company (monday.com). Everything is visible and clickable; nothing is real underneath. No authentication, no database, no external calls, no Supabase. All state lives in one small store module with a browser-storage implementation, so the data layer can be swapped later. This is a demo for the client's L&D team and the spec for a rebuild on their internal platform, so keep the code simple, conventional React + TypeScript + Tailwind, content-driven, and well named.

## Vocabulary

- **Adventure**: one self-paced, hands-on learning unit (a page). The company's people will also hear "destination".
- **Itinerary**: a person's own chosen list of adventures, in order.
- **Titles**: First Steps (1 completed) · Day Tripper (3) · Frequent Flyer (11) · Globetrotter (20). Titles describe distance travelled, never ability. Never show rankings of people.
- **Badge**: earned per completed adventure.

## Visual language

- Palette: primary purple #9450FD carries ~70% of the visual language; surfaces white #FFFFFF, near-black #242424 for text, warm stone #E3D9CF for panels; supporting blue #1E77FD, coral #FF644D, green #06A24B used sparingly (labels, states); accents lime #D8F81E, pink #F07FFF, yellow #FBD54D only for "next up", celebrations and progress moments.
- Typeface: Poppins (Google Fonts) everywhere; bold geometric headings, regular body.
- Style: modern, clean, flat, generous white space, soft rounded corners (16-24px), subtle shadows only. No gradients beyond a faint glow on celebrations, no 3D, no stock imagery, no clip-art illustrations, no emojis in the UI chrome.
- The one motif: **footprints**. Flat footprint shapes in the accent colours appear on the sign-in screen (trails branching in several directions on a purple ground), as the itinerary's trail (a winding dotted line with footprints along it), in empty states, and as the "First Steps" badge. Keep them structured and restrained, never busy.
- Adventure icons: each adventure gets a flat SVG icon, one or two colours, generated as a React component from a small set of simple glyphs (sponge, theatre masks, toolbox, compass, chat bubble, chart, document, calendar, robot, map pin, lightbulb, shield). Icons sit on a circular disc: purple when earned/active, stone when not. No emoji anywhere in the product UI.
- Reference image attached: the sign-in/hero mood (purple ground, footprint trails, white status card). Match its feel.

## Screens and routes

1. `/` **Sign-in**: purple ground with footprint trails, "AI Adventure" wordmark, subtitle "Pick a path. Build something real. Keep it.", one button "Continue with your monday account". Clicking signs in a sample employee: Noa Levi, Product Manager. No form.
2. `/welcome` **Welcome**: a video placeholder card (16:9, "A welcome from L&D"), one paragraph, and three big choices: **Suggest an itinerary for me** (goes to `/onboarding`), **Build my own itinerary** (goes to `/adventures` with "Add to my itinerary" buttons highlighted), **See all destinations** (goes to `/adventures`).
3. `/onboarding` **Suggest an itinerary**: 6 multiple-choice questions, one per step with a progress indicator: your role; what you use AI for today; which tools you open weekly; what you want to get better at; how you prefer to learn; how comfortable you are with AI today (this last answer is never displayed back as a score). Results page: **3-4 recommended adventures**, each with its icon, title, one-line promise, labels, and one line "Why this for you", plus a button "Add all to my itinerary" and per-card "Add". Rules-based: a scoring function over the adventure labels (profession match, goals → category, comfort → level, tools → works-with) in its own module, clearly commented, because the real build replaces it with an AI call.
4. `/adventures` **All adventures**: the full inventory as a responsive card grid, grouped by category (Work smarter with AI · Create with AI · Set up your AI · Automate and delegate · Lead with AI). Filter buttons across the top as toggle chips: Category, Level (Foundations / Intermediate / Advanced), Profession (Customer Facing, Marketing, Engineering, Product, Design, HR, Finance, Other, Managers), Works with (Any AI tool / Claude / Agentic coding tool), Effort (Quick win / Moderate / Ambitious), Status (Open / Coming soon / Done). Each card: icon, title, one-line promise, label chips, status, and an "Add to my itinerary" / "In my itinerary" toggle. Coming-soon cards show "Opens 23 Nov" style text and are not clickable.
5. `/itinerary` **My itinerary**: the person's adventures drawn as a winding dotted trail with footprints along it, top to bottom, each stop a card (icon, title, labels, status: done / next / later). Reorder with up/down controls, remove, and a "Find more destinations" link to `/adventures`. The next undone stop is highlighted in lime as "Next up". Empty state: footprints and the three welcome choices.
6. `/adventures/:slug` **Adventure page**: header with icon, title, one-line promise, label chips, and an "Add to my itinerary" toggle. The body renders the adventure's Markdown (frontmatter + headings) as **steps with a left rail**: Why this adventure · each teaching block · Before you start · Shape of the adventure · Core task (each `### Step N` and its prompts) · Layers · Side quest · Proof of work · Where to next. The rail shows the steps, the current one highlighted; "Next" and "Back" buttons at the bottom of each step; every rail item is clickable so nothing is locked. Tables render as clean tables. Every fenced code block renders as a **Prompt window**: a stone panel with a "Prompt" label, the text at a readable 15px, and a Copy button with a "Copied" state. The final step has "Mark this adventure complete", which records completion, awards the badge, and shows a celebration (lime glow, footprint animation, the new count, and the new title if a threshold was crossed), with a "Share" button that opens a share card preview.
7. `/progress` **Progress**: "Adventures completed: N of 30"; the four titles as a horizontal line with the current one highlighted and the next threshold shown; a badge grid for all 30 adventures (earned in full colour, unearned as faint outlines); a shareable card preview (image-like panel: name, title, count, footprints).
8. `/admin` **Admin** (nav entry visible to the sample user, who is also an admin; the page itself is a "Coming soon" placeholder listing what it will hold: adventure directory with labels and waves, add/edit an adventure from Markdown + a labels form, analytics and CSV export).
9. **Global header** on every signed-in page: wordmark; nav: My itinerary · All adventures · Progress · Admin; right side: "Hi Noa" and a pill with the current title and "N completed". A dismissible announcement banner under the header: "New on Monday: two new adventures opened" with a link.

## Content model and data

- Adventures live as Markdown files in `src/content/adventures/*.md`, each with YAML frontmatter: slug, emoji (ignored in UI; icon is chosen by `icon:` or falls back to a glyph from the category), title, walkaway, category, levels[], professions[], audience[], tool, effort, outcome, wave, slot, next[]. Build an index at startup from the frontmatter. Render Markdown with a standard library; map `## ` headings to steps and fenced code blocks to Prompt windows.
- Seed 30 adventures from the index list I will provide in a follow-up message (title, category, labels, one-line promise, wave). For now create 6 realistic placeholders across the categories so every screen has data, with one of them carrying a full example body (hook, a table, two steps with fenced prompt blocks, layers, side quest, proof of work, where to next) so the adventure page renderer is exercised. Non-open adventures render a short "This adventure opens on <date>" body from their promise line.
- Waves: W1 open now; W2 "Opens 23 Nov"; W3 "Opens 7 Dec"; W4 "Opens 4 Jan".
- Store (`src/store/`): one interface with methods: getPerson, getItinerary, addToItinerary, removeFromItinerary, reorderItinerary, markComplete, getCompletions, getTitle, dismissAnnouncement; one implementation on localStorage with seed data (Noa has completed 1 adventure and has 3 in her itinerary). Keep every write behind this interface.

## Documentation to produce alongside the code

Create and maintain two Markdown files in `docs/`:
- `docs/BBS-PROMPTS.md`: one section per feature built, written as a self-contained build prompt (screen, data it reads, behaviour, acceptance checks), so the app can be rebuilt feature by feature on another platform.
- `docs/backend-requirements.md`: for every frontend decision, the backend it implies: entities and fields (people, adventures, itineraries, completions, titles, announcements), reads and writes per screen, events to log (adventure opened, added to itinerary, completed, badge earned), the recommendation scoring rules, admin operations, and privacy rules (no per-person scores, no rankings, comfort answer never stored as a level).

## Constraints

- Mobile-friendly layouts, desktop first.
- No time estimates anywhere ("~15 min" is banned). No streaks, no leaderboards, no competitive elements.
- Footer on every page: "AI Adventure · Built for monday.com by Nufar Gaspar".
- Do not add features beyond this brief. When something is ambiguous, choose the simplest version and note the assumption in `docs/BBS-PROMPTS.md`.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://adventure-learning-trail.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/271149d7-537c-4768-b2ff-879569e4fad9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
