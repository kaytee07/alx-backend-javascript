const cleanSet = (set, startString) => {
  const resultArray = [];

  for (const element of set) {
    if (element.startsWith(startString)) {
      resultArray.push(element.slice(startString.length));
    }
  }

  return resultArray.join('-');
};

export default cleanSet;
