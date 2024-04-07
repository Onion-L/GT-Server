const Router = require("koa-router");
const multer = require("@koa/multer");
const Player = require("../model/playerModel");
const Match = require("../model/matchModel");
const Test = require("../model/testModel");
const fileReader = require("../utils/fileReader");
const router = new Router();

//  Set the multer's storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/players", async (ctx, next) => {
  const playerData = await Player.find().sort({ id: 1 });
  ctx.status = 200;
  ctx.body = playerData;
});

router.get("/player/:id", async (ctx, next) => {});

router.post("/upload", upload.single("match"), async (ctx, next) => {
  try {
    const { home, date, away, result, possession } = ctx.request.body;
    const matchData = await fileReader();

    const initialStats = {
      goals: 0,
      assists: 0,
      corners: 0,
      shots: 0,
      posession: 0,
      shots_on_target: 0,
      fouls: 0,
      yellow_cards: 0,
      red_cards: 0,
      offsides: 0,
      passes: 0,
      pass_accuracy: 0,
      total_pass_accuracy: 0,
      total_appearances: 0,
    };

    const totalStats = matchData.reduce((acc, playerData) => {
      if (playerData.appearance === 1) {
        console.log(playerData.name);
        return {
          goals: acc.goals + playerData.goals,
          assists: acc.assists + playerData.assists,
          corners: acc.corners + playerData.corners,
          shots: acc.shots + playerData.shots,
          shots_on_target: acc.shots_on_target + playerData.shots_on_target,
          fouls: acc.fouls + playerData.fouls,
          yellow_cards: acc.yellow_cards + playerData.yellow_cards,
          red_cards: acc.red_cards + playerData.red_cards,
          offsides: acc.offsides + playerData.offsides,
          passes: acc.passes + playerData.passes,
          total_pass_accuracy:
            acc.total_pass_accuracy + playerData.pass_accuracy,
          total_appearances: acc.total_appearances + 1,
        };
      } else {
        return acc;
      }
    }, initialStats);

    totalStats.pass_accuracy = Math.round(
      totalStats.total_pass_accuracy / totalStats.total_appearances
    );
    console.log(totalStats.total_appearances);
    // 记得更换数据库名称
    const test = await Test.create({
      date,
      name: { home, away },
      result: result,
      possession,
      stats: matchData,
    });

    const match = await Match.create({
      date,
      name: { home, away },
      result: result,
      stats: { ...totalStats, possession },
    });

    console.log(match);
    ctx.status = 200;
    ctx.body = "File uploaded successfully";
  } catch (error) {
    ctx.status = 400;
    ctx.body = { message: error.message };
  }
});

router.get("/matches", async (ctx, next) => {
  const matchData = await Match.find();
  const statsSummary = matchData.reduce(
    (accumulator, currentValue) => {
      accumulator.totalGoals += currentValue.stats.goals;
      accumulator.totalYellowCards += currentValue.stats.yellow_cards;
      accumulator.totalRedCards += currentValue.stats.red_cards;
      accumulator.totalPasses += currentValue.stats.passes;
      accumulator.totalPassAccuracy += currentValue.stats.pass_accuracy;

      if (currentValue.result === "win") {
        accumulator.totalWinNum++;
      } else if (currentValue.result === "draw") {
        accumulator.totalDrawNum++;
      }
      return accumulator;
    },
    {
      totalGoals: 0,
      totalYellowCards: 0,
      totalRedCards: 0,
      totalPasses: 0,
      totalPassAccuracy: 0,
      totalWinNum: 0,
      totalDrawNum: 0,
    }
  );

  statsSummary.averagePassAccuracy =
    statsSummary.totalPassAccuracy / matchData.length;
  statsSummary.averagePassNum = Math.round(
    statsSummary.totalPasses / matchData.length
  );
  ctx.status = 200;
  ctx.body = { match: matchData, summary: statsSummary };
});

module.exports = router;
