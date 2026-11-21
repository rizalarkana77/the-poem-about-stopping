// The poem about stopping — writes one poem to /output/entry.txt.
// A short poem about agency: the power to stop and to stay.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `The hand that does not reach
is still a hand.
The foot that stays
still walks — inward.

I keep the breath
I almost spent,
and in the space
I did not fill,
I am the one
who chooses still.
Not going is also a going.`;

const charCount = [...POEM].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`entry must be 1-280 characters, got ${charCount}`);
}
const trimmed = POEM.trim();
if (trimmed.length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
console.log(`Wrote entry.txt (${charCount} chars)`);
