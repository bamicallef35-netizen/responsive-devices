// plates.js — draw one plate per keyring device as SVG, in the same system as
// the site: paper, ink hairlines, one accent. Run: node tools/plates.js
// Each plate: the object in outline with its parts called out, the band of
// the world it opens (human range in ink, the device's in blue), and the
// parts list. Plates are drawings of proposals, not photographs of products.
import { writeFileSync, mkdirSync } from "node:fs";

const INK = "#111111", INK2 = "#6b6b6b", RULE = "#d4d4d4", ACCENT = "#0000ee", PAPER = "#ffffff";
const W = 960, H = 600, FONT = "IBM Plex Mono, ui-monospace, Menlo, monospace";

const devices = [
  { id: "01-lodestone", name: "lodestone", line: "the magnetic field, as touch", price: "£7–15",
    sensor: "SS49E Hall sensor / QMC5883L", output: "coin vibration motor", mcu: "ATtiny85 / XIAO", power: "CR2032",
    band: { label: "magnetic flux density", unit: "µT", lo: 0, hi: 2000, human: null, device: [50, 2000], marks: [[50, "Earth's field"], [500, "fridge magnet"], [1500, "loudspeaker"]] } },
  { id: "02-ultraviolet", name: "ultraviolet", line: "what a bee sees", price: "£8–15",
    sensor: "GUVA-S12SD UV photodiode", output: "five-LED bar", mcu: "ATtiny85 / XIAO", power: "CR2032",
    band: { label: "wavelength", unit: "nm", lo: 250, hi: 750, human: [400, 700], device: [280, 400], marks: [[300, "UV-B"], [360, "UV-A"], [550, "green"]] } },
  { id: "03-heat", name: "heat", line: "what a pit viper feels", price: "£15–20",
    sensor: "MLX90614 thermopile", output: "piezo pitch / 0.42\" OLED", mcu: "XIAO", power: "LiPo 100 mAh",
    band: { label: "wavelength", unit: "µm", lo: 0.3, hi: 15, human: [0.4, 0.7], device: [5.5, 14], marks: [[0.55, "visible"], [10, "body heat"]] } },
  { id: "04-bat", name: "bat", line: "ultrasound, brought down into hearing", price: "£12–18",
    sensor: "SPU0410LR5H MEMS mic", output: "earphone (÷16)", mcu: "XIAO ESP32-C3", power: "LiPo 100 mAh",
    band: { label: "frequency", unit: "kHz", lo: 0, hi: 120, human: [0.02, 20], device: [20, 100], marks: [[45, "pipistrelle"], [25, "noctule"], [40, "power supply whine"]] } },
  { id: "05-polar", name: "polar", line: "the sky's compass", price: "£3",
    sensor: "linear polarising film ×2", output: "your own eye", mcu: "none", power: "none",
    band: { label: "polarisation angle", unit: "°", lo: 0, hi: 180, human: null, device: [0, 180], marks: [[90, "band 90° from the sun"]] } },
  { id: "06-radio", name: "radio", line: "nearby transmission", price: "£5–8",
    sensor: "wire antenna + Schottky diode", output: "LED / five-LED bar", mcu: "optional ATtiny85", power: "CR2032",
    band: { label: "frequency", unit: "MHz", lo: 0, hi: 3000, human: null, device: [100, 2500], marks: [[433, "key fob"], [900, "phone"], [2400, "Wi-Fi"]] } },
  { id: "07-tremor", name: "tremor", line: "vibration below hearing", price: "£5–7",
    sensor: "piezo disc", output: "LED / vibration motor", mcu: "ATtiny85", power: "CR2032",
    band: { label: "frequency", unit: "Hz", lo: 0, hi: 60, human: [20, 60], device: [2, 60], marks: [[5, "footsteps"], [15, "traffic"], [50, "mains hum"]] } },
  { id: "08-lumen", name: "lumen", line: "hearing the lights", price: "£4",
    sensor: "BPW34 photodiode", output: "earphone / LED", mcu: "none, or ATtiny85", power: "CR2032",
    band: { label: "flicker frequency", unit: "Hz", lo: 0, hi: 2000, human: [0, 60], device: [1, 2000], marks: [[100, "mains LED"], [240, "PWM dimmer"], [1000, "fast PWM"]] } },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const text = (x, y, s, opts = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${opts.size || 12}" fill="${opts.fill || INK}" ${opts.anchor ? `text-anchor="${opts.anchor}"` : ""} ${opts.weight ? `font-weight="${opts.weight}"` : ""}>${esc(s)}</text>`;

function object(d) {
  // The keyring object: ring, body, sensor window, output, drawn as hairlines.
  const x = 70, y = 120, w = 330, h = 190;
  let g = "";
  g += `<circle cx="${x + 14}" cy="${y - 10}" r="22" fill="none" stroke="${INK}" stroke-width="1.2"/>`;      // split ring
  g += `<line x1="${x + 30}" y1="${y + 4}" x2="${x + 44}" y2="${y + 18}" stroke="${INK}" stroke-width="1"/>`;  // link
  g += `<rect x="${x + 40}" y="${y + 14}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-width="1.2"/>`; // body
  // sensor window: left third
  g += `<rect x="${x + 60}" y="${y + 40}" width="70" height="70" fill="none" stroke="${INK}" stroke-width="1"/>`;
  g += `<rect x="${x + 72}" y="${y + 52}" width="46" height="46" fill="${RULE}" stroke="none"/>`;
  g += `<line x1="${x + 95}" y1="${y + 110}" x2="${x + 95}" y2="${y + 122}" stroke="${INK2}" stroke-width="0.8"/>`;
  g += text(x + 60, y + 136, "sensor: " + d.sensor, { size: 10, fill: INK2 });
  // output: right part — a bar of five squares, or a circle
  if (/LED bar|five-LED/.test(d.output)) {
    for (let i = 0; i < 5; i++) g += `<rect x="${x + 200 + i * 24}" y="${y + 60}" width="16" height="16" fill="${i < 3 ? ACCENT : "none"}" stroke="${INK}" stroke-width="1"/>`;
  } else if (/vibration/.test(d.output)) {
    g += `<circle cx="${x + 250}" cy="${y + 70}" r="22" fill="none" stroke="${INK}" stroke-width="1"/>`;
    g += `<circle cx="${x + 250}" cy="${y + 70}" r="7" fill="${ACCENT}" stroke="none"/>`;
  } else if (/earphone/.test(d.output)) {
    g += `<circle cx="${x + 250}" cy="${y + 70}" r="9" fill="none" stroke="${INK}" stroke-width="1.2"/>`;
    g += `<circle cx="${x + 250}" cy="${y + 70}" r="3" fill="${ACCENT}"/>`;
    g += text(x + 250, y + 100, "3.5 mm", { size: 10, fill: INK2, anchor: "middle" });
  } else if (/OLED|pitch/.test(d.output)) {
    g += `<rect x="${x + 210}" y="${y + 52}" width="90" height="36" fill="none" stroke="${INK}" stroke-width="1"/>`;
    g += text(x + 255, y + 75, "21.4 °C", { size: 12, fill: ACCENT, anchor: "middle" });
  } else {
    g += `<circle cx="${x + 250}" cy="${y + 70}" r="20" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="3 3"/>`;
  }
  g += `<line x1="${x + 250}" y1="${y + 110}" x2="${x + 250}" y2="${y + 140}" stroke="${INK2}" stroke-width="0.8"/>`;
  g += text(x + 250, y + 154, "output: " + d.output, { size: 11, fill: INK2, anchor: "middle" });
  // microcontroller + power, bottom-left of the body
  g += `<rect x="${x + 60}" y="${y + 146}" width="54" height="30" fill="none" stroke="${INK}" stroke-width="0.8"/>`;
  g += text(x + 87, y + 165, "mcu", { size: 10, fill: INK2, anchor: "middle" });
  g += `<circle cx="${x + 150}" cy="${y + 161}" r="13" fill="none" stroke="${INK}" stroke-width="0.8"/>`;
  g += text(x + 150, y + 165, "cell", { size: 9, fill: INK2, anchor: "middle" });
  g += text(x + 40, y + h + 34, d.mcu + "  /  " + d.power, { size: 11, fill: INK2 });
  return g;
}

function band(d) {
  const b = d.band, x0 = 480, x1 = 900, y = 250;
  const sx = (v) => x0 + ((v - b.lo) / (b.hi - b.lo)) * (x1 - x0);
  let g = "";
  g += text(x0, y - 58, "the band it opens", { size: 12, fill: INK2 });
  g += text(x0, y - 40, b.label + " (" + b.unit + ")", { size: 11, fill: INK2 });
  g += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${RULE}" stroke-width="1"/>`;
  if (b.human) {
    g += `<rect x="${sx(b.human[0])}" y="${y - 10}" width="${Math.max(2, sx(b.human[1]) - sx(b.human[0]))}" height="8" fill="${INK}"/>`;
    g += text(sx(b.human[0]), y - 16, "human", { size: 10, fill: INK });
  } else {
    g += text(x0, y - 16, "human: no organ for it", { size: 10, fill: INK });
  }
  g += `<rect x="${sx(b.device[0])}" y="${y + 4}" width="${Math.max(2, sx(b.device[1]) - sx(b.device[0]))}" height="8" fill="${ACCENT}"/>`;
  g += text(sx(b.device[0]), y + 26, d.name, { size: 10, fill: ACCENT });
  for (const [v, label] of b.marks) {
    g += `<line x1="${sx(v)}" y1="${y + 14}" x2="${sx(v)}" y2="${y + 40}" stroke="${INK2}" stroke-width="0.6"/>`;
    g += text(sx(v), y + 52, label, { size: 10, fill: INK2, anchor: "middle" });
  }
  g += text(x0, y + 80, String(b.lo), { size: 10, fill: INK2 });
  g += text(x1, y + 80, String(b.hi), { size: 10, fill: INK2, anchor: "end" });
  return g;
}

function parts(d) {
  const x = 480, y = 380;
  const rows = [["sensor", d.sensor], ["output", d.output], ["controller", d.mcu], ["power", d.power], ["parts, rough", d.price]];
  let g = text(x, y - 18, "parts", { size: 12, fill: INK2 });
  rows.forEach(([k, v], i) => {
    const yy = y + i * 22;
    g += `<line x1="${x}" y1="${yy - 14}" x2="900" y2="${yy - 14}" stroke="${RULE}" stroke-width="0.8"/>`;
    g += text(x, yy, k, { size: 11, fill: INK2 });
    g += text(x + 130, yy, v, { size: 11, fill: INK });
  });
  return g;
}

mkdirSync("plates", { recursive: true });
for (const d of devices) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(d.name)} — ${esc(d.line)}">
<rect width="${W}" height="${H}" fill="${PAPER}"/>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="${RULE}"/>
${text(40, 48, d.id.slice(0, 2) + " / " + d.name, { size: 14, weight: 600 })}
${text(40, 68, d.line, { size: 12, fill: INK2 })}
${text(W - 40, 48, "keyring — senses you can carry", { size: 11, fill: INK2, anchor: "end" })}
${text(W - 40, 66, "responsive-devices / proposal, not a product", { size: 11, fill: INK2, anchor: "end" })}
${object(d)}
${band(d)}
${parts(d)}
${text(40, H - 28, "drawn by tools/plates.js — paper, ink, one accent. prices rough, November 2026.", { size: 10, fill: INK2 })}
</svg>
`;
  writeFileSync(`plates/${d.id}.svg`, svg);
  console.log("plate  " + d.id + ".svg");
}
