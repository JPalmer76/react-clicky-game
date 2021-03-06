import React from "react";
import "../navbar/index";
import "./Nav.css";




const Navbar = props => (
    <div className="navbar">
        <div>React Memory Game!</div>
        <div className={props.navMsgColor}>{props.navMessage}</div>
        <div>
            Score: {props.score} <span className="pipe">|</span> High Score: {" "}{props.highScore}
        </div>
    </div>
)

export default Navbar;

