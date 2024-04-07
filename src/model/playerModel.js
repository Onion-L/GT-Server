const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const playerSchema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  number: { type: String, required: true },
  position: { type: String, required: true },
  nationality: { type: String, required: true },
  image: { type: String, required: true },
  detail_image: { type: String, required: true },
  salary_num: String,
  stats: {
    age: { type: String, required: true },
    appearance: { type: Number, required: true },
    clean: Number,
    goal: Number,
  },
});

const Player = model("Player", playerSchema);
module.exports = Player;
