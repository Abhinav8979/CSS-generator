import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const instance = await mongoose.connect(
      `mongodb+srv://mini:mini@cluster0.qxqcuqo.mongodb.net/miniProject`
    );
    if (!instance) {
      console.log("INSIDE DB.JS");
    }
  } catch (error) {
    console.error("ERROR INSIDE MONGO DB CONNECTION", error);
  }
};
export { connectToDB };
