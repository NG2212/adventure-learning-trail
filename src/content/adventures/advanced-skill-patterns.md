---
slug: advanced-skill-patterns
emoji: 🧩
icon: layers
title: "Advanced Skill Patterns"
walkaway: "A skill system proven on real work: one pattern (knowledge files, code, a chain or a router) built on a workflow you repeat"
category: Set up your AI
levels: [Intermediate, Advanced]
professions: [Everyone, Engineering]
audience: []
tool: Claude
effort: Ambitious
outcome: Build something
pattern: INSTALL
wave: W3
slot: 18
next: [personalising-claude-code, audit-and-improve-your-ai-system]
source: "Adapted from the Summer Adventure lab Pack Like a Pro (summer-challenge/labs/pack-like-a-pro.md): the inventory-then-choose flow, the routes (packed skill split into knowledge files and code, relay recast as chain, front desk recast as router, kit inspection moved to Go further), the build interview and the happy-path plus failure-path test. Basics (anatomy, five failure modes, near-miss test) live in content/adventures/skills-when-how-and-how-well.md and are linked, never repeated. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 18 [Inbar 19])
- Kept from Pack Like a Pro: inventory first, then one route chosen by friction; the Skill-System Brief with an approval gate; build prompt that states the hand-off contract inside both skills and a router that says when nothing matches; the failure-path tests per route (missing hand-off, unmatched request, rule that lives only in the reference file); one refine pass.
- Cut: the multi-tool map (Claude only), travel language, "Shape of the excursion" table, Layers/Stretch/Postcard, thinking tiers, hired helpers / sub-agents (Agent Teams and Orchestration and Personalising Claude Code own them), the scheduling stretch (Automation Done Right owns it).
- Changed: "packed skill" split into two plain patterns, knowledge files and code, because the client promise names both; kit inspection became the library check in Go further; "how Claude picks a skill" became the Step 1 signals table, which carries the routing teaching.
- Added for Monday: Monday and Engineering examples per pattern (release notes, QBR summary, forecast commentary, incident write-up, PR description); the rule that changing data stays on the monday board or behind Kremer while reference files hold what changes rarely; Claude Code path with hidden-folder steps; team sharing through the repository.
- Skills themselves are never defined for the reader. Prompt 1 gives the AI one line so the prompt is self-contained.

Open items
- Keren Q2: are skills added by each employee under Customize → Skills (ZIP upload of the skill folder), or provisioned by an admin? Affects the Step 3 install line and the team-sharing item in Go further.
- Scripts in Claude chat skills rely on code execution, reported as approved at Monday (Claude-at-Monday slide, per the Voice of Customers notes). Confirm before launch.
- Chain hand-off location: written as "the folder you work in" for Claude Code and Cowork, "the same chat" for Claude chat. Hands-on check pending for Cowork; Unified Claude reaches all orgs 10 Nov 2026 and may change the Cowork wording.
- next: personalising-claude-code exists; audit-and-improve-your-ai-system is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🧩 Advanced Skill Patterns

**Make your skills work as a system: skills that carry their own knowledge and run code, skills that hand work to each other, and descriptions that help Claude pick the right one.**

## Why this adventure

After a few skills, new problems appear. The wrong skill runs. You still paste the naming guide into the chat. A skill gets a total slightly wrong. Two skills each do half a job, and you copy output between them by hand. These are system problems.

Here you choose one pattern that fixes the friction you feel most, build it on a workflow you repeat, and prove it on real work.

New to skills? Start with **Skills: When, How and How Well**. Already build skills well? Aim for this bar: a teammate starts the workflow with one sentence, the right skill runs, every number is exact, and a missing input stops it with a clear message.

## The trail

1. **Map the skills you have**, because a system starts from what works and where it collides.
2. **Choose one pattern for one real workflow**, so you build what your work needs next.
3. **Build and install it**, with the knowledge files, code or hand-off it needs.
4. **Prove it on real work**, including the moment it should stop safely.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Have at least two working skills in Claude, and one workflow you repeat where they disappoint you.

## Step 1: Map the skills you have

Claude picks a skill by matching your request to each skill's description. The description is the signal; most collisions start there.

| What a good description names | Example |
| --- | --- |
| **The phrases you actually say** | "Use when I say 'write the release notes'" |
| **The input it works on** | "Works from merged tickets or a monday board export" |
| **The output it produces** | "Produces customer-facing release notes" |
| **Where its job ends** | "Internal changelogs go to the changelog skill" |

Skills that share verbs and inputs ("summarise the account", "summarise the QBR") collide.

### Prompt: Map my skills

**What this does:** maps your skills and shows where they collide, where you move work by hand, and where a result must be exact.

```
Help me see my skills as a system. A skill is saved instructions Claude follows for one recurring task; Claude picks a skill by reading each skill's description.

List every skill you can see here. If you cannot see them, ask me to paste each name and description until I say I am done.

Show one table: skill name, its job in one line, the phrases that start it, what I still paste by hand when I use it, and any skill whose description overlaps with it.

Then list:
1. Pairs of skills Claude could confuse, each with a request that would start the wrong one.
2. Places where I move output from one skill into another by hand.
3. Steps where the result must be exact every time: counts, totals, dates, formats.

Use only what you can see or what I tell you. Stop and wait.
```

Keep this chat open for Step 2.

## Step 2: Choose one pattern for one real workflow

Pick by the friction in the skill map from Step 1.

| Pattern | Choose it when | Monday example |
| --- | --- | --- |
| **Knowledge files** | You keep pasting the same rules, template or glossary | Release notes that open the product naming guide and the release template |
| **Code** | A step must be exact every time | Forecast commentary that runs a script to calculate the change against last quarter |
| **Chain** | The work has two stages you sometimes run separately | Incident write-up → customer summary, joined by a hand-off file |
| **Router** | You have several skills and the wrong one runs | Customer requests routed to the follow-up, QBR summary or escalation reply skill |

A reference file holds what changes rarely: rules, templates, naming. Data that changes, such as account history, stays on your monday board or behind Kremer, and the skill reads it at run time.

### Prompt: Write the skill-system brief

**What this does:** in the same chat, the AI interviews you about one workflow, recommends a pattern and writes a brief for your approval.

```
Help me choose one skill pattern for one real workflow, using the skill map in this chat. The four patterns:
- Knowledge files: the skill carries reference files (rules, templates, glossaries, examples) and opens each one only when a step needs it.
- Code: the skill carries a small script for a step that must be exact every time, runs it and uses the result.
- Chain: two skills with a hand-off. Skill one saves a file with a fixed name and fixed sections; skill two starts by reading it.
- Router: sharper descriptions, or one routing skill that only chooses a skill and says so when nothing matches.

Interview me one question at a time: which workflow disappoints me most, how I do it step by step, and what went wrong last time. If I answer vaguely, ask for a recent example. Recommend one pattern and say why.

Then write a one-page brief: pattern, workflow, skills it builds on or adds, files needed, hand-off contract (for a chain), what done looks like, one failure test. Stop and wait for my approval.
```

## Step 3: Build and install it

A skill can be a folder of files. Claude reads only the description until the skill is needed, so long reference files cost nothing in other chats.

| Part | What goes there | When Claude reads it |
| --- | --- | --- |
| **SKILL.md** | The skill itself: description, steps, format, gotchas | The description always; the rest when the skill runs |
| **Reference files** | Rules, templates, glossaries, examples | When a step says to open one |
| **Scripts** | A small program for one exact step | Claude runs it and reads the result |
| **Hand-off file** (chains) | What skill one saves for skill two | At the first step of skill two |

### Prompt: Build the skill system

**What this does:** in the same chat, turns the brief you approved in Step 2 into every file the system needs, with install steps.

```
Build the skill system in the brief I approved in this chat. First check Claude's current documentation on skill folders (SKILL.md, reference files, scripts) and follow it.

Write every file in full:
1. Each SKILL.md, with a description that opens with my trigger phrases and names its input.
2. Reference files from my answers. Each step names the file it opens.
3. Scripts: short, plainly commented, with one sample input and its exact expected output. Run the sample and show me the result.
4. Chain: the hand-off file's name and sections stated in both skills; skill two stops and asks for skill one when the file is missing.
5. Router: it only chooses; when nothing matches, it says so.

Show the folder tree, then each file, then install steps for my Claude surface. Remind me to close and reopen Claude. Do not say it is installed until I confirm.
```

Read each file before you save it.

**In Claude:** upload each skill folder as a ZIP file under Customize → Skills. For a chain, run both skills in the same chat; in Claude Cowork, the hand-off file lives in the folder you work in.

**In Claude Code:** save each skill folder, with its files, inside `.claude/skills/` in the project folder. The `.claude` folder is hidden: on Mac, press Cmd+Shift+. in Finder; on Windows, open File Explorer and choose View → Show → Hidden items.

Then close and reopen Claude so it finds the new skills.

## Step 4: Prove it on real work

Test in a fresh chat, so Claude works from the installed skills alone. Each pattern has a moment where it should stop safely; this prompt tests it.

### Prompt: Prove the skill system

**What this does:** runs one real request, then the failure test for your pattern, and proposes one improved version.

```
I installed a skill system. Ask me its pattern (knowledge files, code, chain or router) and for one real request from my work. Use the installed skills only.

1. Run the request. List the skills, reference files and scripts it used.
2. Run the failure test for my pattern:
   - Knowledge files: quote where the output follows a rule that lives only in a reference file.
   - Code: run the script on an input whose answer I know; I will check the result.
   - Chain: run skill two with the hand-off file missing. It should stop and ask for skill one.
   - Router: ask me for a request that matches no skill. It should say so.
3. Review in a table: right skill chosen, reference opened, numbers exact, hand-off read, output usable as-is (ask me).

Then propose one improved version, each change explained in one line.
```

Save the improved version, close and reopen Claude, and run the request again. You are done when a one-sentence request starts the right skill and the failure test stops with a clear message.

## Go further

**Combine two patterns.** Do this to see how patterns work together: a router in front of a chain, or a chain whose second skill runs a script. Test it with the Step 4 prompt.

**Check your whole library.** Do this when some skills feel fragile or duplicated. Ask Claude to review every skill against the five failure modes from **Skills: When, How and How Well**, and to propose merges, splits and sharper descriptions. Approve the plan before it rewrites anything.

**Share the system with your team.** Do this when teammates repeat the workflow. Watch one teammate use it and fix what confused them. **In Claude Code:** commit the skill folders to the repository's `.claude/skills/`.

## Proof of work

In "what I built", name your pattern, the workflow it serves and one thing the failure test taught you.

For example: "Chain: incident-write-up hands a summary file to customer-incident-note. Skill two guessed when the file was missing; now it stops and asks."

## Related adventures

- **Skills: When, How and How Well**: the craft of one strong skill.
- **Personalising Claude Code**: skills alongside sub-agents and hooks in a real repository.
- **Automation Done Right**: put a proven skill system on a schedule.
