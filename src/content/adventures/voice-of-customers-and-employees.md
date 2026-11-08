---
slug: voice-of-customers-and-employees
emoji: 💬
icon: chat
title: "Voice of Customers and Employees"
walkaway: "A real feedback question answered honestly: patterns with real quotes, charts that show the numbers behind them, and actions with confirmed owners"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone, Product, HR, Customer Facing, Marketing]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Build something
pattern: BUILD
wave: W2
slot: 30
next: [research-done-right, creating-apps-with-ai-done-right]
review: ready
video: /videos/voice-of-customers-and-employees.mp4
source: "New build. Analysis moves adapted from catch-up-may/content/week-2/project-6-data-scientist.md (decision first, describe the data before analyzing, numbers computed by running code, strategic questions plus data-sanity questions, visualization separate from interpretation, spot-check against the source). Theme and quote rules adapted from monday-client/monday-pm-course/content/module-2/skill-templates/feedback-synthesizer.md (exact counts, verbatim quotes, two data points per theme, leftover bucket, sample-size warning) and monday-client/monday-pm-course/content/module-4/skills/multi-source-synthesis.md (source attribution, convergence / gaps / contradictions). Question kinds, the explore-to-act trail and the bias list from Nufar's 8 Nov 2026 review (videos/voice-of-customers-and-employees/notes.md). Customer-data rule from monday-client/monday-managers-training/Session 1/slide-claude-permissions-at-monday.md. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Changed 2026-11-08 (second review): strong-model recommendation, self-explanatory quote and expected-theme checks, Step 3 analysis moves and root-cause questions in plain words.
- Model line sits in Before you start (seen by everyone, including people who skip to Step 3). Step 3 moves are her list in plain words (Catch-Up P6 Step 6 already supplied "say what could mislead"); the four-question table (who, since when, compared with what, what comes first) is absorbed into the moves table.

Adaptation note (2026-11-08, Nufar's review of the page)
- Why: her twofold motivation. Everyone at Monday (R&D, go-to-market, G&A) has customers, internal (employees) or external, and wants to hear more from them; AI widens how much you capture, from unintentional sources (call transcripts, tickets) and intentional ones (surveys, structured forms). Old "themes that rest on two comments" flag replaced by "one loud voice", since the rule is two different people per theme.
- Step 1 names the question's kind, in her three, in plain words: open and curious (patterns across many conversations), summarize and analyze (structured or numerous sources), look for actions and concrete findings. A table gives each kind a Monday example and where it starts.
- The bridge between deep analysis and ad hoc use: one trail, explore → sharpen → analyze → act, with skip lines by kind (open: Step 2; sharp: skip to Step 3; actions: Step 2 quickly, then Step 4). Skip lines sit in the Step 1 table and one line at the end of Step 2; the Step 3 prompt works in a fresh chat for people who skipped. Said once in Step 1: every prompt carries the same honesty rules, so an ad hoc run is as safe as a full one.
- Honesty rules made concrete, identical in the Step 2 and Step 3 prompts and carried into Step 4: word-for-word quotes with item IDs, counts by code with n on every figure, two different people per theme, groups under 10 people get counts only and are called an early signal, no trend or cause from a small or single-source sample, named biases (people with a problem write tickets, customers who left and survey skippers are missing, loud voices repeat, recency, the person's own expectations, the AI reading intent or emotion into words).
- Step 2 ends by proposing three sharper questions, so people sharpen before analyzing. Step 3 adds charts with titles that state the finding.
- Data rule shortened to Monday's one hard rule plus one general sentence on employee data (8 Nov: detailed people-data rules are a gray zone).
- Go further: the feedback skill now asks the question's kind first and runs the matching pass with the honesty rules (the ad hoc bridge). To fit the 1,800-word cap it points to the Skills adventure's Build a skill prompt with a one-paragraph answer to paste, per the 8 Nov rule (point to Build a skill, no thinner copy); the earlier dedicated skill prompt was cut. Round-over-round check kept to one line.
- Length: 2,464 words on the first full draft; 1,796 (lint) after tightening. The honesty rules are repeated in full in the Step 2 and Step 3 prompts, the price of letting Step 3 run cold for a sharp question.
- Kept from the 22 Oct build: the "what AI tends to do" table (folded into one line on 8 Nov, second review), the data-question table, expected themes named before the AI sees the data, leftover signals, spot-checks, the owned action list and readout, the monday board for the action list.

Earlier adaptation (2026-10-22, slot 30 [Inbar 10]): kept from Catch-Up P6 the decision-first framing, describe the data first, code-computed numbers, spot-checks and the strategic and data-sanity questions; kept from Monday's PM-course skills the exact counts, verbatim quotes, two data points per theme, leftover bucket, source attribution and contradictions. Cut the Data Scientist worker, executive brief format, vibe-coding rules and dashboard build (Creating Apps covers them), embedded spreadsheet AI, external + internal synthesis, Sarah Chen.

Open items
- Employee comments: the page now carries one general line (follow Monday's guidelines on employee data). Inbar may still want to confirm whether Monday HR has a rule on engagement-survey comments in Claude.
- Ticket data through Kremer: not named on the page; confirm whether it is reachable before adding it.
- Keren Q2 (how skills are added at Monday) affects the Customize → Skills line in Go further.
- The Step 2 "In Claude" line assumes Claude reads a Drive folder and a monday board through the connectors and runs code on the files (code execution is approved per the Claude-at-Monday slide).
- Prompt test in a fresh Claude chat: pending (playbook step 4), including the Step 3 prompt run cold by someone who skipped Step 2.
- Video script on hold until Nufar approves this page.
Changed 2026-11-08: self-contained skill prompt replaces the pointer to another adventure (HARD RULE).
-->

# 💬 Voice of Customers and Employees

**Answer a real question about what customers or employees say, with honest patterns, real quotes, clear charts and owned actions.**

## Why this adventure

Whatever your part of Monday, R&D, go-to-market or G&A, you have customers: monday.com customers or Monday employees. You always want to hear more from them, and AI widens how much you capture: what people say unprompted, in call transcripts and tickets, and what they say when asked, in surveys.

AI also makes three mistakes easy: themes built on one loud voice, quotes nobody wrote, and a summary with no decision at the end.

## The trail

1. **Frame the question**: its decision and kind decide where you start.
2. **Explore and surface patterns**, so an open question turns into sharper ones.
3. **Sharpen and analyze**, to see where a theme concentrates, since when, and why.
4. **Turn findings into owned actions**, because feedback matters when someone acts on it.

## Before you start

Have one real set of feedback ready, ideally a few dozen items. Use a strong model for this work, for example Opus in Claude, because it reads many items, keeps quotes exact and runs the counts as code.

## Step 1: Frame the question

**Think first for yourself, without AI.** Be ready to answer four questions:

- **What decision will this feedback inform?** For example, what to fix first in onboarding.
- **Which sources answer it?** For example call transcripts, tickets and surveys.
- **Who is missing?** For example, customers who left and employees who skipped the survey.
- **What do you expect to find?** Name three themes now, before the AI sees the data, so you can check them in Step 2.

Then name the kind of question:

| What kind of question is it? | Example at Monday | Where you start |
| --- | --- | --- |
| **Open and curious:** which patterns come up across many conversations? | What do customers tell Customer Success about the automation builder? | Step 2 |
| **Summarize and analyze** structured or numerous sources | How did survey comments on workload change by department? | Skip to Step 3 |
| **Find action items** and concrete findings | What to fix first in onboarding, from last month's tickets? | Step 2 quickly, then Step 4 |

Every prompt here carries the same honesty rules against AI's habits (themes that sound typical, loose counts, dropped comments), so a quick run is as safe as the full trail.

**What may go in.** Nothing that Monday's customers uploaded to their own monday boards goes into Claude. Monday's own data about customers, such as tickets, surveys and call notes, is fine. For employee feedback, follow Monday's guidelines on employee data.

## Step 2: Explore and surface patterns

A theme is a point that several different people make.

### Prompt: Explore the feedback

**What this does:** describes your data, builds themes with counts and real quotes, checks your expectations, and proposes sharper questions.

Copy the prompt below into an AI tool, ideally where you will do the actual work. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me explore feedback honestly. First ask me to brain dump my thoughts: the decision, the sources, who is missing, the themes I expect. If I already answered a question earlier in this chat, don't ask it again. Then ask for the feedback, or read the sources I name.

Describe the data first: items per source, date range, duplicates, number of different people. Wait for my approval.

Then build 3 to 7 themes. Honesty rules:
- Use only these items. Quote word for word with the item ID, in the original language plus a translation.
- Compute numbers with code and show n, the items behind each figure.
- A theme needs two different people.
- Under 10 people: counts only, called an early signal, no comparison.
- No trend or cause from a small or single-source sample.
- Name the biases that apply: ticket writers have a problem; people who left or skipped the survey are missing; loud voices repeat; recency; my expectations; you reading intent into words.

Output: a table (theme, what people say in one sentence, number of people, sources, two quotes from two people); signals that fit no theme; where sources disagree; my expected themes as found, partly found or absent; three sharper questions they raise.
```

**Check three quotes yourself.** Open your original export, find each quote by its item ID, and confirm the words match exactly and the item says what the theme claims. AI tools sometimes polish or merge quotes.

**Check your expectations.** If every theme you expected shows up just as you predicted, the AI may simply be agreeing with you. Paste: "For each theme I expected, show the strongest evidence against it from these items, with item IDs, and say whether the theme still holds." Keep a theme only if it survives.

Looking for actions? Go to Step 4.

**In Claude:** give it your Drive folder of exports and your monday feedback board.

## Step 3: Sharpen and analyze

Analysts explore data with these moves. The prompt below proposes the ones that fit and runs them.

| What to ask for | Example at Monday |
| --- | --- |
| **Break it down** by segment, team, region, plan or tenure | Is permissions confusion mostly among enterprise admins? |
| **When did it start?** Compare before and after a change | Did automation builder comments change the week of a release? |
| **What shows up together** | Do onboarding and permissions complaints come together? |
| **Read the extremes** | What do the angriest tickets and the outliers share? |
| **One source or everywhere?** | Is workload in every department, or one team? |
| **Dig for the cause** | Why do admins get stuck on permissions? Then why that? |
| **Test the cause** | Do accounts that mention slow support renew less? Or do unhappy accounts complain about everything? |
| **Say how sure you are:** a cause stays a hypothesis until a check confirms it | Add a survey question, or look at usage data |

### Prompt: Analyze with charts and causes

**What this does:** runs the moves that fit your questions, with charts, then finds and tests the likely cause of the top theme.

Stay in the same chat. If you skipped Step 2, open a new chat in an AI tool that can run code. Paste the prompt below.

```
Help me analyze feedback. If this chat has no feedback yet, first ask me to brain dump my thoughts (the decision, the sources, who is missing, what I expect), then ask for the feedback, describe it and wait for my approval. If I already answered a question earlier in this chat, don't ask it again.

Ask which questions I want answered; if I have none, propose three. For each, propose the moves that fit and wait for my choice: break it down by segment, team, region, plan or tenure; find when it started, against release, pricing or reorg dates; compare the same group before and after a change; find themes that appear together; read the most negative, most positive and outlier items; check whether it comes from one channel, account or loud group.

For the top theme, dig for the cause: ask "why" step by step through the quotes, showing the items behind each step. Then test it: does it hold in more than one group, what else changed at the same time, does more of it go with lower scores or churn, could the outcome cause the comments instead. Call the cause a hypothesis and name the check that would confirm it.

For each answer: compute it with code, draw one chart titled with the finding and n (the items behind each figure) on every bar, answer in one sentence, and say what could mislead.

Honesty rules:
- Use only these items. Quote word for word with the item ID.
- A theme needs two different people.
- Under 10 people: counts only, called an early signal, no comparison.
- No trend or cause from a small or single-source sample.
- Name the biases that apply: ticket writers have a problem; people who left or skipped the survey are missing; loud voices repeat; recency; my expectations; you reading intent into words.
```

Spot-check two numbers against the raw export: a total, and the figure behind the biggest claim.

## Step 4: Turn findings into owned actions

Every action gets an owner who agreed and a reply to the people who gave the feedback: people who see it used answer again.

### Prompt: Owned action list and readout

**What this does:** drafts an owned action list with you, then writes a one-page readout.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Turn the findings in this chat into actions for my decision. Keep this chat's honesty rules: every insight carries its count, n and a word-for-word quote with its item ID.

Ask which two or three insights matter most. For each, interview me one question at a time: the action, its owner, the first step and date, the signal that would show it worked, and what we tell the people who gave this feedback. Challenge actions that are vague or too big for one owner.

Write the action list as a table with those columns, plus the insight, count and one quote. Mark every owner "to confirm". Wait for my approval.

Then write a one-page readout: the decision, the top insights and charts, whose voice is missing, the biases that apply, and the action list.
```

Send each owner their action and ask for a yes, then put the list on a monday board, one item per action. You are done when every owner has confirmed and the readout reaches the decision makers. At the next round, check whether each signal moved.

## Go further

**Make it repeatable for ad hoc questions.** Do this when feedback questions arrive every week.

### Prompt: Build a feedback skill

**What this does:** the AI writes a skill that asks which kind of question you have, then runs the matching pass with the same honesty rules as this page.

Stay in this chat, so it already holds your run, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me build a skill for the feedback questions I get every week: saved instructions an AI tool follows for one recurring task. Use this chat and what you know about me. Ask me to brain dump the questions I usually get first. If I already answered a question earlier in this chat, don't ask it again. Then ask one question at a time for what is missing: the words I would use to start it, my usual sources, and who reads the result.

The skill works in this order:
1. Ask which kind of question I have: open and curious (which patterns come up across many conversations), summarize and analyze (structured or numerous sources), or find action items.
2. Ask for the feedback, or read the sources I name. Describe the data: items per source, date range, duplicates, number of different people. Wait for my approval.
3. Run the matching pass. Open: 3 to 7 themes in a table (theme, what people say in one sentence, number of people, sources, two quotes from two people), signals that fit no theme, where sources disagree, three sharper questions. Summarize and analyze: propose the moves that fit and wait for my choice (break it down by group, when it started, before and after a change, what shows up together, the extremes, one source or everywhere); one chart per answer, titled with the finding. Action items: the top insights, each with an action, owner, first step and date, and the signal that would show it worked. Mark every owner "to confirm".

Honesty rules on every pass:
- Use only these items. Quote word for word with the item ID, in the original language plus a translation.
- Compute numbers with code and show n, the items behind each figure.
- A theme needs two different people.
- Under 10 people: counts only, called an early signal, no comparison.
- No trend or cause from a small or single-source sample. A cause stays a hypothesis, with the check that would confirm it.
- Name the biases that apply: ticket writers have a problem; people who left or skipped the survey are missing; loud voices repeat; recency; my expectations; you reading intent into words.

Check my tool's current documentation for its skill format, and tell me if you cannot. Write the complete skill in one block: a short name in lowercase with hyphens, a description in my words so it starts when I need it, the steps above, the honesty rules in full, the output templates, and three test requests, one for each kind of question. Then tell me how to add it, and to close and reopen my tool afterwards.
```

Add the skill, then close and reopen your AI tool so it finds it. **In Claude:** add it under Customize → Skills.

## Proof of work

In "what I built", name your question and its kind, the finding that surprised you, and one action with its owner.

For example: "Action question, 140 onboarding comments. Surprise: admins ask about permissions far more than templates. Action: a permissions guide, owned by Dana."

## Related adventures

- **Research Done Right**: add outside evidence to what people say.
- **Creating Apps with AI, Done Right**: turn your charts into a dashboard.
