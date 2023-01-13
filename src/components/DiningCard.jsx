import React from 'react';

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
            <div className="waitlabel" style={{ backgroundColor: color }}>
              <p>
                {`${waitTime} `}
                <span>min</span>
              </p>
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