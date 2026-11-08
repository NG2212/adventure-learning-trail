---
slug: your-ai-taste-test
emoji: 🧭
icon: compass
title: "Your AI Taste Test"
walkaway: "Your representative task set, a blind comparison of alternatives (models, tools, features) on those tasks, a routing card, and a retest ritual for every new release"
category: Work smarter with AI
levels: [Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Learn something
pattern: TOUR
wave: W3
slot: 1
next: [de-slop, token-smartness]
review: ready
source: "Adapted from summer-challenge/labs/taste-test.md (blind judging, fairness rules, hold-constant design, thinking setting as a contestant, routing card, taste notes, retest ritual) and personal-model-benchmark/ (README, WEBSITE-SPEC, lab-handout.md Parts 1-2 and 'From here on', reference-card.md: the Work Mix, scoring guide before answers, made-up material, read all before judging, clear or close, must-haves / answers / tie-breakers, Switch / Split / Stay, refresh triggers, test on day one, strict AI judge). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 1 [Inbar 5])
- Kept: the Work Mix as the task-finding map (most important step, per design notes); scoring guide written before any answer; made-up material in every request; same request, same settings, fresh chat; hide the names; read all answers before judging; one pick + one line on why + clear or close; the decision rule (clear win moves you, close call goes to tie-breakers); Switch / Split / Stay; retest ritual and the three refresh triggers; test on day one, trust online reactions after a week; strict AI judge (rank first, at most one top mark, your scores decide) in Go further.
- Cut: Prompt 0 (web-search routing folklore), cross-vendor flagship comparisons, the friend option for hiding names (self-work rule), the blind-shuffle script, the scored and automated parts (API keys, OpenRouter, runner), the Maya example, the personal-life row of the Work Mix, public arenas.
- Added for Monday: options table limited to Monday's toolkit (Claude tiers, extended thinking, Claude vs Claude Code, Claude Code vs Cursor, the AI built into monday.com, a skill or a project vs plain chat); Work Mix row "Does it use your tools?"; a fixed test board or a saved snapshot of Kremer data so tool tasks stay identical across retests; "approved at Monday" as the must-have; the task set and routing card kept together on a personal monday board; team task set in Go further. Word count 1,798 (lint) after cutting an agent-tool Go further item and the spreadsheet how-to to fit the cap.
- "Routing card" used as the artifact name (Inbar promise and inventory); the benchmark's public name "AI lineup" dropped.

Open items
- Assumed only Monday's toolkit is in scope (Claude, Claude Code, Cursor, monday.com AI features). If other vendors' chat tools are approved at Monday, the Models row could add them.
- Whether employees can choose the model for every task in Claude.
- Name of the AI built into monday.com that would draft a board update (written generically as "the AI built into monday.com"). Unverified.
- Model menu may move with Unified Claude from 10 Nov 2026; recheck the "In Claude" line in Step 2 after the switch.
- Hands-on check: an incognito chat in Claude Enterprise at Monday offers the model menu and the extended thinking toggle (Step 2 assumes both).
- Codex omitted (availability at Monday "likely", unconfirmed).
- Prompt test in a fresh Claude chat: pending (playbook step 4), now including whether "shuffle with code" runs in Claude chat with code execution on.
23 Oct: do-this line on every prompt
Changed 2026-11-05: think-first opener per the 23 Oct rule; chat and Cowork treated as one surface.

Changed 2026-11-08 (review round, four reviewers: advanced Monday user, power user/engineer, hands-on feasibility tester, house-rules editor)
- Blind judging stays blind: Hide the names strips tells (sign-offs, a model naming itself, tool-specific formatting), shuffles with code when the tool can run code, and shows answers "exactly as written apart from those removals"; the page says to read only the relabeled answers.
- Results that cannot be hidden (a file, a board change, a code change) are judged with names visible, against the scoring guide, and counted apart from the blind wins; Claude Code against Cursor starts from the same commit and instructions file and is checked with tests or a diff review. The routing card prompt asks for these results.
- Fair settings: incognito chats in Claude so memory does not shape the answers (incognito available on all plans, Enterprise included, support.claude.com, Nov 2026); across different tools, note the setting differences.
- Lighter load: Before you start is now the starting path, "four tasks and two options". The holding document is gone: work one request at a time and paste each answer straight from its chat into the Hide the names chat, unread.
- Why this adventure supports the approved video: the default named, the task set called the personal benchmark, the routing card defined in plain words, "every new model, tool or feature gets the same fair test". "Roster" defined in passing in the retest ritual, next to Switch / Split / Stay.
- Find my tasks: proposes candidates, the person chooses; asks for a fixed source for every tool task. Kremer glossed once; a saved snapshot defined as data exported once and saved as a file.
- Routing card prompt takes winners, lines and clear/close from the chat and asks only for what is missing.
- Step 3 opens with its why. QBR spelled out; "afterward"; tie-breaker "token use" became "usage limits or cost" in Step 4's table and prompt (Token Smartness reason reworded, link kept).
- AI judge: a model you are not testing, ideally from a different family, because judges favor their own family. "Build a team task set" cut (same prompt on team work, no new capability).
- Cuts to fit the cap (2,032 after the fixes, 1,844 final): Work Mix table merged from three columns to two (both ends shown through Monday examples); "This is the most important step" line; the "one task where a weak answer shows fast, one matter of taste, one you can check" line (restore if she misses it); Step 4's two-row table turned into one sentence; the proof-of-work example; "why it earns its place" in Find my tasks; trail reasons, the promise line and several do-this lines tightened. Above the 1,800 aim; further cuts would have hit the taste notes, the surprise-rerun line or the day-one rule.
- Judgment calls: (1) one request at a time, straight into the blind chat, chosen over "open the blind chat first", because it keeps the rail order and suits incognito chats, which are not saved; (2) "test a project inside it", since incognito chats sit outside projects; (3) judge wording leads with "a model you are not testing", because Monday may only offer one model family; (4) "same fair test" kept over the video's "objective test" to stay in the page's own voice; (5) "roster" placed in the retest ritual, where Switch / Split / Stay applies to new options.
-->

# 🧭 Your AI Taste Test

**Find the tasks that represent how you work, compare AI options on them with the names hidden, and give every new release a fair test.**

## Why this adventure

New models, tools and features arrive almost every month. It is easy to stay with the default, or choose by habit or the loudest post online, and none of these shows how an option performs on your own work.

A **taste test** shows exactly that. You give the same real request to two or more options, hide which answer came from which, and pick the one you would use.

Your **task set** is your personal benchmark: four to six requests that represent how you work. Your **routing card** says which option you use for which kind of task. Build them once, and every new model, tool or feature gets the same fair test.

## The trail

1. **Find the tasks that represent your work**, because a test only tells you about the work it contains.
2. **Choose your options and run them fairly**, so only the option changes.
3. **Hide the names and pick**, so the answer alone decides.
4. **Decide and set your retest ritual**, so every new release gets the same test.

## Before you start

Start with four tasks and two options you can use at Monday, for example Opus and Sonnet in Claude.

## Step 1: Find the tasks that represent your work

**Think first for yourself, without AI.** What did you ask AI most often last week? Which rare task matters a lot, for example a QBR (quarterly business review) or an incident write-up? What do you wish AI did well for you?

The **Work Mix** is six questions that check whether your set covers both ends of what you really do:

| Question | Both ends, for example |
| --- | --- |
| **What kind of work?** | Writing, analysis, research, advice, planning, making things |
| **How often?** | The weekly team update and the rare board update |
| **What is at stake?** | A Slack reply and a note to an account that may churn |
| **Where does the AI start?** | A blank page, or release notes from a list of tickets |
| **Does it use your tools?** | Chat only, or a status drafted from a monday board |
| **What is on your wish list?** | Something AI never did well for you, such as an incident write-up |

### Prompt: Find my tasks

**What this does:** the AI interviews you about your thoughts and proposes candidate tasks; you choose four to six, each with made-up material and a scoring guide.

Copy the prompt below into an AI tool, ideally where you will do the actual work. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me build my AI task set: four to six real requests from my work that I will give, unchanged, to several AI options at every new release.

Ask me to brain dump or paste all my thoughts on this before you start. Use what you know about me; ask only for gaps, one question at a time, ten at most.

Map my work with the Work Mix: kind of work (writing, analysis, research, advice, planning, making things); how often (daily or rare); stakes (quick ask or costly mistake); starting point (blank page or my own material); tools (chat only, or files, boards and apps); wish list (something AI has never done well for me). Ask about the empty parts. Then propose candidate requests; I choose which to include. Do not decide what good means for me; wait for my answers.

For each task I choose: a short name; the complete request with realistic made-up material (invented names and numbers); and a two-line scoring guide, in my words, from asking me how I would tell a great answer from a weak one. For any task that uses a tool, ask me for a fixed source, so every retest gets the same input.

Ask me whether I would really send each request, and revise until I say the set is mine. Then give me one document with the numbered tasks.
```

**Write what good looks like now.** A scoring guide written before you see any answer is a commitment; written afterward, it only explains a choice.

A fixed source is a test monday board with made-up items, or a saved snapshot: data you export once and save as a file, for example from Kremer, Monday's way to reach internal data such as Salesforce records, with your own permissions. Save the task document.

## Step 2: Choose your options and run them fairly

An **option** is anything you can use for the same task:

| What you compare | For example |
| --- | --- |
| **Models** | Opus against Sonnet; extended thinking on against off |
| **Tools** | Claude against Claude Code; Claude Code against Cursor; Claude against the AI built into monday.com |
| **Features** | With your skill against without it; a project against a plain chat |

Work one request at a time. Open a fresh chat in each option, paste the request exactly as saved, and change only the option: keep web search, memory and the thinking setting the same. Different tools cannot match every setting, so note the differences. Leave the answers unread for Step 3.

**In Claude:** use an incognito chat for each test, so memory does not shape the answer, and choose the model in the model menu. To test a project, run that side inside it.

A file, a board change or a code change cannot be hidden: judge it with the names visible, against your scoring guide, and count it apart from the blind wins. For Claude Code against Cursor, start both from the same commit and instructions file, and check the results with tests or a diff review.

## Step 3: Hide the names and pick

Seeing the names sways your judgment, so you pick first.

### Prompt: Hide the names

**What this does:** removes the names, shuffles the answers, records your picks, and keeps the key until you type "reveal".

Open a fresh chat, ideally with a model you are not testing, and paste the prompt below. Then paste each answer straight from its chat, unread, with its option's name.

```
I am running a blind taste test of AI options, one request at a time. For each request I will paste several answers, each labeled with its option.

Remove the names and anything that reveals the writer: sign-offs, a model naming itself, tool-specific formatting. If you can run code, shuffle with code so the order is truly random; otherwise shuffle fresh each time. Relabel the answers A, B, C and show them in full, exactly as written apart from those removals. Do not comment, rank or hint.

Keep the key to yourself. When I give you my pick, my one line on why, and "clear" or "close", record them and ask for the next request. When I type "reveal", show the key, my picks with the real names, and the wins for each option.
```

**Read only the relabeled answers, all of them, before you judge any.** Then ask: which would I use as it is? Pick one letter, write one concrete line on why ("caught the renewal risk", "half the length and nothing lost"), and mark the win **clear** or **close**.

Type "reveal" and count the wins. If a result surprises you, run that request again: the same AI can answer differently twice.

## Step 4: Decide and set your retest ritual

With the names visible, add what the answers cannot show: **can I use it** (approved at Monday for this work, and you have access) and **what breaks a tie** (speed, usage limits or cost, features you enjoy, the effort of changing habits).

The rule: **a clear win on a task that matters moves you. A close call goes to the tie-breakers.**

### Prompt: My routing card and retest ritual

**What this does:** turns your picks into a routing card, verdicts for new options, and a retest ritual.

Stay in the chat where you revealed the names and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
I just ran a blind taste test of AI options and revealed the names. Take each request's winner, my line on why, and clear or close from this chat.

Then interview me one question at a time, only for what is missing: whether this is my first routing or a test of something new; results I judged with the names visible; must-haves (can I use each option at Monday for this work?); tie-breakers (speed, usage limits or cost, features I enjoy, habits).

Rule: a clear win on a task that matters moves me; a close call goes to the tie-breakers.

Give me one page:
1. My routing card: task type, default option, when to use another one.
2. For each new option: Switch (new default), Split (name the tasks it takes) or Stay (test again next release), with one sentence of reasoning.
3. Three qualities I value in an answer, worded to stay true after products are renamed.
4. My retest ritual in five steps.
```

**The retest ritual.** At every release, rerun the same requests, unchanged, against what you use today. Switch, Split or Stay decides whether the new option joins your roster: the options on your routing card. Test on day one; trust online reactions after a week. Refresh the task set only when your work changes, a new kind of AI ability arrives, or a task stops separating the options.

Keep the task set and routing card together, for example on your personal monday board. You are done when you would rerun both as they are.

## Go further

**Bring in an AI judge.** Do this when a win was close, to test whether your taste can be written down. Score the hidden answers yourself first.

**What this does:** a strict judge scores hidden answers against your scoring guide.

Open a new chat, so the judge never sees the key, and paste the prompt below. Use a model you are not testing, ideally from another family: AI judges favor their own family.

```
Act as a strict judge for one task of my AI taste test. I will paste my scoring guide, then answers labeled A, B, C.

First, turn my guide into what earns a 5 (I would use it as it is), a 3 and a 1 (misses the point). Ask me to approve it, and wait.

Then read all answers, rank them, and score each from 1 to 5 with one line of evidence quoted from the answer. Give at most one 5. Ignore length and polish unless my guide asks for them.
```

Where you and the judge differ, your guide is usually missing something you care about. Your scores decide.

## Proof of work

In "what I built", name your task set, the options you compared, and the verdict or routing rule that surprised you.

## Related adventures

- **Stay Original with AI**: turn your taste into standards your AI follows.
- **Token Smartness**: understand token use, which drives usage limits and cost.
