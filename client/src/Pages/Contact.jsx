import React, { useState } from 'react';
import "../Pages/contact.css"

function Contact () {
   const [user, userName] = useState("");//[username, setUsername] convention
   const [email, emailAddress] = useState("");
   const [phone, phoneNumber] = useState("");
   const [subject, subjectSelection] = useState("");
   const [text, textSubmit] = useState("");
//UX: on
const contactClick = (event) => { //normally handleInput onChange = {calls this function}
   const { target } = event; //{contactClick} = event
   const inputNameString = target.name; //name property inside an HTML element
   const inputValue = target.value;// change in the input, select, option, other HTML element
   if (inputNameString === "email") { //name matches "email"
      console.log(inputNameString, inputValue);
      emailAddress(inputValue); //set the text inputted into the useState(""), On event, Change useState(inputValue);
   }  else if (inputNameString === "text") {
      console.log(inputNameString, inputValue);
      textSubmit(inputValue);
   } else if (inputNameString ==="Name"){
      console.log(inputNameString, inputValue);
      userName(inputValue);
   } else if (inputNameString === "Phone") {
      console.log(inputNameString, inputValue);
      phoneNumber(inputValue);
   } else if (inputNameString === "subject") {
      console.log(inputNameString, inputValue);
      subjectSelection(inputValue);
   } else { //normally error
      console.log(inputValue); 
   };
   }
   const handleOptions = (e)=> {
      subjectSelection(e.target.value);
   };
   const contactSubmit = (eve) => {
      eve.preventDefault();
      console.log(eve);
      alert(`Thank you for your contact! We will get back to you as soon as we can!`);
      const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=Dear ${user},the phone number you provided us is ${phone}, and we received the following message:${text}`;
      //need to create a window for the info to come through
      console.log(emailLink);
      userName("");
      emailAddress("");
      textSubmit("");
      subjectSelection("");
      phoneNumber("");
      window.open(emailLink);
      
      window.location.href = "/"
   }
    return (
        <div className="contact">
        <div className="container">
           <div className="row ">
              <div className="col-md-12">
                 <div className="titlepage text_align_center">
                    <h2 className="subject">Contact Us</h2>
                 </div>
              </div>
              <div className="col-md-6">
                 <form id="request" className="main_form" onSubmit={contactSubmit}>
                    <div className="row">
                       <div className="col-md-6 texting"> 
                          <p className='text-box'><input className="contactus" placeholder="Name*" 
                          type="text" name="Name" value={user} 
                          onChange={contactClick} required/> </p>
                       </div>
                     </div>
                     <div>
                       <div className="col-md-6"> 
                         <p className='text-box'><input className="contactus" placeholder="Phone Number" 
                          type="text" name="Phone" value={phone}
                          onChange={contactClick} />  </p>                        
                       </div>
                     </div>
                     <div>
                        <div className="col-md-12">
                           <p className='text-box'><input className="contactus" placeholder="Email*"
                           type="email" name="email" value={email} onChange={contactClick} required/></p>
                        </div>
                     </div>
                     <div><p className="subject">Subject </p></div>            
                     <div>
                       <div className="col-md-12 select-outline">
                          <select className="custom-select" name="subject" value={subject} 
                          onChange={contactClick} required>
                             <option selected>Select Subject*</option>
                             <option value="Products">Products</option>
                             <option value="Sales">Sales</option>
                             <option value="Account">Account</option>
                             <option value="Other">Other</option>
                          </select>
                       </div>
                     </div>
                     <div>
                       <div className="col-md-12">
                          <p className='text-box'><textarea className="textarea" placeholder="Please leave your questions and/or comments here*" 
                          type="type" name="text" Message="Name" 
                          onChange={contactClick} value = {text} required></textarea></p>
                       </div>
                     </div>
                     <div>
                       <div className="col-md-12">
                          <button className="send_btn">Send</button>
                       </div>
                    </div>
                 </form>
              </div>
           </div>
        </div>
     </div>
    )
};
export default Contact;
//exported to Main and Signup