const Router = require("koa-router");
const router = new Router();

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  console.log(username, password);
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
});

module.exports = router;
