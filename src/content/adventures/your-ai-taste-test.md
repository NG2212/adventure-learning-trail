---
slug: your-ai-taste-test
emoji: 🧭
icon: compass
title: "Your AI Taste Test"
walkaway: "Your representative task set, a blind comparison of alternatives (models, tools, features) on those tasks, a routing card, and a retest ritual for every new release"
category: Work smarter with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Moderate
outcome: Learn something
pattern: TOUR
wave: W3
slot: 1
next: [de-slop, token-smartness]
source: "Adapted from summer-challenge/labs/taste-test.md (blind judging, fairness rules, hold-constant design, thinking setting as a contestant, routing card, taste notes, retest ritual) and personal-model-benchmark/ (README, WEBSITE-SPEC, lab-handout.md Parts 1-2 and 'From here on', reference-card.md: the Work Mix, scoring guide before answers, made-up material, read all before judging, clear or close, must-haves / answers / tie-breakers, Switch / Split / Stay, refresh triggers, test on day one, strict AI judge). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 1 [Inbar 5])
- Kept: the Work Mix as the task-finding map (most important step, per design notes); scoring guide written before any answer; made-up material in every request; same request, same settings, fresh chat; hide the names; read all answers before judging; one pick + one line on why + clear or close; the decision rule (clear win moves you, close call goes to tie-breakers); Switch / Split / Stay; retest ritual and the three refresh triggers; test on day one, trust online reactions after a week; strict AI judge (rank first, at most one top mark, your scores decide) in Go further.
- Cut: Prompt 0 (web-search routing folklore), cross-vendor flagship comparisons, the friend option for hiding names (self-work rule), the blind-shuffle script, the scored and automated parts (API keys, OpenRouter, runner), the Maya example, the personal-life row of the Work Mix, public arenas.
- Added for Monday: options table limited to Monday's toolkit (Claude tiers, extended thinking, Claude chat vs Cowork, Claude Code vs Cursor, the AI built into monday.com, a skill or a project vs plain chat); Work Mix row "Does it use your tools?"; a fixed test board or a saved snapshot of Kremer data so tool tasks stay identical across retests; "approved at Monday" as the must-have; the task set and routing card kept together on a personal monday board; team task set in Go further. Word count 1,798 (lint) after cutting an agent-tool Go further item and the spreadsheet how-to to fit the cap.
- "Routing card" used as the artifact name (Inbar promise and inventory); the benchmark's public name "AI lineup" dropped.

Open items
- Assumed only Monday's toolkit is in scope (Claude, Cowork, Claude Code, Cursor, monday.com AI features). If other vendors' chat tools are approved at Monday, the Models row could add them.
- Whether employees can choose the model inside Cowork; the table says "where you can choose it".
- Name of the AI built into monday.com that would draft a board update (written generically as "the AI built into monday.com").
- Codex omitted (availability at Monday "likely", unconfirmed).
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🧭 Your AI Taste Test

**Find the tasks that represent how you work, compare AI options on them with the names hidden, and give every new release a fair test on your own work.**

## Why this adventure

New models, tools and features reach your AI tools almost every month. Most people choose by habit or by the loudest post online, and neither shows how an option performs on their own work.

A **taste test** shows exactly that. You give the same real request to two or more options, hide which answer came from which, and pick the one you would use.

The most valuable thing you build here is your **task set**: four to six requests that represent how you work. Build it once, and every future release gets a fair test.

## The trail

1. **Find the tasks that represent your work**, because a test can only tell you about the work it contains.
2. **Choose your options and run them fairly**, so the option is the only thing that changes.
3. **Hide the names and pick**, so the answer alone decides.
4. **Decide and set your retest ritual**, so every new release gets the same quick test.

## Before you start

You will compare two to four options you can use at Monday, for example Opus and Sonnet in Claude.

## Step 1: Find the tasks that represent your work

This is the most important step: if every task is an email, you only learn which option writes the best email.

**Start without AI.** Close the chat. Write down the requests you made to AI most often last week, one rare task that matters a lot (a QBR or an incident write-up), and one thing you wish AI did well for you.

The **Work Mix** is six questions that check whether your set covers what you really do:

| Question | Cover both ends | For example |
| --- | --- | --- |
| **What kind of work?** | Writing, analysis, research, advice, planning, making things | Forecast commentary, a competitor brief |
| **How often?** | Daily habits and rare moments | The weekly team update, the board update |
| **What is at stake?** | Quick asks and costly mistakes | A Slack reply, a note to an account that may churn |
| **Where does the AI start?** | A blank page or your own material | Release notes from a list of tickets |
| **Does it use your tools?** | Chat only, or files, boards and apps | A status drafted from a monday board in Cowork |
| **What is on your wish list?** | Something AI has never done well for you | A clear write-up from a long incident thread |

Aim for one task where you spot a weak answer quickly, one matter of taste (a message in your own voice), and one you can check.

### Prompt: Find my tasks

**What this does:** the AI interviews you with the Work Mix and proposes four to six tasks, each with made-up material and a scoring guide.

```
Help me build my AI task set: four to six real requests from my work that I will give to several AI options, names hidden, unchanged, at every new release.

I will paste or dictate my notes. Use what you already know about me as background; ask only for gaps, one question at a time, ten at most.

Map my work with the Work Mix: kind of work (writing, analysis, research, advice, planning, making things); how often (daily or rare); stakes (quick ask or costly mistake); starting point (blank page or my own material); tools (chat only, or files, boards and apps); wish list (something AI has never done well for me). Ask about the empty parts. Ask me which requests to include. Do not choose tasks or decide what good means for me; wait for my answers.

For each task, propose: a short name; why it earns its place; the complete request with realistic made-up material (invented names and numbers); and a two-line scoring guide, in my words, from asking me how I would tell a great answer from a weak one.

Ask me to review every request: would I really send this? Revise until I say the set is mine. Then give me one document with the numbered tasks.
```

**Write what good looks like now.** A scoring guide written before you see any answer is a commitment; written afterwards, it only explains a choice you already made.

For a tool task, use a fixed source, such as a test monday board with made-up items or a saved snapshot of Kremer data, so every retest gets the same input. Save the document in Drive.

## Step 2: Choose your options and run them fairly

An **option** is anything you can use for the same task:

| What you compare | For example |
| --- | --- |
| **Models** | Opus against Sonnet; extended thinking on against off |
| **Tools** | Claude chat against Cowork; Claude Code against Cursor; Claude against the AI built into monday.com |
| **Features** | With your skill against without it; a project against a plain chat |

Pick two to four options, to **choose which option to use for which task** or to **test something new** against what you use today.

For each request, open a fresh chat in each option, paste the request exactly as saved, and change only the option you are testing: web search, memory and the thinking setting stay the same everywhere. Copy each answer into one document under the option's name, without reading yet. For a file or a board update, save one result per option and note how many follow-up messages each needed.

**In Claude:** choose the model in the model menu, set extended thinking the same way for every run, and work outside your projects unless you are testing a project.

## Step 3: Hide the names and pick

Hide the names in a fresh chat with the prompt below, ideally with a model you are not testing. A spreadsheet sorted by a `=RAND()` column also works.

### Prompt: Hide the names

**What this does:** removes the names, shuffles the answers, records your picks, and keeps the key until you type "reveal".

```
I am running a blind taste test of AI options, one request at a time. For each request I will paste several answers, each labeled with its model or tool.

Remove the names and any line that reveals the writer. Shuffle with a fresh shuffle each time, relabel the answers A, B, C, and show them in full, exactly as written. Do not comment, rank or hint.

Keep the key to yourself. When I give you my pick, my one line on why, and "clear" or "close", record them and ask for the next request. When I type "reveal", show the key, my picks with the real names, and the wins for each option.
```

**Read every answer before you judge any.** Then ask: which would I use as it is? Pick one letter, write one concrete line on why ("caught the renewal risk", "half the length and nothing lost"), and mark the win **clear** or **close**. These lines are your taste, written down.

Type "reveal" and count the wins. If a result surprises you, run that request again: the same AI can answer the same request differently twice.

## Step 4: Decide and set your retest ritual

With the names visible, add what the answers cannot show:

| Question | What counts |
| --- | --- |
| **Can I use it?** | It is approved at Monday for this work, and you have access |
| **What breaks a tie?** | Speed, token use, features you enjoy, the effort of changing habits |

The rule: **a clear win on a task that matters moves you. A close call goes to the tie-breakers.**

### Prompt: My routing card and retest ritual

**What this does:** turns your picks into a routing card (your default option, and which tasks go elsewhere), verdicts for new options, and a retest ritual.

```
I just ran a blind taste test of AI options on my saved requests and revealed the names. Interview me one question at a time.

Ask whether I am choosing my routing for the first time or testing something new. Then, per request: the winner, my line on why, clear or close. Then must-haves (can I use each option at Monday for this work?) and tie-breakers (speed, token use, features I enjoy, habits).

Rule: a clear win on a task that matters moves me; a close call goes to the tie-breakers.

Give me one page:
1. My routing card: task type, default option, when to use another one.
2. For each new option: Switch (new default), Split (name the tasks it takes) or Stay (test again next release), with one sentence of reasoning.
3. Three qualities I value in an answer, worded to stay true after products are renamed.
4. My retest ritual in five steps.
```

**The retest ritual.** At every release, rerun the same requests, unchanged, against what you use today. Test on day one; trust online reactions after a week. Refresh the task set only when your work changes, a new kind of AI ability arrives, or a task stops separating the options.

Keep the task set and the routing card together, for example on your personal monday board. You are done when you have a routing card and a task set you would rerun as it is.

## Go further

**Bring in an AI judge.** Do this when a win was close, to test whether your taste can be written down. Score the hidden answers yourself first.

**What this does:** a strict judge scores hidden answers against your scoring guide.

```
Act as a strict judge for one task of my AI taste test. I will paste my scoring guide, then answers labeled A, B, C.

First, turn my guide into what earns a 5 (I would use it as it is), a 3 and a 1 (misses the point). Ask me to approve it, and wait.

Then read all answers, rank them, and score each from 1 to 5 with one line of evidence quoted from the answer. Give at most one 5. Ignore length and polish unless my guide asks for them.
```

Where you and the judge differ, your guide is usually missing something you care about. Your scores decide.

**Build a team task set.** Do this when your team adopts tools together: run the Find my tasks prompt on your team's recurring work, such as release notes, and keep the set on the team's monday board.

## Proof of work

In "what I built", name your task set, the options you compared, and the verdict or routing rule that surprised you.

For example: "Five tasks from my customer success week, Opus against Sonnet. Sonnet won my customer follow-ups clearly; QBR summaries stay with Opus. Surprise: I picked the shorter answer every time."

## Related adventures

- **Stay Original with AI**: turn your taste into standards your AI follows.
- **Token Smartness**: understand token use, one of your tie-breakers.
