const Router = require("koa-router");
const multer = require("@koa/multer");
const path = require("path");
const fs = require("fs");
const Player = require("../model/playerModel");
const Match = require("../model/matchModel");
const Task = require("../model/taskModel");
const PlayerStats = require("../model/playerStatsModel");
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
  const playerData = await Player.find().sort({ id: 1 }).lean();
  const totalSalary = playerData.reduce((acc, player) => {
    return acc + player.salary_num;
  }, 0);

  for (let player of playerData) {
    player.salary_pre = Math.round((player.salary_num / totalSalary) * 500);
  }
  ctx.status = 200;
  ctx.body = playerData;
});

router.put("/players", async (ctx, next) => {
  const playerData = await Player.find().sort({ id: 1 });
  for (let player of playerData) {
    console.log(player);
    await Player.updateOne(
      { id: player.id },
      { salary_num: parseInt(player.salary_num) }
    );
  }
  ctx.status = 200;
  ctx.body = { message: "Task updated successfully" };
});

router.get("/tasks", async (ctx, next) => {
  const tasks = await Task.find();
  ctx.status = 200;
  ctx.body = tasks;
});

router.post("/tasks", async (ctx, next) => {
  const task = ctx.request.body;
  console.log(task);
  await Task.create(task)
    .then((response) => {
      ctx.status = 200;
      ctx.body = { message: "Task added successfully", task };
    })
    .catch((error) => {
      ctx.status = 500;
      ctx.body = { message: error.message };
    });
});

router.delete("/tasks", async (ctx, next) => {
  const id = ctx.request.query.id;
  console.log(id);
  await Task.deleteOne({ _id: id }).then((_) => {
    ctx.status = 200;
    ctx.body = { message: "Task added successfully" };
  });
});

router.put("/tasks", async (ctx, next) => {
  const task = ctx.request.body;
  console.log(task);
  await Task.updateOne(
    { _id: task._id },
    { ...task, updatedAt: Date().now }
  ).then((response) => {
    ctx.status = 200;
    ctx.body = { message: "Task updated successfully" };
  });
});

router.post("/upload", upload.single("match"), async (ctx, next) => {
  const { home, date, away, result, possession } = ctx.request.body;
  const matchData = await fileReader(date);

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
      ctx.status = 200;
      ctx.body = "File uploaded successfully";
    })
    .catch((error) => {
      console.error("Error:", error);
      ctx.status = 500;
      ctx.body = { message: error.message };
    });
});

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
    };

    const matchData = await Match.find().sort({ date: 1 });
    const statsSummary = matchData.reduce((accumulator, currentValue) => {
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
    }, totalStats);

    statsSummary.averagePassAccuracy =
      statsSummary.totalPassAccuracy / matchData.length;
    statsSummary.averagePassNum = Math.round(
      statsSummary.totalPasses / matchData.length
    );
    ctx.status = 200;
    ctx.body = { match: matchData, summary: statsSummary };
  } catch (error) {
    console.error("Error fetching match data:", error);
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
});

router.delete("/match", async (ctx) => {
  const date = ctx.request.query.date;
  const dirPath = path.join(__dirname, "../uploads");
  console.log(date);
  console.log(`${dirPath}/${date}.xlsx`);
  await Promise.all([
    PlayerStats.deleteOne({ date: date }),
    Match.deleteOne({ date: date }),
  ])
    .then((results) => {
      console.log(results);
      ctx.status = 200;
      ctx.body = { message: "Data deleted successfully" };
    })
    .then((_) => {
      fs.unlink(`${dirPath}/${date}.xlsx`, (err) => {
        if (err) throw err;
        console.log("File Delete");
      });
    })
    .catch((err) => {
      console.error(err);
      ctx.status = 500;
      ctx.body = { message: err.message };
    });
});

module.exports = router;
