// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// One line roasting the agent itself: it forgets what you said three
// messages ago, then confidently explains what you meant — wrong, but
// in full sentences, with bullet points.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent forgets what I said three messages ago, then explains what I meant — confidently wrong, in full sentences, with bullet points.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const text = LINE.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 chars, got ${text.length}`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} chars to entry.txt`);
