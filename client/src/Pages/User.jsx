import React from "react";
import Registration from "./Signup";
import Login from "../Components/Login";
import "../Components/footer.css"

function Users() {
    return (
        <div className="login-form">
            
            <p className="login-username">Already a user?</p>
            <Login/>
        </div>
    )
};//needs a card
export default Users;