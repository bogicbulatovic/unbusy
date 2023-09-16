import { Time } from "./types";

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

  if (t1.seconds === undefined && t2.seconds === undefined) {
    return 0;
  }
  if (t1.seconds === undefined && t2.seconds !== undefined) {
    return -1;
  }
  if (t1.seconds !== undefined && t2.seconds === undefined) {
    return 1;
  }

  if (t1.seconds !== undefined && t2.seconds !== undefined) {
    if (t1.seconds < t2.seconds) {
      return -1;
    }
    if (t1.seconds > t2.seconds) {
      return -1;
    }
  }

  return 0;
};

export { compare };
