const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const matchSchema = new mongoose.Schema({
  id: Number,
  name: { home: String, away: String },
  date: String,
  result: String,
  stats: {
    goals: Number,
    possession: Number,
    shots_on_target: Number,
    shots_off_target: Number,
    corners: Number,
    fouls: Number,
    yellow_cards: Number,
    red_cards: Number,
    offsides: Number,
    passes: Number,
    pass_accuracy: Number,
  },
});

const Match = model("Match", matchSchema);
module.exports = Match;
