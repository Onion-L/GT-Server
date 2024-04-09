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
  salary_num: Number,
  stats: {
    age: { type: String, required: true },
    appearance: Number,
    minutes: Number,
    save: Number,
    goals: Number,
    assist: Number,
    shots: Number,
    shots_on_target: Number,
    corners: Number,
    yellow_cards: Number,
    red_cards: Number,
    passes: Number,
    key_pass: Number,
    pass_accuracy: Number,
    rating: Number,
    tackle: Number,
    interception: Number,
    clearance: Number,
    dribble_success: Number,
    lose_possession: Number,
    fouls: Number,
    offsides: Number,
  },
});
const Player = model("Player", playerSchema);
module.exports = Player;
