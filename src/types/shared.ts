export type ExtractProps<T> = T extends React.ComponentType<
  infer TProps
>
  ? TProps
  : never;
