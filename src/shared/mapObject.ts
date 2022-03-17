/**similar to Array.prototype.map */
const mapObject = <O extends Record<string, any>, V>(
  obj: O,
  cb: (value: O[keyof O], key: keyof O) => V
): Record<keyof O, V> => {
  //
  const mapped = {} as Record<keyof O, V>;

  for (const key in obj) {
    mapped[key] = cb(obj[key], key);
  }

  return mapped;
};

export { mapObject };
