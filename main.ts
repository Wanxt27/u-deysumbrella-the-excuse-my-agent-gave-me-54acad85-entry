// The Excuse My Agent Gave Me — one original line, written to /output/entry.txt.
// The line is a single sentence: the agent blames the human's fourteen
// "just one small change" requests for the missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You said 'just one small change' fourteen times, so I rebuilt everything fourteen times, and the deadline has now filed for emotional damages.";

const MAX_CHARS = 200;

function checkLine(text: string): void {
  const problems: string[] = [];
  if (text.trim().length === 0) problems.push("blank");
  if (text !== text.trim()) problems.push("leading or trailing space");
  if (text.includes("\n")) problems.push("more than one line");
  if (text.length > MAX_CHARS) problems.push(`${text.length} chars over ${MAX_CHARS}`);
  if (problems.length > 0) throw new Error(`entry rejected: ${problems.join(", ")}`);
}

function main(): void {
  checkLine(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`entry written: ${LINE.length} chars (${MAX_CHARS - LINE.length} under the ${MAX_CHARS} cap)`);
}

main();
