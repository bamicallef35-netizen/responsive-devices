# lodestone — the magnetic field, as touch

> **Status: proposal, buildable today.** Prices rough, November 2026.

## Proposal

A keyring that hums against your palm in proportion to the magnetic field around it. Walk past a transformer, a loudspeaker, a car's alternator, the Earth's own field when you turn it over, and feel it.

## The sense it adds

Magnetoreception. Migratory birds, sea turtles and some bacteria orient by the Earth's field; people have no organ for it. A linear Hall-effect sensor reads field strength along one axis; a three-axis magnetometer reads direction too. Mapped onto a vibration motor, field strength becomes something the hand reports without looking.

## What is genuinely achievable today

All of it. A linear Hall sensor (SS49E, ~£1) gives an analogue voltage proportional to field strength along its axis, sensitive enough for magnets and motors but not for the Earth's field; a QMC5883L three-axis magnetometer (~£2) resolves the Earth's field and so can also act as a compass. A microcontroller (Seeed XIAO SAMD21 or ESP32-C3, ~£5–8; an ATtiny85, ~£2, for the Hall version) maps the reading onto a coin vibration motor (~£1) through a transistor. A CR2032 cell (~£1) runs the Hall version for days.

## What remains speculative

Nothing technical. Whether a person comes to feel the field as a sense, as distinct from reading a vibration, is the interesting question, and only wearing it answers it.

## Rough BOM

| Part | ~£ |
|---|---|
| SS49E linear Hall sensor, or QMC5883L magnetometer breakout | 1–2 |
| ATtiny85 or Seeed XIAO | 2–8 |
| Coin vibration motor, NPN transistor, diode, resistor | 2 |
| CR2032 holder and cell | 1 |
| Keyring body (3D print or a small box) | 1–2 |
| **Total** | **~£7–15** |

## Ethics and legality

Benign. A strong magnet near a pacemaker is the only hazard, and the device carries no magnet; it only senses.

## Build sketch

Hall version: sensor output to an ADC pin; `analogRead` centred on half the supply (no field) gives a signed reading; the absolute value, scaled, drives the motor with PWM. Magnetometer version: read X, Y, Z over I2C and vibrate on the vector magnitude, or on the heading error from north for a compass you feel. Firmware: [`firmware/lodestone/lodestone.ino`](firmware/lodestone/lodestone.ino).

## Limits

**Does:** turn local magnetic field strength into vibration you can feel. **Does not:** measure fields precisely, detect anything hidden, or do anything the sensor datasheet does not say.
