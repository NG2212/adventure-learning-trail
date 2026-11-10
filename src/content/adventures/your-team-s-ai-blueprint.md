---
slug: your-team-s-ai-blueprint
emoji: 📐
icon: chart
title: "Your Team's AI Blueprint"
walkaway: "A Team AI Blueprint: a map of what the team has built with a decision on every duplicate, a shared knowledge plan, use cases scored with FVI, a roadmap with owners, your expectations, team routines, and a plan to bring everyone along"
category: Lead with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: Longer
outcome: Build something
pattern: INT
wave: W3
slot: 24
review: ready
video: /videos/your-team-s-ai-blueprint.mp4
next: [managing-with-ai, skills-when-how-and-how-well]
source: "Adapted from appsflyer/Managers/exercises/exercise-4-team-os-sprint.md (Team OS components, 'every build gets an owner and a first step', the This Week close, swap / Monday-morning / people tests); appsflyer/Managers/exercises/team-os-interviewer-skill.md (quarterly review run: changes since last review, honest about what stalled); appsflyer/Managers/exercises/archive/2026-07-cohort-1/rnd-exercise-4-team-command-center.md Path B (Change Rituals: a sharing format, a learning cadence, recognition, small verifiable wins for skeptics); monday-client/monday-managers-training/Session 4/session-4-exercise-2-build-team-os.md Option B (minimum version to start this week; Innovation radar 'flags duplications'; team message from the stretch goals); Session 4/session-4-exercise-1-strategic-conversation.md and session-4-speaker-notes.md (the innovation map: what exists, what is duplicated, visibility gaps; 'visibility before control'; employees may be ahead of their manager); monday-managers-training/AGENTS.md (Nufar's AI Manifesto: what you believe, expect and allow; her Agent Tier Framework for what needs outside review). The shared-knowledge tests in Step 3 adapt the team edition from build-a-personal-brain-for-your-ai.md (three tests, one owner, one home, a start-here index). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 24 [Inbar 29])
- First version: the five Team OS components renamed in plain words (shared context, team skills, use-case backlog, build rules, review rhythm), token-budget question, This Week close, swap / tomorrow / owner tests, quarterly rerun, Team Agent Brief, intro message to the team. Team-level only: no per-person readiness, no champion language.

Rethink (2026-11-10, Nufar's page review, videos/your-team-s-ai-blueprint/notes.md: "very narrow and shallow, honestly")
- New spine: the manager's bird's-eye view and three hats (roadmap, governing, managing change). Five steps: as-is discovery with what the manager is not happy with; map what exists and decide on each duplicate (merge, remove, name an owner); shared knowledge (Monday Brains or another shared system) plus team use cases scored with FVI; the blueprint itself (roadmap in three lanes: build ourselves, get help, refine what exists; expectations: expect, allow, push further; team routines with how often and who owns each); launch, bring everyone along at team level, quarterly review.
- Kept: owner and first step on every item, This Week, the three tests (swap, tomorrow, owner), the quarterly review prompt (now also rechecks duplicates, expectations and routines; FVI defined inside it), the launch message. The team brain's three tests moved into the Step 3 prompt; the file-building ask was removed from Go further in the third review.
- Reused for the new scope: the boundary map (central vs the manager's layer), first used as "mark what Monday provides centrally" and cut on review with the map prompt; Change Rituals (sharing format, learning cadence, recognition, small verifiable wins on real work) as the bringing-everyone-along moves; "visibility before control" as the Step 1 rationale; Nufar's AI Manifesto (believe, expect, allow) as the expectations section, with "push further" from her notes; her Agent Tier Framework (personal, team, employee-facing, customer-facing) in plain words as the "get help" rule. The manifesto's job-security part is left out of this page (post-layoff audience; her call).
- Cut: the five-part table in Step 1, the token-budget paragraph (folded into "what you are not happy with" examples), the separate monthly-review table (now inside the routines).
- No overlap: 1:1s, feedback, bias stay in Managing with AI; personal use cases stay in Use-Case Discovery; one person's system audit stays in Audit and Improve. This page is the team's AI as a whole.

Review of the rewrite (2026-11-10, Nufar, notes.md "review of the rewrite")
- Her notes: run it where the AI knows her preferences and team context best; old Steps 1 and 2 overlapped (people raise duplication in Step 1 anyway); automatic Slack/app trawling finds little and wastes tokens; ask the manager to point to where AI work lives, and let the AI check skills and artifacts shared in its own environment; add a wish list that does not overlap the as-is; ask directly about too many artifacts and repeated skills (find it? trust it? verified?); every prompt must say not to re-ask and to build on earlier answers; knowledge and use cases do not belong in one step.
- Applied: new Step 1 "See what exists and what you wish for" merges the old as-is and map steps. The decision table (merge / remove / name an owner) now covers duplicate, unowned or untrusted items. The prompt reads only the places the manager names plus what is shared in its own environment, and says "Do not search other channels or applications". Find / trust / verified are in the think-first questions and the interview. The wish list (work the team does not do today, results she is unhappy with) closes the prompt, and "what I am not happy with" left the as-is questions so the two do not overlap. "Mark what Monday provides centrally" was cut with the map prompt.
- Every prompt now says "Do not ask what I already answered earlier in this chat; build on those answers", and its questions ask "only what is still open / what my brain dump left open". The quarterly review (a new chat) says "Do not ask what the blueprint or my answers in this chat already cover; build on them."
- Old Step 3 split: Step 2 = use cases with FVI, Step 3 = shared knowledge with the team-brain tests. Order choice: use cases first, because the wish list that ends Step 1 feeds them directly and managers keep momentum on what they want built; the knowledge step then targets what the top use cases need plus the find / trust gaps from Step 1, which keeps it from becoming a generic document dump. Flip back if she prefers knowledge first.
Third review (2026-11-10, Nufar, notes.md "third review")
- Her notes: the use-case prompt assumed the AI knows too much and would hallucinate or project FVI; the launch material should be visual (an artifact or a deck) or the AI should brainstorm the most accessible format; move the quarterly review into Go further and remove the rest of Go further.
- Applied, FVI: the Step 2 prompt now settles the list first, then asks in one batch, only what the chat does not answer, the questions behind each lens: Feasibility (tools, data and access, Kremer named), Value (goals and how often the work happens), Investment (setup and upkeep effort, and who would do it). Each rating cites the manager's answers; a score it cannot ground reads "unsure, needs input from" plus who (for example the data owner or IT). The prose line under Step 2 says the AI asks because only the manager knows tools, access and effort. The quarterly review's rescore follows the same rule.
- Applied, launch: the Launch prompt first brainstorms the format that makes the blueprint most accessible to this team (one visual page, a visual roadmap, a short deck, a pinned board view), then builds the chosen one visually, for example as a Claude artifact (artifacts are enabled at Monday, 5 Nov learning). The 150-word launch message became a short Slack announcement that points to it; talking points stay. Proof example now ends "roadmap shared as a Claude artifact".
- Applied, Go further: the quarterly review prompt moved there whole and self-contained (its own why line, What this does, do-this line, FVI defined inside, never-re-ask line). The shared-knowledge file-building ask was removed. Step 5 ends with the done line plus one pointer: "To keep steering, run the quarterly review in Go further."
- Trims to stay under the cap: Step 2 FVI prose shortened (definitions live in the prompt), the "Protect time" and "Ask what gets in the way" rows left the Step 5 table (the launch prompt still asks what gets in the way), the test names folded into one question line, small cuts across the prompts.

- Do-this line for Step 1: "Copy the prompt below into the AI tool or environment that knows your preferences and your team best, for example your main Claude project."
- Before you start now says to know where the team's AI work lives (deck, monday board, skills list); the advance team list is gone. "Send the message yourself" line cut (the launch prompt says it); test names shortened to Swap / Tomorrow / Owner.

Judgment calls
- Title kept: it still says what you get.
- effort moved from 1 hour to Longer: five steps and five interviews. outcome and pattern unchanged (INT: interview, then artifact).
- One chat for Steps 1-5, opened in Step 1, because every step builds on the as-is and the wish list. The quarterly review opens a new chat with the blueprint pasted.
- "Bringing everyone along" sits in Step 5 only (one step owns each topic). The prompt forbids assessing or naming individuals; the page says any view of a person stays in the manager's own conversations.
- Owners are always the manager's call; every prompt says so.
- The Step 1 prompt carries the customer-boards line because it reads monday boards the manager points to.
- Team agent brief prompt dropped from Go further for length (it is not in her notes); agents now sit in the "Build ourselves" lane ("a monday agent on the team board"). Restore as a Go further paragraph if she misses it.
- Team brain prompt became a prompt-free Go further ask, then was removed in the third review (her call: Go further holds only the quarterly review).
- "Anything for other employees or customers goes through Monday's own review path" is her Agent Tier Framework in plain words; it names no specific Monday process, since none is confirmed.
- One line for directors: "If you lead other managers, your team is the whole group."
- QBR spelled out on first mention (8 Nov acronym rule).
- Length: first full draft 3,335 words; 2,285 by lint after compressing every prompt, dropping the agent brief, and turning the team brain into a paragraph. Over the 1,800 aim because the page now carries six self-contained prompts across her seven blueprint parts; nothing was cut from self-containment.

Open items
- Monday Brains: confirm the product's exact name and capitalization (Nufar wrote "Monday Brains"; monday products are usually lowercase, for example monday agents). Used in Step 3.
- monday connector: can Claude add items to a monday board from a table? The Step 4 "In Claude" line assumes yes.
- Keren Q2 (how skills are added and shared at Monday): affects team skills on the roadmap and whether a manager can share one skill with the whole team.
- Team agent home: confirm that monday agents can serve a whole team from a team board (Step 4 lane table), and that shared Claude projects are enabled for teams (Step 3). Wording is provisional.
- Prompt test in a fresh Claude chat: pending (playbook step 4), especially whether the Step 1 prompt can list skills and artifacts shared with the user in Claude, and whether the never-re-ask lines hold over a five-prompt chat.

Log
23 Oct: do-this line on every prompt.
Changed 2026-11-05: think-first opener per the 23 Oct rule; chat and Cowork treated as one surface.
Changed 2026-11-08: self-contained team brain prompt replaces the pointer to another adventure (HARD RULE).
Changed 2026-11-10: full rethink from Nufar's page review (see above).
Changed 2026-11-10: revised from her review of the rewrite (see above): Steps 1-2 merged, knowledge and use cases split, wish list, find/trust/verified questions, never-re-ask on every prompt, no automatic channel search. Length 2,284 by lint (core 1,930, prompts 951).
Changed 2026-11-10: third review (see above): FVI asked, never guessed; visual launch format; quarterly review is the only Go further item. Length 2,277 by lint (core 1,791, prompts 1041).
-->

# 📐 Your Team's AI Blueprint

**Take a bird's-eye view of your team's AI, then set the roadmap, expectations and routines that move the team forward.**

## Why this adventure

Your people are likely already building impressive things with AI on their own initiative. Your bird's-eye view still matters a great deal: you see duplicates, what knowledge to share and the next big step. Your planning and proactive leadership keep the team using AI effectively and pushing further. You steer the boat, so the team does not drift.

Leading a team's AI means wearing several hats: building the roadmap, governing, and managing the change. Here you wear all three and leave with a Team AI Blueprint.

## The trail

1. **See what exists and what you wish for**, and decide on duplicates.
2. **Choose use cases with FVI**, grounded in your answers.
3. **Capture shared knowledge**, so everyone's AI starts from one picture.
4. **Write the blueprint**: roadmap, expectations and team routines.
5. **Launch it and keep steering**, so everyone comes along.

## Before you start

Know where your team's AI work already lives, for example a deck, a monday board or a list of skills.

## Step 1: See what exists and what you wish for

The blueprint covers the team as a whole. If you lead other managers, your team is the whole group. Follow Monday guidelines regarding employee data.

Visibility comes before control. When people build on their own initiative, similar skills and artifacts pile up, and it gets hard to know which one to use. Every duplicate, unowned or untrusted item gets one decision:

| Decision | When does it fit? | For example |
| --- | --- | --- |
| **Merge** | Two or more builds do the same job | Two quarterly business review (QBR) skills become one |
| **Remove** | Nobody uses it, or something better exists | A daily digest nobody reads |
| **Name an owner** | People rely on it, but nobody keeps it current | The shared product glossary |

**Think first for yourself, without AI.** Ask yourself:

- What does the team already do with AI that you are proud of?
- Do you and your team easily know where to find information, or how to do a given task with AI? Do you trust the output? Do you know it was verified?
- What does the team not do today that you wish it did? Which results are you unhappy with?
- What are you sure about, and what are you still weighing?

Messy is fine.

### Prompt: As-is and wish list

**What this does:** the AI interviews you about your thoughts and writes an as-is table with your decisions, plus a wish list.

Copy the prompt below into the AI tool or environment that knows your preferences and your team best, for example your main Claude project. Use this chat for all five steps. Answer its questions in writing or by voice.

```
I want a bird's-eye view of my team's AI work. Ask me to brain dump or paste all my thoughts on this before you start. Use what you know about me and my team, and say if your context is thin. Do not ask what I already answered earlier in this chat; build on those answers.

1. What exists. Ask me where our AI work lives, for example a deck, a monday board or a list of skills, and read those. Tell me which skills and artifacts shared with me you can see here. Search nothing else. Never read data that customers uploaded to their own monday boards.
2. Then ask, one question at a time, only what my brain dump left open: our goals; whether we easily know where to find information or how to do a task with AI; whether we trust the output and know it was verified. Never assess an individual.
3. Show one table: name, what it does, where it lives, owner (or "no owner"), any item doing the same job. For each duplicate, unowned or untrusted item, propose Merge, Remove or Name an owner, with a reason. I make every decision and choose every owner.
4. Then ask for my wish list, covering only what we have not discussed yet: work the team does not do today, and results I am unhappy with.

Write "As-is" (what works, plus the table with my decisions) and "Wish list". Stop and wait.
```

## Step 2: Choose use cases with FVI

Start from your wish list. A use case is a specific way AI drives value for the team. Score each with **FVI**: **Feasibility**, **Value** and **Investment**. The AI asks what it needs to score; only you know your tools, access and effort.

### Prompt: Team use cases

**What this does:** the AI turns your wish list into use cases, asks what it needs, and ranks them with FVI.

Stay in the same chat and paste the prompt below. Answer its questions in writing or by voice.

```
Help me choose team use cases. Do not ask what I already answered earlier in this chat; build on those answers, especially my wish list.

Ask which ideas the team has raised. Add bigger ideas of your own, marked. Write each use case in one sentence: who it helps, which work, what result. Leave out what already works and anything too small to matter. Wait until I settle the list.

Then score each with FVI. Never guess what only I know. Ask me in one batch, only what this chat does not answer yet:
- Feasibility: can it work with our tools, data and access, including internal data through Kremer?
- Value: how much would it help our goals, and how often does the work happen?
- Investment: what effort to set up and maintain, and who would do it?
Rate each High, Medium or Low with a one-line reason from my answers. Where you still cannot ground a score, write "unsure, needs input from" and name who, for example the data owner or IT.

Show one ranked table. Ask what I would rank differently, then stop and wait.
```

## Step 3: Capture shared knowledge

Each teammate's AI works only from what it knows. Shared knowledge gives the team one point of view (goals, processes, terms, account context, past decisions) and one place to find what to trust. It can live in Monday Brains or another shared system, for example a shared Claude project.

### Prompt: Shared knowledge plan

**What this does:** the AI plans what the team's AI should know, where it lives and who keeps it current.

Stay in the same chat and paste the prompt below. Answer its questions in writing or by voice.

```
Help me plan my team's shared knowledge: the point of view every teammate's AI should start from. Do not ask what I already answered earlier in this chat; build on those answers, especially where we struggle to find information or trust the output, and what our top use cases need.

Ask me one question at a time, only what is still missing: what lives in one head, what teammates keep explaining to their AI, and where it should live.

Keep a piece only if it is about the work (nothing about a specific person), would change how three or more teammates act, and stays true for a month. Otherwise link its live source. Show a table: knowledge, source, home, owner, how often it is refreshed. I choose every owner. Wait for my approval.
```

## Step 4: Write the blueprint

Now you wear two hats: roadmap and governance. The roadmap has three lanes:

| Lane | What goes there? | For example |
| --- | --- | --- |
| **Build ourselves** | Team skills, projects, automations, agents (for example a monday agent) | A QBR prep skill for the team |
| **Get help** | Data access, or builds for other employees or customers | A renewal-risk app on Big Brain Studio |
| **Refine what exists** | Builds from Step 1 that need improving | Merge the two weekly-update skills |

Governing means saying what you **expect** (the team skill is the default for the weekly update), what you **allow** (anyone builds freely for their own work; a build others rely on gets an owner and a test) and where you **push further** (one more recurring task moves to AI each quarter). Team routines say how the team shares and improves what it builds, how often, and who owns each.

### Prompt: Write the Team AI Blueprint

**What this does:** the AI asks for your decisions, then writes the blueprint with three actions for this week.

Stay in the same chat and paste the prompt below. Answer its questions in writing or by voice.

```
Write my Team AI Blueprint from this chat. Do not ask what I already answered earlier in this chat; build on those answers. First ask me, one question at a time, only what is still open:
1. Roadmap: what the team builds itself, where we need help and from whom, which builds to refine. Anything for other employees or customers goes through Monday's own review path.
2. Expectations: what I expect, what I allow the team to build freely, where I push further.
3. Routines: how we share what we build with AI and improve our systems, how often, who owns each.
Do not choose owners, priorities or expectations for me.

Then write one page: Where we are (five lines); What exists and our decisions; Use cases; Shared knowledge; Roadmap (item, lane, owner, first step, target date); Expectations; Team routines (routine, how often, owner); This Week (three actions for the next five workdays, each concrete enough to start tomorrow). Stop and wait for my review.
```

Before you save, test it: would it fit another team (then it is generic)? Could you start action 1 tomorrow? Is each owner right?

Save the blueprint in the team's shared knowledge home. Put the roadmap on a monday board with lane, owner, first step and status columns. **In Claude:** with the monday connector on, ask Claude to add the roadmap to the board, then check the items.

## Step 5: Launch it and keep steering

The third hat is managing the change. People on every team are at different places with AI, and some may be ahead of you. Make the next step easy for everyone, at team level. Any view of an individual stays in your own conversations, outside the AI.

| Move | For example |
| --- | --- |
| **Make the shared way easy** | Recurring work starts from team skills and shared knowledge |
| **Show real work** | A teammate shows one build, including what did not work |
| **Offer a small win** | Help anyone turn one recurring task into a skill |

### Prompt: Launch the blueprint

**What this does:** the AI builds the blueprint in a visual format you choose, plus talking points and an announcement.

Stay in the same chat and paste the prompt below. Answer its questions in writing or by voice.

```
Help me launch my Team AI Blueprint and bring everyone along. Do not ask what I already answered earlier in this chat; build on those answers. Ask me one question at a time, only what is still open: how I will introduce it, and what gets in the way of AI use on the team as a whole. Never assess or name an individual.

Then:
1. Brainstorm with me which format makes the blueprint most accessible to this team, for example one visual page, a visual roadmap, a short deck or a pinned board view. Build the one I choose visually, for example as a Claude artifact.
2. Include "Bringing everyone along": four or five team-level moves that make the next step easy for people further behind.
3. Write meeting talking points ending with one open question, and a short Slack announcement in my voice that links to the visual.
Wait for my approval. I send everything myself.
```

You are done when the team has the blueprint, the roadmap is on a board, and the first This Week action is complete. To keep steering, run the quarterly review in Go further.

## Go further

**Review the blueprint every quarter.** Do this so the blueprint stays true to what really happened.

**What this does:** updates the blueprint honestly, rescores the use cases, and gives you a new This Week.

Each quarter, open a new chat in the same tool or project and paste the prompt below. Answer its questions in writing or by voice.

```
Run the quarterly review of our Team AI Blueprint. Ask me to paste it, and our roadmap board if I have it. Do not ask what the blueprint or my answers in this chat already cover; build on them.

Interview me in one batch, at team level only: what got built, what stalled and why, new duplicates, what nobody uses or trusts, whether routines happened, changes in our goals. Then update the blueprint with "Changes since last review" at the top. Be honest about what stalled and retire what nobody uses.

Rescore the use cases with FVI: Feasibility (our tools, data and access), Value (our goals, how often the work happens), Investment (setup, upkeep, who does it). Ask me what you cannot ground; mark what stays unclear "unsure, needs input from" and who. End with a new This Week: three actions for the next five workdays. Stop and wait for my approval.
```

## Proof of work

In "what I built", name a duplicate you resolved, the top roadmap item and its owner, and the This Week action you completed.

For example: "Global partner marketing: merged two campaign-brief skills. Top item: a partner performance summary, owned by our ops lead. Done: roadmap shared as a Claude artifact."

## Related adventures

- **Managing with AI**: the people side of managing, for example 1:1s.
- **Skills: When, How and How Well**: build the team skills on your roadmap.
