# 🎨 icon-preview

Easily preview all your SVG icons in one beautiful local webpage!

![icon-preview demo](https://private-user-images.githubusercontent.com/58364608/464267548-d87b1f88-be4f-45c4-9f4a-0173e6232cee.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIwNzUwOTUsIm5iZiI6MTc1MjA3NDc5NSwicGF0aCI6Ii81ODM2NDYwOC80NjQyNjc1NDgtZDg3YjFmODgtYmU0Zi00NWM0LTlmNGEtMDE3M2U2MjMyY2VlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA5VDE1MjYzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjYjAzNmE0YmExNDljNTQwYTBjM2Y0MGY2ZjMzMGZiMzc3Nzk1YWI5OWEwYmQ5YmI4ZGNkYTk5ODIzOTk2ZGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.DSD6BrhpfitpkbtnGqBK8ElYxoYuLhoPG4TwiZDs1Ao)

## 🚀 Features

- 🔍 Recursively scans a folder for `.svg` files  
- 🖼️ Generates a neat preview page of all your icons  
- 🌐 Serves the preview locally in your browser  
- ⚡ Fast and easy to use with a single CLI command

## 📦 Installation

```bash
npm install -g icon-preview
````

## 🧪 Usage

Just run the CLI with the path to your SVG directory:

```bash
icon-preview ./path/to/icons
```

This will:

1. Recursively find all `.svg` files in the given path
2. Start a local web server
3. Open a preview page in your default browser with all the icons

## 🌈 Example

```bash
icon-preview ./assets/icons
```

Will show a webpage like this:

```
📁 assets/icons
├── arrows/
│   ├── arrow-left.svg
│   └── arrow-right.svg
├── social/
│   ├── twitter.svg
│   └── github.svg
└── logo.svg
```

And the preview page will display all 5 icons in a grid 💫

## 🛠️ Development

```bash
git clone https://github.com/your-username/icon-preview
cd icon-preview
npm install
npm run dev
```

## 🤝 Contributing

Found a bug or want to add a feature? PRs and issues are welcome!

## 📄 License

MIT — Free to use, modify, and share.
