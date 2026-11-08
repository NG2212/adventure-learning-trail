---
slug: advanced-skill-patterns
emoji: 🧩
icon: layers
title: "Advanced Skill Patterns"
walkaway: "An audited skill set, with a fix or a new advanced skill tested on real work"
category: Set up your AI
levels: [Intermediate, Advanced]
professions: [Everyone, Engineering]
audience: []
tool: Claude
effort: Longer
outcome: Build something
pattern: INSTALL
wave: W3
slot: 18
next: [personalising-claude-code, audit-and-improve-your-ai-system]
review: ready
video: /videos/advanced-skill-patterns.mp4
source: "Rebuilt 2026-11-08 from Nufar's review (videos/advanced-skill-patterns/notes.md): her six skill problems, the audit list, the audit-first proposal recorded with her notes, and her 8 Nov addition (sub-agents to parallelize or run a part on a named model; a skill that detects which skills to build). Fixes and Go further from her pattern library (appsflyer/Managers/exercises/advanced-pattern-library.md): knowledge file, script, chain, dispatcher, delegation, fan-out, fallback, 'the simplest pattern that solves the problem', combined skills compound tokens, the checkable validation rule. Company and shared skills in the audit and the 'prefer the company skill' routing idea from appsflyer/Managers/exercises/exercise-2-skills-advanced-patterns.md (Stretch). Atomic skills, the dispatcher with no job knowledge, and the per-fix failure tests from the Summer Adventure lab Pack Like a Pro (summer-challenge/labs/pack-like-a-pro.md). Basics live in content/adventures/skills-when-how-and-how-well.md and the token habits in content/adventures/token-smartness.md; both are linked, never repeated. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Rebuilt 2026-11-08 to Nufar's six problems and audit-first design (videos/advanced-skill-patterns/notes.md). The earlier map-then-choose-a-pattern page (knowledge files, code, chain, router) is retired with its design notes.

Changed 2026-11-08 (her review): fix or build with the same patterns; the knowledge row broadened; Step 4 condensed.

What landed where
- Why this adventure: her six problems in plain words, as bullets with examples; the closing line offers the build path.
- Step 1: one audit prompt run where the tool already sees the skills (no pasting). The AI counts, groups, flags unclear triggers, confusing pairs (company and shared skills included), repeated parts and unfiltered connector use. It asks the person only what the person knows: inconsistent skills, skills that need knowledge they lack, skills only they can run, skills they forget. Output: findings table with the matching fix, or "nothing worth fixing".
- Step 2: prompt-free. Problem-to-fix table with an example per row, which doubles as the pattern menu for a new skill; pick one or two findings, starting with the costliest, or a pattern for a new skill; save a before result when fixing.
- Step 3: one self-contained Fix or build my skill prompt: asks fix or build first, defines every pattern it may use, plan for approval, files in full, one stop-safely case, install lines for Claude and Claude Code.
- Step 4: prompt-free. Her one-line instruction, then three short lines: a new chat, one real request with the skills and sub-agents used listed, one missing-input run that should stop with a clear message, and a one-sentence compare ask when a Step 2 result was saved. The Prove the fix prompt, the per-fix tests and the audit rerun are cut (keeps the page under the 2,300 cap after the build path was added).
- Go further: a skill-finder prompt and a monthly-audit prompt, both complete on this page (self-contained rule, 8 Nov). Fallback lives in the Fix or build my skill prompt.

Nufar's addition (8 Nov, after the first draft)
- Sub-agents to parallelize parts of the work or to run a part on a named model: placed in the fix menu under "Skills are slow and heavy" (audit prompt, Step 2 table, apply prompt), because the audit can point to it (a slow skill with independent parts, or one step that needs a stronger model). Worded "only if my tool supports them"; the table says they need a tool such as Claude Code. Step 4's run lists sub-agents used.
- A skill that detects which skills to build: the first Go further item ("Find the skills you still need"), with its own complete Build my skill-finder prompt that lists repeated tasks and builds the one the person picks.
- Self-contained rule (Nufar, 8 Nov): no prompt on this page points to a prompt in another adventure. The skill-finder and the monthly audit each carry a full prompt; the apply prompt now states what every new or rewritten skill must contain (name, description in the person's phrases, steps, output format, check, missing-information handling). Related adventures and the Token Smartness 'see' link stay as further reading; Before you start keeps the pointer for people new to skills.
- Cut for length: the Go further "Delegation and fan-out, in Claude Code" item (its point now lives in the fix menu; the context: fork detail is gone), the Go further fallback paragraph (fallback is now a fix in the apply prompt with a Step 4 test), the three core prompts tightened (audit 304 → about 235 words, apply 336 → about 280 before the skill-contents line), the Step 1 rationale, Step 2 examples, the Why closing sentence, the Automation Done Right pointer in Go further, and the dictation line shortened to the Token Smartness form.

From the pattern library: "the simplest pattern that solves the problem" and "every skill another skill calls adds its tokens" inside the apply prompt; the chain's fixed-name hand-off and existence check (as atomic skills with a calling skill); the dispatcher that owns no job logic and says when nothing fits; the routing section in instructions (as the skill index); knowledge file and script (as consistency and packaging); delegation and fan-out (as sub-agents in the slow-and-heavy fix); fallback with a checkable validation rule (in the Fix or build my skill prompt). Not used: model tier per skill (folded into "the right model and effort" and the named-model sub-agent), the worked SKILL.md examples, context: fork, "combining patterns" as its own item (cut for length).

Judgment calls for Nufar
- "Skills you forget" is asked of the person in the audit, next to inconsistent and only-I-can-run: the AI cannot know what you forget, only which triggers are unclear.
- Company and shared skills: the audit and the apply prompt say the person cannot edit them, so their fixes go into the person's own skills and instructions (rename yours, or "prefer the company skill for X" in the index).
- Step 2 is prompt-free (read the findings, pick); the before result is saved there so Step 4 has a real baseline.
- Her term "atomic task units" appears once, in the table, next to "atomic skills".
- Token tune-up row links Token Smartness; the habits are not repeated.
- The skill-finder reads "recent chats if your tool can search them" (memory and chat search at Monday unconfirmed, Keren Q7).
- pattern stays INSTALL; AUD (audit → fix → re-score) now fits the page better if the field matters.
- Step 4 uses a new chat so the updated skills load.

Open items
- Fresh-chat prompt test pending (playbook step 4): can Claude at Monday read the full text of every skill, including company and shared ones, or only names and descriptions? Does a calling skill reliably run other skills in order in Claude chat? Does the skill-finder find real candidates from recent chats?
- How company and shared skills appear in Claude at Monday (listed with the person's own? editable or not?).
- Keren Q2: are skills added by each employee under Customize → Skills, or provisioned by an admin? Affects the Step 3 install line.
- Sub-agents in Claude chat at Monday: the page names Claude Code as the sure case; confirm whether Claude chat can run a skill's parts as sub-agents on a named model.
- Scripts in Claude chat skills rely on code execution, reported as approved at Monday. Confirm before launch.
- Scheduled tasks in Claude at Monday (Keren Q6) for the monthly audit in Go further.
- next: audit-and-improve-your-ai-system is provisional until that file exists.
-->

# 🧩 Advanced Skill Patterns

**Audit the skills you have, then fix the problems that come with having many, or build a more sophisticated skill, with the pattern that matches.**

## Why this adventure

Once you have a number of skills (your own, ones shared with you, company skills), predictable problems appear:

- **The same parts repeat across skills**, for example three deck skills that each do their own research.
- **Similar skills confuse the tool**, so the wrong one runs.
- **Skills do not start when you expect**, and you forget you have them.
- **Some skills are slow and heavy**, and use many tokens.
- **Results are inconsistent**: a different format, or a slightly wrong number, each time.
- **A skill needs more knowledge**, or needs to come with its own set of knowledge (rules, reference material, examples), to run well for you or for others.

In this adventure you audit your skills and fix the problem that costs you most. If nothing needs fixing, or you have an idea for a more sophisticated skill, you build one with the same patterns.

## The trail

1. **Audit your skills**, so you know what actually causes trouble.
2. **Choose a fix or a pattern**: fix the finding that costs you most, or pick a pattern for a new skill.
3. **Fix or build**, with one prompt that does either.
4. **Test it on real work**, against your earlier results if you have them.

## Before you start

If you have never built a skill, start with **Skills: When, How and How Well**. You need several skills already added in your AI tool.

## Step 1: Audit your skills

The audit runs where your skills already are, so you paste nothing. It asks you only what the skills cannot show.

### Prompt: Audit my skills

**What this does:** the AI reads your skills, flags problems, asks what only you know, and matches each finding to a fix.

Open a new chat in the AI tool where your skills are added, for example Claude, or open Claude Code in your project folder, and paste the prompt below. Use a strong model, for example Opus. Answer its questions in writing, or by voice if your tool has dictation.

```
Audit my skills. A skill is saved instructions an AI tool follows for one recurring task; the tool picks one by its description. Read every skill you can see here, including company skills and skills shared with me. If you cannot see them, say so and stop.

Count and group them. Flag: descriptions unclear about when to use the skill; pairs the tool could confuse, each with a request that would start the wrong one; parts repeated across skills; heavy connector reads with no filter.

Then ask me to brain dump what bothers me about my skills, and ask one question at a time about what is missing: which skills give inconsistent results, which need more knowledge, which only I can run, and which I forget to use. If I already answered a question earlier in this chat, don't ask it again.

Show a findings table: finding, skills involved, problem, matching fix. If nothing is worth fixing, say so. The matching fixes:
- Repeated parts: one atomic skill per part, and one skill that calls them in order.
- Confusing pairs: sharper descriptions; merge, rename or retire; a dispatcher (a skill that only picks the right skill).
- Not starting or forgotten: a skill index in my instructions, or a dispatcher.
- Slow and heavy: filtered connector calls, knowledge read only when needed, the right model and effort, sub-agents.
- Inconsistent: examples, a template, a checklist, code for exact parts.
- Needs more knowledge, or only I can run it: knowledge files (rules, reference material, examples) and code for exact parts, packaged with the skill.
I cannot edit company or shared skills; fix them through my own skills and instructions.
```

## Step 2: Choose a fix or a pattern

From the findings table, pick one or two findings to fix now, starting with the one that costs you most.

If the audit found nothing worth fixing, or you have an idea for a more sophisticated skill, build a new one. Pick the pattern that fits it, for example knowledge files for a skill that needs your team's rules.

| What is the problem? | What is the fix, or the pattern for a new skill? | Example |
| --- | --- | --- |
| **The same parts repeat in many skills** | **Atomic skills** (atomic task units): one skill per atomic part of the work, and one skill that calls them in order | Research-to-deck runs the research, summary and deck skills in order |
| **Similar skills confuse the tool** | Sharper descriptions and triggers; merge, rename or retire; a dispatcher, a skill whose only job is to pick the right skill | Rename your "account summary" to "QBR prep", so it stops colliding with the company "account brief" |
| **Skills do not start, or you forget them** | A skill index in your global or project instructions, or a dispatcher | "For release notes, use release-notes-from-tickets" |
| **Skills are slow and heavy** | A token tune-up (see **Token Smartness**): filtered connector calls, knowledge read only when needed, the right model and effort. In a tool with sub-agents, such as Claude Code, they run independent parts in parallel, or a part on a named model | An account review sends five accounts to five sub-agents on a lighter model, and a strong model writes the final judgment |
| **Results are inconsistent** | Examples, an output template, a checklist, and code for the parts that must be exact | Forecast commentary runs a script for the change against last quarter |
| **A skill needs more knowledge, or its own set of knowledge, to run well for you or for others** | Knowledge files packaged with the skill (rules, reference material, examples), and code for the parts that must be exact | An incident write-up skill carries the severity rules and two past write-ups, so a teammate gets the same result you do |

If you are fixing an existing skill, run it on one real request before you change anything, and save the result for Step 4.

## Step 3: Fix or build

### Prompt: Fix or build my skill

**What this does:** the AI asks whether you are fixing or building, interviews you, builds it with the chosen pattern, and says where to add each part.

Stay in the chat from Step 1, so it sees your findings, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me fix a skill or build a new one with an advanced pattern. A skill is saved instructions an AI tool follows for one recurring task. If I already answered a question earlier in this chat, don't ask it again.

First ask whether I want to fix a finding from my skill audit or build a new skill; do not choose for me.
- To fix: ask which finding. If there is no audit in this chat, ask which skills and which problem.
- To build: ask what the skill should do and which pattern I chose. If I am unsure, suggest the simplest pattern that fits and say why.
Then ask me to brain dump how I do this work and what a good result looks like, and ask one question at a time about what is missing.

Patterns you may use. Use the simplest that works; every skill or sub-agent another skill calls adds its own tokens.
- Atomic skills: each does one part and saves its result under a fixed name; a calling skill runs them in order and stops when a result is missing.
- Sharper descriptions: my phrases, the input, the output, where the job ends. Merge, rename or retire overlaps.
- Dispatcher: a skill that only picks the right skill, and says so when none fits.
- Skill index: lines in my instructions, "for this request, use this skill".
- Token tune-up: filtered connector calls, knowledge opened only when needed, the right model and effort. If my tool supports sub-agents: independent parts in parallel, or one part on a named model.
- Consistency: a worked example, a template, a checklist, a script for exact parts.
- Knowledge: the rules, reference material and examples the skill needs, as knowledge files in its folder, plus scripts for exact parts, each named where it is used.
- Fallback: use a saved snapshot while a check holds, for example "less than a day old"; otherwise fetch fresh data and save a new snapshot; say which path ran.

Every new or rewritten skill has a short name in lowercase with hyphens, a description in my phrases saying when to use it, steps a new teammate could follow, the output format, a check before showing results, and what to do when information is missing.

Show a short plan and wait for my approval. Check my tool's current documentation, then write every file in full. Test any script on a known answer. Include one case where it stops with a clear message. List each change in one line, say where to add each part, and remind me to close and reopen the tool.
```

Read each file before you save it.

**In Claude:** add or update the skills under Customize → Skills, and add a skill index where the prompt tells you.

**In Claude Code:** save each skill folder inside `.claude/skills/` in your project folder, and a skill index in CLAUDE.md. The `.claude` folder is hidden: on Mac, press Cmd+Shift+. in Finder; on Windows, open File Explorer and choose View → Show → Hidden items.

Then close and reopen your tool.

## Step 4: Test it on real work

Test your new and improved skill and compare it against the previous results if you have them.

Open a new chat, so the updated skills load, and run the skill on one real request. Ask it to list the skills, files and sub-agents it used. Then run it once with missing input: it should stop with a clear message.

If you saved a result in Step 2, paste it into the same chat and ask: "Compare this earlier result with the new one in a table: what improved, what got worse, and what to change next."

## Go further

**Find the skills you still need.** Do this so your system keeps finding new reusable capabilities.

### Prompt: Build my skill-finder

**What this does:** writes a skill that looks at your recent work, lists tasks you repeat that deserve a skill, and builds the one you pick.

Open a new chat in the AI tool where your skills are added and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Build me a skill-finder: a skill that spots tasks I repeat that should become skills. A skill is saved instructions an AI tool follows for one recurring task; the tool picks one by its description. If I already answered a question earlier in this chat, don't ask it again.

Ask me one question at a time: where you can see my recent work (for example recent chats, if you can search them, or a folder), how far back to look, and the phrases I would use to start the skill-finder.

Then check my tool's current documentation for its skill format and write the complete skill:
- A short name in lowercase with hyphens, and a description in my phrases.
- Steps: read my recent work from the sources I named; find tasks that came up more than once; drop tasks an existing skill already covers, including company and shared skills.
- Output: a table, most frequent first, at most ten rows: task, how often, where it came up, an example request, and whether it suits a skill or a plain request.
- Then offer to build the one I pick: interview me one question at a time about how I do it and what a good result looks like, and write that skill in the same format.
- If a source cannot be read, say so.

Show the whole skill in one block, tell me how to add it, and remind me to close and reopen the tool.
```

**Audit every month.** Do this because skills keep arriving.

### Prompt: Turn the audit into a monthly skill

**What this does:** turns Audit my skills into a skill you run by hand once, then on a schedule.

Go back to the chat from Step 1, where the audit prompt is, and paste the prompt below.

```
Turn the Audit my skills prompt in this chat into a skill. If you cannot see it, ask me to paste it. A skill is saved instructions an AI tool follows for one recurring task. Keep every step, the problems and fixes list, and the findings table. Check my tool's current documentation for its skill format. Give it a short name in lowercase with hyphens and a description in my words. Show the whole skill in one block and tell me how to add it. After I run it by hand once, tell me how to make it a scheduled task that runs every month in my tool. In the scheduled run, list the questions to me at the end.
```

## Proof of work

In "what I built", name the skill you fixed or built, the pattern you used, and what the test showed.

For example: "Research, summary and deck are now atomic skills that research-to-deck calls in order. With no research result, it stops and asks for it."

## Related adventures

- **Skills: When, How and How Well**: build one strong skill.
- **Token Smartness**: the habits behind the token tune-up.
- **Automation Done Right**: put a proven skill on a schedule.
