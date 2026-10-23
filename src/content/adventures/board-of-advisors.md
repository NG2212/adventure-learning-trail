---
slug: board-of-advisors
emoji: 🎭
icon: masks
title: "Build Your Board of Advisors"
walkaway: "A reusable board chosen for your work, and a decision or deliverable that has already survived its critics"
category: Work smarter with AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone, Customer Facing, Product]
audience: [Managers]
tool: Any AI tool
effort: Moderate
outcome: Build something
pattern: INT + PANEL
wave: W1
slot: 11
next: [de-slop, hard-conversations]
source: "Adapted from Executive Catch-Up Project 5 (Strategic Advisor: Steps 3-5 and 6) and its reference card, and the board-of-advisors skill synthesis rules; Step 1 discovery interview adapted from the Summer Adventure lab Where To Next."
---

<!--
DESIGN NOTES (not rendered)

v2 reshape (2026-10-22), to the De-Slop v2 structure after Nufar's review of De-Slop v1 (content liked; v1 ~2,500 words was too long and in the old shape)
- Trail: 1 Decide who should review your work · 2 Build the board · 3 Convene it on real work · 4 Make it sharper. Each step section carries the trail name.
- Kept from v1: discovery interview (segments / ICPs / stakeholders / known figures / typical critics, renamed from lens archetypes), never-force-a-panel rule (two members is fine), optional devil's advocate with the weak-vs-strong table, evidence-backed personas (call notes, verbatims, monday boards, Kremer), convening rules, summary order (where most agree, sharpest split, perspective most likely to be dismissed, one question before deciding), specific-feedback coaching, one rerun, record the overruled objection, the Noa example (trimmed), sub-agents with the pitfalls table.
- Moved: both teaching tables into Step 1 with reader-question headers; devil's advocate mode, stakeholder dynamics file and sub-agents into Go further; persona-vs-facts line into Step 3.
- Cut: "Shape of the adventure" table, Layers, the "Three advisors, one question" comparison, the mastery-bar line, the AI Identity prerequisite, the multi-bullet Before you start, the "Just <name>" convening rule, the "general critic" coaching line (Step 4 carries the feedback coaching), the package-as-a-skill line (returns once Keren Q2 confirms the install path), the Making Decisions link (Related adventures limited to two).
- "Synthesis" became "summary" for non-native readers. "Sub-agent" is the only term for the advanced option, defined in one plain sentence.

Open items
- Cowork sub-agent support not confirmed in Anthropic docs (Oct 2026): Go further names Claude Code first, Cursor and Codex the same, Cowork only "if yours offers sub-agents". Hands-on check pending.
- Skill install path on Monday's Claude Enterprise pending Keren Q2.
- next: making-decisions and hard-conversations slugs are provisional until those files exist.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🎭 Build Your Board of Advisors

**Hear from the people your work has to satisfy before you present it.**

## Why this adventure

You present a feature brief, and the first question comes from an angle you missed: a customer segment you forgot, or a finance partner who reads every plan as a cost. Generic AI feedback sounds like none of them.

Here you build a board of advisors: a small group of AI personas, each one a perspective your work has to satisfy. They argue about your real work and give you a clear summary before you decide. The board stays saved.

## The trail

1. **Decide who should review your work**, because the right members matter most.
2. **Build the board**, so each member has a profile and the board has rules.
3. **Convene it on real work**, to test it where it matters.
4. **Make it sharper**, with specific feedback and one rerun.

## Before you start

Have one real decision or deliverable ready: a feature brief, a QBR plan, a launch note, a quarterly plan or a board update.

## Step 1: Decide who should review your work

Choose two to five perspectives your work has to satisfy. If only two truly matter, use two.

| Who could sit on your board? | For example |
| --- | --- |
| **Customer segments** (product work) | An 8-seat agency; a PMO lead at a large enterprise |
| **ICPs (ideal customer profiles) and buyer roles** (go-to-market work) | Each ICP, the economic buyer, the day-to-day champion |
| **Real stakeholders** (plans you present upward) | Your manager, finance, the executive sponsor |
| **Known external figures** (strategic decisions) | A well-known operator whose published views you want to test |
| **Typical critics** (when you are unsure who matters) | The numbers sceptic, the execution realist |

A **devil's advocate** is an optional extra member who argues against your plan. Add one when you want your conviction tested.

| What does a weak devil's advocate do? | What does a strong devil's advocate do? |
| --- | --- |
| Attacks everything equally | Attacks your weakest assumption and names where the plan fails |
| Leaves you with fewer options | Agrees when you bring new information, and ends with "here is what I would actually do" |

### Prompt: Your board members

**What this does:** interviews you, proposes board members and waits while you edit the list.

```
Help me choose my Board of Advisors: a small group of AI personas, each one a perspective my work has to satisfy.

Use what you already know about me. Ask only for what is missing, one question at a time, five at most: my role and main work; who uses or judges it; whose reaction I usually guess at; the perspective I most often miss. If I answer vaguely, ask for a recent example.

Propose two to five members: customer segments for product roles; ideal customer profiles (ICPs) and buyer roles for go-to-market roles; decision perspectives for leaders, including well-known external figures. For each: a name, who they represent, and what they would catch that I would miss. Offer a devil's advocate as an optional extra. Wait while I edit the list.
```

Edit the list, then continue in this chat.

## Step 2: Build the board

Evidence makes sharper personas: paste call notes, survey verbatims or a monday feedback board when the AI asks about a member, and use Kremer for internal customer data. Profiles of real colleagues cover work behaviour only.

### Prompt: Your board instructions

**What this does:** profiles each member, then writes the board's standing instructions.

```
Build the board from the members I approved in this chat. For each member, ask me as a batch: what they care about; how they react to a new idea; what they reject immediately; their blind spot. If I paste real material, build the profile from it and mark which traits come from evidence. For a known external figure, use only their public record.

Then write Board of Advisors instructions I can save:
1. Each member's profile, four to six lines.
2. When I say "board", each member answers in character in two or three sentences, then they challenge each other by name in one round. Keep real disagreements visible.
3. Then a summary: where most members agree; the sharpest disagreement and what it depends on; the perspective I am most likely to dismiss, and whether dismissing it is justified; one question to answer before deciding.
4. When I say "your call", give one recommendation that accounts for the strongest objection.
5. A devil's advocate, if present, attacks my weakest assumption and ends with what it would actually do.
6. Flag any number or fact I should verify.

Wait for my approval.
```

**In Claude:** create a project called "Board of Advisors", paste the board instructions into the project instructions and add your evidence files to the project knowledge. Convene the board from a new chat in that project. **In other AI tools:** save the board instructions as standing instructions.

## Step 3: Convene it on real work

### Prompt: Convene the board

**What this does:** gathers context, runs one session and stops at the summary so you judge it first.

```
Convene my Board of Advisors, using the board instructions in this project or pasted above. First ask me three questions, one at a time: the decision or deliverable (I will paste or describe it), what I am leaning towards and how confident I am, and what a good outcome looks like. Then run the board and stop after the summary.
```

Then judge the session: does each member sound like the person they represent, and is the perspective "most likely to be dismissed" one you were about to dismiss?

Personas change how your work is framed; facts still get verified. Check any number a member states before you rely on it.

> **Example: Noa, product manager, monday CRM.** Noa's feature brief: AI lead scoring. Her board: a 12-seat agency owner who abandons anything that needs configuring; a RevOps lead who judges everything by pipeline accuracy; a mid-market account manager; a devil's advocate. All agreed that scoring must work on day one. Sharpest split: the RevOps lead wanted editable scores, the agency owner wanted zero settings. Most likely to be dismissed: the account manager's warning that one wrong score on a key account costs more trust than having no score. Question before deciding: what does the score show with little data? Noa changed the brief's scope to answer it.

## Step 4: Make it sharper

General feedback such as "not quite right" gives the AI little to work with. Say exactly what was wrong: "The RevOps lead would ask about data accuracy first." "They agreed too fast; show me the real disagreement."

### Prompt: A sharper board

**What this does:** turns your feedback into updated board instructions.

```
Below are my Board of Advisors instructions, followed by my feedback on the first session. Ask me up to three questions to sharpen the fix. Then give me the complete updated instructions. Change only what my feedback calls for.
```

Paste your board instructions and feedback after the prompt. Save the updated instructions and convene the board again on the same work. Then revise the deliverable or decide, and record the strongest objection you overruled in the monday item or the doc.

You are done when your saved board has reviewed one real piece of work and improved once.

## Go further

**Add a devil's advocate mode.** Do this when the board agrees too easily.

```
Add a Devil's Advocate mode to my Board of Advisors instructions, pasted below. When I say "devil's advocate", it attacks the weakest assumption in my plan or the board's summary, names the scenario where it fails, and ends with "Here is what I would actually do." It pushes harder when I defend weakly and agrees when I bring new information. First ask how hard to push: constructive, firm or relentless. Then give me the complete updated instructions.
```

**Add a stakeholder dynamics file.** Do this when your decisions depend on who influences whom.

```
Interview me to create a Stakeholder Dynamics file for my Board of Advisors. Ask as a batch: the five to seven people or groups who matter most to my decisions; what each cares about, how they decide and what makes them resist; the tensions between them; how decisions really get made. Use only work behaviour. Write it under 500 words for the board's project knowledge.
```

**Give each member an independent mind with sub-agents.** Do this when you want the sharpest disagreement. In one chat, members read each other's answers and start to agree. A sub-agent is a separate AI worker with its own context, so each member forms an opinion alone. Use Claude Code; Cursor and Codex work the same way, and so does Cowork if yours offers sub-agents. Paste:

```
Run my Board of Advisors with each member as its own sub-agent. The board instructions and the work to review are below.
1. Launch one sub-agent per member. Give each only that member's profile, the work and my question.
2. Each returns its verdict in two or three sentences, the one change it would demand, and its confidence.
3. Show me every answer word for word.
4. Then summarise as the board instructions describe, quoting members where they disagree.
If this tool runs everything in one chat, say so and stop.
```

| What can go wrong? | What happens | How to fix it |
| --- | --- | --- |
| **Echo** | The summary turns disagreement into agreement | Ask for word-for-word answers and quotes |
| **Shared context** | A sub-agent sees another member's answer and agrees | Give each sub-agent only its profile, the work and the question |
| **Many members, one voice** | Thin profiles give near-identical answers | Add evidence to the profiles with the Your board instructions |

## Proof of work

In "what I built", name your board's members, one thing it caught that you missed, and what you changed.

For example: "Agency owner, RevOps lead, account manager, devil's advocate. They caught that lead scoring breaks with little data; I changed the scope of the feature brief."

## Related adventures

- **Stay Original with AI**: after the board tests the substance, make the deliverable carry your thinking.
- **Hard Conversations**: rehearse the customer or colleague conversation your board points to.
