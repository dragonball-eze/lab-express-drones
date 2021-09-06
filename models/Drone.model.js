// Iteration #1
const mongoose = require("mongoose");

const DroneSchema = mongoose.Schema(
    {
    name: String,
    propellers: Number,
    maxSpeed: Number,
    },
);

const Drone = mongoose.model("Drone", DroneSchema);

module.exports = Drone;