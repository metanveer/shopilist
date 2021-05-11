import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const auth = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findOne({
        _id: decoded.id,
        "tokens.token": token,
      });

      if (!user) throw new Error("User or credentials not found or invalid");

      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Please sign in to continue...");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Please sign in to access");
  }
});

export default auth;
