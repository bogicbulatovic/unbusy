import { Time } from "../types";

const subtractTime = (time: Time, bySeconds: number): Time => {
  let { hours, minutes, seconds } = time;

  if (seconds >= bySeconds) {
    seconds = seconds - bySeconds;
  } else {
    minutes = minutes - Math.ceil(bySeconds / 60);

    if (minutes < 0) {
      hours = hours - Math.ceil(Math.abs(minutes) / 60);
      minutes = 60 - (Math.abs(minutes) % 60);
    }

    seconds = seconds - (bySeconds % 60);
  }

  if (seconds < 0) {
    seconds = 60 - Math.abs(seconds);
  }
  if (minutes < 0) {
    minutes = 60 - Math.abs(minutes);
  }
  if (hours < 0) {
    hours = 24 - Math.abs(hours);
  }

  return { hours, minutes, seconds };
};

export { subtractTime };
