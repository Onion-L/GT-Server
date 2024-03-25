const Router = require("koa-router");
const Player = require("../model/playerModel");
const Match = require("../model/matchModel");
const router = new Router();

router.get("/players", async (ctx, next) => {
  const playerData = await Player.find();
  ctx.status = 200;
  ctx.body = playerData;
});

router.get("/match", async (ctx, next) => {
  const matchData = await Match.find();
  ctx.status = 200;
  ctx.body = matchData;
});

module.exports = router;
