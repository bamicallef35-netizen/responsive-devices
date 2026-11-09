# keyring — senses you can carry

Eight pocket devices, each adding one channel of the world to what its wearer can perceive. Jakob von Uexküll's term for the slice of the world an organism's senses cut out is the *Umwelt*; a bee's includes ultraviolet and the sky's polarisation, a bat's includes ultrasound, a pit viper's includes infrared. Each device below gives a person one of those channels, on a keyring, for roughly £3 to £15 in parts, with firmware short enough to read in a minute.

They follow the dossier's rule: named parts and rough prices, an explicit split between what the parts deliver and what is still speculative, and an ethics note. Several of these senses are sold with claims they cannot meet (radio detectors that "find hidden cameras", ultraviolet sensors that "protect your skin"); the pages say what each one actually measures.

| # | Device | What it adds | Output | ~£ |
|---|--------|--------------|--------|----|
| 01 | [lodestone](01-lodestone.md) | the magnetic field, as a sense of touch | vibration motor | 8 |
| 02 | [ultraviolet](02-ultraviolet.md) | the ultraviolet a bee sees | five-LED bar | 8 |
| 03 | [heat](03-heat.md) | the infrared a pit viper feels | pitch, or a small display | 15–18 |
| 04 | [bat](04-bat.md) | ultrasound, shifted down into hearing | earphone | 12 |
| 05 | [polar](05-polar.md) | the sky's polarisation, by which bees and ants steer | your own eye | 3 |
| 06 | [radio](06-radio.md) | nearby radio transmission | LED | 6 |
| 07 | [tremor](07-tremor.md) | vibration below hearing | LED, vibration | 5 |
| 08 | [lumen](08-lumen.md) | the flicker of artificial light | earphone or buzzer | 4 |

Firmware for the six that need a microcontroller is in [`firmware/`](firmware/), one short sketch each, syntax-checked against a stub Arduino API by `make sketches` in the repository root. Plates for each device are in [`../plates/`](../plates/), drawn by [`../tools/plates.js`](../tools/plates.js).

Prices are rough UK retail, November 2026, before postage; see [`../references/bom-prices.md`](../references/bom-prices.md) for confidence and the re-verify note.
