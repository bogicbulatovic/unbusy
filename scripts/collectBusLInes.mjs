// create a single file containing array of data from all files

import { readFileSync, createWriteStream } from "node:fs";
import { dirPath, forEachBusLineFile } from "./utils.mjs";

const allFilename = "all.json";
const writeStream = createWriteStream(dirPath + allFilename);

writeStream.write("[");

forEachBusLineFile((filename, i, files) => {
  if (filename === allFilename) {
    return;
  }
  const file = readFileSync(dirPath + filename);

  if (i === files.length - 1) {
    writeStream.write(file);
  } else {
    writeStream.write(file + ",");
  }
});

writeStream.write("]");
