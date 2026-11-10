---
slug: agent-teams-and-orchestration
emoji: 🎼
icon: network
title: "Multi-Agent Workflows"
walkaway: "One large piece of recurring work designed as a graph and running on real work: written handoffs, a capped reviewer, one approval point and a run log in the backend you chose"
category: Automate and delegate
levels: [Advanced]
professions: [Everyone]
audience: []
tool: Agentic coding tool
effort: Longer
outcome: Build something
pattern: INSTALL
wave: W4
slot: 26
review: ready
video: /videos/agent-teams-and-orchestration.mp4
next: [personalising-claude-code, audit-and-improve-your-ai-system]
source: "Rebuilt 2026-11-10 from Nufar's first-principles review (videos/agent-teams-and-orchestration/notes.md). Method adapted from supertraining/from-loops-to-org-charts/giveaways/graph-designer.md and reference-card.md: the five signals, the four-question check with its 0-1 / 2-3 / 4 verdicts, the fresh-context reviewer as the first addition, handoffs as contracts, model tier per agent, one human gate where consequences leave your hands, the GRAPH SPEC format and the honest cost paragraph. From summer-challenge/labs/assemble-your-crew.md: reuse what you already run before building, people stay on the chart. Evaluation at three levels (the result, the path, each agent) from Nufar's approved Evaluate at Three Levels. Every product claim comes from content/research/multi-agent-facts-2026-11-10.md (code.claude.com sub-agents, workflows, agent teams, costs and routines docs; cursor.com/docs subagents and automations; learn.chatgpt.com Codex subagents; developer.monday.com MCP client docs). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Rebuilt 2026-11-10 (Nufar's first-principles review, videos/agent-teams-and-orchestration/notes.md). The Oct 22 org-chart version and its design notes are retired.

Her decisions applied
- Topic is graph engineering, or multi-agent workflows: one piece of work designed as a graph of steps, each owned by a sub-agent, a skill or script, or a person; handoffs as written contracts; fan-out and merge; a fresh-context reviewer with at most two fix rounds; one approval point; a run log. Title "Multi-Agent Workflows", slug kept.
- No loops anywhere: no mention of loops or of moving up from one agent, in the hook, Step 1, Related adventures or next. The webinar's "stay a loop" verdict became "one agent with a sharp goal and a clear finish line".
- Note 1, the shared backend is the participant's choice: Step 2 lays out a monday board, a Slack channel and files in a folder as three equal rows (where state lives, the run log, how you approve, best when), and the design prompt asks which one. monday MCP named for Claude Code and Cursor (research: official client page). Slack worded as the tool's Slack connector or MCP server, plus Cursor Automations listing Slack as a trigger and tool; the build prompt tells the tool to check its current documentation.
- Note 2, an explicit decision as its own step: Step 1 is prompt-free (think first, the five signals table, the four questions answered alone, an outcome table). Zero or one yes: build one agent well, or choose other work. Two or three: a small workflow. Four: a standing workflow.
- Two ways to run a graph: orchestrated, wired, mixed, the participant chooses (Step 2 table, asked in the design prompt). Research caution carried: a wired Claude Code workflow takes no input mid-run, so the approval sits in the backend or between two runs.
- Cut: the agent inventory step (one reuse line inside the design prompt; Audit and Improve owns the inventory), the QBR example, native monday agent-to-agent chains, the four team-agent kinds, the delegation log and team-agent Go further items.
- Worked example: a launch brief (three researchers in parallel, a writer, legal, design and data reviewers in parallel with at most two fix rounds, approval on the launch board before anything is posted).
- Go further: a backend event starts the workflow (pilot, research preview). The agent-team debate item was cut on Nufar's word 10 Nov (experimental; unknown whether Monday has it).
- pattern changed from LOOP to INSTALL (internal field; decide, design, build, run matches the INSTALL skeleton).

Judgment calls for Nufar
- GRAPH SPEC kept by name with her part names (diagram, node cards, edge contracts, finish line, human gate, honest paragraph). THE BUILD BLOCK became the Step 4 prompt instead of a spec part; a backend-and-run-mode part was added, because the build depends on it.
- Token line: the only current multiplier in the research is agent teams at about 7x a standard session (Claude Code costs doc, fetched 10 Nov 2026), and it left the page with the agent-team item. Step 5 states the cost in plain words and points to /usage; the June 2025 4x and 15x figures are left out.
- Kept the skills pointer and the hidden-folder line (learnings rules) although the audience is advanced; Personalizing Claude Code dropped both. Delete them here too if she prefers the Personalizing precedent.
- Engineering and knowledge-work examples appear in Step 1; the worked example is a launch brief only (her brief asked for one, kept short).

Open items
- Keren Q4: who has Claude Code, Cursor and Codex at Monday, and whether managed settings allow MCP servers and dynamic workflows. The page assumes at least one tool.
- monday MCP at Monday: confirm it is approved and connected for Claude Code and Cursor; whether Codex can reach it is not in the research.
- Slack from Claude Code, Cursor and Codex: which connector or MCP server Monday sanctions, and whether a thread reply can serve as the approval signal. The research covers Cursor Automations only.
- Dynamic workflows: the docs page shows no maturity label; confirm it is enabled in /config at Monday.
- Go further event trigger: cloud scheduled task /fire is a research preview with a beta header; no tested monday-to-fire recipe exists. Pilot before promoting.
- Kremer from agentic coding tools: named in passing only; confirm the sanctioned path.
- Sibling links renamed to Multi-Agent Workflows in personalising-claude-code.md and the-loop.md (10 Nov); upload them with this page.
- Prompt test in a fresh Claude Code session: pending (playbook step 4).

10 Nov reviewer fixes applied (Yoni, Mira).
-->

# 🎼 Multi-Agent Workflows

**Design one large piece of recurring work as a graph of steps, choose where it lives and how it runs, then build it and run it on real work.**

## Why this adventure

Which piece of your recurring work involves the most roles, for example a launch brief or a release?

A multi-agent workflow designs that work as a graph of steps, each owned by a sub-agent, a skill or script, or a person, with a written contract between steps: what passes, in what format. A sub-agent is a helper with its own instructions that starts with a blank memory, so it sees only what you hand it; that blank start is what fresh context means. Parallel parts merge, a fresh-context reviewer checks the work, and you approve once, before anything leaves your hands. Every run leaves a log.

This adventure is for heavy users of Claude Code, Cursor or Codex, engineers and knowledge workers alike.

## The trail

1. **Decide: one agent or a workflow**, because every extra agent costs tokens and upkeep.
2. **Choose where it lives and how it runs**: its backend, and who routes the work.
3. **Draw the graph**: steps, owners, handoffs, a reviewer and one approval point.
4. **Build it** in Claude Code, Cursor or Codex.
5. **Run it on real work and check it**: the result, the path and each agent.

## Before you start

If you have never built a skill, start with **Skills: When, How and How Well**.

## Step 1: Decide: one agent or a workflow

**Think first for yourself, without AI.** Pick one large piece of recurring work that involves several roles, for example a launch brief, a release, an incident review or a quarterly review. Messy is fine.

- What are its steps, and who or what does each one today?
- Which parts could run at the same time?
- Who checks the work, and where do problems slip through?
- Where does the result leave your hands?

Now look for these signals in how one agent does it.

| What do you see? | What a workflow adds |
| --- | --- |
| The agent approves its own work, and you still find problems | A reviewer in a fresh context, who judges without the writer's reasoning |
| One agent juggles several roles and mixes up their instructions | One agent per role, with only its own instructions |
| Parallel parts run one at a time, for example three sources or five services | Several agents at once, merged in one step |
| The finish line changes partway through, because it is really two jobs | Two steps, each with its own goal and finish line |
| More rounds of asking the agent to improve stop helping: quality stays flat | A specialist for the weak part |

Then answer four questions yourself, yes or no. Does each step need its own context? Does the work split into parallel parts that merge back? Can you draw who hands what to whom in advance? Is it really two jobs, so the finish line changes partway through?

| How many yes answers? | What to build |
| --- | --- |
| Zero or one | **One agent** with a sharp goal and a clear finish line. Write both now, one sentence each, then build that agent well, for example in the Personalizing Claude Code adventure. |
| Two or three | **A small workflow** of a few steps. |
| Four | **A standing workflow** that runs every time this work comes in. |

## Step 2: Choose where it lives and how it runs

Every workflow needs a backend: one shared place for its state, run log and your approval. Choose the one where the work and its people already are.

| Backend | Where do state and log live? | How do you approve? | Best when |
| --- | --- | --- | --- |
| **A monday board** | One item per run, a status column per step, an update from each step | You change a status to Approved | The work is tracked on a board, or others follow it. monday documents its MCP for Claude Code and Cursor only; check with IT that it is approved for your tool |
| **A Slack channel** | One thread per run, a post from each step | You reply in the thread | Your reviewers already talk there |
| **Files in a folder** | A state file, an output file per step, a run-log file | You edit the status line in the state file | You work alone, or want every run saved as files you can reopen |

Monday's own data about customers is fine, for example Salesforce through Kremer. Data that customers uploaded to their own monday boards never goes into Claude, Cursor or Codex.

Then choose who routes the work.

| How it runs | What happens | Best when |
| --- | --- | --- |
| **Orchestrated** | A lead agent routes the work as it goes | The path depends on what each step finds. Flexible, costlier in tokens and harder to audit |
| **Wired** | Fixed in advance: a sequence of skills, or in Claude Code a dynamic workflow script with structured handoffs | The same steps run every time. Predictable and cheaper. A Claude Code workflow takes no input mid-run, so a second run continues after your approval |
| **Mixed** | Fixed steps, with one step where a lead agent decides what comes next | Most steps are fixed, and one part needs judgment |

## Step 3: Draw the graph

### Prompt: Design my workflow as a GRAPH SPEC

**What this does:** the AI interviews you about your thoughts, then designs the smallest graph that fixes the signals you saw.

Open a new session in your tool, in the folder where this work lives, and paste the prompt below. Steps 4 and 5 continue in this session. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me design a multi-agent workflow for one large piece of recurring work. Ask me to brain dump or paste all my thoughts on this before you start. If I already answered a question earlier in this chat, don't ask it again.

Then ask one question at a time about what is missing: steps, inputs, who touches and receives the work, where it breaks, and which agents, skills or scripts I already run. Ask me to paste any skills or project instructions I use outside this tool, for example in a Claude project, because you cannot see them. Do not choose the work, narrow it, or decide what good means.

Then ask me to choose a backend for state, run log and approval (a monday board, a Slack channel, or files in this folder) and a run mode: orchestrated (a lead agent routes work as it goes), wired (the flow is fixed in advance) or mixed (fixed steps, with one step where a lead agent decides what comes next).

Rules:
- Each step has one owner: a sub-agent, a skill or script, or a person. Reuse what I run.
- Add only steps my problems require; the first is usually a reviewer in a fresh context.
- Each step sees only what it needs. Each handoff is a written contract: what passes, in what format.
- Parallel parts merge in one step.
- The reviewer returns Ready or Fix; after two fix rounds it stops and flags me.
- A failed step retries once, then flags me.
- A step that posts for others checks the run log first, so a rerun never posts twice.
- Each agent gets the cheapest model that does its job well.
- One approval point, before anything is sent, published or changed for others.
- A dry run writes to local files before anything touches the real board or channel.

Deliver a GRAPH SPEC:
1. The diagram: numbered steps with arrows, plus diagram code I can paste into a viewer.
2. Node cards: owner, job, model, receives, returns, tools, on failure.
3. Edge contracts: what passes on each handoff.
4. The finish line: checks a person or a script can confirm.
5. The human gate: my approval point and why there.
6. What each step writes to the backend, including a run log.
7. An honest paragraph: tokens and upkeep compared with one agent.
Stop and wait for my approval.
```

For example, a product marketing manager's launch brief: three researchers in parallel (the product spec, the feedback Monday collected, competitor pages), each returning a one-page fact sheet; a writer who merges them; legal, design and data reviewers in parallel, with at most two fix rounds; and nothing posted until she sets the item to Approved on the launch board.

An engineer's release has the same shape: a migration check, the changelog and a docs diff in parallel, a release-notes writer, a fresh-context reviewer, and approval in the release channel before anything is posted.

## Step 4: Build it

### Prompt: Build my workflow

**What this does:** builds the agents, orchestration and backend connection from your approved GRAPH SPEC.

Stay in the same session and paste the prompt below.

```
Build the workflow from the GRAPH SPEC I approved in this chat. First check this tool's current documentation for how sub-agents, skills and workflows are defined, and how it connects to my backend.

1. Each new agent becomes a sub-agent role file: when to use it, self-contained instructions (it never sees this chat), its model, a return format with a length limit, and only the tools it needs where this tool allows a tool list per agent.
2. The orchestration follows my run mode. Orchestrated or mixed: one skill with the steps, parallel parts, handoff contracts, the two-round reviewer cap and the approval point. Wired: the same as a fixed sequence, or in Claude Code a dynamic workflow script with a structured output for every handoff.
3. The run stops at the approval point and tells me exactly what to do (set the item to Approved, reply in the thread, or change the status line in the state file) and the exact words that resume it. The next run checks the approval in the backend first. Every backend write carries a run ID.
4. Connect the backend: the monday MCP for a board, this tool's Slack connector or MCP server for a channel, or a state file in this folder. If a connection is missing, walk me through setting it up in plain steps, then test it by reading one item before you build.
5. A hook, the workflow's own log step or a script step writes the run log, so it never depends on an agent remembering: one line per step with what it received and returned, and tokens if the tool reports them.

Show every file and tell me the exact words to start a run. Wait for my approval, then save them and remind me to close and reopen the tool.
```

Close and reopen the tool so it finds the new skill and sub-agents. The files sit in hidden folders: on Mac, press Cmd+Shift+. in Finder; on Windows, choose View → Show → Hidden items in File Explorer. Commit the agent and workflow files and review changes like any other code or document.

**In Claude Code:** sub-agents live in `.claude/agents/`, dynamic workflows in `.claude/workflows/`, run as `/name` commands.

**In Cursor:** sub-agents live in `.cursor/agents/` and can be set to read-only, the one tool limit Cursor offers per agent. Parallel sub-agents work on the same files, so ask each to write to its own file, or ask for isolation.

**In Codex:** each custom agent is one TOML file in `.codex/agents/` and uses the main thread's MCP servers and sandbox.

## Step 5: Run it on real work and check it

After the dry run, start a run on real work with the words the build gave you. At your approval point it stops and tells you what to do: set the item to Approved, reply in the thread, or change the status line in the state file. Then start the next run with the words it gave you. It checks your approval in the backend first; every backend write carries a run ID. Check each run at three levels, starting with the run log.

| Level | What to check |
| --- | --- |
| The result | Does it pass the finish line? Would you send it as it is? |
| The path | Did each step receive only its contract? Did parallel parts run at the same time? Did the reviewer send work back, and did it stop after two rounds? |
| Each agent | Which output was weakest? Fix that agent's role file and run again. |

Name each problem exactly: "the competitor researcher returned two pages; the limit is one". Check the cost too: every step reads its own context, so a workflow uses more tokens than one agent (in Claude Code, `/usage` shows it). If a step does not improve the result, remove it.

You are done when the workflow runs on a second real piece of work and you approve the result with only small edits.

## Go further

**Start the workflow from a backend event** when the work arrives on its own, for example a monday item moving to Ready for brief. A Claude Code cloud scheduled task can start from an API call that needs a token and a beta header, so a monday webhook likely needs a small relay. The task writes back through the monday MCP. It is a research preview: pilot it on a test board. In Cursor, Automations can start from a Slack message or a webhook.

## Proof of work

In "what I built", name the piece of work, the steps and owners, your backend and run mode, and one thing the reviewer or run log showed you.

## Related adventures

- **Personalizing Claude Code**: build one agent well.
- **Advanced Skill Patterns**: sharpen the skills that become steps.
- **Audit and Improve Your AI System**: map what you already run.
