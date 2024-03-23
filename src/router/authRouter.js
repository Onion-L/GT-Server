import Router from "koa-router";
import User from "../model/userModel";

const router = new Router();
const validatePassword = (password) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

router.post("/register", async (ctx, next) => {
  const { username, password, email } = ctx.request.body;
  if (!username || !password) {
    ctx.status = 400;
    ctx.body = { message: "Please provide a username and password" };
    return;
  } else if (!validatePassword(password)) {
    ctx.status = 400;
    ctx.body = { message: "The password does not match the rule" };
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
  //add new user
  const newUser = User.create({
    username,
    userPassword: hashedPassword,
    email,
  });
  try {
    //save user
    const savedUser = await newUser.save();
    ctx.status = 201; // Created
    ctx.body = { message: "User created successfully", userId: savedUser.id };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: "Failed to create user", error: error.message };
  }
});

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

export default router;
