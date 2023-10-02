const cleanSet = (set, startString) => {
  if (!startString) return startString;
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
};

export default cleanSet;
