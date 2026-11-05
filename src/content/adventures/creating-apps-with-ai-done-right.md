---
slug: creating-apps-with-ai-done-right
emoji: 🧰
icon: toolbox
title: "Creating Apps with AI, Done Right"
walkaway: "A working app, dashboard or interactive artifact that people can trust, built with a method you reuse for every future build"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Ambitious
video: /videos/creating-apps-with-ai-done-right.mp4
outcome: Build something
pattern: BUILD
wave: W1
slot: 22
next: [designing-with-ai-results-you-actually-like, automation-done-right]
source: "Adapted from summer-challenge/labs/build-a-beach-house.md (plan before build, thin working slice, one change at a time, retest the core path, fresh chat when stuck); catch-up-may/content/week-2/project-6-data-scientist.md (the 8 vibe-coding rules: MVP, 2-3 versions, checkpoint, new chat, point and show, test again; the 'keep asking until everything is covered' interview; spot-check numbers) and catch-up-may/content/week-3/project-7-professional-specialist.md Step 6 (build the one tool, MVP first). Sharing step adapted from the Silverfort Champions kit (silverfort/Champions/content/kit/materials/builders-checklist.md, art-of-the-possible.md, building-for-others.md: a domain expert checks the numbers, check before you share, a prototype going wide needs an owner and a review, the duties of data quality, maintenance and ownership), with everything Silverfort-specific removed. Method from Nufar's vibe-coding practices (grill-me spec, behavior and look, multi-version first draft, visual language as a file). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 22 [Inbar 7])
- Kept: Beach House plan-first interview with pushback, deferred-feature list, one change at a time with a retest click-path, fresh chat when stuck. P6 rules: MVP, 2-3 versions, checkpoint, point and show, test again, spot-check numbers. P7 Step 6 "the one tool you need" as an idea source.
- Cut: tool menus for outside builders (Lovable, Base44, Bolt, v0, AI Studio), Catch-Up worker framing, Sarah Chen, data-sensitivity table, Layers / Stretch / Postcard, the 8-rule table as a block (rules folded into the steps where they act).
- Added for Monday: Nufar's grill-me spec (essentials round, then increasingly specific questions until "enough"); behavior-and-look table; high-level drafts and a visual-language note; monday boards as data source; Kremer in passing for internal data.
- Data path folded in here per the inventory ("From Data to Decisions" folded into this adventure as the dashboard path).

Changed 2026-11-05, from Nufar's first review
- American spelling across the page, the prompts, the frontmatter and these notes.
- Scope is apps, dashboards and interactive artifacts throughout, and the hook names Claude artifacts. The "let the AI handle the look" line and the "started and abandoned" line are gone.
- Step 1: "is it needed, does something similar exist, is this the most effective way" added to the thinking. The where-to-build table is gone, replaced by her one general sentence. The spec records the build tool. Kremer line kept.
- Step 2 renamed. Two or three high-level drafts of the first screen, or a mood board. Separate chats are the default when the look matters, the same chat is the quick option, and one prompt serves both. The look row now says be opinionated and show something you like. Nothing on the page says what any Monday tool enforces or which brand skills exist. Side-by-side artifact line removed.
- Step 3 renamed. Old Steps 3 and 4 merged: MVP, use it on real work, add features gradually, with the reason (a big bang builds a monster). Two prompts merged into one that builds the MVP, fixes a failure or adds a feature.
- Step 4 new and required: scale with the audience, should this exist for others, trustworthy on the page, permissions with the verified Claude artifact facts (support.claude.com, read 5 Nov 2026), retire it, receiving someone else's artifact. Decision to make this a core step awaits her confirmation.
- Go further: skill prompt rewritten to the new method and shortened. Earlier-build item cut: the AI in the planning chat cannot know how the person usually builds, it was the weakest item, and the page needed the words.

Judgment calls
- Spelled out "minimum viable product" once, on the trail, since readers meet MVP in the Step 1 prompt. Inside the prompts MVP is defined by "the smallest version that does the job".
- Drafts use realistic sample data, so no real data travels into several chats at the draft stage, and the first screen is enough to choose.
- The Step 2 prompt asks the tool to say which look choices are left to the person. This teaches "stay opinionated about what is left" and makes no claim about any tool.
- The visual-language note is written only when the person says they picked the direction, so the same prompt works in separate chats.
- The Access row moved from the test table to Step 4, next to the permissions advice. The Numbers row also left the test table, because Step 4 covers checking numbers more fully.
- Cuts made to reach the length, all restorable: the vibe-coding definition and the list of habits in the hook (the trail says the same); "What do they use today, where does the data live, how will you know it works" in the thinking (Round 1 of the prompt asks them); the "Add note button" half of the behavior example; the intake form example; "if you cannot see it" fallbacks in the Step 3 and Step 4 prompts, which both run in the chat that holds the work; "start to finish" in the test table.
- The answer-by-voice line sits only on the two interview prompts (Step 1, Go further). Steps 2, 3 and 4 ask for a direction, a choice or three facts, so they carry the do-this line only.
- "Many people" row says "check whether a review is required". Monday's actual process is unknown, so the line names no process and no owner.
- The customer-boards line (data Monday's customers uploaded to their own boards stays out of Claude) is not on the page. It was not in the earlier version or her notes, and the length left no room. Listed as an open item, because this adventure suggests building on monday boards.
- Step 1 grill-me prompt runs 192 words by lint count, above the 150 guide. She likes this prompt and the additions are what she asked for, so it stays long.
- Video order follows her notes: options, what they share, then the hoping-for-the-best method, then the monster.

Open items
- Prompt test in a fresh Claude chat: pending (playbook step 4). Especially the Step 2 prompt in separate chats and in one chat, and the Step 3 prompt as it moves from MVP to fix to feature.
- Inbar promised internal materials on monday vibe and Big Brain Studio (Google Doc comment c2, 11 Oct). Not received yet. Add links to Monday's own guides when they arrive, and check the Step 2 and Step 4 lines against them.
- Is there a Monday review or owner process for apps and dashboards that serve many people? If so, name it in the Step 4 table.
- Whether a visible "last refreshed" can update on its own depends on the tool and the data source; the prompt only asks for the note.
- Nufar approved the page and video on 5 Nov 2026, so Step 4 stays a required core step and the page went live without the customer-boards line. That line (about 14 words, 7 left under 1,800) can still be added if she asks.
- Effort: seed says Ambitious; inventory row says M. Kept Ambitious.
23 Oct: do-this line on every prompt
25 Oct: permissions heads-up broadened; value-and-maintenance emphasis in Step 1 (Inbar)
-->

# 🧰 Creating Apps with AI, Done Right

**Build a real app, dashboard or interactive artifact with AI, and share it so people can trust it.**

## Why this adventure

At Monday you can build apps, dashboards and interactive artifacts by describing them to AI, for example in monday vibe, in Big Brain Studio, or directly in Claude, including the ever-improving Claude artifacts.

The result depends mostly on the method, and the method is the same in every tool.

## The trail

1. **Plan your build and let the tool grill you**, because every question answered now is a fix you avoid later.
2. **Build 2 or 3 high-level drafts**, so you choose a direction early.
3. **Build gradually and test as you go**, starting with an MVP (minimum viable product).
4. **Share it so people can trust it**, because they will act on what it shows.

## Before you start

Have in mind one real build that you or your team would use every week.

## Step 1: Plan your build and let the tool grill you

**Think first for yourself, without AI.** Is it needed? Does something similar already exist? Is this the most effective way to provide this information or do this work at Monday? Who will use it, and what is the one job it does? Everything you build needs upkeep, so pick the one worth maintaining. For example: a renewal tracker on a monday board, a forecast scenario calculator, a dashboard of incident timelines.

Then choose from the available options, for example monday vibe, Big Brain Studio or directly in Claude, based on your needs and each tool's properties.

For internal data such as accounts or Salesforce records, plan to get it through Kremer, which applies your own permissions.

### Prompt: Grill me, then write the spec

**What this does:** the AI interviews you until you say "enough", and writes a one-page spec for your approval.

Open a new chat in the tool you chose and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me plan a small internal app, dashboard or interactive artifact. Write no code and design no screens yet. Ask me to brain dump or paste all my thoughts on this before you start.

Round 1, essentials, as one batch: who uses it, the one job it does, what exists today, what it saves me every week, who maintains it, where the data comes from (a monday board, a file, internal data), which tool I will build it in, and how we will know it works.

Round 2, grill me. One question at a time, each more specific than the last: what each click and button does, what each screen shows with no data, wrong or missing input, realistic data volumes, who may see and change what. Keep going until I say "enough". If I answer vaguely, ask for a real example.

Then write a one-page spec: users and the job; build tool; MVP (the smallest version that does the job, with one main flow); behavior rules, one line per interaction; data sources and fields; later features, in priority order; five test cases that prove the MVP works.

Wait for my approval.
```

## Step 2: Build 2 or 3 high-level drafts

The goal is to choose a direction, and the first screen is enough. A mood board also works: a few images of the look and feel you like.

| What to describe | How | Example |
| --- | --- | --- |
| **Behavior:** each click, filter, empty screen and error | Exactly, one rule per interaction | "An account with no notes shows 'No notes yet'." |
| **Look:** colors, fonts, spacing, tone | With an opinion, and something to show | "Calm and compact, like this screenshot, with more white space." |

Some tools set much of the look for you, so stay opinionated about what is left. Most people cannot describe a look in words, so show the tool something you like for inspiration, such as a screenshot.

A separate chat for each draft gives a wider range, because each one starts fresh, so make it your default when the look matters. One chat is the quick option.

### Prompt: Build a high-level draft

**What this does:** builds the first screen in the direction you give, and saves the look you pick as a note.

Paste the prompt below and your spec into each new chat, with a different direction each time. For the quick option, paste it once in the chat with your spec and ask for two or three versions.

```
Build a high-level draft of the first screen from my approved spec, with realistic sample data. If you cannot see the spec, ask me to paste it.

First ask for the visual direction: the feeling, the density, the colors, and any image I like. If this tool sets part of the look, say what is left for me to decide. If I ask for several versions, make them clearly different.

When I pick this direction, write a visual-language note: colors with values, fonts, spacing, tone, and three plain rules. Every later change keeps this look.
```

Tell the chat with the draft you like that you picked it, and save the visual-language note next to your spec.

## Step 3: Build gradually and test as you go

Build the MVP from your spec first. See what you have, use it and test it on real work, then add features gradually. If you go big bang at the start, you often build a monster that is hard to use.

| What to test after each change | How |
| --- | --- |
| The main flow | Do the job yourself on real work |
| The five test cases in your spec | Run each one and mark which fail |
| Empty and wrong input | For example an empty board, a missing field, a very long name |

### Prompt: Make the next change

**What this does:** builds the MVP, then makes one fix or feature at a time and tells you what to test again.

Stay in the chat with the draft you picked and paste the prompt below. Use it for every change.

```
Help me grow this build one change at a time, using my spec and visual-language note.

Ask which change comes next:
A) Build the MVP from the spec, on the draft I picked, without later features.
B) Fix one failure, which I will describe or show in a screenshot. Name the likely cause.
C) Add one feature from the later-features list. Ask about its exact behavior, add its rules and a test case to the spec, and wait for my approval.

Change nothing else and keep the look. Then list every test to run again.
```

Save a working copy before each change, so you can go back. If two fixes in a row fail, start a new chat with the spec, the visual-language note and the one problem.

## Step 4: Share it so people can trust it

Colleagues now receive so many dashboards and artifacts that they often cannot tell whether the data is correct or who created them. So before you share, ask: what decision or job does it serve for them? Does something already exist?

Testing, usability and look grow with the number of people who will use it:

| Who will use it? | What does it need? |
| --- | --- |
| **Just you** | It does your job, and the numbers match the source |
| **A few named people** | Watch one of them do the job without your explanations, and fix where they hesitate |
| **Many people** | Watch several real users. Focus even more on brand guidelines and data security. Check whether a review is required |

### Prompt: Make it trustworthy before you share

**What this does:** adds a small visible note to your build, and lists what to verify and who could check it.

Stay in the chat where you built it and paste the prompt below.

```
Review this app or artifact before I share it. Ask me who will use it, what job it serves for them, and who owns it.

Then:
1. Add a small visible note on the page: owner, purpose, data sources, last refreshed.
2. List every number or claim to verify against its source, and who could check it.
3. Flag what a viewer might misread.

Change nothing else.
```

Have someone who knows the data check the numbers before others rely on them.

**Test permissions** in the tool you built it in, so only the people who should see the data can open it. In Claude, check the artifact's sharing settings; in other builders, the publish and access settings; in a monday app, the board and app permissions.

**In Claude:** artifacts start private and can be shared within the organization. A shared artifact uses each viewer's own connector access, so two viewers may see different data. Storage is personal or shared, and you decide which.

**Retire it.** Give it an owner. Remove it when nobody uses it.

**Received someone else's artifact?** Before you rely on it, check who made it, where its data comes from and how current it is.

You are done when one real user does the job without your help, and can tell who owns it and where the data comes from.

## Go further

**Make the method a skill.** Do this when you build often.

**What this does:** turns this method into a skill.

Stay in the chat where you built it and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Turn this method into a skill (saved instructions an AI tool follows) for building apps, dashboards and interactive artifacts: ask whether it is needed; grill me until I say "enough"; write a spec with the build tool, MVP and test cases; build two or three first-screen drafts and save the winning look as a note; build the MVP, then make one change at a time and retest; before sharing, add a visible note (owner, purpose, data sources, last refreshed) and list what to verify.

Ask me one question at a time about anything you would have to guess. Show the complete skill in one block.
```

Add the skill, then close and reopen your AI tool. **In Claude:** add it under Customize → Skills.

## Proof of work

In "what I built", name your build, who uses it, and one thing the grill, the tests or the number check caught.

For example: "Renewal tracker on my team's Renewals board, used by four CSMs. The grill caught that accounts without an owner had nowhere to appear."

## Related adventures

- **Designing with AI: Results You Actually Like**: go deeper on the look.
- **Automation Done Right**: when the job needs to run on its own, without a screen.
