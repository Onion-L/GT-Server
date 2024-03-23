const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const playerSchema = new Schema({
  name: String,
  number: String,
  position: String,
  nationality: String,
  image: String,
  detail_image: String,
  stats: {
    age: String,
    appearance: String,
    clean: String,
    goal: String,
  },
});

const Player = model("Player", playerSchema);
module.exports = Player;
