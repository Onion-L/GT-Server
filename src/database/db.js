const mongoose = require("mongoose");

// Connect to database
const DBconnect = () => {
  mongoose.connect(process.env.MONGO_DB);
};

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(`database connection error: ${err}`);
});

db.on("disconnected", () => {
  console.log("database disconnected");
});

db.once("open", () => {
  console.log(`database connected to ${db.name} on ${db.host}`);
});

// Exporting the DBconnect function for use in other files
module.exports = DBconnect;
