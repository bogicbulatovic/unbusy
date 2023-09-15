import { test, expect } from "@jest/globals";

import { subtractTime } from "./subtractTime";
import { Time } from "../parseTime/types";

test("current minute", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 14;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours,
    minutes: time.minutes,
    seconds: 1
  } as Time);
});

test("prev minute", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 60;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours,
    minutes: time.minutes - 1,
    seconds: time.seconds
  } as Time);
});

test("2 mins before", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 60 * 2;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours,
    minutes: time.minutes - 2,
    seconds: time.seconds
  } as Time);
});

test("prev hour", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 60 * 60;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours - 1,
    minutes: time.minutes,
    seconds: time.seconds
  } as Time);
});

test("2 hours before", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 60 * 60 * 2;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours - 2,
    minutes: time.minutes,
    seconds: time.seconds
  } as Time);
});

test("seconds in prev minute", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 23;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours,
    minutes: time.minutes - 1,
    seconds: 52
  } as Time);
});
test("minutes in prev hour", () => {
  const time: Time = { hours: 23, minutes: 59, seconds: 15 };

  const subtractSeconds = 60 * 60 + 60;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: time.hours - 1,
    minutes: 58,
    seconds: time.seconds
  } as Time);
});

test("hours in prev day", () => {
  const time: Time = { hours: 0, minutes: 59, seconds: 15 };

  const subtractSeconds = 60 * 60;

  const result = subtractTime(time, subtractSeconds);

  expect(result).toEqual({
    hours: 23,
    minutes: time.minutes,
    seconds: time.seconds
  } as Time);
});
