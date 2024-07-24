import React, { useState } from 'react';
import { Nav, NavDropdown, Modal, Tab } from "react-bootstrap";
import ReviewForm from './Accordian/reviewForm';
import Accordion from 'react-bootstrap/Accordion';



function DropdownProductReview(productName){ //comes from props.header
    return ( 
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>See previous reviews of this product!</Accordion.Header>
            <Accordion.Body>
                <ReviewForm product={productName}/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    )
};//{/**this props is being passed back to what it imported */}
export default DropdownProductReview;
//exported to Sales, Accordian.Products, indexProduct, and indexProRow