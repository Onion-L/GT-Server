const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const playerSchema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  position: { type: String, required: true },
  nationality: { type: String, required: true },
  image: { type: String, required: true },
  detail_image: { type: String, required: true },
  stats: {
    age: { type: String, required: true },
    appearance: { type: String, required: true },
    clean: String,
    goal: String,
  },
});

const Player = model("Player", playerSchema);
module.exports = Player;
