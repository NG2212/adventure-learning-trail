---
slug: build-your-professional-partner
emoji: 💼
icon: briefcase
title: "Build Your Professional Partner"
walkaway: "An AI partner with the expertise of your own field or a field you lean on: an expertise pack of your company's way and current field practice, three ways of working, skills for your main tasks, and a lessons file that keeps it learning"
category: Set up your AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Longer
outcome: Build something
pattern: INT + INSTALL
wave: W4
slot: 28
review: ready
next: [advanced-skill-patterns, your-team-s-ai-blueprint]
source: "Adapted from catch-up-may/content/week-3/project-7-professional-specialist.md (Step 1 discovery interview, direct and indirect questions incl. the ten-years-in-my-world question, do-not-duplicate check; Step 2 craft brief and builder rules; Step 3 review like a manager and specific feedback; Step 4 context curation, folded into one line; Step 5 workflows, now skills with a quality check; Step 7 connect real data, moved into the core; Step 8 context gap / instruction gap / model limitation diagnosis and the echo trap test) and project-7-reference-card.md (worker vs task, operating rules, echo trap fix with external material). Skill-builder questions adapted from this platform's Skills: When, How and How Well page. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

History
- 2026-10-22: first build (slot 28 [Inbar 17]) from Catch-Up P7. 2026-11-05: think-first opener; chat and Cowork as one surface.

Rebuilt 2026-11-10, on Nufar's approved plan (her review: too shallow on skills, ways of working and context, and too close to other adventures)
- The line it owns: your field's expertise, a colleague with ten years in your function. One routing paragraph in the hook sends calendar and commitments to Chief of Staff, managing people to Managing with AI, learning a topic to Tutor, one decision from several angles to Board of Advisors, and separates the Personal Brain (context about you) from the partner's pack (the craft of your field).
- Labels: levels Intermediate and Advanced (Foundations dropped), effort Longer, professions Everyone. Pattern INT + INSTALL.
- Step 1: think-first questions, then the interview (kept the do-not-duplicate check and P7's questions; added "what would an expert with ten years in my world know that I do not"). Output: domain, KPI, four to six tasks, and what the partner does not cover. The use-case table became two bulleted examples (Renewal Coach, Reliability Advisor).
- Step 2 (new): the expertise pack in two halves, built by one prompt with a stop between halves. our-way.md (frameworks, KPI good and concerning thresholds, vocabulary, an excellent and a poor example, past decisions and reasons) and field.md (current practice, benchmarks, competing methods, failure modes, sources from the last two years with dates, a three-level confidence rubric, and a where-we-differ section with the reason for each difference and keep-or-reconsider). Live sources (monday boards, Drive, Kremer) moved up from Go further, with the customer-data rule. The document-type table was cut: once the pack files exist it no longer earned its place.
- Step 3: job description with three ways of working started by plain words (do it, review mine, push back), written as plain descriptions, never named or capitalized as a framework. Rules kept: reason with my frameworks, tie advice to my KPI, ask when context is missing, mark UNVERIFIED. Push back absorbs the echo trap test.
- Step 4 (new): top two or three tasks become skills, each with a quality check against the pack (KPI thresholds, frameworks, excellent and poor examples). The page carries its own complete skill prompt (8 Nov HARD RULE: self-contained); Before you start carries the standard pointer to Skills. Real task reviewed like a new hire, with the churn-risk feedback example kept.
- Step 5: the three-cause table kept (wording of the first cell tightened; fix column also names the pack and the skill). The diagnose prompt adds the lessons-file rule to the instructions and starts lessons.md.
- Go further: one item only, the team-level agent (Nufar's change), as five plain bullets the person asks the partner to work through: keep shared craft, strip personal preferences, owner and home (shared Claude project or monday agent), may and may not do, how the pack stays current. No scheduled watch item.
- Length: first full draft ran 3,342 words. Reached about 2,295 by merging the two pack prompts into one, turning the ways-of-working table into one sentence, making Go further prose-only, folding numbered prompt lists into lines, and dropping the In Claude project line (the save line is tool-neutral).

Judgment calls
- Steps 1 to 3 run in one chat because each builds on the one before; Steps 4, 5 and Go further open a new chat inside the partner so the saved setup does the work.
- Step 2 opens directly with its prompt; the trail line and the hook carry its why.
- The lessons-file rule is conditional: where the partner can edit files (a folder) it adds the line itself; in a Claude project, knowledge files are not editable from a chat, so it hands over the line.
- Go further has no prompt block, to stay under the cap; the bullets are complete enough to ask for in plain words. A team-agent prompt (drafted, about 110 words) can come back if Nufar wants it and accepts trimming elsewhere.
- The install line names Claude, monday agents, and Cursor / Codex / Claude Code; ChatGPT left out because Monday has little GPT.
- Proof of work asks for one way you differ from the field and one lesson, so it is tied to Steps 2 and 5.
- next and Related adventures moved to Advanced Skill Patterns and Your Team's AI Blueprint; Skills is linked in Before you start.
- The page sits at about 2,295 words, close to the 2,300 cap: any later addition needs a matching cut.
- 10 Nov: second kind added on Nufar's word (an expert in a field you lean on but do not master). Hook names both kinds and draws the line to AI as Your Tutor (the tutor teaches you a topic; this partner does and reviews work in it with you); Step 1 interview asks which kind, and for the second kind where you need help, where you get stuck and who the company's real experts are; Step 2 lets field.md run to 1,200 words and adds the company's handling (policies, owners, approved tools, who signs off) to our-way.md; Step 3 adds a rule to explain plainly, name the company expert a question needs and never act as the final word, and a page line that it complements those teams and never replaces them. Made room by cutting the Step 1 question on what the company does differently (Step 2 owns it), the think-first question on generic AI answers, the hook's list of what you build (the trail carries it), and by shortening the later dictation lines, the install line and several phrases. Page at 2,299 words.

Open items
- Keren Q2: skills added by each employee, or provisioned by an admin? Affects Step 4 and the team agent's skills.
- Shared Claude projects at Monday: confirm projects can be shared with teammates on Monday's plan (Go further names them as an example home).
- Claude projects with connected Drive folders and monday boards: confirm on Monday's plan (carried over).
- monday agents: confirm skills in the Profile tab, and whether a monday agent can hold our-way.md and field.md as files.
- Fresh-chat prompt test pending (playbook step 4), especially field.md research quality and the confidence rubric, the skill prompt in Claude and a monday agent, and the lessons-file rule in a project vs a folder.
-->

# 💼 Build Your Professional Partner

**Build an AI partner with ten years of expertise in your function or in a field you lean on, and make it sharper with every review.**

## Why this adventure

Picture a colleague with ten years in your function. They know the methods your field debates, the benchmarks worth trusting, the mistakes people repeat, and how your company does things differently. Or picture that colleague in a field you lean on but do not master, for example finance for a marketing lead, or a technical domain for someone outside engineering.

Here you build that colleague as an AI partner. Already have one? Start at Step 2; the bar is a partner that knows where your way differs from the field.

Your partner holds the craft of a field; a Personal Brain holds context about you. AI as Your Tutor teaches you a topic; this partner does and reviews work in it with you. For other needs, do Your Own Chief of Staff (calendar and commitments), Managing with AI (people) or Build Your Board of Advisors (one decision from several angles).

## The trail

1. **Choose the domain and the bar**, so you build an expert you will use every week.
2. **Build its expertise pack**: your company's way and the field's current practice.
3. **Write its job description and ways of working**: do, review and push back.
4. **Turn tasks into skills and run real work**, to your bar every time.
5. **Improve it from feedback**, so every review makes it better.

## Before you start

Have two or three documents your work runs on, for example a framework, your KPI definitions or a company policy. If you have never built a skill, start with Skills: When, How and How Well.

## Step 1: Choose the domain and the bar

A partner covers one domain and several recurring tasks in it, for example:

- a Renewal Coach for QBR prep, churn-risk reads and renewal plans
- a Reliability Advisor for incident write-ups, design reviews and tech debt priorities

**Think first for yourself, without AI.**

- Which recurring tasks need the most quality, or expertise you do not have?
- What would someone with ten years in your world know that you do not?

### Prompt: My partner's domain and bar

**What this does:** the AI interviews you about your thoughts and proposes your partner's domain, KPI, tasks and limits.

Copy the prompt below into a new chat in an AI tool, ideally where you will do the actual work. Steps 1 to 3 continue in this chat. Answer its questions in writing or by voice.

```
Help me design a professional partner: an AI with the expertise of a colleague with ten years in one field, covering one domain and its recurring tasks. First ask me to brain dump or paste all my thoughts. Use what you know about me, and ask only for gaps.

Ask one question at a time. If I am vague, ask for a recent example.
1. Is this partner for my own function, or for a field I lean on but do not master? If the latter, ask where I need help or get stuck, and who my company's real experts are.
2. Which AI setups do I already use, so this partner does not repeat them?
3. Which KPI (the main number I am measured on) does this work move?
4. Which recurring tasks need the most quality?
5. What would an expert with ten years in this field know that I do not?

Do not choose the field, domain, KPI or tasks, and do not decide what good means. Then summarize: a name that says what it does, its field and domain, the KPI, four to six recurring tasks, the company experts it points me to, and what it does not cover. Wait for my approval.
```

## Step 2: Build its expertise pack

### Prompt: My partner's expertise pack

**What this does:** interviews you about your company's way, researches the field and writes where the two differ.

Stay in the same chat, turn on web search if your tool offers it, and paste the prompt below. Answer its questions in writing or by voice.

```
Build my partner's expertise pack: two files it reads before it works. Skip what this chat already answers.

1. our-way.md, the company half. Ask me to add the documents my work runs on, then interview me one question at a time about what they never capture, such as unwritten rules. Sections: frameworks (a few lines each, and when we use them); KPI definitions (good and concerning levels, with numbers); terms we use in our own way; one excellent and one poor example of our work, and why; past decisions and their reasons; for a field I do not master, also how my company handles it (policies, owners, approved tools, who signs off). Use only my documents and answers; mark gaps as TBD and label what you inferred. Show it and wait for my corrections.

2. field.md, the field half: how experts in my domain do this work today, under 800 words, or 1,200 for a field I do not master. Search the web, prefer sources from the last two years, date each source, and say who each number applies to. Sections: current practice for my recurring tasks; benchmarks for my KPI; competing methods, and when each fits; common failure modes; where we differ (each difference from our-way.md, our reason, asking me if you do not know it, and whether to keep or reconsider it). Mark each claim: confirmed (two or more independent recent sources), single source, or your own judgment. List the sources and wait for my approval.
```

**Add live sources** for what changes often: monday boards, Drive folders, and internal data such as Salesforce account history through Kremer. Monday's own data about customers is fine. Data that Monday's customers uploaded to their own monday boards never goes into Claude.

## Step 3: Write its job description and ways of working

An expert also reviews your work and tells you when you are wrong, so your partner gets three ways of working: do it, review mine and push back. In a field you lean on, it complements your company's real experts and never replaces them.

### Prompt: My partner's job description

**What this does:** writes your partner's complete instructions from everything in this chat.

Stay in the same chat and paste the prompt below.

```
Write the complete instructions for the partner we designed in this chat, under 600 words. Ask only for what is missing.
1. Role: name, domain, who it works for, and what it does not cover.
2. Craft brief: what this field is for in my work, my KPI with good and concerning thresholds, my frameworks and vocabulary.
3. Tasks, and what great output looks like for each.
4. Ways of working. "Do it" (or any task I hand over): meet my bar and list your assumptions. "Review mine": what holds, what falls short of my bar, where the field differs, and the three changes that matter most. "Push back": argue as a skeptical expert with ten years in this field, with evidence from field.md; do not soften it to agree with me.
5. Rules: read our-way.md and field.md before you work. Reason with my frameworks first. Tie advice to my KPI. Ask when context is missing. Mark what you could not verify as UNVERIFIED.
6. For a field I do not master: explain in plain words, name the company expert a question needs (legal, finance, security and so on), and never present yourself as the final word.
Wait for my approval.
```

**Save it now.** Ask for our-way.md and field.md as files. Paste the instructions as project or agent instructions, a monday agent included, and add the two files, your documents and the live sources. In a folder, save the instructions as CLAUDE.md if you use Claude, or AGENTS.md if you use Claude Code or Cursor.

**Test the push back.** In a new chat in your partner's project, agent or folder, ask it to push back on one way you work today. Watch for the **echo trap**: a partner that confidently repeats your views and adds no expertise. If you see it, add a competing method or benchmark to field.md. You are done when it names three disagreements you take seriously.

## Step 4: Turn tasks into skills and run real work

Build a skill for each of your top two or three tasks, so each runs the same way every time, checked against the pack.

### Prompt: A skill for one of my tasks

**What this does:** interviews you about one task and writes its skill.

Open a new chat inside your partner and paste the prompt below. Answer its questions in writing or by voice.

```
Turn one recurring task from your job description into a skill (saved instructions for one task). Read your instructions, our-way.md and field.md first, and skip what they answer. Ask which task; do not choose it.

Interview me one question at a time, and ask for a real example when I am vague: my steps, the phrases I would use to start it, what I provide each time, what a great result looks like, and the last time it went wrong. Show a short brief and wait.

Then check my tool's current documentation for its skill format. Write the complete skill: a short lowercase name with hyphens; a description of when to use it, in my phrases; steps, starting with which pack files to read; the output format as a template; a quality check against our-way.md (KPI thresholds, frameworks, the excellent and poor examples), naming any check that failed; what to do when information is missing. Show it in one block. Tell me how to add it, and to close and reopen the tool.
```

Add it in Claude under Customize → Skills, in a monday agent's Profile tab, or in the skills folder in Cursor, Codex and Claude Code. Then close and reopen your tool.

**Run one real task and review it like a new hire's work.** In a new chat inside your partner, ask for it in plain language, or type `/` and the skill's name. First decide for yourself what is right, generic or misunderstood. Then say exactly what was wrong: "You used the textbook definition of churn risk; on our team an account is at risk when usage drops two months in a row." Ask for a new version. You are done when one result goes into your real work.

## Step 5: Improve it from feedback

After a few real tasks, find the cause of each miss:

| What do you see? | What is the cause? | What is the fix? |
| --- | --- | --- |
| The answer is generic, without your company's specifics | **Context gap:** your partner lacks the reference material | Add to the pack or connect a source |
| The answer ignores a rule you care about: format, tone, priority | **Instruction gap:** the rule is missing from the instructions | Update the instructions or the skill |
| The answer is confidently wrong about facts or reasoning | **Model limitation:** the model cannot do this reliably | Use a stronger model, check the facts elsewhere, or keep that part for yourself |

### Prompt: Diagnose and improve my partner

**What this does:** sorts each miss into one of the three causes, writes the fixes and starts a **lessons file**: a dated list of your corrections that your partner reads before every task.

Open a new chat inside your partner and paste the prompt below. Answer its questions in writing or by voice.

```
I have used you for real work; help me improve you. Use our earlier chats here as evidence. Ask me one question at a time: what to keep, what you keep missing, and what I keep correcting by hand.

Name each problem's cause and fix: context gap (you lack information; add text to our-way.md or field.md, or a source), instruction gap (your instructions or a skill miss it; add a rule) or model limitation (you cannot do it reliably; I change how I use you).

Show a table: problem, cause, fix. Then write the text to add to the pack, with its file; your complete updated instructions, with the changes marked; and lessons.md, started from this review. Add this rule: read lessons.md before every task; after each review, add a dated line (what I corrected, and the rule that follows), or give me the line if you cannot edit files here. Wait for my approval.
```

Save everything you approve. You are done when the next real task comes back without the mistakes you corrected.

## Go further

**Turn it into a team-level agent**: a digital team member for teammates who do the same work. In a new chat inside your partner, ask it to build the team version with you:

- Keep the shared craft: frameworks, KPI definitions, vocabulary, the quality bar, field practice.
- Strip out your personal preferences: tone, formats, shortcuts.
- Give it an owner who approves changes, and a home the team reaches, for example a shared Claude project or a monday agent.
- State what it may do and what it may never do.
- Decide who keeps each pack file current, and when.

## Proof of work

In "what I built", write your partner's name, one way you differ from the field, and one lesson it learned.

For example: "Renewal Coach. We weigh product usage above survey scores, unlike most of the field. Lesson: at risk means usage drops two months in a row."

## Related adventures

- **Advanced Skill Patterns**: make your partner's skills work together.
- **Your Team's AI Blueprint**: see where a team agent fits in your team's AI.
