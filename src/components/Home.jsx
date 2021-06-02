import React from "react";
import { HOME_PICTURE_URL } from "../Constants";

export const HomeComponent = () => {
    return (
        <div id="welcomePage">
            <div className="contentTitle"><h1>Welcome to the pizzza app!</h1></div>
            <div className="textContent">
                <div className="welcomeImage"><img src={`${HOME_PICTURE_URL}`} /></div>
                <div className="welcomeText"><p>Please feel free to order pizza, drink and dessert</p></div>
            </div>
        </div>
    );

}