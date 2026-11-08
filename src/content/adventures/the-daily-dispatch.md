---
slug: the-daily-dispatch
emoji: 📰
icon: newspaper
title: "Your Personal Newsletter"
walkaway: "Your own personal newsletter on the topics you care about, built as a skill and arriving on a schedule where you read"
category: Automate and delegate
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Build something
pattern: SCHED
wave: W3
slot: 27
next: [automation-done-right, your-own-chief-of-staff]
review: ready
source: "Adapted from summer-challenge/labs/daily-dispatch.md (a personal newsletter on what you care about, filters beat more sources, web-suggested sources approved one by one, review of the first edition before anything is scheduled, empty-day rule, second source for surprising claims, skill it then schedule it, designed-and-shared stretch, tighten the filters from what you skipped). Rebuilt on 8 Nov 2026 to Nufar's brief (videos/the-daily-dispatch/notes.md): her six decisions (frequency, topics, sources with date ranges and filters, format, purpose, destination), skill first then scheduled task (her method), run it for a while then revisit and optimize. The skill and scheduling prompts are written for this page, in line with Automation Done Right. Never edit the original from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 27 [Inbar 24])
- Kept from the summer lab: the brief, the first edition with a taste review, filters beat more sources, empty-day rule, verification rule, one topic per edition, three delivery lanes.
- Added for Monday: monday boards, Slack channels, mail and Kremer as sources; Monday topic examples.

Changed 2026-11-08: renamed to "Your Personal Newsletter" (Nufar: "daily" and "dispatch" are unclear to non-native speakers; slug kept so links and saved progress hold); "dispatch" replaced by "newsletter" throughout the reader text.
Changed 2026-11-08: rebuilt to Nufar's brief (videos/the-daily-dispatch/notes.md). Her review: the page over-emphasized one topic; the adventure is building your own personal newsletter on one topic or an assortment of topics you care about, and the test is that it is the one you actually read.
- Trail is now four steps: design your dispatch; write the first edition and review it; turn it into a skill; put it on a schedule.
- Step 1: a six-decisions table with Monday examples (topics, purpose, frequency, sources, format, destination), the customer-boards line, a think-first line, then one design interview, one question at a time, ending in a short Dispatch Brief for approval. "One topic per dispatch" and the work/personal split are gone, since she wants one topic or several.
- Purpose is her "information or action" decision: with an action (her example: features worth looking into), everything in the dispatch serves it. Destination is Slack, email, or a Claude artifact when it should be more visual; the three-lane table is gone, since destination is now one of her decisions.
- Step 2: edition one is written from the brief and reviewed by hand: would you read it, what would you cut, what is missing, does every item serve the purpose. Fixes go into the brief until she would read it. A self-explanatory link check (open two or three links, compare item and date) replaces the old verification line.
- Step 3 (new): her method, skill first. A self-contained skill prompt asks only what the brief lacks (empty day, missing source, never-dos) and writes the skill with checks and three test requests; tested by hand by name in a new chat.
- Step 4: a self-contained scheduling prompt names scheduled tasks, carries the empty-day rule and the unreachable-source rule, and asks for the edit and pause path. Delivery to Slack, email or an artifact is worded conditionally.
- Go further: revisit and optimize after it has run for a while (her line), with directive questions (opened, read, acted on, skipped every time, sources to add or drop, format) and a closing "anything else" question; share with your team stays from the summer lab's designed-and-shared stretch. Second dispatch and tighten-after-a-week are folded into the optimize prompt or dropped.
- Effort moved from 30 minutes to 1 hour: four steps, two interviews, a skill build and a schedule.

Judgment calls
- Decision order in the table and the prompt is topics, purpose, frequency, sources, format, destination: purpose comes right after topics because it shapes everything that follows (her own example). Her list order was frequency, topics, sources, format, purpose; the set is hers verbatim.
- The empty-day rule is asked in the skill step only (one step owns each topic) and the scheduling prompt delivers the skill's empty-day line.
- Never-dos example keeps "share internal data outside Monday's tools" as a "for example".
- monday agents line kept, provisional, as in Automation Done Right (skill on the Profile tab, recurring board automation).
- The design prompt says "do not choose my topics and do not decide what good means" and drops "do not narrow them", because a very broad topic gets one question ("which part matters to me?"); the person still decides.
- Share it with your team stays in Go further (the summer lab's designed-and-shared stretch, a few lines); second dispatch dropped, since one dispatch can now hold several topics.
- Length: 2,170 words by lint, over the 1,800 aim because the page carries five complete prompts (design, first edition, skill, schedule, optimize). Line-by-line check done; trims taken from the sources example and the feedback coaching line. Nothing cut from the prompts' self-containment.

Open items
- Keren Q6: are scheduled tasks in Claude enabled at Monday? Step 4 assumes yes.
- Can a scheduled task at Monday post to Slack, send email, or create a Claude artifact with Monday's connector permissions? Step 4 words all three conditionally.
- Can a Claude scheduled task and a monday agent run a skill by name? Step 4 assumes so; if not, the scheduling prompt still writes complete unattended instructions.
- Fresh-chat test of all five prompts in Claude: pending (playbook step 4), especially the artifact destination in Step 2 and the scheduling prompt.
-->

# 📰 Your Personal Newsletter

**Build your own personal newsletter on the topics you care about, and have it arrive on a schedule where you already read.**

## Why this adventure

Most of us follow many newsletters, channels and boards, and read one or two of them. The rest pile up unread.

Here you build your own personal newsletter: one topic or an assortment of topics you care about, from the sources you trust, in the format you like, at the rhythm that suits you. It can keep you informed, or it can drive an action, for example surfacing new features worth trying in the tools your team uses. The test of success is simple: it is the one you actually read.

You design it, write and review the first edition by hand, then turn it into a skill and put it on a schedule. Daily or weekly, the rhythm is yours.

## The trail

1. **Design your newsletter**, because six decisions decide whether you will read it.
2. **Write the first edition and review it**, so you fix the design before anything runs alone.
3. **Turn it into a skill**, so every edition follows the same tested instructions.
4. **Put it on a schedule**, so it arrives on its own.

## Before you start

If you have never built a skill, start with Skills: When, How and How Well.

## Step 1: Design your newsletter

Six decisions shape your newsletter. Each one is yours to make.

| Decision | What to think about | For example at Monday |
| --- | --- | --- |
| **Topics** | One topic, or several you care about | Competitor moves in work management, AI tools for your job, the accounts you own |
| **Purpose** | Staying informed, or driving an action. With an action, everything in it serves that action | Stay informed on AI news, or find new features worth trying in your team's tools |
| **Frequency** | How often you would actually read it, and when | Weekdays at 8:30, or weekly before your team meeting |
| **Sources** | Where it looks, how far back, and what it filters out | Your team's monday board updates, Slack channels, release notes, Kremer for internal data; items since the last edition; skip rumors |
| **Format** | Length, sections, links | Five items, one line each with a link, a two-line summary at the top |
| **Destination** | Where you will read it | Slack or email, or a Claude artifact when you want it more visual, for example a chart or a page with sections |

Data that Monday's customers uploaded to their own monday boards never goes into your AI tool. Your team's boards and Monday's own data about customers are fine.

**Think first for yourself, without AI.** What do you want to stay on top of? What did you miss lately, and where was it? What would you do with it once you know? Messy is fine.

### Prompt: Your Newsletter Brief

**What this does:** the AI interviews you on the six decisions, one at a time, and writes a short Newsletter Brief for your approval.

Open a new chat in an AI tool that can search the web, for example Claude, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation. Keep this chat for Steps 2 to 4.

```
Help me design my own personal newsletter, for me alone, on one topic or several topics I care about, that I will later turn into a skill and run on a schedule. The only test that matters is that I actually read it.

Ask me to brain dump or paste all my thoughts on this before you start. Use what you know about me, and ask only for what is missing. If I already answered a question earlier in this chat, don't ask it again. Do not choose my topics and do not decide what good means for me. Ask one question at a time. If an answer is vague, ask for a recent example.

1. Topics: one or several, and what being caught up on each would let me do. If a topic is very broad, such as "news about AI", ask me which part matters to me.
2. Purpose: is it to keep me informed, or to drive an action? If an action, which one, for example finding features worth looking into. Then everything in the newsletter serves that action.
3. Frequency: daily, weekdays, weekly or another rhythm, and when I would read it.
4. Sources: the ones I trust, on the web and in my connected applications; the date range for each, for example since the last edition; and what to filter out. Then search the web and suggest up to three more sources. I approve or reject each.
5. Format: length, sections, links, and a short summary at the top.
6. Destination: Slack, email, or a visual page, for example a Claude artifact, when I want it more visual.

Write a short Newsletter Brief: a one-line name, then one line per decision. Stop and wait for my approval.
```

## Step 2: Write the first edition and review it

### Prompt: First edition and review

**What this does:** writes edition one from your brief, asks whether you would read it and what you would cut, and fixes the brief until you would.

Stay in the same chat and paste the prompt below, because it works from your approved brief. Answer its questions in writing, or by voice if your tool has dictation.

```
Write edition one of my newsletter now, from my approved Newsletter Brief in this chat. Search the sources on the brief within their date ranges, apply my filters, follow my format, and give a link or source for every item. If my destination is a visual page and you can create one, build it as one. Name any source you could not reach.

Then ask me one question at a time:
1. Would I read this on a normal day? If not, what would stop me?
2. What would I cut?
3. What is missing?
4. Does every item serve my purpose?

Update the Newsletter Brief with each fix, show me what changed, and write the edition again. Repeat until I say I would read it. Then show the final Newsletter Brief.
```

Be specific in your answers, for example "three items are older than a week" or "drop the funding news, keep product launches". Specific feedback gets a much better edition than "make it better".

Before you approve, open two or three links. Check that each item says what its source says, and that its date falls inside your range. An unattended run will repeat any mistake you let through here.

## Step 3: Turn it into a skill

Your scheduled newsletter will run this skill, with nobody there to answer its questions.

### Prompt: Build my newsletter skill

**What this does:** turns your final Newsletter Brief into a complete skill, built for runs where nobody is there to answer.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Turn my final Newsletter Brief from this chat into a skill: saved instructions an AI tool follows for one recurring task, here my personal newsletter. It will run on a schedule, with no memory of this chat and nobody to answer questions. If I already answered a question earlier in this chat, don't ask it again.

Ask me one question at a time about what is still missing:
1. Empty day: what the edition says when nothing new passed my filters, so I still know it ran.
2. Missing source: what to do when a source is unreachable or empty.
3. Never-dos, for example invent quotes or share internal data outside Monday's tools.

Then check my tool's current documentation for its skill format, and tell me if you cannot. Write the complete skill in one block: a short name in lowercase with hyphens; a description of what it does and when to use it; the steps (read each source within its date range, apply my filters, keep only items that serve my purpose, write in my format); the output as a literal template, including the empty-day line; the checks before it finishes (every item has a working link and falls inside its date range; any surprising or high-stakes claim has a second independent source, or is left out); and three test requests: a normal day, a day with nothing new, and an unreachable source. Then tell me how to add it, and to close and reopen my tool afterwards.
```

Add the skill, then close and reopen your tool. **In Claude:** add it under Customize → Skills. Then open a new chat and ask Claude to use the skill by name, once for each of its three test requests. Fix the skill until you would read the result as it is.

## Step 4: Put it on a schedule

In Claude, an automation that runs at set times is a scheduled task.

### Prompt: Schedule my newsletter

**What this does:** sets up a scheduled task that runs your newsletter skill at your rhythm and delivers each edition where you read.

Go back to the chat from Steps 1 to 3 and paste the prompt below, because it takes the rhythm and destination from your brief. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me put my newsletter skill on a schedule as a scheduled task: an AI job that runs at set times without me starting it. Take the skill name, frequency and destination from my Newsletter Brief in this chat. If any is missing, ask me, one question at a time. Check my tool's current documentation for scheduled tasks and for delivering to my destination, and tell me plainly if it cannot do something.

Write the task's instructions for an unattended run that starts with no memory of this chat: use my newsletter skill by name; deliver the edition to my destination; on an empty day, deliver the skill's empty-day line; if a source is unreachable, say which in the edition; if the destination is unreachable, keep the edition in the task's history and say so. Then walk me through creating the task, and tell me where to find it, how to edit it and how to pause it.
```

**In Claude:** check that the task appears under Scheduled. Slack and email go through your connectors; for a visual page, ask the task to build each edition as an artifact, if your scheduled tasks can create one. **In monday agents:** add the skill on the agent's Profile tab, and run it from a recurring board automation.

Read the first three editions as they arrive: on time, in the right place, with fresh items. When something annoys you, fix it in the skill. If you stop reading it, pause it. You are done when an edition arrives on its own and you read it.

## Go further

**Revisit and optimize your newsletter.** Do this once it has run for a while, so you can see what you actually read.

### Prompt: Optimize my newsletter

**What this does:** reviews recent editions with you, then rewrites the skill around what you read, skipped and acted on.

Open a new chat, paste the prompt below, and add your recent editions and your newsletter skill. Answer its questions in writing, or by voice if your tool has dictation.

```
Here are recent editions of my personal newsletter and the skill that writes them. Help me optimize it. Ask me one question at a time:
1. Which editions did I open, and which did I skip?
2. Which items did I read, and which did I act on?
3. Which sections or kinds of items do I skip every time?
4. Which sources earn their place, which should go, and what is missing?
5. Should the format change: length, sections, or a more visual page?
6. Is there anything else I want to improve that I have not mentioned yet?

Then suggest changes that fit my answers, and show the complete updated skill with a short list of what changed.
```

Replace the skill with the updated version, then close and reopen your tool.

**Share it with your team.** Do this when your teammates follow the same topics, for example competitor releases. With their agreement, deliver each edition to a team Slack channel or as an update on the team board, and ask them what to add or skip after a few editions.

## Proof of work

In "what I built", name your newsletter, its topics, when and where it arrives, and one thing the first-edition review changed.

For example: "Feature Radar, weekly in my Slack DMs: new features in the AI tools my team uses, each with one thing to try. The review cut the industry news and kept three items per edition."

## Related adventures

- **Automation Done Right**: design, test and monitor any automation, including your scheduled newsletter.
- **Your Own Chief of Staff**: a scheduled briefing on your own day, meetings and boards.
