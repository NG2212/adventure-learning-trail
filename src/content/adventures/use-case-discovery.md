---
slug: use-case-discovery
emoji: 🧭
icon: map-pin
title: "Use-Case Discovery"
walkaway: "Your ranked top-5 AI use cases with a feasibility check, and a next adventure for each"
category: Set up your AI
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Quick win
outcome: Learn something
pattern: INT
wave: W1
slot: 6
next: [skills-when-how-and-how-well, your-own-chief-of-staff]
source: "Adapted from summer-challenge/labs/where-to-next.md (discovery interview, use what you know, filter before ranking, top-5 table, first experiment, generic answers as a context signal) and catch-up-may/content/week-3/project-7-professional-specialist.md Step 1 (tell the AI what already exists so it avoids duplicates; direct and indirect questions) and its Use-Case Bank (Monday examples in Step 1). FVI and the feasibility go/no-go lenses (Business, Data, Execution) are Nufar's own frameworks, used verbatim. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 6 [Inbar 14])
- Kept from Where To Next: the interview (where the week goes, repeat or redo, information hunted, decisions made under-prepared, AI already used), "use what you know, ask only for gaps", filter before ranking, the top-5 table, the first small test, and the teachable moment that a generic list means thin context.
- Kept from Catch-Up P7 Step 1: tell the AI what already exists so it avoids duplicates; the indirect questions; the Use-Case Bank recast as one line of Monday examples.
- Cut: H/M/L frequency/value/impact columns (replaced by FVI, Nufar's canonical frame), the A/B fork, personal-life layer, Dream Team and worker framing, Sarah Chen, Excess Baggage pointer.
- Added for Monday: a no-AI warm-up on last week (thinking step starts without AI); "use what exists" check covering team skills and monday AI features; Kremer and boards in the Data lens; "simplest form that works" column with a page table mapping each form to the sibling adventure (the "next adventure for each" promised to Inbar); keep-it-simple rule from design notes; backlog on a monday board in Go further.
- Effort is Quick win: the guide budget is under 1,000 words; this file is slightly above (see final report).

Open items
- The "simplest form" list (better prompt, saved instructions, skill, scheduled job, app) is described in plain words and not named as a framework. Nufar to confirm it sits well next to the six shapes in her approved Pango deck.
- "monday AI features" and "monday agents" as existing capabilities: wording is generic; confirm which built-in features Monday wants named.
- Scheduled jobs depend on Keren Q6 (Cowork scheduled tasks).
- next: slugs provisional until sibling files exist.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🧭 Use-Case Discovery

**Find where AI would help your work most, check that it can work, and start the best idea this week.**

## Why this adventure

A use case is one specific task where AI helps you, such as "turn every customer call into a follow-up email".

The best ones are hard to see from inside your own routine, and AI tends to suggest impressive builds where a simple prompt would do. Here an AI interviews you about your real week, ranks the ideas and points each one to the simplest way to start.

## The trail

1. **Learn what makes a good use case**, so you can judge the AI's ideas.
2. **Write down your week**, so the interview stays concrete.
3. **Get interviewed and ranked**, to turn your week into a top 5.
4. **Check your top pick and start it**, so the list becomes real work.

## Before you start

Have last week's calendar and your main monday boards open.

## Step 1: Learn what makes a good use case

Judge every idea with **FVI**: Feasibility, Value, Investment.

| Question | A strong use case |
| --- | --- |
| **Feasibility:** can it work? | The task is clear, and your AI can reach the boards, mail or documents it needs |
| **Value:** is it worth it? | It happens weekly or more, and it helps what you are measured on |
| **Investment:** what does it cost? | Small effort to set up, use and maintain |

Two rules keep the list useful:

- **Use what exists first:** your tools, your team's skills and monday's own AI features may already do it.
- **Choose the simplest form that works.** Move to a skill or an app only when a better prompt stops being enough.

## Step 2: Write down your week

Close the chat. From last week's calendar and boards, write down:

- Three tasks you repeated, dreaded or redid
- Information you searched for more than once
- One decision you made with too little preparation
- Where you already use AI, and where it disappointed you

Examples at Monday: customer follow-ups after every call, QBR summaries, release notes, incident write-ups, forecast commentary, the weekly team update.

## Step 3: Get interviewed and ranked

### Prompt: My top 5 AI use cases

**What this does:** the AI interviews you, removes weak and duplicate ideas, and ranks your top 5 with FVI.

```
Run a use-case discovery interview with me. Goal: my top 5 AI use cases at monday.com, simple to start and worth the effort.

Use what you already know about me as background; ask only for gaps, and say so if your context on me is thin. I will paste notes about my week.

Ask one question at a time, at most seven: my goals, where my week goes, work I repeat or redo, information I search for, under-prepared decisions, the AI I already use. If I answer vaguely, ask for a recent example. Do not decide my goals or which work matters; wait for my answers before ranking.

Ask which AI features and team skills I already have; mark ideas they cover as "Use what exists". Remove ideas generic to my job title, multi-month projects, and ideas impossible with my tools.

Rank the top 5 with FVI:
- Feasibility: can it work with my tools and data (monday boards, Drive, Gmail, Slack, internal data through Kremer, Monday's data layer)?
- Value: how often it happens and how much it helps my goals.
- Investment: effort to set up, use and maintain.

Table columns: rank, use case in one sentence, Feasibility, Value, Investment (High, Medium or Low), simplest form that works (better prompt, saved instructions, skill, scheduled job, app), first small test.

Propose a build only when a simpler form would fail, and say why. Then stop and wait.
```

If the use cases could fit anyone with your job title, your AI needs more context about you: build it in **Your AI Identity**, then run this prompt again.

## Step 4: Check your top pick and start it

### Prompt: Feasibility check and first test

**What this does:** in the same chat, checks your number 1 use case for feasibility and writes a small test for this week.

```
Check my number 1 use case from the table above through three lenses. Answer each with Go, Unclear or No-go and one line of evidence:
1. Business: is the task clear, will I really change how I work, is the impact worth it?
2. Data: is the data available, reachable by my AI tool, and accurate?
3. Execution: is the tool approved at Monday, is it small enough to do soon, does it fit the tools I already use?
Ask me about anything you cannot judge. If a lens is No-go, move to number 2.
Then write the first small test: what I do this week, the exact prompt, and how I will know it worked.
```

Run the test on real work this week. Then take each use case to the adventure that teaches its form:

| Simplest form that works | Where to learn it |
| --- | --- |
| Better prompt or saved instructions | Your AI Identity |
| Skill | Skills: When, How and How Well |
| Scheduled job | Your Own Chief of Staff, or Automation Done Right |
| App or dashboard | Creating Apps with AI, Done Right |

You are done when the first test has run on real work and you know whether to keep it.

## Go further

**Keep your list on a monday board.** Do this so the list stays alive. Add each use case as an item with FVI, form and status columns, and run the My top 5 AI use cases prompt again every quarter.

**Ask your team before you build.** Do this when teammates repeat the same task. Ask your team channel who already solved it; one shared skill saves five separate builds.

## Proof of work

In "what I built", name your number 1 use case, its simplest form, and what the first test showed.

For example: "Renewal-risk summary from my Renewals board and Kremer, as a skill. The first test caught two quiet accounts."

## Related adventures

- **Skills: When, How and How Well**: build and test a skill for a use case on your list.
- **Redesign Your Week with AI**: review the work already on your plate.
