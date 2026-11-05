# MUSICOLOUR II — a sound-to-light instrument that habituates

> **Status: speculative proposal, in homage.** Prices rough, November 2026. The same habituation loop runs in software, with tests, in [colloquy](https://github.com/benmicallef/colloquy).

## Proposal

Play into a microphone and a light display answers. Repeat a figure and its response dims; bring something new and it brightens — so you are drawn to keep varying what you play.

## The cybernetic idea

Conversation, habituation and variety. This is the closest honest homage in the dossier to a real historic cybernetic artwork: Gordon Pask and Robin McKinnon-Wood's Musicolour (from 1953), which Pask described in terms of the machine growing "bored" by repetition and rewarding novelty, pulling the performer into a two-way exchange. Novelty is variety in Ashby's sense; the two-way pull is Pask's conversation. "Bored" stays in quotation marks: the response to a repeated feature decays, a novel feature restores it.

## What is genuinely achievable today

All of it, on cheap hardware. An ESP32 with an I2S MEMS microphone (~£3–6), or a Pi; feature extraction for loudness, pitch band and rhythm; a WS2812B or APA102 strip or matrix (~£8–20). The habituation-and-novelty mechanism is simple and real.

## What remains speculative

Very little, technically. Pask's original was an analogue machine whose internal specifics are largely undocumented, so this is an instrument built on his idea, not a reconstruction of his circuit.

## Rough BOM

| Part | ~£ |
|---|---|
| ESP32 | 8 |
| I2S MEMS microphone | 3–6 |
| Addressable LED strip or matrix | 8–20 |
| Power, diffuser, wiring | 10–25 |
| **Total** | **~£30–60** |

## Ethics and legality

Benign. Attribute clearly to Pask and McKinnon-Wood; present it as homage, not original invention. Photosensitive-epilepsy warning on the display; keep flicker within safe rates.

## Honesty checklist

**Does:** implement a documented habituating sound-to-light loop. **Does not:** feel, and is not claimed as original.
