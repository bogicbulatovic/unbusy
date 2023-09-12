import { readdirSync } from "node:fs";

export const dirPath = "./src/data/bus-lines-json/";
const files = readdirSync(dirPath);

const forEachBusLineFile = cb => {
  files.forEach(cb);
};

export { forEachBusLineFile };
