import React from "react";
import "./option.css";
import { Link } from "react-router-dom";
import Header from "./Header";
const Option = () => {
    return (
        <div>
            <div className="header_div"> <Header /> </div>
            <div className="arrow_div"> <h1 style={{ textAlign: "center", fontSize: "2rem", padding: "15px", backgroundColor: "black", color: "white", marginTop: "10px", borderRadius: "5px" }}>Select your choice</h1>
                <img src="https://media3.giphy.com/media/9PekRRQ0WlrRVwynAk/200w.gif?cid=6c09b952o1vttabpgab70dl7d9z4mxkn6o9dnakkp5o017pe&ep=v1_gifs_search&rid=200w.gif&ct=s" alt="" />
            </div>

            <div className="choice_container">
                <Link to="/sagar">
                    <div className="option_div">Sagar Sweets</div>
                </Link>
                <Link to="/burger">
                    {" "}
                    <div className="option_div">Burger King</div>
                </Link>
                <Link to="/pizza">
                    {" "}
                    <div className="option_div">Domino's pizaa</div>
                </Link>
                <Link to="/other">
                    {" "}
                    <div className="option_div">Other</div>
                </Link>
            </div>
        </div>
    );
};

export default Option;
