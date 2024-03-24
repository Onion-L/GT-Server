const Router = require("koa-router");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel.js");
const registerValid = require("../utils/index.js");

const router = new Router();

router.post("/register", async (ctx, next) => {
  const { username, password, email } = ctx.request.body;
  registerValid(username, password, email);

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    ctx.status = 400;
    ctx.body = { message: "The username is already taken" };
  }

  const SALT = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, SALT);
  //add new user
  try {
    const newUser = await User.create({
      username,
      userPassword: hashedPassword,
      email,
    });
    ctx.status = 201; // Created
    ctx.body = {
      message: "User created successfully",
      userId: newUser.id,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: "Failed to create user", error: error.message };
  }
});

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const user = await User.findOne({ username });
  if (!user) {
    ctx.status = 404;
    ctx.body = { message: "User Not Found" };
  }

  const isMatch = await bcrypt.compare(password, user.userPassword);
  if (!isMatch) {
    ctx.status = 401;
    ctx.body = { message: "Password is not right" };
  }
  const token = jwt.sign({ data: user }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  ctx.status = 200;
  ctx.body = {
    code: 200,
    message: "Login successful",
    token,
  };
  //{TODO}
  /*ctx.cookies.set("username", user.username, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: false,
    domain: "localhost",
    path: "/login",
  });
  */
});

router.put("/role_update", async (ctx, next) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      ctx.status = 401;
      ctx.body = { message: "401 Unauthorized" };
    }

    const { username, updateData } = ctx.request.body;

    const query = { username: username };
    const update = { $set: { role: role } };
    User.updateOne(query);
  } catch (error) {}
});

module.exports = router;
