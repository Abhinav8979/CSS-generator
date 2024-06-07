import { Schema } from "mongoose";
import mongoose from "mongoose";

const userinstance = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
  },
});

const userschema = mongoose.model("userSchema", userinstance);
export default userschema;
