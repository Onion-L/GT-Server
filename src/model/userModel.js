import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
  },
  profile: {
    fullName: String,
    address: String,
    phone: String,
  },
  status: {
    type: String,
    default: "active",
  },
  avatar: String,
});

const User = model("User", userSchema);

export default User;
