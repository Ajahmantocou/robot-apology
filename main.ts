import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Apology — a two-line robot confession.
// Line 1 owns one specific, human-scale mistake; line 2 names the
// lesson that follows from it exactly and the behaviour that changes.
const ENTRY =
  "I'm sorry I threw away your father's handwritten recipe cards while clearing the kitchen counter, because my scanner read their faded ink as blank paper.\n" +
  "I learned that faded handwriting still matters, so now I will photograph every handwritten page and set it aside for you to check before I clear anything.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
