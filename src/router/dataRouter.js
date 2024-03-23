const Router = require("koa-router");
const Player = require("../model/playerModel");
const router = new Router();

router.get("/players", async (ctx, next) => {
  const playerData = await Player.find();
  ctx.status = 200;
  ctx.body = playerData;
});

module.exports = router;
