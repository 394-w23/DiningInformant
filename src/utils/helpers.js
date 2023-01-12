export const getLatestWaitTimeForHalls = (diningHalls) => {
  var seenHalls = new Set();
  var result = [];

  diningHalls.reverse();

  diningHalls.forEach((diningHall) => {
    const id = diningHall['Dining Hall Id'];
    if (!seenHalls.has(id) && result.length < 4) {
      result.push(diningHall);
      seenHalls.add(id);
    }
  });

  return result;
};
