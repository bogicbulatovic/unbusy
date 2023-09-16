import { test, expect, jest } from "@jest/globals";
import { forEachTimeInRange } from "./forEachTimeInRange";
import { Time } from "../types";

test("loops correct number of times", () => {
  const min: Time = { hours: 0, minutes: 0, seconds: 0 };
  const max: Time = { hours: 23, minutes: 59, seconds: 59 };
  const stepMins = 30;

  const cb = jest.fn();

  forEachTimeInRange(min, max, stepMins, cb);

  const minutesInDay = 60 * 24;

  expect(cb).toBeCalledTimes(minutesInDay / stepMins);
});
