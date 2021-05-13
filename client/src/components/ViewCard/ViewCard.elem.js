import styled from "styled-components";

// export const Card = styled.div`
//   border-radius: 5px;
//   box-shadow: 0px 0px 3px 0px ${(p) => p.theme.shadow};
//   margin: 6px 0px;
//   background-color: ${(p) =>
//     p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
//   z-index: ${({ danger }) => (danger ? "999" : "0")};
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: space-evenly;
//   transition: all 0.2s linear;
//   padding: 0px 15px;
// `;

// export const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid
//     ${(p) => (p.danger ? `${p.theme.borderDanger}` : `${p.theme.border}`)};
//   padding: 5px;
//   &:last-child {
//     border-bottom: 0px solid
//       ${(p) => (p.danger ? `${p.theme.borderDanger}` : `${p.theme.border}`)};
//   }
// `;

// export const Text = styled.div`
//   padding: 4px;
//   flex: 1 0 90px;
//   color: ${(p) => p.theme.text};
// `;
// export const TextSpan = styled.span`
//   padding: 4px;
//   color: ${(p) => p.theme.text};
// `;

// export const Label = styled.label`
//   color: ${(p) => p.theme.text};
//   font-weight: 400;
//   font-size: 1.4rem;
//   margin-top: 2px;
// `;

export const Card = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  /* height: ${(p) => (p.longHeight ? `135px` : `95px`)}; */
  padding: 0.5rem;
  margin: 0.8rem 0.4rem;
  background-color: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  z-index: ${({ danger }) => (danger ? "999" : "0")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.2s linear;
`;

export const LeftContainer = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const RightContent = styled.div`
  flex: 1 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 7px;
  /* padding-left: 7px; */
`;

export const ItemNum = styled.div`
  color: ${(p) => p.theme.text};
  font-size: 25px;
  font-weight: 300;
  margin: 0 auto;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 17px;
  text-align: left;
`;
export const Comment = styled.div`
  font-weight: 600;
  font-size: 15px;
  text-align: left;
`;
export const SubName = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
`;
export const SubNameAct = styled.div`
  font-weight: 400;
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
