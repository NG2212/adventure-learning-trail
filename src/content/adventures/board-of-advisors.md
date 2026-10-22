---
slug: board-of-advisors
icon: masks
emoji: 🎭
title: "Build Your Board of Advisors"
walkaway: "A reusable board chosen for your work, and a decision or deliverable that has already survived its critics"
category: Work smarter with AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone, Customer Facing, Product]
audience: [Managers]
tool: Any AI tool
effort: Moderate
outcome: Build something
pattern: INT + PANEL
wave: W1
slot: 11
next: [making-decisions, de-slop, hard-conversations]
source: "Adapted from Executive Catch-Up Project 5 (Strategic Advisor: Steps 3-5 and 6) and its reference card, and the board-of-advisors skill synthesis rules; Step 1 discovery interview adapted from the Summer Adventure lab Where To Next."
---

<!--
DESIGN NOTES (not rendered)
Adaptation note:
- Kept from P5: board composition (archetypes vs real stakeholders), 2-3 sentence in-character turns, members challenge each other, devil's advocate nihilism-vs-sharpening principles, specific-feedback coaching, the default → board → devil's advocate comparison, the Stakeholder Dynamics knowledge file.
- Kept from the board skill: synthesis = where most agree, the sharpest split, the perspective most likely to be dismissed (and whether dismissing it is justified), one recommendation only on request.
- Cut: the Strategic Advisor wrapper and its other modes (meeting prep, scenarios, monthly review), decision-style personas, all Catch-Up cross-references.
- Added for Monday: Step 1 discovery (segments / ICPs / stakeholders / known figures), never-force-a-panel rule, optional devil's advocate, evidence-backed personas (call notes, verbatims, boards, Kremer), sub-agent side quest, record-the-dissent step.
- Open for Nufar: Cowork sub-agent support not confirmed in Anthropic docs (Oct 2026), so the side quest names Claude Code first and Cowork conditionally; skill install path on Monday's Claude Enterprise pending Keren Q2; `next` slugs other than de-slop are provisional. Emoji changed from the multi-codepoint 🧑‍⚖️ to 🎭 (orchestrator, 10-10).
-->

# 🎭 Build Your Board of Advisors

**Put the people your work has to satisfy in the room before you walk into it.**

## Why this adventure

You present the feature brief or the QBR plan, and the first question comes from an angle you never considered: the customer segment you forgot, the buyer who cares about something else, the finance partner who reads every plan as a cost. Ask AI for feedback and it answers as a polite generalist, which rarely sounds like any of them.

Here you build a board: a small panel of AI personas, each one a perspective your work has to satisfy. You discover who belongs on it, give each member a real behavioural profile, then bring the board a live decision or deliverable and watch them argue. The board stays saved for every future brief, plan or update.

Built a board before? The mastery bar is members you would recognise in a meeting, a synthesis that names the perspective you are about to dismiss, and (in the side quest) members who form opinions independently.

## Who sits on your board

Step 1 helps you choose from these; mix freely.

| Composition | Who sits on it | Best when |
| --- | --- | --- |
| **Customer segments** | An 8-seat agency running client projects, a PMO lead at a 2,000-person enterprise, the IT admin who approves the rollout | Product work: feature briefs, launch notes, roadmap calls |
| **ICPs and buyer roles** | Each ideal customer profile you serve, plus the economic buyer and the day-to-day champion | Customer Facing and go-to-market: QBR plans, renewal strategy, campaign messages |
| **Real stakeholders** | Your manager, a peer function, finance, the exec sponsor | Anyone presenting upward: quarterly plans, board updates, budget asks |
| **Known external figures** | A well-known operator or thinker whose published views you want to argue with | Strategic calls that need a sharper outside lens |
| **Lens archetypes** | The numbers sceptic, the execution realist, the newcomer reading cold | Breadth, before you know who matters |

Three to five members is the useful range. If only two perspectives truly matter, your board has two.

**The devil's advocate is optional.** Add one when you want your conviction tested:

| Bad devil's advocate (nihilism) | Good devil's advocate (sharpening) |
| --- | --- |
| Tears everything down, offers nothing | Attacks the weakest assumption, names the scenario where the plan fails |
| Challenge for sport | Pushes harder when you defend weakly, concedes when you bring new information |
| Leaves you worse | Ends with "here is what I would actually do" |

Personas shape how your work is judged. Facts stay facts: anything a persona states as fact still gets verified.

## Before you start

- **Load Your AI Identity** if you have it (or run this in a project that knows your work). With thin context, the AI proposes a generic board.
- **Have one real decision or deliverable ready** for Step 3.
- **Gather evidence if you have it:** call notes, interview transcripts, survey verbatims, a monday feedback board, a stakeholder's written comments. Evidence makes sharper personas than memory. For internal customer data, Kremer is the sanctioned path.
- If you model real colleagues, keep profiles to work-relevant behaviour and keep them in your own project.

## Shape of the adventure

| Move | Job | Output |
| --- | --- | --- |
| **1. Discover** | Find who should review your work | An approved board roster |
| **2. Build** | Give each member a behavioural profile; write the board's rules | Board of Advisors instructions, installed |
| **3. Convene** | Bring real work, judge the board, give specific feedback, iterate once | A decision or deliverable that survived its critics, and board v2 |

Use a thinking or mid-to-strong model at high reasoning effort (in Claude, Opus at high effort).

## Core task

### Step 1: Discover your board

Open a new chat in your AI tool. Answer by voice if you can; messy, detailed answers make a sharper board.

### Prompt 1: Your board roster

**What this does:** interviews you about your work and the people it has to satisfy, then proposes a tailored board and waits while you edit it.

```
Help me discover who should sit on my Board of Advisors: a small panel of AI personas, each a perspective my work has to satisfy, that I convene to review decisions and deliverables before they go out.

Use what you already know about me from memory, instructions, projects and this chat. Ask only for gaps, one question at a time, six questions at most. If your context on me is thin, say so first. Cover: my role and the work I produce most; who receives, uses or judges that work, inside and outside the company; the decisions I make or influence most; whose reaction I currently guess at, and where a review has surprised me; the perspective I most often miss. If I answer vaguely, ask for a recent example.

Then propose three to five members, tailored to my role. Product people usually need their typical customer segments; go-to-market and customer-facing people need their ideal customer profiles (ICPs) and buyer roles; leaders need the perspectives that shape their decisions, which can include well-known external figures modelled on their public thinking. For each: a name, who they represent, and the one thing they would catch that I would miss. If my work only needs two perspectives, propose two.

Separately, offer a devil's advocate as an optional extra member and let me decide.

Stop and wait while I edit the list. Do not build the personas yet.
```

Edit freely: rename, merge, swap one for a real stakeholder.

### Step 2: Build the personas and install the board

Same chat. Paste your evidence when the AI reaches that member.

### Prompt 2: Your Board of Advisors instructions

**What this does:** gives each member a behavioural profile, then writes the board's complete standing instructions: how it convenes, how members argue, and how it synthesises.

```
Now build the board I approved. For each member in turn, ask me as a batch: what they care about most and how they measure success; how they react to a new idea (first question, tone, what wins them over); what they would never accept; their blind spot. If I paste real material for a member (call notes, transcripts, survey verbatims, written feedback), build the profile from it and mark which traits come from evidence and which from my description. For a known external figure, work only from their public record and say when you extrapolate.

Then write complete Board of Advisors instructions I can save as standing instructions:
1. Each member's profile, four to six lines.
2. Convening: when I say "board", each member responds in character in two or three sentences, from their own profile. Then one round where they challenge each other by name. Never make them agree for the sake of it. A member without enough information says what they would need.
3. Synthesis, in this order: where most members agree; the sharpest disagreement and what it hinges on; the perspective I am most likely to dismiss, and whether dismissing it is justified; the one question I should answer before deciding.
4. If I say "your call", give one recommendation that accounts for the strongest objection.
5. "Just" plus a member's name brings in that member alone.
6. If a devil's advocate is on the board: it attacks my weakest assumption, names the scenario where the plan fails, and ends with what it would actually do.
7. Flag any factual claim, number or market assumption I should verify before relying on it.

Show me the instructions and wait for my approval.
```

If a member sounds like a generic critic, say who they really are: "The agency owner has no admin and no patience. She stops reading at the word 'configure'."

**In Claude:** create a project called "Board of Advisors", paste the instructions into the project instructions, and add your evidence files to the project knowledge. Convene the board from a new chat inside the project. To call it from any chat, ask Claude to package the same instructions as a skill and add it in your skills settings, then close and reopen Claude so it picks up the new skill.

**Any AI tool:** save the instructions where your tool keeps standing instructions (a project or a skill), or paste them at the top of a fresh chat.

### Step 3: Convene the board on real work

Bring your real work: a feature brief, a QBR plan, a launch note, a quarterly plan, a board update.

### Prompt 3: Convene the board

**What this does:** collects the context the board needs, runs one full session, and stops at the synthesis so you judge before you decide.

```
Convene the board. Before anyone speaks, ask me three questions, one at a time: what the decision or deliverable is (I will paste or describe it), what I am leaning towards and how confident I am, and what a good outcome looks like for me. Then run the board exactly as your instructions describe, and stop after the synthesis.
```

**Judge the session:**

- Did each member sound like who they represent, or like a generic reviewer?
- Did anyone surface something you had not considered?
- Was the disagreement real, or did they converge politely?
- Is the perspective "most likely to be dismissed" one you were in fact about to dismiss?

**Give specific feedback.** "Not quite right" teaches nothing. Say exactly what was wrong: "The RevOps lead would ask about data accuracy before anything else." "They agreed too fast; I need the real split." "The customer sounds too polite; real customers are blunter."

### Prompt 4: Board v2

**What this does:** turns your feedback into a sharper set of instructions, ready to replace the old ones.

```
Below are my Board of Advisors instructions, followed by what felt wrong in the first session. Ask me up to three questions to sharpen the fix, then give me the complete updated instructions, ready to replace the old ones. Change only what my feedback calls for.
```

Replace the instructions, convene the board once more on the same work, then act: revise the deliverable or make the call. Record your decision and the strongest objection you overruled where the work lives, in the monday item or the doc.

> **Example: Noa, product manager, monday CRM**
> Noa's feature brief proposed AI lead scoring. She kept three suggested members and added the devil's advocate:
> - **Agency owner**, 12 seats, set up the CRM herself, abandons anything that needs configuring
> - **RevOps lead** at a 600-person company with Salesforce still in place, judges everything by pipeline accuracy
> - **Account manager** for mid-market renewals, hears every complaint first
>
> Agreement: scoring must work on day one with no setup. Sharpest split: the RevOps lead wanted every score editable; the agency owner wanted no settings at all. Most likely to be dismissed: the account manager's warning that one wrong score on a key account costs more trust than no score. Question before deciding: what does the score show when data is thin? Noa rebuilt the brief's scope around it.

**Done when** your board is saved, has reviewed a real piece of work, and has improved once from your feedback. **"My board is convened."**

## Layers

### Layer 1: A devil's advocate mode

A mode that attacks the board's own conclusion. Paste your current instructions after the prompt.

```
Add a Devil's Advocate mode to my Board of Advisors instructions, pasted below. It activates when I say "devil's advocate". Its job is to sharpen my thinking: attack the weakest assumption in my plan or in the board's synthesis, name the specific scenario in which it fails, and end with "Given all this, here is what I would actually do." If I defend weakly, it pushes harder; if I bring genuinely new information, it concedes. It always offers a path forward. First ask me how hard it should push (constructive, firm or relentless) and which topics matter most to challenge. Then give me the complete updated instructions.
```

### Layer 2: A stakeholder dynamics file

Members reason better when they know how your world actually decides.

```
Interview me to create a Stakeholder Dynamics file for my Board of Advisors. Ask as a batch: the five to seven people or groups who matter most to my decisions; for each, what they care about, how they decide and what triggers their resistance; where the alliances and tensions sit between them; how decisions really get made around me compared with how they are supposed to be made. Use only work-relevant behaviour. Produce a document under 500 words, bullets and tables, that I can add to the board's project knowledge.
```

### Layer 3: Three advisors, one question

Run one open question three ways: a plain chat with no board, then your board, then the devil's advocate attacking the board's synthesis. Push back on one point and see whether it holds or concedes. Which run gave you an insight you would not have reached alone? That tells you when to reach for the board.

## Side quest: Independent minds

In one chat, the same model writes every member, and later speakers read the earlier ones, so opinions drift together. Running each member as its own **sub-agent** lets every opinion form independently before a synthesis compares them.

**In Claude:** use Claude Code, which launches sub-agents; Cursor and Codex work the same way. If your Cowork offers sub-agents, it works there too. Give the tool your board instructions and the work, then paste:

```
Run my Board of Advisors with each member as its own sub-agent, so their opinions form independently. The board instructions and the work to review are below.
1. Launch one sub-agent per member. Give each only that member's profile, the work and my question: no other member's profile or answer, and nothing from this conversation.
2. Each sub-agent returns its verdict in two or three sentences, the single change it would demand, and its confidence.
3. Show me every answer word for word before any synthesis.
4. Then synthesise as the board instructions describe. Quote members where they disagree, and keep every split visible.
If you cannot launch separate sub-agents here, say so and stop.
```

Did independent members disagree more sharply than in Step 3?

| Pitfall | What happens | Fix |
| --- | --- | --- |
| **Echo** | The synthesis smooths real splits into consensus | Demand verbatim answers first, and quotes in the synthesis |
| **Shared context leaking** | A sub-agent sees the chat history or another member's answer, and starts agreeing | Each sub-agent gets its own profile, the work and the question, nothing else |
| **Five members, one voice** | Thin profiles produce near-identical answers | Return to Prompt 2 and deepen the profiles with evidence |

## Proof of work

Your board's members + one thing it caught that you would have missed + what you changed. For example: "Agency owner, RevOps lead, account manager, devil's advocate. They caught that scoring breaks on thin data; I rescoped the brief."

## Where to next

- **Making Decisions with AI:** if the board kept surfacing a perspective you tend to dismiss, turn that into personal rules for how AI should challenge you.
- **Stay Original with AI:** the board tested the substance; Stay Original makes sure the deliverable itself is sharp before it leaves your hands.
- **Hard Conversations:** when the board points to a conversation you need to have with a customer or colleague, rehearse it there.
