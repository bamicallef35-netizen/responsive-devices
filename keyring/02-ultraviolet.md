# ultraviolet — what a bee sees

> **Status: proposal, buildable today.** Not a medical device; no claims about skin or sun safety. Prices rough, November 2026.

## Proposal

A keyring with a window and a row of five LEDs. Hold it to the sky and the bar shows how much ultraviolet is arriving — through cloud, off snow, in shade, behind glass.

## The sense it adds

Ultraviolet vision. Bees, many birds and reindeer see into the UV; flowers carry nectar guides in it; glass blocks most of it, which is why a sunny car is a UV shadow. A UV photodiode gives the wearer a one-number version of that channel.

## What is genuinely achievable today

A GUVA-S12SD photodiode module (~£3) outputs a voltage roughly proportional to UV-A and UV-B irradiance. A microcontroller (ATtiny85 ~£2, or a XIAO ~£5–8) reads it and lights one to five LEDs (~£1). Readings from this part are *relative* unless you calibrate against a reference meter; the five-step bar only claims rough levels for that reason.

## What remains speculative

A true UV index. The WHO index needs a calibrated, erythemally weighted sensor; this photodiode is neither. The bar tells you more or less, where, and when — it does not tell you how long you can stay out.

## Rough BOM

| Part | ~£ |
|---|---|
| GUVA-S12SD UV sensor module | 3 |
| ATtiny85 or Seeed XIAO | 2–8 |
| Five LEDs and resistors | 1 |
| CR2032 holder and cell | 1 |
| Keyring body with a clear window | 1–2 |
| **Total** | **~£8–15** |

## Ethics and legality

No medical or sun-safety claims, anywhere. It is a relative UV meter. Do not point it at a UV lamp and look through the window.

## Build sketch

Sensor out to an ADC pin; map the reading onto the number of lit LEDs with a slow average so the bar does not flicker. Firmware: [`firmware/ultraviolet/ultraviolet.ino`](firmware/ultraviolet/ultraviolet.ino).

## Limits

**Does:** show relative UV irradiance on a five-step bar. **Does not:** give a UV index, estimate burn time, or protect anyone.
