const Router = require("koa-router");
const router = new Router();
const authRouter = require("./auth.js");

router.use("/api", authRouter.routes(), authRouter.allowedMethods());

router.get("/", async (ctx, next) => {
  ctx.response.body = "hello";
  ctx.cookies.set("hello", "Hello", {
    maxAge: 24 * 60 * 60 * 1000,
    domain: "localhost",
  });
});
module.exports = router;
