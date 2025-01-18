import https from "https";

/**
 * Makes an HTTPS POST request to fetch YouTube transcript data.
 * @param {string} videoUrl - The YouTube video URL.
 * @param {string} langCode - The language code for the transcript.
 * @returns {Promise<Object>} The parsed JSON response from the API.
 */
function fetchTranscript(videoUrl, langCode = "en") {
  const options = {
    hostname: "tactiq-apps-prod.tactiq.io",
    path: "/transcript",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (error) {
          reject(new Error("Failed to parse response JSON"));
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(JSON.stringify({ videoUrl, langCode }));
    req.end();
  });
}

export { fetchTranscript };
