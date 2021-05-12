import { useContext, useState, useEffect } from "react";
import { ShoppingListContext } from "../../contexts/ShoppingListContext";
import { nanoid } from "nanoid";
import { CenterButton, RectBtn, RectBtnLink, Text } from "../../GlobalStyles";
import { useAuthState } from "../../contexts/AuthContext";
import {
  saveDocument,
  updateDocument,
  useDocumentDispatch,
  useDocumentState,
} from "../../contexts/DocumentContext";
import EditList from "../../components/EditList/EditList";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import Message from "../../components/Message/Message";

function Home() {
  const history = useHistory();
  const {
    shoppingListItems,
    allItemsPriceEst,
    allItemsPriceAct,
    addItemToList,
    setItemsFromApi,
    clearShoppingList,
    listTitle,
    changeListTitle,
    message: listContextMsg,
  } = useContext(ShoppingListContext);

  const dispatch = useDocumentDispatch();
  const { token, user } = useAuthState();
  const { loading, message, errorMessage, currentDocument } =
    useDocumentState();

  const { id } = useParams();

  const [notify, setNotify] = useState("");
  const [isDocUpdated, setIsDocUpdated] = useState(false);

  useEffect(() => {
    dispatch({ type: "DOCUMENT_RESET_ERROR" });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentDocument) {
      setItemsFromApi(currentDocument.items);
      changeListTitle(currentDocument.title);
    }
    // eslint-disable-next-line
  }, [currentDocument]);

  function handleAddItemToList() {
    dispatch({ type: "DOCUMENT_RESET" });
    const item = {
      id: nanoid(),
      name: "",
      priceEstimated: "",
      priceActual: "",
      quantity: "",
      disc: "",
      unit: "PC",
      isPurchased: false,
    };
    addItemToList(item);
  }

  function handleNoTitleMsg() {
    setNotify("");
  }

  const handleSaveList = async () => {
    if (listTitle === "") {
      setNotify("Please enter List Title!");
      return;
    }

    if (!token) {
      history.push("/login");
    }

    setNotify("");

    const document = {
      creator: user._id,
      title: listTitle,
      items: shoppingListItems,
      totalPriceEst: allItemsPriceEst,
      totalPriceAct: allItemsPriceAct,
    };
    const payload = {
      document,
      token,
    };
    const savedDoc = await saveDocument(dispatch, payload);
    if (savedDoc) {
      clearShoppingList();
      changeListTitle("");
    }
  };

  const handleUpdateList = async () => {
    setIsDocUpdated(false);
    if (listTitle === "") {
      setNotify("Please enter List Title!");
      return;
    }
    setNotify("");
    const listForUpdate = {
      creator: user._id,
      title: listTitle,
      items: shoppingListItems,
      totalPriceEst: allItemsPriceEst,
      totalPriceAct: allItemsPriceAct,
    };
    const payload = {
      id,
      token,
      document: listForUpdate,
    };
    const updatedDoc = await updateDocument(dispatch, payload);
    if (updatedDoc) {
      clearShoppingList();
      changeListTitle("");
      setIsDocUpdated(true);
    }
  };

  const itemsCount = shoppingListItems.length;
  return (
    <>
      {loading ? (
        <Message text="Please wait..." />
      ) : errorMessage ? (
        <Message error text={errorMessage} />
      ) : message ? (
        <Message text={message} />
      ) : (
        <EditList
          items={shoppingListItems}
          itemsPriceEst={allItemsPriceEst}
          itemsPriceAct={allItemsPriceAct}
          listTitle={listTitle}
          handleNoTitleMsg={handleNoTitleMsg}
        />
      )}

      {listContextMsg ? <Text>{listContextMsg.notify}</Text> : null}
      {listTitle === "" ? <Text>{notify}</Text> : null}
      <CenterButton>
        {isDocUpdated ? null : (
          <RectBtn onClick={handleAddItemToList}>
            {itemsCount === 0
              ? "Create List"
              : errorMessage
              ? "Go back"
              : isDocUpdated
              ? null
              : "+ Add item"}
          </RectBtn>
        )}

        {itemsCount > 0 && id && (
          <RectBtn onClick={handleUpdateList}>Update</RectBtn>
        )}
        {message ||
        errorMessage ||
        loading ||
        listTitle === "" ||
        isDocUpdated ? null : itemsCount > 0 && !id ? (
          <RectBtn onClick={handleSaveList}>Save</RectBtn>
        ) : null}

        {isDocUpdated && (
          <RectBtnLink to="/saved-lists">Go to Saved Lists</RectBtnLink>
        )}
      </CenterButton>
    </>
  );
}

export default Home;
