import { Schema } from "mongoose";
import mongoose from "mongoose";

const userinstance = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
  },
});

const userschema = mongoose.model("userSchema", userinstance);
export default userschema;
