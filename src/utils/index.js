const validatePassword = (password) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const registerValid = (username, password, email) => {
  if (!username || !password) {
    ctx.status = 400;
    ctx.body = { message: "Please provide a username and password" };
  } else if (!validatePassword(password)) {
    ctx.status = 400;
    ctx.body = { message: "The password does not match the rule" };
  } else if (!validateEmail(email)) {
    ctx.status = 400;
    ctx.body = { message: "The email was not formatted correctly" };
  }
};

module.exports = registerValid;
