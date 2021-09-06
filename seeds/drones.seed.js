// Iteration #1
require("../db");
const Drone = require("../models/Drone.model");

//Create an array of 3 objects
const drones = [
    {
      name: "Sonic",
      propellers: 1,
      maxSpeed: 10,
    },
    {
      name: "Speedo",
      propellers: 3,
      maxSpeed: 9,
    },
    {
      name: "Eagle",
      propellers: 2,
      maxSpeed: 8,
    },
]

//adding drone model to database
Drone.insertMany(drones).then((dronesFromDB) => {
    console.log(`Drones created - ${dronesFromDB.length}`);
});