---
slug: research-done-right
emoji: 🔎
icon: magnifier
title: "Research Done Right"
walkaway: "A research brief on a question you actually needed answered, and a method for the next one"
category: Create with AI
levels: [Intermediate, Advanced]
professions: [Everyone, Marketing, Product, Customer Facing, Finance]
audience: []
tool: Any AI tool
effort: 1 hour
video: /videos/research-done-right.mp4
outcome: Learn something
pattern: INT + PANEL
wave: W2
slot: 7
next: [making-decisions-with-ai, board-of-advisors]
source: "Adapted from Executive Catch-Up Project 4 (catch-up-may/content/week-2/project-4-research-analyst.md: nine-line research brief, Research Analyst instructions, 3-Point Verification, Deep Research comparison, Research Panel aggregation, visualise step, paste-interview-replace customisation) and its reference card (project-4-reference-card.md: methodology table, When to Use What). Never edit the Catch-Up originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 7 [Inbar 8])
- Kept: the nine-line brief (merged to eight lines: constraints folded into scope), the Research Analyst research principles and output format ("Before you act, verify"), the 3-Point Verification, "find me the primary source or tell me you cannot", the "too safe" coaching line, the panel aggregation framework (consensus, single-source, contradictions, missing perspectives, confidence 1-10), the different-vendors rule, the visualise prompt (shortened), paste-interview-replace (folded into the method prompt).
- Cut: worker / Global Identity / Rules of Engagement / Falcon / Path B references, the per-tool Deep Research table (one In Claude line instead), the Sarah Chen example, Master steps 8-10 as separate steps (second question folded into Step 4), the Research Protocol, the audio and slides formats, the curiosity prompt and Go deeper links.
- Added for Monday: an explicit search-strategy step with a sources table (monday boards, Kremer for Salesforce and other internal data, Drive / Slack / mail), a Monday worked brief (Product, financial-services audit logs), profession examples, monday board as destination for the brief and the visual, a thinking step without AI before the first prompt.
- Panel reshaped to Inbar's promise: several AI researchers with different angles, each from real sources, one summary you challenge. Different-vendor tool and sub-agents offered conditionally.

Open items
- Claude Research mode: menu path ("tools menu in the chat box") taken from the Catch-Up card; confirm it is enabled on Monday's Claude Enterprise and the label is current.
- Second AI tool from a different company (Gemini, ChatGPT): unknown whether Monday employees have one; Go further words it conditionally.
- Sub-agents for the panel: Claude Code, Cursor or Codex access pending Keren Q4.
- next: making-decisions-with-ai is provisional until that file exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
23 Oct: do-this line on every prompt (sub-agent sentence in Go further cut for budget)
-->

# 🔎 Research Done Right

**Answer a real work question with research you can trust, and keep the method for the next question.**

## Why this adventure

A research question typed into a chat comes back as a confident, well-written answer. You still do not know which sources it used, what it left out, or whether it answers the decision you face.

Good research starts before any searching: a precise question, clear limits and a plan for where to look. Then you check the result before relying on it.

Here you do this on one real question from your work, and save the method.

## The trail

1. **Frame the question**, so the research answers the decision you face.
2. **Plan the search and choose the sources**, because the sources decide the quality of the answer.
3. **Run the research and check it**, before anyone relies on it.
4. **Save the method**, so your next question starts from it.

## Before you start

Bring one real question you need answered for a decision at work.

## Step 1: Frame the question

Good questions at Monday: what changed in a key account's industry before a renewal, which messages competitors used in recent launches, how public software companies explain net revenue retention.

**Think first, without AI.** Close the chat. Write down the question, the decision it serves, what you already know, and the answer you expect.

### Prompt: Sharpen your research question

**What this does:** the AI turns your notes into a research brief for your approval.

Open a new chat in Claude (or the AI tool you use) and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me turn a research need into a research brief. I will paste or dictate my notes. Use what you know about me; ask only for what is missing, one question at a time. If an answer is vague, ask for a recent example.

The brief has eight lines:
1. Question: one specific sentence.
2. Decision: what this research will inform, and by when.
3. Scope: time horizon, geography, and anything off the table.
4. Trusted sources, in order of trust.
5. Exclude: sources to leave out, and why.
6. Already known: what the research can skip.
7. Assumptions and lean: what I expect, and which way I lean. Challenge it.
8. Output: format, length, and a confidence rating on every claim.

If my question is too broad, propose a narrower version and say why. Show the brief as a two-column table. Stop and wait for my approval.
```

A finished brief, from a product manager:

| What goes here | Example |
| --- | --- |
| **Question** | Do financial-services buyers now require an audit log of AI actions before they approve a work-management tool? |
| **Decision** | Whether to put AI audit logs on next quarter's roadmap |
| **Scope** | Last 12 months; EU and US; vendor acquisitions are off the table |
| **Trusted sources** | Regulators, vendor documentation, analyst reports, then customer conversations |
| **Exclude** | Vendor marketing pages and press releases |
| **Already known** | The three requests on our feature-request board |
| **Assumptions and lean** | We lean toward building it. Challenge that. |
| **Output** | One page, a confidence rating on every claim |

Save the approved brief on the monday board where the decision lives.

## Step 2: Plan the search and choose the sources

A search plan splits the question into smaller ones and says where to look for each:

| Where to look | Best for |
| --- | --- |
| Official sources: regulators, vendor documentation, company filings | Facts you will quote |
| Analyst and industry reports | Trends; check the date and who paid for the report |
| Communities and reviews | How real users experience something; each post is one voice |
| monday boards | Customer requests, account history, project status |
| Internal data, including Salesforce, through Kremer | Revenue, usage, pipeline |
| Drive, Slack and mail | Past decisions and earlier research |

### Prompt: Plan the search

**What this does:** turns your approved brief into a search plan for your approval.

Stay in the same chat and paste the prompt below.

```
Plan the research for the research brief I approved above, or ask me to paste it.

1. Break the question into three to six sub-questions. For each: where to look, the search terms, and what would count as strong evidence.
2. List the sources in the order of trust from my brief. Include internal sources where they help: monday boards, Drive, Slack, mail, and internal data through Kremer.
3. List the sources you will exclude, and why.
4. Name one way this plan could miss the truth, for example finding only sources that agree with my lean.

Stop and wait for my approval. Start searching only after I approve.
```

If every source in the plan is likely to agree with you, ask for a change.

## Step 3: Run the research and check it

For a narrow question, web search is enough. For several sub-questions, use a deep research mode: the AI runs many searches on its own and writes a cited report.

**In Claude:** turn on Research in the tools menu of the chat box.

### Prompt: Run the research

**What this does:** runs the approved plan and returns a report that separates evidence from opinion.

Stay in the same chat and paste the prompt below.

```
Run the research, following the research brief and the search plan I approved above.

Rules:
- Cite a specific source for every factual claim, or say that you cannot.
- Label each finding as sourced evidence or your own analysis.
- Rate each finding's confidence as low, medium or high, with the reason.
- When sources disagree, show both and say which is more credible and why.
- If the evidence contradicts my assumptions or my lean, say so directly.

Output:
1. A one-paragraph summary that answers my question.
2. Key findings, numbered, each with its source and confidence.
3. What is missing: open questions, and the data that would answer them.
4. "Before you act, verify": the three claims most worth checking myself, and why.
```

AI tools sometimes cite a page that does not support the claim, or present an old source as current. Check with three questions:

| Ask yourself | How to check |
| --- | --- |
| **Is it grounded?** | Open the sources behind the three claims under "Before you act, verify". Does each source say what the report claims? |
| **What is missing?** | Did it answer the exact question in your brief? Which counterevidence is absent? |
| **Would you put your name on it?** | If a colleague asks "where did you get that?", you can answer for every key claim. |

When a claim fails, say exactly what you need: "Find the primary source for the claim that EU banks require AI audit logs, or tell me you cannot." When the answer is too careful: "Give me a direct answer with your honest confidence."

You are done when you can answer your question in two sentences and name the source behind each.

## Step 4: Save the method

### Prompt: Your Research Analyst

**What this does:** turns the method from this chat into standing instructions for a research project you reuse.

Stay in the same chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Write standing instructions for my Research Analyst: a project I will use for every important research question. Base them on the research we did in this chat. First interview me, one question at a time: the questions I research most often, the sources I trust and distrust in my field, and the formats my readers prefer.

The instructions must include:
1. Before researching, interview me and write a research brief with eight lines: question, decision, scope, trusted sources, exclude, already known, assumptions and lean, output. Wait for my approval.
2. Then write a search plan with sub-questions and sources. Wait for my approval.
3. Research rules: a source for every claim, evidence labelled apart from analysis, confidence on every finding, disagreements shown, my assumptions challenged.
4. The output format we used in this chat, ending with "Before you act, verify".

Keep it to one page. Ask me to approve it.
```

**In Claude:** create a project named Research Analyst and paste the instructions there.

Test it on a second question, and ask it to write any fix into its instructions.

## Go further

**Run a research panel.** Do this for a high-stakes decision, where one researcher's blind spots matter.

**What this does:** four AI researchers with different angles work separately, then one summary shows where they agree and split.

Stay in the same chat and paste the prompt below.

```
Run a research panel on the research brief above. A research panel is several researchers, each with a different angle, working on the same question separately, followed by one summary.

1. Propose four angles that fit my question, for example the customer, the competitor, the numbers and the skeptic. Wait for my approval.
2. Research the question from each angle separately, from real sources, with a source for every claim.
3. Summarise in this order:
   - Consensus: where most researchers agree (likely reliable)
   - Single-source claims: found by one researcher only (verify these)
   - Contradictions: where they disagree, and which side has stronger sources
   - Missing: what none of them considered that a skeptical decision-maker would ask
   - Recommendation, with a confidence rating from 1 to 10
```

Then challenge the summary: "What would have to be true for the opposite conclusion?" and "Which finding rests on the weakest source?" If you also have an AI tool from another company, run one angle there for different blind spots.

**Turn the report into a visual.** Do this when readers will only glance at the research before a decision.

**What this does:** turns your research report into a one-page visual, after you approve a plan.

Stay in the same chat and paste the prompt below.

```
Turn the research report above into a one-page visual. First ask me who will read it and what they will decide. Make the most important finding impossible to miss, show each finding's confidence, and keep the sources visible. Show me your plan and wait for my approval before you build it.
```

Check every number against the report, then share the visual on the decision's monday board.

## Proof of work

In "what I built", name the question you researched, the finding that mattered most and its source, and one thing you learned.

For example: "AI audit logs for financial-services buyers. Two regulator sources confirmed the need for EU banks; one claim traced to a vendor blog, so I dropped it. I learned to write down my expected answer before I search."

## Related adventures

- **Making Decisions with AI**: decide with the evidence, with AI arguing against the answer you expect.
- **Build Your Board of Advisors**: stress-test the decision your research supports.
