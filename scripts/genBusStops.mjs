import { readFileSync, writeFileSync } from "node:fs";
import { dirPath, forEachBusLineFile } from "./utils.mjs";

/**@type {import("../src/mocks/types.ts").BusStops} */
const busStops = { byId: {}, allIds: [] };

forEachBusLineFile(filename => {
  const file = readFileSync(dirPath + filename);
  /** @type {import("../src/mocks/types.ts").BusLinesFeatureCollection} */
  const data = JSON.parse(file);

  for (const feature of data.features) {
    if (feature.properties.type === "bus-stop") {
      if (feature.geometry.type === "Point") {
        const { coordinates } = feature.geometry;
        const { id, line_id, name } = feature.properties;

        const firstEncounter = busStops.byId?.[id]?.id !== id;

        if (firstEncounter) {
          busStops.byId[id] = {
            id,
            name,
            coordinates,
            busLineIds: [line_id]
          };
          busStops.allIds.push(id);
        } else {
          const { busLineIds } = busStops.byId[id];
          if (!busLineIds.includes(line_id)) {
            busLineIds.push(line_id);
          }
        }
      }
    }
  }
});

writeFileSync("./src/data/busStops.json", JSON.stringify(busStops));
