const jwt = require("jsonwebtoken");

async function authMiddleware(ctx, next) {
  try {
    const token = ctx.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    ctx.state.user = decoded;

    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = {
      message: "Authentication failed, please log in again",
    };
  }
}

module.exports = authMiddleware;
