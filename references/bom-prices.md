# Parts and rough prices

Last checked **November 2026**. These are approximate UK retail prices before postage; they move with stock, exchange rates and tariffs, and at least one part listed below has been retired. Re-verify before quoting any of them in public.

| Part | ~£ | Confidence | Note |
|---|---|---|---|
| Raspberry Pi 5, 8 GB | 76–80 | high | 16 GB ~£100–120 for larger models |
| Pi 5 active cooler | 5 | high | essential: throttles within minutes without it |
| Pi 5 27 W USB-C supply | 12 | high | — |
| Raspberry Pi 4 | 35–55 | medium | enough for REFUGE's visuals |
| ESP32 development board, generic | 5–12 | low–medium | clones are cheap; branded boards cost more |
| RP2040 / Raspberry Pi Pico | 4–6 | medium | — |
| ReSpeaker 2-mic HAT | 10–13 | medium | microphone array for HEARTH |
| I2S MEMS microphone (INMP441, SPH0645) | 3–6 | low–medium | — |
| MAX30102 pulse / SpO2 breakout | 3–7 | high | hobby grade; not diagnostic |
| Polar H10 chest strap | 75–96 | medium | reliable R-R intervals; price varies by region |
| HLK-LD2410C 24 GHz presence radar | 5–6.50 | high | presence and micro-motion only; no camera; vendor "heartbeat" claims unverified |
| Useful Sensors Person Sensor | was ~8 | high | **retired** — cited only as a pattern for on-device sensing |
| BH1750 ambient-light sensor | 3–6 | low–medium | for PARLEY |
| WS2812B addressable LED strip | 8–15 / m | low | re-verify |
| Budget pico projector | 60–120 | low–medium | REFUGE's projection option |
| Smart bulb (Wi-Fi or Zigbee) | 8–15 each | low–medium | PARLEY fixtures |
| Small speaker and amplifier | 15–30 | low–medium | — |

## Local inference, as it actually runs

On a Raspberry Pi 5 (8 GB) with active cooling, community benchmarks put 1B-class quantised models at roughly 6–12 tokens per second, a 3.8B model at 4–5, and 7–8B models at 1–2 (medium confidence: blog benchmarks, broadly consistent with one another). Tooling is open: llama.cpp or Ollama for the model, whisper.cpp for speech in, Piper for speech out. The step up for a more responsive node is an N100 mini PC (~£130–150) or a Jetson Orin Nano (~£250). Measured figures for a laptop are in [offline-edge-node's BENCHMARKS.md](https://github.com/bamicallef35-netizen/offline-edge-node/blob/main/BENCHMARKS.md).
