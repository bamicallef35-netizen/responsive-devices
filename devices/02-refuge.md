# REFUGE — a responsive rest-and-attention environment

> **Status: speculative proposal.** Not a medical or therapy device; no clinical claims. Prices rough, November 2026.

## Proposal

A corner of a room whose light and sound follow your breathing on a slow loop. As your breathing slows, the ambience slows with it, and a gentle pacing cue invites it slower still.

## The cybernetic idea

Feedback. A physiological signal is measured and fed back as light and sound that track it. Biofeedback is a legitimate technique with decades of use behind it; that is all this is.

## What is genuinely achievable today

A real closed loop — breathing or heart rate in, responsive projection or light wash and soundscape out — on a Raspberry Pi 4 or 5 with open tools (Processing or openFrameworks for the visuals, Pure Data or SuperCollider for sound). Three input options, from reliable to cheap: a Polar H10 chest strap (~£80, dependable R-R intervals), a MAX30102 fingertip pulse sensor (~£5, noisy), or an HLK-LD2410 radar for a coarse contactless breathing rate (~£6). Output through a budget pico projector (~£60–120) or a WS2812B LED wash (~£8–15 a metre).

## What remains speculative

Any measurable, durable effect on stress, sleep or attention. The device makes the environment responsive. It makes no therapeutic claim and cannot be used to support one.

## Rough BOM

| Part | ~£ |
|---|---|
| Raspberry Pi 4 or 5 | 40–80 |
| Sensor (radar / pulse sensor / chest strap) | 5–80 |
| Pico projector, or an LED wash | 15–120 |
| Speaker and amplifier | 15–30 |
| **Total** | **~£150–300** |

## Ethics and legality

Clinical honesty is load-bearing here. REFUGE is not a medical device. It does not treat, diagnose, prevent or improve anxiety, insomnia, panic, PTSD, ADHD or any other condition, and it is not a substitute for clinical care. Consumer pulse sensors and radar modules are not diagnostic instruments. A photosensitive-epilepsy warning is required for any projected or pulsing light, and flicker stays within safe rates. Data stays on the device. A device marketed for a medical purpose could fall under medical-device regulation, so this one is not marketed for one: call it a rest object, or a responsive artwork.

## Honesty checklist

**Does:** close a biofeedback loop and offer paced-breathing cues. **Does not:** treat any condition, diagnose, or make a clinical claim.
