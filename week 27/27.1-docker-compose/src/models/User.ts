import { random } from "gsap";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id : { type: String , },
  username: { type: String, required: true,},
  password: { type: String, required: true, },
});

export const User = mongoose.model("User", userSchema);