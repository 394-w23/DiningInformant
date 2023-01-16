import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { Menu } from './Menu';

export const DiningCard = (props) => {
  const { waitTime, diningHallId, featuredItems, stars, imageLink, diningData, loading } = props;

  const [isOpen, toggleOpen] = useState(false);

  const openModal = (event) => {
    toggleOpen(!isOpen);
  };


  let color;
  if (waitTime < 10) {
    color = '#79DE79';
  } else if (waitTime < 20) {
    color = '#FCFC99';
  } else {
    color = '#FB6962';
  }

  return (
    <section className="cards">
      <div className="hall">
        <img className="hallpic" src={imageLink} alt={`Picture of ${diningHallId}`} />
        <div className="hallname">
          <h2>{diningHallId}</h2>
        </div>
      </div>
      <div className="middle">
        <div className="middleleft">
          {/* <div className="hallname">
            <h2>{diningHallId}</h2>
          </div> */}
          <div className="featureditems">
            <div className="featuredlabel">
              <h1> Featured Items </h1>
            </div>
            {/* <!-- Featured Items --> */}
            <div className="item1">{featuredItems[0]}</div>
            <div className="item2">{featuredItems[1]}</div>
          </div>
          <div className="waitscore">
            {/* Worth the Wait Score */}
            <Rating name="half-rating-read" value={stars} precision={0.5} readOnly />
            {/* <Rating name="read-only" value={stars} readOnly /> */}
            {/* <p>{stars}</p> */}
          </div>
        </div>
        <div className="middleright">

          <div className="waitlabel" style={{ backgroundColor: color }}>
            <div className="waittime">
              {/* <p>
                {`${waitTime} `}
                
              </p> */}
              {`${waitTime} `}
            </div>
            {/* <span>min</span> */}
            min

          </div>
          <div className="more"><button onClick={openModal}>More -</button></div>
          <Menu open={isOpen} loading={loading} data={diningData} diningHallId={diningHallId} toggleModal={openModal}/>

        </div>
      </div>
    </section>
  );
};
