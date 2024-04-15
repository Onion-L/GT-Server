const Router = require("koa-router");
const authRouter = require("./module/authRouter.js");
const dataRouter = require("./module/dataRouter.js");
const authMiddleware = require("../middleware/authentication.js");
const refreshTokenMiddleware = require("../middleware/refreshToken.js");

const router = new Router();

router.use("/api", authMiddleware);
router.use("/api", refreshTokenMiddleware);
router.use("/api", dataRouter.routes(), dataRouter.allowedMethods());

router.use("/auth", authRouter.routes(), authRouter.allowedMethods());
router.get("/", async (ctx, next) => {
  ctx.response.body = "Hello Koa";
  await next();
});

module.exports = router;
