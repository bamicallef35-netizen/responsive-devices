// scenario-plates.js — one plate per room-scale proposal, in the scenario
// format R&Sie(n) used for every project: programme, area, cost, team,
// premise — plus a diagram of the loop each device closes. Run:
//   node tools/scenario-plates.js
import { writeFileSync, mkdirSync } from "node:fs";

const INK = "#111111", INK2 = "#6b6b6b", RULE = "#d4d4d4", ACCENT = "#0000ee", PAPER = "#ffffff";
const W = 960, H = 600, FONT = "IBM Plex Mono, ui-monospace, Menlo, monospace";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const text = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size || 11}" fill="${o.fill || INK}" ${o.anchor ? `text-anchor="${o.anchor}"` : ""} ${o.weight ? `font-weight="${o.weight}"` : ""}>${esc(s)}</text>`;

// Each loop: sensed -> device -> output -> person, drawn as four nodes on a ring.
const devices = [
  { id: "01-hearth", name: "HEARTH", line: "an offline companion node", programme: "local text and voice; nothing leaves the room", area: "a shelf; one box", cost: "~£130–160", team: "Pi 5, llama.cpp, whisper.cpp, Piper", premise: "a language model on your own hardware, with no account and no cloud", loop: ["your words", "local model", "an answer, spoken or typed", "you"], idea: "umwelt: its world is only what you give it" },
  { id: "02-refuge", name: "REFUGE", line: "a responsive rest-and-attention environment", programme: "light and sound that follow your breathing", area: "a corner of a room", cost: "~£150–300", team: "Pi, pulse or radar sensor, projector or LED wash", premise: "a biofeedback loop as a room; not a medical device, no clinical claims", loop: ["your breathing", "sensor", "slower light and sound", "you"], idea: "feedback: the output follows the signal that produced it" },
  { id: "03-candid", name: "CANDID", line: "a consent-first biometric-aware object", programme: "pulse to colour, only while touched, then forgotten", area: "a desk", cost: "~£20–40", team: "ESP32, MAX30102, LED ring", premise: "sensing a person is something the person starts, on-device, ephemeral", loop: ["your pulse, on touch", "microcontroller", "a colour", "you lift your hand"], idea: "consent as a physical act; no identity, no emotion, no record" },
  { id: "04-speculatrix-ii", name: "SPECULATRIX II", line: "a desk creature that habituates", programme: "orients to light and sound; tires of what repeats", area: "a desk", cost: "~£25–45", team: "ESP32, LDR, sound sensor, two servos", premise: "Walter's reflex loop plus one dynamic he did not have: habituation", loop: ["light, sound", "decaying response", "a turn of the head", "you change the stimulus"], idea: "habituation: a repeated stimulus loses its effect; a new one restores it" },
  { id: "05-parley", name: "PARLEY", line: "a room that negotiates its own lighting", programme: "proposals you accept, veto or nudge; a preference learned slowly", area: "a room", cost: "~£60–150", team: "ESP32, BH1750, LD2410 radar, smart bulbs", premise: "a controller given only as much authority as the occupant's preferences demand", loop: ["daylight, presence", "a proposal", "accept / veto / nudge", "the room adjusts"], idea: "conversation, and requisite variety: authority sized to need" },
  { id: "06-musicolour-ii", name: "MUSICOLOUR II", line: "a sound-to-light instrument that habituates", programme: "play; the light answers; repeat and it dims", area: "a table", cost: "~£30–60", team: "ESP32, I2S microphone, LED matrix", premise: "Pask and McKinnon-Wood's Musicolour (from 1953), rebuilt as an instrument", loop: ["what you play", "features, habituation", "light", "you vary the figure"], idea: "a two-way pull: novelty is variety, the machine rewards it" },
];

function ring(d, cx, cy, R) {
  let g = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${RULE}"/>`;
  const n = d.loop.length;
  d.loop.forEach((label, i) => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
    const next = -Math.PI / 2 + ((i + 1) / n) * Math.PI * 2, nx = cx + R * Math.cos(next), ny = cy + R * Math.sin(next);
    // arrow along the ring between nodes
    const mx = cx + R * Math.cos((a + next) / 2), my = cy + R * Math.sin((a + next) / 2);
    g += `<circle cx="${mx}" cy="${my}" r="2.2" fill="${i === 1 ? ACCENT : INK}"/>`;
    g += `<circle cx="${x}" cy="${y}" r="${i === 1 ? 9 : 7}" fill="${PAPER}" stroke="${i === 1 ? ACCENT : INK}" stroke-width="1.2"/>`;
    const lx = cx + (R + 24) * Math.cos(a), ly = cy + (R + 24) * Math.sin(a);
    g += text(lx, ly + 4, label, { size: 10, fill: INK2, anchor: Math.cos(a) > 0.3 ? "start" : Math.cos(a) < -0.3 ? "end" : "middle" });
    void nx; void ny;
  });
  return g;
}

mkdirSync("plates", { recursive: true });
for (const d of devices) {
  const rows = [["programme", d.programme], ["area", d.area], ["cost, rough", d.cost], ["parts", d.team], ["premise", d.premise]];
  let table = text(480, 118, "scenario", { size: 12, fill: INK2 });
  rows.forEach(([k, v], i) => {
    const y = 146 + i * 42;
    table += `<line x1="480" y1="${y - 14}" x2="900" y2="${y - 14}" stroke="${RULE}" stroke-width="0.8"/>`;
    table += text(480, y, k, { size: 11, fill: INK2 });
    // wrap value at ~44 chars into two lines
    const words = v.split(" "); let l1 = "", l2 = "";
    for (const w of words) { if (!l2 && (l1 + " " + w).trim().length <= 44) l1 = (l1 + " " + w).trim(); else l2 = (l2 + " " + w).trim(); }
    table += text(600, y, l1, { size: 11 }); if (l2) table += text(600, y + 14, l2, { size: 11 });
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(d.name)} — ${esc(d.line)}">
<rect width="${W}" height="${H}" fill="${PAPER}"/>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="${RULE}"/>
${text(40, 48, d.id.slice(0, 2) + " / " + d.name, { size: 14, weight: 600 })}
${text(40, 68, d.line, { size: 12, fill: INK2 })}
${text(W - 40, 48, "responsive-devices — room-scale proposals", { size: 11, fill: INK2, anchor: "end" })}
${text(W - 40, 66, "speculative design proposal, not a product", { size: 11, fill: INK2, anchor: "end" })}
${text(40, 118, "the loop it closes", { size: 12, fill: INK2 })}
${ring(d, 230, 300, 110)}
${text(40, 470, d.idea, { size: 11, fill: INK })}
${table}
${text(40, H - 28, "drawn by tools/scenario-plates.js — the scenario format after R&Sie(n); paper, ink, one accent for the device. prices rough, November 2026.", { size: 10, fill: INK2 })}
</svg>
`;
  writeFileSync(`plates/${d.id}.svg`, svg);
  console.log("plate  " + d.id + ".svg");
}
