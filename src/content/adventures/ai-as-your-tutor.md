---
slug: ai-as-your-tutor
emoji: 📚
icon: book
title: "AI as Your Tutor"
walkaway: "One personal AI tutor you reopen for any professional topic, one full lesson on a topic you chose, and a review plan with dates for that topic"
category: Work smarter with AI
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
video: /videos/ai-as-your-tutor.mp4
outcome: Build something
pattern: INT
wave: W4
slot: 10
next: [your-ai-identity, the-daily-dispatch]
review: ready
source: "Adapted from summer-challenge/labs/summer-school.md (learning contract interview, standing tutor instructions, retrieval-heavy lesson, spaced review plan, progress file) and Nufar's article 'AI Can Be Your Best Tutor, or Your Worst' (nufar-website/drafts/ai-best-or-worst-tutor.md: the PNAS 2025 result, the learning principles, tutor personality as a setting, grounding rules, the tutor-rewrites-itself feedback round, day 2/4/8 rhythm). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Changed 2026-11-05, from Nufar's review
- General tutor from the start: built once, reopened for any professional topic. Every lesson opens with "What do you want to learn today?"; the person names a topic or uploads files. Payoff stated in the opening.
- Removed everywhere: the "I can" sentence, its profession table, the write-on-paper exercise. Step 1 is now how the tutor teaches; the topic lives only in Before you start.
- Principles table moved to Step 1, ahead of the interview. The interview asks only for the person's choices (analogies, formats, personality); the principles reach the tutor through the rules in the Step 2 prompt, so the prompts stay self-contained without repeating the table.
- Step 2 setup is tool-neutral (project or agent instructions; CLAUDE.md or AGENTS.md in a folder). The Claude and Cowork blocks are gone.
- Lesson rules moved into the standing instructions, so Step 3 is one line in a new chat. The tutor may not choose the topic or decide what good means (learning of 23 Oct).
- Monday source rule moved to Step 3, where sources are first brought. Customer-data wording unchanged.
- Step 4 keeps the self-rewrite and the review plan; the plan belongs to the topic's progress note and the instructions stay general.
- Go further: learning cards and quizzes, Claude learning artifact, turning an output into a skill, oral exam.
- Effort raised to Moderate on Nufar's call; monday agents and Gemini Notebook named.

Judgment calls
- Kept the Learning Contract as the interview's output. It is Nufar's term from the article and Summer School, and it gives the Step 2 prompt something real to work from.
- "Desirable difficulty" is gone as a term so the page matches the five table rows; difficulty survives as the "too easy" and "too hard" question.
- The tutor asks what the person needs the topic for and what a good result looks like. This is the shape-of-the-work rule, in plain words, without the "I can" sentence.
- Cut to reach the length target: morning-questions item, "the gap is your syllabus" line, "an agreeable tutor lets you pass" line, how careful the tutor must be per topic, the done line in Step 4. Any of these can return if Nufar misses it.
- Added review dates to the progress-note rule, so later lessons keep the Spacing row true without the Step 4 prompt.

Open items
- Voice: the oral exam relies on dictation; confirm voice options in Monday's Claude apps.
- CLAUDE.md for Claude and AGENTS.md for Claude Code or Cursor is Nufar's wording.
- Hands-on check that a monday agent works as a tutor home, including uploaded files and the per-topic progress note.
- Prompt test in a fresh Claude chat: pending (playbook step 4). Test that the one-line start works in a project and in a folder, and that the progress note saves per topic.
-->

# 📚 AI as Your Tutor

**Build one AI tutor that teaches you the way you learn best, and reopen it for any professional topic.**

## Why this adventure

AI explains almost anything clearly. A clear explanation gives you the feeling that you understand, and that feeling fades within days. Learning lasts when you answer from memory before you see the answer, and when you come back to it a few days later.

In one study, students who practised maths with a general chatbot scored 17% lower on the final exam than students without AI. Students who used the same model, set up to give hints and hold back answers, scored as well as students without AI (Bastani et al., PNAS, 2025).

In this adventure you build that second kind of tutor once, and you use it for any topic. Every new lesson begins with the tutor asking "What do you want to learn today?" You answer by naming a topic or uploading relevant files.

## The trail

1. **Decide how your tutor teaches**, using what makes learning last.
2. **Set up your tutor** in a place you reopen for every topic.
3. **Take a lesson** on a topic you chose.
4. **Make it stick**, with your feedback and review dates.

## Before you start

Choose a topic you have been meaning to learn. For example:

- getting ready for an important deck or presentation
- going deep on a specific product or market sector
- learning to use AI in a different way

If you are not sure which topic to pick, choose an AI topic you have been meaning to go deeper on, for example agents or automations.

## Step 1: Decide how your tutor teaches

Your tutor is built on five principles that make learning last.

| Principle | Why does it work? | What does your tutor do? |
| --- | --- | --- |
| **Recall** | Answering from memory strengthens it more than rereading. | Asks before it explains. |
| **Spacing** | Returning after a few days beats one long session. | Plans review dates. |
| **Analogies** | New ideas stick when they connect to what you know. | Teaches through your fields. |
| **Formats** | A format you will open beats a better one you avoid. | Uses the formats you chose. |
| **Grounding** | AI tools sound sure even when they guess. | Names its sources and says when it is unsure. |

### Prompt: Your learning contract

**What this does:** the AI interviews you about how you learn and writes a one-page Learning Contract.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me design one AI tutor that I will reopen for any professional topic, so that I remember what I learn.

Use what you know about me. Ask one question at a time about what is missing:
1. Fields I know well enough to use as analogies.
2. The tutor personality that motivates me, for example strict examiner, warm encourager or demanding coach, and what to avoid.
3. Formats I would open, for example written drills, flashcards or spoken questions.
4. Lesson length, and how often I will return.
5. What "too easy" and "too hard" mean for me.

Then write my answers as a one-page Learning Contract and wait for my approval.
```

## Step 2: Set up your tutor

### Prompt: Standing instructions for your tutor

**What this does:** turns your Learning Contract into standing instructions: the rules your tutor follows in every lesson.

Stay in the same chat and paste the prompt below.

```
Turn my approved Learning Contract into standing instructions for one general tutor I reopen for any topic. Address the tutor ("You are my tutor...") and keep my contract's choices. They must say:

1. Open every new lesson by asking "What do you want to learn today?" I name a topic or upload files.
2. Do not choose the topic, narrow it, or decide what good means. Ask me, one question at a time, what I need it for and what a good result looks like. Then ask for any missing sources.
3. Ask three to five cold questions about what I already know. I answer first.
4. Teach in short chunks, each followed by one question I answer from memory.
5. Coach me while I apply the lesson to my real work. If I have none, give me a small realistic practice task.
6. Give a short scored exam and reteach only what I missed.
7. Give one study aid in a format I chose.
8. End with a separate progress note for this topic: coverage, scores, weak spots, next steps, review dates. Save it as a file, or give it to me to save. When I return to a topic, start from its note.
9. Teach from my sources first, name any other source, and say "I am not sure" when you are unsure.

Show them as one block and wait for my approval.
```

Take the instructions you got and paste them as project instructions or agent instructions. If your tutor lives in a folder, save them there as CLAUDE.md if you use Claude, or as AGENTS.md if you use Claude Code or Cursor.

Your tutor can live in any AI tool that holds standing instructions, for example a Claude project, a monday agent or another agent you already use.

## Step 3: Take a lesson

### Prompt: Start a lesson

**What this does:** your tutor asks "What do you want to learn today?" and runs the whole lesson from its instructions.

Open a new chat inside your tutor (the project, agent or folder that holds its instructions) and paste the line below.

```
Start a lesson.
```

Answer with the topic you chose. For example: "Net revenue retention, for a QBR summary. Here is our renewal playbook."

When your tutor asks for sources, good ones at Monday are your team's documents in Drive, internal playbooks, the relevant monday boards, and internal data through Kremer. Data that Monday's customers uploaded to their own monday boards stays out of Claude; Monday's own data about customers is fine.

Before you repeat a fact to others, check it against the source the tutor named.

## Step 4: Make it stick

### Prompt: Improve your tutor and plan reviews

**What this does:** rewrites the tutor's instructions from your feedback and plans review dates for today's topic.

Stay in the lesson chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Improve your standing instructions from today's lesson.

Ask me one question at a time about difficulty, your personality (where you let me pass too easily), formats, sources and pacing. When my answer is general, for example "it was fine", ask for a specific example.

Show each change as before and after, with a one-line reason. Keep the instructions general, for any topic. After my approval, give me the revised instructions as one block.

Then add a review plan to this topic's progress note: dates (for example day 2, day 4 and day 8) and the questions to reuse.
```

Replace your tutor's instructions with the revised block, and put the review dates in your calendar. On each date, open a new chat inside your tutor and ask it to test you on that topic from memory.

## Go further

**Get learning cards or a quiz.** To keep practising outside the lesson chat, ask your tutor for learning cards, a quiz or other creative outputs of the lesson.

**Build a learning artifact.** If you use Claude, ask your tutor to build a learning artifact for you. You get something you can reopen and click through.

**Get cards, quizzes or artifacts every time.** To skip asking after each lesson, ask your tutor to turn the request into a skill. Then close and reopen your tool.

**Learn from your own sources in Gemini Notebook (formerly NotebookLM).** Its answers come from the sources in your notebook. Its Studio tools make audio overviews, flashcards and quizzes from those sources.

**Take an oral exam.** Explaining out loud before you present a topic shows the gaps quickly.

**What this does:** the tutor hears your explanation, asks follow-up questions and grades it.

Open a new chat inside your tutor and paste the prompt below. Use dictation if your tool has it.

```
Give me an oral exam on a topic I name, using its progress note. I explain it out loud. Then ask three follow-up questions, grade my accuracy and clarity, and add the gaps to the note.
```

## Proof of work

In "what I built", name where your tutor lives, your lesson topic, and one thing the exam caught.

For example: "A tutor in a Claude project. Topic: net revenue retention. The exam showed I mixed up contraction and churn."

## Related adventures

- **Your AI Identity**: a tutor that knows your role teaches at your level from the start.
- **The Daily Dispatch**: a personal briefing on a topic you follow.
