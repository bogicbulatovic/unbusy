// checks if there is buslines with the same id

import { readFileSync } from "node:fs";
import { dirPath, forEachBusLineFile } from "./utils.mjs";

const lines = [];
let totalFiles;

forEachBusLineFile((filename, _i, files) => {
  const file = readFileSync(dirPath + filename);

  const data = JSON.parse(file);

  lines.push(data.features[0].properties.id);

  totalFiles = files.length;
});

const dedupedLines = [...new Set(lines)];

console.log({
  linesLength: lines.length,
  dedupedLines: dedupedLines.length,
  totalFiles
});
