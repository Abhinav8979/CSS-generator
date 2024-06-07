import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const instance = await mongoose.connect(
      `mongodb+srv://virusfound899:DcrZ0q5WjH1tTvfL@cluster.bzbgnkv.mongodb.net/minipro?retryWrites=true&w=majority&appName=Cluster`
    );
    if (!instance) {
      console.log("INSIDE DB.JS");
    }
    console.log("Mongo connected successfully");
  } catch (error) {
    console.error("ERROR INSIDE MONGO DB CONNECTION", error);
  }
};
export { connectToDB };
