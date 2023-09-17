import { BusSchedule } from "../../../../mocks/types";

export type BusLinesControlProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  schedule?: BusSchedule;
};
