---
slug: redesign-your-week-with-ai
emoji: ⚖️
icon: balance
title: "Redesign Your Week with AI"
walkaway: "A trusted map of everything you carry and a Stop / Start / Continue / Hand-off plan, with AI already working on one hand-off"
category: Lead with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: 1 hour
outcome: Work differently
pattern: AUD + INT
wave: W4
slot: 23
next: [use-case-discovery, your-own-chief-of-staff]
source: "Adapted from summer-challenge/labs/excess-baggage.md (first-pass Load Map, correct the map in two or three passes, Stop / Start / Continue / Hand-off with three hand-off destinations and the backlog-or-stop rule, enlist AI on the hand-offs, two ways in: conversation mirror vs observation + interview, honesty check, weekly check-in stretch). Never edit the original from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 23 [Inbar 30])
- Kept: the four Excess Baggage moves as the trail; the two ways in (conversation vs observation + interview) as a table; evidence tags said / observed / inferred; "believe my corrections, push back only as a hypothesis"; the Stop / Start / Continue / Hand-off portfolio with its pressure tests (starts outnumber stops, everything to AI, vague stops); "a backlog you never review is a stop"; the honesty check; the weekly check-in and run-the-other-path layers (now Go further).
- Cut: all fall / season / back-to-school framing (ships in January as a new-year reset; the hook names "the start of a year, a quarter or a new role, or any week that feels too full"); personal life load (work only); the Where To Next / Repack Your Bags / Set It and Summer bridges; the sub-agent observation split (length); the commitment dashboard image.
- Added for Monday: one line separating this from Use-Case Discovery; a precise reading list on monday boards, calendar, sent mail and Slack; the customer-boards rule worded per Nufar's 22 Oct clarification with Kremer as the path for Monday's own account data; a thinking step without AI before the decisions; the Week Plan lives on a monday board; managers' line (own plate here, team's shared work in Your Team's AI Blueprint; the plan describes work only).
- Renamed "Fall Commitments card" to "Week Plan".

Open items
- Google Calendar connector: the standing rules list Drive, Gmail, Slack and monday; the Cowork line in Step 1 also names Google Calendar (same open item as Chief of Staff). Confirm.
- Keren Q6 (Cowork scheduled tasks) affects the weekly check-in in Go further.
- Keren Q2 (how skills are added at Monday) if a hand-off becomes a skill in Step 4.
- Unified Claude (chat + Cowork) reaches all orgs 10 Nov 2026; this ships 4 Jan 2027, so sweep the "In Claude Cowork" lines before release.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# ⚖️ Redesign Your Week with AI

**Use AI as a critical eye on everything you carry, then decide what to stop, start, continue and hand off.**

## Why this adventure

A working week fills up by itself. Recurring meetings outlive their purpose, a weekly report keeps going out after its readers have moved on, and small promises pile up in Slack threads. Much of that load is habit.

In this adventure AI acts as an impartial coach. It maps what you actually carry, you correct the map until it is true, and then you decide what to stop, start, continue or hand off.

This adventure audits what you already carry; Use-Case Discovery finds new things to do with AI. Run it at the start of a year, a quarter or a new role, or in any week that feels too full.

## The trail

1. **Map what you carry**, so your decisions rest on your real week.
2. **Correct the map**, because the first map is always incomplete and often flattering.
3. **Decide what to stop, start, continue and hand off**, so the load gets lighter and the important work gets room.
4. **Enlist AI on the hand-offs**, because a plan changes your week only once the first hand-off is running.

## Before you start

If you built Your AI Identity or a Personal Brain, load it first; more context gives a sharper map. If you have never built a skill, start with **Skills: When, How and How Well**.

## Step 1: Map what you carry

Your Load Map covers everything that takes your time and attention: projects, recurring work, meetings, admin, learning, and open loops (promises and threads still waiting for you). Choose one of two ways in:

| Way in | What happens | Best when |
| --- | --- | --- |
| **Conversation** | The AI interviews you about a typical week | You want a focused coaching session from memory |
| **Observation** | The AI first reads the sources you name, then interviews you about what it found | You want evidence beyond memory |

Memory forgets small recurring tasks; files miss the work you never write down. Observation followed by an interview catches both.

**For observation:** give the AI an exact reading list, for example the last four weeks of your calendar, the monday boards where items are assigned to you, your sent mail, and the Slack channels where people ask you for things. Keep customer boards out: data that Monday's customers uploaded to their own monday boards never goes into Claude. Monday's own data about your accounts, through Kremer, is fine.

**In Claude Cowork:** create a project named Week Redesign, connect Google Calendar, Gmail, Slack, Drive and monday, and run the prompt there.

### Prompt: First Load Map

**What this does:** builds a first map of your load, with the source of each item.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Act as an impartial coach auditing my work load. This step produces a Load Map: everything that takes my time and attention. Make no decisions yet. Use what you already know about me; ask only for gaps.

First ask: conversation only, or observation (you read sources I name, then interview me)? For observation, read only my reading list and tell me what you opened.

Interview me one question at a time: a typical week, recurring work, projects that never close, meetings and whether they earn their place, open loops, what I postpone. If I answer vaguely, ask for a recent example.

Output the first Load Map:
1. Items grouped as projects, recurring work, meetings, admin, learning, open loops
2. Per item: what it is, why it exists, weight (high, medium, low), source (said, observed or inferred)
3. What you could not see
4. Where the map may flatter me

End by asking what is wrong, missing or unfair.
```

## Step 2: Correct the map

The first map is wrong somewhere: the AI misses context, invents structure, or takes your busyness at face value. Correct it with specific facts: "the Tuesday sync takes two hours with preparation, so weight it high", "you missed the onboarding I give every new joiner", "my team writes the release notes; I only review them".

### Prompt: Correct the Load Map

**What this does:** updates the map from your corrections, pass after pass, until you trust it.

Stay in the same chat, paste the prompt below, and add your corrections after it.

```
Here are my corrections to the Load Map: what is wrong, missing, too heavy, too light or biased. Update the map.

Rules:
- Believe my corrections about my own work. Push back only when I contradict myself or seem to avoid an obvious pattern, and say it as a question.
- Add the items I name; remove or shrink anything you invented.
- Keep the source of every item: said, observed or inferred.
- If I approve more sources, read them and report only what they contain.

Show the updated map, then ask whether it is true enough to decide from. Repeat until I say it is.
```

Most maps need two or three passes. You are ready for Step 3 when the map feels true, including the parts you would prefer not to see.

## Step 3: Decide what to stop, start, continue and hand off

**Think first, without AI.** Close the chat. Read the trusted Load Map from Step 2 and write down three things: one item you already know you want to stop, one item you would protect at any cost, and one thing you keep wishing you had time for. These are your instincts; the prompt tests them.

| Decision | What it means | Watch for |
| --- | --- | --- |
| **Stop** | You put it down and tell the people affected | A vague stop such as "fewer meetings" |
| **Continue** | It earns its place as it is | Items that continue only out of habit |
| **Start** | Something worth beginning, in the room a stop made | More starts than stops |
| **Hand off** | It moves to AI or to another person | Everything going to AI: name what you still own |

Parking an item for later is fine when you review your backlog on a fixed rhythm. An item you will never get to is a stop.

**Managers:** this audit is about your own plate. A hand-off to a team member is a conversation with that person, and the plan describes the work only.

### Prompt: Stop, Start, Continue, Hand off

**What this does:** coaches you from the trusted map to decisions and writes a one-page Week Plan.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Using my trusted Load Map in this chat, coach me to decisions. Prefer a realistic load to a heroic one. I will first share three instincts I wrote down: what to stop, protect, and make time for.

Interview me one group at a time:
- Stop: what I put down, specifically, and who needs to know
- Continue: what earns its place
- Start: one or two things, only where a stop made room
- Hand off: to AI (name the job in one line) or to a named person
- Later: parked on purpose, only if I review a backlog on a fixed rhythm; otherwise a stop

Push back if starts outnumber stops, if everything goes to AI, or if a stop is vague.

Then write my Week Plan on one page: up to three stops, three continues, two starts and two hand-offs, each with a first action and what done looks like in four weeks. Wait for my edits.
```

## Step 4: Enlist AI on the hand-offs

Start with the smallest AI hand-off: the one that would lighten next week.

### Prompt: Put the AI hand-offs to work

**What this does:** turns each AI hand-off in your Week Plan into a specific form of help with a first step.

Stay in the same chat and paste the prompt below.

```
Look at the AI hand-offs in my Week Plan. For each one, use what you know about me and my tools, and propose:
1. The form of help: a prompt I reuse, a skill, a scheduled job, a monday automation or agent, or a draft I review
2. What it reads and what it produces
3. What I still own and check
4. The first step I can take this week

Ask me which hand-off to start with, then help me set it up now. If we build a skill, remind me to close and reopen my AI tool so it finds the skill.

Finally, name the biggest risk that I ignore this plan, and one move that makes it easy to keep.
```

Put the Week Plan on a monday board you open every day: one item per decision, with a status and the date of each first action. You are done when one AI hand-off has run on real work.

## Go further

**Run the other way in.** Do this for more evidence: if you mapped by conversation, run observation on a short reading list, or the reverse, and add what is new to your Week Plan.

**Add a weekly check-in.** Do this so the plan stays alive after the first week.

**What this does:** a short Friday review of the Week Plan on your board.

Each Friday, open a new chat and paste the prompt below.

```
Check in on my Week Plan, which is on my monday board. Ask me three short questions: which stops held, which hand-off ran, and what crept back in. Then suggest one change for next week. If nothing moved, ask one question about what got in the way. Keep it brief.
```

**In Claude Cowork:** in the Week Redesign project, ask Claude to run this every Friday and check that it appears under Scheduled.

**Find new work for the room you made.** Do this once your stops have freed time. Paste your trusted Load Map into the first prompt of Use-Case Discovery; its suggestions will build on your real week.

## Proof of work

In "what I built", name your top stop, the AI hand-off you started, and one correction you made between the first map and the trusted map.

For example: "Stopped the Thursday status sync and handed the weekly renewals summary to a scheduled job on my Renewals board. The first map missed the two hours I spend each week answering partner questions in Slack."

## Related adventures

- **Use-Case Discovery**: find new work for AI once your plan has made room.
- **Your Own Chief of Staff**: hand your recurring preparation to an assistant that runs on a schedule.
- **Your Team's AI Blueprint**: for managers, the same critical eye on the team's shared work.
