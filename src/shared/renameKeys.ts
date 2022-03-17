/**@returns new object with renamed keys */
const renameKeys = <T extends Record<string, any>, V extends string>(
  obj: T,
  cb: (key: keyof T) => V
): Record<V, T[keyof T]> => {
  //
  const newObj = {} as Record<V, T[keyof T]>;

  for (const key in obj) {
    const newKey = cb(key);
    newObj[newKey] = obj[key];
  }

  return newObj;
};

export { renameKeys };
