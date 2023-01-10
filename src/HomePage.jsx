import React, { useEffect, useState } from 'react';
import { getWaitTimes } from '.';
import { getDiningHallInfo } from '.';
import { DiningCard } from './DiningCard';
import './styles.css';

export const HomePage = () => {
  const [waitTimes, setWaitTimes] = useState([]);
  const [diningHalls, setDiningHalls] = useState([]);

  useEffect(() => {
    getWaitTimes()
      .then((data) => {
        setWaitTimes(data);
      })
      .catch((e) => {
        console.log(e);
      });

      getDiningHallInfo()
      .then((data) => {
        setDiningHalls(data);
      })
      .catch((e) => {
        console.log(e);
      });
    
  }, []);
  console.log(waitTimes);
  // Right now we don't use waitTimes, instead we use a default wait time stored in diningHall

  const cards = diningHalls.map((diningHall) => {
    return (
      <DiningCard 
        waitTime={diningHall['Wait Time']} 
        diningHallId={diningHall['Dining Hall Id']} 
        featuredItems={diningHall['Featured Items']} 
        stars={diningHall['Stars']} 
        imageLink={diningHall['Image Link']}
      />
    )
  })
  return (cards)
  
};
