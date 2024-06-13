import mongoose from "mongoose";

// Define a schema for the like cart
const likeCartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likedCssProperties: [{ type: String }],
});

// Create a model from the schema
export const LikeCart = mongoose.model("LikeCart", likeCartSchema);
