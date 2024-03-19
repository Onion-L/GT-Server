import Router from "koa-router";
import { hash } from "bcrypt";

const router = new Router();
const saltRounds = 10;

router.post("/register", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const hashedPassword = await hash(password, saltRounds);
});

router.post("/login", async (ctx, next) => {
  try {
    const { username, password } = ctx.request.body;
    const hashedPassword = await hash(password, saltRounds);
    /*    
    ctx.cookies.set("username", value.username, {
      maxAge: 20 * 60 * 60 * 1000,
      secure: false,
      sameSite: "None",
      domain: "localhost",
      path: "/login",
    });
*/
    ctx.body = "cookie is set";
  } catch (error) {}
});

export default router;
