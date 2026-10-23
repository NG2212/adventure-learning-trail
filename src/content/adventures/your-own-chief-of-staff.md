---
slug: your-own-chief-of-staff
emoji: 🗓️
icon: calendar
title: "Your Own Chief of Staff"
walkaway: "A personal assistant that knows your context and your tools, running one scheduled job and one on-demand job for you"
category: Automate and delegate
levels: [Intermediate, Advanced]
professions: [Everyone, Customer Facing]
audience: [Managers]
tool: Any AI tool
effort: Ambitious
outcome: Build something
pattern: INT + SCHED
wave: W1
slot: 19
next: [automation-done-right, the-daily-dispatch]
source: "Adapted from summer-challenge/labs/set-it-and-summer.md and summer-challenge/labs/daily-dispatch.md (prove by hand, then schedule; scheduled runs start fresh; pause what you stop reading); catch-up-may/content/week-3/project-9-operations-personal-assistance.md (morning briefing, meeting prep, read-only first) and catch-up-may/content/week-4/project-11-chief-of-staff-agent.md (task interview, autonomy boundaries). Catch-Up cross-references and tool menus dropped. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 19 [Inbar 21])
- Kept: the Set It and Summer discipline (prove by hand, fix until you would read it, schedule, check the first unattended run, pause what you stop reading); "scheduled runs start fresh"; P9 morning briefing and meeting prep jobs; P9 "read-only first"; P11 task interview and autonomy question, recast as the approval line.
- Cut: all Catch-Up worker / fleet / Dream Team cross-references, per-tool scheduling tables, Path A / Path B, Sarah Chen, watch list, memory, email triage.
- Added for Monday: boards as source and destination, Kremer for CRM and internal data, Cowork and monday agents as two unranked install paths, Customer Facing account research and manager status pull in Go further (team level only).
- Morning briefing and meeting prep are the worked example; Prompts 2-4 stay generic enough for any two jobs the reader picks.

Open items
- Keren Q6: is Cowork's scheduled-tasks feature enabled at Monday? Step 4 assumes yes.
- Google Calendar connector: the standing rules list Drive, Gmail, Slack and monday; the Cowork install line also names Google Calendar because the morning briefing needs it. Confirm.
- monday agents: confirm an agent takes a brief/instructions field and can be run from a recurring board automation. Wording is provisional.
- Unified Claude (chat + Cowork) reaches all orgs 10 Nov 2026, the day after launch; the "In Claude Cowork" lines may need a freshness sweep.
- Cowork scheduled tasks created by Claude reportedly default to automatic approval (Oct 2026); Step 4 tells people to match permissions to the approval boundary. Hands-on check pending.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
- 23 Oct: do-this line on every prompt
-->

# 🗓️ Your Own Chief of Staff

**Build a personal assistant that knows your work and your tools, and runs one job on a schedule and one job when you ask.**

## Why this adventure

Much of a busy week is the same preparation again and again: checking what changed on your boards, rereading the last thread before a customer call, collecting a status for your manager. A chief of staff does that preparation, so you walk into each meeting ready.

In this adventure you design that assistant around the tasks you repeat, give it your context and tools, prove one job by hand, then put it on a schedule.

Already have such an assistant? The Step 1 prompt builds on its instructions.

## The trail

1. **Decide what your chief of staff should do**, so it works on the tasks that cost you the most time.
2. **Give it your context and your tools**, so its output is about your work.
3. **Run one job by hand until it is right**, because a scheduled job runs while you are elsewhere.
4. **Put it on a schedule and add an on-demand job**, so the preparation is ready before you ask.

## Before you start

Have your calendar, mail and the monday boards you work from available to connect.

## Step 1: Decide what your chief of staff should do

Start from your week. A good job passes three checks:

| Ask yourself | A good job for a chief of staff |
| --- | --- |
| How often does it repeat? | Every day, every week, or before every meeting of one kind |
| Where does the information live? | Places the AI can read: monday boards, mail, calendar, Drive, Slack, or internal data through Kremer |
| What happens if it is wrong? | You see the mistake before anyone else does |

Typical jobs at Monday: a morning briefing on your boards, preparation before a QBR or a renewal call, a weekly status from a team board, a summary of release updates.

### Prompt: Three jobs for your chief of staff

**What this does:** the AI interviews you about your week, proposes three jobs and helps you pick two.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me design a personal chief of staff: an AI tool that does my recurring preparation work. Use what you know about me; ask only for what is missing, one question at a time. If I already have such an assistant, ask me to paste its instructions and build on them.

Ask about my week: the meetings I prepare for, the information I gather again and again, the accounts or projects I track, the updates I write, what I already automate, and where a mistake would be costly. If I answer vaguely, ask for a recent example.

Then propose three jobs. For each job give:
1. Inputs: which monday boards, mail, calendar and documents it reads
2. Output: what it produces
3. Cadence: scheduled (when) or on demand
4. Approval line: what it may do alone, and what it must show me first

Help me pick one scheduled job and one on-demand job. Stop and wait.
```

Many people pick a morning briefing (scheduled) and meeting prep (on demand); this page uses those two as the example.

## Step 2: Give it your context and your tools

Your chief of staff is as good as what it can see. Give it three kinds of context: who you are (your AI Identity, if you built one in the Your AI Identity adventure), where your work lives (the monday boards, Drive folders and Slack channels it may read), and internal data such as account history, through Kremer. Connect your tools so it reads each source itself.

### Prompt: Standing instructions

**What this does:** turns the two jobs you picked in Step 1 into the standing instructions your chief of staff follows every time it runs.

Stay in the same chat and paste the prompt below.

```
Write standing instructions for my chief of staff, based on the two jobs I picked earlier in this chat. If they are missing, ask for them.

Include these sections:
1. Role: who I am and what this assistant does for me.
2. Sources: which monday boards, mail, calendar, Drive folders and Slack channels it reads, and in what order.
3. Output for each job. For a morning briefing: what changed on my boards since the last working day, today's meetings with one line of preparation each, and what needs my decision. For meeting prep: who is attending, what we last agreed, open items from the board, and three questions to ask. For any other job, propose a format of similar length.
4. Approval boundary: the approval lines we agreed, as two lists: what it may do alone (read, summarise, draft) and what it must show me first (send a message, change a board item).
5. Missing sources: name the source it could not reach and continue.

Keep it to one page. Ask me to approve it.
```

**In Claude Cowork:** create a project named Chief of Staff, paste the standing instructions into its instructions, and connect Drive, Gmail, Google Calendar, Slack and monday.

**In monday agents:** create an agent, paste the same standing instructions as its brief, and give it access to the boards it reads.

## Step 3: Run one job by hand until it is right

A scheduled job runs alone, so prove it by hand first.

### Prompt: Run the scheduled job now

**What this does:** runs your scheduled job once, now, with the source of each line.

Open a new chat in the chief of staff from Step 2, so it uses the standing instructions, and paste the prompt below.

```
Run my scheduled job now, for today, exactly as your standing instructions describe. After the output, list the sources you used: each board, mail thread, calendar entry and document. Mark any line you could not confirm from a source as UNVERIFIED. Then ask me what to change.
```

Read the output as you would on a busy morning. When something is off, say exactly what: "the renewal on my Renewals board is missing", "one line per meeting, please; I got a paragraph", "you listed a meeting I already declined".

Ask it to write every fix into the standing instructions. Scheduled runs start fresh and remember only those instructions. Run the job again on a second day. You are ready to schedule when you would read the output every morning as it is.

## Step 4: Put it on a schedule and add an on-demand job

Schedule the job for the moment you would read it, for example before your morning meetings start.

**In Claude Cowork:** in the Chief of Staff project, ask Claude to run the scheduled job every weekday at that time, check that it appears under Scheduled, and set its permissions to match the approval boundary in your standing instructions.

**In monday agents:** run the agent from a recurring automation on your board. A daily calendar reminder to run the job yourself also works, in any AI tool.

### Prompt: Prep me for my next meeting

**What this does:** prepares you for one meeting from the board and your last conversation with the attendees.

Stay in the same chat and paste the prompt below.

```
Prep me for my next meeting, using the meeting prep format in your standing instructions. First show me my next three meetings from my calendar and ask which one. Use the related monday board and the last email or Slack thread with the attendees. List the sources you used, and mark anything you could not confirm as UNVERIFIED.
```

If you picked a different on-demand job, ask for it by name in the same way.

The next morning, open the first unattended run. Check three things: it ran on time, it read the right sources, and you would act on it. Put any fix into the standing instructions; if you stop reading it, pause it. You are done when an unattended run arrives and you act on it.

## Go further

**Research an account before a call.** Do this before a renewal, QBR or escalation call, when the context is spread across a board, the CRM and your mail.

**What this does:** collects one account's context into a one-page brief.

Stay in the same chat and paste the prompt below.

```
Research one account before my call. Ask me which account and what the call is for.

Read the account's items on my monday boards, its CRM history through Kremer, and my recent mail and Slack threads about it. Then write a one-page brief:
1. The account in three lines: what they use, renewal date, main contact
2. What changed since our last conversation
3. Risks, each with its source
4. Three questions to ask on the call

Mark anything you could not confirm as UNVERIFIED. If a source is unavailable, name it and continue.
```

Once it proves useful, add it to your standing instructions.

**Pull a weekly status from your team board.** Do this when you write the same weekly update from your team's board.

**What this does:** drafts a weekly status from what changed on one board.

Stay in the same chat and paste the prompt below.

```
Write my weekly team status from my team's monday board. Ask me which board and who reads the update.

Read the items that changed this week and report on the work at team level:
1. The most important progress, in three lines
2. At risk: items that are late or stuck, with owner and due date
3. Decisions I need to make or ask for

Keep only what the reader needs to act on. Show me the draft; I will send it myself.
```

**Add a second scheduled job with a filter.** Do this when another job repeats, such as a Friday summary of release updates. A filter keeps each run focused and saves tokens.

In the job's instructions, name exactly what it reads: one board, one group, items changed in the last seven days, or mail with one label. Prove it by hand twice, as in Step 3, then schedule it.

## Proof of work

In "what I built", name your scheduled job and your on-demand job, and one thing the first unattended run got right or wrong.

For example: "Morning briefing from my Renewals and QBR boards, plus meeting prep on demand. The first unattended run flagged a renewal I had missed, and listed a meeting I had declined."

## Related adventures

- **Automation Done Right**: design, run and monitor any automation properly.
- **The Daily Dispatch**: a personal briefing on a topic you follow, on your own schedule.
