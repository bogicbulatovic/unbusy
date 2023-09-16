import { forEachTimeInRange } from "./forEachTimeInRange/forEachTimeInRange";
import { Time } from "./types";

const mapTimeRange = <T>(
  min: Time,
  max: Time,
  stepMins: number,
  cb: (t: Time, i: number) => T
): T[] => {
  const mapped = [] as T[];

  forEachTimeInRange(min, max, stepMins, (time, i) => {
    const mappedValue = cb(time, i);
    mapped.push(mappedValue);
  });

  return mapped;
};

export { mapTimeRange };
