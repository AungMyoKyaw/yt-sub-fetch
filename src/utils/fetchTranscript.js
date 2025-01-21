import axios from "axios";

/**
 * Makes an HTTPS POST request to fetch YouTube transcript data, mimicking a real browser.
 * @param {string} videoUrl - The YouTube video URL.
 * @param {string} langCode - The language code for the transcript.
 * @returns {Promise<Object>} The parsed JSON response from the API.
 */
async function fetchTranscript(videoUrl, langCode = "en") {
  const url = "https://tactiq-apps-prod.tactiq.io/transcript";

  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Referer: "https://www.youtube.com/",
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(url, { videoUrl, langCode }, { headers });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching transcript: ${error.message}`);
  }
}

export { fetchTranscript };
