import busLinesMapping from "./busLinesMapping.json";

const busLines = Object.values(busLinesMapping);

const createReverseBusLineIdMapping = () => {
  const res = {} as Record<string, string>;

  for (const id in busLinesMapping) {
    const name = busLinesMapping[id as keyof typeof busLinesMapping];
    res[name] = id;
  }

  return res;
};

const busLinesReverseMapping = createReverseBusLineIdMapping();

export { busLines, busLinesReverseMapping };
