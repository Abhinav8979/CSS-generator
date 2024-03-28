import { Schema } from "mongoose";
import mongoose from "mongoose";

const favCartinstance = new Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  fav_property: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "favPropertySchema",
    },
  ],
});

export default favcartschema = mongoose.model("favCartSchema", favCartinstance);
