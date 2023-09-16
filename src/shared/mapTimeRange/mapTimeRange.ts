import { Time } from "../parseTime/types";
import { subtractTime } from "../subtractTime/subtractTime";

/** compare times,also designed to be used as callback to Array.prototype.sort
 * @returns -1 if t1 comes before t2, 1 if t1 comes after t2, 0 if t1 and t2 are the same times
 */
const compare = (t1: Time, t2: Time): -1 | 0 | 1 => {
  if (t1.hours < t2.hours) {
    return -1;
  }

  if (t1.hours > t2.hours) {
    return 1;
  }

  // hours are the same

  if (t1.minutes < t2.minutes) {
    return -1;
  }

  if (t1.minutes > t2.minutes) {
    return 1;
  }

  // minutes are the same

  if (t1.seconds < t2.seconds) {
    return -1;
  }
  if (t1.seconds > t2.seconds) {
    return -1;
  }

  return 0;
};

const minutesInTime = (time: Time) => time.hours * 60 + time.minutes;

const forEachTimeInRange = (
  min: Time,
  max: Time,
  stepMins: number,
  cb: (curr: Time, i: number) => void
): void => {
  let curr = max;

  for (let i = 0; compare(min, curr) === -1; i++) {
    cb(curr, i);

    if (stepMins > minutesInTime(curr)) {
      // prevent infinite loop
      break;
    }

    curr = subtractTime(curr, 60 * stepMins);
  }
};

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

export { forEachTimeInRange, mapTimeRange };
