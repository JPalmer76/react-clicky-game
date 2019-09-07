import React, { Component } from "react";
import Navbar from "./Nav";
import Container from "./Container";
import Footer from "./Footer";
import Banner from "./Banner";
import image from "./images";


class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        bad click
        navMsgColor: "",

        navMessage: "Click Image to Begin!",

        allCharacters: this.shuffleArray(),
        wasClicked: [],

        shake: false
    };

    clickEvent = this.checkClicked.bind(this);

    shuffleArray() {
        const newArr = images.slice();
        const shuffleArr = [];

        while (newArr.length > 0) {
            shuffleArr.push(
              newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
            );
          }
          return shuffleArr;
    }
    
}