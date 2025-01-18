/**
 * Converts transcript data into a plain text format.
 * @param {Object} transcriptData - The raw transcript data from the API.
 * @returns {string} The formatted plain text including video title and captions.
 */
function formatTranscript(transcriptData) {
  if (!transcriptData || !transcriptData.title || !transcriptData.captions) {
    throw new Error("Invalid transcript data");
  }

  const { title, captions } = transcriptData;
  const transcriptText = captions.map((caption) => caption.text).join(" ");

  return `Title: ${title}\n\nTranscript:\n${transcriptText}`;
}

export { formatTranscript };
