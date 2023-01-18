import React, { useState } from 'react';
import { submitForm } from '../utils/firebase';
import { Rating, Modal, Paper } from '@mui/material';

export const Form = (props) => {
  const { open, onClose, toggleModal } = props;

  const [diningHallId, setDiningHallId] = useState('');
  const [waitTime, setWaitTime] = useState(0);
  const [rating, setRating] = useState(0);

  const handleWaitTimeChange = (event) => {
    setWaitTime(event.target.value);
  };
  const handleDiningHallChange = (event) => {
    setDiningHallId(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(diningHallId, waitTime, rating);
  };

// old return

//   return (
//     <div>
//       <form id="userSubmittedForm" className="form">
//         <label htmlFor="diningHall">Select your current dining hall.</label>
//         <select value={diningHallId} onChange={handleDiningHallChange} id="diningHall">
//           <option value="Allison">Allison</option>
//           <option value="Elder">Elder</option>
//           <option value="Plex West">Plex West</option>
//           <option value="Sargent">Sargent</option>
//         </select>
//         <label htmlFor="userWaitTime">Enter your approximate wait time in minutes.</label>
//         <input
//           value={waitTime}
//           onChange={handleWaitTimeChange}
//           type="number"
//           min="0"
//           max="40"
//           id="userWaitTime"
//         />
//         <button onClick={handleSubmit} id="submit" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };


// new return
    return (
        <Modal style={{ margin: '20px 20px' }} open={open} onClose={onClose}>
            <>
                <Paper className="formpaper">
                    <button onClick={toggleModal}>Close</button>
                    <div className="form" id="userSubmittedForm">
                        <div className="shareYourExperienceHeader">
                            <h1 className="shareYourExperienceH1">Share Your Experience!</h1>
                        </div>
                        <div className="question">
                            <h1 className="questionH1">Which dining hall did you go to?</h1>
                        </div>
                        <div className="response">
                            <select className="formdropdown" value={diningHallId} onChange={handleDiningHallChange} id="diningHall">
                                <option value=""></option>
                                <option value="Allison">Allison</option>
                                <option value="Elder">Elder</option>
                                <option value="Plex West">Plex West</option>
                                <option value="Sargent">Sargent</option>
                            </select>
                        </div>
                        <div className="question">
                            <h1 className="questionH1">What was your wait time in minutes?</h1>
                        </div>
                        <div className="response">
                            <input className="waittimeinput" type="number" min="0" max="40" id="userWaitTime" value={waitTime} onChange={handleWaitTimeChange}></input>
                        </div>
                        <div className="question">
                            <h1 className="questionH1">How would you rate the food?</h1>
                        </div>
                        <div>
                            <Rating name="half-rating-read" precision={0.5} size="large" id="userStars" value={rating} onChange={handleRatingChange}/>
                        </div>
                        <div className="buttoncontainer">
                            <button className="submitbutton" onClick={handleSubmit} id="submit" type="submit">Submit!</button>
                        </div>
                    </div>
                </Paper>
            </>
        </Modal>
    );
};