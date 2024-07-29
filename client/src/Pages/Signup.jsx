import React from "react";
import Contact from "./Contact";
import "../Components/footer.css"
import { Button } from "react-bootstrap";

function Registration() {
    
    return(
        <div className="login-form">
            <p>Sign up!</p>
            <p className="login-username">Input a username</p>
             <input className="login-textbox" name="username"/>
            <p className="login-username">Input a password</p>
             <input className="login-textbox" name="password"/>
             <p className="login-username">Re-enter the password</p>
             <input className="login-textbox" name="password"/>
            <p className="signup-button"><Button href="/user" className="shop-button"> Login here is you're already a user</Button></p>
        </div>
    )
};
export default Registration;
//exported to Main