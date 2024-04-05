const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema({
  name: String,
  appearance: Number,
  minutes: Number,
  save: Number,
  goal: Number,
  assist: Number,
  yellowCard: Number,
  redCard: Number,
  pass: Number,
  keyPasses: Number,
  passSuccessRate: Number,
  playerRating: Number,
  tacklesWon: Number,
  interception: Number,
  clearance: Number,
  dribbleSuccess: Number,
  losePossession: Number,
});

const TestSchema = new mongoose.Schema({
  date: { type: Date, require: true },
  name: {
    home: String,
    away: String,
  },
  stats: [StatSchema], // 将 StatSchema 作为数组元素类型
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
