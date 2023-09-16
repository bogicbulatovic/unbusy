import { Time } from "./types";

const parseTime = (time: string): Time => {
  const splitted = time.split(":");

  let hours: string | number = splitted[0];
  let minutes: string | number = splitted[1];
  let seconds: string | number = splitted[2];

  if (hours.charAt(0) === "0") {
    hours = hours.charAt(1);
  }

  hours = Number(hours);

  if (minutes.charAt(0) === "0") {
    minutes = minutes.charAt(1);
  }

  minutes = Number(minutes);

  if (seconds.charAt(0) === "0") {
    seconds = seconds.charAt(1);
  }

  seconds = Number(seconds);

  return { hours, minutes, seconds };
};

export { parseTime };
