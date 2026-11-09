# radio — nearby transmission

> **Status: proposal, buildable today.** Prices rough, November 2026. This page refuses the "hidden camera detector" claim such devices are sold with.

## Proposal

A keyring with a single LED that brightens near a transmitting radio: a phone in a call, a Wi-Fi router, a key fob when pressed, a microwave oven's leakage, a walkie-talkie.

## The sense it adds

Radio-frequency awareness. The air carries transmissions a person has no organ for. A broadband diode detector turns the strongest nearby field into a voltage.

## What is genuinely achievable today

A short wire antenna, a Schottky detector diode (BAT62 or similar, ~£0.50), a smoothing capacitor and a cheap op-amp (~£1) driving an LED: a classic RF sniffer, sensitive from roughly 100 MHz into the low GHz. A ready-made "RF detector" module (~£4) does the same. A microcontroller is optional; an ATtiny85 adds a log-scaled bar or a chirp.

## What remains speculative

Everything the marketing promises. This cannot reliably find a hidden camera: a camera that records to a card transmits nothing, a Wi-Fi camera transmits only when sending, and a building is full of stronger sources. It indicates nearby transmission, nothing more.

## Rough BOM

| Part | ~£ |
|---|---|
| Schottky diode, capacitor, resistors, wire antenna | 1 |
| Op-amp (LM358 or MCP6002) | 1 |
| LED, CR2032 holder and cell | 2 |
| Optional ATtiny85 for a bar display | 2 |
| Keyring body | 1–2 |
| **Total** | **~£5–8** |

## Ethics and legality

Receiving is legal; this device transmits nothing. It does not find cameras, bugs or trackers, and the box should say so.

## Build sketch

Antenna → diode → RC filter → op-amp with gain → LED, or to an ADC pin. Firmware for the bar version: [`firmware/radio/radio.ino`](firmware/radio/radio.ino).

## Limits

**Does:** light up near strong nearby radio transmission. **Does not:** find hidden devices, identify a source, or measure exposure.
