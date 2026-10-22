---
slug: creating-apps-with-ai-done-right
emoji: 🧰
icon: toolbox
title: "Creating Apps with AI, Done Right"
walkaway: "A working version of a real app or dashboard, built with a method you reuse for every future build"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Ambitious
outcome: Build something
pattern: BUILD
wave: W1
slot: 22
next: [designing-with-ai-results-you-actually-like, automation-done-right]
source: "Adapted from summer-challenge/labs/build-a-beach-house.md (plan before build, thin working slice, one change at a time, retest the core path, fresh chat when stuck, postmortem layer); catch-up-may/content/week-2/project-6-data-scientist.md (the 8 vibe-coding rules: MVP, 2-3 versions, checkpoint, new chat, point and show, test again; the 'keep asking until everything is covered' interview; spot-check numbers) and catch-up-may/content/week-3/project-7-professional-specialist.md Step 6 (build the one tool, MVP first). Method from Nufar's vibe-coding practices (grill-me spec, behaviour precise and look as a visual language, multi-version first draft, visual language as a file). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 22 [Inbar 7])
- Kept: Beach House plan-first interview with pushback, deferred-feature list, one change at a time with a retest click-path, fresh chat when stuck, the postmortem layer (now in Go further). P6 rules: MVP, 2-3 versions, checkpoint, point and show, test again, spot-check numbers. P7 Step 6 "the one tool you need" as an idea source.
- Cut: tool menus for outside builders (Lovable, Base44, Bolt, v0, AI Studio), Catch-Up worker framing, Sarah Chen, data-sensitivity table, Layers / Stretch / Postcard, the 8-rule table as a block (rules folded into the steps where they act).
- Added for Monday: Nufar's grill-me spec (essentials round, then increasingly specific questions until "enough"); behaviour-vs-look table; three visually distinct drafts and a visual-language note; a where-to-build table across monday vibe, Big Brain Studio and Claude; monday boards as data source; Kremer in passing for internal data; one line on link access (anyone with the link sees the app's data).
- Data path folded in here per the inventory ("From Data to Decisions" folded into this adventure as the dashboard path).

Open items
- Inbar promised internal materials on monday vibe and Big Brain Studio (Google Doc comment c2, 11 Oct). Not received yet. The where-to-build table and the "In monday vibe" / "In Big Brain Studio" lines are written from what we know and need her check; add links to Monday's own guides when they arrive.
- monday vibe: confirm it builds apps that read and write monday boards, and how to start a second or third version from the same prompt. Wording is conditional.
- Big Brain Studio: built through a plugin in Cursor or Claude Code (Doron, 8 Oct). Confirm whether every employee can start a Big Brain Studio app, or only on request. Confirm the sharing ladder wording (private, chosen people, company-wide).
- Claude: multiple artifacts in one reply, opened side by side; hands-on check pending.
- Effort: seed says Ambitious; inventory row says M. Used the seed value.
- next: slugs are provisional until those files exist.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🧰 Creating Apps with AI, Done Right

**Build a real app or dashboard with AI, using a method that works in any building tool.**

## Why this adventure

At Monday you can build a working app by describing it to AI: in monday vibe, in Big Brain Studio, or directly in Claude. This is called vibe coding: building software by describing it in plain language.

The result depends mostly on the method. Good builds share five habits: the tool asks you questions until the plan is clear, you describe the behaviour precisely and let the AI handle the look, you choose between several drafts, you build the smallest useful version first, and you test before you add more.

In this adventure you apply all five to one real app. Already build apps often? Use a tool you started and abandoned, and compare the result with your usual way.

## The trail

1. **Plan the app and let the tool grill you**, because every question answered now is a fix you avoid later.
2. **Build three drafts and pick one**, because choosing a good draft is faster than fixing a weak one.
3. **Test what you built**, so you trust it before anyone else uses it.
4. **Add features one at a time and share it**, so every feature lands on a version that works.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

You will build one real app or dashboard that you or your team would use every week.

## Step 1: Plan the app and let the tool grill you

**Think first, without AI.** Close the chat and write five lines: who will use the app, the one job it does, what they use today, where the data lives, and how you will know it works. Good ideas at Monday: a renewal tracker on a monday board, a forecast scenario calculator, an intake form for campaign briefs, a viewer for incident timelines.

Choose where to build:

| What are you building? | Where to build it |
| --- | --- |
| An app that works on your monday boards: a form, a tracker, a view for your team | monday vibe |
| An internal app with Monday login, its own database and AI features, shared by link | Big Brain Studio, through its plugin in Cursor or Claude Code |
| A one-page tool or dashboard, fast, for you or a few people | Claude, as an artifact in the chat |

For internal data such as accounts, renewals or Salesforce records, plan to get it through Kremer, which applies your own permissions.

### Prompt: Grill me, then write the spec

**What this does:** the AI asks the basic questions, then keeps asking more specific ones until you say "enough", and writes a one-page spec for your approval.

```
Help me plan a small internal app before anything is built. Write no code and design no screens yet. I will paste or dictate my notes about the app.

Round 1, essentials, as one batch: who uses it, the one job it does, what they use today, where the data comes from (a monday board, a file, internal data), and how we will know it works.

Round 2, grill me. Ask one question at a time, each more specific than the last: what each click and button does, what each screen shows when there is no data yet, wrong or missing input, realistic data volumes and ranges, who may see and change what. Keep going until I say "enough". If I answer vaguely, ask for a real example.

Then write a one-page spec:
1. Users and the job
2. MVP: the smallest version that does the job, with one main flow
3. Behaviour rules, one line per interaction
4. Data: sources and fields
5. Later features, in priority order
6. Five test cases that prove the MVP works

Stop and wait for my approval.
```

Answer by voice if you can. The grill takes a while, and it replaces days of questions after the build.

## Step 2: Build three drafts and pick one

Describe the two halves of an app differently:

| What to describe | How precisely | Example |
| --- | --- | --- |
| **Behaviour:** what happens on each click, filter, empty screen and error | Exactly, one rule per interaction | "Clicking an account opens its last three notes. An account with no notes shows 'No notes yet' and an Add note button." |
| **Look:** colours, fonts, spacing, tone | As a visual language: a few words and a reference | "Calm and compact, like a monday board: white background, one accent colour, short rows." |

When the app must match an existing look, such as the monday brand, a screenshot works better than adjectives.

### Prompt: Three drafts of the MVP

**What this does:** builds the MVP from your approved spec in three versions that work the same and look clearly different, then saves the winning look as a note.

```
Build the MVP from the spec I approved earlier in this chat. If the spec is missing, ask me to paste it. Follow its behaviour rules exactly and leave out every later feature.

First ask me three short questions about the look: the feeling the app should give, how dense it should be, and any colours or reference to follow (I may share a screenshot).

Then build three versions, A, B and C, with the same behaviour and three clearly different visual directions. Describe each direction in one line.

When I pick a winner, write a visual-language note for it: colours with their values, fonts, spacing, tone, and three plain rules. Every later change must keep this look.
```

**In Claude:** open the three artifacts side by side.

**In monday vibe and Big Brain Studio:** if the tool builds one version at a time, run the prompt three times and give each run one visual direction.

Pick the draft closest to what you want and continue only from it. Save the visual-language note next to your spec.

## Step 3: Test what you built

| What to test | How |
| --- | --- |
| The main flow | Do the job yourself, start to finish |
| The five test cases | Run each one and write down which fail |
| Empty and wrong input | An empty board, a missing field, a very long name, a date in the past |
| Numbers | Check three numbers against the source board or file |
| Access | Who can open it, and what can they see? |

Anyone who can open the app's link can see the data in it, so share it only with people allowed to see that data.

### Prompt: Fix what failed

**What this does:** fixes one failure at a time and tells you what to test again.

```
I tested my app against the test cases in my spec. I will describe each failure, often with a screenshot where I marked the problem.

For each failure: say what you understood, name the likely cause, and fix only that. Change nothing else. Then list the test cases I should run again, including the main flow.
```

Give exact feedback, such as "the filter forgets the region when I go back". A screenshot with the problem circled works best.

Save a copy of each working version before the next change, so you can go back. If two fixes in a row fail, start a new chat with the spec, the visual-language note and the one problem.

## Step 4: Add features one at a time and share it

When the MVP passes all five test cases, add features from the later-features list in your spec, one at a time.

### Prompt: Add the next feature

**What this does:** plans one feature with its behaviour and test, builds only that, and keeps the look.

```
My app's MVP works and passes the test cases in my spec. Help me add one feature from the later-features list.

Ask which feature I want. Then ask two or three questions about its exact behaviour. Add its behaviour rules and one new test case to the spec, and show me the plan. Wait for my approval.

Build only that feature and keep the look in my visual-language note. Then list every test case to run again, old and new.
```

Then share the app with one real user. Watch them use it without your explanations and write down where they hesitate: that list is your next round of fixes.

**In Big Brain Studio:** start private, then share with the people who need it.

You are done when one real user does the job in your app without your help.

## Go further

**Make the method a skill.** Do this when you build apps often and want this method in every build.

**What this does:** writes a skill for your app builds, for your approval.

```
Help me build a skill for creating apps with AI. On any app request it should: ask essentials, then grill me with more and more specific questions until I say "enough"; write a spec with an MVP, behaviour rules, later features and five test cases; wait for approval; build three visually distinct drafts; save the winning look as a visual-language note; add features one at a time with a test after each.

Interview me one question at a time about the apps I build and the tools I use. Then write the complete skill: name, when to use it, steps, three test requests. Wait for my approval.
```

Add the skill, then close and reopen your AI tool so it finds it. **In Claude:** add it under Customize → Skills.

**Learn from an earlier build.** Do this if some of your earlier builds disappointed you. In the chat where you planned this app, ask: "Compare this process with how I usually build apps. Which three habits should I keep?" Save the answer with your spec.

## Proof of work

In "what I built", name the app, who uses it, and one thing the grill or the tests caught before a user did.

For example: "Renewal tracker on my team's Renewals board, used by four CSMs. The grill caught that accounts without an owner had nowhere to appear."

## Related adventures

- **Designing with AI: Results You Actually Like**: go deeper on the look of what you build.
- **Automation Done Right**: when the job needs to run on its own, without a screen.
