import React from "react";
import Rating from '@mui/material/Rating';

export const Form = () => {
    return (
        <div className="container-center-horizontal">
            <div className="iphone-14-1 screen">
                <header className="header">
                    <div className="overlap-group4">
                        <div className="sort-by inter-normal-black-14px">
                            Sort By ↓
                        </div>
                        <div className="flex-row">
                            <div className="dining-informant">
                                DiningInformant
                            </div>
                            <div className="overlap-group">
                                <div className="worth-the-wait inter-normal-black-14px">
                                    Worth the Wait
                                </div>
                                <img className="star-1" src="./icons8-star-filled-48.png" alt="Star" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="form">
                    <div className="overlap-group2">
                        <div className="share-your-experience inter-semi-bold-white-28px">
                            Share Your Experience!
                        </div>
                        <p className="which-dining-hall-did-you-go-to inter-semi-bold-black-20px">
                            Which dining hall did you go to?
                        </p>
                        <div className="overlap-group1">
                            <select id="diningHall">
                                <option value="Allison">Allison</option>
                                <option value="Elder">Elder</option>
                                <option value="Plex West">Plex West</option>
                                <option value="Sargent">Sargent</option>
                            </select>
                        </div>
                        <p className="how-many-minutes-did-you-wait inter-semi-bold-black-20px">
                            How many minutes did you wait?
                        </p>
                        <div className="overlap-group-1">
                            {/* make this an input number field */}
                            <input type="number" min="0" max="40"></input>
                        </div>
                        <p className="how-would-you-rate-the-food inter-semi-bold-black-20px">
                            How would you rate the food?
                        </p>
                        <div className="menu-rating">
                            {/* stars here, use MUI */}
                            <Rating name="half-rating-read" precision={0.5} sx={{fontSize: "2vw"}} />
                        </div>
                        <div className="overlap-group3">
                            <button>Submit!</button>
                        </div>
                    </div>
                </div>
                <div className="overlap-group5">
                    {/* turn this into a button */}
                    <div className="back-to-dining-halls inter-semi-bold-white-28px">
                        Back to Dining Halls
                    </div>
                </div>
            </div>
        </div>
    );
}