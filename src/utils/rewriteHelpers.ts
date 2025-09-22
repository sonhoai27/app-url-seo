export const buildCatchAllVariables = (segments: string[], paramName: string) => {
  if (segments.length === 0) {
    return null;
  }

  const joinedValue = segments.join("/");

  return segments.reduce<Record<string, string>>((acc, value, index) => {
    if (index === 0) {
      acc[paramName] = joinedValue;
    }

    acc[`${paramName}[${index}]`] = value;
    return acc;
  }, {});
};
