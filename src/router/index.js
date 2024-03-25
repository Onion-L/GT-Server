const Router = require("koa-router");
const authRouter = require("./authRouter.js");
const dataRouter = require("./dataRouter.js");
const authMiddleware = require("../middleware/authentication.js");
const router = new Router();

router.use(
  "/api",
  authMiddleware,
  dataRouter.routes(),
  dataRouter.allowedMethods()
);
router.use("/auth", authRouter.routes(), authRouter.allowedMethods());
router.get("/", async (ctx, next) => {
  ctx.response.body = "Hello Koa";
  await next();
});

module.exports = router;
