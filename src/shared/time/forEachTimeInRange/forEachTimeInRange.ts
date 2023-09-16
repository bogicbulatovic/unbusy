import { compare } from "../compare";
import { subtractTime } from "../subtractTime/subtractTime";
import { Time } from "../types";

const minutesInTime = (time: Time) => time.hours * 60 + time.minutes;

const forEachTimeInRange = (
  min: Time,
  max: Time,
  stepMins: number,
  cb: (curr: Time, i: number) => void
): void => {
  let curr = max;

  for (
    let i = 0;
    compare(min, curr) === -1 || compare(min, curr) === 0;
    i++
  ) {
    cb(curr, i);

    if (stepMins > minutesInTime(curr)) {
      // prevent infinite loop
      break;
    }

    curr = subtractTime(curr, 60 * stepMins);
  }
};

export { forEachTimeInRange };
