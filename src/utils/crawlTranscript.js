import axios from "axios";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)";

const YOUTUBE_URL_REGEX =
  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
const XML_TRANSCRIPT_REGEX =
  /<text start="([^"]*)" dur="([^"]*)">([^<]*)<\/text>/g;

/**
 * Function to fetch YouTube video transcripts
 * @param {string} videoUrl - The URL of the YouTube video
 * @param {string} languageCode - The language code for the transcript (default: "en")
 * @returns {Promise<string>} - Formatted transcript
 *
 * Thank you to https://github.com/Kakulukian/youtube-transcript/blob/master/src/index.ts
 */
async function crawlYouTubeTranscript(videoUrl, languageCode = "en") {
  try {
    const videoId = getVideoId(videoUrl);
    if (!videoId) {
      throw new Error("[YouTubeTranscript] ❄️  Invalid YouTube URL");
    }

    const pageContent = await fetchVideoPage(videoId);
    const captionData = extractCaptionMetadata(pageContent);

    if (!captionData) {
      throw new Error(
        "[YouTubeTranscript] ❄️  Transcript is disabled on this video",
      );
    }

    const transcriptUrl = getTranscriptUrl(captionData, languageCode, videoId);
    const transcriptText = await fetchTranscriptText(transcriptUrl);

    return formatTranscript(videoUrl, transcriptText);
  } catch (error) {
    console.error("Error fetching transcript:", error.message);
    throw error;
  }
}

function getVideoId(url) {
  const match = url.match(YOUTUBE_URL_REGEX);
  return match ? match[1] : null;
}

async function fetchVideoPage(videoId) {
  const response = await axios.get(
    `https://www.youtube.com/watch?v=${videoId}`,
    {
      headers: { "User-Agent": USER_AGENT },
    },
  );
  return response.data;
}

function extractCaptionMetadata(htmlContent) {
  const captionSection = htmlContent.split('"captions":');
  if (captionSection.length < 2) return null;

  try {
    return JSON.parse(
      captionSection[1].split(',"videoDetails"')[0].replace("\n", ""),
    )?.playerCaptionsTracklistRenderer;
  } catch {
    return null;
  }
}

function getTranscriptUrl(captions, langCode, videoId) {
  if (!captions?.captionTracks) {
    throw new Error(
      `[YouTubeTranscript] ❄️  No transcripts available for video: ${videoId}`,
    );
  }

  const track =
    captions.captionTracks.find((track) => track.languageCode === langCode) ||
    captions.captionTracks[0];

  return track.baseUrl.replace(/\\u0026/g, "&");
}

async function fetchTranscriptText(url) {
  const response = await axios.get(url, {
    headers: { "User-Agent": USER_AGENT },
  });

  return [...response.data.matchAll(XML_TRANSCRIPT_REGEX)]
    .map((match) => match[3])
    .join(" ");
}

function formatTranscript(videoUrl, transcriptText) {
  return `Title: ${videoUrl}\n\nTranscript:\n${transcriptText}`;
}

export { crawlYouTubeTranscript };
