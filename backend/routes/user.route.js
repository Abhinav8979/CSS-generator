import { Router } from "express";
import { checkToken, generateToken } from "../service/token.service.js";
import User from "../Model/user.model.js";
import bcrypt from "bcrypt";
import { LikeCart } from "../Model/favProperty.model.js";

const router = Router();

router.route("/signup").post(async (req, res) => {
  const { email, password, phoneNumber } = req.body.data;
  // console.log(username, email, password);
  try {
    if (!email && !password) {
      return res.status(400).json({ error: "Plss enter email or password" });
    }

    const existingUser = await User.find({ email });

    if (existingUser == []) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashpass = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashpass,
      phone_number: phoneNumber,
    });

    const usercart = new LikeCart({
      userId: user,
    });

    await usercart.save();
    await user.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error in SIGNUP" });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body.data;
    // console.log(req.body.data);

    if (!email || !password) {
      return res.status(400).json({ error: "Enter email and password" });
    }

    let user;

    user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    const token = generateToken(user);
    // localStorage.setItem("token", token);
    return res.status(200).json({
      message: "LOGIN Successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.route("/logout").get(checkToken, async (req, res) => {
  res.clearCookie("token");

  return res.status(200).json({
    message: "Logout Successfully",
  });
});

export { router };
