---
slug: planning-with-ai
emoji: 🧭
icon: calendar
title: "Planning with AI"
walkaway: "A plan built from what is really on your plate, with a living home that stays fresh"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: 1 hour
outcome: Build something
pattern: INT + INSTALL
wave: W3
slot: 16
review: ready
video: /videos/planning-with-ai.mp4
next: [your-own-chief-of-staff, automation-done-right]
source: "New adventure (inventory: New). Pressure test adapted from Executive Catch-Up Project 5 (catch-up-may/content/week-2/project-5-strategic-advisor.md: Step 8 role map Decider / Influencer / Blocker / Champion / Neutral and the feared question; Step 9 scenario principles: early warning signs, tripwires, cheapest action this week; Step 10 pre-mortem and the mid-period priority reset) and its reference card (project-5-reference-card.md). The plan's home is Nufar's own practice: she manages her to-do list in a dedicated Claude artifact, kept current from Claude. The home-page prompt adapts her seed prompt (content/reference/todo-artifact-seed-prompt.md: design before building, seed and mark, numbered rules in her words, ground rules), shaped for plans. Artifact capabilities only from content/research/claude-artifacts-plan-facts-2026-11-10.md. Skill first, tested by hand, then scheduled: Nufar's automation method. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Rewritten 2026-11-10, from Nufar's page review (videos/planning-with-ai/notes.md)
- Planning now covers three kinds of plan: the day-to-day to-do list (for yourself or your team), a project or activity (a launch, a quarter), and a large work item that AI helps scope and manage.
- Trail: scope the planning · gather what is on your plate · draft and pressure-test · give the plan a home · keep it fresh. Step 4 (the home) is the centerpiece; Step 5 is required for recurring plans.
- Step 1: think-first in her final form, then one interview that owns plan type, who it serves, operating principles and granularity, sources, and routines. Later steps read the brief and never ask these again (one step owns each topic).
- Step 2: the signal sheet, widened, with a what-to-collect table per plan type (sources stay in Step 1's brief). Day-to-day types (commitment, ask, deadline, meeting) and project types (commitment, customer ask, breakage, team time, result). Independent-source count and UNVERIFIED kept. Customer-boards line kept.
- Step 3: one prompt that branches on plan type. Day-to-day gets a reality check (load per day against time outside meetings, what is slipping, drop / delegate / move). Project and large work item keep the three directions under the "directions are nuanced" rule (work with a clear leaning; three directions only when undecided), the one-page plan with capacity at 100%, and a compact reader challenge (role map, pre-mortem, the feared question; single-source priorities are already visible in the signal sheet's source count). It ends with a list of plan items, so Step 4 has a real artifact to work on.
- Step 4: three homes in one table (Claude artifact, monday board, another visual with Big Brain Studio and monday vibe as "for example" only), then one prompt that branches on the chosen home. The artifact branch is opinionated on fields and views and decides the output up front (design page, wait for OK); the board branch creates items through the connector after approval or gives a paste-in list; the other-tool branch hands over fields, views and items in one block. Personal or shared storage, Anyone at Monday sharing, updates from the plan's chat inside a Claude project, test once before relying on a new chat. All from the 10 Nov facts file; nothing undocumented is promised.
- Step 5: a self-contained skill prompt for one routine (reads the brief's sources, updates the home, flags what slipped, asks before dropping or delegating, quiet-day line), then a scheduled task. Artifact refresh by a scheduled task is written as "test it once in your setup". A one-off project gets the mid-way check-in prompt instead.
- Go further: scenario planning, compacted from the earlier prompt (same six moves in five lines); turning a personal plan into a team plan as a plain-language ask with no prompt block.
- Removed: the Build Your Board of Advisors pointer and the reader table before the stress test (the prompt defines the roles). Dana's example replaced by Marco (day-to-day), because the artifact is the harder thing to picture.
- Managers: capacity is team capacity; notes about individual people stay out of it (Step 3).

Judgment calls
- Overlap with Your Own Chief of Staff Step 4 (to-do board artifact from the same seed prompt): kept distinct by scope. That page builds an assistant for the whole workload; this one makes one plan, with plan-specific fields and views, and says so in Related adventures (a hook line was cut for length). Nufar may want Chief of Staff Step 4 to point here, or to keep both.
- Two branching prompts run long: Step 3 (~235 words, both plan types plus the reader roles) and Step 4 (~240 words, three homes). Both sit near the guide's ~250 ceiling for a prompt that defines a framework; splitting them would cost more words in do-this lines and push the page past the 2,300 cap.
- Length: first full draft 3,154 words; cut to 2,294 by merging the two Step 4 prompts, compacting the scenario prompt, turning the team plan into a plain-language ask, dropping the reader table and the where-it-lives column, and trimming every prompt. Nothing self-contained was cut. The page sits just under the cap, so any addition needs a matching cut.
- Before you start holds only the skill prerequisite line; choosing the plan sits in Step 1, so the two never overlap.
- The whole adventure runs in one chat, inside a Claude project, because that chat later keeps the plan updated. The check-in prompt works from that chat or from a pasted plan.
- next changed to your-own-chief-of-staff and automation-done-right, to match Related adventures. Making Decisions with AI stays in Related adventures.
- effort left at 1 hour; with an artifact build, a skill and a schedule, Longer may fit better (Chief of Staff is Longer). Category left at Create with AI. Both are Nufar's call.

Open items
- monday connector write access: Step 4 lets the AI create board items after approval and offers a paste-in list as the alternative. Confirm item creation through the connector is enabled at Monday.
- Kremer access from Claude: worded "if I have access", consistent with other adventures.
- Hands-on test: can a new Claude chat update an existing artifact at Monday? Not documented. The page tells people to keep the plan's chat in a project and test once. (Nufar's 5 Nov two-chat test in Your Own Chief of Staff worked; the account was not recorded.)
- Artifact connectors and Dashboards: are they enabled at Monday? Neither is named on the page until confirmed. monday.com is not a documented artifact connector.
- Keren Q6: scheduled tasks in Claude enabled at Monday? Step 5 assumes yes.
- Prompt test in a fresh Claude chat: pending (playbook step 4), especially the branching Step 3 prompt and the home-page prompt's storage and seeding.
-->

# 🧭 Planning with AI

**Make a plan from what is really on your plate, test it, and give it a home that AI keeps fresh.**

## Why this adventure

A plan can be your to-do list for today, a project or activity, or a large piece of work that needs scoping. Often it lives in your head or a chat and goes stale within days, while the real commitments sit in monday boards, Slack, email and your calendar.

In this adventure you make one real plan with AI, give it a home such as a Claude artifact or a monday board, and add a routine that keeps it fresh.

## The trail

1. **Scope the planning**, so the plan fits how you work.
2. **Gather what is on your plate**, so it rests on evidence.
3. **Draft and pressure-test the plan**, before the work starts.
4. **Give the plan a home**, where you look every day.
5. **Keep it fresh**, so it stays true after the first week.

## Before you start

If you have never built a skill, start with Skills: When, How and How Well.

## Step 1: Scope the planning

**Think first for yourself, without AI.** Which plan is it: your day-to-day to-do list, a project such as a launch or a quarter, or a large work item to scope? What should it do for you, and who relies on it? How do you like to plan, and in how much detail? Where does your work come from? Messy is fine.

**In Claude:** create a project for this plan and run the whole adventure in one chat there. That chat will keep the plan updated.

### Prompt: Your planning brief

**What this does:** the AI interviews you about your thoughts and writes a short brief that every later step uses.

Copy the prompt below into an AI tool, ideally where you will do the actual work. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me scope a plan. Ask me to brain dump or paste all my thoughts on this before you start. Use what you know about me; ask only for gaps, one question at a time. If I already answered a question earlier in this chat, don't ask it again. Do not choose the plan, do not narrow it, and do not decide what good means.

Cover:
1. Plan type: day-to-day to-do list, project, activity or quarter, or large work item
2. Who it serves, and who approves it
3. Period, scope, and what done looks like
4. Operating principles: how I plan (for example a top three a day, weekly themes, time blocks, buffer for the unplanned) and how detailed items are
5. Sources, for example monday boards, Slack, email, calendar, Drive, Kremer if I have access
6. Routines that keep it fresh, for example a morning plan or a weekly review
7. Fixed constraints: dates, team size, commitments made

Write a planning brief under these seven headings, under 200 words. Wait for my approval.
```

## Step 2: Gather what is on your plate

| Plan type | What to collect |
| --- | --- |
| **Day-to-day** | Commitments you made, asks waiting for you, deadlines, meetings to prepare |
| **Project or work item** | Commitments, customer asks, what breaks (bug boards, incident write-ups), where team time goes, results |

Data that Monday's customers uploaded to their own monday boards stays out of Claude; Monday's own data about customers is fine. AI tends to treat one loud request as a trend, so the prompt counts independent sources.

### Prompt: Your signal sheet

**What this does:** reads the sources in your brief and builds one table of evidence, before any plan exists.

Stay in the same chat and paste the prompt below.

```
Build a signal sheet for the planning brief in this chat. Read the brief's sources through my connectors and name any you could not reach.

One table: item, type, source, number of independent sources, due date, data or anecdote. Day-to-day types: commitment, ask, deadline, meeting. Project types: commitment, customer ask, breakage, team time, result.

Below it: the strongest items, conflicts, and open questions. Mark anything no source confirms as UNVERIFIED. Then ask what only I know, such as a promise made in a meeting.
```

## Step 3: Draft and pressure-test the plan

Capacity in a plan is team capacity; notes about individual people stay out of it.

### Prompt: Draft and pressure-test my plan

**What this does:** drafts and tests the plan by its type, waits for your decisions, and ends with a list of plan items.

Stay in the same chat and paste the prompt below.

```
Draft my plan from the planning brief and signal sheet in this chat, following the brief's operating principles and level of detail.

Day-to-day plan:
1. Draft today, this week, and waiting on others, each item with source and due date.
2. Reality check: real load per day against my time outside meetings, what is slipping, and what to drop, delegate or move.

Project, activity, quarter or large work item:
1. If my leaning is clear, work with it; offer one alternative only if clearly stronger. If I am undecided, propose three directions: focused (fewer bets, done well), balanced, ambitious, each with what it gives up. Wait for my choice.
2. One page: goal and measure; three to five priorities with their signals ("judgment call" if none); deferred items with reasons; team time per priority plus run work (support, on-call, bugs, incidents), totalling 100%; milestones, dependencies, assumptions.
3. Challenge it. Ask who reads it and their role: Decider (approves it), Influencer (the Decider listens to them), Blocker (can stop it), Champion (argues for it), dependent team (delivers a part). Give each one's concern and question, a pre-mortem (the three likeliest reasons it failed), and the question I most hope nobody asks, with a calm answer.

Wait while I accept or reject each point. Then give the revised plan, a change log, and a list of plan items: name, section, owner if shared, absolute due date, status, source.
```

When something is off, say exactly what, for example "Thursday already has six hours of meetings".

## Step 4: Give the plan a home

A plan that lives only in a chat gets lost. Give it one home, and have the AI update it after every change.

| Which home? | What do you get? | Best when |
| --- | --- | --- |
| **A Claude artifact** | An interactive page with views that saves what you tick and add | Your own to-do list, or a small team's plan |
| **A monday board** | Items with owners, due dates and statuses | The team works from it daily, or a scheduled task keeps it current |
| **Another visual** | For example an app in Big Brain Studio or monday vibe | You need a view the other two cannot give |

### Prompt: Give my plan its home

**What this does:** asks which home you chose, shows you the design, and builds it only after your OK.

Stay in the same chat and paste the prompt below.

```
Give the plan in this chat one home. Ask me which: an interactive artifact, a monday board, or another tool. If I already answered a question earlier in this chat, don't ask it again.

Artifact: a page that saves its data between sessions.
- Fields: title, section, project, absolute due date, priority in my words, status (to do, in progress, waiting on, done), waiting on what or whom, source, note.
- Views: Today (opens first, overdue on top), This week, By project, Waiting on others, Done.
- Show me the fields, views, and my brief's operating principles as numbered rules in my words. Wait for my OK. Then build it: personal storage if only I use it, shared storage if others do. Seed it with this chat's plan items, marked as seeded, and save my ticks and additions. Say whether you can update its data from this chat; if not, propose the closest option.

monday board: ask which board and groups. Per item: name, group, owner, due date, status, dependency; for a project, a "Deferred" group with reasons. Show the list and stop. Create the items through the monday connector only after I approve; if you cannot, give me a list to paste.

Another tool: give me the fields, views and items in one block to build from.

My priority words win. When you add an item, say what it competes with. Nothing I mark private goes in.
```

**In Claude:** the page sits under Artifacts in the sidebar. To share it, choose Anyone at Monday with Can view or Can edit. Ask Claude to update it in this chat. Test once before you rely on a new chat to update it.

## Step 5: Keep it fresh

A recurring plan, such as your week or a team's sprint, stays true only when a routine refreshes it: a skill, tested by hand, then put on a rhythm. For a one-off project, go to the check-in at the end of this step.

### Prompt: Build my planning routine

**What this does:** the AI interviews you about one routine and writes a skill that reads your sources, updates the plan's home and flags what slipped.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me build a skill for one routine from my planning brief, for example "plan my day", "weekly review" or "add this to my plan". A skill is saved instructions an AI tool follows whenever I ask for that task. If I already answered a question earlier in this chat, don't ask it again. Do not choose the routine for me; ask one question at a time for what is missing.

The skill must:
1. Read the brief's sources within a fixed time window
2. Update the plan's home, named exactly
3. Flag what slipped: overdue, moved more than twice, waiting on others past my limit
4. Propose next items by my operating principles, and ask before dropping or delegating anything
5. Say "nothing new" on a quiet day, and name any source it could not reach

Check my tool's current skill format. Write the complete skill in one block: a short lowercase name with hyphens, when to use it, the steps, a literal output template. Tell me how to add it, and to close and reopen my tool.
```

Add the skill (**In Claude:** Customize → Skills), then close and reopen your tool. Run it by hand for a few days, with specific feedback, until you would act on its output as is.

**Then put it on a rhythm** as an automation. **In Claude:** ask Claude to run the skill as a scheduled task every weekday morning, and check that it appears under Scheduled. It can update your monday board or post the day's plan to Slack. Whether it can update an artifact is not confirmed, so test that once in your setup.

> **Example: Marco, customer success team lead.** His page opens on Today with three items, and Waiting on others shows legal's contract review. His plan-my-day skill flagged that the onboarding playbook had moved three days in a row, so he delegated it.

**For a one-off project,** check the plan against reality halfway through the period.

### Prompt: Check the plan against reality

**What this does:** compares the plan with its home and recommends one change.

Paste the prompt below in the plan's chat, or in a new chat.

```
Compare my plan with its home, the monday board or page where the work is tracked. If the plan is not in this chat, ask me to paste it and name the home. Report progress per priority, changed signals, and assumptions that no longer hold. Recommend one move: keep, cut or add. Mark any point without a source as UNVERIFIED. Update the home after I approve.
```

You are done when the plan lives in its home and its routine, or its check-in, has run once on real work.

## Go further

**Plan for the futures that worry you.** Do this when the plan depends on things outside your control, such as a large customer's decision.

**What this does:** builds four scenarios from two uncertainties and sorts your moves into now and later.

Stay in the plan's chat and paste the prompt below.

```
Run scenario planning on the plan in this chat: combine the outcomes of the two uncertainties that would change it most into four scenarios, and decide in advance what to do in each.
1. Propose four uncertainties outside my control; I pick two.
2. Each scenario: a short name, whether the plan holds, what changes, and its early warning sign.
3. Robust moves that help in every scenario. These go into the plan now.
4. Waiting moves, each as a tripwire: "If this happens, we do this."
5. The cheapest action this week against the biggest risk.
```

Add the warning signs to the plan's home as "Signals to watch".

**Turn your plan into a team plan.** Do this when your team keeps asking what is planned. In the plan's chat, ask the AI to add an owner and a By owner view, and to switch the page to shared storage or move the items to your team's board.

## Proof of work

In "what I built", name the plan, its home, and the routine that keeps it fresh (or the project check-in date).

For example: "My day-to-day plan, on a Claude page my team can see. My plan-my-day skill flagged a slipping playbook, so I delegated it."

## Related adventures

- **Your Own Chief of Staff**: an assistant for your whole workload.
- **Automation Done Right**: design and test any scheduled task.
- **Making Decisions with AI**: a real challenge on single decisions inside your plan.
