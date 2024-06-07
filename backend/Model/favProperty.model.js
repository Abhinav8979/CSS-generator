import mongoose from "mongoose";

const cssPropertySchema = new mongoose.Schema({
  propertyName: { type: String },
});

// Define a schema for the like cart
const likeCartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likedCssProperties: [cssPropertySchema],
});

// Create a model from the schema
export const LikeCart = mongoose.model("LikeCart", likeCartSchema);
