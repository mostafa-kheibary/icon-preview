# 🎨 icon-preview

Easily preview all your SVG icons in one beautiful local webpage!

![icon-preview demo](https://github.com/user-attachments/assets/d87b1f88-be4f-45c4-9f4a-0173e6232cee)

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
