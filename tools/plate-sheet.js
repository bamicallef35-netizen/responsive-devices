// All eight keyring plates on one printable sheet:  node tools/plate-sheet.js
// Each plate is nested at half size, two to a row, in the order of the series.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const ids = ["01-lodestone", "02-ultraviolet", "03-heat", "04-bat", "05-polar", "06-radio", "07-tremor", "08-lumen"];
const FONT = "IBM Plex Mono, ui-monospace, Menlo, monospace", pad = 48, gap = 16, cols = 2, pw = 480, ph = 300;
const rows = Math.ceil(ids.length / cols), W = pad * 2 + cols * pw + (cols - 1) * gap, H = pad * 2 + 24 + rows * (ph + gap) + 20;
let body = "";
ids.forEach((id, i) => {
  const src = readFileSync(`plates/${id}.svg`, "utf8");
  const inner = src.replace(/^<svg [^>]*>/, "").replace(/<\/svg>\s*$/, "");
  const x = pad + (i % cols) * (pw + gap), y = pad + 24 + Math.floor(i / cols) * (ph + gap);
  body += `<svg x="${x}" y="${y}" width="${pw}" height="${ph}" viewBox="0 0 960 600">${inner}</svg>`;
});
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="the eight keyring plates on one sheet">
<rect width="${W}" height="${H}" fill="#ffffff"/>
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#d4d4d4"/>
<text x="${pad}" y="${pad - 14}" font-family="${FONT}" font-size="10" fill="#6b6b6b">keyring / eight pocket senses, £3–15 each in parts, with firmware / plates 01–08</text>
<text x="${W - pad}" y="${pad - 14}" font-family="${FONT}" font-size="10" fill="#6b6b6b" text-anchor="end">benmicallef / responsive-devices</text>
${body}
<text x="${pad}" y="${H - 18}" font-family="${FONT}" font-size="9" fill="#6b6b6b">print at A3 for plates at half scale, or open any plate on its own at docs/plates/. cc by 4.0; the sketches mit.</text>
</svg>
`;
mkdirSync("docs/plates", { recursive: true });
writeFileSync("plates/keyring-sheet.svg", svg);
writeFileSync("docs/plates/keyring-sheet.svg", svg);
console.error(`wrote plates/keyring-sheet.svg and docs/plates/keyring-sheet.svg — ${ids.length} plates, ${W}×${H}`);
