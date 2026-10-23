---
slug: designing-with-ai-results-you-actually-like
emoji: 🎨
icon: palette
title: "Designing with AI: Results You Actually Like"
walkaway: "A mood board and a visual-language file your AI designs from, adding your personal taste within Monday's brand guidelines, and one finished piece you are proud to show"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Design, Marketing, Product, Everyone]
audience: []
tool: Any AI tool
effort: Moderate
outcome: Build something
pattern: BUILD
wave: W3
slot: 15
next: [creating-apps-with-ai-done-right, de-slop]
source: "Adapted from summer-challenge/labs/postcards-from-the-edge.md (direct, do not one-shot; references beat adjectives; the chat writes the generator prompt; first outputs are drafts, iterate in rounds; series consistency and new-tool stretch, both moved to Go further); Nufar's visual-language practice (vibe-coding practices: mood board, then the look written as a visual-language file the AI follows, multi-version first draft, direct in rounds); pentera/Webinar Series/GPT/content/exercise-book.md use case 8 (mood board with company colours plus personal favourites, brief interview before generating, vague-to-specific feedback table, consistent set of three). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 15 [Inbar 11])
- Kept: Postcards' director mindset (direct in rounds, references beat adjectives, the chat writes the image-tool prompt, first outputs are drafts), its series-consistency and new-tool layers (now Go further). Pentera's mood board mix (company look + personal favourites), brief-first interview with a go gate, vague-to-specific feedback table, set of three with a drift check. Nufar's visual-language practice: mood board → written visual language as a file → three distinct versions → direct in rounds.
- Cut: Postcards' home-project idea inventory, music / video / audio modalities, named outside tools, the stamp and postcard framing, Layers / Stretch labels.
- Added for Monday: Step 1 starts from Monday's own design systems in Claude Design and the design skill in Cowork / Claude Code (Inbar comment c5, 11 Oct) and states that the brand wins every conflict; a "Fixed by the brand / Open for personal choice / Ask the brand owner" split; Monday deliverables (design review deck, launch one-pager, Slack announcement visual, QBR deck cover, event invitation); a skill that runs alongside Monday's design skill.
- Claude Design kept as one tool among several: Design is presented as one of Claude's output types inside a chat; the standalone site is never mentioned (closes 14 Dec 2026, around this wave). The method works in any tool; Go further compares two tools.

Open items
- Inbar c5: names of Monday's design systems in Claude Design and the name of the design skill in Cowork / Claude Code. Inbar is updating them; the page says "Monday's design system" and "Monday's design skill" generically until we have names.
- How an employee picks one of Monday's design systems for Design output inside a Claude chat once the standalone site closes. The "In Claude" line in Step 1 is written conditionally; hands-on check pending.
- Keren Q5 (Claude Design enabled on Monday's Enterprise): Inbar's comment implies yes; confirm.
- Where non-Claude users find Monday's brand guidelines (a link for the "In any other AI tool" line), and which image tools Monday permits for illustrations and photo-style images.
- Monday rebrands in Jan 2027. The page points to the design system and never hardcodes brand values, so it should survive; re-read after the rebrand.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 🎨 Designing with AI: Results You Actually Like

**Direct AI to visuals you would proudly show: in Monday's brand, with your own taste on top.**

## Why this adventure

Visuals made with AI often look the same: the same gradients, the same layouts, the same smiling people from stock photos. The AI has never seen what you like, so a one-line request gets the average result.

Monday already gives the AI the brand: its design systems in Claude Design and its design skill in Cowork and Claude Code hold the colours, fonts and rules. This adventure adds your taste inside that brand. You collect what you like in a **mood board** (a few images that show the look you like), turn it into a **visual language** (one page of written rules about the look, which the AI follows every time), and direct one real piece in rounds.

## The trail

1. **Start from Monday's brand**, so everything you make already fits the company.
2. **Collect what you like in a mood board**, because pictures describe taste better than adjectives.
3. **Write your visual language**, so the AI follows your taste in every design request.
4. **Direct one real piece in rounds**, because the first result is a draft, and picking the best of three versions is easier than fixing one.

## Before you start

Choose one real visual you need soon: a design review deck, a launch one-pager, a Slack announcement image, a QBR deck cover or an event invitation.

## Step 1: Start from Monday's brand

Every visual has three layers:

| Layer | Who decides? | What it covers |
| --- | --- | --- |
| **Monday's brand** | Monday's design systems and design skill | Colours, fonts, logo use, tone |
| **Your visual language** | You | Mood, space, layout habits, kind of imagery, what you avoid |
| **The piece** | You and the AI, in rounds | The message, the words, the format |

Your taste works inside the brand. When your taste and the brand conflict, the brand wins.

**In Claude:** Design is one of Claude's output types. Ask for a design in a chat and choose one of Monday's design systems when Claude offers them.

**In Claude Cowork and Claude Code:** ask Claude to use Monday's design skill.

**In any other AI tool:** attach Monday's brand guidelines, or a screenshot of an official Monday page or deck.

### Prompt: What the brand leaves open

**What this does:** the AI reads Monday's brand material and shows you which choices are fixed and which are yours.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below.

```
Help me design within Monday's brand. Use Monday's design system or design skill if you can reach it. If you cannot, ask me to attach the brand guidelines or a screenshot of an official Monday page or deck.

Read the brand material and write three short lists:
1. Fixed by the brand: colours with their values, fonts, logo use, tone, and any rule about imagery or layout. Name the source of each rule.
2. Open for personal choice: for example mood, density, layout habits, imagery, amount of text.
3. Ask the brand owner: anything you are unsure about.

Stop and wait.
```

## Step 2: Collect what you like in a mood board

**Collect first, without AI.** Put four to six images in one folder:

| What to collect | Why it helps |
| --- | --- |
| Two to four pieces you admire: a slide, a poster, a website, an app screen | Shows the look you want |
| One piece from outside work, such as a book cover or a café menu | Adds taste from outside the office |
| One piece you dislike | Shows what to avoid |

Under each image, write one line: what exactly you like or dislike in it. Messy is fine: this line is your taste in your own words.

### Prompt: Read my mood board

**What this does:** the AI interviews you about each image and finds the patterns your images share.

Stay in the same chat, attach your mood board images and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
I attached my mood board: images that show the look I like, plus one I dislike, each with a line of my notes. Use them only to learn my taste.

Interview me one question at a time:
1. For each image I like: what exactly I like in it (colour, space, type, imagery, mood). If I use a vague word such as "clean" or "modern", ask what in the image makes it so.
2. For the image I dislike: what exactly puts me off.

Then describe the patterns my images share in six to eight lines, each with the image that shows it. Mark any pattern that conflicts with the "Fixed by the brand" list earlier in this chat. Stop and wait.
```

## Step 3: Write your visual language

### Prompt: Your visual language

**What this does:** turns the brand lists and mood board patterns into one page of rules.

Stay in the same chat and paste the prompt below.

```
Write my visual language: one page of plain rules any AI follows when it designs for me. Base it on the brand lists and mood board patterns earlier in this chat; ask for them if they are missing.

Sections:
1. Brand base: "Follow Monday's design system first. These rules add to it and never override it."
2. Mood: three words, each with one sentence on what it means on the page.
3. Layout and space: density, alignment, empty space.
4. Text on visuals: how many words, headline size, letter case.
5. Imagery: photos, illustrations, icons or none, and what kind.
6. Colour use: which brand colours lead, which are accents, in what proportion.
7. Always avoid: five concrete things.
8. Three examples of a good choice and a weak choice.

Keep it to one page. Stop and wait for my approval.
```

Correct anything that does not sound like you. Then save the page as a file named visual-language.md, where your AI reads it before every design request.

**In Claude:** paste it into the instructions of the project you use for design work.

**In Claude Cowork:** save it in the folder you work from, and ask Claude to read it before any design work.

**In Claude Code:** save it in the project folder and point to it from the project's instructions file.

## Step 4: Direct one real piece in rounds

Start a new chat where your visual-language file is available, for the visual you chose in Before you start.

### Prompt: Brief, then three versions

**What this does:** the AI agrees a brief with you, then makes three different versions so you choose before you fix.

Paste the prompt below into that new chat. Answer its questions in writing, or by voice if your tool has dictation.

```
Design one real visual with me, following Monday's design system and my visual language. Ask me to paste my visual language if it is missing.

Interview me one question at a time: what the visual is, the one message it must carry, who will see it and where (a slide, Slack, a printed poster, a monday board), the size or format, the exact words on it, and what it must avoid. If I answer vaguely, ask for an example.

Write a short brief and wait for my go.

Then make three clearly different versions within my visual language, each with one line on its idea. If you cannot create images in this tool, write three ready-to-paste prompts for an image tool instead. Ask which version I want to continue from, and stop.
```

Continue only from the version you chose. For an illustration or a photo-style image, paste the chat's prompt into an image tool Monday permits, and bring almost-right results back to this chat.

Give two or three rounds of feedback, one or two changes per round. Specific feedback gets a better result than "make it better".

| What you might say | What gets a better result |
| --- | --- |
| "Make it pop." | "Make the headline twice as large and use the main brand colour only on the button." |
| "More like me." | "Use the spacing from the second image in my mood board: one short headline, lots of empty space." |
| "Fix the text." | "The headline reads exactly 'Q3 design review', top left, in the brand font." |

When a fix applies to everything you make, ask the AI to add it to your visual-language file. You are done when you would show the piece with your name on it.

## Go further

**Make a set that belongs together.** Do this when one launch or event needs several visuals, such as a deck cover, a Slack announcement image and a one-pager.

**What this does:** locks what stays the same, then makes and checks the pieces one at a time.

Stay in the chat from Step 4 and paste the prompt below.

```
I need three visuals that clearly belong together, for one launch or event. Ask me what the three pieces are. First write a short set sheet from my visual language: what stays the same in every piece (colours, type style, imagery style, any icon or character, layout grid) and what may change. Wait for my approval. Then make the pieces one at a time from the set sheet. After the third, list every place where the set drifted.
```

**Try the same brief in a second tool.** Do this to learn which tool follows your direction best. Run the brief from Step 4 in a second tool, for example an image tool Monday permits if you used Claude's Design output. Compare which tool followed your visual language, kept the brand and needed fewer rounds. Add one line per tool to your visual-language file: what you use it for.

**Make your taste automatic with a skill.** Do this when you design often. Ask your AI to turn your visual-language file into a skill that runs on every design request, alongside Monday's design skill: Monday's skill sets the brand, yours adds your taste. Add the skill, then close and reopen your AI tool so it finds the skill. **In Claude:** add it under Customize → Skills.

## Proof of work

In "what I built", name the finished piece, the line of your visual language that changed the result most, and the mood board image that helped most.

For example: "Launch one-pager for the new automations feature, in three rounds. The line that mattered: one short headline, lots of empty space. Most helpful image: a museum website I love."

## Related adventures

- **Creating Apps with AI, Done Right**: bring your visual language into the apps and dashboards you build.
- **Stay Original with AI**: the same taste work, for writing.
