import React, { useEffect, useState } from 'react';
import { getWaitTimes } from '.';
import { getDiningHallInfo } from '.';
import { DiningCard } from './DiningCard';
import { Form } from './Form';
import './styles.css';

const imageDict = {"Allison": "https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/overview_and_seating_0.jpg?itok=4CkHvmca",
                    "Sargent": "https://sites.northwestern.edu/northeastarea/files/2019/09/SargentDining1-1-550x310.jpeg",
                    "Elder": "https://www.northwestern.edu/living/residential-experience/housing-options/res-halls/res-hall-images/20190901_elderdining.jpeg",
                    "Plex West": "https://sites.northwestern.edu/southwestarea/files/2019/09/FWWestDining-550x310.jpeg"
                  };

const getLatestWaitTimeForHalls = (diningHalls) => {
  var seenHalls = new Set();
  var result = [];

  for(var i = diningHalls.length-1; i >= 0; i--) {
    if(!seenHalls.has(diningHalls[i]["Dining Hall Id"])) {
      result.push(diningHalls[i]);
      seenHalls.add(diningHalls[i]["Dining Hall Id"]);
    }
    if(seenHalls.length == 4) {
      break;
    }
  }

  // console.log("ajskf");
  // console.log(seenHalls);
  // console.log(result);

  return result;
}

export const HomePage = () => {
  const [waitTimes, setWaitTimes] = useState([]);
  // const [diningHalls, setDiningHalls] = useState([]);

  useEffect(() => {
    getWaitTimes()
      .then((data) => {
        setWaitTimes(data);
      })
      .catch((e) => {
        console.log(e);
      });

    // getDiningHallInfo()
    //   .then((data) => {
    //     setDiningHalls(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);
  // console.log(waitTimes);
  // Right now we don't use waitTimes, instead we use a default wait time stored in diningHall

  // const cards = diningHalls.map((diningHall) => {
  const cards = getLatestWaitTimeForHalls(waitTimes).map((diningHall) => {
    return (
      <DiningCard
        key={diningHall['Dining Hall Id']} //{diningHall['Dining Hall Id']}
        waitTime={diningHall['Wait Time']} //{diningHall['Wait Time']}
        diningHallId={diningHall['Dining Hall Id']} //{diningHall['Dining Hall Id']}
        featuredItems={['Cajun Chicken', 'Roasted Broccoli']} //{diningHall['Featured Items']}
        stars={5} //{diningHall['Stars']}
        imageLink = {imageDict[diningHall['Dining Hall Id']]}//{diningHall['Image Link']}
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
        <div className="menu">
          <a href="#"> ...</a>
        </div>
      </div>
    </section>
  </header>
  {cards}
  <Form />
  </>
  );
};
