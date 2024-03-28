import { Schema } from "mongoose";
import mongoose from "mongoose";

const favPropertyinstance = new Schema({
  cssID: {
    type: String,
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  favCart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "favCartSchema",
    },
  ],
});

export default favPropertyschema = mongoose.model(
  "favPropertySchema",
  favPropertyinstance
);
