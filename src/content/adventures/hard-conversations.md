---
slug: hard-conversations
emoji: 💬
icon: chat
title: "Hard Conversations"
walkaway: "Your prep brief, your core message, a simulated conversation with coaching, and a plan for before and after"
category: Lead with AI
levels: [Foundations, Intermediate]
professions: [Everyone, Customer Facing, HR]
audience: [Managers]
tool: Any AI tool
effort: Quick win
outcome: Work differently
pattern: SPAR
wave: W1
slot: 12
next: [board-of-advisors, managing-with-ai]
video: /videos/hard-conversations.mp4
source: "New (SPAR pattern). Prep brief adapted from the monday Champions 2026 Conversation Prep challenge (monday-client/Champions/2026/Exercises/Challenge Brief/The Conversation Prep AI Context Spec Challenge.md: facts vs interpretations, behavior and impact over labels, calibrated confidence, when to involve HR); rehearsal rules adapted from the AppsFlyer Managers OS Difficult Conversation Rehearsal (appsflyer/Managers/exercises/build-menus.md: stay in character, chosen toughness, debrief only at the end). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 12 [Inbar 27])
- Kept: from the Champions challenge, the prep pack shape (facts separated from interpretations, assumptions labeled, risk check, when to involve HR, short opening script, options) and "replace labels with behavior and impact"; from the AppsFlyer rehearsal skill, the role-play rules (realistic pushback and emotion, chosen difficulty, stay in character, debrief only when the person ends it).
- Cut: the system-prompt / context-engineering framing, the two imaginary tools, the three scored scenarios, the skill-building wrapper (Quick win; a skill would push it past the budget).
- Added for Monday: one trail for everyone with Managers, Customer Facing and HR examples; monday boards, mail, Slack and Kremer as optional fact sources; a people-data line for managers; HR partner and manager as the explicit complement (design note); voice dictation so people rehearse out loud; after-the-conversation debrief that updates the board item.
- Title: "Prepare for a Hard Conversation" (direct, says what you do); the Inbar list says "Hard Conversations". Revert if the list title must match.

Open items
- Inbar comment c8 (11 Oct): monday talent has an internal AI Coach for managers and she wants to connect to it rather than create an additional one. Not referenced on the page; Nufar to decide with Inbar whether to point managers to it (and where) or reposition this adventure.
- Effort is still labeled Quick win (guide budget under 1,000 words); after the 6 Nov revision the page is well past that budget. Label decision is with Nufar.
- next: managing-with-ai slug is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt
Changed 2026-11-05: think-first opener per the 23 Oct rule.
Changed 2026-11-06: removed the one-counterpart assumption per videos/hard-conversations/notes.md, in prose and prompts. The AI simulates the actual conversation with whoever is in the room and asks who that is; it no longer "plays the other person". "Why this adventure" now names internal hard conversations and external critical meetings, and says the same chat helps afterwards, so the script's "after" stays true. The debrief stays in Go further (her open decision). HR lines and the Monday Talent AI Coach item untouched. Also: American spelling (behavior, practice) and "agreed on" in touched lines.
Changed 2026-11-06 (her notes on the page text, videos/hard-conversations/notes.md): folded in her six items. Sentiment and bias went into the Step 1 think-first, table and Prep brief; core personas and their needs replaced the "likely view" line (role and work needs only); what could go wrong went into the brief as scenarios; the simulation now runs varied scenes with coaching on how to answer each, shaped by the sentiment she named. New Step 4 holds stakeholder actions before and after, with an offer to draft materials and talking points (the person sends everything). The debrief moved from Go further into Step 4, which settles the earlier open decision and what the video promises about "after". Step 1 and Step 3 renamed to match the script. HR lines, the "For managers" line and the Monday Talent AI Coach item untouched. Cut for length: the dictation keyboard shortcuts, the "Your goal" table row (the goal stays in the think-first and the brief), the debrief's place in Go further.
-->

# 💬 Hard Conversations

**Walk into a difficult conversation or a critical meeting ready: clear on the setup, practiced on what could go wrong, with a plan for before and after.**

## Why this adventure

Internal hard conversations include feedback that is hard to give or a "no" to a senior stakeholder. External critical meetings include a customer pushing back on renewal terms, a negotiation, or a review with three stakeholders.

In this adventure, AI helps you get ready before, simulate the during and know what to do after. You understand the setup: the facts, your goal, how you feel, your possible bias, and the people in the room and what they need. You simulate the actual conversation, with feedback after each run. Then AI proposes what to do with your stakeholders before and after, and drafts the materials and talking points for you to use.

This complements your HR partner and your manager. They know the people, the history and the policies; this helps you arrive prepared.

## The trail

1. **Understand the setup**, so you know the facts, your own starting point and what the room needs.
2. **Shape your core message**, so you know the one point everyone must leave with.
3. **Simulate the conversation and get coached**, so the hardest moments are familiar before they happen.
4. **Plan what to do before and after**, so the right people are ready and the result holds.

## Before you start

Pick one real conversation or meeting you have coming up, with one person or several.

## Step 1: Understand the setup

**Think first for yourself, without AI.** What happened? What should be true after the conversation? What worries you? What are you assuming? Who will be in the conversation, and what does each of them need? How do you feel coming in: confident, nervous, prepared? Are you coming from a position of strength, curiosity or combativeness? Messy is fine.

| What to prepare | Why it matters |
| --- | --- |
| **Facts**, with dates and sources | Anyone in the conversation can check them, so the talk stays on solid ground. |
| **Behavior and its impact** | A label such as "difficult" or "not proactive" starts a defense. A described event starts a discussion. |
| **How you feel, and your possible bias** | Your mood shows in the room, and your assumptions decide what you notice. Naming both lets you check them. |
| **The core personas in the room** | A persona is a role and what it needs from this conversation, for example a finance lead who must justify the cost. |
| **Who else should be involved** | Possible misconduct, legal risk, health, or anything that could affect someone's employment goes to your HR partner first. A decision above your level goes to your manager. |

**For managers:** describe work behavior and its impact; leave out health, family and other personal details, and stay within Monday's norms on people data.

### Prompt: Prep brief

**What this does:** the AI interviews you about your thoughts, reads the sources you name, and writes a one-page brief that keeps facts and opinions apart.

Copy the prompt below into an AI tool, ideally where you will do the actual work. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me prepare for a hard conversation or critical meeting at work. Ask me to brain dump or paste all my thoughts on this before you start. Use what you know about me; ask only for gaps, one question at a time, six questions at most. Always ask who will be in the conversation, whether one person or several, and how I feel coming in: confident, nervous, prepared? Am I coming from a position of strength, curiosity or combativeness? If I give a vague answer, ask for a specific recent example.

If I name a monday board, an email or Slack thread, or account data, read it and list what you used.

Then write a one-page prep brief:
1. The situation in three lines
2. Facts, with dates and sources
3. How I feel coming in
4. My interpretations, labeled as opinions, and my possible bias: assumptions I may be making about the situation and the people in it, stated or not. Give each one what would confirm or change it. Describe behavior, with no labels on anyone
5. The core personas in the room: for each role, what they need coming into this conversation. Role and work needs only, no personality judgments or personal details
6. What could go wrong: three to five realistic scenarios, each with its early sign
7. Whether my HR partner (possible misconduct, legal risk, health, employment) or my manager (decisions above my level) should be involved first
8. My goal: what should be true afterwards

Mark anything without a source as UNVERIFIED. Stop and wait for my corrections.
```

**In Claude:** keep the monday, Gmail and Slack connectors on so it can read the items and threads you name. For account history, use Kremer.

## Step 2: Shape your core message

### Prompt: Message card

**What this does:** turns the brief you approved in Step 1 into one core message, three possible openings and replies to the hardest pushback.

Stay in the same chat and paste the prompt below.

```
Using the prep brief we agreed on in this chat, help me shape my message.

1. My core message in one sentence: the point everyone in the conversation must leave with.
2. Three different openings of two or three sentences each: one direct, one warm, one that starts with a question. Each names a specific event and its impact, with no labels about anyone.
3. The three hardest things anyone in the conversation could say, naming the role that would say each, with a short, honest reply that keeps to my goal.
4. What I can offer, and where I will hold firm.

Ask which opening I prefer and why. Then write a message card of half a page with my chosen opening, the core message, the three replies and my next step.
```

Read the openings out loud and choose the one that sounds like you.

## Step 3: Simulate the conversation and get coached

Speak your replies using dictation, so you practice the words you will actually say.

### Prompt: Conversation simulation with coaching

**What this does:** the AI simulates the actual conversation through different scenes and coaches you on how to answer each one.

Stay in the same chat and paste the prompt below.

```
Simulate this conversation with me, based on the prep brief and message card in this chat. First confirm who is in the room and ask me to choose the difficulty: easy, realistic or tough.

Run different scenes, one at a time, without warning me what is coming: a surprise question, people in the room disagreeing with each other (with one person, a sudden change of direction), and the worst moment from "What could go wrong" in the brief.

Rules:
- Have each person respond as they realistically would, including pushback, emotion and silence. With several people, name who is speaking and let them interrupt.
- Keep each reply short, as in real conversations.
- Stay in the scene until I write "end".

After each "end", coach me:
1. What landed, and where it escalated or drifted from my goal, quoting my words
2. How to answer this moment: two phrases to change, each with a better version
3. How my feelings from the brief showed. For example, if I came in combative, did it show? If nervous, did I concede too early?
4. Did I reach my goal: yes, partly or no, with one line of evidence

Then offer to rerun that scene or start the next one.
```

If the simulation is too gentle, say exactly what is unrealistic: "my customer would mention the outage in the first sentence", "their finance lead would cut in here".

Rerun the hardest scene on tough until you reach your goal. Then ask the AI to update the message card with the phrases you changed.

## Step 4: Plan what to do before and after

The result often depends on what happens around the meeting: who hears the news first, who needs a recap, who owns the next step.

### Prompt: Stakeholder action plan

**What this does:** proposes actions for before and after the conversation, then offers to prepare the materials and talking points for you to send or use yourself.

Stay in the same chat and paste the prompt below.

```
Using everything in this chat, propose the stakeholder actions that will get me the result in my goal, for example aligning with my manager, talking early to someone who may disagree, a pre-read, or a recap for people not in the room.

Make a table with two parts, "Before the conversation" and "After the conversation", at most three actions each: the action, who it involves (by role), why it matters for my goal, what it needs from me. If the brief says my HR partner or manager should be involved first, put that first.

Ask which actions I will take. Then offer to prepare the materials and talking points, keeping to work behavior and its impact. Everything is a draft for me to send or do myself; do not send, post or change anything.
```

### Prompt: Debrief after the conversation

**What this does:** compares what happened with your message card, updates your "after" actions and drafts your follow-up.

Do your "before" actions and have the conversation. Then go back to the same chat and paste the prompt below.

```
I just had the conversation we prepared in this chat. Ask me how it went and wait for my answer. Then compare it with my message card: what went as planned, what surprised me, what we agreed. Say whether the feelings and bias named in my prep brief showed. Update the "After the conversation" actions, then draft a short follow-up message that records the agreed next steps, for me to send myself.
```

For a customer conversation, add the agreed next steps to the account's item on your monday board.

## Go further

**Rehearse from another seat.** Do this when the reaction in the room is hard to predict. Write "Swap seats: you speak as me, using my message card; I speak as someone else in the conversation."

## Proof of work

In "what I built", name the kind of conversation (without names), the line that changed most in the simulation, one stakeholder action you chose, and one thing you learned about yourself.

For example: "Renewal pushback call after two incidents. My opening moved from the contract to the incidents. I first aligned with my manager on what I can offer. I learned that I concede too early when the room goes quiet."

## Related adventures

- **Build Your Board of Advisors**: test a high-stakes message on several perspectives.
- **Managing with AI**: for managers, build routines for 1:1s and feedback so fewer conversations become hard ones.
