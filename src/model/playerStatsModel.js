const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema({
  name: String,
  appearance: { type: Number, enum: [0, 1] },
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
});

const TestSchema = new mongoose.Schema({
  date: { type: Date, require: true, unique: true },
  name: {
    home: { type: String, require: true },
    away: { type: String, require: true },
  },
  result: { type: String, require: true, enum: ["win", "draw", "lost"] },
  possession: Number,
  stats: [StatSchema], // 将 StatSchema 作为数组元素类型
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
