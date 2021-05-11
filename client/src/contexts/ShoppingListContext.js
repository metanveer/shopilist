import React, { createContext, useReducer } from "react";
import { ShoppingListReducer, getItemsCounts } from "./ShoppingListReducer";

export const ShoppingListContext = createContext();

const listItems = localStorage.getItem("shoppingList")
  ? JSON.parse(localStorage.getItem("shoppingList"))
  : [];
const title = localStorage.getItem("listTitle")
  ? JSON.parse(localStorage.getItem("listTitle"))
  : "";

const initialState = {
  listTitle: title,
  shoppingListItems: listItems,
  ...getItemsCounts(listItems),
};

const ShoppingListContextProvider = ({ children }) => {
  const [listItems, dispatch] = useReducer(ShoppingListReducer, initialState);

  const setItemsFromApi = (items) => {
    dispatch({
      type: "SET_ITEMS_FROM_API",
      payload: items,
    });
  };
  const setItemPriceEst = (updatedPriceEst, id) => {
    dispatch({
      type: "CHANGE_PRICE_EST",
      payload: { updatedPriceEst, id },
    });
  };

  const setItemPriceAct = (updatedPriceAct, id) => {
    dispatch({
      type: "CHANGE_PRICE_ACT",
      payload: { updatedPriceAct, id },
    });
  };

  const setItemQty = (changedQty, id) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: { changedQty, id },
    });
  };

  const setItemName = (changedName, id) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: { changedName, id },
    });
  };

  const setItemUnit = (changedUnit, id) => {
    dispatch({
      type: "CHANGE_UNIT",
      payload: { changedUnit, id },
    });
  };
  const setItemDisc = (changedDisc, id) => {
    dispatch({
      type: "CHANGE_DISC",
      payload: { changedDisc, id },
    });
  };

  const setItemIsPurchased = (value, id) => {
    dispatch({
      type: "CHANGE_IS_PURCHASED",
      payload: { value, id },
    });
  };

  const addItemToList = (item) => {
    dispatch({
      type: "ADD_ITEM_TO_LIST",
      payload: item,
    });
  };

  const changeListTitle = (title) => {
    dispatch({
      type: "CHANGE_LIST_TITLE",
      payload: title,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearShoppingList = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const contextValues = {
    removeItem,
    setItemsFromApi,
    addItemToList,
    setItemName,
    setItemPriceEst,
    setItemPriceAct,
    setItemQty,
    setItemDisc,
    setItemUnit,
    setItemIsPurchased,
    changeListTitle,
    clearShoppingList,
    ...listItems,
  };

  return (
    <ShoppingListContext.Provider value={contextValues}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
