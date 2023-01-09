import React, { useEffect, useState } from 'react';
import { getWaitTimes } from '.';
import "./styles.css";

export const HomePage = () => {

    const [waitTimes, setWaitTimes] = useState();

    useEffect(() => {
        getWaitTimes().then((data) => {
        setWaitTimes(data);
    })
    }, []);
    console.log(waitTimes)

    return (
        <section className="cards">
        
        <div className="hall">
            <img className="hallpic" src="https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/overview_and_seating_0.jpg?itok=4CkHvmca" alt="Picture of Allision" />
        </div>
        <div className="top">
            <section className="hallname">
                <h2> Allison Dining Hall </h2>
            </section>
        </div>
        <div className="middle">
            <div className="middleleft">
                
                <div className="featureditems">
                    <div className="featuredlabel">
                    <h1> Featured Items </h1>
                     </div>
                    {/* <!-- Featured Items --> */}
                    <div className="item1">
                        Cajun Chicken
                    </div>
                    <div className="item2">
                        Roasted Vegetable Salad
                    </div>
                </div>
            </div>
            <div className="middleright">
                <div className="waittime">
                    <div className="waitlabel">
                    <h1> Wait Time </h1>
                    <p>{waitTimes ? waitTimes[0]["Wait Time"] : "not here yet"}</p>
                     </div>
                   
                    <div className="waitscore">
                        Worth the Wait Score
                    </div>
                    <div className="more">
                        More -
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}