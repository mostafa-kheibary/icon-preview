#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";
import recursive from "recursive-readdir";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

let iconPath = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const processIconFiles = async () => {
  let files = await recursive(process.argv[2]);
  files = files.filter((file) => file.endsWith(".svg"));

  for (const file of files) {
    const content = await fs.readFile(path.resolve("./", file), {
      encoding: "utf8",
    });
    const name = file.split("/").at(-1);
    iconPath[name] = content;
  }
};

processIconFiles();
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("index", { icons: iconPath });
});

const PORT = 4000;
app.listen(PORT);

console.log(`preview of ${process.argv[2]} is available at localhost:${PORT}`);
