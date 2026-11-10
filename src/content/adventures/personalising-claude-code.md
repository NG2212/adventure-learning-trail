---
slug: personalising-claude-code
emoji: 🎛️
icon: terminal
title: "Personalizing Claude Code"
walkaway: "A lean Claude Code setup for your project folder: a short instructions file, a consolidated skill set, guarantees in hooks and permission rules, and specialist sub-agents, with before-and-after numbers from one real task"
category: Automate and delegate
levels: [Advanced]
professions: [Everyone]
audience: []
tool: Agentic coding tool
effort: Longer
outcome: Build something
pattern: INSTALL
wave: W2
slot: 29
review: ready
video: /videos/personalising-claude-code.mp4
next: [advanced-skill-patterns, audit-and-improve-your-ai-system]
source: "Rebuilt 2026-11-10 from Nufar's review (videos/personalising-claude-code/notes.md). Every Claude Code command, setting and behavior comes from the verified facts file content/research/claude-code-facts-2026-11-10.md: the code.claude.com docs (best-practices, memory, skills, sub-agents, hooks, commands, costs, context-window, permission-modes, plugins, features-overview), the Claude Code CHANGELOG, Anthropic's prompting guides for its current models on platform.claude.com, and anthropic.com/research/claude-code-expertise (writing and data analysis share). From the AppsFlyer R&D Managers track, only the sub-agent build (appsflyer/Manager's OS workshops/exercises/rnd-exercise-3-automations-subagents.md: self-contained instructions, a return format with a length limit, the lowest model tier that does the job, a sub-agent earns its cost on heavy reading or a clean context) and the permissions framing (speaker-notes-rnd.md: what it may do alone, must ask about, must never do). Never edit the AppsFlyer originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Rebuilt 2026-11-10 from Nufar's 10 Nov review (videos/personalising-claude-code/notes.md). The earlier "right home" tour (see what loads, give each behavior its right home, rewrite lean, hooks, skill and sub-agent) is retired with its design notes.

Decisions (orchestrator, for Nufar's review)
- Scope: every advanced Claude Code user, in a repository or a work folder (product, ops, data, marketing, research, writing). Every table and example carries one engineering and one knowledge-work case. "Project folder (a repository or a work folder)" throughout. Anthropic's research line (writing and data analysis roughly doubled to about 20% of sessions) sits in Why this adventure. professions: [] so everyone sees it.
- Advanced audience: no explanation of skills, hooks, sub-agents or CLAUDE.md; no Skills: When, How and How Well pointer; no hidden-folder instructions.
- Structure: Claude Code's own checks first, our audit on top. Step 1 is prompt-free (/doctor prompt-audit, /usage on 7 days, /context all, /skill-doctor), outputs kept in the session. Step 2 opens with a think-first block in the 23 Oct form, then one audit prompt covering what the built-ins miss (hooks, MCP servers, permission rules), skill overlap across personal, project, plugin and synced copies, older-model instructions, and a token audit; it ends with one verdict table and one plan with one home per item, and stops.
- The audit saves the approved plan and a baseline (lines, skills count, context before typing, top token consumers, costliest tasks) to .claude/setup-audit.md, so Steps 3 to 5 survive compaction and Step 5's new session can compare against real numbers. This replaces the old "remember a number" line.
- Step 3 rewrites the instructions file (under 200 lines, only what the files cannot tell Claude, plain lines, path-scoped rules) and consolidates skills (merge, rename, retire; use case first; skillOverrides name-only; disable-model-invocation on side effects) in one prompt with before-and-after counts and an approval gate. No restart there: the changed skills load in Step 5's new session.
- Step 4: zero-exception rules only; the hook pitfalls (exit code 2, onFailure block, the if field, no defined order, delete preference hooks) are inside the prompt; a Stop hook verifier for both audiences; permission rules in three tiers; auto mode as the default, made safe by deny rules and hooks; Monday's managed settings first; /permissions Recently blocked; team rules in project settings, personal in local settings; each hook triggered once.
- Step 5 doubles down on sub-agents (her ask): a researcher and a fresh-context reviewer, each with a when-to-delegate description, self-contained instructions, a tools allowlist, the lowest model tier that does the job, a return format with a length limit, optional memory: project; one delegation line in the instructions file (Anthropic's guidance: current models delegate readily and multiply cost on small tasks). Then one real task in a new session, /usage and /context all rerun, a five-row check table. Done = a real task goes through with none of the Step 2 corrections.
- Go further: plugin for the team, /doctor prompt-audit after every model upgrade, an output style for non-coding work (the /statusline option was cut for length).
- Length: first draft 2,703 words; final 2,290 (core 1,795, four prompts of about 215 to 280 words). Cuts came from prose and table cells; every prompt kept its self-contained definitions. The "Never allowed" table row was cut because the hooks prompt always denies secrets and .env files.

Judgment calls for Nufar
- The /usage fix shortcut (`f`) is mentioned and deferred, so every change goes through the one approved plan in Step 3.
- The Stop hook prompt asks Claude Code to say whether each hook is a script (same answer every time) or a model check (may vary), because a knowledge-work checklist usually needs a prompt hook, which is not deterministic.
- Two proof-of-work examples (engineering and knowledge work) instead of one, per the both-audiences rule; the numbers are illustrative.
- pattern stays INSTALL; AUD would also fit. tool stays "Agentic coding tool" although the page is Claude Code only.
- Kremer is not named: no step on this page fetches internal data, and the sanctioned path for Claude Code is still open.

Open items
- Keren Q4: who has Claude Code at Monday, on which plan and version (/doctor prompt-audit needs v2.1.283+, /skill-doctor v2.1.252+), and whether managed settings restrict auto mode, hooks, MCP servers or plugins. Steps 1 and 4 assume they are open.
- Kremer or Monday's approved data MCPs as the path from Claude Code: confirm before any step names them.
- Plugins: does Monday distribute team setups as plugins or through an internal marketplace? Go further item 1 is written for a team that installs a plugin.
- Prompt test in a fresh Claude Code session: pending (playbook step 4).
-->

# 🎛️ Personalizing Claude Code

**Audit your Claude Code setup with its own checks plus one prompt, then rebuild it lean for current models.**

## Why this adventure

A Claude Code setup grows one fix at a time: a line after each mistake, skills from teammates and plugins, "always allow" clicked to clear a prompt. Months later, the same job lives in three skills, lines written for older models make current ones over-apply rules, and much loads before you type.

Claude Code now ships its own checks for much of this. You run them, audit what they miss, and rebuild for how current models work. The bar: every line in your instructions file earns its place, every skill has one clear job, and every rule with zero exceptions is enforced by Claude Code itself.

This adventure is for every advanced Claude Code user: Anthropic found that writing and data analysis roughly doubled, to about a fifth of Claude Code sessions. So every example here has an engineering and a knowledge-work version.

## The trail

1. **Run Claude Code's own checks**, to start from what it measures.
2. **Audit on top**, for what the checks miss: hooks, permissions, skill overlap and tokens.
3. **Make it lean for current models**: a short instructions file and fewer, sharper skills.
4. **Add guarantees with hooks and permission rules**, for rules with zero exceptions.
5. **Build specialist sub-agents, then test** on one real task.

## Before you start

Open Claude Code in a project folder you use every week (a repository or a work folder). In a repository, start a new branch, so every setup change is a reviewable diff.

## Step 1: Run Claude Code's own checks

Run these four in one new session and keep their output there; the audit in Step 2 reads it.

| Command | What it shows you |
| --- | --- |
| `/doctor prompt-audit` | Instructions written for older models, references to files or commands that don't exist, and contradictions across instruction files, rules, skills, sub-agents and output styles. It changes nothing. |
| `/usage`, window switched to 7 days | Where tokens go by skill, sub-agent, plugin and MCP server, plus recommendations. Skip its fix shortcut for now. |
| `/context all` | What loads before you type: instruction and memory files, and the skills listing. |
| `/skill-doctor` | Each skill's context cost and how often it was invoked. |

## Step 2: Audit on top

**Think first for yourself, without AI.** Messy is fine.

- Which corrections do you repeat, for example "use the shared logger" or "every number needs its source"?
- Which approvals do you click in every session?
- What must never happen here, for example a push to main or a file leaving the folder?
- Which recurring tasks feel expensive or slow?
- Which skills do you never call, or call and get the wrong one?

### Prompt: Audit my Claude Code setup

**What this does:** the AI interviews you about your thoughts, audits what the built-in reports miss, and returns one verdict table and one plan.

Stay in the same session as Step 1, so the reports are in the chat, and paste the prompt below. Answer its questions in writing, or by voice if you use a dictation tool.

```
Audit my Claude Code setup in this folder. Ask me to brain dump or paste all my thoughts on this before you start, then ask about anything missing: corrections I repeat, approvals I click, what must never happen, costly tasks, skills I never call. If I already answered a question earlier in this chat, don't ask it again.

Read the /doctor prompt-audit, /usage, /context all and /skill-doctor output in this chat; if one is missing, ask me to run it. Check the current Claude Code documentation for where each setting lives, then audit what those reports miss:
1. Hooks, MCP servers and permission rules at every level: overlaps, preference-only hooks, access broader than the work needs.
2. Skill overlap across personal, project and plugin skills and the read-only copies synced from claude.ai: the same job twice, descriptions that could start the wrong skill (give a request that would), skills never used, and whether the skill listing overflows its budget of 1% of the context window.
3. Instructions written for older models: capitals and IMPORTANT, "double-check", "use a subagent to verify", "think hard", "loop until done", architecture write-ups.
4. Tokens: the biggest consumers in /usage, and the two or three costliest recurring tasks, and why.

Report one verdict table: item, location, finding, verdict (keep, fix, move, merge or delete). Then one plan that gives every change, and every gap from my brain dump, exactly one home: instructions file, path-scoped rule, skill, sub-agent, hook, permission rule, memory, or delete. Change nothing. Stop and wait for my approval. Then save the approved plan and a baseline (instructions lines, skills count, context before I type, top token consumers, costliest tasks) to .claude/setup-audit.md.
```

## Step 3: Make it lean for current models

Current models follow a plainly worded line closely, and emphasis makes them over-apply it. The instructions file loads in every session, so a short one is cheaper and better followed.

### Prompt: Rewrite my instructions and consolidate my skills

**What this does:** rewrites the instructions file and consolidates the skills from your plan, showing before-and-after numbers first.

Stay in the same session and paste the prompt below.

```
Apply the instructions and skills parts of the plan in .claude/setup-audit.md. Check the current Claude Code documentation for each format first. Keep a copy of every file before you change it.

Instructions file (CLAUDE.md, or AGENTS.md if this folder uses it):
- Under 200 lines, holding only what Claude cannot work out from the files: commands, anything misleading, decisions made outside this folder, and anything I have corrected twice.
- One plainly worded line per rule, with a short reason. No capitals, no IMPORTANT, no emphasis. Rules with zero exceptions go to hooks and permission rules, so leave them out.
- Rules for one part of the folder move to path-scoped rules in .claude/rules/.

Skills:
- Merge, rename or retire duplicates, and say which copy survives and where. Synced copies are read-only: retire the other copy or switch the synced one off.
- Rewrite colliding descriptions: the use case first, then where the job ends.
- Set rarely used skills to name-only with skillOverrides.
- Set disable-model-invocation on skills with side effects, for example ones that post, send or deploy.

Before you save, show old and new line counts per instructions file, skills before and after, and the skill listing size against its budget. Wait for my approval.
```

Read the new instructions file in full and delete any line you would skip. The changed skills load in the new session you start in Step 5.

## Step 4: Add guarantees with hooks and permission rules

Hooks and permission rules run inside Claude Code itself, so they are for rules with zero exceptions; preferences stay in the instructions file.

Claude Code starts in auto mode: a classifier approves routine actions and blocks risky ones, such as a force push, but it does not guarantee safety. Your deny rules and hooks make it safe. Monday's managed settings come first and override yours. `/permissions` lists recently blocked actions.

| What to guarantee | In a repository | In a work folder |
| --- | --- | --- |
| Runs without asking | Tests, lint, reading the code | Reading and summarizing files in the folder |
| Always asks first | `git push`, deploys, database changes | Anything that leaves the folder, for example a monday board update |
| Checked before Claude finishes (Stop hook) | Tests and lint pass | Your checklist passes, for example every number in the weekly report cites its source |

### Prompt: Set up hooks and permission rules

**What this does:** writes your permission rules and hooks from the plan, then tests each hook once.

Stay in the same session and paste the prompt below. Answer its questions in writing, or by voice if you use a dictation tool.

```
Set up the hooks and permission rules from the plan in .claude/setup-audit.md. Check the current Claude Code documentation for the settings and hook formats first. If I already answered a question earlier in this chat, don't ask it again.

Permission rules: ask me one question at a time what runs without asking, what always asks (anything that changes shared state or leaves this folder), and what is never allowed. Always deny reading secrets and .env files.

Hooks, only for rules with zero exceptions:
- A hook blocks an action only when it exits with code 2. Give every guard "onFailure": "block", so a timeout also blocks.
- Use the if field, so each hook runs only when relevant.
- Matching hooks run in parallel in no defined order, so no hook may depend on another.
- Delete preference-only hooks; move the preference into the instructions file.
- Add one Stop hook that keeps you working until my check passes: the tests or lint for code, or my checklist for a deliverable (ask me for it). Say whether each hook is a script that always gives the same answer or a model check that may vary.

Team rules go in the project settings file; my personal rules go in the local settings file. Show every file you will change and wait for my approval. Then trigger each hook once and show me the result.
```

## Step 5: Build specialist sub-agents, then test

A sub-agent earns its place when a side task would flood your main conversation, or when work needs fresh eyes: it works in its own context and returns a short result.

| Sub-agent | In a repository | In a work folder |
| --- | --- | --- |
| **Researcher**: reads many files, returns a short brief | Finds every use of the shared logger that a change touches | Returns the top five themes from a quarter of interview notes, one quote each |
| **Fresh-context reviewer**: checks work against a standard | Checks a diff against your team's conventions | Checks the release notes or team report against your team's standard |

### Prompt: Build my specialist sub-agents

**What this does:** interviews you for one or two sub-agents, writes each file, and adds one delegation line to the instructions file.

Stay in the same session and paste the prompt below. Answer its questions in writing, or by voice if you use a dictation tool.

```
Build one or two specialist sub-agents for this folder, each for a side task that would flood the main conversation, for example a researcher that reads many files and returns a short brief, or a fresh-context reviewer that checks a diff or document against our standard. Check the current Claude Code documentation for the sub-agent format first. If I already answered a question earlier in this chat, don't ask it again.

Use the plan in .claude/setup-audit.md and ask me, one question at a time, which side tasks flood my sessions. Suggest at most two and wait for my pick.

Each sub-agent has:
- A description that states exactly when to delegate to it.
- Self-contained instructions, because it never sees this chat.
- A tools allowlist with only what it needs.
- A model: the lowest tier that does the job well, with the reason.
- A return format with a length limit.
- memory: project, if it should learn across sessions; ask me.

Add one line to the instructions file: delegate to a sub-agent only for large tasks that are independent and can run in parallel; do small tasks directly.

Show every file and wait for my approval. Save the sub-agents in .claude/agents/ and remind me to start a new session.
```

Start a new session and run one real task: a ticket from your backlog, or a recurring deliverable such as this week's report for your team's monday board. Then rerun `/usage` and `/context all`.

| Check | How can you tell? |
| --- | --- |
| Conventions hold without a reminder | The first edits or the first draft follow them |
| Hooks fire | Hook output appears; the Stop hook ran its check |
| Fewer permission prompts | Fewer than the approvals you listed in Step 2 |
| Less context, fewer tokens | Compared with the baseline in `.claude/setup-audit.md` |
| The sub-agent kept its limit | Its result fits the return format you set |

When a check fails, fix the file it belongs to and run the task again. You are done when a real task goes through with none of the corrections you listed in Step 2.

## Go further

**Share the setup as a plugin.** Do this because every teammate then starts from what you learned. Ask Claude Code to package your skills, sub-agents, hooks and MCP servers as a plugin; for non-coding teams, Anthropic's knowledge-work-plugins repository is a good template.

**Rerun `/doctor prompt-audit` after every model upgrade.** Do this because each new model reads the same instructions differently.

**Give non-coding work its own output style.** Do this because a writing or analysis folder does not need the coding instructions. Ask Claude Code for a custom output style with your role, tone and format, with `keep-coding-instructions` off.

## Proof of work

In "what I built", name the project folder, your before-and-after numbers (instructions lines, skills, and context or tokens), and one rule you moved into a hook or one sub-agent you built. For example:

- "Automations service: CLAUDE.md 180 → 60 lines, skills 23 → 14, context before I type 38k → 21k tokens; a reviewer sub-agent checks each diff."
- "Weekly product report: CLAUDE.md 120 → 40 lines, three report skills merged, the weekly run 410k → 260k tokens; a Stop hook checks every number cites its source."

## Related adventures

- **Advanced Skill Patterns**: make a single skill better.
- **Agent Teams and Orchestration**: many agents on one piece of work.
- **Audit and Improve Your AI System**: the same audit across every AI tool.
