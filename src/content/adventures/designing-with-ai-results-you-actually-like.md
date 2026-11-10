---
slug: designing-with-ai-results-you-actually-like
emoji: 🎨
icon: palette
title: "Claude Design: Results You Actually Like"
walkaway: "A visual language Claude follows on top of Monday's design system, a new-look skill that sets the look for each piece whenever you change your mind, and one finished deck or visual you would show with your name on it"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Design, Marketing, Product, Everyone]
audience: []
tool: Claude
effort: 1 hour
outcome: Build something
pattern: BUILD
wave: W3
slot: 15
review: ready
video: /videos/designing-with-ai-results-you-actually-like.mp4
next: [creating-apps-with-ai-done-right, de-slop]
source: "Adapted from summer-challenge/labs/postcards-from-the-edge.md (direct, do not one-shot; references beat adjectives; first outputs are drafts, iterate in rounds; series consistency, now Go further); Nufar's vibe-coding practices (mood board, then the look written as a visual-language file, two or three distinct first drafts, direct in rounds, opinionated on the look); pentera/Webinar Series/GPT/content/exercise-book.md use case 8 (company look plus personal favorites, brief before generating, vague-to-specific feedback table, set with a drift check). Claude Design features from content/research/claude-design-facts-2026-11-10.md: Claude help center (support.claude.com articles 12138966, 14604397, 14604406, 14604416, 17153992, 17440474, 17444462) and Claude Academy (academy.claude.com tutorials on design systems and on prototypes and UX). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Decision (Nufar, 10 Nov 2026, videos/designing-with-ai-results-you-actually-like/notes.md): the page focuses on Claude Design and doubles down. Monday employees rarely use Gemini, most have no ChatGPT, and monday agents are not relevant to design. This supersedes the 10 Oct learning "never make a fast-moving product the hero" and the 10 Oct design-notes row "Claude Design one tool among several" for this page. Title changed to "Claude Design: Results You Actually Like"; the slug stays so the URL holds. tool: Claude.

10 Nov review of the rewrite (Nufar, second pass)
- Decks are a first-class deliverable alongside one-pagers, mockups and visuals: Slides output named in Step 1 with the same design system and visual language; deck examples (QBR deck, launch deck, design review deck) in Before you start and the brief; deck rows in Step 5 (comment on one slide, consistency across slides, one message per slide); walkaway and proof of work count a deck or a visual. Slides-specific editing is undocumented, so deck edits stay in the chat and comments.
- Two-layer taste model: "your visual language" (persistent, saved in the design project) and "the look for this piece" (task-specific, from a small mood board for one launch, event or deck; adds to the visual language, never overrides the brand). The repeatable move: whenever you change your mind or start a new kind of piece, run a quick mood board → look for this piece; a choice that keeps coming back gets promoted into the visual language.
- The skill moved into the core (Step 3) as "new-look": it runs the quick mood-board interview, writes the look for this piece, and offers to promote recurring choices into the visual language. Chosen for the core because the repeatable move is the point of the review and a one-off prompt would not teach it. Before you start carries the skill prerequisite line (23 Oct rule).
- Length: 2,476 by the lint after the restructure, 2,287 after tightening (hook, Step 1 output lines, prompt wording, one feedback row, the Step 4 intro folded into What this does). Nothing self-contained was cut. Launch deck sits in Step 3 and Go further.
10 Nov review, third pass (Nufar)
- "If there already are skills that you use for deck generation or other visual artifacts, this skill can be a wrapper for them. What to add on top of what?" The new-look skill prompt now opens by asking whether the reader already uses a skill for decks or visuals ("one your team uses or Monday's design skill if you have it"; no specific Monday skill named), reads it or asks for it to be pasted, lists what it covers, then adds only the missing layer (visual language, the look for this piece, the mood-board interview) without repeating its rules. Order of precedence in the skill: design system, existing skill, visual language, then the look. Step 3 intro and What this does follow the same order: find what exists, add only what is missing.
- "Go wide and then squint to select which one you want... to get outside of your repeated style." New Go further item "Go wide, then squint": eight to ten small, rough thumbnails on separate artboards, far outside the visual language but inside the design system (title slides only for a deck), labeled in three words; the reader squints (each at a glance, no details) and picks one or two; Claude develops only those and names choices that could join the visual language.
- Cut to make room: the Claude Code hand-off Go further item (Creating Apps in Related adventures covers mockup-to-app), the "Make more pieces" prompt block (now a prompt-free two-sentence item), the Play row and the "comments disappear" line in Step 5, plus wording trims across the hook, trail, Step 1 setup, every prompt, Ship and proof. Lint 2,380 → 2,286 after the additions. Nothing self-contained was cut.

- To fit: the mood-board interview and the visual-language prompt merged into one Step 2 prompt; references moved into the look for this piece (one step owns each topic), so the brief no longer asks for them; the set-sheet Go further became a short "more pieces from the same look" prompt, since the look for a launch already locks what stays the same.

Adaptation note (rewrite 2026-11-10)
- Kept: her method (mood board → visual language → several directions → direct in rounds), the layer table with "the brand wins", the fixed / open / ask-the-brand-owner prompt, the think-first mood board, the vague-to-specific feedback table, the set with a drift check.
- Made concrete in Claude Design, only from the 10 Nov facts file: + > Design system and the chip under the message box, Output > Design or a plain-language request, the Design / Slides / Docs split, 2-3 directions on separate artboards, chat / inline comment / canvas edits and sliders, no version history ("save what we have and try a different approach", or duplicate), drift in long chats, no image generation, invented facts, export (PDF, PPTX, HTML, Google Slides, send to another tool), Share with comment access. (Play for clickable mockups and the Claude Code hand-off / /design were cut for length in the third pass.)
- Cut: every "In any other AI tool" line, the "try a second tool" Go further item, the design-system-feedback Go further item (length). Monday's design skill returned in the third pass only as a conditional example of an existing skill ("if you have it"); the facts file still grades any design-system-to-skill link C.
- The whole adventure runs in one chat inside a Claude project, per the one-chat rule; the visual language goes into that project's instructions (the 5 Nov setup rule reduced to Claude, since the page is Claude-only), with a file to attach outside the project.
- Directions follow the 23 Oct nuance rule: the brief asks whether the person already knows the direction; if so, one design plus one alternative, otherwise three.

Open items
- Inbar c5: names of Monday's design systems in Claude Design. The page says "Monday's design system" until we have names.
- Confirm design systems are enabled at Monday (off by default on Enterprise, beta, Organization settings > Artifacts) and that Monday's systems migrated from the standalone site. The page is written as if both are true; Keren Q5.
- Does the ticked design system apply to Slides output? The facts file does not confirm it. The page says "check the design system is active before you start" and to ask Claude which one it follows; it never claims the chip works in Slides.
- Which image tools Monday permits for photos and illustrations (Step 5 table says "an image tool Monday permits").
- Monday rebrands in January 2027. The page points to the design system and hardcodes no brand values; re-read after the rebrand.
- Prompt test in a fresh Claude chat: pending (playbook step 4). Hands-on checks inside it: (1) Claude reads the ticked design system in a turn without Output > Design (Step 1 prompt); (2) choosing Output > Design or the Slides output on the "go" reply produces the directions (Step 4); (3) a Claude project's instructions reach Design and Slides output; (4) a skill under Customize → Skills is applied when asked by name in a design chat, and the new-look skill can see the project's visual language; (5) inline comments on a single slide in Slides output; (6) the new-look skill can read another installed skill (or the reader must paste it) and follow it without duplicating it; (7) eight to ten thumbnails on separate artboards render as small rough sketches in one turn.
- Inbar c5 (second half): whether Monday has a design skill, and its name. The page mentions it only as "Monday's design skill if you have it".
- Never mention claude.ai/design or the standalone site in reader text (read-only 14 Dec 2026).
-->

# 🎨 Claude Design: Results You Actually Like

**Get decks and designs from Claude that follow Monday's brand and carry your own taste.**

## Why this adventure

Decks and visuals made with AI often look the same: purple gradients, rows of identical cards, stock photos of smiling people. Claude does not know your taste yet, so a one-line request gets the average result.

Claude makes decks, one-pagers, mockups and visuals on Monday's design system. This adventure adds your taste in two layers: a **visual language** (one page of rules for everything you make) and **the look for this piece** (a few lines for one launch, event or deck). Both come from a **mood board**: a few images that show a look you like.

## The trail

1. **Start on Monday's design system**, so everything fits the brand.
2. **Write your visual language**, so Claude follows your taste every time.
3. **Set the look for this piece**, with a skill you rerun when you change your mind.
4. **Brief Claude and choose a direction**, because choosing is easier than fixing.
5. **Direct in rounds, then ship**, because the first result is a draft.

## Before you start

Choose one real deck or visual you need soon, for example a QBR deck, a design review deck, a launch one-pager, a feature mockup or an event invitation. If you have never built a skill, start with Skills: When, How and How Well.

## Step 1: Start on Monday's design system

Every piece has four layers. Each adds to the one above it, and the brand always wins.

| Layer | What it covers | How long does it last? |
| --- | --- | --- |
| **Monday's brand** | Colors, fonts, logo use, components, tone | Set by Monday |
| **Your visual language** | Mood, space, layout habits, imagery, what you always avoid | Everything you make |
| **The look for this piece** | The feel of one launch, event or deck | One piece, or one set |
| **The piece** | The message, the words, the format | Directed in rounds |

**Set up the chat.** Create a Claude project for your design work, or open the one you use, and start a new chat there for the whole adventure.

1. Click **+ > Design system** and tick Monday's design system. Tick only what you need, because Claude reads every system you tick.
2. Check the chip under the message box names it. "No design system" means Claude ignores Monday's components.

For a one-pager, mockup or visual, ask for a design or choose **Output > Design** in the message box. For a deck, choose the Slides output; the same design system and visual language apply. Check the design system is active before you start: ask Claude which one it follows.

### Prompt: What the brand leaves open

**What this does:** Claude reads the active design system and shows you which choices the brand fixes and which are yours.

Paste the prompt below into the chat you just set up.

```
Read the design system that is active in this chat. If none is active, stop and tell me to tick one under + > Design system. If more than one is active, ask me which one wins where they overlap.

Then write three short lists, and stop:
1. Fixed by the brand: colors with their values, fonts, logo use, components, slide layouts, tone, imagery rules, each with where it comes from.
2. Open for personal choice: for example mood, density, layout habits, imagery, amount of text.
3. Ask the brand owner: anything the design system leaves unclear.
```

## Step 2: Write your visual language

**Think first for yourself, without AI.** Collect four to six images from across your taste:

| What to collect | Why it helps |
| --- | --- |
| Two to four pieces you admire, for example a deck, a poster or a website | Shows the look you want |
| One piece from outside work, for example a book cover | Brings in taste from outside the office |
| One piece you dislike | Shows what to avoid |

Be ready to tell Claude what exactly you like or dislike in each, and what you would take from it. Messy is fine: this is your taste.

### Prompt: Your visual language

**What this does:** Claude interviews you about your thoughts on each image, then turns the patterns into one page of rules.

Stay in the same chat, attach your mood board images and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
I attached my mood board: images that show a look I like across my work, plus one I dislike. Use them only to learn my taste. Ask me to brain dump or paste all my thoughts on these images before you start.

Then interview me one question at a time about what is still missing. If I use a vague word such as "clean", ask what in the image makes it so. If I already answered a question earlier in this chat, do not ask it again.

Then write my visual language: one page of rules for all my decks and visuals.
1. Brand base: "Follow the active Monday design system first. These rules add to it and never override it."
2. Mood: three words, each with what it means on the page.
3. Layout and text: density, empty space, words per slide or visual.
4. Imagery and color: what kind of imagery, which brand colors lead.
5. Style references: two or three named references, each with what to take from it.
6. Always avoid: purple gradients, evenly spaced grids of identical cards, default fonts, stock photos of smiling people, plus three things from my mood board.

Mark any rule that conflicts with the "Fixed by the brand" list in this chat. Wait for my approval.
```

Correct anything that does not sound like you, then paste it into your design project's instructions. Outside the project, ask Claude to save it as visual-language.md and attach it to each design chat.

## Step 3: Set the look for this piece

Your taste stays fairly stable, but each launch, event or deck has its own feel. A skill (saved instructions Claude follows for a recurring task) makes setting that look a repeatable move. If you already use a skill for decks or visuals, for example one your team uses or Monday's design skill if you have it, the new skill wraps it and adds only what is missing.

### Prompt: Build the new-look skill

**What this does:** Claude checks what your existing skills cover, then builds a skill for the missing layer: the look for one piece, from a small mood board.

Stay in the same chat and paste the prompt below.

```
Help me build a skill named new-look: saved instructions Claude follows when I start a new kind of piece, such as a launch deck, or say "new look" or "refresh my look". Check Claude's current documentation for the skill format.

First ask whether I already use a skill for decks or visuals, for example one my team uses or Monday's design skill if I have it. If I do, read it, or ask me to paste it, and list what it already covers. The new-look skill then follows that skill and adds only what it lacks, without repeating its rules.

The new-look skill must:
- Follow, in this order: the active Monday design system, any existing skill I named, my visual language from the project instructions. The look adds to them and never overrides the brand.
- Ask which piece the look is for, and for two to four images that show its feel. Ask me to brain dump my thoughts on them, then ask one question at a time about what is still missing. If I already answered a question earlier in the chat, do not ask it again.
- Write "The look for this piece" in under ten lines: mood in three words, what changes from my visual language (color emphasis, imagery, layout, type), two named style references, what to avoid.
- Ask whether any choice came up in earlier pieces. If one keeps coming back, offer an updated visual language with it added, in one block for the project instructions.
Write the complete skill in one block: the name, a description that makes it start in those moments, the steps, and one test request.
```

Add the skill under **Customize → Skills**, close and reopen Claude so it finds the skill, and come back to this chat. Attach two to four images for your piece and ask Claude to use the new-look skill. Rerun it whenever you change your mind.

## Step 4: Brief Claude and choose a direction

### Prompt: Brief, then directions

**What this does:** Claude interviews you for a brief with the real words of the piece, then designs directions for you to choose from.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Design one real piece with me, a deck or a visual, following the active Monday design system, my visual language and the look for this piece from this chat. Do not choose the piece, do not decide its message, and do not decide what good means.

Interview me one question at a time. If I already answered a question earlier in this chat, do not ask it again.
- The piece, its audience, and what they should do or feel.
- The one message it must carry. For a deck, also the storyline, with one message per slide.
- The exact words. If I do not have them yet, help me write them. Use no placeholder text.
- The format, for example a shared-screen deck, a Slack image or an A4 PDF.
- Whether I already know the direction I want.

Write the brief in up to eight lines and wait for my go.

Then, if I know my direction, design it plus one clearly different alternative. If not, design three clearly different directions. Show each separately with one line on its idea; for a deck, a title slide and two content slides each. Ask which one to continue from, and stop.
```

When the brief is right, choose **Output > Design** in the message box, or the Slides output for a deck, and reply "go". Then choose a direction.

## Step 5: Direct in rounds, then ship

Make one or two changes per round, matching the edit to the change:

| What do you want to change? | How? |
| --- | --- |
| The structure: layout, order, sections, the storyline of a deck | Ask in the chat |
| One element or one slide, for example a headline or a chart | Leave a comment on it |
| Small nudges in a design: position, size, alignment | Drag, resize or align on the canvas, or use the sliders |
| Consistency across a deck | Ask in the chat to list the slides that break your visual language or the look |

Specific feedback gets better results:

| What you might say | What gets a better result |
| --- | --- |
| "Make it pop." | "Make the headline twice as large and use the main brand color only on the button." |
| "This deck is too busy." | "Slide 4 carries two messages. Keep the launch date and move the customer quotes to slide 5." |

**Good to know while you direct:**

| What can happen? | What to do |
| --- | --- |
| There is no version history | Before you try something different, say "save what we have and try a different approach", or duplicate the design |
| Long chats drift back toward the generic look | Paste your visual language and the look again |
| Claude creates no photos or illustrations | Add your own, or make them in an image tool Monday permits |
| Claude can invent numbers and claims | Check every number, date and claim |
**Ship it.** Export as PDF, PPTX, HTML or Google Slides, or send it to another tool. Use **Share** to give reviewers comment access. You are done when you would show the piece with your name on it.

## Go further

**Go wide, then squint.** Do this when you want to be more creative or break out of your repeated style.

**What this does:** Claude sketches eight to ten rough thumbnails far outside your usual style, then develops only the ones you pick.

Stay in the same chat, choose **Output > Design** (or the Slides output for a deck) and paste the prompt below.

```
Set my visual language aside for this round, but keep the active Monday design system. For the piece in this chat, design eight to ten small, rough thumbnails, each on its own artboard, clearly different from each other and from my usual style in layout, mood, type or imagery. For a deck, show title slides only. Label each with three words and stop. When I name the one or two I pick, develop only those, and tell me which of their choices could join my visual language.
```

Then squint: take in each thumbnail at a glance, without the details, and pick the one or two that pull you.

**Make more pieces from the same look.** Do this because one launch often needs several pieces, for example a launch deck and a Slack visual, that should look like one family. In the same chat, ask Claude to design each from the look for this piece, then list where any piece drifted from it.

## Proof of work

In "what I built", name the finished deck or visual, the direction you chose, and the line of your visual language or look that mattered most.

For example: "QBR deck, chosen from three directions. The line that mattered: one short headline per slide, lots of empty space."

## Related adventures

- **Creating Apps with AI, Done Right**: when your mockup should become an app your team uses.
- **Stay Original with AI**: the same taste work, for writing.
