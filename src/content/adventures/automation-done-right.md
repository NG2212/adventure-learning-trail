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
effort: Moderate
outcome: Build something
pattern: SCHED
wave: W2
slot: 14
next: [your-own-chief-of-staff, the-daily-dispatch]
source: "Adapted from summer-challenge/labs/set-it-and-summer.md (one job you would open, unattended runs need defaults and never-dos, prove by hand before scheduling, scheduled runs start fresh, switch off what you stop opening, report-to-draft stretch) and summer-challenge/labs/daily-dispatch.md (filters beat more sources, empty-day rule, review before scheduling, live-tuning checklist); EnterpriseClaw/week-3/build/29-commercial-automation-setup.md (read-and-report first, test on different days and volumes, plan for failure before enabling, monthly review, common issues) and EnterpriseClaw/week-5/learn/41-advanced-automation-and-scheduling.md (pitfalls: silent failures, cost multiplication, drift, overlapping runs; a shared task board as the hand-off between automations). Your Own Chief of Staff is linked for the assistant build. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 14 [Inbar 22])
- Kept: the Set It and Summer discipline (narrow scope, self-contained unattended instructions, prove by hand, then schedule, check early runs, switch off what nobody opens); Daily Dispatch "filters beat more sources" and the empty-day rule (here: quiet run); EAL BUILD 29 read-and-report first, test on busy and quiet days and at the planned time, monthly keep-or-stop review; EAL LEARN 41 pitfalls (silent failure, drift, collisions, cost) and the shared task board as hand-off (Go further).
- Cut: per-tool capability tables and web-search-your-tool prompts, Lanes A/B/C, cost arithmetic and provider cost alerts (no prices), workflow platforms (n8n, Make, Zapier), fleet orchestration, Tier framework, local-machine scheduling.
- Added for Monday: Step 1 reviews the automations people already run (the design-notes framing: inefficient, unverified, low value) with a Keep / Fix / Stop verdict; six design decisions table with Monday examples; filters as the main token saver, with Kremer for narrow internal-data questions; a run report in the hand runs that exposes what the automation read and left unused; boards as trigger (status change), destination (update, new item) and approval gate (Go further hand-off).
- Distinct from Your Own Chief of Staff: that adventure builds a personal assistant; this one teaches the method for any automation and links there instead of repeating the assistant build.

Open items
- Keren Q6: is Cowork's scheduled-tasks feature enabled at Monday? Step 4 assumes yes.
- monday agents: confirm an agent takes instructions as its brief and can be run from a board automation (status change or recurring). Wording follows Your Own Chief of Staff and is provisional; the Go further hand-off depends on the same capability.
- Cowork scheduled tasks created by Claude reportedly default to automatic approval (Oct 2026); Step 4 tells people to match permissions to the approval line. Hands-on check pending.
- Unified Claude (chat + Cowork) reaches all orgs 10 Nov 2026; the "In Claude Cowork" lines may need a freshness sweep before W2 (23 Nov).
- Model choice per scheduled run (routine runs on Sonnet) left out until Keren Q3 confirms which models employees can pick.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# ⏰ Automation Done Right

**Design, test and monitor an automation so it starts at the right moment, reads only what it needs and produces something people act on.**

## Why this adventure

An automation is any AI job that runs without you starting it: a scheduled task in Claude Cowork, a monday agent that runs when a board changes, a weekly summary that lands in Slack.

Most people already run one or two. Many run too often, read far more than they use, and produce output nobody checks. Every run costs tokens, and an unchecked one can put wrong information on a board your team trusts.

Here you review what you already run, then design, test and switch on one automation properly, new or rebuilt, and keep a checklist for the next one. For a personal assistant that prepares your day, see Your Own Chief of Staff.

## The trail

1. **Review what you already run**, so you keep, fix or stop each automation on purpose.
2. **Design one automation on purpose**, because trigger, frequency and filters decide most of its value and cost.
3. **Prove it by hand**, because an automation runs while you are elsewhere, with nobody to answer its questions.
4. **Switch it on and watch it**, so you catch failures early and stop it when it stops paying off.

## Before you start

Have the monday boards, mail and Slack channels your automations read from available to connect.

## Step 1: Review what you already run

**Start without AI.** Close the chat. Write down every automation you run today: what starts it, how often, what it reads, where the result lands, and when someone last acted on it. If you run none yet, write down the two reports or updates you produce by hand most often.

**In Claude Cowork:** your scheduled tasks are listed under Scheduled.

**In monday agents:** list your agents, and open the Automations on each board you own.

### Prompt: Review my automations

**What this does:** checks each automation on your list for value, verification and efficiency, and gives it a verdict.

```
Help me review the AI automations I run: AI jobs that start without me, on a schedule or when something changes on a monday board, in mail or in Slack. I will paste or dictate my list. Ask only for what is missing, one automation at a time.

Check each one on three questions:
1. Value: when did someone last act on its output?
2. Verified: has anyone compared its output with the source in the last month?
3. Efficient: does it run more often, or read more, than the output needs?

Show a table: automation, value, verified, efficient, verdict (Keep, Fix or Stop), one line of reason.

Then recommend one automation to rebuild. If my list is empty or everything passes, propose a new one for work I repeat weekly, with its information on monday boards. Stop and wait for my choice.
```

Pause every automation marked Stop today; switching off what nobody uses is part of the skill. Keep the chat open for Step 2.

## Step 2: Design one automation on purpose

Six decisions shape every automation; most waste comes from the first three.

| Decision | Ask yourself | A good answer at Monday |
| --- | --- | --- |
| **Trigger** | What should start it: a time, a change on a board, or my request? | "When an item on the Escalations board moves to Stuck" |
| **Frequency** | How often does the source change, and how often do I act? | "Every Monday at 8:00, before the team sync" |
| **Inputs and filters** | What exactly must it read? | "Renewals board, Q4 group, items changed in the last 7 days, columns Status, Owner, Due date" |
| **Destination** | Where will the person who acts see it? | "An update on the board item" or "a new item on my Follow-ups board" |
| **Quiet run** | What should it say when nothing changed? | "One line: nothing new on the Renewals board" |
| **Approval line** | What may it do alone, and what must a person see first? | "Read, summarise and draft alone; anything that reaches a customer or changes a status waits for me" |

**Filters save the most tokens.** A connector pulls in everything you point it at: every column, every update, every thread. Name one board, one group, the columns that matter and a time window. For internal data, ask Kremer one narrow question, such as "renewal date and open support tickets for this account".

### Prompt: Design card for my automation

**What this does:** interviews you through the six decisions, then writes a design card and the instructions the automation will follow.

```
Help me design the AI automation I chose earlier in this chat (if it is missing, ask). Interview me one question at a time on six decisions:
1. Trigger: a time, a change on a monday board, or my request.
2. Frequency: as often as the source changes and I act on the output; challenge anything higher.
3. Inputs and filters: exact boards, groups, columns, time window, mail labels, channels. Push me to read less.
4. Destination: where the person who acts will see the output.
5. Quiet run: what it says when nothing changed.
6. Approval line: what it does alone (read, summarise, draft) and what it shows me first (messages, board changes).

If an answer is vague, ask for a recent example.

Write a design card with my six answers, then complete, self-contained instructions for an unattended run, since each run starts with no memory. Stop and wait for my approval.
```

## Step 3: Prove it by hand

Before any schedule or trigger, run the instructions yourself three times: on a busy day, a quiet day, and at the planned time. Do the last run in a new chat with only the instructions pasted in, because that is all the automation will see.

### Prompt: Dry run with a run report

**What this does:** runs the instructions once and reports what it read and what it would have done.

```
Run the automation instructions we approved in this chat once, now, exactly as written (if they are missing, ask me to paste them). Describe any action that needs my approval instead of doing it.

After the output, write a run report:
1. Sources: each board, group, thread and channel you read, with how many items or messages.
2. Filtered out: what the filters made you skip.
3. Unconfirmed: any line you could not confirm from a source, marked UNVERIFIED.
4. Actions: what you would have done, and which of those need my approval.
5. Unused: anything you read and then left out of the output.

Then ask me what to change, and write each fix into the instructions.
```

Give specific feedback: "it read all 400 items; only the Q4 group matters". The run report shows waste the output hides. It is ready when three runs in a row produce output you would act on as it is, from the sources on your design card only.

## Step 4: Switch it on and watch it

**In Claude Cowork:** ask Claude to schedule the instructions at the frequency on your design card, check that the task appears under Scheduled, and set its permissions to match your approval line.

**In monday agents:** paste the instructions as the agent's brief, give it access to the boards on your design card only, and run it from a board automation, for example when a status changes or every Monday.

Open the first three unattended runs and check: it ran on time, read the right sources, and someone acted on it. Then watch for these pitfalls:

| Pitfall | How can you tell? | What to do |
| --- | --- | --- |
| **Nobody reads it** | Two weeks with no action on the output | Pause it, or deliver where people already look |
| **It runs too often** | Most runs report nothing new | Lower the frequency, or use a board trigger |
| **It reads too much** | It pulls in sources outside the design card | Tighten the filters |
| **It fails silently** | The output stops arriving, or arrives empty | Check connector access; tell it to name any source it could not reach |
| **It acts beyond the approval line** | A board item changed or a message went out without you | Pause it, tighten its permissions |
| **It drifts** | A board was renamed, a group archived, or the need changed | Review it every month |

### Prompt: My automation checklist

**What this does:** turns your design card and hand-run lessons into a checklist for every future automation.

```
From this chat, write my one-page automation checklist, for building any future AI automation and for a monthly review of the ones I run. Sections:
1. Before building: the six design decisions (trigger, frequency, inputs and filters, destination, quiet run, approval line), one question each.
2. Before switching on: the hand-run checks and the run report (sources, filtered out, unconfirmed, actions, unused).
3. First week: what to check on the first three unattended runs.
4. Every month: Keep, Fix or Stop for each automation, judged on value, verification and efficiency.
Add the two lessons from my own hand runs I am most likely to forget.
```

Pin the checklist on your team's monday board or save it in your Claude project instructions, and set a monthly reminder to run the Review my automations prompt. You are done when an unattended run arrives and someone acts on it.

## Go further

**Move from report to draft.** Do this when the output always leads to the same next step, such as a customer follow-up. Ask the automation to prepare that step as a draft. The approval line stays: you send, and you change the status.

**Hand work between automations through a board.** Do this when one job feeds another. The first automation adds items to a board with the status "Ready for review". You check each item and set it to "Approved", and that status change triggers the second automation, for example one that drafts the customer follow-up. The board holds the hand-off and the approval line, visible to your team.

## Proof of work

In "what I built", name the automation you built or rebuilt, its trigger and frequency, and one thing the hand runs changed.

For example: "Rebuilt my renewals digest: weekly on Monday at 8:00, reads only At risk items changed in the last 7 days on the Renewals board. The run report showed it had been reading all 400 items every day."

## Related adventures

- **Your Own Chief of Staff**: a personal assistant with a scheduled job and an on-demand job, built with this method.
- **The Daily Dispatch**: a personal briefing on a topic you follow, on your own schedule.
- **Token Smartness**: learn where your tokens go and which habits save the most.
