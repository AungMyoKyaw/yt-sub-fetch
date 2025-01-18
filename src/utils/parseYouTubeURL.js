/**
 * parseYouTubeURL.js
 * Utility function to parse a YouTube URL and extract the video ID.
 */

/**
 * Parses a YouTube URL to extract the video ID.
 * @param {string} url - The YouTube video URL.
 * @returns {string} The extracted video ID.
 * @throws Will throw an error if the URL is invalid.
 */
function parseYouTubeURL(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return {
      youtubeURL: url,
      videoID: match[1],
    };
  }
  throw new Error("Invalid YouTube URL");
}

export { parseYouTubeURL };
