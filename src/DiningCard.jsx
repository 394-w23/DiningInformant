import React, { useEffect, useState } from 'react';
import './styles.css';

export const DiningCard = (props) => {
  const { waitTime, diningHallId, featuredItems, stars, imageLink } = props;

  return (
    <section className="cards">
      <div className="hall">
        <img className="hallpic" src={imageLink} alt={`Picture of ${diningHallId}`} />
      </div>
      <div className="middle">
        <div className="middleleft">
          <div className="hallname">
            <h2>{diningHallId}</h2>
          </div>
          <div className="featureditems">
            <div className="featuredlabel">
              <h1> Featured Items </h1>
            </div>
            {/* <!-- Featured Items --> */}
            <div className="item1">{featuredItems[0]}</div>
            <div className="item2">{featuredItems[1]}</div>
          </div>
        </div>
        <div className="middleright">
          <div className="waittime">
            <div className="waitlabel">
              <h1> Wait Time </h1>
              <p>{waitTime}</p>
            </div>

            <div className="waitscore">
              Worth the Wait Score
              <p>{stars}</p>
            </div>
            <div className="more">More -</div>
          </div>
        </div>
      </div>
    </section>
  );
};
