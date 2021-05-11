import mongoose from "mongoose";

const shoppingListSchema = mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    title: { type: String, required: true },

    totalPriceEst: { type: String },

    totalPriceAct: { type: String },

    items: [
      {
        id: { type: String },
        name: { type: String },
        priceEstimated: { type: Number },
        priceActual: { type: Number },
        quantity: { type: Number },
        disc: { type: Number },
        unit: { type: String },
        isPurchased: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

export default ShoppingList;
