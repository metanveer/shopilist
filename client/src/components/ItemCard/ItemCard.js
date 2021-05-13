import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import { ShoppingListContext } from "../../contexts/ShoppingListContext";
import decimalWithCommas from "../../utils/utils";
import { CgMathPercent } from "react-icons/cg";
import {
  Card,
  Input,
  SmallButton,
  PlusMinusButton,
  Text,
  TextSpan,
  Row,
  SmallButtonDisc,
} from "./ItemCard.elem";

const ItemCard = ({
  id,
  name,
  priceEstimated,
  priceActual,
  quantity,
  disc,
  isPurchased,
  unit,
  isExpandAll,
}) => {
  const {
    setItemName,
    setItemQty,
    setItemPriceEst,
    setItemPriceAct,
    setItemUnit,
    setItemDisc,
    setItemIsPurchased,
    removeItem,
  } = useContext(ShoppingListContext);

  const [isExpand, setIsExpand] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);

  useEffect(() => {
    setIsExpand(isExpandAll);
  }, [isExpandAll]);

  function buttonCheckedHandler() {
    if (!isPurchased) {
      setItemIsPurchased(true, id);
    }

    if (isPurchased) {
      setItemIsPurchased(false, id);
      setItemPriceAct("", id);
    }
  }

  useEffect(() => {
    if (disc >= 0) {
      setItemPriceAct(discountedPrice(priceEstimated, disc), id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disc]);

  function discountedPrice(price, disc) {
    const discountedPrice = price * 1 - (price * Number(disc) * 1) / 100;
    return discountedPrice;
  }

  const danger = priceActual * 1 > priceEstimated * 1 ? "danger" : null;

  return (
    <Card danger={danger}>
      <Row danger={danger}>
        <SmallButton
          danger={danger}
          checked={isPurchased}
          onClick={buttonCheckedHandler}
        >
          {isPurchased ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
        </SmallButton>
        <Input
          style={{ margin: "0 10px" }}
          width="250px"
          type="text"
          placeholder="What to buy?"
          value={name}
          maxLength="80"
          onChange={(e) => setItemName(e.target.value, id)}
        />
        <SmallButton danger={danger} onClick={() => removeItem(id)}>
          <AiOutlineDelete />
        </SmallButton>
        <SmallButton danger={danger} onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <BsChevronUp /> : <BsChevronDown />}
        </SmallButton>
      </Row>
      {isExpand ? (
        <>
          <Row danger={danger}>
            <Input
              width="70px"
              type="number"
              min={0}
              max={99999}
              placeholder="Budget"
              value={priceEstimated}
              onChange={(e) => setItemPriceEst(e.target.value, id)}
            />

            <PlusMinusButton
              danger={danger}
              onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}
            >
              <AiOutlineMinus />
            </PlusMinusButton>

            <Input
              width="50px"
              type="number"
              placeholder="Qty"
              min={0}
              max={99}
              value={quantity}
              onChange={(e) => setItemQty(e.target.value, id)}
            />

            <PlusMinusButton
              danger={danger}
              onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}
            >
              <AiOutlinePlus />
            </PlusMinusButton>

            <Input
              width="50px"
              type="text"
              placeholder="Unit"
              value={unit}
              maxLength="12"
              onChange={(e) => setItemUnit(e.target.value, id)}
            />
            {isPurchased && (
              <SmallButtonDisc
                onClick={() => setHasDiscount(!hasDiscount)}
                active={hasDiscount}
              >
                <CgMathPercent />
              </SmallButtonDisc>
            )}
          </Row>
          {isPurchased ? (
            <Row danger={danger}>
              {!hasDiscount && (
                <>
                  <TextSpan>Actual cost </TextSpan>
                  <Input
                    width="100px"
                    name="actualPrice"
                    type="number"
                    min={0}
                    max={99999}
                    placeholder="Act. price"
                    value={priceActual === 0 ? null : priceActual}
                    onChange={(e) => setItemPriceAct(e.target.value, id)}
                  />
                </>
              )}
              {hasDiscount && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TextSpan>Disc.</TextSpan>
                  <PlusMinusButton
                    danger={danger}
                    onClick={() => setItemDisc((disc = disc * 1 - 1), id)}
                  >
                    <AiOutlineMinus />
                  </PlusMinusButton>
                  <Input
                    width="50px"
                    type="number"
                    placeholder="Disc."
                    min={0}
                    max={99}
                    value={disc}
                    onChange={(e) => setItemDisc(e.target.value, id)}
                  />

                  <PlusMinusButton
                    danger={danger}
                    onClick={() => setItemDisc((disc = disc * 1 + 1), id)}
                  >
                    <AiOutlinePlus />
                  </PlusMinusButton>
                </div>
              )}
              {hasDiscount && (
                <TextSpan>
                  Cost/{unit} TK {decimalWithCommas(priceActual)}
                </TextSpan>
              )}
            </Row>
          ) : null}

          {quantity * priceEstimated ? (
            <Row danger={danger}>
              <Text style={{ flex: "0 0 20px" }}>
                <strong>Total</strong>
              </Text>
              <Text>
                {quantity * priceEstimated
                  ? `Budget TK ${decimalWithCommas(quantity * priceEstimated)}`
                  : null}
              </Text>
              {quantity * priceActual ? (
                <Text>{`Cost TK ${decimalWithCommas(
                  quantity * priceActual
                )}`}</Text>
              ) : null}
            </Row>
          ) : null}
        </>
      ) : null}
    </Card>
  );
};

export default ItemCard;
