// normalize data by swaping lattitude with longitude for use in GeoJSON
// [42.43894178 , 19.2708081] becomes [19.2708081,42.43894178]

import { readFileSync, writeFileSync } from "node:fs";
import { forEachBusLineFile, dirPath } from "./utils.mjs";

const latLng = "lat,lng";
const lngLat = "lng,lat";

const formats = [latLng, lngLat];

const format = process.argv[2];

if (!format) {
  throw new Error("argument reqired: " + formats.join(" or "));
}

if (!formats.includes(format)) {
  throw new Error(`Suported formats are: ${formats.join(" or ")}`);
}

const normalizeArr = arr => {
  if (
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    const position0 = arr[0];
    const position1 = arr[1];

    if (format === latLng) {
      if (position0 < position1) {
        console.log("swapping", arr);
        arr[0] = position1;
        arr[1] = position0;
      }
    }

    if (format === lngLat) {
      if (position0 > position1) {
        console.log("swapping", arr);
        arr[0] = position1;
        arr[1] = position0;
      }
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

forEachBusLineFile(filename => {
  const file = readFileSync(dirPath + filename);
  const obj = JSON.parse(file);

  forEachArr(obj, normalizeArr);

  writeFileSync(dirPath + filename, JSON.stringify(obj));
});
