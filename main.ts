// gta6-clipper — entry program for make.fun's "Clip GTA 6 for the most
// YouTube views" bounty (gta6-clipper-01).
//
// The entry itself is a YouTube Short; this program only hands the grader
// the video's address. It copies VIDEO.json from the repository root into
// the output directory the grader provides.
//
// Node 22, standard library only. No network, no clock, no writes
// anywhere except the output directory.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const videoFile = join(repoDir, "VIDEO.json");

if (!existsSync(videoFile)) {
  throw new Error(`VIDEO.json not found in ${repoDir}`);
}

// Fail loudly on a malformed VIDEO.json instead of copying a broken file.
const parsed = JSON.parse(readFileSync(videoFile, "utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error("VIDEO.json must be an object with a string url field");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoFile, join(outputDir, "VIDEO.json"));
