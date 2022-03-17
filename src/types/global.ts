export type ValueOf<T> = T[keyof T];

export type WithPrefix<
  S extends string,
  P extends string
> = `${P}${S}`;
