const saveListtoLS = (shoppingListItems) => {
  localStorage.setItem(
    "shoppingList",
    JSON.stringify(shoppingListItems.length > 0 ? shoppingListItems : [])
  );
};

export const getItemsCounts = (shoppingListItems) => {
  saveListtoLS(shoppingListItems);

  let allItemsPriceEst = shoppingListItems.reduce(
    (total, currItem) => total + currItem.priceEstimated * currItem.quantity,
    0
  );
  let allItemsPriceAct = shoppingListItems.reduce(
    (total, currItem) => total + currItem.priceActual * currItem.quantity,
    0
  );
  return { allItemsPriceEst, allItemsPriceAct };
};

export const ShoppingListReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS_FROM_API":
      state.shoppingListItems = action.payload;

      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Items added from API",
      };

    case "ADD_ITEM_TO_LIST":
      if (
        !state.shoppingListItems.find(
          (item) => item.name === action.payload.name
        )
      ) {
        state.shoppingListItems.push({
          ...action.payload,
        });

        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: null,
        };
      } else {
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Please enter an item name!" },
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        ...getItemsCounts(
          state.shoppingListItems.filter((item) => item.id !== action.payload)
        ),
        shoppingListItems: [
          ...state.shoppingListItems.filter(
            (item) => item.id !== action.payload
          ),
        ],
        message: { notify: "Item removed" },
      };

    case "CHANGE_PRICE_EST":
      const indexPriceEst = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (
        action.payload.updatedPriceEst >= 0 &&
        action.payload.updatedPriceEst <= 9999
      ) {
        state.shoppingListItems[indexPriceEst].priceEstimated =
          action.payload.updatedPriceEst;
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: "Estimated price added!",
        };
      }
      if (action.payload.updatedPriceEst > 9999) {
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Not more than 4 digits!" },
        };
      }

      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: { notify: "Price must be non-negative!" },
      };

    case "CHANGE_PRICE_ACT":
      const indexPriceAct = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (
        action.payload.updatedPriceAct >= 0 &&
        action.payload.updatedPriceAct <= 9999
      ) {
        state.shoppingListItems[indexPriceAct].priceActual =
          action.payload.updatedPriceAct;
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: "Actual Price Updated",
        };
      }

      if (action.payload.updatedPriceAct > 9999) {
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Not more than 4 digits!" },
        };
      }

      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: { notify: "Price must be non-negative!" },
      };

    case "CHANGE_QTY":
      const indexQty = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.changedQty >= 0 && action.payload.changedQty <= 99) {
        state.shoppingListItems[indexQty].quantity = action.payload.changedQty;
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: "Qty updated",
        };
      }
      if (action.payload.changedQty >= 99) {
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Maximum allowed qauntity reached!" },
        };
      }
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: { notify: "You know, this doesn't make sense!" },
      };
    case "CHANGE_DISC":
      const indexDisc = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.changedDisc >= 0 && action.payload.changedDisc <= 99) {
        state.shoppingListItems[indexDisc].disc = action.payload.changedDisc;
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: "Discount updated",
        };
      }
      if (action.payload.changedQty >= 99) {
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Doesn't make sense!" },
        };
      }
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: { notify: "You know, this doesn't make sense!" },
      };

    case "CHANGE_NAME":
      const indexName = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.shoppingListItems[indexName].name = action.payload.changedName;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Name saved!",
      };

    case "CHANGE_LIST_TITLE":
      const changedTitle = action.payload;
      localStorage.setItem("listTitle", JSON.stringify(changedTitle));
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        listTitle: changedTitle,
        message: "Title changed",
      };

    case "CHANGE_UNIT":
      const indexUnit = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.shoppingListItems[indexUnit].unit = action.payload.changedUnit;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: "Unit saved!",
      };

    case "CHANGE_IS_PURCHASED":
      const indexIsPurch = state.shoppingListItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (action.payload.value && state.shoppingListItems[indexIsPurch].name) {
        state.shoppingListItems[indexIsPurch].isPurchased =
          action.payload.value;
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Marked as purchased" },
        };
      }

      if (action.payload.value && !state.shoppingListItems[indexIsPurch].name) {
        state.shoppingListItems[indexIsPurch].isPurchased =
          !action.payload.value;
        return {
          ...state,
          ...getItemsCounts(state.shoppingListItems),
          shoppingListItems: [...state.shoppingListItems],
          message: { notify: "Please add a name first!" },
        };
      }
      state.shoppingListItems[indexIsPurch].isPurchased = action.payload.value;
      return {
        ...state,
        ...getItemsCounts(state.shoppingListItems),
        shoppingListItems: [...state.shoppingListItems],
        message: { notify: "Marked as NOT purchased!" },
      };

    case "CLEAR":
      return {
        shoppingListItems: [],
        ...getItemsCounts([]),
        listTitle: "",
        message: "List cleared!",
      };
    default:
      return state;
  }
};
