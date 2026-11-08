---
slug: managing-with-ai
emoji: 👥
icon: people
title: "Managing with AI"
walkaway: "A management companion that knows how you manage, two or three skills for your managerial tasks, one scheduled task, and a bias check you can run on anything you prepare about people"
category: Lead with AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: Longer
outcome: Build something
pattern: INT
wave: W1
slot: 20
next: [your-team-s-ai-blueprint, hard-conversations]
review: ready
video: /videos/managing-with-ai.mp4
source: "Adapted from appsflyer/Managers/exercises/: archetype-cards.md Card 3 Management Co-Pilot (mandate, identity emphasis, team page with growth threads, starter automation, test question); exercise-1-agent-architecture.md Phase A Step 2 (identity interview: read and do not re-ask, opening line, under 20 lines) and the Phase B running record (dated notes page); build-menus.md People Management (1:1 Prep Pack, Feedback Drafter, Performance Review Prep, Recognition Writer, Career Development Planner seeds); automation-menu.md People Management (1:1 Prep Pack, Monthly Feedback Nudge). Kept from monday-client/monday-managers-training/: the Session 2 skill menu as the task table (planning, team status, 1:1 preparation, feedback, record of work) and 'never invent facts about a person'. Skill first, tested by hand, then automated: Nufar's method, as in Automation Done Right; the Build a managerial skill prompt adapts the Build a skill prompt from Skills: When, How and How Well. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-11-08, rewrite to Nufar's new scope, videos/managing-with-ai/notes.md)
- Kept: the task table (planning, team status, 1:1 preparation, feedback, record of work, with "What AI prepares" and "What stays yours"); "never invent facts about a person" and "never score, rank or compare people", now inside the companion's instructions; the concrete-feedback examples; review-season prep in Go further; Kremer for team metrics.
- Cut: the people-data step, its table and the policy paragraph (replaced by her one general sentence in Step 1); the "At Monday, this could be a CS team lead's..." line under the table; the routine-design prompt with five formats; the weekly-rhythm table; the monthly routine review; "Track what you promised".
- Added: the three purposes in Why this adventure, framed as support alongside HR and the person's own manager, with her anonymous feedback example; Step 1 builds a management companion (Management Co-Pilot card adapted, renamed: Copilot is a Microsoft product and "partner" belongs to Build Your Professional Partner), with a team page and a dated notes page; Step 2 picks skills and builds them with the Skills adventure's Build a skill prompt, linked by name; Step 3 automates one tested skill as a scheduled task, with the AppsFlyer 1:1 prep pack and monthly feedback nudge as examples; Step 4 bias check both ways (the AI's sources and recency; her list of the person's own biases), flag only, the person judges; Go further adds a growth conversation, recognition, and a pointer to Hard Conversations for rehearsal.
- Distinct from Your Own Chief of Staff (personal workload, to-do board, priorities): this page is the people side of managing. Team-level AI adoption stays in Your Team's AI Blueprint.

Judgment calls
- A sixth table row, "Second opinion", carries her third purpose into Step 2; the companion's instructions say when a situation calls for HR or the manager.
- effort moved from 1 hour to Longer and outcome from Work differently to Build something: four steps that build a companion, skills and a scheduled task match Your Own Chief of Staff's labels. Revert if she prefers.
- The customer-boards line (learnings, Redesign Your Week) is left out, per her brief of one general sentence on employee data. Add it back if she wants it wherever boards are read.
- "Proficiency level" is kept in her words; the table example reads it as skill or experience level.
- The notes page from Step 1 is what the monthly feedback nudge reads, so the Step 1 prompt creates it.
- Step 1's test question is a shortened form of the Management Co-Pilot card's test question.
- Review season, growth conversation and recognition are one-line asks to the companion with no prompt block, to stay within length.
- Length: first draft 2,308 words; 1,800 by lint after compressing every prompt, shortening the do-this lines to "Answer its questions in writing or by voice", trimming table cells, and turning the review-season prompt into one paragraph. Self-review (first-time reader, swap, cold-start, busy-Tuesday) run by the writer; fresh-chat prompt test not run.

Open items
- Inbar's comment on the list (11 Oct): Monday Talent has an internal AI Coach for managers, and she wants to connect to it. Not referenced on the page; Nufar to decide with Inbar.
- Keren Q6: are scheduled tasks in Claude enabled at Monday? Step 3 assumes yes.
- Keren Q2 (how skills are added at Monday) affects the Customize → Skills line in Step 2.
- Fresh-chat prompt test pending (playbook step 4), especially the companion prompt's three outputs and the scheduled-task prompt in Claude.
Changed 2026-11-08: self-contained skill prompt replaces the pointer to another adventure (HARD RULE).
-->

# 👥 Managing with AI

**Build a management companion that helps you prepare, give better feedback, think through daily situations and notice where bias may be speaking.**

## Why this adventure

Managing has an operational side: 1:1 preparation, status reports, planning. It has a human side: frequent, nuanced and varied feedback, and keeping track of each person's situation, aspirations and the things that get lost between meetings, Slack and notes. And daily situations call for a second opinion.

AI can support you in all three, alongside HR and your own manager, while the thinking and the decisions stay yours. It helps most where you are less strong. One manager, for example, uses an AI companion to make sure every team member gets feedback often enough, and that the feedback is consistent and follows good practice.

In this adventure you build a management companion that knows how you manage and who is on your team.

## The trail

1. **Build your management companion**, so every request starts from how you manage.
2. **Create skills for your managerial tasks**, so repeated tasks come out your way.
3. **Automate one managerial task**, so preparation is ready in time.
4. **Check for bias, both ways**, in what the AI gives you and in what you write.

## Before you start

If you have never built a skill, start with **Skills: When, How and How Well**.

## Step 1: Build your management companion

Your companion is one dedicated place, for example a project or an agent, with standing instructions for how you manage. Follow Monday's guidelines on employee data when you use AI for managerial tasks.

### Prompt: Your management companion

**What this does:** the AI interviews you about how you manage, then writes your companion's instructions, a short team page and a notes page.

Open a new chat in your AI tool, for example Claude, and paste the prompt below. Answer its questions in writing or by voice.

```
I am building an AI management companion: it helps me prepare 1:1s and status reports, give frequent, specific feedback, track what is happening with each person, and get a second opinion on daily situations.

Use what you know about me and do not re-ask it. Ask me to brain dump how I manage first. Then interview me one question at a time on what is missing: my management philosophy and feedback directness; how my tone changes across people; my team (names, roles, the growth thread, their aspirations as they told me); where our work lives in my connected applications.

Then write:
1. Instructions, under 20 lines, opening with "You are my management companion. Your job is...". Include: feedback names the specific behavior, its effect, and what to keep or change; for a second opinion, ask what I think first, offer other readings, and say when to involve HR or my manager; never invent facts about a person; never score, rank or compare people; every decision stays mine.
2. A short team page. Mark gaps as TBD.
3. A dated notes page for feedback I give, what we agree, and people's goals.
```

**Save it now** as project or agent instructions, including a monday agent, with the two pages as files. In a folder, save them as CLAUDE.md if you use Claude, or AGENTS.md if you use Claude Code or Cursor. Keep it private.

Test it in a new chat inside your companion: "What should I cover in each of my 1:1s this week?" After each 1:1, ask it to add a dated line to the notes page.

## Step 2: Create skills for your managerial tasks

**Think first for yourself, without AI.** Which managerial tasks do you repeat? Which do you keep postponing? Where are you less strong, for example feedback that comes too rarely?

| Task | What AI prepares | What stays yours |
| --- | --- | --- |
| **Planning** | A weekly or sprint plan from the team board and your calendar | Priorities, and what to say no to |
| **Team status** | An update from your team's boards, with team metrics through Kremer | What you tell leadership |
| **1:1 preparation** | An agenda from recent work, open items and the growth thread | The conversation itself |
| **Feedback** | A draft from your notes: the behavior, its effect, what to keep or change | The judgment and the words |
| **Record of work** | A dated record of each person's deliveries and growth | Every conclusion about a person |
| **Second opinion** | Other readings of a situation, and questions to ask | The decision, and when to involve HR |

### Prompt: Choose your managerial skills

**What this does:** the AI interviews you and helps you pick two or three tasks for skills.

Paste the prompt below in a new chat inside your companion, so it knows your team. Answer its questions in writing or by voice.

```
Help me choose two or three managerial tasks to turn into skills: saved instructions an AI tool follows for one recurring task. Ask me to brain dump all my thoughts on this first. Do not choose the tasks for me. Ask one question at a time for what is missing; if I answer vaguely, ask for a recent example.

Then propose up to five in a table: the task, when I start it, its sources, its output format (for 1:1 preparation, for example: recent work and wins, open items from last time, blockers, the growth thread, one question beyond status), and what stays mine. Leave out anything that scores, ranks or compares people. Help me pick, then stop and wait.
```

### Prompt: Build a managerial skill

**What this does:** the AI interviews you about one managerial task you picked, then writes the complete skill with three test requests.

Stay in the same chat, so it knows the tasks you picked, and paste the prompt below once for each skill. Answer its questions in writing or by voice.

```
Help me build a skill for one of the managerial tasks I picked in this chat: saved instructions an AI tool follows for one recurring task. Ask which task to build first. Do not choose it for me, do not narrow it, and do not decide what good means. Ask me to brain dump how I do this task today first. If I already answered a question earlier in this chat, don't ask it again.

Then interview me one question at a time on what is missing. If an answer is vague, ask for a recent example.
1. When it starts: the moment, and the words I would use, for example "prep my 1:1 with Dana".
2. Its sources: my notes page, the team page, boards, calendar, Slack, and what to leave out.
3. The output format, section by section, and its length.
4. What stays my decision, and what the skill only prepares.

Rules the skill must carry: never invent facts about a person; every claim about someone points to my notes or a source, and gaps are marked "not in my notes"; never score, rank or compare people; every decision stays mine.

Show a short brief and wait for my approval. Then check my tool's current documentation for its skill format, and tell me if you cannot. Write the complete skill in one block: a short name in lowercase with hyphens; a description of what it does and when to use it, in my words, so it starts when I need it; steps a new manager could follow; the output as a literal template; the rules above; and three test requests to try it with. Then tell me how to add it, and to close and reopen my tool afterwards.
```

Add each skill, then close and reopen your tool. **In Claude:** add it under Customize → Skills.

Run each skill on real work. When the output is off, say exactly what: "put Dana's topics before mine", "this draft judges attitude; keep it to what happened and its effect". Ask the AI to rewrite the skill with each fix, until you would use its output with light edits only.

## Step 3: Automate one managerial task

Automate only a skill you tested by hand. In Claude, these are scheduled tasks. For example:

| Automation | When does it run? | What do you get? |
| --- | --- | --- |
| **1:1 prep pack** | Every morning, with "No 1:1s today" on quiet days | A short brief per person |
| **Monthly feedback nudge** | Once a month | Who is overdue for feedback, from your notes page |

### Prompt: Turn a skill into a scheduled task

**What this does:** the AI writes the instructions for your skill to run on its own.

Paste the prompt below in a chat inside your companion. Answer its questions in writing or by voice.

```
Help me turn one of my managerial skills into an automation: a job that runs on a schedule or when something changes in a connected application. Ask which skill; do not choose it for me. Then ask one question at a time: when it runs, where the output goes, and what it says when there is nothing to report.

Write complete instructions for an unattended run, since each run starts with no memory of this chat. It runs my skill, reads only what it needs, shows me drafts, and never sends anything to a team member. Check my tool's current documentation and tell me how to schedule it. Wait for my approval.
```

Run the instructions once yourself in a new chat, then switch it on. **In Claude:** ask Claude to schedule it, and check that it appears under Scheduled. Check the first runs. For the full method, do the **Automation Done Right** adventure.

## Step 4: Check for bias, both ways

Bias enters from two directions: the AI's sources can lean one way, and your notes and drafts carry your own lens. The AI points out where a bias may be speaking; you judge.

| Where can bias come from? | For example |
| --- | --- |
| **The AI's sources** | People who write more on boards and in Slack look busier |
| **Recency** | Last week's incident weighs more than a strong quarter |
| **Your own lens** | Cultural, generational, gender, proficiency level and others: directness read as rudeness |

### Prompt: Check for bias

**What this does:** the AI flags where a bias may be speaking in one output or draft.

Paste the prompt below in a chat inside your companion. Answer its questions in writing or by voice.

```
Help me check one piece of my managerial work for bias, for example a 1:1 preparation, a feedback draft or my notes about a person. Ask me to brain dump first: which piece, and any bias I already suspect in myself. Then ask for it.

Check two directions:
1. Bias in what you were given: some people leave more traces than others, and recent events weigh more than the whole period.
2. Bias in my words: cultural, generational, gender, proficiency level and others.

Quote each line where a bias may be speaking, name it, and ask me one question to check it. Flag only; I judge. Never score, rank or compare people. Then offer one line for my companion's instructions, so it flags possible bias in every output about a person.
```

Add that line to your companion's instructions. You are done when your companion has prepared a real 1:1, your scheduled task has run, and a bias check made you look again at something you wrote.

## Go further

**Prepare for review season.** Do this when a review cycle starts, so each review draws on the whole period. Ask your companion for a factual summary of one person's period from your notes page and their board items, quoting the dated notes it used and naming the months where your notes are thin. Run the bias check on it. You write the rating and the review yourself, in Monday's review process.

**Prepare a growth conversation.** Do this when someone's aspirations come up. Ask your companion for their aspirations as you recorded them, progress since your last growth talk, and two or three development actions.

**Write recognition that lands.** Do this when someone did something worth naming. Ask for recognition tied to the actual impact, sized for the channel.

**Rehearse a hard conversation.** Do the **Hard Conversations** adventure in a chat inside your companion, so it knows the context.

## Proof of work

In "what I built", name where your companion lives, its skills and scheduled task, and one thing the bias check made you change.

For example: "A private Claude project with 1:1 and feedback skills and a monthly feedback nudge. The bias check showed my 1:1 prep leaned on whoever posts most in Slack."

## Related adventures

- **Hard Conversations**: prepare and simulate a difficult conversation.
- **Your Team's AI Blueprint**: plan how your team builds with AI.
- **Your Own Chief of Staff**: your own workload and priorities.
