---
slug: use-case-discovery
emoji: 🧭
icon: map-pin
title: "Use-Case Discovery"
walkaway: "More AI ideas across your day-to-day and growth opportunities, ranked with FVI (Feasibility, Value, Investment), with a plan for each core one"
category: Set up your AI
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Learn something
pattern: INT
wave: W1
slot: 6
next: [skills-when-how-and-how-well, creating-apps-with-ai-done-right]
review: ready
video: /videos/use-case-discovery.mp4
source: "Adapted from summer-challenge/labs/where-to-next.md (discovery interview, use what you know, filter before ranking, top-5 table, first experiment, generic answers as a context signal) and catch-up-may/content/week-3/project-7-professional-specialist.md Step 1 (tell the AI what already exists so it avoids duplicates; direct and indirect questions) and its Use-Case Bank (Monday examples in Step 1). FVI and the feasibility go/no-go lenses (Business, Data, Execution) are Nufar's own frameworks, used verbatim. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 6 [Inbar 14])
- Kept from Where To Next: the interview (where the week goes, repeat or redo, information hunted, decisions made under-prepared, AI already used), "use what you know, ask only for gaps", filter before ranking, the top-5 table, the first small test, and the teachable moment that a generic list means thin context.
- Kept from Catch-Up P7 Step 1: tell the AI what already exists so it avoids duplicates; the indirect questions; the Use-Case Bank recast as one line of Monday examples.
- Cut: H/M/L frequency/value/impact columns (replaced by FVI, Nufar's canonical frame), the A/B fork, personal-life layer, Dream Team and worker framing, Sarah Chen, Excess Baggage pointer.
- Added for Monday: a no-AI warm-up on last week (thinking step starts without AI); "use what exists" check covering team skills and monday AI features; Kremer and boards in the Data lens; "simplest form that works" column with a page table mapping each form to the sibling adventure (the "next adventure for each" promised to Inbar); keep-it-simple rule from design notes; backlog on a monday board in Go further.
- Effort is Quick win: the guide budget is under 1,000 words; this file is slightly above (see final report).

Open items
- monday workflows: Nufar confirmed on 6 Nov that Monday employees can build with it. Automation Done Right gains a mention in its 6 Nov cleanup.
- "monday's own AI features" stays generic; confirm which built-in features Monday wants named.
- Scheduled tasks depend on Keren Q6.
- Prompt test in a fresh Claude chat: pending (playbook step 4), especially the web search and the match in the Step 3 prompt.

Changed 2026-11-05: think-first opener per the 23 Oct rule.
Changed 2026-11-06: rewritten to Nufar's theme (videos/use-case-discovery/notes.md) so the page delivers the approved script. Most people use AI intuitively; the value sits in things they always meant to do, never thought to do with AI, tried once and dropped, and in growth opportunities. The interview now digs there and the AI adds ideas of its own. Larger and multi-month ideas stay in; what gets dropped is anything too small to matter. Value means size of effect; Investment is an honest estimate. "Simplest form that works" is gone, so the open item on that list no longer applies: Step 4 thinks through how to address each core use case, in plain words with no named framework. "Use what exists" survives as the first question in that step, which replaces the old "Ask your team" Go further item. Added the customer-boards line to the Data lens because bigger ideas reach further into data. next: your-own-chief-of-staff replaced by creating-apps-with-ai-done-right; Related adventures now points to Planning with AI. Inventory row 6 and design-notes row still say "keep it simple; build only with justification": flagged to Nufar, not edited.
Changed 2026-11-06, from Nufar's page review: old Steps 1 and 2 merged into one step, the three-places table then straight to the interview; her note overrides the 23 Oct think-first rule for this page, and the prompt's brain-dump line stays. Growth opportunities moved into the interview. Sentence after the prompt now sends people to the Your AI Identity adventure. Old Step 4 is now Step 3: ambition stays in discovery and FVI, simplicity applies to how they build. The prompt runs a quick web search on the person's tools, matches each use case to the simplest thing that does the job, and lays out what can be built at Monday only when the job truly requires an artifact or an application. The adventures table follows the same order. Interview prompt now opens in a new chat in a tool that can search the web, because Steps 1 and 3 need the search. To stay under the old length, the FVI table became one line, since the Step 2 prompt carries the same definitions; restore it if she misses it.
-->

# 🧭 Use-Case Discovery

**Discover more ways AI can drive value in your work, prioritize them, and think through how to address the core ones.**

## Why this adventure

Most of us use AI intuitively: for things that come our way, use cases we heard about, or things our teammates shared. There is much more value to discover in three other places: things you always meant to do, things you never thought to do with AI, and things you tried a while back that did not work and never tried again.

In this adventure, an AI interviews you to find more use cases, meaning specific ways AI can drive value in your work, both in your day-to-day and in non-trivial growth opportunities. Then you prioritize them with FVI (Feasibility, Value, Investment) and think through how to address the core ones.

## The trail

1. **Get interviewed for more ideas**, so you go beyond what you already do with AI.
2. **Prioritize with FVI (Feasibility, Value, Investment)**, so you know which ideas are your core use cases.
3. **Think through how to address the core ones**, so each has a realistic way forward.

## Before you start

Have your goals and your main monday boards open.

## Step 1: Get interviewed for more ideas

The interview digs into these three places, and into your growth opportunities.

| Where to look | What does the interview ask? | For example |
| --- | --- | --- |
| **Things you always meant to do** | What stays on your list because nobody has the time? | An analysis of why deals were lost last year |
| **Things you never thought to do with AI** | Which work do you consider too complex or too human for AI? | Preparing for a negotiation from every past call with an account |
| **Things you tried a while back** | What disappointed you, so you dropped it? | An analysis that came back with wrong numbers |

### Prompt: Use-case discovery interview

**What this does:** the AI interviews you, adds ideas you would not reach alone, and lists them for your review.

Open a new chat in an AI tool that can search the web, for example Claude, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Run a use-case discovery interview with me, to find more ways AI could drive value in my work at monday.com. Ask me to brain dump or paste all my thoughts before you start. Use what you know about me; ask only for gaps, and say so if your context on me is thin. Do not decide my goals or which work matters.

Ask one question at a time, at most seven, and ask for a recent example when I am vague. Cover: my goals; growth opportunities I could pursue with many more hands, for example a new customer segment or a new market to test; things I always meant to do; things I tried with AI a while back that did not work, and when; work I consider too complex or too human for AI; what I already use AI for.

For anything I tried before, check current official docs for what has changed, and say so if you cannot.

Then list 10 to 15 ideas, one sentence each with its value, across my day-to-day and bigger opportunities. Add ideas I would not have thought of, and mark them. Keep large and multi-month ideas. Leave out what already works well for me, anything too small to matter, and anything that fits anyone with my job title.

Ask me what to add, remove or sharpen. Then stop and wait.
```

If the ideas could fit anyone with your job title, your AI needs more context about you. Do the **Your AI Identity** adventure, then run this prompt again.

## Step 2: Prioritize with FVI

Judge every idea with **FVI**: **Feasibility** (can it work?), **Value** (is it worth it?) and **Investment** (what would it take?).

### Prompt: My core use cases

**What this does:** ranks your ideas with FVI and marks your top 5 as your core use cases.

Stay in the same chat and paste the prompt below.

```
Rate the ideas we settled on in this chat with FVI: High, Medium or Low, with a one-line reason for each rating.
- Feasibility: can it work with my tools and data (monday boards, Drive, Gmail, Slack, internal data through Kremer, Monday's data layer)?
- Value: how much would it move my goals, my team or the business? Rare work with a large effect can outrank frequent work with a small one.
- Investment: an honest estimate of the time, people and upkeep it needs. Keep each idea at its full size.

Show one ranked table: rank, use case in one sentence, Feasibility, Value, Investment. Mark the top 5 as my core use cases. Ask me what I would rank differently, and change the table as I say. Then stop and wait.
```

## Step 3: Think through how to address the core ones

Keep each idea at its full size, and find the simplest way to build it. Often a skill, a project or a scheduled task can do the job. An artifact or an application comes in when the job truly requires it.

### Prompt: Feasibility check and how to address it

**What this does:** checks each core use case for feasibility, then matches it to the simplest thing that does the job.

Stay in the same chat and paste the prompt below.

```
Take my core use cases from the table above, one at a time.

Check feasibility through three lenses. Answer each with Go, Unclear or No-go and one line of evidence:
1. Business: is the problem clear, are the people involved willing to invest and change, is the impact worth it?
2. Data: is the data available, reachable by my AI tool, and accurate? Data that customers uploaded to their own monday boards must never go into an AI tool; Monday's own data about customers is fine.
3. Execution: is the tool approved at Monday, can it be done in a realistic time and size, does it fit the tools we already use?
Ask me about anything you cannot judge. For a No-go, say what would have to change.

Then run a quick web search on recent features of the AI tools I work in. Ask me which tools if you do not know, and say so if you cannot search.

Think with me about each one, at its full size:
- What already exists that I can use or join (team skills, monday's own AI features, another team's work)?
- What is the simplest thing that does the job? Start with a skill, a project or a scheduled task.
- Recommend an artifact or an application only when the job truly requires it, and say why simpler will not do. Then lay out the full spectrum I can build at Monday, for example a Claude artifact, monday vibe, monday workflows, a monday agent, Big Brain Studio (Monday's internal app platform), or a larger project with other people.
- Who else is involved, and the first step?

End with one table. Ask which one I want to go deeper on.
```

You are done when each core use case has a feasibility answer and a first step, and you have taken the first step for your number 1. For a bigger idea, that step may be a data check or a conversation with the process owner.

These adventures teach each way to build:

| What does the use case need? | Where can you learn it? |
| --- | --- |
| A skill | Skills: When, How and How Well |
| A project or a monday agent | Your Own Chief of Staff, or Build Your Professional Partner |
| A scheduled task or a monday workflow | Automation Done Right |
| An artifact or an application, for example in monday vibe or Big Brain Studio | Creating Apps with AI, Done Right |
| A larger project with other people | Planning with AI, or Your Team's AI Blueprint |

## Go further

**Keep your list on a monday board.** Do this so the list stays alive. Add each use case as an item with FVI, first step and status columns, and run the Use-case discovery interview prompt again every quarter.

## Proof of work

In "what I built", name your number 1 use case, where you found it, and how you will address it.

For example: "Analysis of why renewals were lost last year, something I always meant to do. The Data lens was Unclear, so my first step was a check with sales ops. It will need a skill and a board."

## Related adventures

- **Planning with AI**: turn your biggest use case into a plan that has already been challenged.
- **Redesign Your Week with AI**: make room for your core use cases.
