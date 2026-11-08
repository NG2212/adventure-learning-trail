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
review: ready
source: "New (inventory row: no earlier source). Built on the launch facts of Claude for Google Workspace (public beta, 6 Oct 2026) and the TOUR skeleton in BUILD-PLAYBOOK.md. Borrowed moves: plan-then-approve gates and the specific-feedback line from content/adventures/de-slop.md; 'list what you could not confirm' from content/adventures/your-own-chief-of-staff.md."
---

<!--
DESIGN NOTES (not rendered)

Adaptation note (2026-10-22, slot 13 [Inbar 9])
- New adventure; the inventory names no reuse source. Shape = TOUR (three hands-on capabilities on real work) ending in a personal routing rule (Step 4), plus one BUILD move (a Doc created from several sources in a chat; prompt-free since 8 Nov).
- Kept from siblings: approve-a-plan-before-edits gates, "say exactly what is wrong" feedback line (Stay Original), "list what you could not confirm" (Chief of Staff).
- Added for Monday: forecast, renewal list and campaign Sheets; QBR summary, release notes, incident write-up Docs; QBR and team update decks; monday boards and Kremer in the file-or-chat table and the Step 4 chat line. Inbar's comment c4 ("people use the Google connector a lot") is answered by the chat fallback in Step 1 and by Step 4.
- Teaching per step: Sheets = describe the data first, formulas that point to source cells, results in a new tab, then check how Claude did it; Docs = a writing skill or standards set in the prompt, plan, approve, edit section by section as cards, facts untouched; Slides = one message per slide, titles as messages, detail to speaker notes; Step 4 = where each kind of work belongs. Known pitfalls sit in the step for each app; the all-three points sit in Step 1.
- Length: inside the guide's 1,800 cap by the lint count (1,797 on 8 Nov), because the promise to Inbar names four moves (Sheet, Doc, deck, file-or-chat). Every step works from a chat with the Google connectors as a fallback.

Open items
- Keren Q1: is Claude for Google Workspace installed at Monday, and from when? Steps are written as if it is, with the chat fallback in Step 1. If it is not installed by 9 Nov, either move the adventure to a later wave or lead with the chat path.
- Extended thinking inside the side panel: Anthropic's help article names a model picker and does not mention extended thinking.
- Writing to speaker notes from the side panel: the help article names speaker notes only as a source; hands-on check pending (Step 3 prompt).
- Google Docs, Sheets and Slides connectors at Monday: Anthropic says an owner must enable them on Enterprise, and they carry the chat fallback and the Step 4 chat path. Confirm with Keren alongside Q1. Anthropic also lists Zero Data Retention and third-party gateways as unsupported for the add-on; confirm neither applies to Monday's Claude Enterprise.
- Skills in the side panel (Go further, Step 2): admins control which skills reach the add-on, and how a skill is called there is undocumented. The page says "ask Claude to use the skill by name" and promises no / menu. Hands-on check: does a skill saved under Customize → Skills appear in an already-open panel, or only after a reload? The page says to reload the file as a precaution.
- Prompt test in a fresh Claude chat and in the side panel: pending (playbook step 4).
23 Oct: do-this line on every prompt
Changed 2026-11-05: closing rule in Step 4 per the 23 Oct think-first rule.
2026-11-06: revised to match the live video and Nufar's framing (same surface with peers, file-or-chat rule widened to shared work); dropped the copy-and-paste argument; checked facts against support.claude.com (add-on article 16951679, connectors article 10166901): menu path, what peers see, Ask before edits, cards, comments, connector names. To hold the cap: removed the second Go further item (folded into Step 4) and the third related adventure.
Changed 2026-11-08 (Nufar's second review, videos/claude-in-your-docs-sheets-and-slides/notes.md): known pitfalls per app (Sheets table in Step 1, one line each in Steps 2 and 3, all-three points in Step 1 and the reference-files point in Step 4), facts checked 8 Nov against support.claude.com 16951679, the 6 Oct announcement and claude.com/claude-for-google-workspace; over-complication in Sheets is Nufar's experience, stated without a source. New Step 1 prompt "Check how Claude did it", adapted from superplay/content/finance-agent-os-reference.md §5 ("Check how Claude got there"), plus tabs read and root cause; works in all three apps. Step 2 refocused on work that ends in finished text, with a writing skill (Skills or Stay Original adventures) or standards set in the prompt, one prompt, edits as cards; the shared-file table and the "section nobody else is working in" habit are gone, so the peer-editing open item is dropped. Go further: best-practices starter prompt (Search the web toggle, off by default) and the skill stretch (built in a Claude chat, run in the side panel by name, no / menu promised) replacing the inherited-Sheet item. To hold the cap (1,820 → 1,797 by the lint): trimmed the hook and every prompt, removed the Sheet "Ask Claude for" table (the prompt already asks for each point), folded Kremer into the connectors row of the Step 4 table, turned the Step 4 "Build a Google Doc from several sources" prompt into a two-sentence prompt-free instruction, and dropped Stay Original from Related adventures (Step 2 names it; it stays in next:).
Orchestrator, same day: the skill stretch now points to the Skills adventure's "Build a skill" prompt (link, don't repeat), and the words saved restore the Step 4 "Build a Google Doc from several sources" prompt block. Further trims: Step 4 intro, connectors row, deck examples, account and Office-file lines. Lint 1,801.
Changed 2026-11-08: self-contained skill prompt replaces the pointer to another adventure (HARD RULE).
-->

# 📄 Claude in Your Docs, Sheets and Slides

**Work with Claude and your peers in the same Google file, and know when a Claude chat is the better place.**

## Why this adventure

Most of us love working inside Claude. Real work happens mostly with others, and often in the Google Suite: the forecast in a Sheet, the QBR summary in a Doc, the team update in a deck.

Claude for Google Workspace opens in a side panel next to your file, reads it and edits it there: you, your peers and Claude, all on the same surface. This adventure helps you get the most out of it on real work, and identify which scenarios are better done directly in the Google ecosystem, with Claude as a companion.

## The trail

1. **Analyze a Sheet**, because numbers are where checking Claude's work matters most.
2. **Improve the writing in a Doc**, with your writing skill or clear standards.
3. **Tidy a deck**, so every slide carries one clear message.
4. **Choose the file or the chat**, so you know where each kind of work belongs.

## Before you start

Have three real files you are working on this week: a Sheet, a Doc and a Slides deck, ideally ones your peers work in too.

## Step 1: Analyze a Sheet

Open a Sheet with real data, for example a forecast or a renewal list. Open Claude from the menu: **Extensions → Claude → Open Claude**. Every step on this page also works in a regular Claude chat with the Google connectors: name the file and paste the same prompt.

Know how to undo before Claude edits: Undo for a recent change, and **File → Version history → See version history** for the whole file, which also removes your peers' later work.

**Good to know in all three apps:** chat history stays with the file in one browser, so **Make a copy**, another browser or a private window starts empty. Use one Google account per browser profile. Convert Office files to Google files first, from the **File** menu.

### Prompt: Analyze this Sheet

**What this does:** Claude describes the data, agrees on a plan with you, then writes findings with formulas in a new tab.

Paste the prompt below into the side panel of your Sheet. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me analyze this Sheet. First describe the data in three lines: tabs, columns, date range, number of rows, and anything that looks wrong, such as empty cells or duplicates.

Then ask me, one question at a time, what decision this data should support and who will read the result.

Propose a plan in up to five lines and wait for my approval. Then, in a new tab named "Claude analysis", write the three findings that matter most, one sentence each, each beside a formula that refers to the source cells, plus the questions this data cannot answer. Leave the original tabs untouched.
```

Check two results by hand: click the cell and read its formula. When one is wrong, say exactly what: "Q3 includes the canceled deals in column F".

**Known pitfalls in Sheets:**

| What can go wrong? | What to do |
| --- | --- |
| Claude over-complicates: more tabs, steps or formulas than needed | Run the prompt below |
| Tabs connected to BigQuery cannot be read or edited | Use **Data → Data connectors → Extract** first |
| A long job stops: "Exceeded maximum execution time" | Ask Claude to continue, or go one tab at a time |

### Prompt: Check how Claude did it

**What this does:** Claude explains its method and offers a simpler one if it exists.

Paste it into the same side panel after any piece of work, in Sheets, Docs or Slides.

```
Before I accept this: explain in three lines how you did it, including which tabs, ranges or sections you read. If you fixed an error, name its root cause. Name the simplest method that would also work, and what you could not verify. If that method differs from yours, show it and wait for my approval before you redo the work that way.
```

## Step 2: Improve the writing in a Doc

Open a Doc whose work ends in finished text, for example a QBR summary or an incident write-up. Rough notes work too.

The side panel has the same skills you use in Claude, so a writing skill from the Skills or Stay Original adventures works here. Without one, the prompt sets the standards.

**Known pitfalls in Docs:** Claude's edits land under your name. The panel cannot read, reply to or resolve comments, or accept existing suggestions; Step 4 shows where to handle comments. It cannot create, rename or reorder document tabs.

### Prompt: Improve the writing in this Doc

**What this does:** Claude edits with your skill or clear writing standards, section by section, as cards you accept or reject.

Open Claude in the side panel of your Doc and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me turn this document into finished text its readers can act on. First ask which of my skills to use, if any. If none, use these standards: lead with the point, one idea per paragraph, short sentences, specific facts over general claims, nothing the reader does not need.

Ask me, one question at a time, who reads it and what they should do next. Then propose up to five changes, each with its section and why it helps, and wait for my approval.

Edit one section at a time, as cards I accept or reject. Keep facts, numbers, names and dates as they are, and flag any that look wrong. End with a two-line note for my peers: what changed and why.
```

Accept or reject each card, then send the note to your peers.

## Step 3: Tidy a deck

Open a deck you will present soon.

**Known pitfalls in Slides:** charts Claude creates are inserted as images and do not update with the data. Linked charts update only when you click **Update**.

### Prompt: Tidy this deck

**What this does:** Claude reviews every slide against one message per slide, then fixes only the slides you approve.

Open Claude in the side panel of your deck and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Review this deck as its audience will see it. Ask me who the audience is, the one thing they should remember, and which slides belong to someone else.

Then show a table, one row per slide: number, its message in one sentence, and its main problem (too much text, a title with no message, two messages, an inconsistent format). Name the slides you would merge or cut.

After my approval, fix only the approved slides, one at a time: make each title the slide's message, keep what the audience needs, and move the rest to the speaker notes.
```

Click through the deck once, reading only the titles. If the titles tell the story, the deck is ready.

## Step 4: Choose the file or the chat

The side panel works on the open file, plus reference files you add. A chat reaches many sources at once. So ask: how many sources does this work need, and is it shared?

| What is the work? | Where should you do it? | Why there? |
| --- | --- | --- |
| One file, especially a shared one | Its side panel | You, your peers and Claude share one surface |
| Working through your peers' comments on a Doc | A chat with the Google Docs connector | The chat can read comments and suggestions |
| A draft that is not ready for your peers | A Claude chat | It stays with you until you put it in a file |
| Combining monday boards, mail, Slack, files or internal data through Kremer | A chat with connectors | It reads every source at once |

Try the chat path once.

### Prompt: Build a Google Doc from several sources

**What this does:** Claude gathers your sources, gets your approval on an outline, and creates the Doc in your Drive.

Open a new Claude chat with the Google Drive and Google Docs connectors on, and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me create one Google Doc from information that lives in several places. Ask me, one question at a time: what the document is for, who reads it, and which sources to use: monday boards, Drive files, mail threads, Slack channels, or internal data through Kremer.

Read the sources. Show me an outline with the source of each section, and wait for my approval.

Then create the Doc in my Google Drive and give me the link. At the end of the Doc, list anything you could not confirm from a source.
```

Then share it and keep working in its side panel.

Then decide your rule in one sentence: which work goes in the side panel, and which in a chat.

## Go further

**Start with current best practices.** Do this before a kind of work you have not done in that app yet.

**What this does:** Claude searches the web for current best practices, then plans your task by them.

Turn on **Search the web** in the side panel first; it is off by default. Then paste the prompt below into the panel. Answer its questions in writing, or by voice if your tool has dictation.

```
I want to do a piece of work in this Google file. Ask me what it is and who it is for, one question at a time; do not choose the task for me. Then search the web for the most up-to-date best practices for this kind of work in this app, and list the five that matter most, with source and date. Propose a plan that follows them and wait for my approval.
```

**Run your own skill in the side panel.** Do this for a task you repeat in Sheets, Docs or Slides, for example a monthly forecast check or a deck review.

**What this does:** Claude interviews you about one task you repeat in a Google file, then writes a skill you can run from the side panel.

Open a new Claude chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me build a skill for a task I repeat in Google Sheets, Docs or Slides: saved instructions Claude follows for one recurring task. Ask me to brain dump the task first. Do not choose it for me or decide what good means. If I already answered a question earlier in this chat, don't ask it again. Then ask one question at a time for what is missing: the app and kind of file, the words I would use to start it, which tabs, sections or slides it reads, what it changes and what it leaves untouched, the output format, and what to check before showing me anything.

Build in two rules: propose a plan and wait for my approval before any edit, and use the simplest method that works. Check Claude's current documentation for the skill format. Write the complete skill in one block: a short name in lowercase with hyphens, a description in my words so it starts when I need it, the steps, the output as a literal template, the checks, and one test request.
```

Add it under **Customize → Skills** and reload your Google file. Then ask Claude in the side panel to use the skill by name.

## Proof of work

In "what I built", name the three files, one change Claude made in each, and your rule for file or chat.

For example: "Forecast Sheet: three findings with formulas. QBR summary: renewal risk moved to the top. Team deck: eleven slides became seven. My rule: one shared file in the side panel; several sources in a chat."

## Related adventures

- **Creating Apps with AI, Done Right**: when your Sheet analysis should become a dashboard your team uses.
