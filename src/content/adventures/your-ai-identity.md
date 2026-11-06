---
slug: your-ai-identity
emoji: 🪪
icon: id-card
title: "Your AI Identity"
walkaway: "Standing instructions and a voice profile, so your AI works the way you like"
category: Set up your AI
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 30 minutes
outcome: Build something
pattern: INT
wave: W1
slot: 2
next: [build-a-personal-brain-for-your-ai, your-own-chief-of-staff]
review: ready
video: /videos/your-ai-identity.mp4
source: "Adapted from summer-challenge/labs/pack-your-id.md (find the right home in the tool, interview, install, fresh-chat test) and catch-up-may/content/week-1/project-3-your-identity.md + project-3-reference-card.md (six layers, Personal Context Statement interview, Voice Profile, behavioral rules, before/after test, deeper context, keep it current). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 2 [Inbar 13])
- Kept: Catch-Up P3's six layers (names verbatim: identity and role, communication style, work context, knowledge and domain, boundaries, working preferences) as the Step 2 table and interview spine; the Voice Profile prompt; the behavioral rules folded into the standing-instructions prompt as default rules (direct disagreement, hold position, state confidence); the "new teammate on day one" test; the before/after test; Pack Your ID's "use what you know, ask only for gaps" and the fresh-chat check.
- Changed: the before/after test uses a baseline answer saved in Step 1 (same request before and after), which avoids incognito-mode questions on Monday's plan. Lengths cut for a Quick win: instructions under 400 words, voice profile under 150.
- Cut: glossary, "Understand the why" essay and links, Sarah Chen example, knowledge file inventory, working-style assessments (DISC, MBTI), 30-second capture habit, Falcon Advisor, Catch-Up week/worker references, per-tool tables.
- Added for Monday: monday boards and Kremer in the work-context area; customer data and people data in boundaries; samples without customer names or people details; the languages someone writes in (global company); a portable copy in Drive for Cowork projects and monday agents.
- Design note honoured: no reference to earlier Monday programs.

Open items
- Claude settings path: "Settings → Instructions for Claude" mirrors the De-Slop file; confirm the label on Monday's Claude Enterprise, and whether the field has a length limit (instructions + voice profile stay near 550 words).
- Keren Q7: is Claude memory enabled? Prompts say "memory, past chats or saved instructions" and work either way.
- next: build-a-personal-brain-for-your-ai is W2; the platform shows "coming soon".
- Length: ~1,440 words including prompts, within the factory cap of 1,800 and above the guide's Quick win target of 1,000. First cut if needed: the "Keep it current" item in Go further, then the six-area table.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
- 23 Oct: do-this line on every prompt

Changed 2026-11-05: chat and Cowork treated as one surface.
Changed 2026-11-06: "Why this adventure" and the subtitle reworked per videos/your-ai-identity/notes.md and the approved script. The page no longer argues from "you explain yourself in every chat", because memory already eases that; it argues from deliberately giving AI standing instructions, with her image of the colleague you work best with. Steps and prompts unchanged.
-->

# 🪪 Your AI Identity

**Teach your AI your preferences, your communication style and the things that annoy you, so it becomes a tool you enjoy working with.**

## Why this adventure

The colleague you work best with is the one who learned your preferences, your communication style and the things that annoy you. You can teach your AI tool to be that colleague.

Memory may pick up a few things along the way. Standing instructions are something you choose: a short text saved in your AI tool's settings, which the AI reads before every chat. A voice profile is a short description of how you write, so drafts sound like you. Together they turn the generic version of the tool into one you enjoy working with, and you stop repeating your working preferences.

Here the AI interviews you and writes both; you save them and test the difference on a real request. Already have instructions? The interview improves them.

## The trail

1. **See what your AI knows about you today**, so you have a baseline to compare against.
2. **Write your standing instructions**, so the AI knows your role, your work and how you like to work.
3. **Capture your voice**, so drafts sound like you.
4. **Save them and test the difference**, so every new chat starts with them.

## Before you start

Have two or three recent pieces of your own writing ready, for example a Slack message, a customer email or a board update.

## Step 1: See what your AI knows about you today

### Prompt: What my AI knows about me

**What this does:** shows what your AI already knows about you, and what it is only guessing.

Open a new chat in Claude (or the AI tool you use most) and paste the prompt below.

```
What do you know about me and my work? List it in short bullets. Mark each bullet as KNOWN (I told you, or it is in my settings or memory) or GUESSED.
```

Then, in the same chat, ask for something you produce often, in the words you would normally use: a follow-up after a renewal call, release notes, forecast commentary, or a weekly update from your team board. **Save the answer.** This is your baseline; you will compare against it in Step 4.

## Step 2: Write your standing instructions

Good standing instructions cover six areas. The prompt below asks about each one.

| Area | Why it matters |
| --- | --- |
| **Identity and role** | Advice fits your real scope |
| **Communication style** | Answers arrive in the shape you read best |
| **Work context** | Suggestions fit how your work really runs at monday.com |
| **Knowledge and domain** | The AI explains at the right depth |
| **Boundaries** | Your limits hold without reminders |
| **Working preferences** | The AI decides and disagrees the way you work |

### Prompt: My standing instructions

**What this does:** the AI interviews you on the six areas and writes your standing instructions for your approval.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Interview me to write my standing instructions: a short text my AI tool reads before every chat, so it knows who I am and how I work.

First, show me what you already know about me from memory, past chats or saved instructions. Ask only about the gaps. If I have current instructions, ask me to paste them and build on them.

Interview me one area at a time, two or three questions per area. I will often answer by voice. If I answer vaguely, ask for a recent example.
1. Identity and role: my job, my responsibilities, my team.
2. Communication style: length, format, tone, what annoys me in AI answers.
3. Work context: my work at monday.com, the monday boards and tools I use, internal data I reach through Kremer.
4. Knowledge and domain: where I am expert, what I am learning.
5. Boundaries: what you must ask me before doing; how to treat customer data and people data.
6. Working preferences: how I decide, and how you should disagree with me.

Write my standing instructions as bullets addressed to an AI, under 400 words. Include these rules unless I remove them: tell me directly when you think I am wrong; keep your position when I push back unless I give new information; say how sure you are when it matters.

Ask me what is wrong, missing or too long, and revise. Stop and wait for my approval.
```

Read the standing instructions the AI wrote. If a new teammate read only these on their first day, could they work well with you? When the answer is yes, approve them.

## Step 3: Capture your voice

Pick two or three pieces of your own writing that show how you really write. Before you paste them, remove customer names and details about colleagues.

### Prompt: My voice profile

**What this does:** studies your writing samples and describes your style so any AI can match it.

Stay in the same chat and paste the prompt below, then your samples when it asks.

```
Build a voice profile for me: a short description of how I write, so any AI tool can match my style. Ask me to paste two or three recent samples, and wait until I have.

Then describe my style in under 150 words:
1. Tone: how formal or casual
2. Structure: how I organize information
3. Vocabulary: words I use often and words I avoid
4. Sentences: short, long or mixed
5. Languages: which languages I write in, and when
6. What makes my writing recognizably mine

Ask me "Does this sound like you?" and revise until I approve.
```

## Step 4: Save them and test the difference

Paste your approved standing instructions and voice profile into the place your AI tool reads before every chat. Also save both in one Google Doc named "My AI Identity", so you can add them to a Claude project, a monday agent or any other AI tool.

**In Claude:** go to Settings → Instructions for Claude, paste both, and save.

### Prompt: Test my AI identity

**What this does:** checks that your AI uses your identity, and turns anything that feels wrong into a fix.

Open a **new** chat, so the AI starts from your saved settings, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Test my standing instructions and voice profile, one task at a time. Wait for my reaction after each.
1. In five lines, tell me who I am and how I like to work.
2. Ask me about a decision I made recently, then push back on it honestly.
3. Ask me for a short message I need to send this week, and draft it in my voice.

Then ask me which task felt wrong. Write the exact change to my standing instructions or voice profile that would fix it.
```

Put each fix into your settings and the Google Doc. Then repeat the baseline request from Step 1, in the same words, and compare the two answers. You are done when the new answer needs fewer edits and sounds like you.

## Go further

**Add a deeper layer.** Do this when you use AI for advice on decisions: it advises better when it knows your decision patterns and blind spots.

**What this does:** interviews you about how you decide and writes a short section for your standing instructions.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Add a short "Deeper context" section to my standing instructions. Interview me one question at a time: the best decision I made this year and what made it good; one decision I would make differently; feedback I hear again and again; what I tend to postpone. Write it in under 150 words, as bullets addressed to an AI. Show it to me for approval.
```

**Keep it current.** Do this when your role, team or priorities change, or every few months.

**What this does:** finds what is out of date and what you keep explaining again.

Open a new chat and paste the prompt below, then your standing instructions. Answer its questions in writing, or by voice if your tool has dictation.

```
I will paste my standing instructions. Ask me what changed in my role, team and priorities. If you can see our recent chats, list what I explained more than once. Show the revised instructions, under 400 words, with the changes marked.
```

## Proof of work

In "what I built", name where you saved your standing instructions and one thing your AI now gets right that it missed in the baseline answer you saved in Step 1.

For example: "Saved in Claude's instructions and a Google Doc. My renewal follow-up now opens with the next step, in my short style, and the AI pushed back on my discount idea."

## Related adventures

- **Build a Personal Brain for Your AI**: give your AI context about your team, projects and ways of working.
- **Your Own Chief of Staff**: an assistant that uses your identity to prepare your week.
