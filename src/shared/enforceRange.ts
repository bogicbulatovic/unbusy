const enforceRange = (
  testNum: number,
  min: number,
  max: number
): void => {
  if (testNum < min || testNum > max) {
    throw new Error(
      `range excedeed: got ${testNum}, but allowed range is ${min}-${max}`
    );
  }
};

export { enforceRange };
