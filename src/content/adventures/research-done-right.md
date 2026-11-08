---
slug: research-done-right
emoji: 🔎
icon: magnifier
title: "Research Done Right"
walkaway: "A research brief on a question you actually needed answered, and a research skill for the next one"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone, Marketing, Product, Customer Facing, Finance]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Learn something
pattern: INT + PANEL
wave: W2
slot: 7
next: [making-decisions-with-ai, board-of-advisors]
review: ready
video: /videos/research-done-right.mp4
source: "Adapted from Executive Catch-Up Project 4 (catch-up-may/content/week-2/project-4-research-analyst.md: nine-line research brief, Research Analyst instructions, 3-Point Verification, Deep Research comparison, Research Panel aggregation, visualize step, paste-interview-replace customization; low/medium/high confidence with the reason, panel confidence by source quality) and its reference card (project-4-reference-card.md: methodology table, 3-Point Verification, When to Use What for the Research mode item). Never edit the Catch-Up originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 7 [Inbar 8])
- Kept: the nine-line brief (merged to eight lines: constraints folded into scope), the Research Analyst research principles and output format ("Before you act, verify"), the 3-Point Verification, "find me the primary source or tell me you cannot", the "too safe" coaching line, the panel aggregation framework (consensus, single-source, contradictions, missing perspectives, confidence 1-10), the different-vendors rule, the visualize prompt (shortened), paste-interview-replace (folded into the method prompt).
- Cut: worker / Global Identity / Rules of Engagement / Falcon / Path B references, the per-tool Deep Research table (one In Claude line instead), the Sarah Chen example, Master steps 8-10 as separate steps (second question folded into Step 4), the Research Protocol, the audio and slides formats, the curiosity prompt and Go deeper links.
- Added for Monday: an explicit search-strategy step with a sources table (monday boards, Kremer for Salesforce and other internal data, Drive / Slack / mail), a Monday worked brief (Product, financial-services audit logs), profession examples, monday board as destination for the brief and the visual, a thinking step without AI before the first prompt.
- Panel reshaped to Inbar's promise: several AI researchers with different angles, each from real sources, one summary you challenge. Different-vendor tool and sub-agents offered conditionally.

Open items
- Claude Research mode (now in Go further, "turn on Research in the chat box"): confirm it is enabled on Monday's Claude Enterprise and the label is current.
- Second AI tool from a different company (Gemini, ChatGPT): unknown whether Monday employees have one; Go further words it conditionally.
- Sub-agents for the panel: Claude Code, Cursor or Codex access pending Keren Q4.
- next: making-decisions-with-ai is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt (sub-agent sentence in Go further cut for budget)
Changed 2026-11-05: think-first opener per the 23 Oct rule.
Changed 2026-11-06: light pass for Nufar's review: American spelling; "Why this adventure" brought into line with the live video script (taxi image stays video-only). Steps and prompt logic unchanged.
Changed 2026-11-08: her review notes (decision framing, sources moved to Step 2, explicit output, confidence rubric and criticality-scaled verification in the core, Research mode to Go further).
Changed 2026-11-08: Step 4 saves the method as a research skill (Nufar: serves most people better than a Research Analyst project). Before you start carries the skill prerequisite pointer (23 Oct rule); walkaway names the skill.
-->

# 🔎 Research Done Right

**Answer a real work question with research you can trust, and keep the method for the next question.**

## Why this adventure

Where did you get that? This short question can ruin a beautiful report. You type a question into a chat, and a confident, well-written answer comes back, but you do not know which sources it used or what it left out.

That happens when the search starts before the thinking. Good research starts with a precise question, clear limits and a plan for where to look. Then you check the result, because AI sometimes cites a page that does not support the claim.

Here you do this on one real question from your work, and save the method. By the end, you can answer in two sentences and name the source behind each.

## The trail

1. **Frame the question**, so the research answers the decision you face.
2. **Plan the search and choose the sources**, because sources decide the quality of the answer.
3. **Run the research and check it**, before anyone relies on it.
4. **Save the method**, so your next question starts from it.

## Before you start

Bring one real question you need answered for a decision at work. If you have never built a skill, start with Skills: When, How and How Well.

## Step 1: Frame the question

Whenever you send AI to fetch information, whether external, internal or both, there is a business decision you are trying to make. This step helps you articulate the business question and the parameters that guide the search.

**Think first for yourself, without AI.** What is the question? What decision does it serve? What do you already know? What answer do you expect?

### Prompt: Sharpen your research question

**What this does:** the AI interviews you about your thoughts and writes a research brief.

Copy the prompt below into an AI tool, ideally where you will do the actual work. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me write a research brief. Ask me to brain dump or paste all my thoughts first. Use what you know about me and ask only for gaps, one question at a time. If I already answered a question earlier in this chat, do not ask it again. If an answer is vague, ask for an example.

The brief has seven lines:
1. Question: one specific sentence.
2. Decision: what this research will inform, and by when.
3. Scope: time horizon, geography, and anything off the table.
4. Already known: what the research can skip.
5. Assumptions and lean: what I expect and which way I lean. Challenge it.
6. Criticality: who relies on the result and what a wrong answer costs, rated high, medium or low.
7. Output: the format and, for a report, its length and contents. Other formats are fine, for example an HTML page, an infographic, a deck, or a podcast made with Gemini Notebook.

If my question is too broad, propose a narrower one. Show the brief as a table. Wait for my approval.
```

A finished brief, from a product manager:

| What goes here | Example |
| --- | --- |
| **Question** | Do financial-services buyers now require audit logs of AI actions before approving a work-management tool? |
| **Decision** | Whether to put AI audit logs on next quarter's roadmap |
| **Scope** | Last 12 months; EU and US; no vendor acquisitions |
| **Already known** | The three requests on our feature-request board |
| **Assumptions and lean** | We lean toward building it. Challenge that. |
| **Criticality** | High: leadership decides on it, and a wrong call costs a quarter of engineering work |
| **Output** | One page (the answer, up to six findings with source and confidence, open questions), then one slide for the review |

Save the approved brief on the monday board where the decision lives.

## Step 2: Plan the search and choose the sources

Where to look depends on what you need:

| Where to look | Best for |
| --- | --- |
| Official sources: regulators, vendor documentation, company filings | Facts you will quote |
| Analyst and industry reports | Trends; check the date and who paid for it |
| Communities and reviews | Real user experience; each post is one voice |
| monday boards, Drive, Slack and mail | Customer requests, account history, past decisions |
| Internal data, including Salesforce, through Kremer | Revenue, usage, pipeline |

### Prompt: Plan the search

**What this does:** turns your approved brief into a search plan for your approval.

Stay in the same chat and paste the prompt below.

```
Plan the research for the brief I approved above, or ask me to paste it.

1. Ask me, one question at a time, which sources I trust most here and which to exclude, and why. Suggest any I missed.
2. Break the question into three to six sub-questions. For each: where to look, the search terms, and what counts as strong evidence.
3. List the sources in order of trust, then the excluded ones. Include internal sources where they help, for example monday boards, Drive, Slack and Kremer for internal data.
4. Name one way this plan could miss the truth, for example finding only sources that agree with my lean.

Wait for my approval before you search.
```

## Step 3: Run the research and check it

### Prompt: Run the research

**What this does:** runs the approved plan and returns a report with a citation and confidence score on every claim.

Stay in the same chat and paste the prompt below.

```
Run the research with web search and internal sources, following the brief and search plan I approved above.

Rules:
- Cite a specific source for every claim (a link or a document name), or say you cannot.
- Label each finding as sourced evidence or your own analysis.
- When sources disagree, show both and say which is more credible and why.
- If the evidence contradicts my assumptions or my lean, say so directly.
- Score each finding's confidence, with the reason. High: two or more independent, credible sources agree (independent means they do not copy each other). Medium: one credible source, or sources that partly agree. Low: a single weak, dated or self-interested source, or your own inference.

Output:
1. A one-paragraph summary that answers my question.
2. Key findings, numbered, each with its source and confidence.
3. What is missing: open questions, and the data that would answer them.
4. "Before you act, verify": the claims I should check myself, and why. If the criticality in my brief (what a wrong answer costs) is high, list every claim. Otherwise, list the three most important claims and every low-confidence one.
```

Before anyone relies on the report, check it with three questions:

| Ask yourself | How to check |
| --- | --- |
| **Is it grounded?** | Open the source behind each claim under "Before you act, verify". Does it say what the report claims? |
| **What is missing?** | Did it answer the exact question in your brief? Which counterevidence is absent? |
| **Would you put your name on it?** | If a colleague asks "where did you get that?", you can answer for every key claim. |

When a claim fails: "Find the primary source for the claim that EU banks require AI audit logs, or tell me you cannot." When the answer is too careful: "Give me a direct answer with your honest confidence."

When the report passes, ask for your brief's output in the same chat. Check every number against the report.

You are done when you can answer your question in two sentences and name the source behind each.

## Step 4: Save the method

### Prompt: Build your research skill

**What this does:** the AI interviews you, then writes your method as a research skill.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Build me a research skill from the method in this chat: saved instructions an AI tool follows whenever I start a research question. First interview me, one question at a time: the questions I research most, the sources I trust and distrust, and the formats my readers prefer.

Check my tool's current documentation for the skill format. Write the complete skill, with every brief line, rule and rubric written out in full, so it works without this chat:
- Name: short, lowercase, with hyphens.
- Description: what it does, in my phrases, so it runs on any research question.
- Step 1: interview me for the seven-line brief, one question at a time, skipping what I already answered. Wait for my approval.
- Step 2: ask which sources to trust and exclude, then write the search plan. Wait for my approval.
- Step 3: run it with the research rules and the confidence rubric.
- Step 4: deliver the output my brief names, with "Before you act, verify" scaled to its criticality.
- Three test requests.

Show the skill in one block. Tell me how to add it, and to close and reopen my tool.
```

**In Claude:** add it under Customize → Skills, then close and reopen your tool so it finds the skill.

Test it on a second question in a new chat, and ask the AI to write any fix into the skill.

## Go further

**Go deeper with Claude's Research mode.** Do this for questions that need depth.

Research mode plans, runs many searches on its own and writes a cited report. In the same chat, turn on Research in the chat box and paste the Run the research prompt again.

**Run a research panel.** Do this for a high-stakes decision, where one researcher's blind spots matter.

**What this does:** four AI researchers with different angles work separately; one summary shows where they agree and split.

Stay in the same chat and paste the prompt below.

```
Run a research panel on the brief above.

1. Propose four angles, for example the customer, the competitor, the numbers and the skeptic. Wait for my approval.
2. Research each angle separately, from real sources, citing every claim.
3. Summarize:
   - Consensus: where most researchers agree (likely reliable)
   - Single-source claims: found by one researcher only (verify these)
   - Contradictions: where they disagree, and which side has stronger sources
   - Missing: what a skeptical decision-maker would ask that none of them considered
   - Recommendation, with confidence scored by the rubric above, and the reason
```

Then challenge the summary: "What would have to be true for the opposite conclusion?" If you have an AI tool from another company, run one angle there.

## Proof of work

In "what I built", name your question, the finding that mattered most and its source, and one thing you learned.

For example: "AI audit logs for financial-services buyers. Two regulator sources confirmed that EU banks need it; I dropped a claim that traced to a vendor blog. I learned to name my expected answer first."

## Related adventures

- **Making Decisions with AI**: decide with the evidence, with AI arguing the other side.
- **Build Your Board of Advisors**: stress-test the decision your research supports.
