---
slug: managing-with-ai
emoji: 👥
icon: people
title: "Managing with AI"
walkaway: "Two or three managerial routines running with AI, chosen by you, with clear rules for information about people"
category: Lead with AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: Moderate
outcome: Work differently
pattern: INT
wave: W1
slot: 20
next: [your-team-s-ai-blueprint, hard-conversations]
source: "Adapted from monday-client/monday-managers-training/: Session 2 Exercise 2 (skill menu: weekly planning, status report, 1:1 agenda builder, feedback draft, Kremer data check-in; 'never invent' gotchas), Session 2 Exercise 1 and speaker notes (sensitive-content rule for performance and salary documents), Session 3 Exercise 1 (interview about where the time goes, filter, connector-first), Session 4 Exercise 2 Option A (one managerial routine recommended from the manager's own situation, then built). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 20 [Inbar 28])
- Kept: the Session 2 skill menu as the five starter routines (planning, team status, 1:1 prep, feedback draft, record of work); "never invent facts about a person" from the skill gotchas; the Session 2 rule for performance and salary documents, sharpened into the people-data table; the Session 3 interview ("where does your time go", ask for a recent example); Session 4 Option A's move of recommending routines from the manager's own situation; Kremer for team metrics.
- Cut: the whole workshop arc (My AI-OS project, identity paste, blueprint skill, Frontier brief, Team OS); Session 4 Exercise 1's per-person AI-adoption landscape and champion pick (Monday has its own usage dashboard and champion definition; team-level rule); the "team pulse diagnostic" per-person readout; all time boxes.
- Added for Monday: a thinking step without AI (list your managerial month first); a people-data step with one private workspace, the "write it as if the person will read it" rule, no scoring or ranking of people, HR business partner as the path when unsure; Monday's one hard rule (no customer data) from the Claude-at-Monday slide; boards as source and destination; the monthly routine review.
- Distinct from Your Own Chief of Staff (personal preparation, morning briefing, meeting prep): this adventure covers the people-and-team side of managing. Team-level AI adoption belongs to Your Team's AI Blueprint.

Open items
- People-data norms: the page cites only the confirmed Claude policy rule (no customer data) and points to Monday's HR guidelines and the HR business partner. Confirm with Inbar or Keren whether Monday has a written rule for manager notes about employees in Claude, and whether 1:1 notes in a private Cowork project are acceptable.
- Inbar's comment on the list (11 Oct): Monday Talent has an internal AI Coach for managers, and she wants to connect to it rather than create another one. Decide whether 1:1 prep and feedback should point to that coach.
- Keren Q6 (Cowork scheduled tasks): Step 4 schedules the team status. The managers training scheduled tasks at Monday in April 2026, so likely yes.
- Keren Q2 (how skills are added at Monday): affects the Customize → Skills line in Step 4.
- Unified Claude (chat + Cowork) reaches all orgs 10 Nov 2026; the "In Claude Cowork" lines may need a freshness sweep.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 👥 Managing with AI

**Choose the managerial tasks where AI helps you most, and build two or three routines that run on your team's real work.**

## Why this adventure

Much of managing is repeated preparation: planning the week, writing the team status, getting ready for each 1:1, finding words for feedback, and remembering at review time what each person did all year. AI can prepare most of this from your monday boards, your calendar and your own notes, so your time goes to your people and your decisions.

In this adventure you choose where AI helps you most, set clear rules for information about people, and build two or three routines: managerial tasks you repeat, each with a fixed moment, fixed sources and a fixed output. Already have routines like these? The Step 1 prompt builds on them.

## The trail

1. **Choose what AI should help you manage**, so your routines go to the tasks that cost you the most.
2. **Set the rules for people data**, because some routines touch information about your team members.
3. **Build each routine and run it on real work**, so you fix it before you rely on it.
4. **Make the routines part of your week**, so the preparation is ready when you need it.

## Before you start

Know which monday boards your team works from; your routines will read them.

## Step 1: Choose what AI should help you manage

**Think first, without AI.** Close the chat. On paper or in a note, list what you do as a manager in a normal month: the meetings you run, the updates you write, the conversations you prepare for, and what you keep postponing. Mark the two tasks that cost you the most, and the one you would like to do better.

Five routines most managers start with:

| Routine | What AI prepares | What stays yours |
| --- | --- | --- |
| **Planning** | A weekly or sprint plan from the team board, your calendar and team goals | Choosing priorities and what to say no to |
| **Team status** | An update from what changed on your team's boards, with team metrics through Kremer | What you tell leadership, and how |
| **1:1 preparation** | An agenda from the person's board items and what you agreed last time | The conversation itself |
| **Feedback** | A draft from your own notes: what happened, its effect, what to keep or change | The judgment, and the words you say |
| **Record of work** | A dated record of each person's deliveries and growth | Every conclusion about a person |

At Monday, this could be a CS team lead's weekly status from the renewals board or a product lead's sprint plan.

### Prompt: Choose your managerial routines

**What this does:** the AI interviews you about your list, proposes up to five routines, and helps you pick two or three.

```
Help me choose two or three managerial routines to run with AI. A routine is a task I repeat as a manager, with a fixed trigger, sources and output: for example weekly planning, a team status from our monday boards, 1:1 preparation, feedback drafts, or a dated record of each person's work.

Use what you know about me; ask only for what is missing. I will paste or dictate the list I wrote of my managerial month, and any AI routines I already use. Ask one question at a time. If I answer vaguely, ask for a recent example.

Then propose up to five routines in a table:
1. Trigger: a schedule or an event, such as "the day before every 1:1"
2. Sources: boards, calendar, mail, Slack or my notes
3. Output: what it produces, and how long
4. What stays mine: the decision or conversation AI only prepares

Leave out any routine that scores, ranks or compares people. Help me pick two or three. Stop and wait.
```

Keep the chat open for the next prompt.

## Step 2: Set the rules for people data

Decide your rules for information about people before the first run, and write them where your AI reads them. Monday's Claude policy has one hard rule: nothing that Monday's customers uploaded to their own boards ever goes into Claude. Monday's own data about customers and accounts (Salesforce, Kremer) is fine. For people data, follow Monday's HR guidelines, and ask your HR business partner when you are unsure.

| Question | Your rule |
| --- | --- |
| **What can go in?** | Facts about work: board items, deliveries, what you agreed in a 1:1, feedback you gave |
| **What stays out?** | Health, family and personal life, compensation, HR cases, private conversations, guesses about personality |
| **How do I write a note about a person?** | As if that person will read it: dated, factual, about the work and its effect |
| **Who decides?** | You. AI prepares agendas and drafts; it never scores, ranks or compares people |
| **Where do notes about people live?** | In one private workspace that only you can see. Team boards and shared projects hold team-level work only |

### Prompt: Your managing workspace

**What this does:** writes standing instructions for a private workspace: your routines, sources and people-data rules.

```
Write standing instructions for my private managing workspace, where my AI helps me plan, track my team's work, prepare 1:1s and draft feedback. Use the routines I picked earlier in this chat; if they are missing, ask me.

Include these sections, one page in total:
1. Role: who I am, my team's mission, and team members' names and roles only.
2. Sources: the monday boards, calendar, Slack channels and folders each routine reads, and team metrics through Kremer.
3. People-data rules: use facts about work only. Leave out health, family, compensation, HR cases and guesses about personality. Write every note about a person as if that person will read it. Never score, rank or compare people. Prepare agendas and drafts; leave every decision and every conversation to me.
4. Missing information: name the gap and ask. Never invent facts about a person.

Ask me to approve it.
```

**In Claude Cowork:** create a project named Managing, keep it private, and paste the standing instructions into its instructions. It reads your monday, Google Calendar, Gmail and Slack connectors.

## Step 3: Build each routine and run it on real work

Build one routine at a time in your private managing workspace, starting with the one that costs you the most.

### Prompt: Design one routine

**What this does:** the AI interviews you about one routine, writes its instructions for your approval, and runs it once on real data.

```
Design one managerial routine with me. Ask which routine from my standing instructions, then interview me one question at a time: its trigger, its sources, who sees the output, and what a good result looked like when I last did it myself.

Start from these formats and adapt them:
- Planning: top three team priorities, capacity risks from the board, decisions I must make, what to defer.
- Team status: progress in three lines, items late or stuck with due dates, decisions needed. Team level only.
- 1:1 preparation: the person's topics first, their board items, what we agreed last time and whether it happened, two questions to ask.
- Feedback draft: what happened, the effect it had, what to keep or change, in words I would say aloud.
- Record of work: one dated line per entry: what was delivered, its effect, what we agreed.

Write the routine as instructions: trigger, sources, steps, output, people-data rules. Stop and wait for my approval. Then run it once on real data, list your sources, and mark anything unconfirmed as UNVERIFIED.
```

Read the output as you would on a busy Monday. When something is off, say exactly what: "show only what changed this week", "put Dana's topics before mine", "this feedback draft judges attitude; keep it to what happened and its effect".

Ask the AI to write every fix into the routine's instructions. Then run the Design one routine prompt for your other routines. A routine is ready when you would use its output with light edits only.

## Step 4: Make the routines part of your week

Give each routine a fixed moment in your week.

| Routine | When it runs |
| --- | --- |
| Planning | At the start of each week or sprint |
| Team status | Weekly, before the update is due; post the approved version on your team board |
| 1:1 preparation | The day before each 1:1 |
| Feedback draft | Soon after the moment you want to give feedback on |
| Record of work | After each 1:1 and each delivery, as a short note you dictate |

**In Claude Cowork:** ask Claude to turn each routine into a skill, and add it under Customize → Skills. Close and reopen Claude so it finds the new skill. Ask Claude to run the team status every week at the time you need it, check that it appears under Scheduled, and have it show you the draft before it posts.

Once a month, ask yourself which output you used as it was, which you rewrote, and which you stopped reading. Fix or drop those routines. Then reread your record of work: is every note factual and fair?

You are done when two routines have run on a real week and you acted on their output.

## Go further

**Prepare for review season.** Do this when a review cycle starts, so each review draws on the whole period.

**What this does:** drafts the facts for one review from your record of work, and shows where the record is thin.

```
Help me prepare one performance review. Ask whose review it is and which period it covers. Read only my record of work and that person's board items for that period.

Write a factual summary: what they delivered, its effect, how they grew, and what we agreed for the next period. Quote the dated notes you used and list the months where my record is thin. Keep it to facts; I write the rating and the final review myself, in Monday's review process.
```

**Track what you promised.** Do this when 1:1s create commitments on your side too. Add a line to your 1:1 preparation routine: "List what I promised this person last time, and whether I did it."

## Proof of work

In "what I built", name your routines, one thing a routine showed you that you would have missed, and one change you made after the first run.

For example: "Weekly team status from our Q4 launches board, 1:1 preparation, and a record of work. The 1:1 preparation showed I had promised Dana a design review slot twice and never booked it."

## Related adventures

- **Your Own Chief of Staff**: your personal morning briefing and meeting preparation.
- **Hard Conversations**: prepare a difficult conversation with a team member.
- **Your Team's AI Blueprint**: plan how your whole team builds with AI.
