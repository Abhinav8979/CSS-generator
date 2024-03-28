import jwt from "jsonwebtoken";

const checkToken = async (res, token) => {
  try {
    const header = jwt.verify(token, process.env.JWT_TOKEN);
    if (header == undefined) {
      throw new Error("INSIDE CHECKTOKEN");
    }
  } catch (error) {
    throw new Error("unauthorized token");
  }
};

const generateToken = async (res) => {
  const token = jwt.sign(
    {
      username: res.body.username,
      email: res.body.email,
    },
    "jwt",
    {
      expiresIn: "30d",
    }
  );
  res.cookie("jwt", token);
};

export { generateToken, checkToken };
