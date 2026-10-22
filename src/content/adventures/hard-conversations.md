---
slug: hard-conversations
emoji: 💬
icon: chat
title: "Hard Conversations"
walkaway: "Your core message, a rehearsed conversation, and a coaching debrief to use before the real one"
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
source: "New (SPAR pattern). Prep brief adapted from the monday Champions 2026 Conversation Prep challenge (monday-client/Champions/2026/Exercises/Challenge Brief/The Conversation Prep AI Context Spec Challenge.md: facts vs interpretations, behaviour and impact over labels, calibrated confidence, when to involve HR); rehearsal rules adapted from the AppsFlyer Managers OS Difficult Conversation Rehearsal (appsflyer/Managers/exercises/build-menus.md: stay in character, chosen toughness, debrief only at the end). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 12 [Inbar 27])
- Kept: from the Champions challenge, the prep pack shape (facts separated from interpretations, assumptions labelled, risk check, when to involve HR, short opening script, options) and "replace labels with behaviour and impact"; from the AppsFlyer rehearsal skill, the role-play rules (realistic pushback and emotion, chosen difficulty, stay in character, debrief only when the person ends it).
- Cut: the system-prompt / context-engineering framing, the two imaginary tools, the three scored scenarios, the skill-building wrapper (Quick win; a skill would push it past the budget).
- Added for Monday: one trail for everyone with Managers, Customer Facing and HR examples; monday boards, mail, Slack and Kremer as optional fact sources; a people-data line for managers; HR partner and manager as the explicit complement (design note); voice dictation so people rehearse out loud; after-the-conversation debrief that updates the board item.
- Title: "Prepare for a Hard Conversation" (direct, says what you do); the Inbar list says "Hard Conversations". Revert if the list title must match.

Open items
- Inbar comment c8 (11 Oct): monday talent has an internal AI Coach for managers and she wants to connect to it rather than create an additional one. Not referenced on the page; Nufar to decide with Inbar whether to point managers to it (and where) or reposition this adventure.
- Effort is Quick win (guide budget under 1,000 words); this page is ~1,240 words including prompts (brief cap 1,800). Cut Go further to one item if the budget is strict.
- next: managing-with-ai slug is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 💬 Hard Conversations

**Walk into a difficult conversation with your facts straight, your message clear and the hardest moments already rehearsed.**

## Why this adventure

Some conversations matter more than others: feedback that is hard to give, a customer pushing back on renewal terms, a negotiation, a "no" to a senior stakeholder. Good preparation makes them calmer and more useful for both sides.

In this adventure you prepare properly: you separate facts from opinions, shape one clear message, and rehearse the conversation with the AI playing the other person, with coaching after each run.

This complements your HR partner and your manager. They know the people, the history and the policies; this helps you arrive prepared.

## The trail

1. **Get the facts straight**, because facts keep the conversation on solid ground.
2. **Shape your core message**, so you know the one point they must leave with.
3. **Rehearse and get coached**, so the hardest moment is familiar before it happens.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Pick one real conversation you have coming up.

## Step 1: Get the facts straight

**Think first, without AI.** Close the chat. Write down what happened, what you want to be true after the conversation, what worries you, and what you know about the other person. Messy is fine.

| What to prepare | Why it matters |
| --- | --- |
| **Facts**, with dates and sources | The other person can check them, so the talk stays on solid ground. |
| **Behaviour and its impact** | A label such as "difficult" or "not proactive" starts a defence. A described event starts a discussion. |
| **Your goal** | It tells you when the conversation has done its job. |
| **Who else should be involved** | Possible misconduct, legal risk, health, or anything that could affect someone's employment goes to your HR partner first. A decision above your level goes to your manager. |

**For managers:** describe work behaviour and its impact; leave out health, family and other personal details, and stay within Monday's norms on people data.

### Prompt: Prep brief

**What this does:** the AI asks about gaps in your notes, reads the sources you name, and writes a one-page brief that keeps facts and opinions apart.

```
Help me prepare for a hard conversation at work. I will paste or dictate my notes. Use what you know about me; ask only for what is missing, one question at a time, five questions at most. If I give a vague answer, ask for a specific recent example.

If I name a monday board, an email or Slack thread, or account data, read it and list what you used.

Then write a one-page prep brief:
1. The situation in three lines
2. Facts, with dates and sources
3. My interpretations, labelled as opinions, each with what would confirm or change it
4. The other person's likely view, in their words
5. Risks in the conversation
6. Whether my HR partner (possible misconduct, legal risk, health, employment) or my manager (decisions above my level) should be involved first
7. My goal: what should be true afterwards

Mark anything without a source as UNVERIFIED. Stop and wait for my corrections.
```

**In Claude:** keep the monday, Gmail and Slack connectors on so it can read the items and threads you name. For account history, use Kremer.

## Step 2: Shape your core message

### Prompt: Message card

**What this does:** turns the brief you approved in Step 1 into one core message, three possible openings and replies to the hardest pushback.

```
Using the prep brief we agreed in this chat, help me shape my message.

1. My core message in one sentence: the point the other person must leave with.
2. Three different openings of two or three sentences each: one direct, one warm, one that starts with a question. Each names a specific event and its impact, with no labels about the person.
3. The three hardest things the other person could say, each with a short, honest reply that keeps to my goal.
4. What I can offer, and where I will hold firm.

Ask which opening I prefer and why. Then write a message card of half a page with my chosen opening, the core message, the three replies and my next step.
```

Read the openings out loud. Choose the one that sounds like you.

## Step 3: Rehearse and get coached

Speak your replies, so you practise the words you will actually say: press Fn twice on a Mac, or Windows key + H on Windows, to dictate.

### Prompt: Rehearsal with coaching

**What this does:** the AI plays the other person, then steps out of the role and coaches you on what you said.

```
Rehearse this conversation with me. Play the other person, based on the prep brief and message card in this chat. Before we start, ask me to choose the difficulty: easy, realistic or tough.

Rules:
- Respond as this person realistically would, including pushback, emotion and silence.
- Keep each reply short, as people speak in real conversations.
- Stay in character until I write "end".

After "end", coach me:
1. What landed, quoting my words
2. Where it escalated or drifted from my goal, quoting my words
3. Two phrases to change, each with a better version
4. Did I reach my goal: yes, partly or no, with one line of evidence

Then offer to rerun the hardest moment.
```

If the AI plays the role too gently, say exactly what is unrealistic: "my customer would mention the outage in the first sentence", "he would go quiet here". Specific feedback gets a more useful rehearsal.

Rerun at least once on tough. Then ask the AI to update the message card with the two phrases you changed. You are ready when you reach your goal in a tough run.

## Go further

**Rehearse from the other side.** Do this when their reaction is hard to predict. Write "Swap roles: you play me using my message card; I play the other person." Hearing your own message from their seat shows you what lands and what stings.

**Debrief after the real conversation.** Do this to learn from what actually happened and to follow up the same day.

```
I just had the conversation we prepared in this chat. I will tell you how it went. Compare it with my message card: what went as planned, what surprised me, what we agreed. Then draft a short follow-up message that records the agreed next steps, for me to send myself.
```

For a customer conversation, add the agreed next steps to the account's item on your monday board.

## Proof of work

In "what I built", name the kind of conversation (without names), the line that changed most in rehearsal, and one thing you learned about yourself.

For example: "Renewal pushback call after two incidents. My opening moved from the contract to the incidents. I learned that I concede too early when the other person goes quiet."

## Related adventures

- **Build Your Board of Advisors**: test a high-stakes message on several perspectives before the conversation.
- **Managing with AI**: for managers, build routines for 1:1s and feedback so fewer conversations become hard ones.
