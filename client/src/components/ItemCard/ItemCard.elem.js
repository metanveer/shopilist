import styled from "styled-components";

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px ${(p) => p.theme.shadow};
  margin: 6px 0px;
  background-color: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  z-index: ${({ danger }) => (danger ? "999" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  transition: all 0.2s linear;
  padding: 0px 15px;
`;

export const Input = styled.input`
  padding: 6px 4px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 400;
  background-color: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.inputBg}`};
  color: ${(p) => p.theme.text};
  border-radius: 16.5px;
  border: none;
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : "100%")};
  transition: all 0.2s linear;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &:focus {
    outline: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid
    ${(p) => (p.danger ? `${p.theme.borderDanger}` : `${p.theme.border}`)};
  padding: 5px;
  &:last-child {
    border-bottom: 0px solid
      ${(p) => (p.danger ? `${p.theme.borderDanger}` : `${p.theme.border}`)};
  }
`;

export const Text = styled.div`
  padding: 4px;
  flex: 1 0 90px;
  color: ${(p) => p.theme.text};
`;

export const InputWrapper = styled.div`
  color: ${(p) => p.theme.text};
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 5px;
`;
export const Label = styled.label`
  color: ${(p) => p.theme.text};
  font-weight: 400;
  font-size: 1.4rem;
  margin-top: 2px;
`;

export const SmallButton = styled.button`
  color: ${(p) => p.theme.smBtnText};
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background: ${(p) =>
      p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  }
`;

export const PlusMinusButton = styled.button`
  color: ${(p) => p.theme.smBtnText};
  font-size: 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  outline: none;
  border: none;
  transition: all 0.2s linear;

  &:hover {
    background: ${(p) =>
      p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  }
`;
