export const getRandomUpTo = (max: number) => Math.floor(Math.random() * max);

export const rollD6 = (offset = 0): number => Math.floor(Math.random() * 6) + 1 + offset;

export const rollD100 = (offset = 0): number => Math.floor(Math.random() * 100) + 1 + offset;

export const getMapValue = (rollValue: number, map: Record<string, string>): string => {
  console.log({ rollValue, map });
  for (let key in map) {
    let split = key.split("-");
    if (rollValue >= parseInt(split[0]) && rollValue <= parseInt(split[1] || split[0])) {
      return map[key];
    }
  }
  return "No effect";
};
