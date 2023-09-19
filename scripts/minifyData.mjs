import { forEachBusLineFile, dirPath } from "./utils.mjs";
import { readFileSync, writeFileSync } from "node:fs";

forEachBusLineFile(filename => {
  const file = readFileSync(dirPath + filename);

  const data = JSON.parse(file);

  writeFileSync(dirPath + filename, JSON.stringify(data));
});
