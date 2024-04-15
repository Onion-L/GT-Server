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
    appearance: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    save: { type: Number, default: 0 },
    goals: { type: Number, default: 0 },
    assist: { type: Number, default: 0 },
    shots: { type: Number, default: 0 },
    shots_on_target: { type: Number, default: 0 },
    corners: { type: Number, default: 0 },
    yellow_cards: { type: Number, default: 0 },
    red_cards: { type: Number, default: 0 },
    passes: { type: Number, default: 0 },
    key_pass: { type: Number, default: 0 },
    pass_accuracy: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    tackle: { type: Number, default: 0 },
    interception: { type: Number, default: 0 },
    clearance: { type: Number, default: 0 },
    dribble_success: { type: Number, default: 0 },
    lose_possession: { type: Number, default: 0 },
    fouls: { type: Number, default: 0 },
    offsides: { type: Number, default: 0 },
  },
});
const Player = model("Player", playerSchema);
module.exports = Player;
