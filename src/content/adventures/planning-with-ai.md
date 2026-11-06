---
slug: planning-with-ai
emoji: 🧭
icon: calendar
title: "Planning with AI"
walkaway: "A plan you would actually present, built from real signals on your boards and already challenged"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone, Product, Engineering]
audience: [Managers]
tool: Any AI tool
effort: 1 hour
outcome: Build something
pattern: INT + PANEL
wave: W3
slot: 16
next: [board-of-advisors, making-decisions-with-ai]
source: "New adventure (inventory: New). Stress-test adapted from Executive Catch-Up Project 5 (catch-up-may/content/week-2/project-5-strategic-advisor.md: Step 7 stakeholder simulation from real evidence, Step 8 role map Decider / Influencer / Blocker / Champion / Neutral and the feared question, Step 9 scenario simulation principles: early warning signs, tripwires, cheapest action this week; Step 10 pre-mortem and quarterly priority reset) and its reference card (project-5-reference-card.md). Board of Advisors adventure (content/adventures/board-of-advisors.md) linked, never repeated. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 16 [Inbar 12])
- Kept from Catch-Up P5: the role map (Decider, Influencer, Blocker, Champion, Neutral) as the stakeholder lenses in the Step 4 stress-test; "the question you most hope nobody asks" with a calm answer; personas from real evidence (Step 7) as "use what they have said in Slack or meetings"; the pre-mortem (Step 10); the scenario principles (early warning sign, tripwire, cheapest action this week) inside the Go further scenario planning prompt; the quarterly priority reset as the mid-period plan check.
- Cut: the Strategic Advisor worker, capability menu, decision styles, devil's advocate mode, stakeholder dynamics file, Sarah Chen, all Catch-Up cross-references. The board itself lives in Build Your Board of Advisors and is linked once in Step 4.
- Added for Monday: a no-AI thinking step (the plan's question); monday boards, Drive, Slack and Kremer as signal sources with a signal sheet (facts / asks / commitments) so every priority traces to a signal; run work (support, on-call, bugs, incidents) in the capacity check for engineering; a deferred list; the plan goes back onto the team board as items and a "Signals to watch" group.
- Scenario planning (the stretch) is distinct from the three-futures test in Making Decisions with AI: two key uncertainties, four scenarios, moves that work in every scenario, moves that wait for a signpost, signposts tracked on the board.
- Design-notes rule honoured: the plan stands alone; no requirements-document step anywhere.
- Managers: capacity is team capacity; one line keeps people data out of the plan.

Open items
- monday connector write access: Step 5 lets the AI create board items after approval and offers the paste-in route as the alternative. Confirm item creation through the connector is enabled at Monday.
- Kremer access from Claude chat and Cowork for usage and revenue data: worded "if you have access", consistent with other adventures.
- next: board-of-advisors and making-decisions-with-ai both exist.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 🧭 Planning with AI

**Build a quarter, project or roadmap plan from real signals, and let AI challenge it before anyone else does.**

## Why this adventure

A plan is a promise about where a team's time will go. Many plans start from last quarter's plan and the loudest request in the room, while the real signals sit across monday boards, customer feedback, incident write-ups and data.

In this adventure you build one real plan: a quarter, a project or a roadmap. AI helps you collect the signals, structure the plan and test it from the position of each reader. You finish with a plan you would actually present, and its items on your board.

## The trail

1. **Decide what the plan must answer**, so it stays focused.
2. **Gather the real signals**, so every priority rests on evidence.
3. **Draft the plan**, with priorities, capacity and what you defer.
4. **Stress-test it**, to hear the hard questions before the planning review.
5. **Put it where the work lives**, so the plan guides the work.

## Before you start

Pick one real plan you owe soon, and have the monday boards behind it available to connect.

## Step 1: Decide what the plan must answer

**Think first, without AI.** Close the chat. In a note, write: the period and scope of the plan; who approves it and who has to follow it; the main decision the plan makes (for example, which three bets get the team's time next quarter); what you already believe; and what worries you. Messy is fine.

### Prompt: Your plan brief

**What this does:** the AI interviews you about your notes and writes a short brief that every later step uses.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me prepare a plan. I will paste or dictate my notes. Use what you already know about me and my team; ask only for what is missing, one question at a time. If I answer vaguely, ask for an example.

Then write a plan brief, under 200 words:
1. Scope and period
2. Readers: who approves the plan, and who has to follow it
3. The main decision the plan makes
4. The goals it serves, and how success will be measured
5. Fixed constraints: team size, dates, commitments already made
6. My current leaning, and how confident I am in it (as a percentage)

Stop and wait for my approval.
```

## Step 2: Gather the real signals

A signal is any evidence about what the plan should contain. Good plans draw on several kinds.

| Which signals? | Where they live at Monday |
| --- | --- |
| **Commitments already made** | Roadmap and project boards, promises in customer follow-ups |
| **What customers ask for** | Feedback and feature-request boards, QBR summaries, renewal calls |
| **What breaks** | Bug boards, incident write-ups |
| **How the team actually spends its time** | Sprint and team boards: support load, on-call, unplanned work |
| **Results and usage** | Dashboards, and internal data through Kremer |

AI tends to treat one loud request as a trend, so the prompt counts the sources behind each signal.

### Prompt: Your signal sheet

**What this does:** reads your sources and builds one table of evidence, before any plan exists.

Stay in the same chat and paste the prompt below.

```
Build a signal sheet for the plan brief in this chat. Ask me which monday boards, Drive documents and Slack channels to read, and read them through my connectors. If I have internal data through Kremer, ask whether to use it.

Output one table: signal, type (commitment, customer ask, breakage, team time, result), source, number of independent sources, data or anecdote.

Below it: the three strongest signals, signals that conflict, and questions the sources could not answer.

Mark anything you could not confirm from a source as UNVERIFIED. Stop after the signal sheet; the plan comes next.
```

Then add what only you know, such as a promise made in a meeting.

## Step 3: Draft the plan

### Prompt: Draft the plan

**What this does:** offers three directions for the plan, waits for your choice, then drafts one page.

Stay in the same chat and paste the prompt below.

```
Draft my plan from the plan brief and the signal sheet in this chat.

First, propose three genuinely different directions: focused (fewer bets, done well), balanced, and ambitious. For each: the priorities in one line, what it gives up, and who would like it least. Stop and wait while I pick or combine.

Then write the plan on one page:
1. Goal, and how we will measure it
2. Three to five priorities, each with the signals behind it and the measure of done. Mark a priority without a signal as "judgment call".
3. Deferred this period, with one line of reason each
4. Capacity: the share of team time per priority, plus run work (support, on-call, bugs, incidents), totalling 100%
5. Milestones and dependencies on other teams
6. Key assumptions
7. What the readers must decide or approve
```

When something is off, say exactly what: "on-call takes a quarter of our time", "priority two has no customer signal". Specific feedback gets a better plan than "make it better".

Capacity in a plan is team capacity; notes about individual people stay out of it.

## Step 4: Stress-test it

Test the plan from the position of each reader.

| Who reads your plan? | What are they looking for? |
| --- | --- |
| **Decider**: approves it | Fit with the goals, and the trade-off they must defend |
| **Influencer**: the Decider listens to them | Whether their area is covered |
| **Blocker**: can stop it | The cost to their team, often unstated |
| **Champion**: will argue for it | One strong reason to support it |
| **Dependent team**: delivers a part | What you ask of them, and when |

### Prompt: Stress-test my plan

**What this does:** challenges the plan from each reader's position, waits for your decisions, then revises.

Stay in the same chat and paste the prompt below.

```
Stress-test the plan in this chat. First ask me who will read it, and each reader's role: Decider (approves it), Influencer (the Decider listens to them), Blocker (can stop it), Champion (will argue for it) or dependent team (delivers a part). If I paste what they have said in Slack or meetings, use it.

Then report:
1. For each reader: their main concern and the question they will ask
2. Evidence: priorities that rest on one source or on anecdote
3. Capacity: whether the time adds up, including run work
4. Pre-mortem: the period is over and the plan failed. The three most likely reasons.
5. The weakest assumption, and the question I most hope nobody asks, with a calm answer

Stop and wait while I say which challenges I accept. Then give me the revised plan, a short change log, and the challenges I rejected, each with my reason.
```

If you built a board in the Build Your Board of Advisors adventure, convene it on the revised plan as well.

> **Example: Dana, engineering manager, automations platform team.** Her signal sheet showed on-call and incidents taking a third of the team's time, which her draft had missed. The stress-test named a Blocker: the integrations lead, whose release needed an API change Dana had planned late in the quarter. Dana deferred one of four priorities, moved the API change earlier, and prepared for the question she feared: "What if incidents spike again?"

## Step 5: Put it where the work lives

### Prompt: Plan items for your board

**What this does:** turns the revised plan into items for your team's monday board, and creates them only after you approve.

Stay in the same chat and paste the prompt below.

```
Turn the revised plan in this chat into items for my team's monday board. Ask me which board and groups to use.

For each milestone: item name, the priority it serves, owner, due date, dependency. Add a group called "Deferred" with the deferred items and their reasons.

Show me the list and stop. Create the items through the monday connector only after I approve; if you cannot, give me the list in a format I can paste into the board.
```

Keep the change log and the rejected challenges with the plan. You are done when the plan is presented or shared, and its items are on the board.

## Go further

**Plan for the futures that worry you.** Do this when the plan depends on things outside your control, such as a large customer's decision or another team's delivery. Scenario planning prepares your moves in advance.

**What this does:** builds four scenarios from two uncertainties and tells you which moves to make now and which to hold.

Stay in the same chat and paste the prompt below.

```
Run scenario planning on the plan in this chat. Scenario planning means: pick the two uncertainties that would change the plan most, combine their outcomes into four scenarios, and decide in advance what to do in each.

1. Propose four uncertainties outside my control; I pick two.
2. Describe the four scenarios in three lines each, with a short name.
3. For each: does the plan hold, what changes, and the early warning sign that this scenario is starting.
4. Robust moves: actions that help in every scenario. These go into the plan now.
5. Waiting moves: actions to take only when a warning sign appears, each as a tripwire: "If this happens, we do this."
6. The cheapest action this week that reduces the biggest risk.
```

Add the warning signs to your board as a group called "Signals to watch", and check them at each planning review.

**Check the plan against reality mid-way.** Do this halfway through the period, to see where the plan and the work have drifted apart. Open a new chat and paste the prompt below.

```
Compare my plan with my team's monday board. I will paste the plan and name the board. Report progress on each priority, signals that changed since the plan was written, and assumptions that no longer hold. End with one recommendation: keep, cut or add. Mark any point without a board item or source as UNVERIFIED.
```

## Proof of work

In "what I built", name the plan, the challenge that changed it most, and where its items live.

For example: "Q1 plan for the automations platform team. The capacity check showed on-call takes a third of our time, so I deferred one of four priorities. The plan is on our team board."

## Related adventures

- **Build Your Board of Advisors**: convene the perspectives your plan has to satisfy, saved for every future plan.
- **Making Decisions with AI**: get a real challenge on the single decisions inside the plan.
