const Router = require("koa-router");
const Player = require("../../model/playerModel");
const router = new Router();

router.get("/players", async (ctx, next) => {
  try {
    const playerData = await Player.find().sort({ id: 1 }).lean();
    const totalSalary = playerData.reduce((acc, player) => {
      return acc + player.salary_num;
    }, 0);

    for (let player of playerData) {
      player.salary_pre = Math.round((player.salary_num / totalSalary) * 500);
    }
    ctx.status = 200;
    ctx.body = playerData;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
});

router.put("/players", async (ctx, next) => {
  try {
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
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
});

module.exports = router;
