import { execSync } from "child_process";

/**
 * Copies the given text to the clipboard based on the operating system.
 * @param {string} text - The text to be copied.
 */
function copyToClipboard(text) {
  try {
    const platformCopyCommands = {
      darwin: "pbcopy",
      win32: "clip",
      linux: "xclip -selection clipboard",
    };

    const platform = process.platform;
    const copyCommand = platformCopyCommands[platform];

    if (!copyCommand) {
      throw new Error(`Unsupported platform: ${platform}`);
    }

    const sanitizedText = text.replace(/"/g, '\\"');
    execSync(`echo "${sanitizedText}" | ${copyCommand}`);
  } catch (error) {
    console.error("Error copying text to clipboard:", error.message);
  }
}

export { copyToClipboard };
