# Method and ethics

## Method

These are proposals in Archigram's sense: precise enough to provoke, deliberately not shipped. One rule keeps them honest. Every device is grounded in real, cheap, existing parts, named with rough prices, and split explicitly into what is achievable today and what remains speculative. That split is the point. It is how a speculative proposal stays defensible instead of drifting into a product claim it cannot meet.

## Glossary — literal, no metaphor

- **Feedback.** The output of a process is measured and fed back to change its input, so the process regulates itself. (Wiener, *Cybernetics*, 1948.)
- **Conversation.** A two-way exchange in which each side changes its next move on the basis of the other's last one, so that both build a running model of the other. (Pask's Conversation Theory.)
- **Umwelt.** The slice of the world an organism or a machine can sense and act on — its self-world, fixed by its sensors and effectors, as distinct from the world a human observer sees. (von Uexküll, 1934.)
- **Variety.** The number of distinct states a system can be in. Ashby's Law of Requisite Variety says a regulator needs at least as much variety as the disturbances it has to counter — "only variety can destroy variety." A controller is given only as much authority as the thing it tracks demands.
- **Habituation.** A response to a repeated, unchanging stimulus declines over time; a novel stimulus restores it. The simplest real form of adaptation, and a few lines of code.

## Ethics and legality framework

1. **Privacy by design.** Sensing is on-device by default. Data is ephemeral — held in memory, written to neither disk nor network — unless the user deliberately opts to keep it. No telemetry.
2. **Consent first.** Where a device senses a person, the sensing is something the person initiates (a touch, a switch), with a visible indicator while it is active.
3. **No emotion recognition.** The EU AI Act (Regulation (EU) 2024/1689) has prohibited, since 2 February 2025, inferring emotions in the workplace and in education (Article 5(1)(f), with a narrow medical and safety exception), and prohibits biometric categorisation of sensitive traits (Article 5(1)(g)). GDPR treats biometric data as special-category data (Article 9). These devices infer no emotion and categorise no one. Measuring a pulse and changing a colour is described as exactly that.
4. **Clinical honesty.** No device diagnoses, treats, prevents or improves any condition. Consumer heart-rate and radar parts are not diagnostic. A device marketed for a medical purpose could fall under medical-device regulation (UK MDR 2002 / EU MDR 2017/745), so no such claim is made anywhere.
5. **No anthropomorphism in the explanations.** A machine that habituates implements a decaying response; it does not feel anything. Historical terms such as Pask's "boredom" appear in quotation marks and are immediately glossed literally.
6. **Safety.** Low voltage throughout. Any projected or flashing light carries a photosensitive-epilepsy warning and stays within safe flicker rates.

## Claims this dossier will not make

- That a local model understands you, or is a substitute for a person.
- That any device reads your emotions or your mental state.
- That any device is therapeutic, medical, or clinically tested.
- That any of these is a product, is built, or is validated.
- That a room or an object wants, intends, or understands anything.

## Honesty rubric — every device page must pass

- [ ] Parts are real, named and priced (roughly, with a date).
- [ ] "Achievable today" contains no capability the named parts cannot deliver.
- [ ] "Remains speculative" is non-empty and specific.
- [ ] No medical or therapeutic claim anywhere.
- [ ] No emotion-recognition framing.
- [ ] Data path stated: what is sensed, where it goes, how long it lives.
- [ ] Attribution correct for any historical machine it echoes.
