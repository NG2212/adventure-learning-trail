---
slug: agent-teams-and-orchestration
emoji: 🎼
icon: network
title: "Agent Teams and Orchestration"
walkaway: "Your AI org chart and one multi-agent workflow running"
category: Automate and delegate
levels: [Advanced]
professions: [Everyone]
audience: []
tool: Agentic coding tool
effort: Ambitious
outcome: Build something
pattern: LOOP
wave: W4
slot: 26
next: [audit-and-improve-your-ai-system, your-team-s-ai-blueprint]
source: "Adapted from summer-challenge/labs/assemble-your-crew.md (inventory before new hires, status per agent, one real hire, the delegation log stretch; every cross-sell dropped); supertraining/from-loops-to-org-charts/giveaways/graph-designer.md and reference-card.md (the five signals, the four-question check, the fresh-context reviewer as the first split, handoffs as contracts, model per agent, one human approval point, the honest cost paragraph); multiplayer-sprint/ and the Multiplayer AI Operator's Cut (podcast/multiplayer-episode/: private agent, shared knowledge and skills, team agent; the four team-agent kinds, Go further only). Evaluation levels (end to end, trajectory, component) from Nufar's approved Evaluate at Three Levels. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 26 [Inbar 26])
- Kept from Assemble Your Crew: map what already runs before designing anything, status per existing agent (works as is / needs improvement), reuse before building, one new agent built and tested on real work, the delegation log (Go further), humans who touch the work stay on the chart.
- Kept from the loops/graphs webinar (Nufar's Frontier Lab, Aug 2026): the five signals for splitting work across agents, the four-question check with its 0-1 / 2-3 / 4 verdicts, "the first agent to add is almost always a fresh-context reviewer", handoffs as named packages, model tier per agent, one approval point where consequences leave your hands, the honest cost paragraph. Signal names ("rubber stamp", "serial agony") replaced by plain descriptions for non-native readers.
- Kept from Multiplayer: the team-agent vocabulary and the four team-agent kinds (Expert, Common-work, Bridge, Chief of Staff), one Go further paragraph only, because team agents belong to Your Team's AI Blueprint.
- Cut: home crews, emoji status marks, the 2-week success definition, the "hire build buddy" prompt (folded into the build prompt), canvas and code tiers of the implementation ladder (n8n, LangGraph), the Goal Card (The Loop owns it), the five team-agent build decisions, all program cross-sells.
- Added for Monday: Inbar's comment answered in the hook (assumes the person already runs more than one agent or sub-agent; otherwise The Loop first); a worked QBR example on monday boards and Kremer; Monday's customer-data rule as clarified 22 Oct; a run log built into the orchestration skill; "sub-agent role file" stated explicitly in the build prompt (Nufar's folder agent vs sub-agent rule).

Open items
- Keren Q4: who has Claude Code, Cursor and Codex at Monday. The adventure assumes the person has at least one.
- Cursor: role files in .cursor/agents/ verified Aug 2026 (reference card); hands-on check on Monday's Cursor plan.
- Codex: how Codex defines sub-agents today (role files or parallel threads) is uncertain; the Codex callout is written conditionally and the prompts tell the tool to check its own documentation.
- Go further "different model as reviewer": depends on which model providers Monday's Cursor or Codex setup allows; written conditionally.
- Kremer access from Claude Code / Cursor / Codex: the worked example names it in passing; confirm the sanctioned path (Kremer or Monday's approved data MCPs) for agentic coding tools.
- Labels: the seed lists "Advanced users" as a profession, which is outside the label set; used [Everyone] with level [Advanced] (design notes: advanced users, not only engineering or product). Pattern kept as the inventory's LOOP.
- next: slugs provisional until The Loop exists (it is linked from the hook and Related adventures by name).
- Prompt test in a fresh Claude Code session: pending (playbook step 4).
-->

# 🎼 Agent Teams and Orchestration

**Design the AI org chart for one piece of work, then run it as a multi-agent workflow on real work.**

## Why this adventure

Orchestration means several AI agents work on one piece of work, each with its own job. A lead agent, the orchestrator, hands out the work, collects the results and decides the next step. Done well, independent parts run in parallel, a reviewer with a fresh view checks the work, and you approve once, before anything leaves your hands. A team also multiplies token use, so every agent must earn its place.

This adventure assumes you already run more than one agent or sub-agent. If you work with one agent at a time, start with The Loop, which teaches you to give one agent a goal and a definition of done.

## The trail

1. **Map the agents you already run and pick one piece of work**, because the best team reuses what works.
2. **Check that the work needs a team**, because one agent with a clear goal is often enough and costs less.
3. **Design the org chart**: which agent does what, how they hand off, who checks whom.
4. **Build it and run it on real work**, then check the result, the path and each agent.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Open Claude Code, Cursor or Codex in the folder where this work lives: a repository, or a working folder with the inputs.

## Step 1: Map the agents you already run and pick one piece of work

**Think first, without AI.** Close the tool. In a note, list the agents, sub-agents, skills and automations you run today and what each does. Then write two or three repeated pieces of work that take many steps, such as QBR prep for several accounts, release notes from many merged PRs, a competitive review or an incident write-up.

Agent files sit in hidden folders such as `.claude` and `.cursor`. On Mac, press Cmd+Shift+. in Finder. On Windows, open File Explorer and choose View → Show → Hidden items.

### Prompt: Map the agents you already run

**What this does:** reads the agent files here, adds the agents from your note, and interviews you about the work.

```
Help me map the AI agents I already run, so I can design a team for one piece of work.

Check this tool's current documentation for where instructions files, sub-agent role files and skills live, and read them in this folder and my home folder. Then ask for my note and add the agents that live elsewhere, such as Cowork projects, monday agents or automations.

Show one table: agent, where it lives, its job, what it receives and returns, and status (works as is, or needs improvement).

Then ask which piece of work I want to give a team. Ask one question at a time until you know its steps, inputs, the people who touch it, who receives the result, and where it breaks today. If I answer vaguely, ask for the last real example. Design nothing yet.
```

Keep this session open for the next prompts.

## Step 2: Check that the work needs a team

A team is worth its cost when one agent shows at least one of these signals on the work you picked in Step 1.

| What do you see? | What a team adds |
| --- | --- |
| The agent approves its own work: its checks pass, and you still find problems | A reviewer in a fresh context, who judges the work without the writer's reasoning |
| One agent juggles several roles and mixes up their instructions | One agent per role, each with only its own instructions |
| Parallel work runs one at a time, such as five accounts | Several agents at the same time, and one that merges the results |
| The finish line keeps changing halfway through | Two jobs, each with its own goal |
| More turns stop helping: quality stays flat | A specialist for the weak part |

Answer four questions yourself, yes or no. Does each step need its own context? Does the work split into parallel parts that merge back? Can you draw who hands what to whom in advance? Did the finish line change during the work? Zero or one yes: keep one agent with a sharp goal, as in The Loop. Two or three: build a small team. Four: build a standing team. The first agent to add is almost always a fresh-context reviewer.

## Step 3: Design the org chart

### Prompt: Design the org chart

**What this does:** asks which signals you see, then designs the smallest team that fixes them, with agent cards, handoffs and your approval point.

```
Design an agent team for the piece of work in this chat, reusing agents from the agent map before proposing new ones.

First ask which problems I see when one agent does this work: it approves its own work; it juggles several roles; parallel parts run one at a time; the finish line keeps changing; more turns stop helping. Design the smallest team that fixes them.

Rules:
- One job per agent. People who touch the work stay on the chart.
- Each agent sees only what its step needs.
- Every handoff is a short, named package, such as "a draft plus the review checklist", never the whole conversation.
- A reviewer in a fresh context checks early.
- Each agent uses the lowest model tier that does its job well.
- An orchestrator (the main session) hands out work, collects results and decides the next step.
- I approve once, before anything is sent, published or changed for other people.

Deliver:
1. The org chart as a mermaid flowchart and in plain text.
2. A card per agent: name, job, status (reuse, improve or new), model tier, what it receives and returns, tools it may use.
3. Every handoff: exactly what passes.
4. The finish line, as checks a person or a script can confirm.
5. My approval point and why it sits there.
6. One honest paragraph: what this team costs in tokens and upkeep compared with one agent.
Stop and wait for my approval.
```

For example, a customer success manager preparing QBRs for five accounts approved this chart: five account researchers on Haiku, in parallel, each reading one account's monday board items and Salesforce history through Kremer and returning a one-page fact sheet; a writer on Opus that turns the fact sheets into QBR summaries; a new fresh-context reviewer that checks each summary against her QBR checklist and returns Ready or Fix. She approves before anything goes to the QBR board.

Monday's own data about customers is fine: Salesforce through Kremer, support tickets Monday wrote, feedback Monday collected. Data that customers uploaded to their own monday boards never goes into Claude, Cursor or Codex.

## Step 4: Build it and run it on real work

### Prompt: Build the team

**What this does:** writes the new agents as sub-agent role files and the orchestration as a skill with a run log, for your approval.

```
Build the agent team I approved in this chat. Check this tool's current documentation for how sub-agents and skills are defined, then:

1. Create each new or improved agent as a sub-agent role file that the main session calls: when to use it, self-contained instructions (it never sees this chat), only the tools it needs, its model tier, and a return format with a length limit.
2. Write the orchestration as a skill: the steps in order, the agent for each step, which steps run in parallel, the handoff packages, the finish line and my approval point.
3. End every run with a run log: each agent, what it received and returned (one line each), and what the reviewer sent back.

Show me every file and wait for my approval. Then save them in this folder and remind me to close and reopen the tool.
```

Close and reopen the tool so it finds the new skill and sub-agents. Then ask for the real work in your own words and name the skill.

**In Claude Code:** sub-agents live in `.claude/agents/` in this folder or `~/.claude/agents/` for all projects; `/agents` lists them.

**In Cursor:** role files live in `.cursor/agents/`.

**In Codex:** if your version has no sub-agent role files, ask Codex to run the Step 3 agent cards as parallel threads.

Check the run at three levels, starting with the run log:

| Level | What to check |
| --- | --- |
| The result | Does it pass the finish line? Would you send it as it is? |
| The path | Did each agent receive only its package? Did parallel parts run at the same time? Did the reviewer send work back? |
| Each agent | Which output was weakest? Fix that agent's role file and run again. |

Name each problem exactly: "the researcher returned two pages; the limit is one". You are done when the workflow runs on a second real piece of work and you approve the result with only small edits.

## Go further

**Keep a delegation log.** Do this to learn which agents earn their place. After each run, add one line to a note or a monday board: the work, the agents that ran, what you changed. After two weeks, decide for each agent: keep it, rewrite its role file, or retire it.

**Share one agent with your team.** Do this when teammates each run their own version of the same agent, and one team agent everyone uses would serve them better. Team agents come in four kinds: the Expert (one person's know-how, for everyone), the Common-work agent (one shared way to do recurring work), the Bridge (work that flows between roles, such as a customer agent) and the Chief of Staff (the team's operating teammate).

## Proof of work

In "what I built", name the piece of work, the agents on your org chart (and which one is new), and one thing the reviewer or the run log showed you.

For example: "QBR prep for five accounts: five researchers in parallel, a writer and a new fresh-context reviewer. The reviewer caught a renewal date that the board and Salesforce disagreed on."

## Related adventures

- **The Loop**: one agent with a goal and a definition of done, the base for every agent on your chart.
- **Personalising Claude Code**: where role files, skills and hooks belong.
- **Your Team's AI Blueprint**: decide which agents and skills your team shares.
