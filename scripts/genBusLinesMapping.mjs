// generate mappings for use for dynamic import from mock api request
// example : /api/bus-lines?85 we fetch import(mapping[85].json)

import { writeFileSync, readFileSync } from "node:fs";
import { dirPath, forEachBusLineFile } from "./utils.mjs";

const obj = {};

forEachBusLineFile(filename => {
  const file = readFileSync(dirPath + filename);
  const fileObj = JSON.parse(file);

  obj[fileObj.features[0].properties.id] =
    fileObj.features[0].properties.name;
});

writeFileSync(
  "./src/data/busLinesMapping.json",
  JSON.stringify(obj, null, 4)
);
