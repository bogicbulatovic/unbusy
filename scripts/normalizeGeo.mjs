// normalize data by swaping lattitude with longitude for use in leaflet
// [42.43894178 , 19.2708081] becomes [19.2708081,42.43894178]

import { readFileSync, readdirSync, writeFileSync } from "node:fs";

const normalizeArr = arr => {
  if (
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    const arr0 = arr[0];
    const arr1 = arr[1];
    if (arr0 > arr1) {
      console.log("swapping", arr);
      arr[0] = arr1;
      arr[1] = arr0;
    }
  }
};

const forEachArr = (obj, cb) => {
  for (const prop in obj) {
    const val = obj[prop];
    if (Array.isArray(val)) {
      cb(val);
    }
    if (typeof val === "object") {
      forEachArr(val, cb);
    }
  }
};

const dirPath = "./src/data/bus-lines-json/";
const files = readdirSync(dirPath);

for (const filename of files) {
  const file = readFileSync(dirPath + filename);
  const obj = JSON.parse(file);

  forEachArr(obj, normalizeArr);

  writeFileSync(dirPath + filename, JSON.stringify(obj));
}
