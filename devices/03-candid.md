# CANDID — a consent-first biometric-aware object

> **Status: speculative proposal.** Not a product. Prices rough, November 2026.

## Proposal

A small desk object with a touch pad. Rest two fingers on it and it reads your pulse and slowly shifts its colour to match. Lift your fingers and it forgets. No camera, no identity, no log, nothing transmitted.

## The cybernetic idea

Feedback, with consent built into the physical act. Sensing happens only while you choose to touch it. One signal — your pulse — changes one output — a colour — and nothing else.

## What is genuinely achievable today

All of it, for very little. An ESP32 (~£8) or a Raspberry Pi Pico (~£5), a MAX30102 optical pulse sensor as the contact pad (~£5), and a small addressable LED ring (~£5–10). The pulse is read on the microcontroller, mapped to a colour in memory, and never written to storage or to a network.

## What remains speculative

Nothing technical. The restraint is the design: CANDID deliberately does less than the hardware could, to stay responsible.

## Deliberately not used

Cameras and face recognition. A good pattern exists for sensing where the image never leaves the sensor board (the Useful Sensors Person Sensor did on-board face *detection* only; it is now retired and is cited here as a pattern, not a part). CANDID goes further and does not image a person at all. It infers no emotion.

## Rough BOM

| Part | ~£ |
|---|---|
| ESP32 or Pi Pico | 5–8 |
| MAX30102 pulse sensor breakout | 5 |
| Addressable LED ring | 5–10 |
| Enclosure, touch pad, wiring | 5–15 |
| **Total** | **~£20–40** |

## Ethics and legality

Heart-rate data is biometric and special-category under GDPR Article 9, so it is minimised, held only in memory, kept on the device, and gated behind a deliberate touch. The EU AI Act (Regulation (EU) 2024/1689) prohibits inferring emotions in workplaces and education (Article 5(1)(f), in force since 2 February 2025) and biometric categorisation of sensitive traits (Article 5(1)(g)). CANDID does neither, and must never be deployed as workplace or classroom sensing. A visible indicator shows when it is reading. Measuring a pulse and changing a colour is not reading how you feel; refusing the emotion-recognition framing is deliberate, because that framing is both unreliable and, in those settings, unlawful.

## Limits

**Does:** sense a pulse on deliberate contact, on-device, ephemerally. **Does not:** identify anyone, infer emotion, categorise, store, or transmit.
