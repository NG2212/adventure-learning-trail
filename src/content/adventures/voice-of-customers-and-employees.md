---
slug: voice-of-customers-and-employees
emoji: 💬
icon: chat
title: "Voice of Customers and Employees"
walkaway: "A synthesis of real feedback you can act on and present: honest themes, real quotes, charts that answer your questions, and an action list with confirmed owners"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Product, HR, Customer Facing, Marketing]
audience: []
tool: Any AI tool
effort: Moderate
outcome: Build something
pattern: BUILD
wave: W2
slot: 30
next: [research-done-right, creating-apps-with-ai-done-right]
source: "New build. Analysis moves adapted from catch-up-may/content/week-2/project-6-data-scientist.md (decision first, describe the data before analysing, numbers computed by running code, strategic questions plus data-sanity questions, visualisation separate from interpretation, spot-check against the source). Theme and quote rules adapted from monday-client/monday-pm-course/content/module-2/skill-templates/feedback-synthesizer.md (exact counts, verbatim quotes, two data points per theme, leftover bucket) and monday-client/monday-pm-course/content/module-4/skills/multi-source-synthesis.md (source attribution, convergence / gaps / contradictions). Customer-data rule from monday-client/monday-managers-training/Session 1/slide-claude-permissions-at-monday.md. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 30 [Inbar 10])
- Kept from Catch-Up P6: "what decision does this serve" first; describe the data and flag quality issues before analysing; compute every number by running code; spot-check a total and the biggest claim against the raw file; the strategic-question set (who, when, compared with what, leading indicator, what is missing) and the data-sanity set (what could mislead), merged into one Step 3 table and prompt; chart and interpretation asked for separately.
- Kept from Monday's own PM-course skills: feedback-synthesizer (exact counts, verbatim quotes, every theme needs two or more data points, a bucket for signals that fit no theme) and multi-source-synthesis (every signal tagged to its source; disagreement between sources and missing voices reported as findings).
- Cut: the Data Scientist worker build, executive data brief format, vibe-coding rules and dashboard build (Creating Apps covers them), embedded spreadsheet AI, external + internal synthesis, all Catch-Up cross-references, Sarah Chen.
- Added for Monday: a thinking step without AI (decision, sources, who is missing, what may go in, expected themes written before the AI sees the data, so confirmation bias shows); the customer-data rule and employee-comment rules; where feedback lives (Drive, tickets, Slack, monday boards); Kremer in passing for context numbers; the "what AI tends to do" table; the owned action list with a signal to watch and a reply to the people who gave feedback; the action list as a monday board; Go further: repeatable skill, round-over-round comparison. Cut for length (1,822 → 1,767 words): a "hear both sides of one process" item (customer and employee feedback on the same process).

Open items
- RESOLVED 22 Oct (Nufar): the rule means customers' own board content, never Monday's own data about customers. Original note: Monday's one hard rule is "No customer data. Ever. Data that belongs to Monday's customers must never be entered into any Claude surface" (managers training slide). The speaker notes define it as data customers store inside monday.com products. This page treats customer feedback text (survey answers, ticket text, interview notes) as usable once names, emails, account IDs and any customer board content are removed, and tells people to ask IT Security when unsure. Confirm that reading before W2, and confirm whether ticket data is reachable through Kremer. If customer feedback text is off-limits in Claude, the customer half of this adventure needs a different sanctioned path.
- Employee comments: confirm with Inbar whether Monday HR has a rule on putting engagement-survey comments into Claude (anonymised export only? minimum group size?). Page says: anonymised comments, Monday's HR guidelines, groups only; the Step 3 prompt shows counts only for groups under 10 people.
- Keren Q2 (how skills are added at Monday) affects the Customize → Skills line in Go further.
- "In Claude Cowork" line assumes Cowork reads a Drive folder and a monday board through the connectors and runs code on the files (code execution is approved per the Claude-at-Monday slide). Unified Claude reaches all orgs 10 Nov 2026; freshness sweep may be needed.
- next: slugs research-done-right and creating-apps-with-ai-done-right; research-done-right file does not exist yet.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 💬 Voice of Customers and Employees


**Turn real feedback into honest themes, real quotes, clear charts and an action list that people own.**

## Why this adventure

Feedback reaches you from everywhere: survey answers, support tickets, interview notes, engagement survey comments, updates on a monday board. Synthesis means reading all of it, finding what many people say, and deciding what to do about it.

AI makes synthesis fast. It also makes three mistakes easy: themes that rest on two comments, quotes that nobody wrote, and a summary that ends with "interesting" instead of a decision.

Here you run the full method on one real set of feedback and finish with a synthesis you can present and actions with named owners.

## The trail

1. **Decide what the feedback should answer**, because the decision shapes your sources, your questions and what data may go in.
2. **Find honest themes with real quotes**, so every claim traces back to what people actually wrote.
3. **Ask the data questions and visualise the answers**, to see who says what, since when, and how strongly.
4. **Turn insight into an owned action list**, because feedback matters when someone acts on it.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Have one real set of feedback ready, ideally a few dozen items or more: a survey export, tickets, interview notes, engagement comments or a monday feedback board.

## Step 1: Decide what the feedback should answer

**Think first, without AI.** Close the chat. In a note, answer the four questions below. Keep the note; the prompt in Step 2 starts from it.

| Ask yourself | Why it matters |
| --- | --- |
| **What decision will this feedback inform?** For example: what to fix first in onboarding, or which team process to rework. | A clear decision keeps the synthesis useful. |
| **Which sources answer it?** Survey exports and interview notes in Drive, tickets, Slack channels, monday boards. | Each source hears different people: tickets come from people with a problem. |
| **Who is missing?** | Customers who left and employees who skipped the survey rarely appear in feedback. Your readout should name them. |
| **What do you expect to find?** | Write three expected themes now. In Step 2 you will see whether the data confirms them, or whether the AI simply agreed with you. |

**What may go in.** Monday's Claude policy has one hard rule: nothing that Monday's customers uploaded to their own boards ever goes into Claude. Monday's own data about customers is fine: Salesforce, support tickets, surveys, interview notes, and context through Kremer. If a ticket quotes a customer's board, remove that quote before you export. Export only the columns you need (comment, date, segment) and leave out names and emails where they add nothing. For employee comments, use anonymised comments, follow Monday's HR guidelines and report on groups only. Context numbers such as segment or renewal date come through Kremer, which applies your own permissions.

## Step 2: Find honest themes with real quotes

A theme is a point that several different people make. AI has habits worth checking:

| What AI tends to do | What the prompt below asks for |
| --- | --- |
| Polishes quotes, or joins two comments into one | Word-for-word quotes with an item ID |
| Builds a theme on one loud voice | At least two different people per theme, each counted once |
| Adds themes that usually appear in feedback | Themes from these items only |
| Counts loosely: "many users", "most employees" | Exact counts, computed by running code |
| Drops comments that fit nowhere | A list of signals that fit no theme |

### Prompt: Honest themes with real quotes

**What this does:** the AI checks the data, waits for your approval, then builds themes with counts and real quotes and compares them with the themes you expected.

```
Help me synthesise feedback honestly. I will paste or dictate my notes (the decision, the sources, who is missing, the themes I expect), then share the feedback. Ask only for what is missing.

First, describe the data: items per source, date range, duplicates, unclear items, and how many different people wrote them. Stop and wait for my approval.

Then build 3 to 7 themes from these items only:
- A theme needs at least two different people. Count each person once.
- Compute every count by running code.
- Quote word for word, in quotation marks, with the item ID. Keep the original language and add a translation.

Output:
1. A table: theme, what people say in one plain sentence, number of people, sources, two quotes.
2. Signals that fit no theme.
3. Where the sources disagree.
4. My expected themes: found, partly found or absent.
```

Check three quotes yourself against the source, by item ID. Then read part 4: a surprise is the most valuable line in a synthesis. When every expected theme appears exactly as predicted, ask the AI for the strongest evidence against each one.

**In Claude Cowork:** give it the Drive folder with your exports and name your monday feedback board; it reads both through the connectors and runs the counts as code.

## Step 3: Ask the data questions and visualise the answers

Themes tell you what people say. Questions show who says it, since when, and how much it matters.

| Question | Example at Monday |
| --- | --- |
| **Who says it?** Segment, region, team, tenure | Is permissions confusion a theme for enterprise admins only? |
| **Since when?** A release, a pricing change, a reorg | Did comments on the automation builder change after the latest release? |
| **Compared with what?** Last quarter, the last survey | Is workload a bigger theme than in the previous engagement survey? |
| **What comes first?** A theme that appears before churn or a low score | Do accounts that mention slow support renew less often? |

### Prompt: Questions and charts

**What this does:** the AI proposes questions worth asking the data, answers the three you pick with a computed chart each, and says what could mislead.

```
Using the themes in this chat, help me ask better questions of the feedback. Propose five: who says each theme (by segment, team or another field), how it changed over time, how it compares with an earlier round, and what could predict an outcome I care about. Ask me which three to answer, and wait.

For each question I pick:
1. Compute the answer by running code. Show the number of items behind every figure.
2. Draw one simple chart, with a title that states the finding.
3. Write the answer in one sentence.
4. Say what could mislead: small groups, one source, missing people, gaps in a field.

When a group has fewer than 10 people, show counts only and say it is too small to compare. For employee feedback, report on groups only.
```

The chart shows what happened; you judge what it means. Spot-check two numbers against the raw export: a total, and the figure behind the biggest claim.

**In Claude:** ask for the charts as an artifact, so you can share them as one page.

## Step 4: Turn insight into an owned action list

An insight is a theme plus what it means for the decision you wrote down in Step 1. Every action on the list needs:

| Part | Why |
| --- | --- |
| **The insight behind it**, with a count and a quote | Readers trust what they can trace. |
| **One owner** who agreed to it | A named person answers for the action. |
| **A first step and a date** | The action starts this week. |
| **A signal to watch** | The next round of feedback shows whether it worked. |
| **A reply to the people who gave the feedback** | People who see their feedback used answer again next time. |

### Prompt: Owned action list and readout

**What this does:** the AI interviews you about each top insight, drafts an action list for your approval, then writes a one-page readout.

```
Help me turn this synthesis into actions, using the themes and charts in this chat and the decision I described at the start.

Ask me which two or three insights matter most for that decision. For each, interview me one question at a time: what we should do, who should own it, the first step and its date, the signal that would show it worked, and what we tell the people who gave this feedback. Challenge actions that are vague or too big for one owner.

Write the action list as a table with those columns, plus the insight, its count and one quote. Mark every owner "to confirm". Stop and wait for my approval.

Then write a one-page readout for the people who decide: the decision, the top insights with one chart each, whose voice is missing, and the action list.
```

Send each owner their action and ask for a yes. Put the list on a monday board, one item per action, so the next round can check what changed. For employee feedback, actions address teams and processes, within Monday's norms on people data.

You are done when every action has a confirmed owner and the readout reaches the people who decide.

## Go further

**Make the method repeatable.** Do this when you synthesise feedback every quarter or after every survey, so the rules from Steps 2 to 4 hold in every run.

**What this does:** interviews you about your recurring feedback and writes a skill for your approval.

```
Help me build a skill for feedback synthesis. Interview me one question at a time: which feedback I synthesise, its sources and fields, the decisions it serves, and who reads the result.

The skill must: describe the data first and wait for approval; build themes only from the items given, each with at least two different people; compute counts with code; quote word for word with item IDs; end with an action list where every owner is "to confirm".

Write the complete skill: name, when to use it, steps, output format, three test requests. Wait for my approval.
```

Add the skill, then close and reopen your AI tool so it finds the skill. **In Claude:** add it under Customize → Skills.

**Check whether the actions worked.** Do this at the next survey or quarter. Share both syntheses and the monday board with the action list, and ask the AI to compare the rounds theme by theme and say whether each action's signal moved.
## Proof of work

In "what I built", name the feedback you synthesised, the theme that surprised you, and one action with its owner.

For example: "140 onboarding survey comments and 30 items from our CS escalations board. Surprise: admins asked about permissions far more than templates. Action: a permissions guide in the welcome flow, owned by Dana in Onboarding."

## Related adventures

- **Research Done Right**: add outside evidence to what your customers and employees tell you.
- **Creating Apps with AI, Done Right**: turn your charts into a dashboard your team opens every round.
