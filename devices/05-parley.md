# PARLEY — a room that negotiates its own lighting

> **Status: speculative proposal.** Not a product. Prices rough, November 2026. The variety arithmetic it relies on is implemented and tested in [viable-system-model](https://github.com/bamicallef35-netizen/viable-system-model).

## Proposal

A room that proposes small lighting changes — from the time of day, the measured ambient light, and whether anyone is present — and takes your acceptance, veto or nudge, tracking your preference over time. The loop is slow, on the order of minutes, and always overridable.

## The cybernetic idea

Conversation, after Pask, and requisite variety, after Ashby. It is a genuine proposal-and-response exchange, and the controller is deliberately given only as much variety as the occupant's preferences and the daylight disturbance demand — no more authority than it needs. A distant nod to the Price–Pask Fun Palace, and to Roche's environments that take their cue from the people inside them.

## What is genuinely achievable today

The full control loop and a simple online preference model. An ESP32 or a Pi (~£8–80), a BH1750 ambient-light sensor (~£4), an HLK-LD2410 radar for presence without a camera (~£6), smart bulbs or a WS2812B/DMX fixture (~£8–15 each), and a physical veto-and-nudge control (~£5).

## What remains speculative

The room understanding you, or having goals. It is a preference-tracking controller with a conversational, override-first interface. Roche's "humours" are a design reference here, not a claim about what the room knows.

## Rough BOM

| Part | ~£ |
|---|---|
| ESP32 or Raspberry Pi | 8–80 |
| BH1750 light sensor | 4 |
| HLK-LD2410 presence radar | 6 |
| Two to four smart bulbs or one addressable fixture | 20–50 |
| Veto/nudge control, wiring | 5–10 |
| **Total** | **~£60–150** |

## Ethics and legality

Presence by radar, not by camera. Occupancy stays local and ephemeral; manual override is always available and the system can never lock anyone out. Any home system that could log occupancy is sensitive: keep it local, and never use it to infer the presence of others covertly.

## Limits

**Does:** negotiate lighting and track a preference, with authority sized to need. **Does not:** understand, intend, or surveil.
