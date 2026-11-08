---
slug: build-a-personal-brain-for-your-ai
emoji: 🧠
icon: brain
title: "Build a Personal Brain for Your AI"
walkaway: "A personal brain in a folder or Obsidian, fed by the sources you choose and kept current by your own brain skills and a scheduled task"
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
review: ready
source: "Adapted from summer-challenge/labs/personal-brain.md (interview builds the files, install where the AI reads them, golden questions, maintenance habit); personal-company-brain/article-1-personal-brain.md (identity file written as onboarding, index with a standing upkeep rule, dated facts, layered cadences, archive instead of delete, golden questions, an inbox for raw sources, the magic sentence and scheduled mining as capture lanes, folder or Obsidian as the home); catch-up-may/content/week-3/project-7-professional-specialist.md Step 4 (one topic per file, short files, summarize long documents, link live sources). Skill first, tested by hand, then a scheduled task: Nufar's method (8 Nov 2026). The Build my brain skills prompt adapts the craft of the Build a skill prompt in Skills: When, How and How Well (interview, brief, docs check, complete skill, add and reopen) and carries Nufar's three brain questions (sources, frequency, one or two skills). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 8 [Inbar 16])
- Kept: the summer lab's interview → files → install → golden-questions arc; the article's start-here file written like onboarding a new colleague, the index plus the rule "update the index when a file changes", dated facts, layered cadences (session / weekly / quarterly), archive instead of delete, golden questions answered in a fresh chat; Catch-Up P7 Step 4 file rules (one topic per file, short, link live sources).
- Middle ground (design note): the brain stops at curated files + index + brain skills and one scheduled task. Held back on purpose: the LLM-wiki compile/ingest model, raw/wiki/schema layers, scheduled lint, forgetting levers, tiered reading order, the complexity ladder. These stay for EAL.
- Cut: home vs work brains, the tool landscape table, the A/B scorecard, statistics and named practitioners.
- Added for Monday: monday boards and Kremer as linked live sources, Monday examples per profession, the Your AI Identity link. The team edition Inbar asked for (comment c6) was dropped on Nufar's 8 Nov second review; Your Team's AI Blueprint in Related adventures covers shared team context.

Open items
- Confirm that Claude on Monday's Enterprise plan reads a CLAUDE.md file in the folder you choose and can edit files there (Team and Enterprise kept local folders after the Oct 2026 Pro/Max cloud change).
- Confirm Obsidian can be installed on Monday computers (Step 1 recommends it alongside a plain folder, on Nufar's word).
- Confirm the meaning of "ticker notes" and "Brandonpour" with Nufar (read as quick notes, for example sticky notes, and a raw-notes inbox: a brain-dump file or an Inbox folder).
- Scheduling housekeeping in Claude depends on Keren Q6 (scheduled tasks in Claude enabled at Monday). Hands-on check: can a Claude scheduled task run a skill by name and reach the Brain folder and the chosen sources (same open item as Automation Done Right).
- Skills: Keren Q2 (are skills added by each employee under Customize → Skills, or provisioned by an admin). Affects the Step 4 table and the add-and-test line.
- Reading monday's notetaker notes, Slack and email from Claude depends on the connectors being enabled at Monday; the sources table names them as examples only.
- Overlap check with slot 24 (Your Team's AI Blueprint), whose design note lists "team edition of a brain page" as a layer: this page no longer has a team edition, so the Blueprint owns the team brain.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
Changed 2026-11-05: think-first opener per the 23 Oct rule; chat and Cowork treated as one surface.
Changed 2026-11-08: her review (where it lives: folder with index or Obsidian; sources decision; upkeep by skill then scheduled task; Why aligned with the live video).
- Trail: decide where it lives; choose what goes in and what feeds it; write the files and test them; keep it current with a skill and a scheduled task.
- Step 1 (new): a two-row table (folder with an index, Obsidian), a monday board possible but not recommended, setup per tool (CLAUDE.md for Claude, AGENTS.md for Claude Code or Cursor). The Claude project home is dropped: the skill and the scheduled task cannot edit project knowledge, so it does not fit the upkeep method.
- Step 2: sources table (monday's notetaker, quick notes, monday boards with Kremer, Slack, email, a raw-notes inbox). "Customer personal data" corrected to the Monday rule (content from customers' own monday boards).
- Why: "Every new chat starts from zero" removed; now follows the live script (memory and business knowledge exist, the AI's picture goes stale, a context system for one person that taps into your systems and working processes, done when it answers like a well-informed colleague).
Changed 2026-11-08 (second review): self-contained opinionated brain skill prompt (sources, frequency, one or two skills); where the skill lives; fewer test questions; team edition replaced by evolve your brain.
- Step 4: the pointer to the Skills adventure's Build a skill prompt is gone. "Build my brain skills" interviews for sources (shows what the start-here file lists and asks what to add, so Step 2 keeps owning the first choice), frequency, and one skill or two (recommends two: capture runs on request, housekeeping on a schedule), then writes each skill with the required steps, rules, frequency and three test requests. A three-row "where does each part live" table answers her "where does the housekeeping skill reside". The scheduled task reads the frequency from the skill.
- Step 3: eight golden questions became three to five test questions the reader already knows the answers to, picked by the reader (no AI generation step). The write prompt also creates the Archive folder and the raw-notes inbox the skills use.
- Before you start: the "start with Skills: When, How and How Well" line is replaced by the one real prerequisite (a few work documents), since this page now carries its own skill prompt. The "For the full method, do Automation Done Right" line is cut.
- Go further: team edition (prompt, Bridge three-question filter, owner and suggestions board) replaced by "Evolve your brain", a step added to the housekeeping skill that finds gaps (to-dos no file captures, people who appear often in your sources but nowhere in your brain, undated decisions) and proposes a new source, a new file or a new rule. Grow the structure kept.
- Length: first draft 2,462 words (over the 2,300 cap); trimmed to 2,281 by tightening the two new prompts, the Step 4 intro, the Obsidian row and Proof of work. Nothing self-contained was cut. Line-by-line check done for the over-1,850 flag: the extra length is the brain skills prompt and the where-it-lives table.
-->

# 🧠 Build a Personal Brain for Your AI

**Give your AI a small set of files about your work, fed by your sources and kept current by skills you build.**

## Why this adventure

If you have used AI for a while, you know context makes it your own; without it, you get a mediocre result. Maybe you already use memory and keep business knowledge in some of your working environments. Still, you often explain yourself again, or correct the AI's outdated picture of your world, and at a company as dynamic as monday.com that picture ages fast.

A personal brain is a context system built to serve one person: you. It is a set of short files and an index, fed by the sources you choose. It taps into your systems and working processes, to help you hold a clear picture and manage your day-to-day.

Here you build yours and keep it current. You are done when your AI answers like a well-informed colleague.

## The trail

1. **Decide where your brain lives**, so you and your AI share one place.
2. **Choose what goes in and what feeds it**, so it holds the context you keep repeating.
3. **Write the files and test them**, to prove your AI answers like a well-informed colleague.
4. **Keep it current with skills and a scheduled task**, because a stale brain gives confident wrong answers.

## Before you start

Have a few real documents about your work at hand, for example your team's goals, a project plan or recent meeting notes.

## Step 1: Decide where your brain lives

We recommend one of two homes. Your AI reads and edits both.

| Where does it live? | What is it? |
| --- | --- |
| **A folder with an index** | The simplest setup: a folder named Brain on your computer, where the start-here file lists every file and when to read it. |
| **Obsidian** | A free note-taking app that keeps notes as plain text files in a folder on your computer. You read and edit the brain there; your AI reads the same folder. |

A monday board can hold it too, but we do not recommend it: files your AI reads as one place are easier to keep current and search.

Create a folder named Brain on your computer. For Obsidian, open it as a vault (Obsidian's name for a folder of notes).

The start-here file is what your AI reads first: who you are at work, the index and the rules. **In Claude:** choose the Brain folder when you start a chat, and name the start-here file CLAUDE.md. Claude can then update the files. **In Claude Code or Cursor:** open the folder and name the start-here file AGENTS.md.

## Step 2: Choose what goes in and what feeds it

**Think first for yourself, without AI.** What did you explain to an AI, or to a new colleague, more than once this month? Where does new information about your work show up first?

| What belongs in the brain? | Example at Monday |
| --- | --- |
| **Your team and its goals** | This quarter's goals, the launch you own |
| **How your team works** | Release review steps, the weekly update format |
| **Projects and accounts** | One file each, for example an account plan |
| **Decisions and the reasons** | "Release moved to January because of the data migration", dated |
| **Internal terms** | Product names and acronyms an outsider gets wrong |
| **What stays out** | Passwords, content from customers' own monday boards, opinions about colleagues |

Its sources are part of the brain. Pick the ones that hold your work.

| Where does it come from? | What does it add? |
| --- | --- |
| **monday's notetaker** | Meeting notes and decisions |
| **Quick notes** | Ideas you jot down, such as sticky notes |
| **monday boards** | Live project status; account data through Kremer |
| **Slack** | Decisions from your channels and threads |
| **Email** | Commitments and customer context |
| **A raw-notes inbox** | A file in your Brain folder for brain dumps and raw notes, sorted later |

### Prompt: Plan my brain

**What this does:** the AI interviews you about your thoughts and plans your files and sources.

Open a new chat in your AI tool (in Claude, choose your Brain folder) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me plan a personal brain: short files about my work that my AI tool reads. First ask me to brain dump or paste all my thoughts on what I keep explaining and where my information comes from.

Use what you know about me and ask only about gaps, one question at a time. If I already answered a question earlier in this chat, don't ask it again. If an item is vague, ask for a recent example.

Propose at most six files: the start-here file (who I am at work, the index, rules) plus topic files, for example goals, how my team works, one per main project or account, decisions, a glossary. For each: name, contents, documents I should give you, how often it changes.

Then ask which sources I chose and say which files each one feeds, with links for live data. Leave out passwords, content from customers' own monday boards and opinions about colleagues. Wait for my approval.
```

## Step 3: Write the files and test them

### Prompt: Write my brain files

**What this does:** the AI writes each file from your documents, then the start-here file.

Stay in the same chat and paste the prompt below.

```
Write the files for the brain plan I approved in this chat (if it is missing, ask me for it). One file at a time: ask for the documents it needs and about anything unclear. Write each for a future AI colleague:
- Under 500 words, headings and bullets, one topic
- Date every fact that can change ("decided 14 Oct 2026")
- Mark anything you inferred with (check)
- Link to live sources for numbers that change

After I approve a file, save it in my Brain folder, or give it to me in full if you cannot. Also create an Archive folder for finished work, and the raw-notes inbox if I chose one.

Write the start-here file last, like a page that onboards a new colleague: who I am at work, what I work on now, my chosen sources and where each one is, the index (each file and when to read it), and these rules: read the index first and open only the files a task needs; tell me when something is missing or out of date; update the index whenever a file is created, renamed or archived.
```

Now think of three to five questions about your work that you already know the answers to, for example why a release moved or who owns an account. You will paste them into Test my brain.

### Prompt: Test my brain

**What this does:** your AI answers your test questions from the brain alone, then helps you fix it.

Open a **new** chat with your Brain folder chosen. Paste the prompt below, then your test questions.

```
Test my brain. I will paste a few test questions. Answer each in two lines or less, using only my brain files. After each answer, name the file you used, or write NOT IN MY BRAIN.

Then wait. I will mark each answer right, wrong, out of date or missing. For each answer that is not right, propose the exact change to a file and wait for my approval.
```

You are done when your AI answers like a well-informed colleague.

## Step 4: Keep it current with skills and a scheduled task

Updating files by hand is the first habit to slip, so upkeep runs on skills: saved instructions your AI follows. The skills live in your AI tool and work on the files in your Brain folder. You build them and test them by hand; then a scheduled task runs the housekeeping at the frequency you chose.

| What is it? | Where does it live? | What does it do? |
| --- | --- | --- |
| **Your brain files** | Your Brain folder (or Obsidian vault) | Hold the context |
| **Your brain skills** | Your AI tool. In Claude: Customize → Skills. In other tools, the prompt tells you where. | Read and update your brain files |
| **The scheduled task** | Your AI tool. In Claude: Scheduled | Runs your housekeeping skill on schedule |

### Prompt: Build my brain skills

**What this does:** the AI interviews you about how your brain should stay current, then writes your brain skills, ready to add to your AI tool.

Open a new chat in Claude with your Brain folder chosen, so it can read your start-here file, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me build the skills that keep my personal brain current. A skill is saved instructions my AI tool follows for a recurring task. My brain is the folder of short files you can see. Read its start-here file (CLAUDE.md or AGENTS.md) first.

First ask me to brain dump how I want my brain kept current. Then interview me one question at a time, only about gaps. If I already answered a question earlier in this chat, don't ask it again.
1. Where my brain's information comes from: monday's notetaker, monday boards, Slack, email, and which other sources. Start from the sources my start-here file lists.
2. How often to run housekeeping: daily, weekly or another frequency, and on which day.
3. One skill or two: one that captures brain dumps and after-meeting notes whenever I ask, and one for housekeeping at that frequency. Recommend two, since they run at different moments.
4. The phrases I would use to start each one, and what a great update looks like.

Show a short brief and wait for my approval.

Then check my AI tool's current documentation for its skill format. Write each complete skill:
- A short name in lowercase with hyphens.
- A description that makes it fire: what it does and when to use it, in my phrases.
- Steps: read the start-here file and its index first; open only what the task needs; propose dated changes as a table (file, add, edit or archive, exact new text); name any source you could not read; wait for my approval; move finished work to the Archive folder; update the index.
- For housekeeping: my frequency, reading my sources and my raw-notes inbox file, if I have one, since the last run.
- Never save passwords, content from customers' own monday boards or opinions about colleagues.
- Three test requests I can run by hand.

Show each skill in one block, then tell me how to add it in my tool and to close and reopen the tool.
```

**Add and test the skills.** In Claude, add each skill under Customize → Skills, then close and reopen Claude so it finds them. In a new chat with your Brain folder chosen, run each test request. When a proposal is off, say exactly what was wrong, for example "that decision belongs in decisions.md", and ask Claude to rewrite the skill. Schedule once you would approve its proposals as they are.

### Prompt: Schedule my brain housekeeping

**What this does:** turns your housekeeping skill into a scheduled task that proposes changes and waits for you.

Open a new chat in Claude with your Brain folder chosen and paste the prompt below.

```
Create a scheduled task that runs my brain housekeeping skill at the frequency written in it (if it does not say, ask me). Each run starts fresh and follows the skill, so it reads my start-here file first and changes nothing until I approve. Show me the instructions before you save the task.
```

Check that the task appears under Scheduled, and review its first run.

**Every quarter, or when your role changes,** run Test my brain with new test questions.

## Go further

**Grow the structure.** Do this when the brain passes about fifteen files and answers come from the wrong file: ask your AI to group them into folders by area, each with its own index.

**Evolve your brain.** Do this once housekeeping runs smoothly, to find what your brain still misses.

**What this does:** adds a step to your housekeeping skill that finds gaps and proposes how to close them.

Open a new chat in Claude with your Brain folder chosen and paste the prompt below.

```
Add an "evolve my brain" step to my brain housekeeping skill. Read the skill and my start-here file first, and ask me how often the step should run, for example monthly.

The step looks for what my brain still misses, for example to-dos in my sources that no file captures, people who appear often in my sources but nowhere in my brain, and decisions with no date. For each gap it proposes one fix, with the reason: a new source, a new file or a new rule in the start-here file. It changes nothing until I approve.

Show me the updated skill in one block, then tell me how to replace it in my tool and to close and reopen the tool.
```

## Proof of work

In "what I built", name where your brain lives, its sources and skills, and one test question it answers that a fresh chat could not.

For example: "Five files in Obsidian, fed by meeting notes, Slack and the Launch board, with a capture skill and weekly housekeeping. It now knows why our EMEA renewal moved to January."

## Related adventures

- **Your AI Identity**: who you are and how you work.
- **Your Own Chief of Staff**: an assistant that works from your brain.
- **Your Team's AI Blueprint**: shared context for your team.
