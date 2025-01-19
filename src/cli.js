#!/usr/bin/env node

/**
 * YouTube Transcript Fetcher CLI
 * Fetches and formats YouTube transcripts from video URLs.
 */

import process from "process";
import { parseYouTubeURL } from "./utils/parseYouTubeURL.js";
import { fetchTranscript } from "./utils/fetchTranscript.js";
import { formatTranscript } from "./utils/formatTranscript.js";
import { copyToClipboard } from "./utils/copyToClipboard.js";

/**
 * CLI entry point
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: cli.js <YouTube URL> [langCode] [--copy]");
    process.exit(1);
  }

  const shouldCopyIndex = args.indexOf("--copy");
  const shouldCopy = shouldCopyIndex !== -1;

  // Remove --copy from args to prevent issues
  if (shouldCopy) {
    args.splice(shouldCopyIndex, 1);
  }

  const url = args.find((arg) => arg.startsWith("http"));
  const langCode =
    args.find((arg) => !arg.startsWith("http") && arg !== "--copy") || "en";

  if (!url) {
    console.error("Error: Invalid or missing YouTube URL.");
    process.exit(1);
  }

  try {
    const { youtubeURL } = parseYouTubeURL(url);
    const rawTranscript = await fetchTranscript(youtubeURL, langCode);
    const formattedTranscript = formatTranscript(rawTranscript);

    console.log(formattedTranscript);

    if (shouldCopy) {
      copyToClipboard(formattedTranscript);
      console.log("Transcript copied to clipboard!");
    }

    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Execute the CLI
main();
