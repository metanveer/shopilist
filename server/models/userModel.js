import mongoose from "mongoose";
import ShoppingList from "./shoppingListModel.js";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 4, maxLength: 40 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      minLength: 4,
      maxLength: 60,
    },
    password: { type: String, required: true },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamp: true }
);

userSchema.pre("remove", async function (next) {
  const user = this;
  await ShoppingList.deleteMany({ creator: user._id });
  next();
});

const User = model("User", userSchema);

export default User;
