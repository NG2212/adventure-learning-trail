---
slug: ai-as-your-tutor
emoji: 📚
icon: book
title: "AI as Your Tutor"
walkaway: "A personal tutor set up for a professional topic you need, one lesson applied to real work, a review plan, and the skill of setting up a tutor for any topic"
category: Work smarter with AI
levels: [Foundations, Intermediate]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Quick win
outcome: Build something
pattern: INT
wave: W4
slot: 10
next: [your-ai-identity, the-daily-dispatch]
source: "Adapted from summer-challenge/labs/summer-school.md (learning contract interview, standing tutor instructions, retrieval-heavy lesson, spaced review plan, progress file) and Nufar's article 'AI Can Be Your Best Tutor, or Your Worst' (nufar-website/drafts/ai-best-or-worst-tutor.md: the PNAS 2025 result, the learning principles, tutor personality as a setting, grounding rules, the tutor-rewrites-itself feedback round, day 2/4/8 rhythm). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 10 [Inbar 6])
- Kept: the Learning Contract interview (principles defined inside the prompt, level, analogies, tutor personality, formats, grounding, time), standing instructions in a home you reopen, the lesson cycle (cold questions first, short chunks with recall, hands-on, scored exam, one study aid), the progress note, the tutor-rewrites-itself round from the article, the day 2 / 4 / 8 review rhythm, "verify one claim per lesson".
- Cut: hobbies and tutoring for children or parents (design note: professional topics); Gemini Notebook as the recommended home and the Gem / GPT / Copilot install menu (Monday runs on Claude); the learning-styles caveat (folded into one table row); the Harvard physics study (one study in the hook is enough); the gamified streak app (Quick win budget; gamification risk from the kickoff learnings); a shared team tutor (budget).
- Added for Monday: the "I can" sentence tied to a real piece of Monday work, written without AI first; a Monday example table by profession; Drive, playbooks, monday boards and Kremer as the source pack, with the customer-board rule; Claude project and Cowork callouts; the hands-on task done on the real work.
- Judgment call: kept one research citation in the hook (PNAS 2025) because it is the reason the setup matters; De-Slop cut its statistics. Cut it if Nufar prefers a citation-free hook.

Open items
- Keren Q6: Cowork scheduled tasks enabled at Monday? The morning-questions item in Go further assumes yes.
- Voice: the oral exam says "dictation or voice mode"; confirm voice mode in Monday's Claude apps, otherwise keep dictation only.
- Unified Claude (chat + Cowork) on 10 Nov 2026 may change the "In Claude" / "In Claude Cowork" project wording.
- Effort is Quick win (guide budget under 1,000 words); this page is ~1,730 words including prompts, within the brief's 1,800 cap. If the budget is strict, cut Go further to the oral exam and merge the Step 2 table into the standing-instructions prompt.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 📚 AI as Your Tutor

**Set up an AI tutor that teaches you a professional topic the way you learn best, and use what you learn on real work.**

## Why this adventure

AI explains almost anything clearly. A clear explanation gives you the feeling that you understand, and that feeling fades within days. Learning lasts when you answer from memory before you see the answer, and when you come back to it a few days later.

The setup decides the result. In one study, students who practised maths with a general chatbot scored 17% lower on the final exam than students without AI. Students who used the same model, set up to give hints and hold back answers, scored as well as students without AI (Bastani et al., PNAS, 2025).

In this adventure you set up that second kind of tutor, for a topic you need at work.

## The trail

1. **Decide what you want to be able to do**, so the tutor knows what to teach and how to test you.
2. **Set up your tutor** in a place you reopen, so every lesson builds on the last one.
3. **Take one lesson on real work**, so the learning turns into work you use this week.
4. **Make it stick**, because learning lasts when the tutor improves and you return to it.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

Pick a professional topic you need for a real piece of work in the coming weeks.

## Step 1: Decide what you want to be able to do

**Think first, without AI.** Close the chat. Write three lines: the topic; one sentence that starts with "I can"; and the real piece of work where you will use it.

| Who | "I can" sentence | Real work to use it on |
| --- | --- | --- |
| Customer success | I can explain what drives an account's net revenue retention. | The next QBR summary |
| Engineering | I can lead a blameless post-incident review. | The next incident write-up |
| Finance | I can write the SQL query behind my forecast commentary. | This month's forecast commentary |
| Design | I can check a screen against WCAG accessibility rules. | The next design review |

### Prompt: Your learning contract

**What this does:** the AI interviews you about how you learn and writes a one-page Learning Contract that the tutor is built from.

```
Help me design a personal AI tutor for a professional topic, built so I remember and use what I learn. Apply these principles:
- Recall: I answer from memory before you explain.
- Spacing: we return to the material after a few days.
- Desirable difficulty: some effort is the point; match it to my level.
- Analogies: teach through fields I already understand.
- Grounding: teach from trusted sources, name them, and say when you are unsure.

I will paste or dictate my topic, my "I can" sentence and the real work where I will use it. Use what you already know about me; ask only for what is missing, one question at a time:
1. My honest level.
2. Fields I know well enough to learn through by analogy.
3. The tutor personality that motivates me: strict examiner, Socratic questioner, warm encourager, demanding coach, or a mix, and what to avoid.
4. Formats I would actually open: written drills, flashcards, a visual study sheet, spoken questions, hands-on practice.
5. Lesson length, and how often I can return over two weeks.
6. Sources to teach from, and how careful this topic requires you to be.

Then write a one-page Learning Contract, including what "too easy" and "too hard" look like. Stop and wait for my approval.
```

Choose the personality with care. A default AI tool is agreeable, and an agreeable tutor lets you pass too easily.

## Step 2: Set up your tutor

Your tutor follows standing instructions: rules it applies in every session. They turn learning science into behaviour.

| Principle | Why does it work? | What does your tutor do? |
| --- | --- | --- |
| **Recall** | Answering from memory strengthens it more than rereading. | Asks before it explains. |
| **Spacing** | Returning after a few days beats one long session. | Plans review dates. |
| **Analogies** | New ideas stick when they connect to what you know. | Teaches through your fields. |
| **Formats** | A format you will open beats a better one you avoid. | Uses the formats you chose. |
| **Grounding** | AI tools sound sure even when they guess. | Names its sources and says when it is unsure. |

Good sources at Monday: your team's documents in Drive, internal playbooks, the relevant monday boards, and internal data through Kremer. Data that Monday's customers uploaded to their own monday boards stays out of Claude; Monday's own data about customers, such as account history through Kremer, is fine.

### Prompt: Standing instructions for your tutor

**What this does:** turns your approved Learning Contract into the instructions your tutor follows every time.

```
Turn my approved Learning Contract into standing instructions for my tutor, written to the tutor ("You are my tutor for..."). Include:
1. Who I am, the topic, my "I can" sentence and the real work it serves.
2. Personality and feedback style.
3. Teaching rules: ask before you explain; teach in short chunks, each followed by one question I answer from memory; end each lesson with a short scored exam; give long explanations only when I ask.
4. Formats.
5. Grounding: teach from the attached sources first; for other facts, search trusted sources and name them; say "I am not sure" when you are unsure.
6. Progress note: at the end of each lesson, write what we covered, my scores, my weak spots and what comes next.

Suggest three to seven sources for me to attach. Show the instructions as one block and wait for my approval.
```

**In Claude:** create a project named after your tutor (for example "NRR tutor"), paste the standing instructions into the project instructions, and add your sources as project files. After each lesson, add the progress note to the project files.

**In Claude Cowork:** create a project for the tutor with the standing instructions and a folder of sources, and ask it to keep the progress note as a file in that folder.

## Step 3: Take one lesson on real work

Open a new chat inside the tutor's project, so it starts from the standing instructions.

### Prompt: One full lesson

**What this does:** runs one full lesson that tests you before it teaches, and ends with you doing the real work.

```
Run one complete lesson on the first part of my topic, following your standing instructions.
1. Start cold: ask me three to five questions about what I think I already know. I answer first.
2. Teach in short chunks with my analogies. After each chunk, ask one question I answer from memory. If I only ask for explanations, interrupt with a question.
3. Hands-on: ask me to paste or describe the real work from my Learning Contract, and help me apply the lesson to it. I do the work; you coach and point out gaps.
4. Exam: five questions, mixing recall and application. Score me and reteach only what I missed.
5. Give me one study aid in a format I chose: flashcards, a quiz or a one-page visual study sheet.
6. Write the progress note.
```

The gap between how sure you felt in the cold questions and your exam score is your real syllabus.

Before you use the lesson in front of others, pick one fact you will repeat to a colleague or a customer, and check it against the source the tutor named.

## Step 4: Make it stick

Feed your experience of today's lesson back into the tutor while it is fresh. Be specific: "the questions were too easy" or "you explained for too long before asking me anything" builds a better tutor than "it was fine".

### Prompt: Improve your tutor and plan reviews

**What this does:** collects your feedback, rewrites the tutor's standing instructions, and plans your review dates.

```
Improve your standing instructions based on today's lesson, then plan my reviews.

Ask me about five things, one at a time. When my answer is general, ask for an example.
1. Difficulty: what was too easy or too hard, and which question was unclear.
2. Personality: where your tone helped, and where you let me pass too easily.
3. Formats: which to repeat and which to drop.
4. Sources: whether any claim felt uncertain.
5. Pacing: chunk size, and how long you explained before asking me something.

Show every change as a before and after pair with a one-line reason. After my approval, give me the full revised instructions as one block.

Then write a review plan for two weeks: dates (for example day 2, day 4 and day 8), the questions to reuse on each date, and when the next lesson starts.
```

Paste the revised instructions into the tutor's project and put the review dates in your calendar. On each review date, answer from memory before you reread anything; the effort of remembering is what makes it last.

You are done when your tutor carries your feedback and the next review date is in your calendar.

## Go further

**Take an oral exam.** Do this before you present the topic to your team or a customer: explaining out loud shows quickly what you can explain and what you cannot yet. Use dictation or voice mode.

```
Give me an oral exam on what we have covered. I will explain the topic out loud as if I am presenting it to my team. Listen to my whole explanation, then ask three follow-up questions a sharp colleague would ask. Grade my accuracy, clarity and examples, and add the gaps to my progress note.
```

**Get three review questions every morning.** Do this when you want the review plan to run by itself. **In Claude Cowork:** in the tutor's project, ask Claude to send you three questions from your progress note every weekday morning, and check that the task appears under Scheduled.

## Proof of work

In "what I built", name your "I can" sentence, where your tutor lives, and one thing the cold questions or the exam caught.

For example: "NRR tutor in a Claude project with our renewal playbook as a source. The cold questions showed I mixed up contraction and churn; I fixed that section of my QBR summary during the lesson."

## Related adventures

- **Your AI Identity**: a tutor that knows your role and how you think teaches at your level from the start.
- **The Daily Dispatch**: a personal briefing on a topic you follow, to keep learning after the lessons end.
