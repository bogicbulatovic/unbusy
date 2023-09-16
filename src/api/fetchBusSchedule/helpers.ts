import { BusSchedule } from "../../mocks/types";

const removeSeconds = (time: string) => {
  let res = time;

  const splitted = res.split(":");
  splitted.pop();

  res = splitted.join(":");

  return res;
};

const tranformBusSchedule = (schedule: BusSchedule): BusSchedule => {
  return {
    ...schedule,
    first_departure_time: removeSeconds(
      schedule.first_departure_time
    ),
    last_departure_time: removeSeconds(schedule.last_departure_time)
  };
};

export { tranformBusSchedule };
