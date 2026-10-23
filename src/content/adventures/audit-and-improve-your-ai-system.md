---
slug: audit-and-improve-your-ai-system
emoji: 🔍
icon: shield
title: "Audit and Improve Your AI System"
walkaway: "A leaner, faster AI setup and an audit routine you repeat each quarter"
category: Set up your AI
levels: [Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Ambitious
outcome: Work differently
pattern: AUD
wave: W3
slot: 21
next: [personalising-claude-code, your-ai-taste-test]
source: "Adapted from summer-challenge/labs/customs-check.md (what changed for current models, scope table, findings-first audit with contradiction / placement / stale / dead-weight passes, baseline gate, apply-with-log, one-layer index, /doctor treated like the audit, audit as a skill, mixed-fleet split, split an agent in two) and summer-challenge/labs/repack-your-bags.md (tool inventory by job, frequency and attention cost; overlaps and gaps; keep / consolidate / drop verdicts; migration order; tools you cannot cancel). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 21 [Inbar 20])
- Kept from Customs Check: the "what changed" research prompt (web search, mechanism vs headline, how far the evidence generalises); scope table; the audit passes (contradictions with three classes, duplicates and stale facts, placement, dead weight) as one findings-first prompt; the rules "deletion must earn its case", "security and approval rules are never cut", "quote the evidence", "a healthy result is a success"; the baseline gate and audit log; the one-layer index with open-when lines; /doctor approved line by line; the audit packaged as a skill. Mixed-fleet split and split-an-agent moved to Go further.
- Kept from Repack Your Bags: tool inventory (jobs, frequency, attention cost), overlaps, keep / consolidate / drop verdicts, migration order, respect tools you cannot cancel. Folded into the audit prompt as the tools pass.
- Cut: model version names, vendor links, the arXiv study, money and subscription costs, personal subscriptions, the Gold Standard and Set It and Summer cross-links, postcard, all travel language.
- Added for Monday: connectors and Kremer in the tools pass, monday agents briefs in scope, a Monday contradiction example (global length rule vs QBR skill), quarterly reminder on a monday board, thinking-first baseline step.
- EAL context audit named in the inventory row was not opened (EnterpriseClaw is out of bounds for this build).

Open items
- /doctor: written conditionally. Confirm what /doctor does on Monday's Claude Code version (the source says it reviews instruction files, skills and connections and proposes a cleanup; it may only check installation health).
- The "most of a coding tool's system prompt removed, contradictions were the bigger finding" claim comes from Customs Check; Prompt "What changed for current models" asks the AI to verify it. Confirm Nufar wants it in the hook.
- Labels: seed profession "People with sophisticated AI systems" is outside the label set; used [Everyone] with level Advanced. Seed effort Ambitious kept (inventory says M). Nufar to decide.
- Emoji 🔍 chosen (seed gives icon shield only).
- monday agents: confirm an agent's brief can be read or pasted for audit. Wording is provisional.
- next: personalising-claude-code exists; your-ai-taste-test is provisional until that file exists.
- Prompt test in a fresh Claude chat and a Claude Code session: pending (playbook step 4).
-->

# 🔍 Audit and Improve Your AI System

**Bring your instructions, context files and connected tools up to date for today's models, and keep them that way.**

## Why this adventure

The latest frontier models follow instructions closely and use judgment like a senior colleague. Most instruction habits were written for older models that needed steering at every step, and with current models those habits often cost quality.

Vendors published new guidance for their newest models. One report described removing most of a coding tool's system prompt with no loss in quality. The bigger finding: the old prompt held rules that contradicted each other, and the model spent reasoning on every run deciding which to follow.

In this adventure you audit your own system, fix what fights itself, and prove that quality held. The bar: every rule has one home and every change has evidence behind it.

## The trail

1. **Learn what changed**, so you audit against today's guidance.
2. **Set your scope and a baseline**, so you can prove each change helped.
3. **Audit your context, instructions and tools**, to find contradictions and dead weight.
4. **Fix, strip and retest**, one group of changes at a time.
5. **Make it a quarterly routine**, because every model release changes the picture again.

## Before you start

You need an AI system you have used for a while: custom instructions, a project, skills, a monday agent or a Claude Code setup.

## Step 1: Learn what changed

| Habit built for older models | What current models do with it | What to do now |
| --- | --- | --- |
| Rules in capitals or written as threats ("NEVER…") | Follow them too strictly, even where they do not fit | Plain sentence case, with a short reason |
| Step-by-step procedure for work the model understands | Follow your steps even where their own judgment is better | State the goal and what matters; keep steps only where order matters |
| Every file loaded into every chat | Spend attention on context the task does not need, and blend documents | A short index; open documents when the task needs them |

Two rules hold for the whole audit: an instruction that works **stays until your evidence says otherwise**, and **security, privacy, approval and compliance rules always stay**.

### Prompt: What changed for current models

**What this does:** the AI researches current vendor guidance and tells you which of your habits it affects.

```
Brief me before I audit my AI instructions. Ask which AI tools and models I use and what work my instructions support. Use what you know about me; ask only for gaps.

Then search the web for official guidance from Anthropic, OpenAI and Google on instructing their newest models, plus credible practitioner reports from this year. Report:
1. What the vendors recommend, with links and dates
2. Why leaner, cleaner context helps these models
3. Where the evidence came from and how far it applies to my work
4. Where practitioners disagree

Finish with a table: my habit, still useful or now costly, why. Mark anything unverified. Recommend no changes yet.
```

## Step 2: Set your scope and a baseline

| If you have… | Audit this |
| --- | --- |
| Claude Code, Claude Cowork or Cursor with files | Everything: instruction files at every level, context files, skills, memory, and connectors such as Drive, Slack, monday and Kremer |
| A Claude project or a monday agent | Its instructions and the knowledge files or boards it uses |
| Only global instructions and memory | Those, plus what in them belongs somewhere narrower |
| One skill you rely on | Its trigger, rules and overlap with your standing instructions |

New to audits? Start with one artifact and finish it.

**Think first, without AI.** Write down three to five real tasks your system handles often, such as a QBR summary, release notes or an incident write-up, and what a good result looks like for each. Run each task once through your current setup and save the outputs in one document named "Baseline". After every change, you rerun these tasks and compare.

## Step 3: Audit your context, instructions and tools

Run the audit where the AI can read what you audit. **In Claude:** open a fresh chat in the project you audit.

**In Claude Code:** start a fresh session in the folder where your instruction files live. The `.claude` folder is hidden: on Mac, press Cmd+Shift+. in Finder; on Windows, open File Explorer and choose View → Show → Hidden items. Run `/context` and note how much context loads before you type anything.

A typical contradiction: your global instructions say "keep every answer under 100 words"; your QBR summary skill asks for a full page of risks per account.

### Prompt: Audit my AI system

**What this does:** the AI reads everything in scope and reports up to ten findings with quoted evidence.

```
Audit my AI system like a careful doctor with a mostly healthy patient: evidence first, cautious about change. Read everything in scope; if you cannot read a file, ask me to paste it.

Rules: report only; change nothing. Quote the exact lines and file for every finding. Keep security, privacy, approval and compliance rules; at most flag them as "check still accurate".

Passes:
1. Inventory: standing instructions, context files, memory, skills, connected tools.
2. Contradictions: direct conflict (both cannot be followed), tension (both weaken the output), era conflict (a rule for an older model's limits that fights the judgment I ask for).
3. Duplicates and stale facts: the same rule twice, dated facts, people or tools I no longer use.
4. Placement: standing instructions hold only what applies in every chat; stable facts go to context files; repeated procedures go to skills.
5. Dead weight: steps the model can infer, rules for mistakes current models no longer make.
6. Tools and connectors: jobs, frequency of use, overlaps, access broader than needed. Company-provided tools stay.

Report up to ten findings in severity order: finding, quote, why it costs me, recommendation, risk if wrong, confidence. If the system is healthy, say so. Stop and wait.
```

**In Claude Code:** if your version offers `/doctor` and it reviews your instruction files and skills, run it too and approve its proposals line by line. It judges a generic setup; some of your unusual rules exist for a good reason.

## Step 4: Fix, strip and retest

### Prompt: Apply the fixes with a safety net

**What this does:** applies the findings you choose, in groups, saving the originals and a log.

```
Apply the findings I choose from the audit in this chat.

1. Before any deletion, confirm I have a baseline: real tasks with good outputs I can rerun. Without one, I must accept the risk explicitly; record that.
2. Save the original text of everything you change.
3. Apply one group of related changes at a time, then tell me to rerun my baseline tasks. If quality dropped, restore the original.
4. Keep a dated audit log: each finding, my decision (fixed, kept because it works, deferred), the original text, baseline results.
5. Where you cannot edit, give me the final text and exactly where to paste it.
```

Compare each rerun with the Baseline document from Step 2. Then build an index: a short map the AI reads every session, opening each document only when the task needs it.

### Prompt: Build my index

**What this does:** turns your files and skills into one index with a "when to open" line for each.

```
Restructure my context so my AI opens what it needs. Ask what files and skills I have and how each loads today.

Rules: exactly one index layer, then the documents (an index pointing to other indexes reduces accuracy). Each entry is one line: what the document is, what it covers, when to open it. Skill descriptions name their trigger task, such as "when drafting a board update".

Produce: the index file; sharpened skill descriptions, flagging any two that could fire on the same request; what stays loaded in every chat and why; three test requests that should each open a different document.
```

Run the three test requests. If the AI opens the wrong document, fix its "when to open" line. **In Claude Code:** run `/context` again and compare with your Step 3 note.

## Step 5: Make it a quarterly routine

Save the audit log where your AI can read it, so decisions you made stay settled.

### Prompt: Turn the audit into a skill

**What this does:** packages this audit as a skill you start by name.

```
Turn the audit we ran in this chat into a skill. It must:
- Start when I say "audit my AI system" or "check my setup", and after any change to my instructions or skills
- Read the latest audit log first and leave settled decisions alone
- Keep these rules above every step: report before changing, quote evidence, keep security and approval rules, no deletion without a baseline
- Run the same passes in the same order

Write the complete skill and three test requests. Wait for my approval.
```

Add the skill, then close and reopen your AI tool so it finds the skill. Test it on one small artifact: it should report findings and change nothing. Add a quarterly item to your monday board, plus one after each major model release.

## Go further

**Split what travels from what stays.** Do this if you use several AI tools. Your role, boundaries, quality bar and taste work in any tool; keep them in one shared file. Formatting rules, reasoning settings and tool syntax belong in each tool's own settings.

**Split an agent in two.** Do this when one set of instructions holds two purposes, such as "challenge my thinking" and "just execute". Two purposes in one agent produce average results at both. Create two agents, run the same request through each, and compare.

## Proof of work

In "what I built", name the contradiction you resolved, one change you made, and what your baseline rerun showed.

For example: "My global 'under 100 words' rule fought my QBR skill; moved the length rule into each skill. Instructions went from 90 lines to 30, and the baseline QBR summary improved."

## Related adventures

- **Personalising Claude Code**: the same lean approach applied in depth to one repository.
- **Your AI Taste Test**: build a set of test tasks to try every new model release on your own work.
