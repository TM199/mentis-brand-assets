# Changelog — Episode 001 transcript edit

*Every edit category applied to `transcript_original.txt` to produce `transcript_clean.md`, with the reasoning behind each.*

---

## Cuts

### Filler and repetition removed
- "yeah, yeah, yeah" agreement loops, "you know what I mean", "literally", "to be fair" tics
- Restating the same point three different ways — kept the sharpest version
- Crosstalk and overlapping affirmations between hosts

**Why:** Premium podcast transcripts read as edited dialogue, not raw audio dump. Voice and rhythm preserved; noise removed.

### False starts and self-corrections trimmed
- Half-finished sentences that got rephrased
- "actually I'm lying" / "no, scratch that" moments retained only where they add narrative texture (e.g. Kamal correcting himself on the rebate-period timing in the worst-day story — kept because it shows him telling the truth)

**Why:** Reads cleaner without losing the human moments.

### Tangents condensed (not removed)
- Lottery-numbers exchange compressed from a long back-and-forth into a four-line beat
- Streaming-PC and content-creation aspirations kept as setup for the *fear is the killer* climax
- Biochem-to-vet personal detail kept brief

**Why:** Premium ≠ tight. Tangents add colour but only when they serve the arc.

---

## Restorations (added back after a first-pass over-cut)

### "We're geeks bro" exchange
- Restored as live host/guest back-and-forth in the biochem section
- **Originally cut** for length while trimming the biochem digression. Brought back because it's a vibe moment that humanises both hosts.

### "Fear is the killer of everything" + cold-outreach + content-creation arc
- Restored as full section: *What's next — and what stops you*
- **Originally cut** because the section drifted away from recruitment. Brought back because these are the most quotable, human, brand-aligned moments in the episode.

### "HR was a myth" exchange
- Restored as the closing of a new section: *Recruitment, then and now*
- **Originally cut** as a brief follow-up to keep the worst-day story tight. Brought back because it gives the era-specific framing.

### GSK/RPO manpower example
- Restored to the *Inside the RPO model* section
- **Originally cut** because I was being overcautious about naming a real company in a hypothetical. The example is clearly illustrative, not a real account, so restored.

### Kamal's "ego" line
- Restored: "I don't have enough of an ego *not* to try it. I'm still working with it."
- **Originally cut** in the personal section. Without it, the host's "I didn't even mean ego — I meant identity" responded to nothing. Setup restored.

---

## Corrections

### Transcription errors fixed
| Original (mishear) | Corrected to |
|---|---|
| "biochemistry, which has no relation to cells" | (cut entirely — biochem *is* cells) |
| "I hate you" | (cut — clear mishear, no clean replacement) |
| "Harzdon" | "Harlesden" |
| "GlaxoSmith and clan" | "GSK" |
| "order made a message" | "automated message" |
| "five foot saturn" | "five-foot-something" |
| "20s are the grand" | "20s are the grind" *(unconfirmed — flag for review)* |

**Why:** Streaming Whisper output is fast but error-prone. Premium publishing requires reading-level accuracy.

### Number conflict resolved
- The original mentioned an agency exit at "8 mil" once and "80 mil" later, in different contexts. The 8 mil reference (in a host tangent) was cut; the 80 mil reference (about a podcast guest) was later removed entirely on instruction.

**Why:** Unverified financial claims about real third parties carry brand and legal risk. Removed and replaced with a softer framing: "*built and sold his recruitment agency — and the only reason he was able to do that is predictable pipeline.*"

---

## Anonymisation

### Named tech client scrubbed
Five mentions of the guest's actual client (a major tech firm) were replaced throughout:
- "recruit on behalf of [client]" → "recruit on behalf of one of their major tech clients"
- "Recruiting for [client] is mental" → "Recruiting at that level is mental"
- "match the standard of [client]" → "match the standard of a top-tier client"
- "recruiting on behalf of [client]" → "recruiting at that level"
- "With [client], the standard is another level" → "At that tier, the standard is another level"

**Why:** Guest is under RPO/agency confidentiality and can't be publicly tied to named clients. Naming the client also creates brand-association risk for Mentis and the named company.

### Manager in worst-day story unnamed
Kamal himself, on tape, chose not to name the manager who slammed his head against the desk. That choice was preserved in the edit.

---

## Structural changes

### Speaker labels
- **Hosts:** both Trisden and Malik labelled generically as `SPEAKER` (not distinguished)
- **Guest:** labelled `KAMAL`

**Why:** Without diarisation tooling and without consistent voice cues in the streaming output, attempting to distinguish Trisden vs Malik produces guesses that are wrong some of the time. Generic SPEAKER avoids misattribution; if you want them split for the final published transcript, mark them up against the audio.

### Section headers added
Twenty-two sections inserted to make the transcript navigable. Titles normalised to a consistent noun-phrase style after a first-pass mix of question-form and promotional titles.

### Three-speaker stacks broken up
In two places — the "next big change" segment and the biochem detour — three host turns appeared back-to-back without guest interjection, making the conversation hard to follow. Brief KAMAL beats were inserted at the natural transition points (e.g. "Hundred percent", "Yeah, fair") so the reader can track speaker changes.

### Best-day section split
Originally one bloated section held: best-day answer → peaks-and-troughs reflection → host reaction to the head-slam story → "HR was a myth". Split into *The best day* (tight) and *Recruitment, then and now* (the era-specific reflection).

### Section title polish
| From | To |
|---|---|
| When does the next big change land? | The next big change |
| A short detour: biochem, science, and ChatGPT for lottery numbers | Why biochem — and AI in the everyday |
| Vetting and selling candidates through process | Selling candidates through process |
| How do RPOs do BD? | Inside the RPO model |
| The Mentis pitch | What we're building |

**Why:** Consistent style. Two were question-form, one read as promotional. Normalised to match the rest of the document.

### Closing softened
"Quickly to finish — what are you excited about…" → "Last two — what are you excited about…"

**Why:** "Quickly to finish" felt rushed after the depth of the Mentis-pitch section. "Last two" lands softer and signals format.

---

## Items flagged but not changed

- **"20s are the grind"** — original is ambiguous between *grind* (hustle) and *grand* (good/fine). Currently set to *grind* on the assumption it's the more idiomatic reading. Awaiting your call.
- **Worst-day story sensitivity** — manager unnamed but identifiable to insiders from Frank Recruitment Group. Kamal is the one telling the story, so the call to publish is his. Editor's note in the transcript flags this.

---

## Final shape

| Metric | Original | Cleaned |
|---|---|---|
| Lines | 3,380 | ~441 |
| Words | ~19,000 | ~8,900 |
| Sections | 0 | 22 |
| Speaker labels | none | yes (SPEAKER / KAMAL) |
| Transcription errors | many | corrected |
| Named clients | 5 mentions | scrubbed |
