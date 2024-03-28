import { Router } from "express";
import { isToken } from "../middleware/jwt.controller.js";
import { generateToken } from "../service/token.service.js";

const router = Router();

router.route("/signup").post((req, res) => {
  const { username, email, password, country, phoneNumber } = req.body;

  if (user.find({ username })) {
    throw new Error("USER ALREADY EXISTS");
  }

  if (!email && !password) {
    throw new Error("PLEASE ENTER EMAIL AND PASSWORD");
  }

  const hashpass = bcrypt.hash(password, 10);

  const user = user.create({
    username,
    email,
    password: hashpass,
    country,
    phoneNumber,
  });
  return res.status(200);
});

router.route("/login").get(isToken, (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !password) {
    throw new Error("PLEASE ENTER EMAil or password");
  }

  if (!username || !email) {
    generateToken(res);
  }
  return res.status(200).json({
    message: "LOGIN Successfully",
  });
});
export { router };
