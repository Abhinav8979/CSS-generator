import { Router } from "express";
// import { checkToken } from "../service/token.service.js";
import userschema from "../Model/user.model.js";
import { LikeCart } from "../Model/favProperty.model.js";

const cartrouter = Router();

cartrouter.route("/user/getcart").post(async (req, res) => {
  // console.log(req.body);
  const { email } = req.body.data;

  try {
    const userId = await userschema.findOne({ email });
    // console.log("user  id", await userschema.find({ email: email }));

    const likeCart = await LikeCart.findOne({ userId });

    // console.log(likeCart);

    if (!likeCart) {
      return res
        .status(200)
        .json({ message: "NO FAVOURITE CSS PROPERTY", cartArray: false });
    } else {
      return res
        .status(200)
        .json({ message: likeCart.likedCssProperties, cartArray: true });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
});

cartrouter.route("/user/removecart").delete(async (req, res) => {
  // console.log(req.body);
  const { email, cssName } = req.body;

  try {
    const userId = await userschema.findOne({ email });
    const likeCart = await LikeCart.findOne({ userId });
    // console.log(likeCart);

    const propertyIndex = likeCart.likedCssProperties.findIndex(
      (prop) => prop.propertyName === cssName
    );

    likeCart.likedCssProperties.splice(propertyIndex, 1);

    let cartArray;
    if (likeCart.likedCssProperties.length == 0) {
      cartArray = false;
    } else {
      cartArray = true;
    }

    await likeCart.save();
    return res
      .status(200)
      .json({ message: "Success removing", cartArray: cartArray });
  } catch (err) {
    console.error("Error removing CSS Property:", err);
  }
});

cartrouter.route("/user/addcart").put(async (req, res) => {
  // console.log(req.body);
  const { email, cssName } = req.body.data;

  try {
    const userId = await userschema.findOne({ email });
    const like = await LikeCart.findOne({ userId });

    like.likedCssProperties.push(cssName);
    // console.log(like.likedCssProperties);
    like.save();

    return res.status(200).json({ message: "added", cartArray: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
});

export { cartrouter };
