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
    const { home, date, away } = ctx.request.body;
    const matchData = await fileReader();
    console.log(home, date, away);

    // 记得更换数据库名称
    const test = await Test.create({
      date,
      name: { home, away },
      stats: matchData,
    });
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
