---
slug: token-smartness
emoji: 🪙
icon: gauge
title: "Token Smartness"
walkaway: "Your token report card and two habits that get better results from the same tools"
category: Set up your AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Quick win
outcome: Work differently
pattern: AUD
wave: W3
slot: 9
next: [your-ai-taste-test, automation-done-right]
source: "Adapted from summer-challenge/labs/token-gym-session.md (tokens that teach, ship or spin, recast as learning / shipping / waste; routing and clear briefs cut waste; the report card; diagnose one real case) and token-gym/ for the method only: README.md design rules (nothing rewards frugality), fitness-assessment.md (the receipts behind the habits table: the immortal conversation, the mega-file setup, the hourly automation, the cheaper-model trap, under-using AI) and home-audit/token-audit-prompt.md (report card fields, the four verdicts, the coaching rule, and the read-only local measurement with calibration in Go further). No Token Gym embed, links or gym language. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 9 [Inbar 18])
- Kept: the three buckets (teach / produce / spin, renamed learning / shipping / waste in plain words); the coaching rule "never recommend spending less overall; name the waste and spend the savings on learning and shipping"; the report card fields and the four verdicts (heavy and healthy, balanced, waste signals, under-using AI) from the Home Audit; the fitness-assessment receipts as the habits table; the Home Audit's read-only local measurement, cut to one prompt in Go further, with its calibration (100-200:1, mostly cache = healthy).
- Cut: the Token Gym embed, links and all gym vocabulary (spin, weight, stations, eras); the AIDB episode framing; dollar figures and measured spend; telemetry file paths (the AI finds them, so no hidden-folder step is needed); the JSON export; the era quiz.
- Added for Monday: the four kinds of tokens and how each is priced (input, cached input, output, thinking) with relative prices only and a "check the current price list" line; model tier judged by the cost of a finished task; Hebrew uses more tokens; Kremer for narrow internal-data questions; boards as the exact source; Monday recurring work as the real task (QBR summary, release notes, incident write-up, forecast commentary, team update); "prove it on a real task" step from the Inbar promise.
- Design-notes row: advanced company, not novice-toned. The tone assumes daily users; Foundations readers still get every term defined.
- Judgment call: effort is Quick win (seed), and the guide puts Quick wins under 1,000 words. The "full treatment" asked in design notes lands at about 1,680 words including prompts; the writer brief's ceiling is 1,800. Nufar to decide: keep, relabel effort Moderate, or cut Go further. The re-explaining-yourself habit was cut (Your AI Identity covers it).
- The report card is a personal self-assessment that stays in the person's chat (guide section 11); proof of work carries only the habits and the task result, never the verdict.

Open items
- Usage views: whether Monday's Claude Enterprise shows employees a usage view is unconfirmed; Step 2 asks "whether I can see a usage view" so the prompt works either way.
- Why this adventure says people feel tokens "as usage limits and slower answers": confirm Monday's Enterprise seats have usage limits employees can hit.
- In Claude Code callout: /context and /cost (or /usage on a subscription) are written from product knowledge; confirm on Monday's setup, and Keren Q4 (who has Claude Code).
- Cached input: "changing the instructions or the model in the middle of a session starts the cache again" holds for the Claude API and Claude Code; how the Claude apps cache project files is not documented in detail. Hands-on check.
- Extended thinking toggle availability on Monday's plan (Keren Q3 covers model choice).
- next: your-ai-taste-test is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🪙 Token Smartness

**Learn what your AI use really costs, find the habits that waste it, and get better results from the same tools.**

## Why this adventure

Every AI tool reads and writes in tokens: small pieces of text, about three quarters of an English word each. Hebrew needs more tokens than English for the same text. You feel tokens as usage limits, slower answers and a bill the company pays.

Tokens also measure the model's attention. The more it reads, the easier it is to lose the one fact that matters. So the habits that waste tokens usually hurt your results too.

This adventure finds those habits in your own work and replaces two of them. The goal is better results from the same tools: spend freely on learning and on finished work, and cut only the waste. The most expensive habit of all is under-using AI.

## The trail

1. **Understand what tokens cost**, because four kinds of tokens are priced very differently.
2. **Get your token report card**, to see where your own habits spend them.
3. **Prove two better habits on a real task**, so you keep the habits that change your results.

## Before you start

Have last week's AI work at hand: your longest chats, your biggest pastes, and any scheduled jobs you run.

## Step 1: Understand what tokens cost

Each time you send a message, the model reads the whole conversation again: your instructions, the files, the connector results, the full chat history. Then it thinks and writes. Each part is priced differently.

| Kind of token | What is it? | How is it priced? | What does it mean for you? |
| --- | --- | --- | --- |
| **Input** | Everything the model reads on each turn | The base price, paid again on every turn | A long chat sends its whole history again with each message. |
| **Cached input** | Input the tool stored very recently, such as a project's instructions and files | A small fraction of fresh input | A stable start is cheap. Changing the instructions or the model mid-session starts the cache again. |
| **Output** | What the model writes | Several times the price of input | Ask for the shortest form that does the job. |
| **Thinking** | The reasoning before the answer, when extended thinking is on | Priced like output, often longer than the answer | It pays off for judgment and hard problems. For formatting or a lookup, it adds cost for the same result. |

The model tier matters too: Opus costs more per token than Sonnet. Judge a model by the cost of a finished task. A cheaper model that needs five rounds often costs more than a strong model that gets it right once. Exact ratios change; when you need them, ask your AI to check the provider's current pricing page.

## Step 2: Get your token report card

Your tokens fall into three groups. **Learning** tokens taught you something, including an experiment that failed and that you wrote down. **Shipping** tokens produced work someone used. **Waste** tokens produced nothing anyone used. The report card protects the first two and finds the third.

These habits create most of the waste:

| Habit | What happens | What works better |
| --- | --- | --- |
| **The chat that runs for days** | Every turn sends the history again; answers get slower and vaguer | Ask for a summary of decisions and open items, then continue in a fresh chat |
| **The giant paste** | A whole Salesforce export or a full board for one question | Point to the exact file, board group or columns; for internal data, ask Kremer one narrow question |
| **The overloaded setup** | One long instructions file, read with every message | A short instructions page, plus topic files the AI opens when relevant |
| **The vague brief** | Many rounds of corrections | Say who the reader is and what done looks like before the first draft |
| **The strongest setting for everything** | Opus with extended thinking for formatting and lookups | A strong model and thinking for judgment; a lighter setting for mechanical work |
| **The job nobody reads** | An hourly check for updates that arrive twice a day | Match the schedule to the source, or run it when the board changes |
| **Under-using AI** | Research and drafting done by hand to save tokens | Give the AI a real task with a rich brief |

### Prompt: Your token report card

**What this does:** the AI interviews you about real examples from last week, rates your habits, and writes a one-page report card with two habits to change.

```
Help me write my token report card: an honest look at how I spend AI tokens, so I get better results from the same tools. Use what you know about me; ask only for what is missing, one question at a time.

Definitions:
- Learning tokens taught me something. Shipping tokens produced work someone used. Waste tokens produced nothing anyone used.
- Habits to check: chats that run for days; giant pastes; one overloaded instructions file; vague briefs that need many rounds; the strongest model and extended thinking for every task; scheduled jobs nobody reads; under-using AI.

Ask what I use AI for, in which tools, and whether I can read numbers from a usage view. Then ask about each habit through a real example from last week. If an answer is vague, ask for the example.

Then write the report card:
1. Where my tokens go: my top three kinds of work
2. One real example each of learning, shipping and waste
3. Each habit: working well or worth fixing, with the evidence
4. Verdict in one sentence: heavy and healthy, balanced, waste signals, or under-using AI
5. Two habits to change, chosen for their effect on my results, each as a concrete moment in my week
6. What was measured and what was guessed

Never recommend spending less overall. Name the waste and move those tokens to learning and shipping.
```

The report card is only for you and stays in your chat. Keep it open; Step 3 uses its two habits.

**In Claude Code:** run `/context` to see what fills the context window, and `/cost` (or `/usage` on a subscription) for the current session's tokens.

## Step 3: Prove two better habits on a real task

Pick a task you do often and know well: a QBR summary, release notes, an incident write-up, forecast commentary, or a weekly team update from your board. Recall how it went last time: how many rounds it took, what you pasted, and how good the result was.

Open a fresh chat for this prompt. Your report card chat is already long.

### Prompt: Redo a task with two better habits

**What this does:** the AI builds a short brief with you, works only from the sources the task needs, then compares this run with your last one.

```
I want to redo one task I do often, using two habits from my token report card. Ask me which task and which two habits, one question at a time.

Then interview me for a short brief: who reads the result, what done looks like, and the exact sources you need (one file, one board group, a few columns, one thread). Show me the brief and wait for my approval.

Do the task from the brief. Then ask me how the task went last time, and compare the two runs in a table: rounds until the result was usable, how much material you read, quality of the result, what I would keep. End with my two habits written as two short rules I can save in my standing instructions.
```

You are done when the redo gives you a result you would use, in fewer rounds than last time. Save the two rules where your AI reads them in every chat, and use them for a week.

**In Claude:** paste them into Settings → Instructions for Claude, or into the instructions of the project you use for this kind of work.

## Go further

**Measure your real usage.** Do this if you work in an agentic coding tool (Claude Code, Cursor or Codex). These tools log tokens, so your report card can use measured numbers instead of guesses.

**What this does:** reads your local usage logs without changing anything and reports the numbers that show waste.

```
Measure my token usage from the logs on this machine. Rules: read-only; nothing leaves this machine; report numbers and project names only, never conversation content; never open credential files.

Find the session logs of the coding tools I use and check their format before you count. If a tool keeps its numbers only in an online dashboard, tell me where to export them and wait.

Report for the last 30 days: input tokens (fresh, cache reads, cache writes), output tokens, the ratio between them, cache-read share, the peak day and what I worked on, the top three projects, and anything that ran on days I did not work.

Calibration: heavy agentic work often reads 100 to 200 tokens per token it writes, mostly from cache, and that is healthy. A high ratio with nothing shipped, or steady usage on days off, is a waste signal.
```

**Check your scheduled jobs.** Do this if you run automations or a scheduled assistant: a job that runs when nothing changed, or that nobody reads, is the quietest waste of all. For each job, ask when you last acted on its output. Then match its schedule to how often the source changes, run it when the board changes, or pause it.

## Proof of work

In "what I built", name the two habits you chose and what changed on the real task.

For example: "Fresh chat with a summary, and one board group instead of the whole board. My weekly team update took two rounds instead of five, and it caught a blocked item I had missed."

## Related adventures

- **Your AI Taste Test**: compare models on your own tasks by the cost and quality of a finished task.
- **Automation Done Right**: design scheduled jobs that read only what they need.
- **Build a Personal Brain for Your AI**: organise your context so the AI reads the right file at the right time.
