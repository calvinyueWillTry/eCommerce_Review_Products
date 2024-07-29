import React, { useState } from 'react';
import { Nav, NavDropdown, Modal, Tab } from "react-bootstrap";
import ReviewForm from './Accordian/reviewForm';
import Accordion from 'react-bootstrap/Accordion';



function DropdownProductReview(productName){ //comes from props.header
    return ( 
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Enter a review of this product!</Accordion.Header>
            <Accordion.Body>
                <ReviewForm product={productName}/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    )
};
export default DropdownProductReview;
