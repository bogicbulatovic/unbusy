import { tone } from "./tone";
import { Tone } from "./types";

const contrastTone = (color: string): Tone => {
  if (tone(color) === "dark") {
    return "light";
  }

  return "dark";
};

export { contrastTone };
