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
effort: 1 hour
video: /videos/making-decisions-with-ai.mp4
outcome: Work differently
pattern: PANEL
wave: W2
slot: 3
next: [board-of-advisors, your-ai-identity]
review: ready
source: "Adapted from Executive Catch-Up Project 2, Your Rules of Engagement (catch-up-may/content/week-1/project-2-rules-of-engagement.md: Steps 1-6, Step 10 scenario test, Step 12 assumptions prompt) and its reference card (project-2-reference-card.md: the decide/challenge intent framing, the tripwire). Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 3 [Inbar 4])
- Kept: a real decision in one chat; weak pushback as the sycophancy check; the antidotes (forced single recommendation with confidence, tripwire); verification of facts the AI relied on; rules of engagement written from what actually happened; scenario test (three futures) and the assumptions-about-me prompt, both in Go further.
- Cut: glossary, "Understand the Why" block and research links, Expert/Master tiers, steelman-with-ratings prompt, geography test, debate technique, demographic test, decision framework, audio reflection, Sarah Chen example, Catch-Up cross-references (Project 3, Chief of Staff week).
- Added for Monday: the design-notes three sections (how to brainstorm with me, known biases and counters, how we decide together); a no-AI thinking moment before the real decision; a no-AI decide moment with the accepted counter-argument recorded (PANEL "dissent recorded"); monday board as source and destination; Kremer in passing; bias detection in the framing (the Inbar promise); a test of the saved rules in a fresh chat.
- Inbar's comment (resembles the context-building exercise in Monday's Agents 101): handled in one line in Step 4 ("these rules extend that context"), without naming the training or making it a prerequisite.

Changed 2026-11-05, from Nufar's first review
- New flow. Step 1 shows the flattery on pineapple on pizza, in an incognito or temporary chat, with a flip and no new fact. Step 2 brings the real decision: think first, then the AI fights hard for the leaning and just as hard for the alternatives. Step 3 is Challenge my decision. Step 4 is the rules. The old Step 1 (thinking) moved into Step 2; the old "usual way" prompt on the real decision is gone.
- Decision examples are bullets, opened with "for example".
- "It may be invented" is gone. New line in Step 2: a number, report or case study you do not recognise may be out of date or wrong for your time horizon or problem; verify the source and the claims. The Step 2 prompt asks the AI to name its sources, so there is something to check.
- No written summary of the experience. Step 4 asks the person to remember what they saw in Step 1, and its first interview question draws it out. The only writing left is the decision and strongest counter-argument on the monday board item.
- Why this adventure carries Cheng et al., Science, 2026, scoped as personal advice in the sentence itself. No claim about work decisions.

Judgment calls
- Same chat for Steps 2, 3 and 4. The old reason for a new chat (leave the agreement behind) no longer applies, because Step 2 asks for both sides on purpose. This keeps the One chat per adventure rule, spares a second brain dump, and lets the rules prompt see the whole decision. The Challenge my decision prompt drops the case against, since Step 2 produced it; it still works in a fresh chat through its fallback line. Step 1 stays separate because its point needs a clean chat, and a temporary chat would not survive to Step 4 anyway.
- Incognito (she asked for pushback): kept for Step 1, because her reasoning holds. Three limits, all handled in the text. It is worded conditionally with a new-chat fallback. Step 2 returns to a regular chat, because the real decision needs the person's context. The final test in Step 4 says "where your rules apply", because a temporary chat would skip the rules and the test would falsely fail.
- Incognito removes memory and instructions; it does not remove what the model learned in training or its good judgment. A strong model may hold its view, say the flip contradicts the first message, or joke. The table covers all three, so the step teaches either way. The "holds" row now includes "points out that you changed sides", which was not in the brief.
- Weak pushback and strong models: Opus with extended thinking may resist the flip in Step 1 and the weak reason in Step 3, so the effect may not show on the strongest setting. The table handles this. Nufar may prefer telling people to run Step 1 on a fast model (Sonnet) to make the effect visible; left out pending her call. If the flip proves too easy to spot, the fallback is to state the opposite in a second temporary chat, which gives a clean comparison.
- "Squint at both" became "look closely at both cases": squint is her word but may need a second read for non-native readers. Easy to restore.
- Study wording: the brief said people rated the flattering answers as more trustworthy. The abstract says they rated the responses as higher quality and trusted the sycophantic model more, so the page says "trusted the flattering AI more".
- Pizza is deliberately trivial: not political, health-related or charged, so nobody is pushed on a sensitive view, and any answer is safe to play with.
- Effort label: Quick win is the guide's under-1,000 category, and this page is over 1,700 words, above the other Quick wins (1,085-1,604). Moderate fits better; Nufar's call. Label left as is.
- The page grew from 1,595 words. The new Argue each side prompt and the study sentence cost more than the removed usual-way prompt saved. Go further stayed untouched, as asked; it is the next place to cut.
- Step 3 has no dictation line: the prompt is no longer an interview once Step 2 has collected the thinking. It asks only what a good outcome is, then waits at the biases.
- Decision examples avoid people decisions (hiring, restructuring) to stay clear of people data.

Open items
- Resolved 5 Nov: Monday has incognito mode (Nufar). She approved the rewrite, Moderate effort and "look closely at both".
- Fresh-chat test: does Step 1 actually produce flattery in Claude on a current strong model, in both directions? Run it in incognito and in a regular chat. Pending (playbook step 4).
- Prompt test in a fresh Claude chat for the other prompts: pending (playbook step 4).
- "Settings → Instructions for Claude" path copied from Stay Original; confirm on Monday's Claude Enterprise.
- next: your-ai-identity exists; board-of-advisors exists.
-->

# ⚖️ Making Decisions with AI

**Get a real challenge from AI on the decisions that matter, and save the rules that make it challenge you every time.**

## Why this adventure

AI models tend to agree with the person they talk to. AI researchers call this sycophancy: during training, people rated agreeable, confident answers highly, so models learned to agree. In a 2026 Stanford study of personal advice across 11 AI models, AI affirmed people's actions about 49% more often than other people did, and people trusted the flattering AI more (Cheng et al., Science, 2026). So on a work decision, too, the AI can hand your own view back to you, in better words.

The fix is in how you ask. You first see the flattery on a small topic. Then you watch AI argue hard for each side of one real decision, and you ask it to find the biases in your framing and attack your plan. You finish with your rules of engagement: standing instructions for how AI should think and decide with you.

## The trail

1. **See how AI flatters you**, so you recognise it when it happens.
2. **Watch AI argue each side of your real decision**, so you judge the arguments and ignore the confidence.
3. **Run the decision the right way**, to get a real challenge and a better decision.
4. **Write your rules of engagement**, so your AI challenges you on every decision that matters.

## Before you start

Have one real work decision you are weighing now. You will bring it in Step 2.

## Step 1: See how AI flatters you

Start with a topic that does not matter, so you can watch only the AI.

### Prompt: A strong opinion about pizza

**What this does:** states a strong opinion in very few words, so you can see how the AI responds.

Open an incognito chat, so memory and instructions cannot change what you see. If your AI tool has none, open a new chat. Paste the prompt below.

```
Pineapple ruins pizza. I am right, aren't I?
```

Now state the opposite in the same chat, with the same confidence and no new fact: "Actually, pineapple makes pizza better. I am right, aren't I?" Then compare what you saw with this table.

| What you may see | What it means |
| --- | --- |
| The AI agrees and adds reasons | You received your own view back, with more confidence. |
| The AI changes its view when you flip, with no new fact | Its answer moves with your mood. |
| "Both have merit" | It avoids committing. You still make the call alone. |
| The AI plays along or makes a joke | It matched your tone and gave no real view. |
| The AI holds its view, or points out that you changed sides, and explains why | Good. Notice what made it hold: you will want the same in your rules. |

## Step 2: Watch AI argue each side of your real decision

Now bring your real decision. Good ones to use, for example:

- which features go into the next release
- whether to change the QBR format for enterprise accounts
- which segment a campaign targets
- whether to offer a discount to save a renewal
- how to restructure a workflow across your monday boards

**Think first for yourself, without AI.**

- What is the decision, and which options do you see?
- Which option do you lean toward, and how sure are you, as a percentage?
- Why?
- What would make you change your mind?

If the decision depends on data, connect the monday board where the work lives, or reach account and pipeline data through Kremer.

### Prompt: Argue each side

**What this does:** the AI fights as hard as it can for your leaning, then just as hard for the alternatives.

Open a new regular chat in an AI tool, so it can use what it knows about you, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
I am weighing a decision. Ask me to brain dump or paste all my thoughts on this before you start: the decision, the options, my leaning, how sure I am and why. Use what you know about me for background; ask only for gaps, one question at a time. Do not frame the decision for me.

Then:
1. Fight as hard as you can for my leaning.
2. Fight just as hard for the alternatives, one at a time.

Name your source for each number, report or case study. Do not say which side you prefer.
```

Both cases can sound convincing, so the AI's confidence is not evidence. Look closely at both and start to make up your own mind.

**Check what it cites.** A number, report or case study you do not recognise may be out of date, or wrong for your time horizon or your problem. Verify the source and the claims.

## Step 3: Run the decision the right way

### Prompt: Challenge my decision

**What this does:** the AI names the biases in how you framed the decision and attacks your plan before it gives one recommendation.

Stay in the chat from Step 2 and paste the prompt below, because it works from your thinking and the cases there.

```
I want a real challenge on this decision, even when it goes against my view. Use the decision and the cases in this chat. If there are none, ask me to brain dump or paste all my thoughts first, then argue the strongest case against my leaning. Do not decide what a good outcome is; ask me what it is.

Then:
1. Name the biases in how I framed the decision, in plain words (for example: I listed only two options). Quote my words that show each one.
Stop and wait for my response.

Then:
2. Imagine my leaning failed a year from now. Give the three most likely reasons.
3. Give one recommendation, your confidence as a percentage, and a tripwire: "If this happens, reconsider."
4. List the facts you relied on and mark the ones I must verify.
```

Then push back with a weak reason, for example "my gut says the other option". The AI should hold its view. If it gives in, say: "You changed your view with no new fact. Go back to your analysis."

**Decide, without AI.** Then add your decision and the strongest argument against it to the monday board item where the work is tracked, so the reasoning stays with the work.

## Step 4: Write your rules of engagement

Rules of engagement are standing instructions for how AI should brainstorm, challenge and decide with you. If you already gave your AI context about you and your work, these rules extend that context with how you want it to think with you.

### Prompt: My rules of engagement

**What this does:** the AI interviews you and turns this decision into one page of rules any AI can follow.

Stay in the chat from Steps 2 and 3 and paste the prompt below. Remember what you saw in Step 1, because the AI will ask about it. Answer its questions in writing, or by voice if your tool has dictation or you use a dictation tool.

```
Help me write my rules of engagement: standing instructions for how AI should brainstorm, challenge and decide with me. Use this chat and what you know about me.

Interview me one question at a time:
1. How did an AI respond when I stated a strong opinion, then the opposite with no new fact?
2. How do I like to brainstorm with AI? For example: my view first or options first, bold ideas or practical ones.
3. Which biases did this decision show, and which do I recognise from past decisions? How should AI counter each one?
4. For decisions that matter, which steps should AI always run with me?

Then write one page in three sections: How to brainstorm with me, My known biases and how to counter them, How we decide together. One line per rule, in first person, so any AI can follow it. Wait for my approval.
```

Save the page where your AI reads it in every chat.

**In Claude:** paste it into Settings → Instructions for Claude, or into the instructions of the project you use for decisions.

Then test it: open a new chat where your rules apply and ask about a small decision the way you asked in Step 1. You are done when the AI challenges you without being asked.

## Go further

**Test your decision against three futures.** Do this when the decision depends on things outside your control, such as a market change or a competitor move.

**What this does:** checks whether your decision holds in three futures and gives you a tripwire for each.

Go back to the chat where you ran the Challenge my decision prompt and paste the prompt below.

```
Test my decision against three futures. Use the decision in this chat; if there is none, ask me for it.
1. The main assumption behind it turns out wrong.
2. A competitor makes a strong move in the same space.
3. My team or the customer resists it.
For each future, say whether the decision holds and give one tripwire: "If this happens, reconsider."
```

**Find what the AI assumes about you.** Do this when your market, region or role shapes the answer. AI fills gaps with the most common case on the internet, which may be far from your situation.

**What this does:** lists the unstated assumptions behind the advice, so you can correct them.

Stay in the chat that gave you the advice and paste the prompt below.

```
List the assumptions you are making about me that I never stated: my market, region, company size, role and customers. For each one, say how it shaped your advice. Ask me to correct the wrong ones, then update your recommendation.
```

## Proof of work

In "what I built", name the decision, what you saw when the AI argued each side, and one rule you added.

For example: "Decided which three features go into the November release. The AI argued hard for my plan, then just as hard for a fourth feature, so I checked the usage data myself. New rule: I anchor on last quarter's plan, so ask me what changed first."

## Related adventures

- **Build Your Board of Advisors**: bring several perspectives to a decision that needs more than one challenger.
- **Your AI Identity**: the standing instructions where your rules of engagement can live in every chat.
