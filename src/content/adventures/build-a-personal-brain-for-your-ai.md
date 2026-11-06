---
slug: build-a-personal-brain-for-your-ai
emoji: 🧠
icon: brain
title: "Build a Personal Brain for Your AI"
walkaway: "A personal brain your AI works from, and a light routine to maintain it"
category: Set up your AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
video: /videos/build-a-personal-brain-for-your-ai.mp4
outcome: Build something
pattern: INSTALL
wave: W2
slot: 8
next: [your-own-chief-of-staff, your-team-s-ai-blueprint]
source: "Adapted from summer-challenge/labs/personal-brain.md (interview builds the files, install where the AI reads them, golden questions, maintenance habit); personal-company-brain/article-1-personal-brain.md (identity file written as onboarding, index with a standing upkeep rule, dated facts, layered cadences, archive instead of delete, golden questions); personal-company-brain/article-3-the-bridge.md (three-question propagation filter, used in the team edition); catch-up-may/content/week-3/project-7-professional-specialist.md Step 4 (one topic per file, short files, summarise long documents, link live sources). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 8 [Inbar 16])
- Kept: the summer lab's interview → files → install → golden-questions arc; the article's start-here file written like onboarding a new colleague, the index plus the rule "update the index when a file changes", dated facts, layered cadences (session / weekly / quarterly), archive instead of delete, golden questions answered in a fresh chat; Catch-Up P7 Step 4 file rules (one topic per file, short, link live sources).
- Middle ground (design note): the brain stops at curated files + index + a light routine. Held back on purpose: the LLM-wiki compile/ingest model, raw/wiki/schema layers, scheduled lint, forgetting levers, tiered reading order, scheduled mining of transcripts, the complexity ladder. These stay for EAL.
- Cut: home vs work brains, the tool landscape table, the A/B scorecard, statistics and named practitioners.
- Added for Monday: monday boards and Kremer as linked live sources, Monday examples per profession, Cowork folder as the home where the AI can edit the files, the Your AI Identity link, and the team edition Inbar asked for (comment c6: "would love a version of a team brain"), using the Bridge article's three-question filter plus one owner, one home, suggestions through a monday board.

Open items
- Confirm that Claude Cowork on Monday's Enterprise plan reads a CLAUDE.md file in the folder you choose and can edit files there (Team and Enterprise kept local folders after the Oct 2026 Pro/Max cloud change). Unified Claude reaches all orgs 10 Nov 2026; the "In Claude Cowork" lines may need a freshness sweep.
- "Customize" / project knowledge wording in the Claude chat callout mirrors the sibling files; confirm labels on Monday's plan.
- Scheduling the weekly update in Cowork depends on Keren Q6 (Cowork scheduled tasks enabled at Monday).
- Team edition: confirm Monday's preferred home for shared team context (shared Drive folder vs shared Claude project) with Inbar; wording offers both.
- Overlap check with slot 24 (Your Team's AI Blueprint), whose design note lists "team edition of a brain page" as a layer: this file covers the personal-to-team step; the Blueprint should link here.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 🧠 Build a Personal Brain for Your AI

**Give your AI a small, well-kept set of files about your work, so every chat starts with the context it needs.**

## Why this adventure

Every new chat starts from zero. You explain your team, your accounts and your internal terms again, and the AI still answers like an outsider.

A personal brain is a small set of short files about your work, plus a start-here file with an index, so your AI opens only the file it needs. A light routine keeps it current, so you can trust its answers.

Already built Your AI Identity? It covers who you are and how you work. The brain adds what you work on.

## The trail

1. **Choose what goes in**, so the brain holds the context you keep repeating.
2. **Write the files and the index**, so your AI finds the right context quickly.
3. **Save it where your AI reads it and test it**, to prove it answers like a well-informed colleague.
4. **Keep it current with a light routine**, because an out-of-date brain gives confident wrong answers.

## Before you start

Have the documents you rely on most at hand, for example your team's quarterly plan, an account plan or a product spec.

## Step 1: Choose what goes in

**Think first, without AI.** Close the chat. In a note, list what you explained to an AI, or to a new colleague, more than once this month.

Check your list against this table.

| What belongs in the brain? | Example at Monday |
| --- | --- |
| **Your team and its goals** | This quarter's goals, the launch you own |
| **How your team works** | The review steps before a release, the format of the weekly team update |
| **Projects and accounts** | The account plan before a renewal call, a feature's history (one file each) |
| **Decisions and the reasons** | "Release moved to January because of the data migration", dated |
| **Internal terms** | Product names, team names and acronyms an outside AI would get wrong |
| **Where the live data is** | Links to the monday boards you track, your Drive folders, account data through Kremer |
| **What stays out** | Passwords, customer personal data, opinions about colleagues |

### Prompt: Plan my brain

**What this does:** the AI turns your list into a plan of files and asks about gaps.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me plan a personal brain: short files about my work that my AI tool reads in every chat. I will paste or dictate a list of what I keep explaining.

Use what you already know about me. Ask only about gaps, one question at a time. If an item is vague, ask for a recent example.

Propose at most six files: a start-here file (who I am at work, an index of the other files, rules for using them), plus topic files such as team and goals, how my team works, one file per main project or account, a decisions log, a glossary.

For each file give its name, what goes in it, which documents I should give you, and how often it changes. Leave out passwords, customer personal data and opinions about colleagues. For live data (monday boards, account data in Kremer), plan a link.

Stop and wait for my approval.
```

## Step 2: Write the files and the index

Short files on one topic are easy for your AI to find and for you to keep current.

### Prompt: Write my brain files

**What this does:** the AI writes each file from your documents, then the start-here file and your test questions.

Stay in the same chat and paste the prompt below.

```
Write the files for the brain plan I approved in this chat. If the plan is missing, ask me for it.

Work one file at a time. Ask for the documents that file needs, read them, and ask about anything unclear. Write each file for a future AI colleague:
- Under 500 words, headings and bullets, one topic
- Date every fact that can change ("decided 14 Oct 2026")
- Mark anything you inferred with (check)
- Link to live sources (monday boards, Drive, Kremer) instead of copying their numbers

Wait for my approval after each file.

Write the start-here file last, like a page that onboards a new colleague: who I am at work, what I work on now, the index (each file and one line on when to read it), and these rules: read the index first and open only the files a task needs; tell me when something is missing or out of date; when you create, rename or archive a file, update the index. If I have standing instructions from Your AI Identity, point to them.

Finally, write eight golden questions a well-informed colleague could answer about my work, covering every file. Questions only.
```

Save the golden questions in a note outside the brain, for Step 3.

## Step 3: Save it where your AI reads it and test it

Save all the files in one place your AI reads.

**In Claude Cowork:** create a folder named Brain on your computer, save the files there, and name the start-here file CLAUDE.md. Choose the Brain folder when you start a task; Claude reads CLAUDE.md first and can update the files for you.

**In Claude:** create a project named Brain, paste the start-here file into the project instructions, and add the topic files to the project knowledge.

**In Claude Code:** open Claude Code in the Brain folder; it reads CLAUDE.md at the start of every session.

### Prompt: Test my brain

**What this does:** your AI answers your golden questions from the brain alone and helps you fix what is wrong.

Open a **new** chat or task with the brain loaded. Paste the prompt below, then your golden questions.

```
Test my brain. I will paste eight golden questions about my work. Answer each in two lines or less, using only my brain files. After each answer, name the file you used, or write NOT IN MY BRAIN.

Then wait. I will mark each answer right, wrong, out of date or missing. For each one that is not right, propose the exact change to a file, and wait for my approval before you change anything.
```

You know the right answers, so you are the judge. You are done when your AI answers like a well-informed colleague.

## Step 4: Keep it current with a light routine

Context changes at different speeds, so each kind gets its own schedule.

| When | What you do |
| --- | --- |
| **During any chat** | When a decision or new fact comes up, say "save this to my brain". The AI adds it to the right file, dated. |
| **Every week** | Run the Weekly brain update prompt below. |
| **Every quarter, or when your role changes** | Run Test my brain with fresh golden questions; archive finished projects. |

### Prompt: Weekly brain update

**What this does:** collects this week's changes and proposes exact updates for your approval.

Each week, open a new chat or task with the brain loaded and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Run my weekly brain update. Read my start-here file and its index first.

1. Ask me, one question at a time, what changed this week: decisions, new projects or accounts, finished work, new terms.
2. If you can read the monday boards linked in my brain, list the relevant items that changed this week.
3. Propose the changes as a table: file, change (add, edit or archive), exact new text, date.

Stop and wait for my approval. Then make the approved changes, move finished work to a folder named Archive (outside the index), and update the index. If you cannot edit files, give me each changed file in full.
```

## Go further

**Grow the structure.** Do this when the brain passes about fifteen files and answers come from the wrong file. Ask your AI to group the files into folders by area (Accounts, Projects, Team), each with a short index that the start-here file points to.

**Make capture automatic.** Do this when busy days leave no time to say "save this to my brain". Add one rule to your start-here file: "At the end of a working session, propose up to three updates to my brain, and wait for my approval." **In Claude Cowork:** ask Claude to run the Weekly brain update every Friday in the Brain folder, and check that it appears under Scheduled.

**A team edition.** Do this when your teammates explain the same accounts, release process and terms to their own AI. A team brain holds the shared part once. Keep it about the work, in line with Monday's norms on people data.

**What this does:** keeps what the team needs, strips personal notes, and sets up an owner and a way to suggest changes.

Open a new chat or task with your brain loaded and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me create a team edition of my personal brain: shared files my team's AI tools read. I will share my brain files.

Test every piece of content with three questions:
1. Is it about the work or about a person? Decisions, conventions, customer context and terms pass. Personal notes and anything about a colleague stay out.
2. Would at least three teammates act differently if they knew it?
3. Will it stay true for at least a month?

Show me what passes, with personal notes removed, and wait for my approval.

Then ask me, one at a time: who is the one owner who approves changes, where the team brain lives, and how teammates suggest a change. Write a team start-here file with the index and those answers.
```

A good setup: one owner, one home (a shared Drive folder or a shared Claude project), and a "Brain suggestions" group on your team's monday board that the owner reviews every week.

## Proof of work

In "what I built", name your brain files, where you saved them, and one golden question your brain now answers that a fresh chat could not.

For example: "Five files in a Cowork Brain folder: start-here, Q4 goals, renewal accounts, decisions log, glossary. It now knows why our largest EMEA renewal moved to January."

## Related adventures

- **Your AI Identity**: who you are and how you work; the brain builds on it.
- **Your Own Chief of Staff**: an assistant that uses your brain to prepare your week.
- **Your Team's AI Blueprint**: shared context, skills and a use-case backlog for your whole team.
