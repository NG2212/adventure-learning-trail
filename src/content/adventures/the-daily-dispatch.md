---
slug: the-daily-dispatch
emoji: 📰
icon: newspaper
title: "The Daily Dispatch"
walkaway: "A personal newsletter you would actually open, with your boards among the sources, proven by hand, then on a schedule"
category: Automate and delegate
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Quick win
outcome: Build something
pattern: SCHED
wave: W3
slot: 27
next: [automation-done-right, your-own-chief-of-staff]
source: "Adapted from summer-challenge/labs/daily-dispatch.md (one topic per edition, filters beat more sources, empty-day rule, taste review before scheduling, schedule only what you would open, three lanes of delivery ambition, second edition and designed-and-shared stretch, verification rule). Scheduling discipline is linked to Automation Done Right and Your Own Chief of Staff instead of repeated. Never edit the original from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 27 [Inbar 24])
- Kept: the source's three prompts, merged and shortened (brief; write + first edition + taste review; schedule moved to callouts); filters beat more sources; empty-day rule (here "quiet day"); taste review across length, sources, freshness, tone, structure, signal; one topic per edition; the three delivery lanes (A stay in the tool, B route it, C designed and shared) as the Step 3 table, with C in Go further; verification rule baked into the reusable prompt.
- Cut: the "Why this works" table, "Shape of the excursion" table, the web-search-your-tool scheduling prompt, the live-tuning checklist and pitfalls (Automation Done Right owns them), Skills To Go / Pack Like a Pro / Set It and Summer cross-references, free-tier policy line.
- Added for Monday: monday boards, Slack channels, mail labels and Kremer as sources next to the web; Monday topic examples (competitors, releases, own accounts, a team board, AI tools for the job); Lane B destinations Slack, Gmail and a monday board update; work and personal topics in separate editions; a "start without AI" opener for choosing the topic.
- Distinct from Your Own Chief of Staff (your day, meetings, approvals) and Automation Done Right (the method for any automation): this one is an editorial product on one topic, Foundations-friendly.

Open items
- Keren Q6: is Cowork's scheduled-tasks feature enabled at Monday? Step 3 assumes yes, as in Chief of Staff and Automation Done Right.
- Lane B: confirm a Cowork scheduled task can post to Slack or send through Gmail with Monday's connector permissions. Worded conditionally ("if your connectors allow sending").
- monday agents: same provisional wording as Chief of Staff (agent brief + recurring board automation); confirm.
- Web search inside scheduled runs: assumed available in Cowork; the prompt tells the run to name any source it could not reach.
- Unified Claude (chat + Cowork) reaches all orgs 10 Nov 2026; "In Claude Cowork" lines may need a freshness sweep before W3 (7 Dec).
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 📰 The Daily Dispatch

**Build a personal newsletter on one topic you follow, written the way you like to read, arriving on its own.**

## Why this adventure

Most people subscribe to many newsletters and channels and read one or two. The rest stay unread.

A Daily Dispatch is a short briefing you design for yourself: one topic you care about, the sources you trust (your monday boards included), and a format you can read in two minutes. You produce it by hand with AI until it is right, then put it on a schedule so it arrives on its own.

Good topics at Monday: competitor moves in work management, what changed on your team's boards this week, the accounts you own, R&D release notes, or AI tools for your job. For a briefing on your own day and meetings, see Your Own Chief of Staff.

## The trail

1. **Scope your dispatch**, because clear filters make a better edition than more sources.
2. **Write the first edition and review it**, because you only schedule an edition you would actually open.
3. **Put it on a schedule**, so it arrives where you already read, on its own.

## Before you start

Have the sources for your topic available to connect: the monday boards, Slack channels or mail you would want it to read.

## Step 1: Scope your dispatch

**Start without AI.** Close the chat. Write down one topic you want to be caught up on, and the last time you felt behind on it. What did you miss, and where was it? That is your dispatch's job.

Keep one topic per dispatch. A work topic and a personal topic each get their own edition, so their filters stay clean and internal data stays inside Monday's tools.

### Prompt: Your Dispatch Brief

**What this does:** interviews you into a one-page brief for your dispatch: topic, timing, sources, filters, format and what to say on a quiet day.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me design a personal newsletter on one topic, for me alone, that will later run on a schedule. I will paste or dictate what I wrote about the topic. Use what you know about me; ask only for what is missing, one question at a time.

1. The topic, and what being caught up would let me do. If my answer is broad, such as "news about AI", push me to a narrower one.
2. When I would open it: daily, weekdays or weekly, and the time.
3. Sources I trust: monday boards (which groups and columns), Slack channels, mail labels, internal data through Kremer, websites and newsletters. Then search the web and suggest up to three more; I approve or reject each.
4. Filters: what counts as news for me, and what to always skip.
5. Format: length, sections, links, and a two-minute summary at the top.
6. Quiet day: what it says when nothing important happened.
7. Never-dos, for example invent quotes or share internal data outside Monday's tools.

Write a one-page Dispatch Brief with a one-line name for my dispatch. Stop and wait for my approval.
```

## Step 2: Write the first edition and review it

Turn the approved brief into the instructions your dispatch will follow every time, and see a real edition now.

### Prompt: First edition and taste review

**What this does:** writes complete instructions for an unattended run, produces edition one, then interviews you on what you like and dislike until you would open it on a normal day.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Using my approved Dispatch Brief from this chat:

1. Write the complete instructions for my dispatch, self-contained for an unattended run that starts with no memory: topic, sources, filters, format, quiet-day rule and never-dos. Any surprising or high-stakes claim needs a second independent source before it goes in. If a source is unreachable, name it and continue.
2. Run those instructions once, now, and show me edition one with a link or source for every item.
3. Interview me, one area at a time: length, sources (trusted, missing, junk), freshness, tone, structure, and what should have been filtered out.

Revise the instructions and regenerate until I say I would open this on a normal day. Then give me the final instructions and the one-line name. Stop before any scheduling.
```

Be specific in the review: "three items are older than a week", "drop the funding news, keep product launches", "one line per item, then the link". Specific feedback gets a better edition than "make it better". Expect two or three rounds.

## Step 3: Put it on a schedule

First decide how far the edition should travel. Start with the simplest lane that you will actually read.

| Where should it arrive? | What it needs | Best when |
| --- | --- | --- |
| **A. In your AI tool** | A scheduled task | You open the tool every morning anyway |
| **B. Where you already read** | A scheduled task that posts to your Slack DMs, sends you a Gmail message or adds an update to a monday board item | You live in Slack, mail or monday more than in the AI tool |
| **C. Designed and shared** | A polished page or document, or a team channel | Others would benefit too (see Go further) |

**In Claude Cowork:** create a project named after your dispatch, paste the final instructions into its instructions, and connect the sources on your brief. Ask Claude to run the dispatch at the time on your brief and check that the task appears under Scheduled. For lane B, ask it to post each edition to the place you chose, if your connectors allow sending there.

**In monday agents:** paste the final instructions as the agent's brief, give it access to the boards on your brief, and run it from a recurring board automation.

In any other AI tool, a daily calendar reminder to paste the final instructions yourself also works.

Open the first three editions. When something annoys you, put the fix into the instructions; if you stop opening it, pause it. For a full check of unattended runs (silent failures, drift, reading too much), use Automation Done Right. You are done when an edition arrives on its own and you read it.

## Go further

**Share it with your team.** Do this when your teammates follow the same topic, such as competitor releases. Post each edition to a team Slack channel or as an update on the team board, with their agreement, and ask them what to add or skip after the first week.

**Start a second dispatch.** Do this when you follow a second topic with different sources or timing. Run Step 1 again in a new chat, so the two sets of filters stay separate.

**Tighten it after a week.** Do this when you notice which items you skip.

**What this does:** uses a week of editions to sharpen the filters.

Open a new chat, paste the prompt below, and add your last five editions and the dispatch instructions. Answer its questions in writing, or by voice if your tool has dictation.

```
Here are my last five dispatch editions and the instructions behind them. Ask me, one edition at a time, which items I read, which I skipped, and why. Then rewrite the filters in the instructions so the skipped kinds of items are dropped, and show me what changed.
```

## Proof of work

In "what I built", name your dispatch, when and where it arrives, and one thing the taste review changed.

For example: "Competitor Watch, weekdays at 8:30 in my Slack DMs. The taste review cut it from ten items to the three that affect our roadmap, each with its source."

## Related adventures

- **Automation Done Right**: design, test and monitor any automation, including the dispatch you just scheduled.
- **Your Own Chief of Staff**: a scheduled briefing on your own day, meetings and boards.
