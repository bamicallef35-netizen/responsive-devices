# HEARTH — an offline companion node

> **Status: speculative proposal.** Not a product. Prices rough, November 2026. The software half exists and is tested: [offline-edge-node](https://github.com/bamicallef35-netizen/offline-edge-node).

## Proposal

A small box on a shelf that runs a language model entirely on its own hardware. You type or speak to it; it answers. Nothing leaves the room — no account, no cloud, no telemetry.

## The cybernetic idea

Umwelt, and at a stretch, conversation. In practice it is umwelt: the node's world is only the text and audio you give it and the few files it keeps locally; its sensors and effectors define everything it can know. Conversation in Pask's strict sense — both sides building a model of the other — remains an aspiration here.

## What is genuinely achievable today

Fully offline text chat and local voice in and out on a Raspberry Pi 5 (8 GB, ~£80) with an active cooler, running a 1–4B quantised model through llama.cpp at roughly 3–10 tokens per second; whisper.cpp for speech in, Piper for speech out; "memory" as plain local files the user can read and delete. The air gap can be enforced in software, so that any attempt to reach the network crashes the program — [offline-edge-node](https://github.com/bamicallef35-netizen/offline-edge-node) does this and tests it.

## What remains speculative

Anything resembling a companion that understands you, keeps rich durable memory, or matches a cloud model's breadth. Small local models are slow and limited. Fluent real-time voice is marginal on a Pi and wants an N100 mini PC (~£130–150) or a Jetson Orin Nano (~£250).

## Rough BOM

| Part | ~£ |
|---|---|
| Raspberry Pi 5, 8 GB | 80 |
| Active cooler | 5 |
| 27 W USB-C power supply | 12 |
| 64 GB microSD, or NVMe HAT + SSD | 10–35 |
| ReSpeaker 2-mic HAT or a USB microphone | 10 |
| Small speaker | 5 |
| Case | 10 |
| **Total** | **~£130–160** |

Software is free and open.

## Ethics and legality

Privacy is the whole point, so say plainly what it is: a local text-and-voice tool, not a confidant. No mental-health or advice claims. Warn against emotional over-reliance and against reading intention into it. All data local and deletable by the user.

## Limits

**Does:** run inference offline with no data egress, enforceably. **Does not:** understand you, keep rich memory, or replace a person or a clinician.
