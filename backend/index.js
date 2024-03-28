import express from "express";
import { connectToDB } from "./DB/db.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { router } from "./routes/user.route.js";
import { useractionRouter } from "./routes/useractionsroute.js";

await connectToDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", router);
app.use("/api/user", useractionRouter);

dotenv.config({
  path: "../.env",
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
