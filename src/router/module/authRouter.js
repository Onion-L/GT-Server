const Router = require("koa-router");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../model/userModel.js");
const { validateEmail, validatePassword } = require("../../utils/valid.js");

const router = new Router();

router.post("/register", async (ctx, next) => {
  const { username, password, email } = ctx.request.body;
  console.log(ctx.request.body);
  if (!username || !password) {
    ctx.status = 400;
    ctx.body = { message: "Please provide a username and password" };
    return;
  } else if (!validatePassword(password)) {
    ctx.status = 400;
    ctx.body = { message: "The password does not match the rule" };
    return;
  } else if (!validateEmail(email)) {
    ctx.status = 400;
    ctx.body = { message: "The email was not formatted correctly" };
    return;
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    ctx.status = 400;
    ctx.body = { message: "The username is already taken" };
    return;
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    ctx.status = 400;
    ctx.body = { message: "The email address is already used" };
    return;
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
  if (!username || !password) {
    ctx.status = 400;
    ctx.body = { message: "Username or password cannot be empty" };
    return;
  }
  const user = await User.findOne({ username });
  if (!user) {
    ctx.status = 404;
    ctx.body = { message: "User Not Found" };
    return;
  }
  const isMatch = await bcrypt.compare(password, user.userPassword);
  if (!isMatch) {
    ctx.status = 401;
    ctx.body = { message: "Password is not right" };
    return;
  }
  const token = jwt.sign({ data: user }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  ctx.status = 200;
  ctx.body = {
    code: 200,
    message: "Login successful",
    token,
    username,
  };
});

module.exports = router;
