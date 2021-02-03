"use strict";

// POO  basic . Create clases
let bicycle = {
  colour: "black",
  model: "BMX",
  brakes: "disc",
  maxSpeed: "60km",
  changeColour: function (newColour) {
    bicycle.colour = newColour;
    console.log(bicycle);

    // USANDO THIS >
    // this.colour = newColour;
  },
};

bicycle.changeColour("orange");
