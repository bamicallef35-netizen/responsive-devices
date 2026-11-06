# tremor — vibration below hearing

> **Status: proposal, buildable today.** Prices rough, November 2026.

## Proposal

A keyring that flickers when the thing it rests on trembles: a table, a floor, a railing, a window pane, a parked car. The building's hum, the lorry two streets away, someone walking upstairs.

## The sense it adds

Substrate vibration. Elephants listen through their feet; spiders through their legs; a person on a chair notices only the big ones. A piezo disc pressed against a surface reads what the surface is doing.

## What is genuinely achievable today

A piezo disc (~£0.50) into an ADC pin through a high-value resistor, an ATtiny85 (~£2) and an LED, or a coin vibration motor so the keyring itself relays what it feels. A high-pass of a few hertz and a slow envelope follower make the signal legible.

## What remains speculative

Calibration. It shows change and rhythm, not amplitude in any unit.

## Rough BOM

| Part | ~£ |
|---|---|
| Piezo disc | 0.50 |
| ATtiny85 | 2 |
| LED or coin vibration motor, resistors | 1–2 |
| CR2032 holder and cell | 1 |
| Keyring body with the disc exposed on one face | 1 |
| **Total** | **~£5–7** |

## Ethics and legality

None to note.

## Build sketch

Piezo to ADC with a bias resistor; subtract the running mean; drive the LED with the envelope. Firmware: [`firmware/tremor/tremor.ino`](firmware/tremor/tremor.ino).

## Honesty checklist

**Does:** show vibration of the surface it touches. **Does not:** measure it in units, or hear through walls.
