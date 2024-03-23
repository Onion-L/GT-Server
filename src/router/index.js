import Router from "koa-router";
import userRoutes, { allowedMethods } from "./authRouter";

const router = new Router();
router.use("/auth", userRoutes(), allowedMethods());

router.get("/", async (ctx, next) => {
  ctx.response.body = "hello";
  ctx.cookies.set("hello", "Hello", {
    maxAge: 24 * 60 * 60 * 1000,
    domain: "localhost",
  });
});
export default router;
