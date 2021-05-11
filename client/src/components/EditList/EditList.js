import React, { useContext, useState } from "react";
import decimalWithCommas from "../../utils/utils";
import {
  Input,
  Card,
  SummaryCard,
  Summary,
  SummaryRow,
  SmallButton,
  SmallButtonCross,
} from "./EditList.elem";
import ItemCard from "../ItemCard/ItemCard";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { ShoppingListContext } from "../../contexts/ShoppingListContext";
import { useHistory } from "react-router";
import { useDocumentDispatch } from "../../contexts/DocumentContext";
import { useAuthState } from "../../contexts/AuthContext";

const EditList = ({
  items,
  itemsPriceEst,
  itemsPriceAct,
  listTitle,
  handleNoTitleMsg,
}) => {
  const { clearShoppingList, changeListTitle } =
    useContext(ShoppingListContext);
  const history = useHistory();
  const [isExpandAll, setIsExpandAll] = useState(false);
  const dispatch = useDocumentDispatch();
  const { user, token } = useAuthState();

  function handleClearShoppingList() {
    clearShoppingList();
    changeListTitle("");
    handleNoTitleMsg();
    dispatch({ type: "DOCUMENT_RESET" });
    history.push("/");
  }

  const isLoggedIn = user && token ? "yes" : undefined;
  const itemsCount = items.length;
  return (
    <>
      {itemsCount > 0 && (
        <>
          <SummaryCard>
            <Summary isLoggedIn={isLoggedIn}>
              <SummaryRow>
                <div>Items total:</div>
                <div>
                  {itemsCount} {itemsCount > 1 ? "Items" : "item"}
                </div>
              </SummaryRow>
              <SummaryRow>
                <div>Est. TK {decimalWithCommas(itemsPriceEst)}</div>
                <div>Act. TK {decimalWithCommas(itemsPriceAct)}</div>
              </SummaryRow>
            </Summary>
          </SummaryCard>
          <Card>
            <SmallButton onClick={() => setIsExpandAll(!isExpandAll)}>
              {isExpandAll ? <BiChevronsUp /> : <BiChevronsDown />}
            </SmallButton>
            <SmallButtonCross onClick={handleClearShoppingList}>
              <CgClose />
            </SmallButtonCross>
            <Input
              width="200px"
              type="text"
              placeholder="List Title"
              value={listTitle}
              onChange={(e) => changeListTitle(e.target.value)}
            />
            {items &&
              items.map((item) => (
                <ItemCard isExpandAll={isExpandAll} key={item.id} {...item} />
              ))}
          </Card>
        </>
      )}
    </>
  );
};

export default EditList;
