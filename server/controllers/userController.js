import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ShoppingList from "../models/shoppingListModel.js";

async function createHash(password) {
  return await bcrypt.hash(password, 10);
}
async function comparePassword(password, dbPassword) {
  return await bcrypt.compare(password, dbPassword);
}

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

const addUser = asyncHandler(async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) throw new Error("User already exists! Please login.");

  const hashedPassword = await createHash(req.body.password);

  const createdUser = await new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  const token = generateToken(createdUser._id);

  createdUser.tokens.push({ token });

  await createdUser.save();

  const { _id, name, email, tokens } = createdUser;

  res.json({ _id, name, email, tokens });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (!userExists)
    throw new Error("No account with this email! Please sign up.");
  const passwordMatched = await comparePassword(password, userExists.password);
  if (passwordMatched) {
    const token = generateToken(userExists._id);
    userExists.tokens.push({ token });
    await userExists.save();
    const { _id, name, email, tokens } = userExists;
    res.json({ _id, name, email, tokens });
  }
  if (!passwordMatched) throw new Error("Unable to login!");
});

const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const userFound = await User.findById(userId);
  if (!userFound) throw new Error("Not authorised!");
  userFound.tokens = userFound.tokens.filter(
    (token) => token.token !== req.token
  );
  await userFound.save();
  res.json({ message: "Logged out successfully" });
});

const updateUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const userId = req.user._id;

  const userFound = await User.findById(userId);
  if (!userFound) throw new Error("User not found! or Not authorised!");
  userFound.name = name || userFound.name;
  userFound.email = email || userFound.email;
  if (req.body.password) {
    userFound.password = await createHash(req.body.password);
  }

  const updatedUser = await userFound.save();
  res.json(updatedUser);
});

const getUsers = asyncHandler(async (req, res) => {
  const foundUsers = await User.find({});
  res.json(foundUsers);
});
const getUserProfile = asyncHandler(async (req, res) => {
  const userFound = await User.findById(req.user._id);
  if (!userFound) throw new Error("No user found with this ID");
  res.json(userFound);
});

const getUserbyId = asyncHandler(async (req, res) => {
  const userFound = await User.findById(req.params.id);
  if (!userFound) throw new Error("No user found with this ID");
  res.json(userFound);
});

const deleteUser = asyncHandler(async (req, res) => {
  const userFound = await User.findById(req.user._id);
  if (!userFound) throw new Error("User not found!");
  await userFound.delete();
  res.json({ message: "User deleted!" });
});

const deleteMe = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const userFound = await User.findById(userId);
  if (!userFound) throw new Error("Not found!");
  await userFound.delete();
  res.json({ message: "Deleted!" });
});

export {
  addUser,
  getUsers,
  updateUser,
  getUserbyId,
  deleteUser,
  deleteMe,
  loginUser,
  logoutUser,
  getUserProfile,
};
