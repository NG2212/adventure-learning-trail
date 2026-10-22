---
slug: de-slop
icon: sponge
emoji: 🧽
title: "De-Slop Your Work"
walkaway: "A trained eye for slop, one important piece of work remade with intention, and your standards saved in your AI"
category: Work smarter with AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: [Managers]
tool: Any AI tool
effort: Moderate
outcome: Work differently
pattern: SPOT + AUD
wave: W1
next: [your-ai-identity, board-of-advisors, skills]
slot: 5
source: "Adapted from de-slop/lab-de-slop.md and the De-Slop Playbook (de-slop/article-draft.md, Oct 2026); Slop Audit verbatim from de-slop/slop-audit-prompt.md; skill layer from de-slop/skill/de-slop/. Never edit the de-slop/ originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-10, factory rewrite of the Oct 8 draft)
- Kept: definition of slop, the six-question slop test ending in the name test, the Slop Audit (verbatim), kickoff, directions, pre-send check, compare, taste prompt, team standard prompt.
- Cut: the De-Slop I / II split (one adventure), "download the skill" layer, the board layer (Board of Advisors owns it; linked in Where to next), the Stanford "less trustworthy" wording (article wording used: less creative, capable and reliable).
- Added for Monday: Step 1 spot drill on an AI-made sample for your profession + six-question test on your own recent piece; Monday artifact table; verification routine layer (Glean 2026 + CHI 2025, both already in the article) with monday boards and Kremer as sources of truth; skill layer rebuilt as build-or-upgrade with an interview builder prompt; manager side quest kept at artifact level.
- Design-notes row: layers = taste file, verification routine, De-Slop skill or upgraded skills with intervention points, manager team standard. Slop Score stays personal (stated in Step 2 and Proof of work).
- Ending line: the article's "Disciplined, high-quality work is your job security" was softened to the quality-mechanism line in the hook. After the July 2026 layoffs, "job security" reads as a threat. Nufar to confirm.

Open items
- Keren Q2 (how skills are added on Monday's Claude Enterprise) affects the Layer 3 "In Claude" line. Written for Customize → Skills with personal upload.
- next: slugs for Your AI Identity, Board of Advisors and Skills are provisional until those files exist.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🧽 De-Slop Your Work

**Spot slop in a second, hold your own work to a bar you're proud of, and teach your AI that bar so it holds even on your busiest day.**

## Why this adventure

AI made first drafts free. It also made it easy to send long, smooth, generic work that nobody really thought through, and that the reader then has to untangle. In 2025 research from BetterUp Labs and the Stanford Social Media Lab, published in Harvard Business Review, 40% of US desk workers said they had received this "workslop" in the past month. Each case took close to two hours to deal with, and about half of the recipients saw the sender as less creative, capable and reliable.

**Slop** is work where the person who should have done the thinking skipped it, partially or altogether, and the cost landed on whoever receives it. It costs the reader time, and it usually fails at its job too: the follow-up that doesn't move the deal, the update nobody finishes.

This adventure keeps all the speed and puts you back in charge of the thinking. You'll train your eye, score your own habits, remake one piece of real work the intentional way, and save your standards where your AI reads them. If you already hold a high bar, the layers are your mastery pass: a verification routine and a skill that applies your bar at the right moments without you asking. The bigger prize is using AI as a quality mechanism: the thing that helps you think more sharply, see more directions and produce work you could never have produced alone.

## The six-question slop test

Run any output, yours or a colleague's, through six questions. Six yeses: AI-assisted work at its best. Two or more noes: slop, whoever typed it.

| Question | The tell on the page | What a "no" tells you |
| --- | --- | --- |
| **1. Ownership.** Could the sender defend every sentence without rereading it? | Confident claims nobody checked; phrases the sender would never say out loud | Nobody on the sending side owns this piece |
| **2. Read-through.** Did the sender read all of it before it went out? | The same point made twice; a leftover "Great question!"; two sections that disagree | The reading cost moved to you |
| **3. Fingerprint.** Is there anything only this person or team could have contributed: a point of view, a customer story, a decision, real data? | No names, numbers or opinions; it would fit any company | It could have come from anyone with the same prompt |
| **4. Compression.** Is this the shortest or most effective form that still does the job? | Five paragraphs where three sentences would do; the ask arrives at the end | The distilling was left to the reader |
| **5. Reader cost.** Does it save the reader time? | The reader finishes and still asks "so what do you need from me?" | It made the sender faster and everyone else slower |
| **6. The name test.** Would the sender proudly put their name on it, in capital letters? | You'd hesitate to sign it | It needs another pass before it goes anywhere |

## Before you start

Have one piece of real work in mind: something you sent recently with AI's help, or something you're about to write, that carries your name to an audience you care about.

| If you work in | A good piece to remake |
| --- | --- |
| Customer Facing | A customer follow-up after a call, a QBR summary, a renewal email |
| Marketing | A launch announcement, a campaign brief, a landing page section |
| Product | Release notes, a launch note, a decision memo for leadership |
| Engineering | An incident write-up, a design doc, a PR description |
| Design | A design review summary, the rationale behind a design decision |
| HR | A policy announcement, a guide for managers, an internal comms piece |
| Finance | Forecast commentary, a budget request narrative |
| Managers, any function | A team update, a leadership or board-meeting update, feedback you need to give |

Load your AI Identity if you have one; the more your AI knows you, the sharper the audit and the remake.

## Shape of the adventure

| Move | Job | Output |
| --- | --- | --- |
| **1. Spot** | Catch the tells in a sample from your profession, then in your own recent work | A trained eye and your piece's slop test |
| **2. Audit** | An honest interview about your AI habits | Your Slop Score, two fixes, one standing instruction |
| **3. Remake** | Redo one real piece: kickoff, directions, pre-send check | The remade piece |
| **4. Compare** | Judge the original against the remake | What changed, and the change that mattered |

Use a strong model with high reasoning effort for the audit and the kickoff: you want a sharp, thorough interviewer.

## Core task

### Step 1: Spot the slop

Start with a sample, where it's safe to be critical, then turn the same eye on your own work. Open a new chat in any AI tool and paste the prompt.

### Prompt 1: A slop-spotting drill for your profession

**What this does:** the AI writes two versions of a piece you produce often, one slop and one intentional, and asks you to tell them apart before it shows the tells. Then it runs the same test on a piece of yours.

```
I want to train my eye for slop. Slop means: work where the person who should have done the thinking skipped it, partially or altogether, and the cost landed on whoever receives it.

Use what you already know about me. Ask only for gaps, one question at a time: what I do at work, and which piece of writing I produce most often.

Then write two short versions of that piece for a realistic situation in my job, labelled A and B in random order. One is slop: smooth, long, generic, no point of view, no real specifics, like a one-line request whose answer got forwarded unread. Make it plausible, the kind of thing sent every day. The other is intentional: short, specific, with a clear view, a decision or real-looking data, and an obvious next step for the reader. Do not say which is which. Stop and ask me which is slop and why. Wait for my answer.

Then reveal, and grade the slop version on the six-question slop test:
1. Ownership: could the sender defend every sentence without rereading?
2. Read-through: did the sender read all of it?
3. Fingerprint: is there anything only this person or team could have contributed (a point of view, a customer story, a decision, real data)?
4. Compression: is this the shortest or most effective form that still does the job?
5. Reader cost: does it save the reader time?
6. Name test: would the sender proudly put their name on it, in capital letters?

Output a table: question, yes or no, the exact line that gives it away. Then name any tells I missed.

Finally, ask me to paste a recent piece of my own work and run the same table on it, honestly. Two or more noes means slop, whoever typed it. Do not rewrite it.
```

Your own piece's table is the baseline for Step 4. Keep that chat open.

### Step 2: Take the Slop Audit

**Your Slop Score stays in your chat. It's a mirror for you, and it never reaches the platform.**

### Prompt 2: The Slop Audit

**What this does:** an interview across 12 intentional habits in five stages, anchored in your real recent work, that ends with a Slop Score from 0 to 100, a stage-by-stage breakdown, your two highest-leverage fixes and a standing instruction to support them. Answer by voice if you can; longer, messier answers give a sharper audit. The AI will tend to take your word for it; the prompt pushes it to ask for examples instead.

> **In Claude:** run it in a fresh chat with memory on, or inside the Project that holds your recent work, so the audit can check your answers against what you actually did.

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

Save the standing instruction; it goes into your taste file in Layer 1. Keep your two fixes in view: Step 3 is where you practise them.

### Step 3: Remake one piece the intentional way

Take the piece from Step 1. If you chose one you're about to write, first get it the way you usually would, and keep that as your original. Before you open your AI, step away from the screen and think: what you're really trying to achieve, what you believe, what worries you. Then open a new chat.

### Prompt 3: Kickoff interview and directions

**What this does:** the AI interviews you so the work starts from your thinking and a clear target, writes a one-page brief, waits for your approval, then gives you six genuinely different directions before anyone drafts a word.

```
Before we do any work on this piece, interview me so we start from my thinking and a clear target. Ask one question at a time and wait for my answer. I may answer by voice, messily; your job is to find the structure.

1. Ask me to brain-dump everything about this task: the goal, my current thinking, open questions and worries. Then reflect back the three or four ideas that are most clearly mine, and anything that sounds contradictory.
2. Ask for my current view, my confidence in it as a percentage, and how hard I want you to challenge it. If I'm under 70% sure, argue the strongest alternative before building on my view. Even if I'm sure, list the main counterarguments briefly.
3. Ask about the audience, the feeling and next action I want from them, and my non-negotiable standards (length, tone, format, things to avoid).
4. Ask where I want to step in before the work is finished (the directions, the outline, the first section) and which people should see it at each point.

Write a one-page brief: goal, my view and confidence, definition of good, checkpoints, reviewers. Stop and wait for my approval.

Once I approve, give me six genuinely different directions, differing in approach, angle or structure, including one unconventional and one deliberately simple. For each: a title, the core idea in two sentences, the audience it lands best with. Do not recommend one. After I react, help me combine the parts I like into one direction, then draft only up to my first checkpoint.
```

Work through your checkpoints. When the AI misses, say exactly what's wrong: "too formal for this customer", "the ask is buried in paragraph three", "this number isn't ours". "Make it better" teaches it nothing. When you have a draft you like, run the check below in the same chat.

### Prompt 4: The pre-send check

**What this does:** shows you the problems before anything leaves your hands, without rewriting the piece for you.

```
Before I send this, run a slop check against my own standards. Answer briefly:
1. Read budget: how long would this take to read carefully? Is that reasonable for this reader? If not, show me a version at half the length or less that keeps everything that matters.
2. Fingerprint: list what in this piece could only have come from me or my team (a unique point of view or idea, a decision, real data, a customer story). If the list is short, say so plainly.
3. Generic content: quote any sentences that could appear in anyone's document on this topic, and tell me which to cut or replace with something specific.
4. Format: is this the most effective format for this reader? If another format (a shorter message, a table, a one-page summary, a visual) would serve them better, say which and why.
5. Ownership: list any claims I should verify before I can stand behind them.
6. The name test: would you advise me to put my name on this, in capital letters, today? If not, name the single change that would get it there.
Do not rewrite the whole thing unless I ask. I want to see the problems first.
```

Fix what it found, read the whole thing yourself, and send it when it passes your name test.

### Step 4: Compare the two versions

### Prompt 5: Original against remake

**What this does:** scores the remake on the same six questions as your original, side by side, and names the change that mattered most, so you know which habit to keep. Paste it into your Step 1 chat, where the test and your original's table already live, followed by the remake. If you remade a different piece, paste its original first.

```
Here is my remake of the piece I pasted earlier. Run the same six-question slop test on it, with a yes or no and one line of evidence for each question, and show the original and the remake side by side in one table. Then, in three sentences: what changed between the versions, which change mattered most, and which habit produced it.
```

**You're done with the core when** you have your Slop Score, a remade piece that passed your name test, and the comparison. Say it out loud: "My remake passes the name test."

## Layers

Each layer stands alone. Pick the one that closes your biggest gap from the audit.

### Layer 1: Teach your AI your taste

A taste file lets every draft start closer to your standard. Gather three to five pieces of your own best work, a few by others that you admire, and a few you dislike (generic AI copy you've received counts).

```
I want you to learn my taste so you can help me produce work I am proud of. You will write my taste file: a one-page set of concrete rules, each with a short example, that any AI can follow to write and judge work the way I would. Its sections: Voice, Structure, Length (default per format and per audience), Visual language, Hard noes, Signature moves (what makes my work recognisably mine), and Mold log (the formats I keep reusing for recurring work).

I will share examples in batches: my own best work, work by others I admire, and work I dislike. Wait until I say I have finished. Then:
1. Describe what my good examples share: voice, structure, length, rhythm, vocabulary, visual choices, openings and closings.
2. Describe what my disliked examples share and what exactly I seem to react against.
3. Ask me three to five questions about anything ambiguous or contradictory, one at a time.
4. Ask me to paste my standing instruction from my Slop Audit, if I have one, and fold it in.
5. Write the taste file. Under one page.
Then ask whether I want it worded for my profile instructions, a project, or a skill.
```

Save it where your AI reads it every time, then open a fresh chat and ask for a short piece you write often. If it still sounds like everyone else, tell the AI which rule it ignored and tighten that rule.

> **In Claude:** paste it into Settings → Instructions for Claude to apply it to every chat, or add it to the Project you use for this kind of work.

### Layer 2: A verification routine before you send

Trust is where checking quietly stops. Glean's Work AI Index 2026 found that 69% of AI users admitted to shipping AI-assisted work they hadn't verified, didn't fully understand or couldn't defend. A Carnegie Mellon and Microsoft Research study (CHI 2025) found that the more people trusted the AI, the less critical thinking they applied to its output. A routine keeps the check from depending on how tired you are.

```
Help me build a personal verification routine: a short checklist I run on AI-assisted work before it leaves my hands, built around the mistakes that would actually hurt in my job.

Use what you know about me. Interview me one question at a time:
1. What I send most often and to whom.
2. The last time something wrong went out, from me or a colleague, and what it was (a number, a commitment, a name, a date, a claim about what shipped).
3. My sources of truth for each kind of fact: for example a monday board, our CRM, a dashboard, the release log, a policy page.
4. What an AI is most likely to invent or smooth over in my kind of work.

Then write my verification routine: five to eight checks, each naming what to check, where the truth lives, and what to do when it can't be confirmed.

Finally, run it on a draft I paste. List every checkable claim in a table: claim, type, source of truth, status (verified against a source I gave you / unverified / cannot verify here). Never mark a claim verified without naming the source. Stop and wait for me to confirm the unverified ones.
```

Where your facts live in internal systems, reach them through Monday's sanctioned data path (Kremer) and your monday boards, then add the routine to your taste file so it travels with you.

### Layer 3: Build a De-Slop skill, or upgrade the skills you have

Habits fade on busy days; a skill fires at the right moment without being asked. Build a new De-Slop skill, or upgrade a skill you already use so your quality bar is built into it at the points where you'd want to step in.

```
Help me build a skill that applies my quality bar at the right moments. Slop, for this skill: work where the person who should have done the thinking skipped it, partially or altogether, and the cost landed on whoever receives it.

First ask which I want:
A) A new De-Slop skill that offers a short kickoff interview on substantial work (my view, my confidence, the definition of good, my checkpoints), gives several directions before drafting, and runs a pre-send check (read budget, fingerprint, generic lines, format, claims to verify, name test) ending in a verdict of Ready, Ready after cuts, or Needs another pass.
B) An upgrade to an existing skill I'll paste. Add intervention points: where it should stop and wait for me (the plan, the outline, the first section), when to read my taste file, and a pre-send check before it hands over the result.

Then interview me one question at a time: the work this should fire on and the quick tasks where it must stay silent; the exact phrases I'd use; where I want to step in; my taste file and verification routine, if I have them; the last time AI output let me down.

Produce the complete skill: a name, a description written as a trigger (what it does and when to use it), concrete steps with the stop-and-wait points, the pre-send check, a gotchas section, one worked example written in full, and three real test requests. Walk me through it for approval. Do not say it is installed until I confirm.
```

Add the skill, close and reopen your AI tool so it picks up the change, then run the three test requests on real work. If it fires on a quick reply, tighten the description.

> **In Claude:** add it under Customize → Skills. In Claude Code, skills live in the `.claude/skills/` folder, which is hidden: on Mac press `Cmd+Shift+.` in Finder; on Windows choose View → Show → Hidden items in File Explorer.

## Side quest: Set your team's standard

Built for managers; anyone who owns a recurring team artifact can run it. The new capability: building a check other people use. Pick one thing your team produces again and again (customer follow-ups, release notes, the weekly team update, design reviews, incident write-ups). The standard applies to the work itself.

```
Help me create a team standard for one recurring piece of work my team produces. Interview me one question at a time: what the artifact is and who receives it, what our best examples look like and why, what makes a weak one weak, the most a reader will happily read, and the details only our team can add (data, customer context, decisions). If my answers are general, ask for a real recent example.

Then write two things:
1. A one-page team definition of good, with a short good example and a short weak example.
2. Instructions for a shared check that reviews any draft of this artifact against that definition and returns Ready, Ready after cuts, or Needs another pass, with the single most important reason. The check judges the draft only and never comments on the person who wrote it.
```

Set the check up where your team works, share it, and pin the definition of good where the work lives, such as the team's monday board. Then agree on one sentence anyone can use when they receive slop, for example: "Can you send me your own take in five sentences? I'll read the full version if I need it."

> **In Claude:** make the check a shared Project for your team, or a skill you share with your team from Customize → Skills.

## Proof of work

In "what I built", name the piece you remade, the one specific change that mattered most, and one thing you learned about your own habits. Your Slop Score stays with you. For example: "Remade my QBR summary for a retail account: two pages became eight lines that lead with the renewal risk. Learned that my drafts bury the ask."

## Where to next

- **Your AI Identity**: if the drill or your taste file still came out generic, your AI doesn't know you yet. Standing instructions fix that, and every adventure gets sharper.
- **Build Your Board of Advisors**: habit 6 in the audit. Choose the reviewers your work really needs and stress-test your next important piece before it ships.
- **Skills: When, How and How Well**: if Layer 3 made you want the full craft of scoping, building and testing skills, start there.
