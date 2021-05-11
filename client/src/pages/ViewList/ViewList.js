import React, { useEffect } from "react";
import ViewCard from "../../components/ViewCard/ViewCard";
import {
  Card,
  Name,
  Comment,
  ViewListSummary,
  SubName,
  Border,
  SmallButton,
  RoundLinkSmall,
  ItemStats,
  SummaryHeads,
  SummaryValues,
  HeadValueWrapper,
} from "./ViewList.elem";
import { useParams } from "react-router";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Message from "../../components/Message/Message";
import decimalWithCommas from "../../utils/utils";
import { useAuthState } from "../../contexts/AuthContext";
import {
  getDocument,
  useDocumentDispatch,
  useDocumentState,
} from "../../contexts/DocumentContext";
import { deleteDocument } from "../../contexts/DocumentContext";

const ViewList = () => {
  const dispatch = useDocumentDispatch();
  const { loading, message, errorMessage, currentDocument } =
    useDocumentState();
  const { token } = useAuthState();

  const { id } = useParams();

  useEffect(() => {
    async function getListById() {
      const payload = {
        id,
        token,
      };
      await getDocument(dispatch, payload);
    }
    getListById();
    // eslint-disable-next-line
  }, []);

  async function handleDeleteList() {
    const payload = {
      id,
      token,
    };
    await deleteDocument(dispatch, payload);
  }

  function getItemsPurchasedCount() {
    const purchasedItemsCount = currentDocument.items.filter(
      (item) => item.isPurchased === true
    ).length;
    if (purchasedItemsCount > 1) {
      return `${purchasedItemsCount} items`;
    }
    if (purchasedItemsCount === 1) {
      return "1 item";
    }
    return "0";
  }

  function getItemsCount() {
    if (currentDocument.items.length > 1) {
      return `${currentDocument.items.length} items`;
    }

    return "1 item";
  }

  function getShoppingListComment() {
    const saved = currentDocument.totalPriceEst - currentDocument.totalPriceAct;
    if (saved > 0) {
      return `Saved TK ${decimalWithCommas(saved)}`;
    }
    if (saved < 0) {
      return `Over spent TK ${decimalWithCommas(saved * -1)} from estimation`;
    }
    if (saved === 0) {
      return `Nothing saved nor over spent!`;
    }
  }

  function getDate() {
    return new Date(currentDocument.createdAt).toDateString();
  }

  function getTime() {
    return new Date(currentDocument.createdAt)
      .toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/^0(?:0:0?)?/, "");
  }

  return (
    <>
      {loading ? (
        <Message text="Loading..." />
      ) : errorMessage ? (
        <Message text={errorMessage} />
      ) : message ? (
        <Message text={message} />
      ) : (
        currentDocument && (
          <>
            <Card style={{ display: "flex", justifyContent: "space-between" }}>
              <RoundLinkSmall to={`/edit/${id}`}>
                <AiOutlineEdit />
              </RoundLinkSmall>
              <SmallButton onClick={handleDeleteList}>
                <AiOutlineDelete />
              </SmallButton>
            </Card>
            <Card>
              <Name>{currentDocument.title}</Name>
              <SubName>{`${getDate()} at ${getTime()}`}</SubName>

              {currentDocument.items &&
                currentDocument.items.map((item) => (
                  <ViewCard
                    key={item.id}
                    {...item}
                    currentDocument={currentDocument}
                  />
                ))}
              <ViewListSummary>
                <HeadValueWrapper>
                  <SummaryHeads>
                    <Comment>Total : {getItemsCount()}</Comment>
                    <p>Est. price ({getItemsCount()})</p>
                    {getItemsPurchasedCount() === "0" ? null : (
                      <p>Act. cost ({getItemsPurchasedCount()})</p>
                    )}
                  </SummaryHeads>
                  <SummaryValues>
                    <Comment>
                      {getItemsPurchasedCount() === "0"
                        ? "No item purchased!"
                        : `Purchased: ${getItemsPurchasedCount()}`}
                    </Comment>
                    <p>TK {decimalWithCommas(currentDocument.totalPriceEst)}</p>
                    {getItemsPurchasedCount() === "0" ? null : (
                      <p>
                        TK {decimalWithCommas(currentDocument.totalPriceAct)}
                      </p>
                    )}
                  </SummaryValues>
                </HeadValueWrapper>

                {getItemsPurchasedCount() === "0" ? null : (
                  <>
                    <Border length="75%" />
                    <ItemStats>
                      <Comment>{getShoppingListComment()}</Comment>
                    </ItemStats>
                  </>
                )}
              </ViewListSummary>
            </Card>
          </>
        )
      )}
    </>
  );
};

export default ViewList;
