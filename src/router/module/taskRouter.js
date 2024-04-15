const Router = require("koa-router");
const Task = require("../../model/taskModel");
const router = new Router();

router.get("/tasks", async (ctx, next) => {
  try {
    const tasks = await Task.find();
    ctx.status = 200;
    ctx.body = tasks;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
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
  try {
    const id = ctx.request.query.id;
    console.log(id);
    await Task.deleteOne({ _id: id }).then((_) => {
      ctx.status = 200;
      ctx.body = { message: "Task added successfully" };
    });
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
});

router.put("/tasks", async (ctx, next) => {
  const task = ctx.request.body;
  console.log(task);
  await Task.updateOne(
    { _id: task._id },
    { ...task, updatedAt: Date.now() }
  ).then((response) => {
    ctx.status = 200;
    ctx.body = { message: "Task updated successfully" };
  });
});

module.exports = router;
