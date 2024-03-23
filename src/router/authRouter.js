const Router = require("koa-router");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel.js");

const router = new Router();
const validatePassword = (password) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

router.post("/register", async (ctx, next) => {
  const { username, password, email, role } = ctx.request.body;
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

  const SALT = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, SALT);
  if (!role) {
    role = "user";
  }

  //add new user
  try {
    const newUser = await User.create({
      username,
      userPassword: hashedPassword,
      email,
      role,
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
  } else {
    console.log(username, password);
  }

  const isMatch = await bcrypt.compare(password, user.userPassword);
  if (!isMatch) {
    ctx.status = 401;
    ctx.body = { message: "Password is not right" };
  } else {
    console.log("Hello", user.username);
  }
  const token = jwt.sign({ data: user }, "your_secret_key", {
    expiresIn: "7d",
  });
  ctx.status = 200;
  ctx.body = {
    code: 200,
    message: "Login successful",
    token,
  };

  // ctx.cookies.set("username", user.username, {
  //   maxAge: 7 * 24 * 60 * 60 * 1000,
  //   secure: false,
  //   domain: "localhost",
  //   path: "/login",
  // });
});

module.exports = router;
