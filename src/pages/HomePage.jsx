import React, { useEffect, useState } from 'react';
import { DiningCard } from '../components/DiningCard';
import { Form } from '../components/Form';
import { getWaitTimes, streamWaitTimes, useDbData } from '../utils/firebase';
import { getLatestWaitTimeForHalls } from '../utils/helpers';

const imageDict = {
  Allison:
    'https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/overview_and_seating_0.jpg?itok=4CkHvmca',
  Sargent:
    'https://sites.northwestern.edu/northeastarea/files/2019/09/SargentDining1-1-550x310.jpeg',
  Elder:
    'https://www.northwestern.edu/living/residential-experience/housing-options/res-halls/res-hall-images/20190901_elderdining.jpeg',
  'Plex West':
    'https://sites.northwestern.edu/southwestarea/files/2019/09/FWWestDining-550x310.jpeg'
};

export const HomePage = () => {
  const [waitTimes, error] = useDbData();

  const cards = waitTimes.map((diningHall) => {
    return (
      <DiningCard
        key={diningHall['Dining Hall Id']} //{diningHall['Dining Hall Id']}
        waitTime={diningHall['Wait Time']} //{diningHall['Wait Time']}
        diningHallId={diningHall['Dining Hall Id']} //{diningHall['Dining Hall Id']}
        featuredItems={['Cajun Chicken', 'Roasted Broccoli']} //{diningHall['Featured Items']}
        stars={4.3} //{diningHall['Stars']}
        imageLink={imageDict[diningHall['Dining Hall Id']]} //{diningHall['Image Link']}
      />
    );
  });

  return (
    <>
      <header>
        <section className="newbar">
          <div className="newleft">
            <h2>DiningInformant</h2>
          </div>
          <div className="topright">
            <div className="sortby">
              <h1>sortby</h1>
            </div>
            {/* <div className="menu">
              <a href="#"> ...</a>
            </div> */}
          </div>
        </section>
      </header>
      {cards}
      {/* <Form /> */}
      <button className="shareYourExperience" type="button">Share Your Experience!</button>
    </>
  );
};
