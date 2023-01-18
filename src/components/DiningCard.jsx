import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Menu } from './Menu';
import { CircularProgress } from '@mui/material';

export const DiningCard = (props) => {
  const { waitTime, diningHallId, stars, imageLink, diningData, loading } = props;

  const [isOpen, toggleOpen] = useState(false);

  const featuredItems = diningData ? diningData[diningHallId][2][0]['items'].slice(0, 3) : [];

  const openModal = () => {
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
      <div>
        <img className="hallpic" src={imageLink} alt={`Picture of ${diningHallId}`} />
        <div className="hallname">
          <h2>{diningHallId} Dining Hall</h2>
        </div>
      </div>
      <div className="middle">
        <div className="middleleft">
          <div className="featureditems">
            <div className="featuredlabel">
              <h1> Featured Items: </h1>
            </div>
            <div className="featureditemslist">
              {loading ? <CircularProgress /> : null}
              {featuredItems.map((item) => {
                const { name } = item;
                return (
                  <div key={name} className="item">
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="waitscore">
            <Rating
              name="half-rating-read"
              value={stars}
              precision={0.5}
              readOnly
              sx={{ fontSize: '2vw' }}
            />
          </div>
        </div>
        <div className="middleright">
          <div className="waitlabel" style={{ backgroundColor: color }}>
            <div className="waittime">{`${waitTime} `}</div>
            min
          </div>
          <div className="more">
            <button className="morebutton" onClick={openModal}>
              Menu for today <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <Menu
            open={isOpen}
            loading={loading}
            data={diningData}
            diningHallId={diningHallId}
            toggleModal={openModal}
          />
        </div>
      </div>
    </section>
  );
};
