import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import { ShoppingListContext } from "../../contexts/ShoppingListContext";
import decimalWithCommas from "../../utils/utils";
import {
  Card,
  Input,
  SmallButton,
  PlusMinusButton,
  Text,
  Row,
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

  useEffect(() => {
    setIsExpand(isExpandAll);
  }, [isExpandAll]);

  function buttonCheckedHandler() {
    if (!isPurchased) {
      setItemPriceAct(
        disc ? discountedPrice(priceEstimated, disc) : priceEstimated,
        id
      );
      setItemIsPurchased(true, id);
      setIsExpand(true);
    }

    if (isPurchased) {
      setItemPriceAct("", id);
      setItemIsPurchased(false, id);
    }
  }

  useEffect(() => {
    if (disc >= 0) {
      setItemPriceAct(discountedPrice(priceEstimated, disc), id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disc, priceEstimated]);

  function discountedPrice(price, disc) {
    const discountedPrice = price * 1 - (price * Number(disc) * 1) / 100;
    return discountedPrice;
  }

  const danger = priceActual > priceEstimated ? "danger" : null;

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
          width="250px"
          type="text"
          placeholder="What to buy?"
          value={name}
          maxLength="17"
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
              width="200%"
              type="number"
              min={0}
              max={99999}
              placeholder="Est. unit price"
              value={priceEstimated}
              onChange={(e) => setItemPriceEst(e.target.value, id)}
            />
            <PlusMinusButton
              danger={danger}
              onClick={() => setItemQty((quantity = quantity * 1 + 1), id)}
            >
              <AiOutlinePlus />
            </PlusMinusButton>
            <Input
              type="number"
              placeholder="Qty"
              min={0}
              max={99}
              value={quantity}
              onChange={(e) => setItemQty(e.target.value, id)}
            />
            <PlusMinusButton
              danger={danger}
              onClick={() => setItemQty((quantity = quantity * 1 - 1), id)}
            >
              <AiOutlineMinus />
            </PlusMinusButton>
            <Input
              type="text"
              placeholder="Unit"
              value={unit}
              maxLength="12"
              onChange={(e) => setItemUnit(e.target.value, id)}
            />
          </Row>
          {isPurchased ? (
            <Row danger={danger}>
              <PlusMinusButton
                danger={danger}
                onClick={() =>
                  setItemPriceAct((priceActual = priceActual * 1 + 1), id)
                }
              >
                <AiOutlinePlus />
              </PlusMinusButton>
              <Input
                name="actualPrice"
                type="number"
                min={0}
                max={99999}
                placeholder="Act. price"
                value={priceActual}
                onChange={(e) => setItemPriceAct(e.target.value, id)}
              />
              <PlusMinusButton
                danger={danger}
                onClick={() =>
                  setItemPriceAct((priceActual = priceActual * 1 - 1), id)
                }
              >
                <AiOutlineMinus />
              </PlusMinusButton>

              <div
                style={{ borderRight: "1px solid #ccc", margin: "8px 0" }}
              ></div>
              <PlusMinusButton
                danger={danger}
                onClick={() => setItemDisc((disc = disc * 1 + 1), id)}
              >
                <AiOutlinePlus />
              </PlusMinusButton>
              <Input
                type="number"
                placeholder="Discount"
                min={0}
                max={99}
                value={disc}
                onChange={(e) => setItemDisc(e.target.value, id)}
              />
              <PlusMinusButton
                danger={danger}
                onClick={() => setItemDisc((disc = disc * 1 - 1), id)}
              >
                <AiOutlineMinus />
              </PlusMinusButton>
            </Row>
          ) : null}

          {quantity * priceEstimated ? (
            <Row danger={danger}>
              <Text style={{ flex: "0 0 20px" }}>
                <strong>Total</strong>
              </Text>
              <Text>
                {quantity * priceEstimated
                  ? `Est TK ${decimalWithCommas(quantity * priceEstimated)}`
                  : null}
              </Text>
              {quantity * priceActual ? (
                <Text>{`Act TK ${decimalWithCommas(
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
