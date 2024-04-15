const Router = require("koa-router");
const path = require("path");
const fs = require("fs");
const Match = require("../../model/matchModel");
const PlayerStats = require("../../model/playerStatsModel");
const { calculateAverage } = require("../../utils/calculate");
const router = new Router();

// get match data
router.get("/matches", async (ctx, next) => {
  try {
    const totalStats = {
      totalGoals: 0,
      totalYellowCards: 0,
      totalRedCards: 0,
      totalPasses: 0,
      totalPassAccuracy: 0,
      totalWinNum: 0,
      totalDrawNum: 0,
      totalPossession: 0,
      totalYellowCards: 0,
      totalShotOnTarget: 0,
    };

    const matchData = await Match.find().sort({ date: 1 });
    const statsSummary = matchData.reduce((accumulator, currentValue) => {
      accumulator.totalGoals += currentValue.stats.goals;
      accumulator.totalYellowCards += currentValue.stats.yellow_cards;
      accumulator.totalRedCards += currentValue.stats.red_cards;
      accumulator.totalPasses += currentValue.stats.passes;
      accumulator.totalPassAccuracy += currentValue.stats.pass_accuracy;
      accumulator.totalPossession += currentValue.stats.possession;
      accumulator.totalShotOnTarget += currentValue.stats.shots_on_target;

      // accumulator.totalDefence += currentValue.stats.tackle+currentValue.stats.;
      if (currentValue.result === "win") {
        accumulator.totalWinNum++;
      } else if (currentValue.result === "draw") {
        accumulator.totalDrawNum++;
      }
      return accumulator;
    }, totalStats);
    const matchCount = matchData.length;

    statsSummary.averagePassAccuracy = calculateAverage(
      statsSummary.totalPassAccuracy,
      matchCount,
      true
    );
    statsSummary.averagePassNum = calculateAverage(
      statsSummary.totalPasses,
      matchCount,
      true
    );
    statsSummary.averagePossession = calculateAverage(
      statsSummary.totalPossession,
      matchCount,
      true
    );
    statsSummary.averageYellowCards = calculateAverage(
      statsSummary.totalYellowCards,
      matchCount,
      true
    );
    statsSummary.averageShotOnTarget = calculateAverage(
      statsSummary.totalShotOnTarget,
      matchCount,
      true
    );
    ctx.status = 200;
    ctx.body = { match: matchData, summary: statsSummary };
  } catch (error) {
    console.error("Error fetching match data:", error);
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
});

// delete match data
router.delete("/match", async (ctx) => {
  const date = ctx.request.query.date;
  const dirPath = path.join(__dirname, "../uploads");
  const filePath = `${dirPath}/${date}.xlsx`;

  try {
    const [playerStatsResult, matchResult] = await Promise.all([
      PlayerStats.deleteOne({ date: date }),
      Match.deleteOne({ date: date }),
    ]);

    fs.unlinkSync(filePath);
    ctx.status = 200;
    ctx.body = { message: "Data deleted successfully" };
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
});

module.exports = router;
