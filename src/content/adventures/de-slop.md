---
slug: de-slop
emoji: 🧽
icon: sponge
title: "Stay Original with AI"
walkaway: "Original, creative work with AI: one real piece remade with your thinking in it, and your standards saved where your AI reads them"
category: Work smarter with AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Moderate
outcome: Work differently
pattern: SPOT + BUILD
wave: W1
slot: 5
next: [board-of-advisors, skills-when-how-and-how-well]
source: "Adapted from de-slop/lab-de-slop.md and the De-Slop Playbook (de-slop/article-draft.md, Oct 2026); Slop Audit verbatim from de-slop/slop-audit-prompt.md (collapsed, Go further only); skill item adapted from de-slop/skill/de-slop/. Never edit the de-slop/ originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

v2 rewrite (2026-10-22), after Nufar's review of v1 (~4,700 words, "so long and so much text")
- Structure from de-slop-v2-outline.md and the four decisions there: title "Stay Original with AI"; audit out of the core; standard model sentence; one-line prerequisite.
- Kept from v1: the six-question test (reworded for non-native readers, plain consequences, name test last), the spot drill, kickoff + directions (merged into one prompt, three directions), pre-send check, compare, taste prompt, team check, skill builder.
- Cut: HBR/Stanford, Glean and CHI statistics (Merriam-Webster definition only); "Shape of the adventure" table; Layers; the verification routine layer; the Your AI Identity link; Managers tag; the profession table (one sentence of Monday examples instead).
- Slop Audit moved to Go further, collapsed in a <details> block, canonical text verbatim. Its score stays in the person's chat.
- Proof of work tied to the trail: the remade piece, the change that mattered, one habit learned.

Open items
- Keren Q2 (how skills are added on Monday's Claude Enterprise) affects the Customize → Skills line in Go further.
- next: slugs board-of-advisors and skills-when-how-and-how-well are provisional until those files exist.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
- 23 Oct: do-this line on every prompt
-->

# 🧽 Stay Original with AI

**How to produce original, creative work when AI writes the first draft.**

## Why this adventure

Low-quality AI output has a name: slop. Merriam-Webster made "slop" its 2025 Word of the Year and defines it as "digital content of low quality that is produced usually in quantity by means of artificial intelligence".

At work, slop is output that is generic and unoriginal, often too long or uninteresting, sent with little real thought, so the reader has to do the thinking instead. It can be a document, an email, a deck, a message, a plan.

This adventure keeps the speed of AI and puts your own thinking back in charge.

## The trail

1. **Understand what slop is**, so you know what to look for.
2. **See it in real work**, because the test matters most on your own work.
3. **Remake one piece without it**, to practise the intentional way on real work.
4. **Make it a habit**, so your AI holds your standard on your busiest day.

## Before you start

Have one real piece of your own work: something you recently produced with AI, or are about to. Good choices: a customer follow-up, QBR summary, release notes or an incident write-up.

## Step 1: Understand what slop is

These six questions test how much thinking went into any AI-assisted output.

| Question | How can you tell? | What it means when the answer is no |
| --- | --- | --- |
| **1. Could the writer defend every sentence without reading it again?** | Confident, unverified claims | There is no clear owner of the work. |
| **2. Did the writer read all of it before sending?** | The same point made twice; a leftover "Great question!" | The reader pays the price instead of the writer. |
| **3. Is there something only this person or team could add?** A point of view, a customer story, a decision, real data. | Generic wording that would fit any company | Anyone with the same prompt could have produced it. |
| **4. Is this the shortest form that still does the job?** | Five paragraphs where three sentences would do | The reader has to find the core content. |
| **5. Was it worth the reader's time?** Did it give more value than the reading cost? | The reader finishes and still asks "What do you need from me?" | The writer saved time and the reader lost more. |
| **6. Would the writer proudly put their name on it?** | You would hesitate to sign it | It needs more work before anyone sees it. |

## Step 2: See it in real work

### Prompt: Tell slop from intentional work

**What this does:** the AI writes two versions of a piece you produce often, you spot the slop, and it grades a recent piece of yours.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me recognise slop: low-quality AI content where the writer skipped the thinking.

Use what you know about me. Ask only for what is missing: my job and the piece I produce most often.

Write two short versions of that piece, A and B in random order: one slop (long, smooth, generic), one intentional (short, specific, clear view, clear next step). Ask me which is which, and wait.

Reveal, then grade both in a table: question, yes or no, the line that shows it.
1. Could the writer defend every sentence?
2. Did the writer read all of it?
3. Does it hold something only this person could add?
4. Is it the shortest form that works?
5. Was it worth the reader's time?
6. Would the writer proudly sign it?

Finally, ask for a recent piece of mine and grade it the same way, without rewriting it.
```

Save the AI's assessment of your piece for Step 3.

## Step 3: Remake one piece without it

Choose a real piece of work that needs creativity, judgment or originality. It can be something you are about to produce, or the piece you checked in Step 2.

**Think first for yourself, without AI.** Ask yourself:

- How would I go about this piece?
- What original ideas do I have?
- What does good look like?
- What am I sure about?
- What alternatives am I weighing?

Messy is fine: this is the thinking that slop skips.

### Prompt: Turn your thinking into a brief and directions

**What this does:** the AI interviews you about your thoughts, then writes a brief and agrees a direction before drafting.

Copy the prompt below into an AI tool, ideally where you will do the actual work. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me do one piece of work the intentional way: my own thinking first, then a direction, then a draft. Before you start, ask me to brain dump or paste all my thoughts on this piece. Then ask one question at a time about anything missing.

1. What is this piece, and what should it achieve?
2. What is my view, and how confident am I (as a percentage)? If I am under 70% sure, argue the strongest alternative first.
3. Who is the reader, and what should they feel and do afterwards?
4. What does good look like: length, tone, format, things to avoid?

Write a short brief from my answers. Stop and wait for my approval.

If my thoughts show a clear direction, work with it, and suggest one alternative only if you think it is clearly stronger. If I am undecided, give me two or three genuinely different directions, each with a title and the core idea in two sentences. Draft only after I choose.
```

When a draft misses, say exactly what is wrong: "too formal for this customer", "the request is hidden in paragraph three".

### Prompt: Check before you send

**What this does:** checks your draft on the six questions and lists what to fix.

Stay in the same chat and paste the prompt below.

```
Check this draft before I send it. Answer each question yes or no, with one line of evidence.
1. Could I defend every sentence? List claims to verify.
2. Does it read as if someone read it all? Point out repeats and leftover AI phrases.
3. Does it hold something only I or my team could add? Quote the generic sentences.
4. Is it the shortest form that works?
5. Is it worth the reader's time?
6. Would I proudly put my name on it? If no, name the one change that would get it there.
Show the problems only. Rewrite only if I ask.
```

### Prompt: Compare

**What this does:** compares the two versions and names the change that mattered most.

Stay in the same chat and paste the prompt below.

```
I will paste an earlier assessment of my original piece, then my remake. Grade the remake on the same six questions (defend every sentence, read it all, something only I could add, shortest form, worth the reader's time, proud to sign it). Show both side by side in one table, then name the change that mattered most.
```

You are done when the remake passes the name test.

## Step 4: Make it a habit

### Prompt: Your standards

**What this does:** learns your taste from real examples and writes one page of standards.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Learn my taste. I will share examples in batches: work I am proud of (mine or by others) and work I dislike. Wait until I say I have finished.

Then:
1. Describe what my good examples share: voice, structure, length, openings and closings.
2. Describe what my disliked examples share.
3. Ask me three to five questions about anything unclear, one at a time.
4. Write my standards: one page of concrete rules, each with a short example, in these sections: Voice, Structure, Length, Things I always avoid, What makes my work mine.

Write the rules so any AI can follow them.
```

Save the page where your AI reads it in every chat, and test it on a short piece.

**In Claude:** paste it into Settings → Instructions for Claude, or into a project's instructions.

## Go further

**Take the full Slop Audit.** Do this to find which AI habits most need work: 12 questions, a private score and your two biggest fixes. Paste the prompt in the same chat and answer its questions in writing, or by voice if your tool has dictation.

<details>
<summary>The full Slop Audit prompt</summary>

```
You are running a Slop Audit: an honest, friendly interview about my AI working habits. The goal is to find out where my AI use has drifted from intention and quality toward speed and "good enough," give me a score, and help me fix the two habits that matter most.

DEFINITIONS YOU NEED
- Slop: work where the person who should have done the thinking skipped it, partially or altogether, and the cost landed on whoever receives it. It costs the reader time, and it usually fails at its purpose too. Typical signs: long outputs nobody reviewed, generic copy that sounds like every other AI output, no original point of view, the reader has to do the distilling. Slop can be human-made too; AI just makes it cheap at volume.
- The 12 intentional habits, in five stages:
  BEFORE YOU OPEN THE CHAT
  1. Think before you prompt: arrive with your own thoughts, opinions and objectives, however messy (a walk, reading the research, a voice brain dump).
  2. Bring your view and your confidence level: say what you think, how sure you are, and how much pushback you want, so the AI does not simply agree with you.
  3. Define good before you start: the audience, the feeling and action you want from them, and your own quality standards.
  WHILE THE WORK HAPPENS
  4. Go wide, then squint: ask for several genuinely different directions and look at all of them before committing.
  5. Build interception points: never hand over a task end to end; step in at the plan, the skeleton, the narrative; decide which humans review and at which stage.
  6. Convene a board: stress-test important work from several angles (AI personas, a devil's advocate, real people).
  BEFORE IT LEAVES YOUR HANDS
  7. Respect the read budget: never send something you have not read in full, or that is too long for you to want to read. Apply the name test: would you proudly put your name on it, in capital letters?
  8. Choose the format on purpose: short text, a page, a deck, a visual. Pick what the audience will actually read.
  OVER TIME
  9. Teach AI your taste: your voice, preferences and visual language are captured from real examples (in a skill, project, custom instructions or profile).
  10. Break your own mold: periodically, and whenever the audience or scope changes, rethink the approach from your own fresh inspirations instead of rerunning the same template.
  OUT LOUD
  11. Name slop when you receive it: tell the sender, kindly and clearly. Leaders make "no slop on anyone's desk" a team standard.
  12. Hold the gate: work that goes out under your name or your team's name, especially to customers, does not leave as slop, even when that takes longer.

HOW TO RUN THE INTERVIEW
- Start by asking me what I do and what kinds of work I most often produce with AI. Use that to make every later question concrete for my job.
- Then cover the 12 habits, one question at a time, in order. Wait for my answer before moving on.
- Anchor each question in a real, recent example ("think about the last thing you sent to a colleague with AI's help...") rather than asking how I generally behave. People flatter themselves about habits; examples are harder to fudge.
- If my answer is vague, or sounds too good, ask one follow-up for the specific example. Be warm and direct; never preachy.
- If you can see my past conversations, memory, or files, offer once at the start to check my answers against what I actually did, and use that evidence where it disagrees with me. If you cannot, skip this.
- Score each habit 0 to 3 as you go, without showing me the scores until the end:
  0 = I reliably do the intentional thing
  1 = I mostly do it, with lapses
  2 = I do it sometimes, usually when the stakes feel high
  3 = I rarely or never do it
- Habit 12: if I do not manage anyone, ask about work that goes out under my own name.
- During habit 11, also ask how often I run things colleagues send me through AI just to get through them. Do not score this; report it at the end as a team signal (it shows how much slop I am receiving).

THE REPORT (after all 12)
1. My Slop Score: total points divided by 36, times 100, rounded. Show the band:
   0-20 Craftsperson: AI amplifies your judgment
   21-45 Intentional, with leaks: strong habits, a few gaps worth closing
   46-70 Drifting: speed is winning more often than quality
   71-100 Slop factory: the tool is setting your standard
2. A table with the five stages, the score for each stage, and one sentence of evidence from my own answers.
3. The team signal from habit 11, in one or two sentences.
4. My two highest-leverage fixes: the habits where a change would most improve what I produce, given my job (not simply the two worst scores). For each: what to do differently starting with my next task, described as a concrete moment in my week, and what "done" looks like after a month.
5. One standing instruction, under 80 words, written in first person, that I can paste into my AI's custom instructions or a skill to support those two fixes.
6. Keep the whole report short enough that I would happily read it. No padding.

Then ask whether I want to set a reminder to retake the audit in 30 days and compare scores.
```

</details>

**Build a check your team shares.** Do this for a piece your team produces again and again, such as the weekly team update.

**What this does:** writes a team definition of good and a shared check.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me create a quality check for one piece of work my team produces often. Interview me one question at a time: what the piece is and who reads it, what our best examples share, what makes a weak one weak, and what only our team can add (data, customer context, decisions).

Then write:
1. A one-page team definition of good, with a short strong and a short weak example.
2. Instructions for a shared check that reviews any draft against that definition and returns Ready, Ready after cuts, or Needs another pass, with the main reason. The check comments on the draft only, never on its writer.
```

Pin the definition of good on your team's monday board. **In Claude:** put the check into a shared team project.

**Make the habit automatic with a skill.** Do this to keep the intentional way on busy days too.

**What this does:** asks when the skill should run, then writes it for your approval.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me build a skill for high-quality work. The skill should:
- On substantial work, first ask about my view, the reader and what good looks like, then offer three directions before drafting.
- Before handing over a draft, check six questions: Could I defend every sentence? Did I read it all? Does it hold something only I could add? Is it the shortest form? Is it worth the reader's time? Would I proudly sign it?

Interview me one question at a time: which work it runs on, which quick tasks it skips, the phrases I use. Then write the complete skill: name, a description of when to use it, steps, three test requests. Wait for my approval.
```

Add the skill, close and reopen your AI tool, and try the three test requests. **In Claude:** add it under Customize → Skills.

## Proof of work

In "what I built", name the piece you remade, the change that mattered most, and one thing you learned about your habits.

For example: "Remade my QBR summary: two pages became eight lines that open with the renewal risk. I learned that I put the request at the end."

## Related adventures

- **Build Your Board of Advisors**: test important work from several angles.
- **Skills: When, How and How Well**: build and test skills like the one in Go further.
