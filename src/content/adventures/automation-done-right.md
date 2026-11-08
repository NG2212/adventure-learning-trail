---
slug: automation-done-right
emoji: ⏰
icon: clock
title: "Automation Done Right"
walkaway: "One automation built or rebuilt properly, and a checklist for every future one"
category: Automate and delegate
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Build something
pattern: SCHED
wave: W2
slot: 14
next: [your-own-chief-of-staff, the-daily-dispatch]
review: ready
video: /videos/automation-done-right.mp4
source: "Adapted from summer-challenge/labs/set-it-and-summer.md (one job you would open, unattended runs need defaults and never-dos, prove by hand before scheduling, scheduled runs start fresh, switch off what you stop opening) and summer-challenge/labs/daily-dispatch.md (filters beat more sources, empty-day rule, review before scheduling, live-tuning checklist); EnterpriseClaw/week-3/build/29-commercial-automation-setup.md (read-and-report first, test on different days and volumes, plan for failure before enabling, monthly review, common issues) and EnterpriseClaw/week-5/learn/41-advanced-automation-and-scheduling.md (pitfalls: silent failures, cost multiplication, drift, overlapping runs). Skill first, tested by hand, then automated: Nufar's method (8 Nov 2026 review). Go further uses Nufar's error-tolerance framework verbatim (guardrails as autopilot, human in the loop as co-pilot), worded as in silverfort/Champions/site/public/exercises/ex8-scoping-and-evaluation.md. Your Own Chief of Staff is linked for the assistant build; the Step 3 skill prompt adapts the Build a skill prompt from Skills: When, How and How Well; Use-Case Discovery for a broader search. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 14 [Inbar 22])
- Kept: the Set It and Summer discipline (narrow scope, self-contained unattended instructions, prove by hand, then schedule, check early runs, switch off what nobody opens); Daily Dispatch "filters beat more sources" and the empty-day rule (here: quiet run); EAL BUILD 29 read-and-report first, test on busy and quiet days and at the planned time, monthly keep-or-stop review; EAL LEARN 41 pitfalls (silent failure, drift, collisions, cost).
- Cut: per-tool capability tables and web-search-your-tool prompts, Lanes A/B/C, cost arithmetic and provider cost alerts (no prices), workflow platforms (n8n, Make, Zapier), fleet orchestration, Tier framework, local-machine scheduling.
- Added for Monday: a Keep / Fix / Stop verdict on what people already run; six design decisions table with Monday examples; filters as the main token saver, with Kremer for narrow internal-data questions; a run report in the hand runs that exposes what the automation read and left unused.
- Distinct from Your Own Chief of Staff: that adventure builds a personal assistant; this one teaches the method for any automation and links there instead of repeating the assistant build.

Open items
- Keren Q6: are scheduled tasks in Claude enabled at Monday? Step 4 assumes yes.
- monday agents: confirm an agent takes instructions as its brief and can be run from a board automation (status change or recurring). Wording follows Your Own Chief of Staff and is provisional.
- Scheduled tasks created by Claude reportedly default to automatic approval (Oct 2026); Step 4 tells people to match permissions to the approval line. Hands-on check pending.
- Can a Claude scheduled task and a monday agent run a skill by name? Steps 2 and 3 assume the automation runs the skill built in Step 2 (Claude: skills added under Customize → Skills; monday agents: Profile tab → skills). Hands-on check pending; if a tool cannot, the design-card prompt still writes complete self-contained instructions.
- Model choice per scheduled run (routine runs on Sonnet) left out until Keren Q3 confirms which models employees can pick.
- Prompt test in a fresh Claude chat: pending (playbook step 4), especially the audit prompt with a real scheduled task and the guardrails prompt on instructions that send messages.
23 Oct: do-this line on every prompt
Changed 2026-11-05: think-first opener per the 23 Oct rule; chat and Cowork treated as one surface.
Changed 2026-11-06: light pass for Nufar's review: American spelling; "Why this adventure" brought into line with the live video script (radio image stays video-only); monday workflows added to the opening definition and Steps 1 and 4, worded from monday.com's public pages (trigger, AI and agent blocks, approval checkpoints, run history). Exact in-product labels and the menu path are not hands-on checked. Prompt logic unchanged.
Changed 2026-11-08, from Nufar's first review (videos/automation-done-right/notes.md):
- Trail is now her four steps: review and audit what you run; select a use case; design it properly; test it by hand, then over time.
- Step 1: the AI-run review prompt is gone, because the AI cannot know who acted on an output, when it last ran, or whether anyone checked it. A yes/no self-check the person answers alone replaces it; any no marks the automation for audit, pick one or two. The new audit prompt asks which automation and what its challenge is, then suggests fitting improvements and ends with the Keep / Fix / Stop verdict (Stop = deactivate), so the video line stays true. People with no automations or scheduled tasks skip to Step 2. "Scheduled tasks" named alongside automations.
- Step 2 (new): three tests for a task that suits automation (repeats on a schedule or a change, no judgment call mid-run, output someone acts on) in a short verdict prompt; Use-Case Discovery for a broader search; skill first via the Skills adventure's Build a skill prompt (linked, not copied), tested by hand.
- Step 3: six decisions table kept (middle column now "What does it settle?", shorter Monday examples) and the design-card prompt kept; the design starts from the tested skill; narrow app lists replaced with "a change in a connected application" and generic sources in every prompt.
- Step 4: old Steps 3 and 4 merged: three hand runs with the run report (busy day, quiet day, planned time in a fresh chat), then switch on per tool, first three runs, pitfalls, checklist (now covers the three tests, skill first and the monthly self-check).
- Go further: both items (report to draft, hand-off through a board) replaced by guardrails and human in the loop, her framework verbatim, carried inside one prompt.
- Length: the new step and the Go further prompt pushed the first draft to 2,654 words; cut to 1,800 by compressing every prompt, putting the framework in the prompt only (no separate table), trimming the pitfalls table to three rows (nobody reads it, fails silently, acts beyond the approval line; "runs too often" and "drifts" are now covered by the monthly self-check), dropping "limit it to the boards on your design card" from the monday agents line, and dropping Token Smartness from Related adventures.
Judgment calls: the four self-check questions (acted on in the last two weeks, checked against the source this month, runs only as often as used, reads only what it needs) are drawn from the old review prompt's three tests; the audit stays inside Step 1 because her trail step 1 is "review/audit what you run"; Step 2 says an automation marked Fix is a good candidate, so a rebuild flows into Steps 2 to 4 and the video's "build one automation properly" holds for both paths; the use-case verdict has three outcomes (Automate it, Keep it on request, Something else); "Anything that sends, spends, deletes or speaks for me or my company gets a person in the loop" in the guardrails prompt is her rule from the Silverfort ex8 prompt; Before you start now carries the standard skill prerequisite line; the monday-workflow example in Why this adventure ("starts when a board changes") stays, because her note was about prompts and the line defines the tool. Self-review (first-time reader, swap, cold-start, busy-Tuesday) run by the writer; fresh-chat prompt test not run.
Changed 2026-11-08 (second review, approved): audit prompt question 2 is now her directive questions (used recurrently, accurate and how do I know, consistent, plus runs or reads more than needed) and question 3 asks for other changes not yet mentioned; "If you have no current automations, skip directly to Step 2"; Step 2 renamed "Select a use case for your next automation" with "If you already have a good idea, skip to Step 3"; the skill-first paragraph moved to the top of Step 3 so the skip keeps it. Length trims: Step 2 paste line, busy/quiet repetition in Step 4. 1,823 words by lint. Stamped Ready on her word.
Changed 2026-11-08: self-contained skill prompt replaces the pointer to another adventure (HARD RULE).
-->

# ⏰ Automation Done Right

**Choose, design and test an automation that starts at the right moment, reads only what it needs, and gets acted on.**

## Why this adventure

An automation is any AI job that runs without you starting it, for example a scheduled task in Claude, a monday agent, or a monday workflow that starts when a board changes.

Most people already run one or two. A weekly summary keeps arriving in Slack, and nobody acts on it. Every run costs tokens, and an unchecked one can put wrong information on a board your team trusts.

An automation runs while you are elsewhere, with nobody to answer its questions. So here you keep, fix or stop what you already run, then build one automation properly, and keep a checklist. You are done when a run arrives and someone acts on it.

## The trail

1. **Review and audit what you already run**, to keep, fix or stop each one on purpose.
2. **Select a use case for your next automation**, since only some tasks run well alone.
3. **Design it properly**, because trigger, frequency and filters decide its value and cost.
4. **Test it by hand, then over time**, to catch failures early.

## Before you start

If you have never built a skill, start with Skills: When, How and How Well.

## Step 1: Review and audit what you already run

Automations include Claude's scheduled tasks. If you have no current automations, skip directly to Step 2.

**In Claude:** your scheduled tasks are under Scheduled. **In monday agents:** check your agents and the Automations on boards you own. **In monday workflows:** open each workflow's run history.

Take a look at your existing automations and ask yourself the following, without AI:

- Did someone act on its output in the last two weeks?
- Has anyone checked its output against the source this month?
- Does it run only as often as its output is used?
- Does it read only what it needs?

If some or all answers are no, that automation needs an audit. Select one or two to audit below.

### Prompt: Audit and improve my automation

**What this does:** asks direct questions about one automation, then suggests fixes and a verdict.

Open a new chat in an AI tool and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me audit one of my AI automations: a job that runs without me starting it, on a schedule or when something changes in a connected application. Ask me one question at a time:
1. Which automation would you like to audit and improve? Ask me to paste its instructions.
2. Direct questions: To the best of my knowledge, is it being used recurrently? Is it accurate, and how do I know? Is it consistent from run to run? Does it run or read more than its output needs?
3. Are there other changes or things I want to improve that I haven't mentioned yet?

Then suggest two or three improvements that fit my answers, for example: deactivate it, run it less often, read less, or check its output against the source. End with a verdict: Keep, Fix or Stop. For Fix, rewrite the complete instructions with the improvements I choose.
```

Deactivate every automation you marked Stop.

## Step 2: Select a use case for your next automation

If you already have a good idea, skip to Step 3. An automation you marked Fix is a good candidate.

### Prompt: Does this task suit an automation?

**What this does:** checks your task on three tests, then gives a verdict.

Paste the prompt below in the chat from Step 1, or in a new chat. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me pick one task to automate with AI. Do not choose the task for me. If I have none in mind, suggest three from my work and let me pick.

Ask one question at a time about the task, then check three tests:
1. It repeats, on a schedule or when something changes in a connected application.
2. It needs no judgment call from me in the middle of a run.
3. Someone acts on its output.

Give a verdict with a one-line reason: Automate it, Keep it on request, or Something else that fits better.
```

For a broader search, do the Use-Case Discovery adventure.

## Step 3: Design it properly

**Build it as a skill first**, so the automation runs a tested skill.

### Prompt: Build a skill that can run on its own

**What this does:** the AI interviews you about the task you chose, then writes a complete skill built for runs where nobody is there to answer its questions.

Stay in the chat from Step 2, or open a new chat, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me build a skill for a task that will later run as an automation, with nobody there to answer questions: saved instructions an AI tool follows for one recurring task. Use the task I chose in this chat; if there is none, ask which task. Do not choose it for me, do not narrow it, and do not decide what good means. Ask me to brain dump how I do this task today first. If I already answered a question earlier in this chat, don't ask it again.

Then interview me one question at a time on what is missing. If an answer is vague, ask for a real example.
1. The inputs it needs on every run: exact sources, filters and time window.
2. The output: format, length, and who acts on it.
3. What it says when there is nothing to report.
4. What it does when a source is missing or empty.
5. The checks it runs on its own output before it finishes, for example every number traced to a source and nothing outside the time window.

Show a short brief and wait for my approval. Then check my tool's current documentation for its skill format, and tell me if you cannot. Write the complete skill in one block: a short name in lowercase with hyphens; a description of what it does and when to use it; steps that never wait for an answer from me; the output as a literal template, including the nothing-to-report line; the checks; and three test requests: a typical case, a case with nothing to report, and a missing source. Then tell me how to add it, and to close and reopen my tool afterwards.
```

Add the skill, then close and reopen your tool. **In Claude:** add it under Customize → Skills. Run it by hand on its three test requests and on real cases until you would act on its output as it is.

Six decisions shape how it runs.

| Decision | What does it settle? | A good answer at Monday |
| --- | --- | --- |
| **Trigger** | What starts it | "When an Escalations item moves to Stuck" |
| **Frequency** | How often it runs | "Every Tuesday at 8:00" |
| **Inputs and filters** | Exactly what it reads | "Renewals board, Q4 group, last 7 days" |
| **Destination** | Where the person who acts sees it | "An update on the board item" |
| **Quiet run** | What it says when nothing changed | "One line: nothing new on Renewals" |
| **Approval line** | What it does alone, and what a person sees first | "Drafts alone; anything for a customer waits for me" |

**Filters save the most tokens:** one source, the parts that matter, a time window. For internal data, ask Kremer one narrow question.

### Prompt: Design card for my automation

**What this does:** interviews you on the six decisions, then writes a design card and the automation's instructions.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me design an AI automation for the task I chose in this chat (if it is missing, ask). If I built a skill for it, the automation runs that skill. If I already answered a question earlier in this chat, don't ask it again. Interview me one question at a time on six decisions: trigger (a time, a change in a connected application, or my request); frequency (challenge anything more often than I act); inputs and filters (exact sources and a time window; push me to read less); destination; quiet run (what it says when nothing changed); approval line (what it does alone, what it shows me first).

Write a design card with my answers, then complete instructions for an unattended run, since each run starts with no memory of this chat. Wait for my approval.
```

## Step 4: Test it by hand, then over time

Before any schedule or trigger, run the instructions yourself three times: on a busy day, a quiet day, and at the planned time.

### Prompt: Dry run with a run report

**What this does:** runs the instructions once and reports what it read and would have done.

Do the planned-time run in a new chat with only the instructions and this prompt, because that is all the automation will see.

```
Run the approved automation instructions in this chat once, exactly as written (if they are missing, ask me to paste them). Describe any action that needs my approval instead of doing it.

Then write a run report: sources you read, with how many items; what the filters skipped; any line you could not confirm from a source, marked UNVERIFIED; what you would have done; anything you read and left out.

Ask what to change, and write each fix into the instructions.
```

It is ready when three runs in a row produce output you would act on as it is.

**Then switch it on.** **In Claude:** ask Claude to schedule it, with permissions that match your approval line. **In monday agents:** paste the instructions as the agent's brief, and run it from a board automation. **In monday workflows:** set the trigger, give the instructions to an AI or agent block, and add an approval checkpoint.

Check the first three unattended runs: on time, right sources, acted on. Then watch for these pitfalls:

| Pitfall | How can you tell? | What to do |
| --- | --- | --- |
| **Nobody reads it** | Two weeks with no action on it | Pause it, or deliver where people look |
| **It fails silently** | The output stops arriving, or arrives empty | Check connector access |
| **It acts beyond the approval line** | Something changed or went out without you | Pause it, tighten its permissions |

### Prompt: My automation checklist

**What this does:** turns this adventure into a checklist for every future automation.

Paste the prompt below in the chat where you designed the automation.

```
From this chat, write my one-page checklist for future AI automations and a monthly review of the ones I run: choosing the task (the three tests, then a skill tested by hand); the six design decisions; three hand runs and the run report; the first three unattended runs; every month, four yes/no questions per automation (acted on, checked against the source, runs only as often as used, reads only what it needs), where any no means an audit ending in Keep, Fix or Stop. Add the two lessons from my hand runs I am most likely to forget.
```

Pin the checklist on your team's monday board, and set a monthly reminder for the Step 1 self-check. You are done when an unattended run arrives and someone acts on it.

## Go further

**Add guardrails and human-in-the-loop steps.** Do this when your automation changes shared work or reaches people.

### Prompt: Guardrails and human in the loop

**What this does:** adds a guardrail or an intervention point to each action your automation takes.

Paste the prompt below in the chat where you designed the automation. Answer its questions in writing, or by voice if your tool has dictation.

```
Add guardrails and human-in-the-loop steps to the AI automation in this chat (if its instructions are missing, ask me to paste them). Two options:
- Guardrails (autopilot): it runs alone within limits, such as max iterations, moderation, forbidden behaviors and cost limits.
- Human in the loop (co-pilot): it stops for me at intervention points, such as specific tool calls, specific user behavior, a failure to perform the task, or an out-of-scope scenario. Safest for high-stakes tasks.

For each action the instructions allow, one at a time, ask me how much error I can tolerate, then propose a guardrail or an intervention point. Anything that sends, spends, deletes or speaks for me or my company gets a person in the loop. Show the complete updated instructions.
```

Update the automation, then do one hand run.

## Proof of work

In "what I built", name the automation you built or rebuilt, its trigger and frequency, and one thing the hand runs changed.

For example: "Rebuilt my renewals digest: weekly, At risk items only. The run report showed it was reading all 400 items."

## Related adventures

- **Your Own Chief of Staff**: a personal assistant with a scheduled job.
- **The Daily Dispatch**: a scheduled personal briefing.
