import decimalWithCommas from "../../utils/utils";
import {
  Card,
  RightContent,
  ItemNum,
  LeftContainer,
  Name,
  Comment,
  SubName,
  SubNameAct,
  Border,
} from "./ViewCard.elem";

const ViewCard = ({
  id,
  name,
  priceEstimated = 0,
  priceActual = 0,
  quantity = 0,
  disc = 0,
  isPurchased = false,
  unit = "PC",
  currentDocument,
}) => {
  function getItemComment() {
    if (priceEstimated > priceActual) {
      return `Saved TK ${decimalWithCommas(
        (priceEstimated - priceActual) * quantity
      )} | Disc ${disc}%`;
    }

    if (priceEstimated < priceActual) {
      return `Spent more TK ${decimalWithCommas(
        (priceActual - priceEstimated) * quantity
      )}`;
    }
    return "Nothing saved!";
  }

  const itemSerialNo =
    currentDocument.items.findIndex((item) => item.id === id) + 1;
  return (
    <Card longHeight={isPurchased}>
      <LeftContainer>
        <ItemNum>{itemSerialNo}</ItemNum>
      </LeftContainer>

      <RightContent>
        <Name>{name}</Name>
        <Border />
        <SubName>
          {quantity} {unit} at est. TK {decimalWithCommas(priceEstimated)} per{" "}
          {unit}
        </SubName>
        <SubName>
          Total est. TK {decimalWithCommas(priceEstimated * quantity)}
        </SubName>
        {isPurchased ? (
          <>
            <Border />
            <SubNameAct>
              Purchase price {decimalWithCommas(priceActual)} per {unit}
            </SubNameAct>
            <SubNameAct>
              Total act. cost TK {decimalWithCommas(priceActual * quantity)}
            </SubNameAct>

            {getItemComment() && (
              <>
                <Border />
                <Comment>{getItemComment()}</Comment>
              </>
            )}
          </>
        ) : (
          <>
            <Border />
            <Comment>Not purchased!</Comment>
          </>
        )}
      </RightContent>
    </Card>
  );
};

export default ViewCard;
