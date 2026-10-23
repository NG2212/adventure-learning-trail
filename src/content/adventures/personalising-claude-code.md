---
slug: personalising-claude-code
emoji: 🎛️
icon: terminal
title: "Personalising Claude Code"
walkaway: "A lean Claude Code setup for one real repository: a short instructions file, guarantees in hooks and permission rules, and repeated work in a skill and a sub-agent"
category: Automate and delegate
levels: [Advanced]
professions: [Engineering]
audience: []
tool: Agentic coding tool
effort: Ambitious
outcome: Build something
pattern: INSTALL
wave: W2
slot: 29
next: [advanced-skill-patterns, audit-and-improve-your-ai-system]
source: "Adapted from the AppsFlyer R&D Managers track (appsflyer/Manager's OS workshops/exercises/rnd-exercise-1-architect-your-agent.md: separation of you / project / knowledge, diagnosis by layer; rnd-exercise-2-atomic-skills.md: skills as microservices, the production-grade skill checklist; rnd-exercise-3-automations-subagents.md: the custom sub-agent prompt and when a sub-agent earns its cost; speaker-notes-rnd.md: CLAUDE.md as the job description, permissions gate what it may do without asking). Claude Code facts from the verified Sep and Oct 2026 release-wave notes. Never edit the AppsFlyer originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 29 [Inbar 23])
- Kept from the AppsFlyer R&D track: separation of concerns (personal preferences in ~/.claude/CLAUDE.md, team facts in the repo file, procedures in skills), skills as microservices (one job, description = contract), the production-skill checklist folded into the Step 5 prompt, the custom sub-agent prompt (self-contained, return format with a length limit, lowest model tier that does the job), "a sub-agent earns its cost on heavy reading or a clean context", diagnosis by layer recast as the Step 5 checks.
- Cut: brain, archetypes, management skills, Cowork and Cursor paths, scheduled tasks and routines (Automation Done Right owns them), goal loops (The Loop owns them), command center, dispatcher (Advanced Skill Patterns owns skill routing).
- Added for Monday: one real repository on a branch; a "right home" table covering instructions file, skills and commands, sub-agents, hooks, permission rules and modes (incl. auto mode), memory and MCP; the lean rule (cheapest place that is still reliable); /context before and after; monday boards and Kremer in the MCP row; team vs personal settings split; managed settings come first.
- Scope decision: the full tour, but each mechanism sits inside the step where the reader uses it, so the rail stays at five steps.
- Prompts tell Claude Code to check its own current documentation for file formats and locations, because these change monthly.

Open items
- Keren Q4: who has Claude Code at Monday, on which plan, and whether managed settings restrict auto mode, hooks, MCP servers or plugins. Step 4 assumes hooks and permission rules are open to engineers.
- Auto mode as the starting mode on every plan (EAL refresh notes, Oct 5 2026): confirm on Monday's plan. Step 4 is written conditionally.
- Files in .claude/commands/ appearing as slash commands next to skills (commands and skills sharing one mechanism): hands-on check.
- Auto memory per project and the /memory command: confirm enabled for Monday's accounts (Keren Q7 covers Claude memory in general).
- Kremer and the monday MCP server in Claude Code: confirm the sanctioned path (Kremer or Monday's approved data MCPs) before the MCP row names them.
- Plugins: does Monday distribute team setups as plugins or through an internal marketplace? Go further item 1 is conditional.
- Labels: the seed lists "advanced Claude Code users" as a profession, which is outside the label set; used [Engineering]. Tool label is the seed's "Agentic coding tool", while the adventure is Claude Code only (Inbar list says "Claude Code"). Nufar to decide.
- next: advanced-skill-patterns and audit-and-improve-your-ai-system are provisional until those files exist.
- Prompt test in a fresh Claude Code session: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 🎛️ Personalising Claude Code

**Tune Claude Code to your repository and your team with a lean setup: every behaviour in the place where it works best.**

## Why this adventure

A Claude Code setup grows one fix at a time: a line in `CLAUDE.md` after each mistake, a few skills, "always allow" clicked whenever a prompt interrupts. After a few months the instructions file is long, some rules contradict each other, and all of it loads into every session.

Claude Code offers many controls, each the right home for a different kind of behaviour. This adventure tours them on one real repository and rebuilds your setup the lean way.

Already have a tuned setup? Aim for an instructions file you read in full, and every "always" enforced by a hook or a permission rule.

## The trail

1. **See what your setup loads today**, because you can only trim what you can see.
2. **Give each behaviour its right home**, so each control does the job it does best.
3. **Rewrite the instructions file lean**, because it loads in every session.
4. **Add guarantees with hooks and permission rules**, so important rules hold every time.
5. **Move repeated work into a skill and a sub-agent, then test**, on a real ticket.

## Before you start

Open Claude Code in a real repository you work in every week, on a new branch, so every change to the setup is a diff you can review.

## Step 1: See what your setup loads today

**Think first, without AI.** Close Claude Code. In a note, list the corrections you repeat ("use the shared logger"), the approvals you click in every session, and anything Claude Code must never do here.

Then open Claude Code in the repository, run `/context`, and note how much context the setup uses.

The `.claude` folder is hidden. On Mac, press Cmd+Shift+. in Finder. On Windows, open File Explorer and choose View → Show → Hidden items.

### Prompt: Audit what loads today

**What this does:** reads every personalisation file for this repository, rates each item, and adds your list as gaps.

Paste the prompt below into Claude Code, and give it your note when it asks.

```
Audit how Claude Code is personalised for this repository. Check the current Claude Code documentation for where each kind of setting lives, then read everything that applies: CLAUDE.md or AGENTS.md at every level including my home folder, the .claude folders (settings, skills, commands, agents), hooks, permission rules, MCP servers and memory files.

Report one table: item, location, what it does, loads every session (yes or no), verdict (keep, cut, move or fix). Flag contradictions, duplicates, rules the code already makes obvious, and rules in capitals or written as threats.

Then ask me for my list of repeated corrections and approvals, and add each one as a gap. Change nothing yet.
```

## Step 2: Give each behaviour its right home

The rule for a lean setup: **put each behaviour in the cheapest place that still makes it reliable.** Only the instructions file and memory load in every session; a hook runs as code.

| What you want | Where it lives | Example in a Monday repository |
| --- | --- | --- |
| Facts Claude cannot read from the code | `CLAUDE.md` or `AGENTS.md` in the repository; `~/.claude/CLAUDE.md` for personal preferences | The test command, the service boundaries |
| A procedure you repeat | Skill in `.claude/skills/`, also started with `/` and its name | Release notes from merged PRs, for your team's monday board |
| Heavy reading or an independent review | Sub-agent in `.claude/agents/` | A reviewer that checks a diff against your conventions |
| Something that must happen every time | Hook | Run the linter after each edit |
| What Claude may do alone, must ask about, or must never do | Permission rules and the permission mode | Ask before `git push`; never read `.env` files |
| Lessons learned while working | Memory | A flaky test and its workaround |
| Access to another system | MCP server | monday boards; internal data through Kremer |

### Prompt: Plan the right home for each behaviour

**What this does:** turns the audit table into a plan with one home per behaviour.

Stay in the same session and paste the prompt below.

```
Use the audit table in this chat. Give every row marked cut, move, fix or gap one home:
- Instructions file: repository facts Claude cannot read from the code (loads every session)
- Skill: a repeated procedure (loads when it runs)
- Sub-agent: heavy reading or an independent review, returning a short summary
- Hook: must happen every time (runs as code)
- Permission rule: what Claude may do alone, must ask about, or must never do
- Memory: lessons learned while working
- Delete: already covered by the code, the defaults or another row

Where two homes fit, ask me, one question at a time. Show the plan as a table: behaviour, home, file path, reason. Stop and wait for my approval.
```

## Step 3: Rewrite the instructions file lean

A lean instructions file holds what a strong new teammate would need on day one and could not find in the code.

### Prompt: Rewrite the instructions file

**What this does:** rewrites the instructions file from your plan and shows what moved where.

Stay in the same session and paste the prompt below.

```
Rewrite this repository's instructions file from the plan I approved in this chat. Keep the name AGENTS.md if the repository uses it.

Rules:
1. Only what Claude cannot learn from the code: build, test and lint commands, architecture boundaries, conventions that differ from the defaults, what to avoid and why.
2. One line per rule, with a short reason, in plain sentence case. Current models follow instructions closely and over-apply rules written in capitals or as threats.
3. Link longer documents by file reference instead of copying them.
4. Procedures go to skills; guarantees go to hooks and permission rules.

Show the old and new line counts and what moved where. Wait for my approval before you save.
```

Read every line and delete any you would skip.

## Step 4: Add guarantees with hooks and permission rules

An instruction is advice the model weighs. Hooks and permission rules are enforced by Claude Code itself, so they hold in long sessions and in every permission mode.

Press Shift+Tab to switch permission modes. If your Claude Code starts in auto mode, a classifier approves routine actions while your deny rules and hooks still apply, so the guarantees you build here make auto mode safe. Monday's managed settings, where they exist, come first.

### Prompt: Set up hooks and permission rules

**What this does:** writes your permission rules and hooks, splits team and personal settings, and tests each hook.

Stay in the same session and paste the prompt below.

```
Set up the guarantees from the plan I approved in this chat. Check the current Claude Code documentation for the settings format and the hook events first.

1. Permission rules: allow the safe commands I approve in every session; ask before anything that changes shared state (push, deploy, database changes); deny reading secrets and environment files.
2. Hooks: one for each "every time" row in the plan, such as running the formatter after each edit. Keep each hook short and fast, described in one line.
3. Team rules go in the project settings file committed to git; my preferences go in the local settings file.

Show every file you will change and wait for my approval. Then trigger each hook once and show me the result.
```

## Step 5: Move repeated work into a skill and a sub-agent, then test

Treat a skill like a microservice: one job, with its description as the contract that decides when it runs. A sub-agent earns its cost on heavy reading or work that needs a clean context, such as a review.

### Prompt: Build the skill and the sub-agent

**What this does:** interviews you for one skill, then writes it and one sub-agent into the repository.

Stay in the same session and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Build one skill and one sub-agent from the plan I approved in this chat. Check the current Claude Code documentation for both file formats first.

Skill: interview me one question at a time about the words I use to start the task, my steps, the output, what to check before showing me, and the last time it went wrong. Write a description that opens with my trigger words, then steps, an output template and gotchas.

Sub-agent: a description that states exactly when to delegate, self-contained instructions (it never sees this chat), only the tools it needs, a return format with a length limit, and the lowest model tier that does the job well.

Save both in this repository's .claude folder after my approval, then remind me to start a new session.
```

Start a new session, give Claude Code a real ticket from your backlog, and check four things:

| Check | How you can tell |
| --- | --- |
| Conventions hold without a reminder | The first edits follow them |
| Hooks fire | Hook output appears after an edit |
| Fewer, better permission prompts | Compare with your Step 1 list |
| Less context used | `/context` compared with your Step 1 note |

When a check fails, fix the home it belongs to and run the ticket again. You are done when a real ticket goes through with none of the corrections on your Step 1 list.

## Go further

**Share the setup with your team.** Do this so every teammate starts from what the team has learned. Commit the instructions file, project settings, skill and sub-agent. If your team distributes setups as a plugin, bundle them into one.

**Audit again after every model upgrade.** Do this because a new model reads the same instructions differently. Rerun the Audit what loads today prompt from Step 1 and delete what the new model no longer needs.

**Review what Claude Code remembers.** Do this because memory can keep a lesson after the code has changed. Once a month, open it with `/memory` and ask Claude Code to sort every entry into keep, promote (into the instructions file, a skill or a hook) or delete.

## Proof of work

In "what I built", name the repository, the line counts of your instructions file before and after, and one behaviour you moved into a hook, a skill or a permission rule.

For example: "Automations service: CLAUDE.md went from 140 lines to 35. 'Always run lint' became a hook; release notes became a skill that drafts them for our team's monday board."

## Related adventures

- **Advanced Skill Patterns**: skills that carry their own knowledge, run code and work together.
- **Audit and Improve Your AI System**: the same lean audit across every AI tool you use.
