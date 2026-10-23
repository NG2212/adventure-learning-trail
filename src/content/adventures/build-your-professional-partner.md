---
slug: build-your-professional-partner
emoji: 💼
icon: briefcase
title: "Build Your Professional Partner"
walkaway: "A domain specialist you keep working with, and the habit of reviewing and improving it"
category: Set up your AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Moderate
outcome: Build something
pattern: INSTALL
wave: W4
slot: 28
next: [skills-when-how-and-how-well, build-a-personal-brain-for-your-ai]
source: "Adapted from catch-up-may/content/week-3/project-7-professional-specialist.md (Step 1 discovery interview, direct and indirect questions, do-not-duplicate check; Step 2 craft brief and builder prompt; Step 3 review like a manager and specific feedback; Step 4 context-file table, cut to three rows; Step 5 named workflows; Step 7 connect real data; Step 8 context gap / instruction gap / model limitation diagnosis and the echo trap test) and project-7-reference-card.md (worker vs task, operating rules). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 28 [Inbar 17])
- Kept: P7's discovery interview (direct + indirect questions, check what already exists, end with one recommendation); the craft brief (function, KPI with good / concerning thresholds, frameworks, vocabulary, what great looks like per task); the builder prompt's behavioural rules (use my frameworks, tie to KPI, ask when context is missing); "review like a manager" with specific, actionable feedback; the three-cause diagnosis table verbatim in meaning; the echo trap test; workflows (trigger, what it asks, output, quality check) and connect-to-real-data as Go further.
- Cut: Catch-Up worker team (Research Analyst, Strategic Advisor, Data Scientist), Dream Team / Falcon Advisor / Sarah Chen, glossary, "Understand the why" links, the 12-row use-case bank (five Monday rows instead), per-tool file limits and format tips, the vibe-coded tool (Step 6), Path B paragraph, self-editing mechanic (replaced with "write the full revised instructions, then replace them in the project", which works in every tool).
- Added for Monday: thinking step without AI before the discovery prompt; worker-vs-task line that links to Skills instead of repeating it; AI Identity linked in Before you start; Monday rows in the Step 1 table; monday boards, Drive and Kremer as context sources; the customer-data rule worded as Nufar clarified (22 Oct); a "first real task" prompt that makes the partner list assumptions and UNVERIFIED items; levels F I A served by "new to this / already have one" in the hook.

Open items
- "In Claude Cowork: create a project" mirrors the Chief of Staff file; confirm Cowork projects with connected Drive folders and monday boards on Monday's plan (Unified Claude reaches all orgs 10 Nov 2026; may need a wording sweep).
- Effort: the inventory row says L; the seed and the Inbar list say Moderate. Frontmatter uses Moderate.
- next: slugs exist as files; build-a-personal-brain-for-your-ai is W2, so it is live before this W4 adventure.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 💼 Build Your Professional Partner

**Build an AI specialist for your domain with a real job description, then review and improve it the way you would coach a new hire.**

## Why this adventure

Out of the box, AI answers from the average of everything written about your field, so you get textbook advice. Your work runs on your company's definitions, your team's frameworks, the number you are measured on and the words your team uses.

A professional partner is an AI specialist for one domain of your work, with a job description: what it is for, the main number it helps you move (your KPI), the frameworks and vocabulary it uses, and the tasks it handles every week. Think of a colleague with ten years of experience in exactly your world.

New to this? Steps 1 to 3 give you a working partner. Already have one? Bring it to Step 4: the bar is a partner that tells you where an expert would disagree with you.

## The trail

1. **Decide what your partner should do**, so you build a specialist you would use every week.
2. **Write its job description**, because specific context turns generic answers into expert ones.
3. **Give it real work and review it like a new hire**, because the first real task shows what it still has to learn.
4. **Improve it from your feedback**, so it gets better with every use.

## Before you start

Have two or three documents your work runs on: a framework, your KPI definitions, an example of excellent work. If you set up standing instructions in Your AI Identity, your partner builds on them.

## Step 1: Decide what your partner should do

A partner covers one domain and several tasks in it, like a job description. When you want one task done the same way every time, build a skill instead (see Skills: When, How and How Well); your partner can use those skills later.

| Where do you work? | Which partner could you build? | What would it handle every week? |
| --- | --- | --- |
| Customer success | Renewal Coach | QBR prep, churn-risk reads, renewal call plans, all measured against net revenue retention |
| Product | Release Partner | Release notes, priorities against your activation metric, launch plans |
| Engineering | Reliability Advisor | Incident write-ups, design reviews, tech debt priorities |
| Finance | Forecast Analyst | Forecast commentary, variance explanations, numbers for board updates |

**Think first, without AI.** Close the chat. Write down three things: the recurring tasks where quality matters most, the part of your work where you keep wishing for an expert colleague, and where generic AI answers disappoint you. These notes decide what you build.

### Prompt: Find the partner worth building

**What this does:** the AI reads your notes, interviews you, checks what you already have, and recommends one partner.

```
Help me choose a professional partner to build: an AI specialist for one domain of my work, with a job description covering several recurring tasks. I will paste notes about my work. Use what you know about me as background; ask only for gaps.

First ask which AI setups I already use (instructions, projects, skills, agents), so you avoid a duplicate.

Then ask one question at a time; I may skip any:
1. What is my function fundamentally for?
2. Which KPI am I measured on?
3. Which three to five recurring tasks need the most quality?
4. What does my company do differently enough that standard advice misses it?
5. If I could hire someone with ten years in exactly my world, what would they do every week?
If an answer is vague, ask for a recent example. Do not choose my domain or tasks or answer these from memory; wait for my answers before proposing.

Propose two or three partners: a name that says what it does, its domain, its three to five tasks, and why I would use it weekly. Recommend one, then stop for my choice.
```

Pick the partner you would use every week. Keep this chat open for Step 2.

## Step 2: Write its job description

The job description is a **craft brief**: what your function is for, your KPI with what good and concerning look like, the frameworks and vocabulary your team uses, and what great output looks like for each task.

### Prompt: Write my partner's instructions

**What this does:** interviews you for the craft brief and writes the complete instructions for your partner.

```
Let's build the partner I chose in this chat. It needs a craft brief: what my function is for, my KPI with thresholds, our frameworks and internal definitions, our vocabulary, and what great output looks like for each recurring task.

Ask for what is still missing, as a batch:
1. Which frameworks or internal definitions does my work run on? I will explain any you do not know.
2. Which terms and acronyms does my team use in its own way?
3. For my KPI: what is good, and what is concerning?
4. For each task: what does great output look like? I may paste an example.

Then write the complete instructions, under 600 words:
1. Role: the partner's name, domain and who it works for.
2. Craft brief: purpose, KPI with thresholds, frameworks, vocabulary.
3. Tasks: each recurring task and what great output looks like.
4. Rules: reason with my frameworks over generic best practice; connect advice to my KPI; ask when context is missing; mark anything you could not verify.
Show them to me and wait for my approval.
```

Read the instructions. Where a line could fit any company, tell the AI exactly what is missing and ask for a new version.

**Set it up.** Save the approved instructions where your AI reads them every time, and add the documents you prepared:

| What kind of document is it? | What should you add? |
| --- | --- |
| A stable reference: a framework, a playbook, a policy | The original file |
| A long document where only a few pages matter | A short summary of those pages; ask your AI to write it |
| Information that changes often: targets, team, roadmap | A live Drive file or monday board, or a short file you update every quarter |

Your partner may use Monday's own data about customers: Salesforce data through Kremer, support tickets Monday wrote, feedback Monday collected. Data that Monday's customers uploaded to their own monday boards (customer boards) never goes into Claude.

**In Claude:** create a project named after your partner (for example Renewal Coach), paste the instructions into the project instructions, and add the documents to the project knowledge.

**In Claude Cowork:** create a project the same way and connect the Drive folders and monday boards your partner should read.

## Step 3: Give it real work and review it like a new hire

Pick a real task from your partner's job description that you need this week, such as a QBR summary or a set of release notes. Open a new chat in your partner's project.

### Prompt: First real task

**What this does:** your partner asks for what it needs, does the task, and shows you where it made assumptions.

```
I have a real task for you from your job description. Ask me, one question at a time, which task it is, what the result is for, and what context you need. Then do it. After the result, list the assumptions you made, and mark anything you could not confirm from my documents or connected sources as UNVERIFIED.
```

**Review it like a manager before you reply.** Write three lines yourself: what it got right, where it is generic, and what it still misunderstands about your work.

Then give feedback the way you would to a new hire: say exactly what was wrong and what should change. "You used the textbook definition of churn risk; on our team an account is at risk when usage drops two months in a row." Specific feedback gets a better result than "make it better".

Ask for a new version. Then ask your partner to write the complete instructions again with the fix included, and replace the old instructions in the project. You are done with this step when one result from your partner goes into your real work.

## Step 4: Improve it from your feedback

After three to five real tasks, find out why the misses happen. Each miss has one of three causes, and each cause has its own fix:

| What do you see? | What is the cause? | What is the fix? |
| --- | --- | --- |
| The answer is generic and lacks your company's specifics | **Context gap:** your partner lacks the reference material | Add a document or connect a source |
| The answer ignores a rule you care about: format, tone, priority | **Instruction gap:** the rule is missing from the instructions | Update the instructions |
| The answer is confidently wrong about facts or reasoning | **Model limitation:** the model cannot do this reliably | Use a stronger model, check the facts elsewhere, or keep that part for yourself |

### Prompt: Diagnose and improve my partner

**What this does:** collects your honest assessment, sorts each miss into one of the three causes, and rewrites the instructions.

```
I have used you for real work. Help me improve you. If you can see our earlier chats in this project, use them as evidence.

Interview me one question at a time:
1. What do you do well that I want to keep?
2. What misses or annoys me again and again?
3. What do I keep correcting by hand?

For each problem, name the cause:
- Context gap: you lack information. The fix is a document or a connected source.
- Instruction gap: your instructions do not cover it. The fix is a new rule.
- Model limitation: you cannot do it reliably. The fix is a change in how I use you.

Show a table: problem, cause, fix. Then write your complete updated instructions with the changes marked. Wait for my approval.
```

Replace the instructions in the project with the approved version.

Then check for the **echo trap**: a partner that reflects your own views back to you with confidence and adds no expertise of its own.

### Prompt: Echo trap test

**What this does:** asks your partner to argue with you as an outside expert would.

```
Where would a skeptical expert in my field disagree with the advice you have given me? Name three specific points, with the reasoning for each.
```

If the three points are weak or generic, add outside material to its documents: industry benchmarks, a competing method, a framework that disagrees with yours. You are done when the instructions hold your fixes and your partner names three real disagreements.

## Go further

**Turn two recurring tasks into named workflows.** Do this for tasks you run under time pressure, so one short phrase such as "QBR prep" gets a useful result in one pass. Ask your partner to add two workflows to its instructions, each with a trigger phrase, the minimum questions it asks you, the output format and one check before it delivers. When a workflow is stable, turn it into a skill with Skills: When, How and How Well.

**Connect it to live data.** Do this when you paste the same snapshots again and again; pasted data is out of date by the next session. Connect the monday boards and Drive folders your partner reads, and reach internal data such as account history through Kremer. Where no connection exists, keep one export in one place, in the same format, updated on a fixed day.

## Proof of work

In "what I built", write your partner's name, its domain, and one fix you made after reviewing its work.

For example: "Renewal Coach for my mid-market accounts. After its first QBR prep I added our rule: an account is at risk when usage drops two months in a row."

## Related adventures

- **Your AI Identity**: tell your AI who you are, so every partner starts from it.
- **Skills: When, How and How Well**: turn your partner's best workflows into skills.
- **Build a Personal Brain for Your AI**: give your partner deeper context about your team and projects.
