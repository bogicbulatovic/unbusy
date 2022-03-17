import { greska } from "./dev/greska";

const createClassnames = (
  obj: Record<string, boolean | undefined>
): string => {
  let classnames = "";

  for (const key in obj) {
    if (obj[key]) {
      classnames && (classnames += " ");
      classnames += key;

      if (process.env.NODE_ENV !== "production") {
        greska(key === "undefined", `key is "undefined"`);
      }
    }
  }

  return classnames;
};

export { createClassnames };
