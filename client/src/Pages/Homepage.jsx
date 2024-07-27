import React from "react";
import About from "./About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./about.css";

function Home() {
    return (
        <div className="home-card">
            <p className="home-title">Welcome to our eCommerce website!</p>
            <About/>

        </div>
    )
};
export default Home;
//exported to the App