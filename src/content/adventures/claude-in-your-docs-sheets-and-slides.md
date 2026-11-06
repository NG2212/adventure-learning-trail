---
slug: claude-in-your-docs-sheets-and-slides
emoji: 📄
icon: document
title: "Claude in Your Docs, Sheets and Slides"
walkaway: "Three pieces of real work done inside your Google files, and a clear rule for when to stay in the file and when to move to a Claude chat"
category: Create with AI
levels: [Foundations, Intermediate]
professions: [Everyone, Finance]
audience: []
tool: Claude
effort: 1 hour
video: /videos/claude-in-your-docs-sheets-and-slides.mp4
outcome: Learn something
pattern: TOUR + BUILD
wave: W1
slot: 13
next: [creating-apps-with-ai-done-right, de-slop]
source: "New (inventory row: no earlier source). Built on the launch facts of Claude for Google Workspace (public beta, 6 Oct 2026) and the TOUR skeleton in BUILD-PLAYBOOK.md. Borrowed moves: plan-then-approve gates and the specific-feedback line from content/adventures/de-slop.md; 'list what you could not confirm' from content/adventures/your-own-chief-of-staff.md."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 13 [Inbar 9])
- New adventure; the inventory names no reuse source. Shape = TOUR (three hands-on capabilities on real work) ending in a personal routing rule (Step 4), plus one BUILD move (a Doc created from several sources in a chat).
- Kept from siblings: approve-a-plan-before-edits gates, "say exactly what is wrong" feedback line (Stay Original), "list what you could not confirm" (Chief of Staff).
- Added for Monday: forecast, renewal list and campaign Sheets; QBR summary, release notes, incident write-up Docs; QBR and team update decks; monday boards and Kremer in the file-or-chat table and the chat prompt. Inbar's comment c4 ("people use the Google connector a lot") is answered by the chat fallback in Step 1 and by Step 4.
- Teaching per step: Sheets = describe the data first, formulas that point to source cells, results in a new tab; Docs = plan, approve, edit section by section, facts untouched; Slides = one message per slide, titles as messages, detail to speaker notes; Step 4 = where each kind of work belongs.
- Length: ~1,540 words by the lint count, inside the writer brief's 1,800 cap and above the guide's ~1,000 Quick win budget, because the promise to Inbar names four moves (Sheet, Doc, deck, file-or-chat), each with its own prompt. Cut candidates if Nufar wants a true Quick win: the second Go further item and the third related adventure. Every step works from a chat with the Google Drive connector as a fallback.

Open items
- Keren Q1: is Claude for Google Workspace installed at Monday, and from when? Steps are written as if it is, with the chat fallback in Step 1. If it is not installed by 9 Nov, either move the adventure to a later wave or lead with the chat path.
- Exact way to open Claude in a file ("the side panel on the right of the file") is provisional; confirm the menu path or icon hands-on.
- Can people choose the model (Opus) and extended thinking inside the side panel? The standard model sentence assumes yes.
- Can the side panel write formulas into a new tab and edit speaker notes in Slides? Both follow from "reads, selects and edits the open file"; hands-on check pending.
- Google Drive connector at Monday: name as it appears, and whether it creates Docs in the person's Drive (Step 4 prompt).
- Unified Claude reaches all orgs 10 Nov 2026; wording of "a regular Claude chat" may need a sweep.
- Prompt test in a fresh Claude chat and in the side panel: pending (playbook step 4).
23 Oct: do-this line on every prompt
-->

# 📄 Claude in Your Docs, Sheets and Slides

**Work with Claude inside the Google file you have open, and know when a chat is the better place.**

## Why this adventure

A lot of your work at Monday lives in Google files: the forecast in a Sheet, the QBR summary in a Doc, the team update in a deck. Working on them with Claude used to mean copying content into a chat and pasting the answer back.

Claude for Google Workspace removes that step. It opens in a side panel next to the file you have open in Google Docs, Sheets or Slides, reads the file, and edits it in place. It is new (a public beta since October 2026), so this adventure helps you learn it properly on three pieces of real work, and learn when a regular Claude chat is still the better place.

## The trail

1. **Analyse a Sheet**, because numbers are where checking Claude's work matters most.
2. **Improve a Doc in place**, to practise approving a plan before Claude edits.
3. **Tidy a deck**, so every slide carries one clear message.
4. **Choose the file or the chat**, so you know where each kind of work belongs.

## Before you start

Have three real files you are working on this week: a Sheet, a Doc and a Slides deck.

## Step 1: Analyse a Sheet

Open a Sheet with real data, for example a forecast, a renewal list, campaign results or survey answers. Open Claude from the side panel on the right of the file. Claude for Google Workspace is installed by Monday's Google Workspace admin. Every step on this page also works in a regular Claude chat with the Google Drive connector: name the file and paste the same prompt.

Before Claude edits anything, know how to undo: **File → Version history → See version history** returns any Google file to an earlier version.

| Ask Claude for | Why it matters |
| --- | --- |
| A description of the data before any analysis | You see early if Claude read the wrong tab or misread a column |
| Formulas that refer to the source cells | The numbers update with the data, and you can check each one |
| Results in a new tab | Your original data stays exactly as it was |

### Prompt: Analyse this Sheet

**What this does:** Claude describes the data, asks what decision it should support, and writes its findings with formulas in a new tab after you approve the plan.

Paste the prompt below into the Claude side panel of your Sheet. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me analyse the data in this Sheet. First describe it in three lines: the tabs, the columns, the date range and the number of rows. List anything that looks wrong, such as empty cells, duplicates or mixed formats.

Then ask me, one question at a time, what decision this data should support and who will read the result.

Propose an analysis plan in up to five lines. Stop and wait for my approval. Then write the results in a new tab named "Claude analysis":
1. The three findings that matter most for that decision, one sentence each
2. Next to each finding, a formula that refers to the source cells
3. Questions this data cannot answer

Keep the original tabs exactly as they are.
```

Check two results by hand: click the cell and read its formula. When a number is wrong, say exactly what: "Q3 includes the cancelled deals in column F". Specific feedback gets a better fix than "check again".

## Step 2: Improve a Doc in place

Open a Doc you are working on: a QBR summary, release notes, an incident write-up or a customer follow-up.

### Prompt: Improve this document

**What this does:** Claude asks about the reader, proposes an edit plan for your approval, then edits the Doc one section at a time.

Open Claude in the side panel of your Doc and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me improve this document where it is. Ask me, one question at a time: who reads it, what they should do after reading it, and what bothers me about it now.

Then give me an edit plan of up to five changes. For each change, name the section and say why it helps the reader. Stop and wait for my approval.

After I approve, edit the document one section at a time and tell me what you changed. Keep all facts, numbers, names and dates exactly as they are. If you think a fact is wrong, tell me here in the panel and leave the text as it is.
```

Read every change before you share the Doc. To work on one part only, name its heading in your request.

## Step 3: Tidy a deck

Open a deck you will present soon, for example a QBR deck or a team update.

### Prompt: Tidy this deck

**What this does:** Claude reviews every slide against one message per slide, then fixes only the slides you approve.

Open Claude in the side panel of your deck and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Review this deck as its audience will see it. Ask me who the audience is and the one thing they should remember. Wait for my answers.

Then show me a table with one row per slide: slide number, the slide's message in one sentence, and its main problem (too much text, a title that names a topic and states no message, two messages on one slide, a format that differs from the other slides). End with the slides you would merge or cut.

Stop and wait for my approval. Then fix only the slides I approve, one at a time: make each title the slide's message, keep the text the audience needs, and move the rest into the speaker notes.
```

Click through the deck once from the first slide to the last, reading only the titles. If the titles tell the story, the deck is ready.

## Step 4: Choose the file or the chat

The side panel sees the file you have open. A Claude chat with connectors sees many sources at once.

| What is the work? | Where should you do it? | Why there? |
| --- | --- | --- |
| Analyse, edit or tidy one file | Claude in the side panel of that file | Claude sees the file and changes it in place |
| Combine monday boards, mail, Slack and several files | A Claude chat with connectors | The chat reads all the sources together |
| Create a new Google file from those sources | A Claude chat with the Google Drive connector | It creates the file in your Drive and gives you the link |
| Use internal data such as account history from Salesforce | A Claude chat, through Kremer | Kremer is Monday's path to internal data, with permissions |

Try the chat path once, on a document you would otherwise assemble by hand.

### Prompt: Build a Google Doc from several sources

**What this does:** Claude collects information from several places, shows you an outline for approval, then creates the Doc in your Drive.

Open a new Claude chat with the Google Drive connector on, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me create one Google Doc from information that lives in several places. Ask me, one question at a time: what the document is for, who reads it, and which sources to use: monday boards, Drive files, mail threads, Slack channels, or internal data through Kremer.

Read the sources. Show me an outline with the source of each section, and stop and wait for my approval.

Then create the Doc in my Google Drive and give me the link. At the end of the Doc, list anything you could not confirm from a source.
```

Now close the chat and write your rule in one sentence: which work you will do in the side panel from now on, and which in a chat.

## Go further

**Understand a Sheet you inherited.** Do this when you take over someone else's model or tracker and need to trust it before you change it.

**What this does:** Claude explains how the Sheet works and points to the cells that could break.

Open Claude in the side panel of the inherited Sheet and paste the prompt below.

```
Explain this Sheet to me as its new owner. Describe each tab in one line, how the tabs connect, and the five formulas that matter most, in plain words. List cells that look fragile: numbers typed inside formulas, broken references, ranges that miss new rows. Change nothing.
```

**Draft in the chat, polish in the file.** Do this for a document you write every month, such as forecast commentary or a board update. Build it with the Build a Google Doc from several sources prompt, then open the new Doc and run the Improve this document prompt in the side panel.

## Proof of work

In "what I built", name the three files you worked on, one change Claude made in each, and your rule for file or chat.

For example: "Forecast Sheet: a new tab with the three movements behind the change, each with its formula. QBR summary: the renewal risk moved to the top. Team update deck: eleven slides became seven. My rule: one file in the side panel; boards plus mail in a chat."

## Related adventures

- **Creating Apps with AI, Done Right**: when the analysis in your Sheet should become a dashboard your team uses.
- **Stay Original with AI**: check your Doc and your deck before they reach their readers.
- **Voice of Customers and Employees**: when your Sheet holds feedback you need to turn into actions.
