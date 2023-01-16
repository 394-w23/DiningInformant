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

//will change into an average ratings function, takes the ratings for a certain dining halls for last 15 minutes
export const getLatestRatings = (diningHalls) => {
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

