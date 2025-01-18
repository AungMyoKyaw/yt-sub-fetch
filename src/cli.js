#!/usr/bin/env node

/**
 * YouTube Transcript Fetcher CLI
 * Fetches and formats YouTube transcripts from video URLs.
 */

import process from "process";
import { parseYouTubeURL } from "./utils/parseYouTubeURL.js"; // Import the URL parser
import { fetchTranscript } from "./utils/fetchTranscript.js"; // Import the transcript fetcher
import { formatTranscript } from "./utils/formatTranscript.js"; // Import the transcript formatter

// CLI entry point
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: cli.js <YouTube URL> [langCode]");
    process.exit(1);
  }

  const url = args[0];
  const langCode = args[1] || "en"; // Default language code is English

  try {
    const { youtubeURL } = parseYouTubeURL(url); // Parse the URL

    const rawTranscript = await fetchTranscript(youtubeURL, langCode); // Fetch the transcript

    const formattedTranscript = formatTranscript(rawTranscript); // Format the transcript
    console.log(formattedTranscript);

    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Execute the CLI
main();
