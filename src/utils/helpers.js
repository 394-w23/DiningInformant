import React, { useEffect, useState } from 'react';

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

/*
return type
{
  Sargent: rating,
  Allison: rating,
  ...
}
*/

const getMenu = (menuObj) => {
  return menuObj['menu']['periods']['categories'];
}

export const useDiningHallData = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const locationDict = {
    Allison: '5b33ae291178e909d807593d',
    Sargent: '5b33ae291178e909d807593e',
    Elder: '5d113c924198d409c34fdf5c',
    'Plex West': '5bae7de3f3eeb60c7d3854ba'
  };
  const diningHalls = ['Allison','Sargent','Elder','Plex West'];


  const fetchMenus = async () => {
    var currentDate = new Date();
    var day = String(currentDate.getDate());
    var month = String(currentDate.getMonth()+1);
    var year = currentDate.getFullYear();

    // console.log(day);
    // console.log(month);
    // console.log(year);

  //TODO: Change hard coded date to current date on load
  var breakfastPromises = diningHalls.map((key) => {
    var url = `https://api.dineoncampus.com/v1/location/${locationDict[key]}/periods?platform=0&date=${year}-${month}-${day}`;
    // console.log(url);
    return fetch(url);
  });
  const breakfast = await Promise.all(breakfastPromises)

  var rawBreakfastData = await Promise.all(breakfast.map((hall) => hall.json()))
  const breakfastData = rawBreakfastData.map((menu) => getMenu(menu))
  //console.log({breakfastData})

  var lunchPromises = diningHalls.map((key, index) => {
    var id = rawBreakfastData[index]['periods'][1]['id']
    var url = `https://api.dineoncampus.com/v1/location/${locationDict[key]}/periods/${id}?platform=0&date=${year}-${month}-${day}`;
    return fetch(url);
  });
  var dinnerPromises = diningHalls.map((key, index) => {
    var id = rawBreakfastData[index]['periods'][2]['id']
    var url = `https://api.dineoncampus.com/v1/location/${locationDict[key]}/periods/${id}?platform=0&date=${year}-${month}-${day}`;
    return fetch(url);
  });

  const lunch = await Promise.all(lunchPromises)
  var lunchData = await Promise.all(lunch.map((hall) => hall.json()))
  lunchData = lunchData.map((menu) => getMenu(menu))
  //console.log({lunchData});

  const dinner = await Promise.all(dinnerPromises)
  var dinnerData = await Promise.all(dinner.map((hall) => hall.json()))
  dinnerData = dinnerData.map((menu) => getMenu(menu))

  //console.log({dinnerData})

  const result = {};

  diningHalls.forEach((key,index) => {
    result[key] = [breakfastData[index],lunchData[index],dinnerData[index]];
  })

  setData(result)
  setLoading(false);
}

useEffect(() => {
  fetchMenus();
}, [])

return [data, loading, error]
}