import express from "express";
const router = express.Router();
import {
  addShoppingList,
  getShoppingLists,
  getShoppingListById,
  deleteListById,
  updateListById,
} from "../controllers/shoppingListController.js";
import auth from "../middlewares/auth.js";

router.route("/").post(auth, addShoppingList).get(auth, getShoppingLists);

router
  .route("/:id")
  .get(auth, getShoppingListById)
  .delete(auth, deleteListById)
  .put(auth, updateListById);

export default router;
