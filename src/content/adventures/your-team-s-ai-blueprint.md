---
slug: your-team-s-ai-blueprint
emoji: 📐
icon: chart
title: "Your Team's AI Blueprint"
walkaway: "A Team AI Blueprint (shared context, team skills, a use-case backlog, simple build rules, a review rhythm) and the three actions you take this week"
category: Lead with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: Moderate
outcome: Build something
pattern: INT
wave: W3
slot: 24
next: [skills-when-how-and-how-well, use-case-discovery]
source: "Adapted from appsflyer/Managers/exercises/exercise-4-team-os-sprint.md (Team OS interview: five components, token-budget question, 'This Week' close, swap / Monday-morning / people tests, Team Agent Brief); appsflyer/Managers/exercises/team-os-interviewer-skill.md (quarterly review run: changes since last review, honest about what stalled); monday-client/monday-managers-training/Session 4/session-4-exercise-2-build-team-os.md Option B (minimum version a manager can start this week; team intro message from the stretch goals). Team edition of the brain links to build-a-personal-brain-for-your-ai.md (Go further). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 24 [Inbar 29])
- Kept: the five Team OS components (shared context, skill library, use-case pipeline, build governance, evolution cycle), renamed in plain words to match Inbar's promise (shared context, team skills, use-case backlog, build rules, review rhythm); the token-budget question; "every build gets an owner and a first step"; the "This Week" close; the swap test and people test (as the owner test); the quarterly rerun from the interviewer skill; the Team Agent Brief (five decisions) in Go further; the intro message to the team from the stretch goals.
- Cut: per-person team readiness (who builds, who has not started, skepticism by name), "start with enthusiasts or skeptics" enablement, Tier 0-3 governance labels, all workshop scaffolding (Exercises 1-3, agent project, first-week table, troubleshooting), the team brain prompt (lives in Build a Personal Brain for Your AI, Go further; linked here).
- Changed for Monday: "Monday-morning test" renamed "tomorrow test" (the company name makes the original ambiguous); use-case scoring uses FVI to match Use-Case Discovery; the backlog lives on a monday board; Kremer for internal data in shared context; team-level line tied to Monday's usage dashboard and people-data norms; no champion language anywhere.
- Added: a thinking step without AI (Step 1); a team-meeting monthly review on the board.

Open items
- monday connector: can Claude Cowork add items to a monday board from a table? Step 3 callout assumes yes.
- Keren Q2 (how skills are added and shared at Monday): affects "team skills" (can a manager share one skill with the whole team?). A Go further item "make the quarterly review a skill" was cut for length; restore if Nufar wants it.
- Intro message to the team is a one-line instruction in Step 4 (the full prompt was cut for length).
- Team agent home: confirm that monday agents can serve a whole team from a team board, and that shared Claude projects are enabled for teams. Wording is provisional.
- Unified Claude (chat + Cowork) reaches all orgs 10 Nov 2026; "In Claude" lines may need a freshness sweep.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 📐 Your Team's AI Blueprint

**Plan how your whole team builds with AI: shared context, team skills, a backlog of what to build next, and three actions for this week.**

## Why this adventure

On most teams, everyone uses AI in their own way. The same account plan is explained to five different chats, three people write the weekly team update in three formats, and good ideas stay in one person's notes.

A team AI blueprint is the shared layer: knowledge every teammate's AI can read, shared skills, a backlog of what to build next, simple rules for what becomes a team standard, and a rhythm that keeps it current. Your AI interviews you about the team as a whole and writes it with you.

Joined Monday's managers training? This is the Team OS idea, in a version you rerun every quarter.

## The trail

1. **Look at your team as a whole**, so the blueprint starts from your own view of the team's work.
2. **Get interviewed and draft the blueprint**, so the AI turns that view into a concrete plan.
3. **Test the blueprint and put the backlog on a board**, so the plan fits your team and lives where the team works.
4. **Start this week and keep it current**, so the blueprint becomes shared work and stays true.

## Before you start

Work in the AI tool or project that knows most about your team, and have your team's main monday board open.

## Step 1: Look at your team as a whole

A team AI blueprint has five parts.

| Part | The question it answers | Example at Monday |
| --- | --- | --- |
| **Shared context** | Which knowledge lives in one head and should be readable by everyone's AI? | The release process, account plans, product acronyms, account data through Kremer |
| **Team skills** | Which work does the team repeat, so one shared skill and format would help? | The weekly team update, QBR summaries, release notes, incident write-ups |
| **Use-case backlog** | What should the team build next, with an owner and a first step? | A renewal-risk summary from the Renewals board |
| **Build rules** | What stays personal, and what becomes a team standard? | Anyone builds for their own work; a team skill gets one owner and a test first |
| **Review rhythm** | How does the team keep all of this current? | Monthly: what works, what nobody uses. Quarterly: update the blueprint |

One question runs through all five: **where does the team pay for the same AI work again and again?** Five people pasting the same long document into five chats pay five times in tokens and time; one shared page or skill pays once.

The blueprint stays at team level: the team's work, knowledge and rules. Each person's AI use stays with Monday's own dashboard, in line with Monday's norms on people data.

**Think first, without AI.** Close the chat. On paper or in a note, write down:

- Knowledge that lives in one head, and how often others ask for it
- Work the team repeats, and how many formats exist for it
- AI ideas the team has raised, and builds teammates already share
- What the team must achieve this quarter

Messy is fine. These notes are the input for Step 2.

## Step 2: Get interviewed and draft the blueprint

### Prompt: Team AI Blueprint interview

**What this does:** the AI reads your Step 1 notes, interviews you about the team, and writes the blueprint with a scored backlog and three actions for this week.

```
Help me design my team's AI blueprint: the shared layer that makes everyone's AI better at our team's work. Use what you know about me and my team; ask only for gaps, and say if your context is thin. I will paste my notes.

The blueprint has five parts:
1. Shared context: team pages every teammate's AI can read (processes, glossary, account plans, links to monday boards and to internal data through Kremer).
2. Team skills: one shared skill and format per piece of repeated work.
3. Use-case backlog: what to build next, scored with FVI (Feasibility: can it work with our tools and data? Value: how much it helps our goals? Investment: effort to set up and maintain), each with an owner and a first step.
4. Build rules: what stays personal, what becomes a team standard, who approves it.
5. Review rhythm: monthly and quarterly.

First ask, one at a time, which team work needs AI help and what good looks like. Do not choose the work, owners or what good means; wait.

Then interview me in at most two rounds of batched questions, about the team's work, knowledge and rules, never assessing individual people. If I answer vaguely, ask for a recent example. Ask where the team pays for the same AI work again and again.

Then write the Team AI Blueprint: one section per part, the backlog as a table (use case, Feasibility, Value, Investment as High, Medium or Low, owner, first step), and "This Week": three actions for the next five workdays, each concrete enough to start tomorrow morning. Stop and wait for my review.
```

## Step 3: Test the blueprint and put the backlog on a board

Read the blueprint as a teammate would. When a test fails, tell the AI exactly what is wrong.

| What to check | How to check it | What to tell the AI |
| --- | --- | --- |
| **Swap test** | Replace your team's name with another team's. If it still reads fine, it is generic. | "These skills fit any team. Our repeated work is the Friday renewal forecast." |
| **Tomorrow test** | Could you start action 1 of This Week tomorrow morning, without more thinking? | "Make action 1 concrete: what, where, by when." |
| **Owner test** | Is each owner the right person for that build? You know things the AI does not. | "Give the glossary to our onboarding lead; she keeps the new-joiner guide." |

Save the approved blueprint in your team's shared Drive folder. Then put the backlog where the team works: a monday board, or a group on your team board, named AI Backlog, with one item per use case and columns for Feasibility, Value, Investment, owner, first step and status.

**In Claude Cowork:** with the monday connector on, ask Claude to add the backlog table from your blueprint to the AI Backlog board, then check the items before you share the board.

## Step 4: Start this week and keep it current

Do the three actions in This Week. Good first actions are small: one shared page with one owner, one team skill assigned, a backlog review added to an existing team meeting.

Then tell your team. In the chat that holds the blueprint, ask your AI for a short Slack message: why the team is doing this, the parts you start with, and how anyone adds an idea to the AI Backlog board. Read it, then send it yourself.

The review rhythm keeps the blueprint true:

| When | What the team does |
| --- | --- |
| **Every month, in an existing team meeting** | Review the AI Backlog board: move items forward, add ideas, retire skills or scheduled jobs nobody uses |
| **Every quarter** | Run the Quarterly blueprint review prompt below |

### Prompt: Quarterly blueprint review

**What this does:** updates the blueprint from what really happened, honestly, with a new This Week.

```
Run the quarterly review of our Team AI Blueprint. Its five parts: shared context, team skills, a use-case backlog scored with FVI (Feasibility, Value, Investment), build rules and review rhythm. I will paste the blueprint and, if I have it, an export of our AI Backlog board.

Interview me in one round of batched questions, at team level only: what got built, what stalled and why, what the team learned, which shared pages or skills nobody uses, what changed in our goals.

Then update the blueprint, with a short "Changes since last review" section at the top. Be honest about what stalled; retire what nobody uses. Rescore the backlog and end with a new "This Week": three actions for the next five workdays. Stop and wait for my approval.
```

You are done when the backlog is on your board and the first This Week action is complete.

## Go further

**Build a team brain.** Do this when your blueprint's shared context lists pages the team needs. Use the team edition prompt in the Go further section of **Build a Personal Brain for Your AI**: it removes personal notes and sets one owner and one home.

**Write a team agent brief.** Do this when several teammates need the same answers from one place, for example account questions before renewal calls.

**What this does:** turns one job from your blueprint into a one-page brief for an agent the whole team uses.

```
Help me design a team agent: one agent several teammates use, with shared knowledge and agreed rules. Use my Team AI Blueprint from this chat, or ask me for it. Interview me in at most two rounds, across five decisions:
1. What it does: the one job where several teammates need the same answers or output.
2. Where it lives: the tool my team already works in.
3. What it knows: which shared pages it reads, what stays out, and who keeps that knowledge current.
4. What it can touch: whose access it uses, starting read-only.
5. Who runs it: who may ask it for what, who approves its outputs, what gets logged.
Then write a one-page Team Agent Brief: those five sections, the main risks, the smallest first step. Flag decisions that need IT, security or my manager.
```

A team agent can live in monday agents on your team board, or in a shared Claude project.
## Proof of work

In "what I built", name the parts of your blueprint the team starts with, the top backlog item with its owner, and the This Week action you completed.

For example: "EMEA renewals team: shared account-plan pages, a QBR summary skill, six use cases on our AI Backlog board. Top item: a renewal-risk summary from Kremer, owned by our ops lead. Done: the glossary has one owner."

## Related adventures

- **Skills: When, How and How Well**: build and test the team skills your blueprint lists.
- **Use-Case Discovery**: find and rank use cases for your own work with the same FVI lens.
- **Managing with AI**: routines for the people side of managing.
