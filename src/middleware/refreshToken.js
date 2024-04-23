const jwt = require("jsonwebtoken");

const refreshTokenMiddleware = async (ctx, next) => {
  const token = ctx.headers.authorization.split(" ")[1];
  try {
    if (tokenNeedsRefresh(token)) {
      const decoded = jwt.decode(token);
      const newToken = await refreshToken(decoded);
      ctx.set("Authorization", `Bearer ${newToken}`);
      ctx.state.newToken = newToken;
      console.log(decoded);
    }
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: "Token refresh failed: " + error.message };
    return;
  }
};

function tokenNeedsRefresh(token) {
  const now = Date.now() / 1000;
  const decoded = jwt.decode(token);
  return decoded.exp < now + 300;
}

async function refreshToken(decoded) {
  const newToken = jwt.sign({ data: decoded.data }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return newToken;
}
module.exports = refreshTokenMiddleware;
