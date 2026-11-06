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
source: "Adapted from summer-challenge/labs/the-loop.md (three ingredients, Goal Card anatomy, sandbox first, turn caps, the four failure modes, /goal vs /loop per tool, five-line debrief, verification stretch) and the Agentic Loops for Knowledge Workers webinar, Aug 2026 (supertraining/from-loops-to-org-charts/: reference-card.md gate and failure modes, lab-handout.md design interview and judge-the-card checks, giveaways/goal-designer.md DONE WHEN rules and stall rule, research/loop-tooling-brief.md verified command mechanics). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 25 [Inbar 25])
- Kept: the three ingredients (checkable finish line, bounded sandbox, convergent task) as the Step 1 fit table; the Goal Card fields with DONE WHEN as machine-checkable only and taste moved to QUALITY; the stall rule (3 turns with no progress → stop and report) and "blocked → ask"; the cycle log line; sandbox first; caps inside the goal text; the four failure modes (runaway spend, stuck loop, done but weak, wrong surface); "more turns rarely fix a weak finish line"; the five-line debrief; the fresh-context checker; the goal-designer skill; the opposite-domain layer.
- Cut: graph / org-chart material (Agent Teams and Orchestration owns it), Cowork and ChatGPT Work paths (this adventure is labelled for agentic coding tools), the model-choice paragraph (the standard model sentence covers it), the marketing-campaign story, the per-tool table (replaced by conditional callouts).
- Added for Monday: assignments by role (engineering, product, customer facing, marketing) with checkable finish lines; inputs copied into the sandbox, incl. a monday board export and internal data through Kremer; the customer-boards rule worded as Nufar clarified; the human publishes to the board or pull request after review; the goal card saved as a reusable file (the "template for the next one" promised to Inbar); the verification prompt runs in a fresh session so the checker did not write the work.
- Commands written conditionally, and the design prompt tells the tool to check its own current documentation before writing the command.

Open items
- Keren Q4: who has Claude Code, Cursor and Codex at Monday, and how people get access.
- Command facts as of Aug 2026 (loop-tooling brief): Claude Code /goal with a small evaluator model, cap inside the condition text, /goal clear, /loop = interval; Cursor /goal and /loop since its 19 Aug 2026 release; Codex /goal with pause / resume / clear. Hands-on check per tool before W4 (4 Jan 2027); the callouts are the only lines a freshness sweep edits.
- Permission settings for "edit inside this folder only" are written generically per tool; confirm Monday's managed settings allow it.
- Skill location in Cursor (.cursor/skills/) taken from the webinar giveaway; the Go further line asks the tool instead of naming the folder.
- Labels: the seed lists "Advanced users" as a profession, which is outside the label set; used [Everyone, Engineering] with level Advanced. Nufar to decide.
- next: agent-teams-and-orchestration is provisional until that file exists.
- Prompt test in a fresh Claude Code session: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 🔁 The Loop

**Hand an agent a multi-step assignment with a clear definition of done and a cap, and verify what comes back.**

## Why this adventure

An **agentic loop** is an agent that keeps working on one goal, turn after turn: it plans, acts, checks its work and adjusts, until a finish line you defined is met or a cap stops it. Claude Code, Cursor and Codex have goal commands for exactly this.

Set up well, a loop returns finished, checked work. Set up loosely, it burns tokens, repeats one mistake, or declares victory on weak work. This adventure teaches the design: the right task, a sharp definition of done, a sandbox and a cap.

## The trail

1. **Pick an assignment that fits a loop**, because a loop pays off only when "done" can be checked.
2. **Write the goal card**, because the command is one line and the card is the real work.
3. **Run it in a sandbox with a cap**, so mistakes stay cheap and the cost stays bounded.
4. **Verify the result and keep the card**, because the loop's own "done" is where your review starts.

## Before you start

You need Claude Code, Cursor or Codex, and a scratch folder or a new branch where mistakes are cheap.

## Step 1: Pick an assignment that fits a loop

**Think first, without AI.** Write down three multi-step tasks from the last month, each with one line on how you would check it is finished.

A good loop passes all three questions below; for other tasks, use a normal agent session.

| Question | Good fit | Poor fit |
| --- | --- | --- |
| **Can a script or a count confirm it is done?** | Tests pass; 25 data points, each with a source | "Clear", "insightful" |
| **Is the work space bounded?** | One folder, one branch | Shared drives, live systems |
| **Does each pass get closer to done?** | Failing tests fixed one by one | The tone rewritten again and again |

Assignments that fit at Monday:

| Role | Assignment | Done when |
| --- | --- | --- |
| Engineering | Move one package's tests to the new framework | All tests pass, lint is clean, only files in that package changed |
| Product | Release notes for a feature from its merged pull requests | Every pull request appears once with its link; under 400 words |
| Customer Facing | A QBR data pack for one account, from internal data through Kremer | Every number has its source; six named sections |
| Marketing | A scan of work-management competitors | 25 data points, each with a link and a date from this year |

Work where your judgment is the product, such as a strategy memo, stays with you. Pick one assignment.

## Step 2: Write the goal card

A **goal card** is a one-page brief the loop works from, saved as a file in your sandbox so the loop can reread it on every turn. Here is one for release notes:

| Field | Example |
| --- | --- |
| **OBJECTIVE** | Release notes for the automations feature, for customer success managers |
| **OUTPUT** | `release-notes.md` with sections New, Improved, Fixed |
| **DONE WHEN** | Every pull request in `prs.csv` appears once with its link; under 400 words; no internal ticket numbers |
| **QUALITY** | Customer language; one benefit per line |
| **CONTEXT** | `prs.csv`, copied into the sandbox |
| **CONSTRAINTS** | Write only inside the sandbox; log one line per cycle |
| **CAPS** | 12 turns; 3 turns with no progress means stop and report; blocked means ask |

**DONE WHEN is the heart of the card:** the loop stops when these checks pass, so a script or a count must be able to confirm each line. Your taste goes into QUALITY.

Copy the inputs into the sandbox first, for example an export of your team's monday board or internal data through Kremer. Data that Monday's customers uploaded to their own monday boards stays out of Claude.

### Prompt: Design the goal card

**What this does:** the AI interviews you about the assignment you picked in Step 1, challenges any finish line that needs your taste, saves the card and writes the exact command for your tool.

Open Claude Code, Cursor or Codex in your sandbox folder and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me design a goal card for an agentic loop: an agent that works on one goal, turn after turn, until a finish line is met or a cap stops it. Design only; start no work yet.

I will paste my task and how I would check it is finished. Use what you know about me and this project; ask one question at a time about gaps.

A goal card has these fields:
- OBJECTIVE: what and for whom, one line
- OUTPUT: a file path inside my sandbox folder, with sections
- DONE WHEN: only checks a script or a count could confirm (tests, counts, named sections, a source link per claim, length)
- QUALITY: the bar that guides the work
- CONTEXT: the minimum inputs, already in the sandbox
- CONSTRAINTS: write only inside the sandbox; log one line per cycle: checked what, pass or fail
- CAPS: a turn cap (8 to 15); stop and report after 3 turns with no progress; stop and ask when blocked

Challenge any DONE WHEN line that needs my judgment and offer a checkable version. If the task lacks a checkable finish line, a bounded sandbox or progress per pass, say "do not loop this" and give me a single-prompt version.

Show the card and wait for my approval. Then save it as goal-card.md in the sandbox, check your current official documentation for this tool's goal command, and write the exact command, with the cap inside it.
```

Before you approve, read each DONE WHEN line and ask: could a script check this without me?

## Step 3: Run it in a sandbox with a cap

Open a new session in the sandbox folder, so the loop starts from the card alone. Ask it to read `goal-card.md`, then start the loop with the command from Step 2. Allow edits in this folder only.

Command names change between versions:

**In Claude Code:** if your version has `/goal`, type it with the DONE WHEN lines and the cap, for example "… or stop after 12 turns". A small, fast model checks the condition after every turn; `/goal clear` stops it. `/loop` repeats a prompt on a timer, which suits monitoring.

**In Cursor:** recent versions have `/goal`. If yours has only `/loop`, write "/loop work on goal-card.md until every DONE WHEN line passes; stop after 12 passes". A local loop stops when you close Cursor.

**In Codex:** if your version has `/goal`, use it the same way, with the cap in the goal text.

Watch the first two or three turns. Step in when it asks, repeats itself or works outside the sandbox; otherwise, let it work.

| What goes wrong | How can you tell? | What to do |
| --- | --- | --- |
| **Runaway spend** | Turns keep going; each one rereads more | A cap in every goal |
| **Stuck loop** | The same edit again; "almost done" again and again | Stop it; sharpen DONE WHEN |
| **Done but weak** | Checks pass; the output is shallow or games the count | Add a check to the card; more turns rarely fix a weak finish line |
| **Wrong surface** | Files change outside the sandbox | Stop it; restore from the branch or copy |

## Step 4: Verify the result and keep the card

When the loop stops, the verdict is yours. Note how it stopped: finish line met, cap reached, or stalled.

### Prompt: Check the result against the goal card

**What this does:** a fresh session checks every DONE WHEN line with evidence, then helps you debrief and update the card.

Open a new session in the sandbox folder, so a fresh agent checks the work, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Read goal-card.md and the output file it names. You are checking work you did not write.

1. For every DONE WHEN line, run the check yourself (count, run the tests, open each link) and report pass or fail with evidence.
2. For every QUALITY line, quote the weakest example in the output.
Report only; change nothing.

Then ask what I noticed myself, and help me write a five-line debrief: what it produced; what the finish line forced that a single pass would skip; what it missed (card fix or wrong task); turns used, from the cycle log; keep, fix or stop using this loop.

Finally, update goal-card.md with my fixes, and save a copy named after this kind of task, for example goal-release-notes.md, for the next run.
```

Read the output yourself, as its reader would. When it passes every check and still misses the point, fix the card and rerun. After your review, publish the result yourself: post it to the monday board or open the pull request.

You are done when your own check passes every DONE WHEN line and the card for the next run is saved.

## Go further

**Add a separate checker.** Do this when the loop approves its own weak work. Ask your tool for a reviewer sub-agent that reads only `goal-card.md` and the output and returns pass or fail per DONE WHEN line. Then add to the goal: "continue until the reviewer passes every line".

**Make goal design a skill.** Do this when you run loops often, so each one starts from a sharp card. Ask your tool: "Turn the Design the goal card prompt into a skill named goal-designer. Ask me when it should run, then show it to me for approval." In Claude Code, skills live in `.claude/skills/`, a hidden folder (Mac: `Cmd+Shift+.` in Finder; Windows: View → Show → Hidden items). Close and reopen the tool so it finds the skill.

## Proof of work

In "what I built", name the assignment, your best DONE WHEN line, how the loop stopped, and keep, fix or stop.

For example: "Release notes from 34 pull requests. DONE WHEN: every pull request appears once with its link. Stopped at turn 7 of 12; two items were grouped wrongly, so I added a check. Keep."

## Related adventures

- **Understanding AI Agents**: how agents work and how to write goals, if this is new to you.
- **Agent Teams and Orchestration**: when one loop needs a separate reviewer or parallel workers.
- **Token Smartness**: loops use many tokens; learn where they go.
