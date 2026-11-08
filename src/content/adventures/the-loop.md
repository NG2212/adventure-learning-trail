---
slug: the-loop
emoji: 🔁
icon: loop
title: "The Loop"
walkaway: "A multi-step assignment completed by an agent end to end, verified against your definition of done, and a goal card for the next one"
category: Automate and delegate
levels: [Advanced]
professions: [Everyone, Engineering]
audience: []
tool: Agentic coding tool
effort: Longer
outcome: Build something
pattern: LOOP
wave: W4
slot: 25
next: [agent-teams-and-orchestration, token-smartness]
review: ready
video: /videos/the-loop.mp4
source: "Adapted from summer-challenge/labs/the-loop.md (three ingredients, Goal Card anatomy, sandbox first, turn caps, the four failure modes, /goal vs /loop per tool, five-line debrief, verification stretch) and the Agentic Loops for Knowledge Workers webinar, Aug 2026 (supertraining/from-loops-to-org-charts/: reference-card.md gate and failure modes, lab-handout.md design interview and judge-the-card checks, giveaways/goal-designer.md DONE WHEN rules and stall rule, research/loop-tooling-brief.md verified command mechanics). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 25 [Inbar 25])
- Kept: the checkable finish line as a Step 1 requirement; the Goal Card fields with DONE WHEN as machine-checkable only and taste moved to QUALITY; the stall rule (3 turns with no progress → stop and report) and "blocked → ask"; the cycle log line; start small; caps inside the goal text; the four failure modes (runaway spend, stuck loop, done but weak, wrong surface); "more turns rarely fix a weak finish line"; the five-line debrief; the fresh-context checker; the goal-designer skill; the opposite-domain layer.
- Cut: graph / org-chart material (Agent Teams and Orchestration owns it), Cowork and ChatGPT Work paths (this adventure is labelled for agentic coding tools), the model-choice paragraph (the standard model sentence covers it), the marketing-campaign story, the per-tool table (replaced by conditional callouts).
- Added for Monday: assignments by role (engineering, product, customer facing, marketing) with checkable finish lines; inputs named in CONTEXT, incl. a monday board export and internal data through Kremer; the customer-boards rule worded as Nufar clarified; the human publishes to the board or pull request after review; the goal card saved as a reusable file (the "template for the next one" promised to Inbar); the verification prompt runs in a fresh session so the checker did not write the work.
- Commands written conditionally, and the design prompt tells the tool to check its own current documentation before writing the command.

Open items
- Keren Q4: who has Claude Code, Cursor and Codex at Monday, and how people get access.
- Command facts as of Aug 2026 (loop-tooling brief): Claude Code /goal with a small evaluator model, cap inside the condition text, /goal clear, /loop = interval; Cursor /goal and /loop since its 19 Aug 2026 release; Codex /goal with pause / resume / clear. Hands-on check per tool before W4 (4 Jan 2027); the callouts are the only lines a freshness sweep edits.
- Permission settings for "edit inside the output folder only" are written generically per tool; confirm Monday's managed settings allow it.
- Skill location in Cursor (.cursor/skills/) taken from the webinar giveaway; the Go further line asks the tool instead of naming the folder.
- Labels: the seed lists "Advanced users" as a profession, which is outside the label set; used [Everyone, Engineering] with level Advanced. Nufar to decide.
- next: agent-teams-and-orchestration is provisional until that file exists.
- Prompt test in a fresh Claude Code session: pending (playbook step 4).
23 Oct: do-this line on every prompt

Changed 2026-11-05: think-first opener per the 23 Oct rule.

Changed 2026-11-08 (her review): three shapes verbatim (Quota, Coverage, Convergence; fits in one pass? skip the loop); bounded workspace dropped; goal-designer skill kept optional.

Changed 2026-11-08 (her review): engineering pass so engineers and knowledge workers both find value.
-->

# 🔁 The Loop

**Hand an agent a multi-step assignment with a clear definition of done and a cap, and verify what comes back.**

## Why this adventure

An **agentic loop** is an agent that keeps working on one goal, turn after turn: it plans, acts, checks its work and adjusts, until a finish line you defined is met or a cap stops it. Claude Code, Cursor and Codex have goal commands for exactly this, and the same design works for a code migration and for a research deliverable.

Set up well, a loop returns finished, checked work. Set up loosely, it burns tokens, repeats one mistake, or declares victory on weak work. This adventure teaches the design: the right task, a sharp definition of done, a cap, and outputs on a new branch or in a new folder, so your originals stay untouched.

## The trail

1. **Pick an assignment that fits a loop**, because a loop pays off only for work with one of three shapes and a finish line you can check.
2. **Write the goal card**, because the command is one line and the card is the real work.
3. **Run it small, with a cap**, so mistakes stay cheap, the cost stays capped and your originals stay untouched.
4. **Verify the result and keep the card**, because the loop's own "done" is where your review starts.

## Before you start

You need Claude Code, Cursor or Codex.

## Step 1: Pick an assignment that fits a loop

**Think first for yourself, without AI.** Which three multi-step tasks from the last month come to mind? How would you check each is finished?

A loop is the right tool when the work has one of these three shapes:

| Shape | When does it fit? | For example | At Monday, for example |
| --- | --- | --- | --- |
| **Quota** | A count no single pass can satisfy | GTM (go-to-market): 40 sourced competitor data points. G&A (general and administrative): 30 cited benchmarks for the board pack | Marketing: 25 competitor data points, each with a link and a date from this year. Engineering: 50 test fixtures for a parser, each covering a different input |
| **Coverage** | Every item in a set, to a standard | GTM: a sourced note for every account on the list. Tech: every ticket tagged with a root cause | Product: release notes for a feature, with every merged pull request listed once with its link. Engineering: every public endpoint of a service documented |
| **Convergence** | Check, fix, recheck until every check passes | GTM: a pitch until a skeptical-buyer review finds no objection. Tech: a runbook until a cold reader has no questions | Engineering: a flaky test fixed until it passes 20 runs in a row |

Whatever the shape, a loop also needs a finish line that a script, a command or a count can confirm, for example "all tests and lint pass" or "every account has a sourced note". Words like "clear" or "insightful" give the loop nothing to stop on, so work where your judgment is the product, such as a strategy memo or an architecture decision, stays with you. The checkable finish line becomes DONE WHEN on your goal card in Step 2.

Pick one assignment with one of these shapes and a checkable finish line. **Fits in one pass? Skip the loop.**

## Step 2: Write the goal card

A **goal card** is a one-page brief the loop works from, saved as a file in the folder you open your tool in, so the loop can reread it on every turn. Here are two:

| Field | Release notes | Test migration |
| --- | --- | --- |
| **OBJECTIVE** | Release notes for the automations feature, for customer success managers | The payments package's tests moved to the new framework |
| **OUTPUT** | `output/release-notes.md` with sections New, Improved, Fixed | Commits on a new branch |
| **DONE WHEN** | Every pull request in `prs.csv` appears once with its link; under 400 words; no internal ticket numbers | Tests pass; lint and type checks are clean; no file uses the old framework; test count unchanged |
| **QUALITY** | Customer language; one benefit per line | Same assertions as before |
| **CONTEXT** | `prs.csv`, exported from the team's release board | The payments folder; the migration guide |
| **CONSTRAINTS** | Write only in the new `output/` folder; never edit the input files; log one line per cycle | Branch only; never push, merge or change CI (continuous integration) settings; skip no tests; log one line per cycle |
| **CAPS** | 12 turns; 3 turns with no progress means stop and report; blocked means ask | 15 turns; same stall and blocked rules |

**DONE WHEN is the heart of the card:** the loop stops when these checks pass, so a script, a command such as your test suite, or a count must be able to confirm each line. Your taste goes into QUALITY.

The loop can read as many inputs as the task needs, for example several folders it summarizes into files, an export of your team's monday board, a codebase, or internal data through Kremer. Its outputs go to a new folder or a new branch, so your originals stay untouched and you review every change before it merges. Never give a loop secrets, production credentials or access to live systems. Data that Monday's customers uploaded to their own monday boards stays out of Claude.

### Prompt: Design the goal card

**What this does:** the AI interviews you about your thoughts on your assignment, names its shape, challenges any finish line that needs your taste, saves the card and writes the exact command for your tool.

Open Claude Code, Cursor or Codex in the folder that holds your work and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me design a goal card for an agentic loop: an agent that works on one goal, turn after turn, until a finish line is met or a cap stops it. Design only; start no work yet.

Ask me to brain dump or paste all my thoughts on my task before you start. Use what you know about me and this project; ask one question at a time about gaps. If I already answered a question earlier in this chat, don't ask it again.

First, tell me which of three shapes my task has:
- Quota: a count no single pass can satisfy, for example 40 sourced competitor data points, or 50 test fixtures
- Coverage: every item in a set, to a standard, for example a sourced note for every account on a list, or every endpoint documented
- Convergence: check, fix, recheck until every check passes, for example fixing code until every test passes and lint is clean
If the task fits in one pass, has none of these shapes, or has no finish line a script, a command or a count can confirm, say "do not loop this" and give me a single-prompt version.

A goal card has these fields:
- OBJECTIVE: what and for whom, one line
- OUTPUT: a file path in a new output folder, with sections; for code, a new branch
- DONE WHEN: only checks a script, a command or a count could confirm (tests, lint, type checks, counts, named sections, a source link per claim, length). In a code project, find its own test, lint and type-check commands and use them
- QUALITY: the bar that guides the work
- CONTEXT: the inputs to read: files, folders, exports or code
- CONSTRAINTS: write only in the new output folder or branch; never edit the inputs; never push, merge or deploy; never read secrets or touch production; log one line per cycle: checked what, pass or fail
- CAPS: a turn cap (8 to 15) or a spend cap; stop and report after 3 turns with no progress; stop and ask when blocked

Challenge any DONE WHEN line that needs my judgment, or that the loop could pass by gaming it (for example by deleting a failing test), and offer a checkable version.

Show the card and wait for my approval. Then save it as goal-card.md, check your current official documentation for this tool's goal command, and write the exact command, with the cap inside it.
```

Before you approve, read each DONE WHEN line and ask: could a script check this without me?

## Step 3: Run it small, with a cap

Start small, for example with ten pull requests, one of several folders or one package, and widen the scope in the card once that run passes.

Open a new session in the folder that holds `goal-card.md`, so the loop starts from the card alone. Ask it to read `goal-card.md`, then start the loop with the command from Step 2. For code, start on the new branch. Allow edits in the new output folder or on that branch only.

Command names change between versions:

**In Claude Code:** if your version has `/goal`, type it with the DONE WHEN lines and the cap, for example "all tests in payments pass and lint is clean, or stop after 15 turns". A small, fast model checks the condition after every turn; `/goal clear` stops it. `/loop` repeats a prompt on a timer, which suits monitoring.

**In Cursor:** recent versions have `/goal`. If yours has only `/loop`, write "/loop work on goal-card.md until every DONE WHEN line passes; stop after 12 passes". A local loop stops when you close Cursor.

**In Codex:** if your version has `/goal`, use it the same way, with the cap in the goal text.

Watch the first two or three turns. Step in when it asks, repeats itself or writes outside the output folder or branch; otherwise, let it work.

| What goes wrong | How can you tell? | What to do |
| --- | --- | --- |
| **Runaway spend** | Turns keep going; each one rereads more | A turn cap in every goal |
| **Stuck loop** | The same edit again; "almost done" again and again | Stop it; sharpen DONE WHEN |
| **Done but weak** | Checks pass; the output is shallow or games the count, for example a skipped test turns the build green | Add a check, for example "test count never drops"; more turns rarely fix a weak finish line |
| **Wrong surface** | Files change outside the output folder or branch, or it touches CI settings, secrets or production | Stop it; restore the originals from your branch or a copy |

## Step 4: Verify the result and keep the card

When the loop stops, the verdict is yours. Note how it stopped: finish line met, cap reached, or stalled.

### Prompt: Check the result against the goal card

**What this does:** a fresh session checks every DONE WHEN line with evidence, then helps you debrief and update the card.

Open a new session in the folder that holds `goal-card.md`, so a fresh agent checks the work, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Read goal-card.md and the output it names: a file, or the commits on a branch. You are checking work you did not write.

1. For every DONE WHEN line, run the check yourself (count, run the tests, lint and type checks, open each link) and report pass or fail with evidence.
2. For every QUALITY line, quote the weakest example in the output.
3. If the output is code, read the full diff against the starting branch. List any change outside the task, any skipped or deleted test, and anything that looks like a secret.
Report only; change nothing.

Then ask what I noticed myself, and help me write a five-line debrief: what it produced; what the finish line forced that a single pass would skip; what it missed (card fix or wrong task); turns used, from the cycle log; keep, fix or stop using this loop.

Finally, update goal-card.md with my fixes, and save a copy named after this kind of task, for example goal-release-notes.md, for the next run.
```

Read the output yourself, as its reader would. When it passes every check and still misses the point, fix the card and rerun. After your review, publish the result yourself: post it to the monday board, or open the pull request for CI and your usual code review.

You are done when your own check passes every DONE WHEN line and the card for the next run is saved.

## Go further

**Add a separate checker.** Do this when the loop approves its own weak work. Ask your tool for a reviewer sub-agent that reads only `goal-card.md` and the output and returns pass or fail per DONE WHEN line. Then add to the goal: "continue until the reviewer passes every line".

**Make goal design a skill (optional).** If you run loops often, paste the Design the goal card prompt from Step 2 into your tool and ask it to save that prompt as a skill named goal-designer. Close and reopen the tool so it finds the skill.

## Proof of work

In "what I built", name the assignment, your best DONE WHEN line, how the loop stopped, and keep, fix or stop.

For example: "Release notes from 34 pull requests. DONE WHEN: every pull request appears once with its link. Stopped at turn 7 of 12; two items were grouped wrongly, so I added a check. Keep." Or: "Payments test migration. DONE WHEN: tests, lint and type checks pass. Hit the 15-turn cap with two flaky tests failing; they get their own loop. Fix."

## Related adventures

- **Understanding AI Agents**: how agents work and how to write goals, if this is new to you.
- **Agent Teams and Orchestration**: when one loop needs a separate reviewer or parallel workers.
- **Token Smartness**: loops use many tokens; learn where they go.
