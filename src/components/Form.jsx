import React, { useState } from 'react';
import { submitForm } from '../utils/firebase';

// todo: add css classes to these when we make the css ?
export const Form = () => {
  const [diningHallId, setDiningHallId] = useState('Allison');
  const [waitTime, setWaitTime] = useState(1);

  const handleWaitTimeChange = (event) => {
    setWaitTime(event.target.value);
  };
  const handleDiningHallChange = (event) => {
    setDiningHallId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(diningHallId, waitTime);
  };

  return (
    <div>
      <form id="userSubmittedForm" className="form">
        <label htmlFor="diningHall">Select your current dining hall.</label>
        <select value={diningHallId} onChange={handleDiningHallChange} id="diningHall">
          <option value="Allison">Allison</option>
          <option value="Elder">Elder</option>
          <option value="Plex West">Plex West</option>
          <option value="Sargent">Sargent</option>
        </select>
        <label htmlFor="userWaitTime">Enter your approximate wait time in minutes.</label>
        <input
          value={waitTime}
          onChange={handleWaitTimeChange}
          type="number"
          min="0"
          max="40"
          id="userWaitTime"
        />
        <button onClick={handleSubmit} id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
