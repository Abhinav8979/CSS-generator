import jwt from "jsonwebtoken";

const checkToken = async (req, res, next) => {
  try {
    const authheader = req.headers["cookie"];
    console.log(authheader);

    if (!authheader) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const cookie = authheader.split("=")[1];

    jwt.verify(cookie, "jwt", (err, decoded) => {
      if (err) {
        console.log(err);
        return res
          .status(401)
          .json({ message: "This session has expired. Please login" });
      }

      const { username, email } = decoded;
      req.user = [username, email];
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const generateToken = async (user) => {
  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
    },
    "jwt",
    {
      expiresIn: "30h",
    }
  );
  return token;
};

export { generateToken, checkToken };
