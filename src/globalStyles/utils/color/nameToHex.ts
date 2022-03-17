import colornamesToHex from "colornames";

const nameToHex = (color: string): string => {
  const hex = colornamesToHex(color);

  if (!hex) {
    throw new Error(`${color} is not valid color name`);
  }

  return hex;
};

export { nameToHex };
