import asyncHandler from "express-async-handler";
import ShoppingList from "../models/shoppingListModel.js";

const addShoppingList = asyncHandler(async (req, res) => {
  const newList = req.body;
  const userId = req.user._id;

  const listWithSameName = await ShoppingList.findOne({
    title: newList.title,
    creator: userId,
  });

  if (listWithSameName) {
    throw new Error("List exists!");
  }

  if (newList.items && newList.items.length === 0) {
    res.sendStatus(400);
    throw new Error("No items in shopping list");
    return;
  } else {
    const list = new ShoppingList(newList);

    await list.save();
    res.status(201).json({ message: "New list saved :)" });
  }
});

const updateListById = asyncHandler(async (req, res) => {
  const update = req.body;
  const listId = req.params.id;

  if (update.items && update.items.length === 0) {
    res.sendStatus(400);
    throw new Error("No items in shopping list");
    return;
  } else {
    await ShoppingList.findByIdAndUpdate(listId, update);

    res.status(201).json({ message: "List updated" });
  }
});

const getShoppingLists = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const lists = await ShoppingList.find({ creator: userId });
  if (lists.length === 0) throw new Error("You have no shopping list!");
  res.json(lists);
});

const getShoppingListById = asyncHandler(async (req, res) => {
  const listId = req.params.id;
  const list = await ShoppingList.findById(listId);
  if (list !== null) {
    res.json(list);
  } else {
    // res.json({ message: "No list found!" });
    res.status(404);
    throw new Error("List deleted or not found");
  }
});

const deleteListById = asyncHandler(async (req, res) => {
  const listId = req.params.id;
  const listFound = await ShoppingList.findById(listId);
  if (!listFound) throw new Error("List already deleted or not found!");
  await listFound.delete();
  res.json({ message: "List deleted!" });
});

export {
  addShoppingList,
  getShoppingLists,
  getShoppingListById,
  deleteListById,
  updateListById,
};
