const mongoose = require("mongoose");

const { model } = mongoose;

const matchSchema = new mongoose.Schema({
  name: { home: String, away: String },
  date: String,
  result: { type: String, require: true, enum: ["win", "draw", "lost"] },
  stats: {
    goals: Number,
    possession: Number,
    shots: Number,
    shots_on_target: Number,
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
