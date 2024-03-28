import { Schema } from "mongoose";
import mongoose from "mongoose";

const botHistoryinstance = new Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  questionAsked: [
    {
      type: String,
    },
  ],
  answer: [
    {
      type: String,
    },
  ],
});

export default favcartschema = mongoose.model(
  "botHistorySchema",
  botHistoryinstance
);
