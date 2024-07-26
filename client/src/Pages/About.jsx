import React from "react";
import Shopping from "./Shop";
import { Button } from "react-bootstrap";
function About() {
    return (
        <div className="about-card">
            <p> This was created by the following personnel:  </p>
            <div className="personnel-card">
                <p> Calvin Yue </p>
                <a href="https://github.com/calvinyueWillTry/eCommerce_Review_Products" target='_blank'> Click this link to get to know his work!</a>
            </div>
            <div className="personnel-card">
                <p> Austin Marlatt </p>
                <a href="https://github.com/Austin-Marlatt" target='_blank'> Click this link to get to know his work!</a>
            </div>
            <div className="personnel-card">
            <p> Kyler Gibbs </p> 
            <a href="https://github.com/KylerG12" target='_blank'> Click this link to get to know his work!</a>
            </div>
            <div className="personnel-card">
                <p> Alexandra Austin (couldn't find their profile)  </p>
            </div>
            
            
            <div>
                <p>This is the other rendition of our eCommerce Website (it works on the setting local host)</p>
                <p><a href="https://github.com/Austin-Marlatt/E-Commerce-Website" target='_blank'> Click this link to see the Github for our other rendition!</a></p>
                <p><a href="https://e-commerce-website-oryj.onrender.com/shop" target='_blank'> Click this link to see our other rendition!</a></p>
                <p><Button href="/shop"> Let's go Shopping!</Button></p>
            </div>
            
        </div>
    )
};
export default About;
//exported to the Homepage