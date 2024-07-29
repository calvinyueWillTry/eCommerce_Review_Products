import React from "react";
import Blogging from "../Components/Carousel/Blog";
import EntryReview from "../Components/EntryReview";
import "../Pages/contact.css";

function Reviews() { 

    return (
        <div>
            
            <Blogging/>
            <EntryReview/>
            <div className="prev-review-button">
            <button ><p className="prev-text"> Submit Your Review </p></button>
            </div>
            
        </div>
    )
};//button needs to get to backend (mutations.js)
export default Reviews;
//Exported to Main
