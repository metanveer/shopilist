import styled from "styled-components";

export const Card = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  height: ${(p) => (p.longHeight ? `135px` : `95px`)};
  padding: 0.5rem;
  margin: 0.8rem 0.4rem;
  background-color: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  z-index: ${({ danger }) => (danger ? "999" : "0")};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s linear;
`;

export const LeftContainer = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const RightContent = styled.div`
  flex: 1 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 7px;
`;

export const ItemNum = styled.div`
  color: ${(p) => p.theme.text};
  font-size: 40px;
  font-weight: 300;
  height: 37px;
  width: 37px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* background: ${(p) =>
    p.checked ? `${p.theme.smBtnCheckedBg}` : `${p.theme.primary}`}; */
  outline: none;
  border: none;
  margin-top: 5px;

  &:hover {
    background: ${({ checked, theme }) =>
      checked ? `${theme.smBtnCheckedBg}` : `${theme.smBtnHoverBg}`};
  }
`;

export const Name = styled.div`
  font-weight: 400;
  font-size: 17px;
  text-align: left;
`;
export const Comment = styled.div`
  font-weight: 400;
  font-size: 15px;
  text-align: left;
`;
export const SubName = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
`;
export const SubNameAct = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
`;
export const Border = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  border-top: 1px solid ${(p) => p.theme.border};
  width: 90%;
  margin: 2px 0;
`;
