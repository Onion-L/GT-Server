const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("../model/userModel");
dotenv.config();

async function main() {
  if (process.env.NODE_ENV !== "development") {
    console.log("This script is only for the development environment.");
    return;
  }
  await mongoose.connect(process.env.MONGO_DB);
  // Drop collections
  await User.collection
    .drop()
    .catch((err) => console.log("User collection not found"));

  console.log("Database initialised");
  await mongoose.disconnect();
}

main();
