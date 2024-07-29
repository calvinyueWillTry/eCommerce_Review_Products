import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom'; 
import "../Components/Carousel/Carousel.css"

function EntryReview() {
    let { userID } = useParams();

    const [user, setUser] = useState(""); 
    const [reviewer, setReviewer] = useState("");
    const [feedback, setFeedback] = useState("");

    return (
    <form>  
        <div className='review-form'>
            <p className='review-site'>If you would like to leave a review of this website, please fill out the following to post a review</p>
            <p className='review-site'>If you are reviewing a product, please do not leave your review here. Leave reviews of the products on the "Let's go Shopping" page</p>
            <div className='review-input'>
                <input className="contactus" placeholder="Name*" 
                          type="text" name="Name" value={user} required/>
            </div>
            <div className='review-input'>
                <input className="contactus" placeholder="Product*" 
                          type="text" name="Name" value={reviewer} required/>
            </div>
            <div className='review-input'>
                <textarea className="textarea" placeholder="Message*" 
                          type="type" name="text" Message="Leave your feedback" 
                             value = {feedback} required/>
            </div>
        </div>
    </form>  
    );
}
export default EntryReview;