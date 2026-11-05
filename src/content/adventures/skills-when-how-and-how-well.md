---
slug: skills-when-how-and-how-well
emoji: 🧰
icon: toolbox
title: "Skills: When, How and How Well"
walkaway: "One skill tested on real work, a prompt that builds every skill you need next, and the judgment to know when a task deserves one"
category: Set up your AI
levels: [Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Moderate
video: /videos/skills-when-how-and-how-well.mp4
outcome: Build something
pattern: INSTALL
wave: W1
slot: 17
next: [advanced-skill-patterns, de-slop]
source: "Adapted from the Summer Adventure lab Skills To Go (summer-challenge/labs/skills-to-go.md): when-to-build signals, skill anatomy, the five ways skills break, the near-miss test. Interview-extracts-the-workflow rule from the skill-exercise design learnings (Amdocs, Jul 2026). Start-with-the-end-in-mind route from Nufar (5 Nov 2026). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22)
- Kept from Skills To Go: the signals table (Signal / What it looks like / What to do, with Monday examples), the anatomy (now carried inside the build prompt), the five failure modes, the near-miss trigger test, a skill for other people.
- Cut: the podcast links, Pack Like a Pro and Set It and Summer cross-references, the progressive-disclosure paragraph, the "Shape of the excursion" table, the skill-builder meta stretch, the scheduling stretch, the reuse note.
- "Skill" is never defined for the reader (Monday employees know it). The prompts give the AI tool a one-line meaning only so they are self-contained.

Changed 2026-11-05, from Nufar's first review
- The direction idea is gone from the page, the interview and Go further. Most people do not resonate with it.
- Step 1: signals table kept; a quick verdict prompt added (build a skill, plain request, or something else, with a one-line reason). The "better left as a plain request" guidance and "one skill owns one job" moved into that prompt.
- Old Steps 2 and 3 merged into Step 2, one prompt: interview, brief for approval, complete skill with the best practices built in. Opens with her wording. Parts table removed; the prompt carries it. The prompt checks the current documentation of the tool in use.
- Tool-neutral: "AI tools choose skills on their own"; frontmatter tool is Any AI tool; install line in the style of Board of Advisors; close and reopen your tool.
- Step 3: no run prompt. Run it in plain language or with / and its name, observe, then a short feedback prompt that asks what to keep and what to change, with a specific example, and rewrites the skill showing each change in a line. One sentence on the update button.
- Go further: start with the end in mind added, in her words. Second skill removed.

Judgment calls
- Failure table kept and turned toward feedback: its third column is now a concrete sentence to say. All five failures stay, because Advanced Skill Patterns (Go further, Check your whole library) points to "the five failure modes" on this page.
- The vague-vs-clear description table sits before the build prompt, following the rule that explanation tables go before the prompt that uses them, and because it helps the person answer the phrases question.
- The verdict prompt offers three suggestions if the person has no task, and the person picks. This gives a way in for people without an idea and leaves the choice with them.
- Steps 1 and 2 share one chat, so the build prompt skips what the verdict prompt already learned. The build prompt also works alone in a new chat, which is how people reuse it.
- `.claude` is not named, so the hidden-folder steps are gone. The install line follows Board of Advisors, and the build prompt closes by asking the tool how to add the skill, which also covers tools outside that line.

Open items
- Fresh-chat prompt test pending (playbook step 4): the verdict prompt should reach each of the three verdicts on suitable tasks; the build prompt in Claude, a monday agent and Claude Code; the feedback prompt when the skill's text is not visible in the chat; the reverse engineer prompt.
- Hands-on check: which tools respond to / and the skill name, and which offer the update button, including monday agents.
- Keren Q2: are skills added by each employee under Customize → Skills, or provisioned by an admin? Affects the install line and the teammate item in Go further.
- BUILD-PLAYBOOK.md line 68 (INSTALL pattern) still lists the direction menu, and memory/learnings.md line 8 still recommends it above her 5 Nov correction. Both are outside this revision.
-->

# 🧰 Skills: When, How and How Well

**Know when a task deserves a skill, then build one that does the task your way every time.**

## Why this adventure

A weak skill runs at the wrong moment, or stays silent when you need it. It gives a different format every time and forgets the detail that makes the output yours. Most of these problems start before the skill is written: the task was a poor fit, or the AI guessed the workflow from a sample file.

In this adventure you decide whether a task deserves a skill, build it with one prompt that interviews you, and test it on real work with concrete feedback. You leave with one tested skill and a prompt you can reuse for every skill from here on.

Built skills before? Aim for this level: a skill a teammate could start with one sentence and get a result they would send as-is. If you are already there, Advanced Skill Patterns covers skills that work together.

## The trail

1. **Decide whether this task deserves a skill**, because a skill built for the wrong task goes unused.
2. **Build your skill**, with one prompt that interviews you and applies the best practices.
3. **Test it on real work**, and give the concrete feedback that makes it better.

## Before you start

Have in mind one task you repeat with AI and would like done your way every time.

## Step 1: Decide whether this task deserves a skill

These signals show that a task may deserve a skill. The prompt below checks yours.

| Signal | What it looks like | What to do |
| --- | --- | --- |
| **You repeat the same briefing** | You paste the same instructions into every customer reply | Build a skill that holds those instructions |
| **You need the same result every time** | Release notes should look the same, whoever writes them | Put the exact format in the skill |
| **Your team needs one standard** | Every incident write-up should pass the same checklist | Build a review skill the whole team uses |
| **The AI keeps missing your team's details** | For example product names, your tone with customers, phrases your team avoids | Write those rules into the skill's gotchas |

### Prompt: Does this task suit a skill?

**What this does:** the AI asks a few questions about your task and gives a verdict with a one-line reason.

Open a new chat in the AI tool where you want the skill and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me decide whether a task suits a skill: saved instructions an AI tool follows for one recurring task. Ask which task I have in mind. Do not choose it for me. If I have none, suggest three from my work and let me pick.

Then ask one question at a time: how often I do it, whether I give the same instructions each time, and whether the result should look the same every time.

Give one verdict and a one-line reason:
- Build a skill: it repeats, it is one job, and the steps or format stay the same. If it holds several jobs, name the one to build first.
- Plain request: it happens once, a short prompt already does it well, or the process changes every week.
- Something else that fits better, for example a project for ongoing work with its own files and chats.
```

If the verdict is something other than a skill, run the prompt again with another task.

## Step 2: Build your skill

Any AI tool nowadays can help you create a skill. The prompt below helps you create a skill that has the best practices already baked in, so you can use it to create any skill from here on.

It starts with an interview because a sample shows the result, and only you know how you get there.

**When a skill fires.** AI tools choose skills on their own, by their description. Name the requests it serves, in the words people actually use.

| Description | What happens |
| --- | --- |
| "Helps with updates." | Stays unused |
| "Turns tickets into release notes. Use for any release notes request." | Runs when needed |

### Prompt: Build a skill

**What this does:** the AI interviews you about one recurring task, shows you a short brief to approve, then writes the complete skill.

Stay in the same chat, so it already knows your task, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me build a skill: saved instructions an AI tool follows for one recurring task. Use this chat and what you know about me, and ask only for what is missing. Do not choose the task or decide what good means.

Interview me one question at a time. If an answer is vague, ask for a real example.
1. The task, and how I do it, step by step.
2. The phrases I would use to start it.
3. What I provide each time, and the standing context it needs.
4. What a great result looks like. I may paste one.
5. What to check before showing me anything.
6. The last time this task went wrong.

Show a short brief and wait for my approval.

Then check the current documentation of the tool I will use for its skill format, and tell me if you cannot. Write the complete skill:
- A short name in lowercase with hyphens.
- A description of what it does and when to use it, in my phrases.
- Steps a new teammate could follow.
- The output format as a literal template.
- Verification: what to check first, and what to do when information is missing.
- Gotchas: my known failure points, as clear rules.
- One worked example: a real input and the full output.

Show the whole skill in one block. Then tell me how to add it in my tool, and to close and reopen the tool afterwards.
```

Read the skill before you save it. Keep this prompt for your next skill.

**In Claude:** add the skill under Customize → Skills. **In monday agents:** add it in the agent's Profile tab under skills. **In Cursor, Codex and Claude Code:** save it in the skills folder. **In ChatGPT (Business or Enterprise):** add it under Skills.

Then close and reopen your tool.

## Step 3: Test it on real work

Open a new chat and run the skill on one or two real requests. Run it by asking in plain language, or by typing `/` and its name. Then observe the results.

A general comment, for example "too long", pushes the AI too far in one direction, and you lose what was working. Concrete feedback says what to keep as well as what to change, with a specific example.

| What did you see? | What is the cause? | What could you say? |
| --- | --- | --- |
| The skill ran at the wrong time, or stayed silent | **Vague trigger** | "It stayed silent when I asked for release notes. Add that phrase to the description." |
| Each run went differently | **Abstract steps** | "One step says to review the tickets. Say which fields to read." |
| The result was generic | **No context** | "It ignored our tone guide. Read the guide first." |
| Structure, length or tone changed between runs | **Missing format** | "Keep the three sections. Open with the customer impact, in two lines." |
| It failed where it matters most | **Wrong gotchas** | "It shortened feature names. Write them exactly as they appear in the product." |

### Prompt: Improve the skill from my feedback

**What this does:** asks what to keep and what to change, then rewrites the skill and shows each change in one line.

Stay in the chat where you ran the skill and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
I ran my skill in this chat and want to improve it. If you cannot see the skill's text, ask me to paste it. Ask me one question at a time:
1. What in the result should stay as it is?
2. What should change? If my answer is general, for example "too long", ask for a specific example from this result.

Change only what my feedback covers. Rewrite the complete skill in one block, then show each change in one line.
```

Some tools then offer a button to update the skill, and in others you update the skill's instructions yourself.

Close and reopen your tool, and run one real request again. You are done when a real request gives a result you would send as-is.

## Go further

**Start with the end in mind.** Do this when you know the result better than the steps. Another way to create a skill is to have a conversation with the AI tool and get it to the final result you are happy with (format, content, length). Then ask it to reverse engineer that into a skill that creates this result repeatedly.

**What this does:** turns the chat that reached a result you like into a skill that repeats it.

Stay in the chat where you reached the result and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
I am happy with this result. Reverse engineer this chat into a skill that creates this result repeatedly. Ask me one question at a time about anything you would have to guess, for example which parts change each time. Check my tool's current documentation for the skill format. Show the complete skill in one block, with this result as its worked example.
```

**Run a near-miss test.** Do this when the skill runs on the wrong requests. Write three requests that sound like the job but belong to a different task. Try each in a new chat, and tighten the description until only the real job starts it.

**Build a skill for a teammate.** Do this to discover what your skill assumes that only you know. Pick a task your team shares, for example the weekly team update. Watch one teammate use it, and fix what confused them.

## Proof of work

In "what I built", write your skill's name, the job it owns, and one change you made after testing.

For example: "release-notes-from-tickets: turns merged tickets into customer-facing release notes. Changed after testing: write feature names exactly as they appear in the product."

## Related adventures

- **Advanced Skill Patterns**: skills that work together, carry their own knowledge and run code.
- **Stay Original with AI**: a skill that keeps your own thinking in every piece of work.
