import React from 'react';
import Rating from '@mui/material/Rating';

export const DiningCard = (props) => {
  const { waitTime, diningHallId, featuredItems, stars, imageLink } = props;

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
      <div>
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
            <div className="featureditemslist">
              <div className="item">{featuredItems[0]}</div>
              <div className="item">{featuredItems[1]}</div>
              <div className="item">{featuredItems[2]}</div>
            </div>
          </div>
          <div className="waitscore">
            {/* Worth the Wait Score */}
            <Rating name="half-rating-read" value={stars} precision={0.5} readOnly sx={{fontSize: "2vw"}} />
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
          <div className="more">More -</div>

        </div>
      </div>
    </section>
  );
};
