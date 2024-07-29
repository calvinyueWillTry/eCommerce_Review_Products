import React from "react";
import { useState } from 'react';
import "./footer.css";

function Login () {
return(
    <div className="login-form">
        <p className="login-username">Enter your username</p>
        <input className="login-textbox" name="username"/>
        <p className="login-username">Enter your password</p>
        <input className="login-textbox" name="password"/>
    </div>
)
}; //need mutations file
export default Login;
//exported to User