---
slug: understanding-ai-agents
emoji: 🤖
icon: robot
title: "Understanding AI Agents"
walkaway: "A working understanding of how agents think, and your own rules for setting goals and deciding what to delegate"
category: Work smarter with AI
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Moderate
outcome: Learn something
pattern: TOUR
wave: W1
slot: 4
next: [your-own-chief-of-staff, automation-done-right]
source: "Adapted from catch-up-may/content/week-4/project-10-understanding-agents.md (Step 1 narrated loop, Step 2 framing sets autonomy, Step 3 goal vs steps, Step 5 Rules of Autonomy tiers, Step 6 simplest thing that works, Step 7 plan before you execute), guide-understanding-agents.md (goal / access / verification test) and project-10-reference-card.md. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 4 [Inbar 3])
- Kept: P10 Step 1 narrated loop prompt (now on the person's own task, with THINK / ACT / OBSERVE / ADJUST labels); P10 Step 2 "how you frame a request sets how much the agent does" (one line in Step 3); P10 Step 7 plan before you execute (gates in the goal prompt); P10 Step 5 green / yellow / red tiers (inside the rules prompt); the guide's goal / access / verification test (rules section 4); P10 Step 3 goal vs steps and Step 6 "simplest thing that works" (Go further).
- Cut: workers, Falcon Advisor, Sarah Chen, tool-upgrade table, six layers, harness vocabulary, skill-building step (own adventure), connector permission audit, token napkin math, retrospective, P11 hand-offs.
- Added for Monday: Step 2 "converse with the agent" (design note: learn by conversing, show the reasoning); the when-to-insist-on-web-search table; a five-part goal card with a QBR example; monday boards and Kremer as sources; agents built by others, including monday agents.
- Effort is Quick win (seed): the guide's budget for Quick win is under 1,000 words; see word count in the handover.

Open items
- "In Claude" line says the visible thinking may be a summary of the reasoning. Confirm current Claude behaviour before launch.
- monday agents: can an employee read the instructions of an agent a colleague built? Step 4 asks the three questions without assuming it.
- next: slug automation-done-right is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: one-chat flow for Steps 1-4
-->

# 🤖 Understanding AI Agents

**See how an agent works on your real tasks, and learn to give it goals that get good results.**

## Why this adventure

You work with agents every week: Claude with your connectors, Cowork, monday agents, agents your teammates built. When one returns a weak result, the cause is usually something you control: a vague goal, a skipped source, or a guess where it should have asked.

Here you watch an agent work on one of your real tasks and explain itself as it goes. You see the **agentic loop**: the cycle of plan, act, check and adjust that every agent runs. Then you practise writing goals and leave with your own rules for any agent, yours or someone else's.

## The trail

1. **Watch the loop**, so you see how an agent plans, acts and checks on your own work.
2. **See where the agent gets its answers**, so you know when it searches and when it relies on memory.
3. **Set a goal that works**, because an agent works toward exactly the goal you give it.
4. **Write your rules for any agent**, so what you learned holds on your busiest day.

## Before you start

Pick one real task with several steps, such as preparing for a QBR or writing release notes from a monday board, and work in an AI tool with web search and your connectors.

## Step 1: Watch the loop

### Prompt: Narrate your work

**What this does:** the agent works on your task and labels every move, so you see the loop in slow motion.

Open a new chat in an AI tool that can search the web and reach your files, for example Claude, and paste the prompt below. It asks what to work on before it starts, so answer its questions first.

```
I want to watch how you work as an agent. The agentic loop is the cycle every agent runs: think (plan the next step), act (use a tool or write), observe (check the result), adjust (change the plan if needed), and repeat until the goal is met.

Before you do anything, ask me two questions, one at a time: which task of mine to work on, and what a good result looks like. Do not choose the task, do not narrow it, and do not decide what good means. If you need anything else to begin, ask for that too, then wait until I tell you to start.

Then work on it. Before each step, say what you will do, which source you will use (web search, my files, monday boards, internal data, or your own memory) and why. After each step, say what you found and whether it changes your plan. Label each part THINK, ACT, OBSERVE or ADJUST.

Before you deliver, check the result against the goal and name its weakest part.
```

As it works, watch for four things:

| What to watch | Why it matters |
| --- | --- |
| Which source it chose for each fact | Facts from memory can be out of date |
| Where it changed its plan | This is the loop working |
| Where it assumed something instead of asking | The agent fills gaps with guesses |
| How it decided it was finished | A vague goal gives it a vague finish line |

**In Claude:** open the thinking section above the answer to read its reasoning. What you see may be a summary of the reasoning, so still check the result.

## Step 2: See where the agent gets its answers

Behind every answer, the agent decides where to look: the web, its own general knowledge, your files and instructions, or what it remembers from before. Those decisions make results personal and useful, and they are where results go wrong. This step makes them visible.

### Prompt: Show me where your answers come from

**What this does:** for three tasks of yours, the agent says which source it would use for each part, and where that choice could fail.

Stay in the chat from Step 1 and paste the prompt below.

```
I want to see where your answers come from. Ask me for three tasks I do often, each of a different kind (research, analysing a monday board, writing for a customer, an action across tools). Wait for all three; do not pick them for me.

For each task, show a table with four rows: from the web, from your general knowledge, from my files and instructions, from memory. In each row: what you would take from that source, and how it could let me down (out of date, generic, a file you never opened).

Then look at the task from earlier in this chat: which parts came from which source, and which may be out of date?
```

Agents lean on general knowledge, which stops at a cutoff date, and open your files only when told to. Insist on the right source:

| Your task depends on | Ask for |
| --- | --- |
| Something that changes: a release, a regulation, news | "Search the web first and date each source." |
| How a product works today, including Claude or monday features | "Check the current official documentation." |
| A named customer or company | "Use the web and internal data through Kremer; mark what you could not confirm." |
| Your own standards or earlier decisions | "Read my instructions and project files first, and tell me which you used." |
| Only your own material: restructure, shorten, rewrite | Skip the web search. |

## Step 3: Set a goal that works

**Think first, without AI.** Step away from the chat: close the window and write or dictate your notes. Pick a task you will hand an agent this week and work out what you want from it. Be ready to give your tool an answer for each of the five parts below. No particular structure is needed; know what you want and what you expect.

| Part | Question it answers | Example: QBR preparation |
| --- | --- | --- |
| Outcome | What does done look like? | A one-page brief for the Thursday QBR |
| Context | Who is it for, and why now? | For me and the account manager; usage dropped last quarter |
| Sources | Where should it look? | The account board, CRM history through Kremer, my last emails with the customer |
| Boundaries | What may it do alone, and what must it show me first? | Read and draft only; I send everything |
| Check | How will it prove the work is done? | Every risk has a source; unconfirmed lines are marked |

Your wording sets how much the agent does. "Make sure the team is ready" invites it to act across your tools. "Draft a summary for me to review" keeps it to a draft.

### Prompt: Sharpen my goal and plan

**What this does:** the agent asks you for the task and the five parts, rewrites the goal for your approval, then shows its plan before it does anything.

Come back to the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
This is a new task. Focus on this task only: put the earlier tasks in this chat aside, and keep only what they taught you about me.

I want to hand you a task. Ask me for it, then ask me, one question at a time, for five parts: outcome (what done looks like), context (who it is for and why now), sources (where to look), boundaries (what you may do alone and what you must show me first), and check (how you will prove the work is done). Skip a part I already covered. Do not choose the task, do not narrow it, and do not decide what good means.

Then rewrite the goal in five short lines. Stop and wait for my approval.

After I approve, write your plan: the steps, the source for each step, and the points where you will stop for my decision. Stop and wait. Run the plan only after I approve it.
```

Correct any wrong assumption in the plan before you approve it. You are done when the result needs only small edits.

## Step 4: Write your rules for any agent

### Prompt: My rules for agents

**What this does:** turns what you saw in this chat into one page of rules any AI can follow.

Stay in the same chat and paste the prompt below, because it works from everything that happened in it (Steps 1 to 3).

```
From everything in this chat, write my rules for working with agents. One page, four sections:
1. Goals: how I write a goal (outcome, context, sources, boundaries, check), with one example from my work.
2. Web search: the tasks where I always ask for a web search with dated sources.
3. Delegation, in three lists. Green: the agent acts alone (low risk, reversible, affects only me). Yellow: it does the work and shows me before anything leaves. Red: it always asks first (customers, commitments, shared boards, anything outside my team).
4. Agents built by others: three questions I ask before I rely on one. What is its goal? What can it read and change? How do I check its work?

Ask me about anything unclear, one question at a time.
```

**In Claude:** paste sections 1 to 3 into Settings → Instructions for Claude. Keep section 4 for the next agent a teammate shares with you, including monday agents.

## Go further

**Goal or steps?** Do this to learn when numbered steps work better than a goal. In two fresh chats, give the same task once as numbered steps and once as a five-part goal, then compare the path and the result. Steps suit a routine you trust; a goal suits work where the agent should find the path.

**Use the simplest thing that works.** Do this when an agent is slow or uses a lot of your quota. Every loop, search and connector read uses tokens. For a task you can describe in one sentence with a simple output, a direct prompt is enough. Add that line to your rules.

## Proof of work

In "what I built", name the goal you wrote in Step 3, one thing the agent did that surprised you, and one rule you added.

For example: "Goal for my QBR prep brief. The agent took the renewal date from memory and it was wrong. New rule: account facts always come from the board or Kremer."

## Related adventures

- **Your Own Chief of Staff**: put an agent on a recurring job with the goal and boundaries you practised here.
- **Automation Done Right**: design, run and monitor an automation properly.
