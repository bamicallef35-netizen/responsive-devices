# SPECULATRIX II — a desk creature that habituates

> **Status: speculative proposal.** Not built. Prices rough, November 2026. Builds on [grey-walter-tortoise](https://github.com/benmicallef/grey-walter-tortoise), which reconstructs Walter's reflex and proves its simulation identical to its firmware.

## Proposal

A small desk object in Grey Walter's reflex lineage. It orients toward light and sound. When a stimulus repeats without change it stops reacting; a new stimulus wakes it again.

## The cybernetic idea

Habituation and umwelt. Walter's Elmer and Elsie (1948–49, Burden Neurological Institute, Bristol) showed that lifelike behaviour comes from a tight reflex loop with the world and needs no plan; the tortoise repo already rebuilds that loop. SPECULATRIX II adds exactly one dynamic Walter's machine did not have: habituation — a response to a repeated stimulus decays, a novel one restores it — the simplest real form of adaptation, with a nod to the novelty-seeking of Pask's Musicolour. Its umwelt is light, sound and motion; nothing else exists for it.

## What is genuinely achievable today

All of it. An ESP32 or Arduino (~£8), a light-dependent resistor or phototransistor (~£1), a sound sensor (~£2), a PIR or small time-of-flight sensor (~£3–5), one or two servos and a simple body (~£5–10), an LED and a small speaker (~£3). Habituation is a decaying activation against a threshold — a few lines of code, directly testable on the host the way the tortoise's controller is.

## What remains speculative

Nothing technical; only the temptation to over-read it. It is a reflex with a time constant.

## Rough BOM

| Part | ~£ |
|---|---|
| ESP32 or Arduino Nano | 8 |
| Light sensor, sound sensor, PIR or ToF | 6–8 |
| Two micro servos and a body | 5–10 |
| LED, speaker, wiring | 3–5 |
| **Total** | **~£25–45** |

## Ethics and legality

Benign. The one discipline is in the writing: it does not feel bored, it implements a decaying response. Low voltage; safe on a desk.

## Honesty checklist

**Does:** show habituation and dishabituation from a minimal sensorimotor loop. **Does not:** feel, want, learn in any rich sense, or understand.
