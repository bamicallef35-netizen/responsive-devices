# responsive-devices

A dossier of speculative cybernetic devices (small machines that sense, respond and adapt) in the register of Archigram, Gordon Pask and François Roche. Each one is a proposal grounded in real, cheap, existing parts, with its price list attached. They are proposals, not products.

## Why this register

Archigram was a London group of six architects (Peter Cook, Warren Chalk, Ron Herron, Dennis Crompton, Michael Webb and David Greene) whose magazine ran from 1961 into the early 1970s. Walking City (Herron, 1964), Plug-In City (Cook, 1964), Computer City (Crompton, 1964) and Instant City (c. 1968–70) were mostly never built. Their value was as precise, provocative proposals, drawn well enough to be argued with; the group received the RIBA Royal Gold Medal in 2002 for them. Gordon Pask built machines that hold a two-way exchange: Musicolour (from 1953) and the Colloquy of Mobiles (Cybernetic Serendipity, ICA, 1968). François Roche, with R&Sie(n) (founded in Paris in 1993 with Stéphanie Lavaux and Gilles Desevedavy) and later New-Territories and [eIf/bʌt/c], proposes architecture as a protocol run under uncertainty (*I've heard about…* (2005), the Olzweg robot (2006), *Une architecture des humeurs* (2010)) and publishes every project as a scenario: programme, area, cost, team, and a one-paragraph premise. Mosquito Bottleneck (Trinidad, 2003) is the model: West Nile fever detected on the island, a house as a Klein-bottle mosquito trap, about 130 m², 200,000 USD stated. This dossier borrows that scenario format and the Archigram register, which are distinct lineages (1960s London; 1990s–2010s Paris and Bangkok) and holds both to one discipline: every proposal is tied to a parts list. Two R&Sie(n) works stand as precedents for entries not yet written: Dustyrelief/B_mu (Bangkok, 2002), an electrostatic envelope that accretes the city's airborne particles into a relief, and Hybrid Muscle (Chiang Mai, 2002), electricity stored as counterweights raised by an elephant.

## The rule

Every device states, separately and plainly: the cybernetic idea it foregrounds; what is achievable today with named cheap parts; what remains speculative; a rough bill of materials with a cost; and a note on ethics and legality. [`METHOD-AND-ETHICS.md`](METHOD-AND-ETHICS.md) sets out the method, a literal glossary, and the rubric each page has to pass.

## The devices

| # | Device | In one line | Foregrounds | Working software |
|---|--------|-------------|-------------|------------------|
| 01 | [HEARTH](devices/01-hearth.md) | An offline node that runs a small language model on your own hardware, with nothing leaving the room. | umwelt, conversation | [offline-edge-node](https://github.com/bamicallef35-netizen/offline-edge-node) |
| 02 | [REFUGE](devices/02-refuge.md) | A corner of a room whose light and sound follow your breathing on a slow loop. | feedback | — |
| 03 | [CANDID](devices/03-candid.md) | A desk object that reads your pulse only while you choose to touch it, on-device, and forgets when you let go. | feedback, consent | — |
| 04 | [SPECULATRIX II](devices/04-speculatrix-ii.md) | A desk creature in Grey Walter's reflex lineage that stops reacting to a stimulus that repeats, and wakes to a new one. | habituation, umwelt | [grey-walter-tortoise](https://github.com/bamicallef35-netizen/grey-walter-tortoise) |
| 05 | [PARLEY](devices/05-parley.md) | A room that proposes small lighting changes and takes your acceptance or veto, tracking your preference over time. | conversation, requisite variety | [viable-system-model](https://github.com/bamicallef35-netizen/viable-system-model) |
| 06 | [MUSICOLOUR II](devices/06-musicolour-ii.md) | A sound-to-light instrument, after Pask, that dims its response to a repeated figure and brightens to a new one. | conversation, habituation, variety | [colloquy](https://github.com/bamicallef35-netizen/colloquy) |

Where a working repository exists, the dossier page is the hardware half of a thing whose software half already runs and is tested; the page says exactly which half is which.

## keyring: senses you can carry

A second series, pocket-sized: eight devices that each add one channel of the world to the wearer's umwelt: the magnetic field as touch, the ultraviolet a bee sees, the infrared a pit viper feels, ultrasound brought down into hearing, the sky's polarisation, nearby radio, vibration below hearing, the flicker of lamps. Each costs roughly £3 to £15 each, with firmware short enough to read in a minute (`make sketches` syntax-checks all of it) and a drawn plate per device. See [`keyring/`](keyring/README.md) and the [plates](plates/) (all eight on [one printable sheet](plates/keyring-sheet.svg)) or the [gallery page](https://bamicallef35-netizen.github.io/responsive-devices/).

## Medical and privacy limits

None of these diagnoses, treats or improves any medical or psychological condition. None reads emotions. None sends data anywhere by default. Prices are rough, dated, and move. Where a device touches the body or senses a person, its ethics note says exactly what is sensed, where it goes and how long it lives.

## Background

One piece of a public cybernetics portfolio alongside [umwelt-engine](https://github.com/bamicallef35-netizen/umwelt-engine), [grey-walter-tortoise](https://github.com/bamicallef35-netizen/grey-walter-tortoise), [viab](https://github.com/bamicallef35-netizen/viab), [colloquy](https://github.com/bamicallef35-netizen/colloquy) and [viable-system-model](https://github.com/bamicallef35-netizen/viable-system-model). Maintained by Ben Micallef, founder of Sentinus (autonomy without GPS).

## License

Text and drawings: [CC BY 4.0](LICENSE). Any code samples: MIT.
