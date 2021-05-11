import express from "express";
const router = express.Router();
import {
  addUser,
  getUsers,
  updateUser,
  getUserbyId,
  deleteUser,
  deleteMe,
  loginUser,
  getUserProfile,
  logoutUser,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

router.route("/").get(auth, getUsers);
router
  .route("/me")
  .get(auth, getUserProfile)
  .put(auth, updateUser)
  .delete(auth, deleteMe);
router.post("/register", addUser);
router.post("/login", loginUser);
router.post("/logout", auth, logoutUser);
router.route("/:id").delete(auth, deleteUser);

export default router;
