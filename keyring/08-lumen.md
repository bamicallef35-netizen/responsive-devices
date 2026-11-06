# lumen — hearing the lights

> **Status: proposal, buildable today.** Prices rough, November 2026.

## Proposal

A keyring with a photodiode and an earphone. Point it at a lamp and hear it: the 100 Hz hum of mains LEDs, the whine of a dimmer's PWM, the silence of a good one, the chirp of a phone screen's refresh. Most artificial light flickers; this lets you compare lamps before you buy them.

## The sense it adds

Temporal resolution of light far beyond the eye's. Flies resolve flicker several times faster than people; a photodiode and an amplifier resolve it into the audio band directly, with no computing at all.

## What is genuinely achievable today

A photodiode or phototransistor (~£0.50) into a transimpedance amplifier (one op-amp, ~£1), AC-coupled into an earphone socket — a circuit that fits on a coin. No microcontroller is needed; an ATtiny85 version can count the flicker frequency and blink it back.

## What remains speculative

Nothing technical. Whether 100 Hz flicker affects anyone is argued about; this device only makes it audible.

## Rough BOM

| Part | ~£ |
|---|---|
| Photodiode (BPW34) or phototransistor | 0.50 |
| Op-amp, capacitors, resistors | 1 |
| 3.5 mm jack | 0.50 |
| CR2032 holder and cell | 1 |
| Keyring body | 1 |
| **Total** | **~£4** |

## Ethics and legality

None to note. Keep the volume modest; some sources are loud.

## Build sketch

Photodiode reverse-biased into the op-amp's inverting input with a 1 MΩ feedback resistor; AC-couple the output to the jack. Firmware for the counting version: [`firmware/lumen/lumen.ino`](firmware/lumen/lumen.ino).

## Honesty checklist

**Does:** make a lamp's flicker audible and comparable. **Does not:** measure it in units, or make health claims.
