---
slug: token-smartness
emoji: 🪙
icon: gauge
title: "Token Smartness"
walkaway: "A feel for what your AI work costs in tokens, and one real task that gets more value from them"
category: Set up your AI
levels: [Foundations, Intermediate, Advanced]
professions: [Everyone]
audience: []
tool: Any AI tool
effort: 1 hour
outcome: Work differently
pattern: AUD
wave: W3
slot: 9
next: [automation-done-right, your-ai-taste-test]
review: ready
video: /videos/token-smartness.mp4
source: "Rebuilt 2026-11-08 from Nufar's braindump (videos/token-smartness/notes.md, 8 Nov page review). Facts and exercise ideas from token-gym/ (read only): README.md (design rule: nothing rewards spending fewer tokens; tokens that teach, produce or spin), reference-build/token-gym.html station copy (Guess the Weight ranges for the ballpark prompt; the Weigh-In on connector descriptions and on-demand loading; the Language Meter idea that languages split into more pieces; the Marathon Conversation fresh-chat habit; Choose Your Trainer and the Thinking Dial on cost per finished task and when thinking earns its cost; the Locker Room on topic files opened on demand), fitness-assessment.md (the idle-folder trap behind progressive disclosure, the cheaper-model trap, teach / produce / spin receipts), home-audit/token-audit-prompt.md (characters per token estimate, read-only local measurement and the 100-200:1 calibration, the coaching rule never to recommend spending less), data/measured-findings.md (calibration ratios), lovable-spec.md (the scoring rule). summer-challenge/labs/token-gym-session.md for the lab shape. No Token Gym embed, links, brand or gym language. Never edit the originals from this engagement."
---

<!--
DESIGN NOTES (not rendered)

Rebuilt 2026-11-08 from Nufar's braindump (videos/token-smartness/notes.md, page review of 8 Nov: "almost nothing follows my thoughts", "not accurate at all"). Earlier design notes (the four priced token kinds, the report card, the seven-habit audit table, the redo-with-two-habits step) are retired with the old page.

Changed 2026-11-08 (her review): Step 2 rewritten: progressive disclosure explained on the person's own multi-topic project, question habits that help it; paste-everything comparison removed.

What landed where
- Goal, said plainly in Why this adventure: more value from tokens, never frugality; value = produces work, teaches you, teaches the tool about you; spin = automations nobody uses, unfiltered connector pulls. Her script wording ("test and refine some of your habits... where they just spin") is reused.
- Step 1: the OpenAI tokenizer, with a try-this table (sentence, long email, own language and English, a table, code); "Claude counts a little differently, the idea is the same". Per Nufar's correction (8 Nov): employees speak many languages, so no single language or country is named; people try their own language, English and code.
- Step 2: progressive disclosure, explained on the person's own multi-topic project or folder ("Explain how you read my files": four kinds of question, files opened, order, rough tokens), then a question-habits table with before/after examples; the filter demo with an estimate-before-you-fetch prompt and a Monday filter table (Slack, boards, mail, Kremer) plus the customer-boards line.
- Step 3: ballpark prompt for repeated tasks with Guess the Weight ranges inside the prompt, marked rough; model = level of intelligence, effort = how long it spends; cost per finished task; Opus first can cost less than many rounds on a lighter model.
- Step 4: her token habits as a table (new chats, disconnect unused connectors, repeated instructions as skills, project instructions and context files, filters, model and effort), then "Make one task smarter" with a before-and-after table. Done-when is quality plus every source earning its place; nothing celebrates fewer tokens.
- Go further: one item, Claude Code users ask for usage and what fills the context (/context named as the example). A read-only local measurement prompt from the Home Audit and a teach-the-tool item were drafted and cut for length. Monday's usage dashboard is not mentioned (she finds it less interesting).

From Token Gym: Guess the Weight ranges (email 500-700, web-search answer 6K-15K, 10-page summary 10K-15K, deep research 70K-300K, agentic coding task 400K-2M; all industry-reported in the gym, marked rough here); the four-characters-per-token estimate (Home Audit Step 3); the Weigh-In point that connectors can load their descriptions upfront while idle files cost nothing; the Thinking Dial (thinking counts like output, earns its cost on hard multi-step work); Choose Your Trainer and fitness Q4/Q10 (cost per finished task, each round re-reads the chat); the Marathon fresh-chat habit with a summary; the Home Audit read-only rules and calibration. Not used: dollar figures, era archetypes, the language multipliers (2.4x etc.), the 70/20/10 routing stat, gym names and badges.

Judgment calls for Nufar
- Effort changed from 30 minutes to 1 hour: four steps with three interview prompts plus two comparison runs.
- Progressive disclosure is shown on a project or folder with several topics; the page says a small project may load every file each time (Claude projects load all knowledge until it nears the limit, then switch to retrieval), so a large project works similarly and a small one may not show the effect.
- Step 4's done-when and proof of work measure quality plus sources that earn their place; fewer tokens is never the score.
- The agentic-coding range (400K-2M) was dropped from the ballpark prompt for length; Monday's chat users rarely need it.
- Habits table says connectors add descriptions "depending on the tool": some tools load connector descriptions on demand (tool search), so the disconnect habit is worded to hold either way.
- The token estimates come from the AI itself; every prompt tells it to mark numbers as rough and say how it estimated.

Open items
- /doctor: her braindump says "/doctor". In Claude Code, /doctor checks the installation; /context shows what fills the context window and /usage (or /cost, depending on plan) shows usage. The page says "ask Claude Code to show your usage and what fills its context, for example with the /context command". Confirm with Nufar.
- Is the OpenAI tokenizer link acceptable at Monday (an external OpenAI page; nothing is signed in, but people paste text there)? The page says to paste text you would be comfortable sharing outside Monday.
- Folder access in Claude at Monday: Step 2 offers a folder Claude reads as one option next to a Claude project; confirm the label and that it is enabled (Keren).
- Effort setting in the Claude apps: worded conditionally ("depending on the model, turn on extended thinking or set the effort"); hands-on check.
- Prompt test in a fresh Claude chat: pending (playbook step 4), especially whether "Explain how you read my files" gives usable per-question file lists and estimates in a project chat and a folder chat.
-->

# 🪙 Token Smartness

**Get more value from every token: see what a token is, watch what your AI reads, and make one real task smarter.**

## Why this adventure

Every AI tool reads and writes in tokens: small pieces of words, numbers and symbols. Everything the AI reads counts: your message, its instructions, your files, what connectors bring back, and the chat so far.

This adventure teaches best practices to get more out of your tokens. Using AI less is never the goal. You will test and refine some of your habits, and learn where your tokens are a good use of your time and money and where they just spin.

| What kind of token? | Example at monday |
| --- | --- |
| **Produces work** with business value | A QBR summary your account team uses in the meeting |
| **Teaches you** something about using AI, even when the experiment fails | Testing whether a skill can draft your release notes |
| **Teaches the tool about you** | Writing your project instructions |
| **Spins**, producing nothing anyone uses | An automation nobody reads; a connector pull with no filter |

The first three are value. Spin is the only waste.

## The trail

1. **See what a token is**, so the numbers mean something.
2. **Watch what your AI reads**, because reading is where most tokens go, and learn to ask so it opens what your question needs.
3. **Know the ballpark of your regular work**, including the model and effort.
4. **Make one real task smarter**, with habits that turn spin into value.

## Before you start

Have a Claude project or a folder with several of your work files on different topics. Step 2 says what to use if you have none.

## Step 1: See what a token is

A token is a piece of text the AI counts: often a short word, sometimes part of a word, a space or a symbol. In English, one token is roughly four characters.

Open the OpenAI tokenizer at https://platform.openai.com/tokenizer. Paste each item below, nothing confidential, and watch the count and how the colored pieces split your text.

| What to try | What to notice |
| --- | --- |
| A short sentence, then a long email | Real work adds up to hundreds of tokens quickly |
| One sentence in your own language and in English (or another language you know) | Many languages split into more pieces, so they use more tokens |
| A table copied from a monday board or a sheet | Separators and repeated headers count too |
| A few lines of code | Symbols and indentation become tokens of their own |

Claude counts a little differently, but the idea is the same. In a chat, the AI rereads every piece with each new message.

## Step 2: Watch what your AI reads

AI tools usually work by **progressive disclosure**: they first see a short list of what is available (file names, an index, skill descriptions) and open a file in full only when your question needs it. The way you ask decides how much they open.

Work where several files on different topics already live, for example a Claude project with knowledge files, or a folder Claude reads, such as your personal brain folder or a team folder. If you have neither, create a folder with four or five short files from your work, each on a different topic: for example a project plan, meeting notes, a team process and your quarterly goals.

**In Claude:** start the chat inside the project, or give Claude the folder to work in.

### Prompt: Explain how you read my files

**What this does:** the AI explains progressive disclosure on your own files: for four kinds of question, which files it would open, in what order, and roughly how much it would read.

Open a new chat in that project or folder and paste the prompt below.

```
Progressive disclosure means an AI tool first sees a short list of what is available (file names, an index, short descriptions) and opens a file in full only when a question needs it. A token is a small piece of text an AI counts; in English, about four characters.

Explain progressive disclosure using the files in this project or folder and the work they are about. Open only what you need for this explanation. First list the files you can see, one line each on its topic. Then make a table for four kinds of question, with a real example question drawn from my files for each: a narrow fact that one file answers; a question that spans two topics; a broad summary of everything; a question none of the files answer. For each, show which files you would open, in what order, in full or in part, and a rough token estimate of what you would read. Then say when you would read every file, and whether this project is small enough that you load all of it every time anyway. Describe how you usually work, say where you are unsure, and mark every number as rough.
```

Then ask one of its example questions for real, and end it with "Tell me which files you opened." A small project may load every file each time (Claude projects do until their knowledge nears the size limit); the habits below still lead the AI to the right part of the right file.

### Ask so your AI opens the right files

Each habit tells the AI which file to open, or lets it stop after one.

| Habit | What you might ask | What works better |
| --- | --- | --- |
| **Name the topic or the file** | "What did we decide?" | "In the pricing test notes, what did we decide about the trial length?" |
| **Say what you need, and in what form** | "Tell me about the Q3 launch" | "List the open risks for the Q3 launch, one line each" |
| **Narrow by date or scope** | "Summarize the meeting notes" | "Summarize the October meeting notes, decisions only" |
| **Ask one thing at a time** | "Summarize the plan, check the budget and draft an update" | "What is still open in the budget section of the plan?" Then ask the next question |
| **Point to the index first** (a short file that says what each file holds) | "Find everything about onboarding" | "Read the index, then open only the files about onboarding" |
| **Ask which files it used** | "What were the action items?" | "What were the action items from the last team meeting? Tell me which files you used." |

**Connectors work the same way.** "Bring everything from my Slack" makes the AI read every message it can reach. A filter makes it read what your question needs.

| Unfiltered request | Filtered request |
| --- | --- |
| "All my Slack about the renewal" | "The renewals channel, last two weeks, messages that mention the customer" |
| "Everything on the Escalations board" | "The Stuck group, status and owner columns" |
| Internal data from many systems | One narrow question to Kremer |

Customer boards (content monday's customers upload to their own boards) never go into Claude.

### Prompt: Estimate before you fetch

**What this does:** before fetching anything, the AI estimates what an unfiltered and a filtered request would read.

Open a new chat with your connectors on and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Show me how a filter changes what you read through a connector. Do not fetch anything yet. Ask me one question at a time: which connector, and what I want to know. Then help me write a filter: only the sources, people, dates and fields my question needs. In a table, estimate roughly how many tokens each version would read (a token is a small piece of text an AI counts; in English, about four characters) and how you estimated. Then ask whether to run the filtered version, and afterwards tell me if anything my question needed was missing.
```

## Step 3: Know the ballpark of your regular work

### Prompt: The ballpark of my regular AI work

**What this does:** interviews you about tasks you repeat, then estimates rough tokens and value for each.

Open a new chat and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me see the rough token cost of the AI tasks I do regularly (a token is a small piece of text an AI counts; in English, about four characters). If I already answered a question earlier in this chat, don't ask it again.

Start by asking me to brain dump the AI tasks I repeat (for example a weekly status, a meeting summary, a scheduled task). Then ask one question at a time about what is missing for each: how often I run it, what it reads, how many rounds it takes, which model and effort. Never guess how often; ask me.

Then show a table: task, rough tokens per run and per month, what drives it, and whether it produces work, teaches me, teaches you about me, or spins. Rough reference ranges: a routine email 500 to 700 tokens; an answer with web search 6,000 to 15,000; a summary of a 10-page document 10,000 to 15,000; a deep research report 70,000 to 300,000. Each extra round reads the whole chat again. Never suggest using AI less; suggest where the same tokens could produce more.
```

**The model and the effort are part of the cost.** The model is the level of intelligence; the effort is how long it spends on the task, and its thinking tokens count like written words. Judge both by the cost of a finished task: a lighter model that needs many rounds and more effort can cost more than starting with Opus and finishing in one or two, plus your time.

| What is the task? | Which model and effort? |
| --- | --- |
| Sorting, formatting, a lookup | A lighter model, low effort |
| Summarizing a long document | Sonnet, low to medium effort |
| A judgment call, a plan, a hard analysis | A strong model, for example Opus, high effort |

**In Claude:** pick the model in the model menu; depending on the model, turn on extended thinking or set the effort.

## Step 4: Make one real task smarter

These habits turn spin into value.

| Habit | Why does it help? |
| --- | --- |
| **Start a new chat when the topic changes** | Every message rereads the whole chat; carry over a summary of decisions |
| **Disconnect connectors you do not use** | Depending on the tool, each connector can add its descriptions to what the AI reads |
| **Turn repeated instructions into skills** | The AI loads a skill in full only when it needs it |
| **Use project instructions and context files** | Standing context, written once, with no pasting |
| **Filter what connectors fetch** | The AI reads what the question needs |
| **Match the model and effort to the task** | You pay for a finished task |

Pick a task from your ballpark table, ideally one using several connectors.

### Prompt: Make one task smarter

**What this does:** reviews one task, proposes changes from the habits, and writes the improved version.

Stay in the chat from Step 3 and paste the prompt below. Answer its questions in writing, or by voice if your tool has dictation.

```
Help me get more value from the tokens one of my regular AI tasks uses. Do not choose the task, and do not decide what a good result is; ask me. If I already answered a question earlier in this chat, don't ask it again.

First ask which task. Then ask me to brain dump how I run it today and paste its instructions or skill. Then ask one question at a time about what is missing: sources and filters, model and effort, rounds, what a good result looks like.

Then propose changes: filters on each connector request, fewer sources, a skill or project instructions for repeated context, fresh chats, the right model and effort. Never lower my quality bar or suggest using AI less. Show a before-and-after table (what it reads, rough tokens per run, expected rounds, risk to quality), then write the complete improved instructions or skill and wait for my approval.
```

Run the improved version on real work. You are done when the result is at least as good as your last run and every source it reads earns its place. If it became a skill, add it, then close and reopen your tool.

## Go further

**See your real usage in Claude Code.** Do this if you work in Claude Code, which keeps exact usage. Ask Claude Code to show your usage and what fills its context, for example with the /context command.

## Proof of work

In "what I built", name the task you made smarter, what changed, and one thing you learned about tokens.

For example: "My weekly renewals status reads one channel and the At risk group, as a skill. Same quality in one round; pasted files ride along with every message."

## Related adventures

- **Automation Done Right**: find the automations that spin, then fix or stop them.
- **Your AI Taste Test**: compare models on your own tasks.
- **Skills: When, How and How Well**: turn repeated instructions into a skill.
