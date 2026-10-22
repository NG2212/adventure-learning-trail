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
-->

# 🤖 Understanding AI Agents

**See how an agent works on your real tasks, and learn to give it goals that get good results.**

## Why this adventure

You work with agents every week: Claude with your connectors, Cowork, monday agents, agents your teammates built. When one returns a weak result, the cause is usually something you control: a vague goal, a skipped source, or a guess where it should have asked.

Here you watch an agent work on one of your real tasks and explain itself as it goes. You see the **agentic loop**: the cycle of plan, act, check and adjust that every agent runs. Then you practise writing goals and leave with your own rules for any agent, yours or someone else's.

## The trail

1. **Watch the loop**, so you see how an agent plans, acts and checks on your own work.
2. **Ask how it approaches different tasks**, so you know when it searches and when it relies on memory.
3. **Write a goal that works**, because an agent works toward exactly the goal you give it.
4. **Write your rules for any agent**, so what you learned holds on your busiest day.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Pick one real task with several steps, such as preparing for a QBR or writing release notes from a monday board, and work in an AI tool with web search and your connectors.

## Step 1: Watch the loop

### Prompt: Narrate your work

**What this does:** the agent works on your task and labels every move, so you see the loop in slow motion.

```
I want to watch how you work as an agent. The agentic loop is the cycle every agent runs: think (plan the next step), act (use a tool or write), observe (check the result), adjust (change the plan if needed), and repeat until the goal is met.

Ask me for one real task from my work with several steps, and what a good result looks like. Use what you know about me; ask only for gaps.

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

## Step 2: Ask how it approaches different tasks

Stay in the same chat.

### Prompt: Explain your approach

**What this does:** the agent compares how it would handle three different kinds of your work, and admits where it relied on memory.

```
I want to understand how you approach different kinds of work. Ask me for three tasks I do often, each of a different kind: for example research, analysing data on a monday board, writing for a customer, or an action across several tools.

For each task, show a table with: your plan in three steps, the tools you would use, where you would search the web and where you would answer from memory, where you are most likely to go wrong, and what you would need to ask me.

Then look back at the task you worked on earlier in this chat. Which facts came from your memory, and which of them may be out of date?
```

Agents often answer from memory, which stops at a cutoff date. Insist on a web search in these cases:

| Your task depends on | What to ask for |
| --- | --- |
| Something that changes: a competitor's latest release, new regulation, industry news | "Search the web first and give the date of each source." |
| How a product works today, including Claude or monday features | "Check the current official documentation." |
| Facts about a named customer or company | "Use the web and internal data through Kremer; mark anything you could not confirm." |
| Only your own material: restructure, shorten, rewrite | Skip the web search; it adds noise here. |

## Step 3: Write a goal that works

**Think first, without AI.** Close the chat. For a task you will hand an agent this week, write the goal yourself using these five parts:

| Part | Question it answers | Example: QBR preparation |
| --- | --- | --- |
| Outcome | What does done look like? | A one-page brief for the Thursday QBR |
| Context | Who is it for, and why now? | For me and the account manager; usage dropped last quarter |
| Sources | Where should it look? | The account board, CRM history through Kremer, my last emails with the customer |
| Boundaries | What may it do alone, and what must it show me first? | Read and draft only; I send everything |
| Check | How will it prove the work is done? | Every risk has a source; unconfirmed lines are marked |

Your wording sets how much the agent does. "Make sure the team is ready" invites it to act across your tools. "Draft a summary for me to review" keeps it to a draft.

### Prompt: Sharpen my goal and plan

**What this does:** the agent checks your goal against the five parts, then shows its plan for your approval before it does anything.

```
I will paste a goal I wrote for an agent. Check it against five parts: outcome (what done looks like), context (who it is for and why now), sources (where to look), boundaries (what you may do alone and what you must show me first), and check (how you will prove the work is done).

Say which parts are clear. Ask me about the missing parts, one question at a time. Then rewrite the goal in five short lines. Stop and wait for my approval.

After I approve, write your plan: the steps, the source for each step, and the points where you will stop for my decision. Stop and wait. Run the plan only after I approve it.
```

Correct any wrong assumption in the plan before you approve it, because the agent acts on every assumption in it. You are done when the result needs only small edits.

## Step 4: Write your rules for any agent

### Prompt: My rules for agents

**What this does:** turns what you saw in this chat into one page of rules any AI can follow.

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
