import { Time } from "./types";

const stringifyTime = (time: Time) => {
  if (time.seconds !== undefined) {
    return `${time.hours}:${time.minutes}:${time.seconds}`;
  }

  return `${time.hours}:${time.minutes}`;
};

export { stringifyTime };
