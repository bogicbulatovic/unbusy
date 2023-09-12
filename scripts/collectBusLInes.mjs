// create a single file containing array of data from all files

import {
  readFileSync,
  readdirSync,
  createWriteStream
} from "node:fs";

const dirPath = "./src/data/bus-lines-json/";
const files = readdirSync(dirPath);

const allFilename = "all.json";
const writeStream = createWriteStream(dirPath + allFilename);

writeStream.write("[");

files.forEach((filename, i) => {
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
