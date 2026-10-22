---
slug: skills-when-how-and-how-well
emoji: 🧰
icon: toolbox
title: "Skills: When, How and How Well"
walkaway: "A skill you invoke by name, built and tested on real work, and the judgment to know when the next task deserves one"
category: Set up your AI
levels: [Intermediate]
professions: [Everyone]
audience: []
tool: Claude
effort: Moderate
outcome: Build something
pattern: INSTALL
wave: W1
slot: 17
next: [advanced-skill-patterns, de-slop]
source: "Adapted from the Summer Adventure lab Skills To Go (summer-challenge/labs/skills-to-go.md): when-to-build signals, skill anatomy, the five ways skills break, and the choose / design / test prompt flow, cut and rewritten for Claude only. Direction menu and interview-extracts-the-workflow rule from the skill-exercise design learnings (Amdocs, Jul 2026)."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22)
- Kept from Skills To Go: the signals table (now Signal / What it looks like / What to do, with Monday examples), the anatomy table (cut to seven parts; failure handling folded into Verification), the five failure modes, the three-prompt flow (choose, design, test), the near-miss trigger test, a second skill of a different shape, a skill for other people.
- Cut: the multi-tool table and the tool-mapping web search (Claude only on Monday), the podcast links, Pack Like a Pro and Set It and Summer cross-references, the progressive-disclosure paragraph, the "Shape of the excursion" table, the skill-builder meta stretch, the scheduling stretch, the reuse note.
- Added for Monday: the direction menu (respond / create / review / transform) with Monday examples; Prompt 1 merges choosing and the workflow interview, because an uploaded sample cannot reveal the workflow; restart note in Prompt 2 and in the install text; hidden-folder steps for Claude Code.
- Prompt 2 tells the AI to check Claude's current skill-file format, since the format changes; the install line stays in one "In Claude" paragraph for freshness sweeps.
- "Skill" is never defined for the reader (Monday employees know it). Prompt 1 gives the AI tool a one-line meaning only so the prompt is self-contained.

Open items
- Keren Q2: are skills added by each employee under Customize → Skills, or provisioned by an admin? Affects the Step 3 install line and Go further item 3 (a skill for a teammate).
- next: uses the existing slug de-slop for Stay Original with AI; the brief named stay-original-with-ai. advanced-skill-patterns is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🧰 Skills: When, How and How Well

**Know when a task deserves a skill, then build one that does the task your way every time.**

## Why this adventure

A weak skill runs at the wrong moment, or stays silent when you need it. It gives a different format every time and forgets the detail that makes the output yours. Most of these problems start before the skill is written: the task was a poor fit, or the AI guessed the workflow from a sample file.

This adventure teaches the craft: deciding whether a task deserves a skill, scoping it, building it from an interview about how you actually work, and testing it on real work. You leave with one tested skill and the judgment to decide on the next one.

Built skills before? Aim for this level: a skill a teammate could start with one sentence and get a result they would send as-is. If you already build skills at that level, Advanced Skill Patterns covers skills that work together.

## The trail

1. **Decide whether this task deserves a skill**, because a skill built for the wrong task goes unused.
2. **Scope and design it**, so the AI learns how you actually do the task.
3. **Build and install it**, with every part a good skill needs.
4. **Test it on real work**, and fix what breaks before you rely on it.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Have in mind one task you repeat with AI and would like done your way every time.

## Step 1: Decide whether this task deserves a skill

| Signal | What it looks like | What to do |
| --- | --- | --- |
| **You repeat the same briefing** | You paste the same instructions into every customer reply | Build a skill that holds those instructions |
| **You need the same result every time** | Release notes should look the same, whoever writes them | Put the exact format in the skill |
| **Your team needs one standard** | Every incident write-up should pass the same checklist | Build a review skill the whole team uses |
| **The AI keeps missing your team's details** | Product names, your tone with customers, phrases your team avoids | Write those rules into the skill's gotchas |

A task is better left as a plain request when it happens once, when the AI already does it well with a short prompt, or when the process changes every week.

One skill owns one job. If you need more than one short phrase to name the job, you are looking at two skills.

Every skill also has a direction. Knowing yours shapes the whole design:

| Direction | The skill… | Monday example |
| --- | --- | --- |
| **Respond** | answers something that arrives | A reply to a customer escalation, in your team's tone |
| **Create** | produces something new from your inputs | The weekly team update, built from your monday board |
| **Review** | checks a draft against a standard | A check on an incident write-up before it goes out |
| **Transform** | turns one thing into another | Merged tickets turned into customer-facing release notes |

## Step 2: Scope and design it

A sample of finished work shows the AI the result. How you get there (what you check, what you leave out, what went wrong last time) is something only you know, so the AI interviews you before it writes anything.

### Prompt 1: Write the skill brief

**What this does:** the AI interviews you about one recurring task and writes a one-page skill brief for your approval.

```
Help me design a skill: saved instructions you follow for one recurring task. Use what you know about me; ask only for what is missing, one question at a time. If an answer is vague, ask for a real example.

1. Which task I repeat, and how I do it, step by step.
2. Its direction: respond (answer something that arrives), create (produce something new), review (check a draft) or transform (turn one thing into another).
3. The exact phrases I would say to start it; then suggest three near-misses for a different task.
4. What I provide each time, and the standing context the skill always needs.
5. What a great result looks like. I may paste one.
6. What to check before showing me anything.
7. The last time this task went wrong, and why.

Then write a one-page skill brief from my answers, with a name and a one-line job. Stop and wait for my approval.
```

If the brief sounds generic, say exactly what is missing: "enterprise customers get a call before any email". Specific feedback gets a better brief.

## Step 3: Build and install it

Every good skill has these parts. Prompt 2 builds all of them.

| Part | What goes there |
| --- | --- |
| **Name** | Short and action-led, easy to say: `weekly-team-update` |
| **Description** | What the skill does and when to use it, opening with the phrases you would actually say. Claude reads this first to decide whether to use the skill. |
| **Steps** | Instructions concrete enough for a new teammate to follow |
| **Output format** | The exact shape: sections, length, tone |
| **Worked example** | One real input and the great output it should produce |
| **Verification** | What to check before showing the result, and what to do when information is missing |
| **Gotchas** | The mistakes this task invites, written as clear rules. Often the most valuable part. |

### Prompt 2: Write the skill file

**What this does:** in the same chat, turns the skill brief you approved in Prompt 1 into a complete skill file ready to save, plus three test requests.

```
Use the skill brief I approved in this chat. First check Claude's current documentation for the skill file format (SKILL.md) and follow it. Then write the complete skill file:

1. The header Claude expects: a short name in lowercase with hyphens, and a description that says what the skill does and when to use it, opening with my trigger phrases.
2. Steps, written so a new teammate could follow them.
3. The output format as a literal template.
4. Verification: what to check before showing the result, and what to do when information is missing.
5. Gotchas: my known failure points, written as clear rules.
6. One worked example: a real input from my work and the full output, written out completely.

Show the whole file in one block, kept short and clear. Then give me three real test requests from my own work. End by reminding me to close and reopen Claude after I add the skill.
```

Read the file before you save it, and ask for a rewrite of any step a new teammate would find unclear.

**In Claude:** add the skill under Customize → Skills. **In Claude Code:** save the file as `SKILL.md` inside a folder named after the skill, in `.claude/skills/` (in your home folder for all projects, or in one project folder). The `.claude` folder is hidden: on Mac, press Cmd+Shift+. in Finder; on Windows, open File Explorer and choose View → Show → Hidden items.

Then close and reopen Claude so it finds the new skill.

## Step 4: Test it on real work

Test in a fresh chat, so Claude works from the skill alone. When a test disappoints, find the cause:

| Failure | What happens | Fix |
| --- | --- | --- |
| **Vague trigger** | The skill runs at the wrong time, or stays silent when you need it | Open the description with the exact phrases you say; test near-miss phrases |
| **Abstract steps** | Each run improvises differently | Rewrite each step so a new teammate could follow it |
| **No context** | The output is generic | Name the files, rules or sources the skill reads first |
| **Missing format** | Structure, length and tone change from run to run | Add a literal template |
| **Wrong gotchas** | The skill fails exactly where it matters most | Turn the last real failure into a rule |

### Prompt 3: Test and improve once

**What this does:** runs the skill on two real requests, reviews each run against the five failure modes, and proposes one improved version.

```
I am testing a skill I added to Claude. Ask me for a real request from my work and handle it the way you normally would. Then ask for a second real request and handle it too.

After each one, review the run in a table:
1. Did the right skill run without my naming it?
2. Were its steps followed?
3. Did the output match its format?
4. Could I use the output as-is? Ask me.
5. Which failure appeared: vague trigger (wrong time or silent), abstract steps (improvised), no context (generic), missing format (shape changes), wrong gotchas (fails where it matters)?

Then propose one improved version of the skill, with each change explained in one line.
```

Replace the skill with the improved version, close and reopen Claude, and run one real request again. You are done when a real request gives a result you would send as-is.

## Go further

**Build a second skill in a different direction.** Do this to see how direction changes the design: if the skill you built here creates, make the second one review. Keep a one-line index: each skill's name and when to use it.

**Run a near-miss trigger test.** Do this when the skill runs on the wrong requests. Write three requests that sound like the job but belong to a different task, try each in a fresh chat, and tighten the description until only the real job starts the skill.

**Build a skill for a teammate.** Do this to discover what your skill assumes that only you know. Pick a task your team shares, such as the weekly team update, watch one teammate use the skill on their own work, and fix what confused them.

## Proof of work

In "what I built", write your skill's name, the recurring job it owns, and one gotcha you added after testing.

For example: "release-notes-from-tickets: turns merged tickets into customer-facing release notes. Gotcha added after testing: write feature names exactly as they appear in the product."

## Related adventures

- **Advanced Skill Patterns**: skills that work together, carry their own knowledge and run code.
- **Stay Original with AI**: a skill that keeps your own thinking in every piece of work.
