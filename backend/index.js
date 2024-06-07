import express from "express";
import { connectToDB } from "./DB/db.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { router } from "./routes/user.route.js";
import { cartrouter } from "./routes/userService.route.js";

await connectToDB();

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", router);
app.use("/api", cartrouter);

dotenv.config({
  path: "../.env",
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
