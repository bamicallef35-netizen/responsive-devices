# heat — what a pit viper feels

> **Status: proposal, buildable today.** Prices rough, November 2026.

## Proposal

A keyring you point. It reads the surface temperature of whatever is in front of it without touching, and tells you by pitch through a tiny speaker, or by a number on a small display: the radiator, the window, the dog, the cold spot on the wall where the insulation is missing.

## The sense it adds

Thermal infrared. Pit vipers and vampire bats sense the infrared that warm bodies radiate; a person feels only what the skin touches or stands near. A thermopile reads that radiation from a distance.

## What is genuinely achievable today

An MLX90614 infrared thermometer (~£8–12) reads surface temperature over I2C with a field of view of about 90° (narrower variants exist), to roughly half a degree. A XIAO (~£5–8) drives either a piezo buzzer whose pitch tracks temperature (~£1) or a 0.42-inch OLED (~£3). This is the one device in the series that may run over £15.

## What remains speculative

Imaging. One pixel is a thermometer, not a thermal camera; a cheap thermal array (AMG8833, 8×8, ~£30) is the next step up and out of this series' budget.

## Rough BOM

| Part | ~£ |
|---|---|
| MLX90614 breakout | 8–12 |
| Seeed XIAO | 5–8 |
| Piezo buzzer, or 0.42" OLED | 1–3 |
| LiPo 100 mAh and charger board, or CR2032 | 2–4 |
| Keyring body | 1–2 |
| **Total** | **~£15–20** |

## Ethics and legality

Benign. The sensor is passive; it emits nothing. Readings of people's skin are approximate and are not a fever check.

## Build sketch

Read the object-temperature register (0x07) over I2C and map it to a tone between 200 and 2000 Hz, or print it. Firmware: [`firmware/heat/heat.ino`](firmware/heat/heat.ino).

## Honesty checklist

**Does:** read surface temperature at a distance and make it audible or visible. **Does not:** image, see through anything, or diagnose.
