import { checkToken } from "../service/token.service.js";

const isToken = (req, res, next) => {
  if (res.cookie.jwt) {
    const jwt = checkToken(cookie.jwt,"jwt");

    if (!jwt) {
      throw new Error("invalid jwt token");
    }
    next();
  }
  throw new Error("WRONG Token");
};
export { isToken };
