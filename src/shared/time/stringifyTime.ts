import { Time } from "./types";

const stringifyTime = (time: Time) => {
  const minutes =
    time.minutes < 10 ? `0${time.minutes}` : time.minutes;

  const hours = time.hours < 10 ? `0${time.hours}` : time.hours;

  if (time.seconds !== undefined) {
    return `${hours}:${minutes}:${time.seconds}`;
  }

  return `${hours}:${minutes}`;
};

export { stringifyTime };
