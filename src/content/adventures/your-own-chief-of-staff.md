---
slug: your-own-chief-of-staff
emoji: 🗓️
icon: calendar
title: "Your Own Chief of Staff"
walkaway: "An AI chief of staff built for you: it organizes your workload, runs your to-do list, helps you prioritize and moves your work forward"
category: Automate and delegate
levels: [Intermediate, Advanced]
professions: [Everyone, Customer Facing]
audience: [Managers]
tool: Any AI tool
effort: Longer
video: /videos/your-own-chief-of-staff.mp4
outcome: Build something
pattern: INT + SCHED
wave: W1
slot: 19
next: [automation-done-right, the-daily-dispatch]
review: ready
source: "Adapted from appsflyer/Managers/exercises/exercise-1-agent-architecture.md (Step 2 interview, Chief of Staff archetype only; 'Hire the librarian', heavily shortened; the Chief of Staff test question; 'Diagnose by layer') and Nufar's seed prompt content/reference/todo-artifact-seed-prompt.md (to-do and weekly-load board, compressed). Prove-by-hand discipline from summer-challenge/labs/set-it-and-summer.md. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Changed 2026-11-05, from Nufar's first review
- New arc, full rewrite: create it (one interview, then save right away) · context · skills or automations · to-do board · use it and keep improving. The old jobs table, morning briefing and meeting prep worked example, and the recipe prompts in Go further are gone. Monday has its own meeting prep tools, so meeting prep is not named.
- Step 1 adapts the AppsFlyer Exercise 1 Step 2 prompt with the Chief of Staff archetype only, plus personality. Same discipline: read and do not re-ask, the opening line, under 20 lines, every line changes behavior. "Identity" and "brain" are replaced by "instructions" and "context".
- Step 2 adapts "Hire the librarian": documents, interview for what documents never capture, short pages, TBD for gaps, inferred labelled. Page rules kept in one line. Build a Personal Brain is the pointer for going deeper.
- Step 3 is one prompt that interviews, proposes three options and builds the chosen one. Automation discipline kept in two lines. Skills and Automation Done Right are the pointers.
- Step 4 compresses Nufar's seed prompt. Kept: read and tag, short interview rounds with multiple choice, one-page design with a stop, seed from the calendar, plan tomorrow as a table, the four ground rules, "if it is not available here, say so". Dropped as briefed: prep-stage scale, other agents, plain-text mirror, multi-file setup. Also dropped to reach the length: the per-item checkbox rule, daily routines, planning habits, language and dark mode, links to where work happens, the two proposed skills.
- Step 5 uses the AppsFlyer Chief of Staff test question, "Diagnose by layer" as a small table, the keep-and-change feedback rule from Skills, and the done line.

Judgment calls
- Chat: Steps 1 to 4 run in one chat, because they build on each other. Step 5 opens a new chat inside the chief of staff, because the test only proves something if the saved instructions and context do the work.
- Before you start holds the one calendar and email line. The standing "If you have never built a skill" pointer (learnings, 23 Oct) moved into Step 3 because the brief allows one line here and Step 3 lets people choose an automation instead.
- The Step 3 page holds the examples and the prompt does not, so the prompt proposes from the person's answers without anchoring on the list.
- The board prompt says "interactive artifact", without "Claude", so it still works in other tools through the "say so and propose the closest option" clause.
- A row in the Step 5 table covers a chat that misses board items, for tools or plans where a new chat cannot read the board's stored data. It worked in Nufar's test in Claude on 5 Nov 2026.
- Customer-data rule sits once, in Step 2, written generally, and Go further points to Monday's own data for the account brief.
- Related adventures unchanged and matches `next`; Build a Personal Brain and Skills are linked inside their steps.
- Left out to save length: the "already have one" line in the hook (the Step 1 prompt covers it), and "you approve each app the first time" (the tool asks at that moment). The Share item in Go further has no do-this-when opener for the same reason.

Open items
- Keren Q6: are scheduled tasks in Claude enabled at Monday? Step 3 assumes yes.
- Google Calendar connector: confirm it is on at Monday. The Step 4 prompt seeds the board from the calendar (the artifact facts come from support.claude.com, read 5 Nov 2026; only personal storage and the "sharing within the organization" line reach the page).
- monday agents details: confirm skills in the Profile tab and running an agent from a board automation; wording follows Skills and Automation Done Right. Scheduled tasks created by Claude reportedly default to automatic approval (Oct 2026); Step 3 tells people to match permissions to the boundaries.
- Big Brain Studio access: can every employee start an app, or only on request? Same open item as Creating Apps.
- Can Claude add or change an artifact's stored data from a chat, and can a new chat read it? Yes. Nufar ran the two-chat test in Claude on 5 Nov 2026 and reported that it works. Which account she used was not recorded, so a run on a Monday account is still worth doing. The prompt keeps her clause and Step 5 keeps its row, both harmless if a tool or plan behaves differently.
- Fresh-chat prompt test pending (playbook step 4), especially the Step 4 prompt in Claude: storage, seeding, saved rules.
-->

# 🗓️ Your Own Chief of Staff

**Build an AI chief of staff that organizes your work, keeps track of your commitments and helps you decide what comes first.**

## Why this adventure

Your workload keeps growing, your to-do list is spread across many places, and every morning you decide again what matters most. Senior leaders have a chief of staff for this: someone who organizes the work, keeps track of commitments and moves work forward.

In this adventure you build one for yourself. It knows how you work, executes the tasks you repeat, and works from a to-do board that shows your week. You choose its personality, so it never annoys you.

## The trail

1. **Create your chief of staff**, so it knows its job and how to sound.
2. **Give it your context**, so its advice fits your real work.
3. **Give it skills or automations**, so it can execute.
4. **Build your to-do board**, so your commitments and load sit on one page.
5. **Use it, then keep improving**, because every correction makes it better.

## Before you start

Know what you want your chief of staff to do about your calendar and email.

## Step 1: Create your chief of staff

### Prompt: Your chief of staff's instructions

**What this does:** the AI interviews you and writes your chief of staff's instructions.

We recommend doing this adventure in Claude, and other tools work too. Open a new chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
I am building an AI agent for my work: my chief of staff, who handles execution, tracking, follow-ups and coordination.

Read what you already know about me and do not re-ask it. If I already have a similar agent, ask for its instructions and build on them.

Interview me in two rounds at most:
- How proactive it should be, and what it tracks without being asked
- My format for plans and digests, and what it may draft
- Role and mandate, and what is out of scope
- Priority areas, as categories
- Ways of working: read my saved context first, flag risks, when to ask before acting
- Boundaries: what it never does without my approval
- Personality: how it should sound so it never annoys me

Then write its instructions as one block. Open with "You are my chief of staff. Your job is..." Under 20 lines. Every line must change its behavior.
```

**Save the instructions now.** Paste them as project instructions or agent instructions, including a monday agent. In a folder, save them as CLAUDE.md if you use Claude, or as AGENTS.md if you use Claude Code or Cursor.

## Step 2: Give it your context

A chief of staff prioritizes well only when it knows your world. Your live sources are the monday boards and Slack channels where you work, and internal data through Kremer.

### Prompt: Build its context

**What this does:** the AI reads a few documents, interviews you, and writes short pages about your work.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Build the context my chief of staff reads before it works. Use only what my documents and I say. Mark gaps as TBD. Label anything you inferred.

1. Ask me to add a few documents relevant to my role.
2. Interview me about what documents never capture: informal dynamics, unwritten priorities, who really owns what.
3. Write short pages, one topic per page, for example team and how we work, and current priorities. Add a page listing my live sources. Ask me which monday boards and Slack channels belong there.

Show me the pages, say what is thin, and ask me to correct one thing you guessed.
```

Read each page and remove anything sensitive. Data that Monday's customers uploaded to their own monday boards stays out of Claude; Monday's own data about customers is fine.

Save the pages in the project, agent or folder that holds the instructions. To go deeper, use **Build a Personal Brain for Your AI**.

## Step 3: Give it skills or automations

Your chief of staff needs things to execute. For example:

- prioritize my week
- turn my Slack and mail into tasks
- a weekly review
- a status from a monday board

### Prompt: Choose what it executes

**What this does:** the AI interviews you about what repeats, helps you pick, and builds your choice.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me give my chief of staff one thing to execute. Use what you know about me. Ask one question at a time about what repeats in my work. Do not choose for me.

Propose three options. For each, say whether it should be a skill (saved instructions I start when I need them) or an automation (a job on a schedule or a trigger), and why. Wait for my choice.

Then check my tool's current documentation and build it. Give the complete instructions in one block: sources, output format, what to do when a source is missing, and what it must show me before acting. Tell me how to add it and, for a skill, to close and reopen the tool.
```

**For a skill:** if you have never built one, use **Skills: When, How and How Well**.

**For an automation:** run it by hand until it is right, because scheduled runs start fresh and remember only their instructions. Set its permissions to match the boundaries you set in Step 1. For the method, use **Automation Done Right**.

**In Claude:** add a skill under Customize → Skills, then close and reopen Claude. Ask Claude to schedule an automation, and check that it appears under Scheduled.

**In monday agents:** add a skill in the agent's Profile tab. Run the agent from a board automation.

## Step 4: Build your to-do board

Your chief of staff needs one page that shows your tasks, your week and how full each day is. If you already manage your list somewhere you trust, skip to Step 5.

We recommend a Claude artifact. Other tools work. For example, you can build the board in Big Brain Studio, Monday's internal app platform, which has Monday login and its own database, through its plugin in Cursor or Claude Code.

### Prompt: Build my to-do board

**What this does:** the AI learns how you plan, shows you a design, builds the board and plans tomorrow with you.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me build a personal to-do and weekly-load board as an interactive artifact, plus the rules that keep it working later.

1. Learn me. Read what you already know: instructions, memory, this chat, my connected calendar, mail, Slack and monday boards. Summarize my role, work streams, hours and commitments. Tag each line [instructions], [memory], [calendar] or [guess]. Ask me to correct it. Never ask what these sources answer.

2. Interview me. Three or four questions per round, multiple choice with a "something else" option. Cover:
- Work streams on the board, and dated deliveries that need preparation
- Workdays, hours, protected time, and what happens to unfinished items
- My priority words, which wins in a conflict, how to show load
- Statuses I need, for example waiting on someone
- Where my tasks come from, and which of those you can reach
- The views I want, and what must never appear
Stop once you can build.

3. Design. Show one page: the data, the views, my rules numbered in my words. Wait for my OK.

4. Build. Use personal storage, so my data stays between sessions. Seed it from my next two or three weeks of calendar and my open items, and mark seeded items. Keep the rules as saved instructions or a skill. Tell me whether you can change the board's data from a chat. If something is not available here, say so and propose the closest option.

5. First run. Plan tomorrow with me. Ask for my time blocks, slot tasks, flag conflicts, and show a table: Time, Block, Items. Ask what felt off and fix it.

Ground rules: my priority words win. When you add something, tell me what it competes with. Use absolute dates. Nothing I marked private goes on the board.
```

## Step 5: Use it, then keep improving

### Prompt: Test your chief of staff

**What this does:** shows whether your chief of staff can prioritize your real work.

Open a new chat inside your chief of staff (the project, agent or folder that holds its instructions), so your saved setup does the work. Paste the prompt below.

```
What should I focus on this week given my workload and deadlines? Prioritized top five.
```

Then keep going: test it, add more, improve it. Add rules, context and skills. Improve the skills, and so on.

| What do you see? | What could you do? |
| --- | --- |
| Generic, or out of date | Add a context page, or refresh one |
| Wrong tone, format or length | Add a rule to its instructions |
| Misses items on your board | Ask what it can see, and for the closest option |
| You keep asking for the same thing | Build a skill, as in Step 3 |

Concrete feedback says what to keep as well as what to change: "Keep the top five format. You ranked the renewal too low; it is due this Thursday." Ask for the complete new instructions or skill, and replace the old version.

You are done when you open your chief of staff and act on what it tells you.

## Go further

**Add another scheduled job.** Do this when another task repeats, for example a team-level status from your team's monday board.

**Prepare for customer calls.** Do this when the context is spread out, for example a pre-call account brief from Monday's own data, through Kremer.

**Share the board.** Artifacts start private and can be shared within the organization. Check what yours shows first.

## Proof of work

In "what I built", name where your chief of staff lives, one thing it executes, and one thing you acted on.

For example: "In a Claude project, with a to-do board and a weekly review skill. It moved a renewal to the top of my week."

## Related adventures

- **Automation Done Right**: design, run and monitor any automation.
- **Your Personal Newsletter**: your own newsletter on the topics you care about.
