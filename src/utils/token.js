const crypto = require("crypto");

const generateSecureToken = (length = 48) => {
  return crypto.randomBytes(length).toString("hex");
};

module.exports = generateSecureToken;
