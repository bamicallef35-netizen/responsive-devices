# bat — ultrasound, brought down into hearing

> **Status: proposal, buildable today.** Prices rough, November 2026.

## Proposal

A keyring with an earphone socket. At dusk it brings the calls of bats down into the range you can hear; indoors it finds the ultrasonic whine of a switching power supply, a rodent repeller, a leaking compressed-air line.

## The sense it adds

Hearing above 20 kHz. Bats, dolphins, moths and mice use it; a person's ear stops short. A microphone that responds to 40–80 kHz plus a frequency divider makes a basic bat detector, the kind naturalists have carried for decades.

## What is genuinely achievable today

A MEMS microphone with ultrasonic response (Knowles SPU0410LR5H, ~£2) feeds a microcontroller with a fast ADC or a comparator. The simplest honest detector is a frequency divider: count zero crossings and output a square wave at one sixteenth the frequency, so a 45 kHz call becomes an audible 2.8 kHz click-tone. An ESP32-C3 or XIAO ESP32 (~£5–8) can do this, or sample at 200 kHz and shift a band down (heterodyne) for better sound.

## What remains speculative

Species identification. A frequency divider tells you something is calling and roughly how high; telling a pipistrelle from a noctule takes a full-spectrum recorder and practice.

## Rough BOM

| Part | ~£ |
|---|---|
| SPU0410LR5H ultrasonic MEMS microphone (on a small breakout) | 2–4 |
| XIAO ESP32-C3 | 5–8 |
| 3.5 mm jack, capacitor, resistors | 1 |
| LiPo 100 mAh and charger board | 3 |
| Keyring body | 1–2 |
| **Total** | **~£12–18** |

## Ethics and legality

Listening to bats is legal and harmless; disturbing roosts is not, and in the UK bats are protected. Keep earphone volume low — a divider's output is a harsh square wave.

## Build sketch

Microphone to a comparator or the ADC; count crossings; toggle the output pin every eight crossings for divide-by-16. Firmware: [`firmware/bat/bat.ino`](firmware/bat/bat.ino).

## Honesty checklist

**Does:** make ultrasound audible as a divided-down tone. **Does not:** identify species, record, or match a commercial detector's sound.
