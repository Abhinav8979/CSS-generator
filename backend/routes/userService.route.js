import { Router } from "express";
import { checkToken } from "../service/token.service.js";
import userschema from "../Model/user.model.js";
import { LikeCart } from "../Model/favProperty.model.js";

const cartrouter = Router();

cartrouter.route("/user/getcart").get(async (req, res) => {
  const { username } = req.body;

  try {
    const userId = await userschema.findOne({ username });

    const likeCart = await LikeCart.findOne({ userId });

    if (!likeCart[0]) {
      return res.status(200).json({ message: "NO FAVOURITE CSS PROPERTY" });
    } else {
      return res.status(200).json({ message: likeCart.likedCssProperties });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
});

cartrouter.route("/user/remove").delete(checkToken, async (req, res) => {
  const { username, cssName } = req.query;

  try {
    const userId = await userschema.findOne({ username });
    const likeCart = await LikeCart.findOne({ userId });

    const propertyIndex = likeCart.likedCssProperties.findIndex(
      (prop) => prop.propertyName === cssName
    );

    likeCart.likedCssProperties.splice(propertyIndex, 1);

    await likeCart.save();
    return res.status(200).json({ message: "Success removing" });
  } catch (err) {
    console.error("Error removing CSS Property:", err);
  }
});

cartrouter.route("/user/add").put(async (req, res) => {
  const { username, cssName } = req.body;

  try {
    const userId = await userschema.findOne({ username });
    const likeCart = await likeCart.findOne({ userId });

    likeCart.likedCssProperties.push(cssName);
    likeCart.save();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
});

export { cartrouter };
