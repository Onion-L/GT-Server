const Router = require("koa-router");
const multer = require("@koa/multer");
const PlayerStats = require("../../model/playerStatsModel");
const Player = require("../../model/playerModel");
const Match = require("../../model/matchModel");
const players = require("../../data/players");
const playerRouter = require("./playerRouter.js");
const taskRouter = require("./taskRouter.js");
const matchRouter = require("./matchRouter.js");
const { updatePlayerStats } = require("../../utils/calculate");
const fileReader = require("../../utils/fileReader");

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

router.use(playerRouter.routes(), playerRouter.allowedMethods());
router.use(taskRouter.routes(), taskRouter.allowedMethods());
router.use(matchRouter.routes(), matchRouter.allowedMethods());

router.post("/upload", upload.single("match"), async (ctx, next) => {
  console.log("Start processing:", new Date());
  const { home, date, away, result, possession } = ctx.request.body;
  const matchData = await fileReader(date);
  console.log("After File Read:", new Date());

  const playerNames = matchData.map((match) => match.name);
  const players = await Player.find({ name: { $in: playerNames } }).lean();

  const playerMap = new Map(players.map((player) => [player.name, player]));
  const updatePromises = matchData.map((match) => {
    const player = playerMap.get(match.name);
    const newData = updatePlayerStats(player, match);
    return Player.updateOne({ name: match.name }, { stats: newData.stats });
  });
  await Promise.all(updatePromises);

  console.log("After Player Data Updated:", new Date());
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
        total_pass_accuracy: acc.total_pass_accuracy + playerData.pass_accuracy,
        total_appearances: acc.total_appearances + 1,
      };
    } else {
      return acc;
    }
  }, initialStats);

  totalStats.pass_accuracy = Math.round(
    totalStats.total_pass_accuracy / totalStats.total_appearances
  );
  console.log("After data caculated:", new Date());

  const commonData = {
    date,
    name: { home, away },
    result,
  };
  await Promise.all([
    PlayerStats.create({
      ...commonData,
      possession,
      stats: matchData,
    }),
    Match.create({
      ...commonData,
      stats: { ...totalStats, possession },
    }),
  ])
    .then((result) => {
      console.log("Finish:", new Date());
      ctx.status = 200;
      ctx.body = "File uploaded successfully";
    })
    .catch((error) => {
      console.error("Error:", error);
      ctx.status = 500;
      ctx.body = { message: error.message };
    });
});

//initial collection
router.get("/stats", async (ctx, next) => {
  try {
    Player.create(players);
    ctx.status = 200;
    ctx.body = "add";
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: err.message };
  }
});

module.exports = router;
