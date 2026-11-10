---
slug: audit-and-improve-your-ai-system
emoji: 🔍
icon: shield
title: "Audit and Improve Your AI System"
walkaway: "A map of how much of your recurring work your AI system carries, the frictions fixed in the files that caused them, one or two gaps closed, and a retrospective skill that offers the next review on its own"
category: Set up your AI
levels: [Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Longer
outcome: Work differently
pattern: AUD
wave: W3
slot: 21
review: ready
video: /videos/audit-and-improve-your-ai-system.mp4
next: [advanced-skill-patterns, personalising-claude-code]
source: "Adapted from Nufar's Agent Retrospective skill from Executive Agent Leadership (EnterpriseClaw/shared/skills-library/agent-retrospective.md: the three triggers including self-triggered, the human's hypothesis across context / skills / identity / something else, evidence from a real output, the one-question temperature check, the symptom → cause → fix table, implement on approval, the saved review, the rules: candid about its own files, hypothesis is a signal, prioritize by impact, compare with the previous review) and the EAL Week 6 fleet retrospective (EnterpriseClaw/week-6/build/30a-fleet-retrospective-and-optimize.md: quarterly cadence, a review after any major change, trends across reviews, specialist split). Also from summer-challenge/labs/customs-check.md (older-model habits, contradiction classes, duplicates and stale facts, dead weight, 'deletion must earn its case', security rules always stay, 'a healthy result is a success', baseline gate, dated log, one-layer index, the audit as a skill, mixed-fleet split, split an agent in two) and summer-challenge/labs/repack-your-bags.md (inventory by job and frequency, attention cost, keep / consolidate / drop verdicts). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Reframed 2026-11-10 from Nufar's review (videos/audit-and-improve-your-ai-system/notes.md): the page was about adapting to current models; it is now about getting more out of your AI through four questions (coverage, friction, cost, a retrospective with the system). Stripping complexity for current models stays as one part of the Step 1 audit.

Adaptation note
- Agent Retrospective skill (EAL): Step 2 runs its steps in order (what prompted it, hypothesis, evidence, temperature check, diagnosis to a file) with a compact symptom → cause → what-to-change table; Step 5 turns it into a skill with all three triggers, reads the last review first, saves the review in her format. "Identity file" is rendered as "standing instructions (your AI identity)" for Monday readers.
- Fleet retrospective (EAL W6): quarterly cadence plus after each major model release; drop as a valid verdict; split an agent in two stays in Go further.
- Customs Check: the older-model habits table, contradiction classes, duplicates, dead weight and the security rule moved inside the Step 1 audit prompt; baseline gate, saved originals, one group at a time and the dated log in Step 3. The one-layer index was cut: it did not fit the length, and Token Smartness teaches index and file-opening habits.
- Repack Your Bags: inventory by job and frequency became the coverage table; verdicts keep / fix / strip / systematize / drop.
- Cut: the "what changed" research prompt (the audit checks current vendor guidance in one line), the coding-tool system prompt hook, hidden-folder instructions, /doctor (owned by Personalizing Claude Code), the skill prerequisite pointer.
- Overlap: Personalizing Claude Code owns the Claude Code setup (one line here points to /doctor prompt-audit and /usage as input); Token Smartness owns token habits (cost here is one table column and the index item); Advanced Skill Patterns owns fixing a single skill; Use-Case Discovery owns new use cases (Step 4 closes gaps in work already recurring).

Judgment calls for Nufar
- Skill prerequisite pointer dropped although the 23 Oct learning lists this page: the page is Advanced, the Step 5 skill prompt is self-contained, and Personalizing Claude Code dropped it on 10 Nov for the same audience.
- One chat for the whole adventure, run in the tool that holds most of the system; other tools are pasted or described. A friction that lives in another tool or a monday agent gets the retrospective prompt run there.
- The retrospective review and the fix log are one document, "AI system review", in her saved-review format, so the routine skill reads one thing.
- The self-trigger also asks for one line in standing instructions, because a skill alone may not be considered mid-chat in every tool.
- Title kept. outcome stays "Work differently"; Step 4 also builds something.
- The older-model habits table became three sentences in Step 1, and the symptom table merged her eight rows into five, to stay under the cap without cutting prompt self-containment.
- Length: 2,244 words (core 1,809; prompts 156 to 241 words). Over the 1,800 aim because the page now carries five self-contained prompts for four questions plus a routine; the previous version was 1,808.
- next: your-ai-taste-test replaced by advanced-skill-patterns.

Open items
- monday agents: confirm an agent's instructions can be read or pasted for audit, and that a retrospective can run inside one. Wording is provisional.
- Labels: "people with sophisticated AI systems" is outside the label set; [Everyone] with level Advanced.
- Self-triggered offer: check in Claude that the skill description alone makes it offer a retrospective after repeated corrections.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# 🔍 Audit and Improve Your AI System

**Map how much of your recurring work your AI system carries, run a retrospective with it, then fix it, close the biggest gaps and keep it improving.**

## Why this adventure

An AI system grows one piece at a time: project instructions, a few skills, a monday agent, a scheduled task. The useful questions come later: how much of your recurring work does it actually carry, where do you still correct it every time, and what costs more time or tokens than it should? Models changed too: current models use judgment like a senior colleague, so habits written for older models now cost quality.

This adventure covers every AI tool you use. The bar: most of your recurring work runs through your system, every correction you repeat has a fix in a named file, and your system offers the next review on its own.

## The trail

1. **Map your work against your system**: coverage, friction, cost, and what to strip for current models.
2. **Run a retrospective with your system**, to find the file behind each top friction.
3. **Fix and retest**, one group of changes at a time, against a baseline.
4. **Close the biggest gaps** in recurring work you still do from scratch.
5. **Make it a routine**: a retrospective skill that runs on request and offers itself.

## Before you start

You need an AI system you have used for a while, in one tool or several: for example project instructions, skills, a monday agent or a scheduled task.

## Step 1: Map your work against your system

**Think first for yourself, without AI.** Messy is fine.

- Which work do you do again and again, for example a QBR summary, release notes or a weekly team update?
- Which of it do you still start from scratch?
- What do you correct every time, for example the same tone fix or the same missing section?
- What feels slow or expensive: many rounds, long waits, heavy reads?
- What works so well that you want to keep it as it is?

The audit also strips what current models no longer need. They follow rules in capitals, threats ("NEVER…") and step-by-step procedures too strictly. Rules that fight, for example "under 100 words" globally and "a full page of risks" in your QBR skill, cost effort on every run.

### Prompt: Map my work against my AI system

**What this does:** the AI interviews you about your thoughts, reads your system, and returns one table, a scorecard and what to strip.

Open a new chat in the AI tool that holds most of your system and paste the prompt below. Steps 2 to 5 continue in this chat. Answer its questions in writing, or by voice if your tool has dictation. **In Claude:** start the chat inside the project you use most. **In Claude Code:** run `/doctor prompt-audit` and `/usage` first and keep their output in the session.

```
Audit how well my AI system carries my recurring work. My system, in every AI tool I use: standing instructions, projects, context files, memory, skills, agents, automations (scheduled tasks) and connectors. Ask me to brain dump or paste all my thoughts before you start. If I already answered a question earlier in this chat, don't ask it again.

Read everything you can reach. For what you cannot see, for example another AI tool or a monday agent, ask me to paste or describe it. Then ask one question at a time about what is missing: recurring tasks, how often each runs, what I correct. Do not decide which tasks matter or what good means. Check current official guidance on instructing the models I use.

Change nothing. Report:
1. One table: recurring task; systematized today (fully, partly or not at all, and where); friction (how often I correct it, and what); rough time and tokens per run; verdict (keep, fix, strip, systematize or drop).
2. A scorecard: share of my recurring work systematized, top three frictions, top cost.
3. Lean for current models, quoting each line and its file: contradictions; rules written for older models (capitals, threats, step-by-step for work you understand); duplicates and stale facts; dead weight. Keep every security, privacy, approval and compliance rule.

An instruction that works stays until evidence says otherwise. A healthy result is a success. Stop and wait.
```

## Step 2: Run a retrospective with your system

Your system knows its own files best. With your evidence, it finds why each top friction keeps happening and which file holds the cause.

| What do you see? | What usually causes it? | What to change |
| --- | --- | --- |
| Wrong or stale facts, forgotten decisions | Missing or outdated context | Context files, memory or a decisions file |
| Wrong process, format or uneven quality | A skill is missing, vague or has no example | The skill |
| Wrong tone, judgment or risky actions | Vague standing instructions (your AI identity) or no approval rule | Standing instructions |
| A tool or connector fails | Connection or permission | The tool's settings |

### Prompt: Retrospective with my AI system

**What this does:** the AI runs a candid review of your top frictions with you and maps each to the exact file or setting to change.

Stay in the same chat, so the AI sees the scorecard, and paste the prompt below. If a top friction lives in another tool or a monday agent, run the prompt there instead. Answer its questions in writing, or by voice if your tool has dictation.

```
Run a short retrospective with me on how you work for me. Be candid about your own instructions, skills, context and memory: "my instructions do not cover this" helps me more than "I will try harder". If I already answered a question earlier in this chat, don't ask it again.

1. What prompted this: my top three frictions from the scorecard in this chat. If there is none, ask me what keeps going wrong.
2. My hypothesis: for each, ask what I think causes it: context (wrong, stale or missing information), skills (a missing or vague process), instructions (tone, judgment, boundaries), or tools (a connector, a setting, or the task itself changed). My answer is a signal; check it against your files.
3. Evidence: ask me for one real output that shows each problem, and compare it with your files.
4. Temperature check: ask me one question: across accuracy, usefulness, consistency, judgment and initiative, which feel off?
5. Diagnosis: map each issue to its cause and the exact file or setting to change. Prioritize by impact. Name what works well, so we keep it.

Show one table: issue, cause, file or setting, proposed change. Change nothing. Stop and wait.
```

## Step 3: Fix and retest

Pick three to five real tasks from your Step 1 table, for example last week's QBR summary or team update. Before you change anything, run each once through your current setup and save the outputs in one document named "Baseline".

### Prompt: Apply the fixes with a safety net

**What this does:** applies the changes you approve in small groups, saves the originals, and writes a dated review.

Stay in the same chat and paste the prompt below.

```
Apply the changes I approve from the audit and the retrospective in this chat. If I already answered a question earlier in this chat, don't ask it again.

1. First confirm I have a Baseline document: real tasks with outputs I know are good, which I can rerun. Without one, I must accept the risk explicitly; record that.
2. Save the original text of everything you change, so I can restore it.
3. Apply one group of related changes at a time, then tell me to rerun my baseline tasks and compare. If quality dropped, restore the original.
4. Where you cannot edit, give me the complete final text and exactly where to paste it.
5. Write a dated "AI system review": what prompted it, my hypothesis, findings (issue, cause, file changed, fix), the temperature check, what works well, my decision on each (fixed, kept because it works, deferred), baseline results, open items, next review date.
```

Save the AI system review where your AI can read it, for example in the project. This step is done when every baseline task is at least as good as before.

## Step 4: Close the biggest gaps

Dream big about how much of your recurring work your system could carry, then build the simplest thing that closes each gap.

### Prompt: Close my biggest gap

**What this does:** the AI picks the most valuable gaps with you, interviews you, and builds the simplest thing that carries the work.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me close the biggest gaps in my AI system: recurring work from the table in this chat that is systematized partly or not at all. If I already answered a question earlier in this chat, don't ask it again.

Suggest the one or two most valuable gaps, by frequency and worth, and wait for my pick. Keep each at its full size. Do not decide what a good result is. Ask me to brain dump how I do this work today, then ask one question at a time about what is missing: sources, what good looks like, who uses the result.

Search the web for recent features of my AI tools. Recommend the simplest thing that does the job, in this order, and say why simpler will not do:
- Context: a file or project knowledge with the background I re-explain.
- A project: its own instructions, files and chats.
- A skill: saved instructions for one recurring task.
- An agent: instructions, tools and skills for a whole area of work, for example a monday agent.
- An automation (a scheduled task): only for a skill I have already tested by hand.
Data that customers uploaded to their own monday boards never goes into an AI tool; Monday's own data about customers, including through Kremer, is fine.

Write the complete artifact, say exactly where to add it in my tool, and wait for my approval.
```

Run what you built on the real task this week. If you added a skill, close and reopen your tool so it finds the skill.

## Step 5: Make it a routine

A review you repeat catches drift early, so the retrospective becomes a skill.

### Prompt: Turn the retrospective into a skill

**What this does:** packages the audit and retrospective as a skill that reads your last review, runs on request and offers itself.

Stay in the same chat and paste the prompt below.

```
Turn the audit and retrospective we ran in this chat into a skill. A skill is saved instructions an AI tool follows for one recurring task. Check my tool's current documentation for its skill format.

The skill must:
- Start when I ask for "a retrospective" or "a system review".
- Offer a short retrospective on its own when it notices I correct the same thing again and again, and wait for my yes. Also give me one line for my standing instructions, so you remember to offer it.
- Read the latest AI system review first and leave settled decisions alone unless something changed.
- Adapt to the trigger: on request, ask what works and what frustrates me; after a bad output, start from what happened and what I expected; when self-triggered, name the friction.
- Run the same steps: my hypothesis, evidence from a real output, one temperature-check question (accuracy, usefulness, consistency, judgment, initiative) except after a single bad output, diagnosis to the exact file, fixes only after my approval.
- Rules above every step: report before changing, quote evidence, keep security and approval rules, no deletion without a baseline.
- Save a dated AI system review in the same format and compare it with the last one.

Give it a short name in lowercase with hyphens. Show the whole skill in one block, tell me how to add it, and remind me to close and reopen the tool.
```

Add the skill and the line, then close and reopen your tool. Test it on one small friction: it should read the last review and change nothing before your approval. Add a quarterly item to your monday board, plus one after each major model release.

## Go further

**Split what travels from what stays.** Do this if you use several AI tools. Keep your role, boundaries, quality bar and taste in one shared file; formatting rules and tool syntax stay in each tool.

**Split an agent in two.** Do this when one set of instructions holds two purposes, such as "challenge my thinking" and "just execute", and gets average results at both. Create two agents, run the same request through each, and compare.

## Proof of work

In "what I built", name your share of systematized work, one friction you fixed and the file it lived in, and the gap you closed.

For example: "About half my recurring work was systematized. My QBR summaries kept losing the risks because a global 'under 100 words' rule fought the QBR skill; the length rule moved into the skill. My weekly team update is now a skill."

## Related adventures

- **Advanced Skill Patterns**: fix one skill in depth.
- **Token Smartness**: habits that get more from every token.
- **Personalizing Claude Code**: the same lean approach inside Claude Code.
