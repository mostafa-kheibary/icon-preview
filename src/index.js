#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";
import recursive from "recursive-readdir";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

let iconPath = [];
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
    iconPath.push({ fullPath: file, name, content });
  }
};

processIconFiles();
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("index", { icons: iconPath });
});

const startTheServer = (port) => {
  try {
    app
      .listen(port)
      .on("error", (e) => {
        if (e.code === "EADDRINUSE") startTheServer(port + 1);
      })
      .on("listening", () => {
        console.log(
          `${process.argv[2]} is available at http://localhost:${port}`
        );
      });
  } catch (error) {}
};

const DEFAULT_PORT = 4000;
startTheServer(DEFAULT_PORT);
