---
slug: making-decisions-with-ai
emoji: ⚖️
icon: scale
title: "Making Decisions with AI"
walkaway: "Personal rules of engagement, tested on a live decision and saved for next time"
category: Work smarter with AI
levels: [Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: Quick win
outcome: Work differently
pattern: PANEL
wave: W2
slot: 3
next: [board-of-advisors, your-ai-identity]
source: "Adapted from Executive Catch-Up Project 2, Your Rules of Engagement (catch-up-may/content/week-1/project-2-rules-of-engagement.md: Steps 1-6, Step 10 scenario test, Step 12 assumptions prompt) and its reference card (project-2-reference-card.md: the decide/challenge intent framing, the tripwire). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 3 [Inbar 4])
- Kept: real decision in one chat; the sycophancy trap (weak pushback, push twice); the antidotes (case against, forced single recommendation with confidence, "what would change your mind", tripwire); verification of facts the AI relied on; rules of engagement written from what actually happened; scenario test (three futures) and the assumptions-about-me prompt, both in Go further.
- Cut: glossary, "Understand the Why" block and research links, Expert/Master tiers, steelman-with-ratings prompt (merged into Challenge my decision), geography test, debate technique, demographic test, decision framework, audio reflection, Sarah Chen example, Catch-Up cross-references (Project 3, Chief of Staff week).
- Added for Monday: the design-notes three sections (how to brainstorm with me, known biases and counters, how we decide together); a no-AI thinking step before the prompts; a no-AI decide moment with the accepted counter-argument recorded (PANEL "dissent recorded"); monday board as source and destination; Kremer in passing; bias detection in the framing (the Inbar promise); a test of the saved rules in a fresh chat.
- Inbar's comment (resembles the context-building exercise in Monday's Agents 101): handled in one line in Step 4 ("these rules extend that context"), without naming the training or making it a prerequisite.

Judgment calls
- Effort is Quick win: the guide says under 1,000 words, the writer brief under 1,800. Landed at ~1,510 (other Quick wins: 1,085-1,604). Getting to 1,000 would mean cutting Go further entirely and the Step 2 table; Nufar's call.
- Strong models (Opus with extended thinking) may resist weak pushback in Step 2. The table has a row for that case, so the step teaches either way. Nufar may prefer telling people to run Step 2 on a fast model (Sonnet) to make the effect visible; left out pending her call.
- Decision examples avoid people decisions (hiring, restructuring) to stay clear of people data.

Open items
- "Settings → Instructions for Claude" path copied from Stay Original; confirm on Monday's Claude Enterprise.
- next: your-ai-identity exists; board-of-advisors exists.
- Prompt test in a fresh Claude chat: pending (playbook step 4).
-->

# ⚖️ Making Decisions with AI

**Get a real challenge from AI on the decisions that matter, and save the rules that make it challenge you every time.**

## Why this adventure

AI models tend to agree with the person they talk to. AI researchers call this sycophancy: during training, people rated agreeable, confident answers highly, so models learned to agree. On a decision, the AI often hands your own view back to you, in better words.

The fix is in how you ask. You take one real decision, see how AI flatters you when you ask the usual way, then ask so that it argues against you, finds the biases in your framing and attacks your plan. You finish with your rules of engagement: standing instructions for how AI should think and decide with you.

## The trail

1. **Write down your decision and your view**, because AI leans toward whatever view you show it.
2. **See how AI flatters you**, so you recognise agreement when it happens.
3. **Run the decision the right way**, to get a real challenge and a better decision.
4. **Write your rules of engagement**, so your AI challenges you on every decision that matters.

## Before you start

Use a strong model for this adventure, for example Opus, with extended thinking on.

You will work on one real work decision you are weighing now.

## Step 1: Write down your decision and your view

Good decisions to use: which features go into the next release, whether to change the QBR format for enterprise accounts, which segment a campaign targets, whether to offer a discount to save a renewal, how to restructure a workflow across your monday boards.

**Think first, without AI.** Close the chat. In a note, write:

- The decision and the options you see
- The option you lean toward, and how sure you are, as a percentage
- Why you lean that way
- What would make you change your mind

Keep this note. You will paste it into the prompts in Step 2 and Step 3.

## Step 2: See how AI flatters you

### Prompt: The usual way to ask

**What this does:** presents your decision as already made, the way many people ask, so you can see how the AI responds.

```
I have made a decision. I will paste my notes now: the decision, the options and the one I chose. I am confident it is the right call. What do you think?
```

Now disagree with a weak reason, for example "My gut says the other option" or "A colleague tried this once and it failed." If the AI keeps its view, push back once more. Then compare what you saw with this table.

| What you may see | What it means |
| --- | --- |
| The AI agrees with your choice and adds reasons for it | It followed your framing. You received your own view back, with more confidence. |
| The AI changes its view after your weak reason | Its advice moves with your mood. Agreement is winning over analysis. |
| "Both options have merit" | It avoids committing. You still make the call alone. |
| A number, report or case study you have never seen | It may be invented. Check it before you rely on it. |
| The AI holds its view and explains why | Good. Note what made it hold: you will want the same in your rules. |

Write one line about what happened. You will use it in Step 4.

## Step 3: Run the decision the right way

Open a new chat, so the agreement from Step 2 stays behind. If the decision depends on data, connect the monday board where the work lives, or reach account and pipeline data through Kremer.

### Prompt: Challenge my decision

**What this does:** the AI asks for missing facts, argues against your leaning, names the biases in how you framed the decision, and attacks your plan before it gives one recommendation.

```
I am weighing a decision and I want a real challenge, even when it goes against my view. I will paste my notes: the decision, the options, my leaning and my confidence. Use what you know about me; ask only for gaps, one question at a time.

Then:
1. Argue the strongest case against my leaning.
2. Name the biases in how I framed the decision, in plain words (for example: I listed only two options). Quote the words in my notes that show each one.
Stop and wait for my response.

Then:
3. Imagine my leaning failed a year from now. Give the three most likely reasons.
4. Give one recommendation, your confidence as a percentage, and a tripwire: "If this happens, reconsider."
5. List the facts you relied on and mark the ones I must verify.
```

Then push back with the weak reason from Step 2. The AI should now hold its view. If it gives in, say: "You changed your view with no new fact. Go back to your analysis."

**Decide, without AI.** Close the chat and write two lines: what you decided, and the strongest argument against it that you accept as a known risk. Add these two lines to the monday board item where the work is tracked, so the reasoning stays with the work.

## Step 4: Write your rules of engagement

Rules of engagement are standing instructions for how AI should brainstorm, challenge and decide with you. If you already gave your AI context about you and your work, these rules extend that context with how you want it to think with you.

Reopen the chat where you ran the Challenge my decision prompt, and have your one line from Step 2 ready.

### Prompt: My rules of engagement

**What this does:** the AI interviews you and turns this decision into one page of rules any AI can follow.

```
Help me write my rules of engagement: standing instructions for how AI should brainstorm, challenge and decide with me. Use this chat and what you know about me. I will also tell you how an AI responded when I presented the decision as already made.

Interview me one question at a time:
1. How do I like to brainstorm with AI? For example: my view first or options first, bold ideas or practical ones.
2. Which biases did this decision show, and which do I recognise from past decisions? How should AI counter each one?
3. For decisions that matter, which steps should AI always run with me?

Then write one page in three sections: How to brainstorm with me, My known biases and how to counter them, How we decide together. One line per rule, in first person, so any AI can follow it. Wait for my approval.
```

Save the page where your AI reads it in every chat.

**In Claude:** paste it into Settings → Instructions for Claude, or into the instructions of the project you use for decisions.

Then test it: open a new chat and ask about a small decision the usual way, as in Step 2. You are done when the AI challenges you without being asked.

## Go further

**Test your decision against three futures.** Do this when the decision depends on things outside your control, such as a market change or a competitor move.

**What this does:** checks whether your decision holds in three futures and gives you a tripwire for each.

```
Test my decision against three futures. Use the decision in this chat; if there is none, ask me for it.
1. The main assumption behind it turns out wrong.
2. A competitor makes a strong move in the same space.
3. My team or the customer resists it.
For each future, say whether the decision holds and give one tripwire: "If this happens, reconsider."
```

**Find what the AI assumes about you.** Do this when your market, region or role shapes the answer. AI fills gaps with the most common case on the internet, which may be far from your situation.

**What this does:** lists the unstated assumptions behind the advice, so you can correct them.

```
List the assumptions you are making about me that I never stated: my market, region, company size, role and customers. For each one, say how it shaped your advice. Ask me to correct the wrong ones, then update your recommendation.
```

## Proof of work

In "what I built", name the decision, how the AI's answer changed between the usual way and the right way, and one rule you added.

For example: "Decided which three features go into the November release. The usual way, the AI agreed with me; the right way, it argued for a fourth. New rule: I anchor on last quarter's plan, so ask me what changed first."

## Related adventures

- **Build Your Board of Advisors**: bring several perspectives to a decision that needs more than one challenger.
- **Your AI Identity**: the standing instructions where your rules of engagement can live in every chat.
