import decimalWithCommas from "../../utils/utils";
import { useState, useEffect } from "react";
import {
  Card,
  ItemNum,
  Name,
  Comment,
  SubName,
  SubNameAct,
  Border,
  LeftContainer,
  RightContent,
} from "./ViewCard.elem";

const ViewCard = ({
  id,
  name,
  priceEstimated,
  priceActual,
  quantity,
  isPurchased,
  unit,
  currentDocument,
  hasDiscount,
}) => {
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    setShowDiscount(hasDiscount);
  }, [hasDiscount]);

  function getItemComment() {
    if (priceEstimated > priceActual) {
      return `Saved TK ${decimalWithCommas(
        (priceEstimated - priceActual) * quantity
      )} | Disc ${getDiscountPercent(priceEstimated, priceActual)}%`;
    }

    if (priceEstimated < priceActual) {
      return `Spent more TK ${decimalWithCommas(
        (priceActual - priceEstimated) * quantity
      )}`;
    }
    return "Nothing saved!";
  }

  function getDiscountPercent(priceEstimated, priceActual) {
    return decimalWithCommas(
      (((priceEstimated - priceActual) * 100) / priceEstimated) * 1
    );
  }

  const discount = getDiscountPercent(priceEstimated, priceActual);

  const budgetOrMRP = showDiscount ? "MRP" : "Budget";

  const itemSerialNo =
    currentDocument.items.findIndex((item) => item.id === id) + 1;
  return (
    <Card>
      <LeftContainer>
        <ItemNum>{itemSerialNo}</ItemNum>
      </LeftContainer>

      <RightContent>
        <Name>
          {name} {quantity} {unit}
        </Name>
        <Border />
        <SubName>
          {budgetOrMRP} TK {decimalWithCommas(priceEstimated)}/{unit}
        </SubName>
        <SubName>
          Total {budgetOrMRP} TK {decimalWithCommas(priceEstimated * quantity)}
        </SubName>
        {isPurchased ? (
          <>
            <Border />
            {!showDiscount ? (
              <SubNameAct>
                Purchased at TK {decimalWithCommas(priceActual)} per {unit}
              </SubNameAct>
            ) : null}
            {showDiscount && discount > 0 ? (
              <SubNameAct>
                Discounted total TK {decimalWithCommas(priceActual * quantity)}{" "}
                | Disc: {discount}%
              </SubNameAct>
            ) : (
              <SubNameAct>
                Total actual cost TK {decimalWithCommas(priceActual * quantity)}
              </SubNameAct>
            )}

            {!showDiscount && getItemComment() && (
              <>
                <Border />
                <Comment>{getItemComment()}</Comment>
              </>
            )}
          </>
        ) : (
          <>
            <Border />
            <Comment>Not purchased</Comment>
          </>
        )}
      </RightContent>
    </Card>
  );
};

export default ViewCard;
