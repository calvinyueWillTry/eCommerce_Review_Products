import React, { useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import {ADD_REVIEW} from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import "../../public/CSS/shop.css"

function ReviewForm(product) { //from Accord.Modal (line 14)
    console.log(product);//got the names
    const [addReview, { error }] = useMutation(ADD_REVIEW);

    const [userName, setUserName] = useState({authors:""});//takes in user's name
    const [userFormationData, setUserFormationData] = useState({description:""});//store the user's review input
    const [validation] = useState(false);//manage form validation
    const [displayAlert, setDisplayAlert] = useState(false);//display of an alert message
//updates the userFormationData state when the user types in the review input field
    const handleFeedbackChange = (event) => {
        const { name, value } = event.target;
        setUserFormationData({ ...userFormationData, [name]: value,  }), 
        setUserName({ ...userName, [name]: value });
    };
//triggered when the form is submitted
    const handleFormatSubmission = async (event) => {
        console.log(event.target[0].value);
        event.preventDefault();//prevents the default form submission behavior
        const formatting = event.currentTarget;
        if (formatting.checkValidity() === false) {//checks for form validity
            event.preventDefault();
            event.stopPropagation();
          } else{
            try {
                const { data } = await addReview({
                  variables: { 
                    product: event.target[2].value,
                    authors: event.target[0].value, 
                    description: event.target[1].value,},
                });
              } catch (err) {
                console.error(err);
              }
          };//

// clear form values
        setUserFormationData({description:""});
        setUserName({authors:""});
    };
    
    return (//set up for validation     
<> 
<Form 
    noValidate 
    validated={validation} 
    onSubmit={handleFormatSubmission} > 
    <Alert 
    dismissible 
    onClose={() => setDisplayAlert(false)} 
    show={displayAlert} 
    variant="danger" > 
        Check your entry, as something either went wrong or was inputted incorrectly!
    </Alert>

    <Form.Group className='mb-3'>
        <Form.Label htmlFor="authors" className='review-text'>
            Please enter your name.
        </Form.Label>
            <Form.Control type="text"
        placeholder="name"
        name="authors"
        onChange={handleFeedbackChange}
        value={userName.authors}
        required>
            </Form.Control>
        <Form.Label htmlFor="description" className='review-text'>
            Please input your review on this product. 
        </Form.Label> 
         <Form.Control
        type="text"
        placeholder="How should I put it?"
        name="description"
        onChange={handleFeedbackChange}
        value={userFormationData.description}
        required> 
        </Form.Control>
        <Form.Control
        type="hidden"
        name="product"
        value={product}> 
        </Form.Control>
        <Form.Control.Feedback
        type="invalid">
            You are required to enter your Password.
        </Form.Control.Feedback>
    </Form.Group>
        <Button className='review-button'
        disabled={!(userFormationData.description)}
        type="submit"
        variant="success" >
                Submit Your Review
        </Button>
</Form>
</>
    );
};
export default ReviewForm;