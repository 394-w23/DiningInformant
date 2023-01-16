import React from "react";
import Rating from '@mui/material/Rating';

export const Form = () => {
    return (
        <>
            <header>
                <section className="newbar">
                    <div className="newleft">
                        <h2>DiningInformant</h2>
                    </div>
                </section>
            </header>
            <div className="form">
                <div className="shareYourExperienceHeader">
                    <h1 className="shareYourExperienceH1">Share Your Experience!</h1>
                </div>
                <div className="question">
                    <h1 className="questionH1">Which dining hall did you go to?</h1>
                </div>
                <div className="response">
                    <select className="formdropdown" id="userDiningHall">\
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
                    <input className="waittimeinput" type="number" min="0" max="40" id="userWaitTime"></input>
                </div>
                <div className="question">
                    <h1 className="questionH1">How would you rate the food?</h1>
                </div>
                <div className="response">
                    
                </div><Rating name="half-rating-read" precision={0.5} sx={{fontSize: "25%"}} id="userStars" />
                <div className="buttoncontainer">
                    <button className="submitbutton">Submit!</button>
                </div>
            </div>
        </>
    );
}