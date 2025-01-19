# yt-sub-fetch 🎥💬

A lightweight and efficient CLI tool for fetching YouTube subtitles or transcripts effortlessly. 🚀

---

## ✨ Features

- 🎥 Fetch subtitles or transcripts for any YouTube video.
- 🌍 Supports specifying language codes.
- 📝 Outputs a clean, plain-text transcript.
- 🛠️ Easy-to-use CLI interface.
- 🔗 **New:** Copy the transcript to clipboard with `--copy` option.

---

## 📞 Installation

You can use `yt-sub-fetch` directly via **npx** without any prior installation:

```bash
npx yt-sub-fetch <YouTube URL> [langCode] [--copy]
```

---

## 🚀 Usage

### 🔹 Basic Command

```bash
npx yt-sub-fetch <YouTube URL>
```

Example:

```bash
npx yt-sub-fetch https://youtu.be/ekr2nIex040
```

### 🌐 Specify Language Code

You can specify a language code to fetch subtitles in a specific language. Default is English (`en`).

```bash
npx yt-sub-fetch <YouTube URL> <langCode>
```

Example:

```bash
npx yt-sub-fetch https://youtu.be/ekr2nIex040 es
```

In this example, the tool will attempt to fetch Spanish subtitles (`es`).

### 🔹 Copy Transcript to Clipboard

Use the `--copy` option to automatically copy the transcript to your clipboard after fetching.

```bash
npx yt-sub-fetch <YouTube URL> --copy
```

Example:

```bash
npx yt-sub-fetch https://youtu.be/ekr2nIex040 --copy
```

This will fetch the subtitles and copy the content to your clipboard for easy pasting.

---

## 👔 Output

The tool will output the transcript in the following format:

```
Title: [Video Title]

Transcript:
[Transcript Text]
```

Example output:

```
Title: ROSÉ & Bruno Mars - APT. (Official Music Video)

Transcript:
[Music] start uhhuh [Music] uhuh uh uhhuh uh-huh kissy face kissy face sent to your phone butt I'm trying to kiss your Li for real...
```

If the `--copy` option is used, the transcript will also be copied to your clipboard.

---

## 🛠️ Troubleshooting

- ✅ Ensure the YouTube URL is valid.
- 🌐 Verify that subtitles are available for the requested language.
- 📶 Check your internet connection.
- 🐛 If you encounter any issues, feel free to report them on the GitHub repository.

---

## 👨‍💻 Author

Developed with ❤️ by [Aung Myo Kyaw](https://github.com/AungMyoKyaw)

---

## 🐟 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
