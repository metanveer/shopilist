import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px ${(p) => p.theme.shadow};
  padding: 2.5px;
  margin: 0.8rem 0.4rem;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.cardContainerBg};
  transition: all 0.2s linear;
`;

export const Name = styled.div`
  padding: 5px 5px 0 5px;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
`;
export const Comment = styled.div`
  font-weight: 400;
  font-size: 15px;
  text-align: left;
`;
export const ViewListSummary = styled.div`
  padding: 5px;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 350px;
`;
export const ItemStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const HeadValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const SummaryHeads = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const SummaryValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SubName = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  text-align: center;
  color: ${(p) => p.theme.inputPlaceHolderTextColor};
`;

export const Border = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  border-top: 1px solid #ccc;
  width: ${(p) => (p.length ? `${p.length}` : "50px")};
  margin: ${(p) => (p.zeroMargin ? "0" : "2px 0")};
`;

export const SmallButton = styled.button`
  color: ${(p) => p.theme.smBtnText};
  font-size: 20px;
  height: 37px;
  width: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(p) =>
    p.checked ? `${p.theme.smBtnCheckedBg}` : `${p.theme.smBtnBg}`};
  outline: none;
  border: none;
  margin: 2px;

  &:hover {
    background: ${({ checked, theme }) =>
      checked ? `${theme.smBtnCheckedBg}` : `${theme.smBtnHoverBg}`};
  }

  @media print {
    display: none;
  }
`;

export const RoundLinkSmall = styled(Link)`
  color: ${(p) => p.theme.smBtnText};
  font-size: 20px;
  height: 37px;
  width: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(p) =>
    p.checked ? `${p.theme.smBtnCheckedBg}` : `${p.theme.smBtnBg}`};
  outline: none;
  border: none;
  margin: 2px;

  &:hover {
    background: ${({ checked, theme }) =>
      checked ? `${theme.smBtnCheckedBg}` : `${theme.smBtnHoverBg}`};
  }

  @media print {
    display: none;
  }
`;
