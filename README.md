# yt-sub-fetch 📹💬

A lightweight and efficient CLI tool for fetching YouTube subtitles or transcripts effortlessly. 🚀

---

## ✨ Features

- 🎥 Fetch subtitles or transcripts for any YouTube video.
- 🌍 Supports specifying language codes.
- 📝 Outputs a clean, plain-text transcript.
- 🔧 Easy-to-use CLI interface.

---

## 📦 Installation

You can use `yt-sub-fetch` directly via **npx** without any prior installation:

```bash
npx yt-sub-fetch <YouTube URL> [langCode]
```

---

## 🚀 Usage

### 🔹 Basic Command

```bash
npx yt-sub-fetch <YouTube URL>
```

Example:

```bash
npx yt-sub-fetch https://youtu.be/JjpGvjy0Gxk
```

### 🌐 Specify Language Code

You can specify a language code to fetch subtitles in a specific language. Default is English (`en`).

```bash
npx yt-sub-fetch <YouTube URL> <langCode>
```

Example:

```bash
npx yt-sub-fetch https://youtu.be/dQw4w9WgXcQ es
```

In this example, the tool will attempt to fetch Spanish subtitles (`es`).

---

## 📄 Output

The tool will output the transcript in the following format:

```
Title: [Video Title]

Transcript:
[Transcript Text]
```

Example output:

```
Title: Never Gonna Give You Up

Transcript:
We're no strangers to love. You know the rules and so do I...
```

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

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
