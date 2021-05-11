import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 16px;
  font-family: inherit;
  text-align: left;
  font-weight: 400;
  padding: 10px 15px;
  background-color: ${(p) => p.theme.inputBg};
  color: ${(p) => p.theme.text};
  border: 1px solid ${(p) => p.theme.inputBorder};
  overflow: hidden;
  /* width: ${({ width }) => (width ? `${width}` : "85%")}; */
  border-radius: 5px;
  width: 215px;
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

export const Card = styled.div`
  border-radius: 5px;
  padding: 12px 11px;
  box-shadow: 0px 0px 20px 0px ${(p) => p.theme.shadow};

  margin: 5vh auto;
  background-color: ${(p) => p.theme.cardBg};
  transition: all 0.2s linear;
  width: 250px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export const Label = styled.label`
  font-weight: 700;
`;
export const Error = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${(p) => p.theme.loginError};
  margin-top: 1px;
`;
export const InputGroup = styled.div`
  margin-bottom: 12px;
`;

export const Border = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  border-top: 1px solid #ccc;
  /* width: ${(p) => (p.length ? `${p.length}` : "50px")}; */
  margin: ${(p) => (p.zeroMargin ? "0" : "2px 0")};
`;

export const Button = styled.button`
  box-shadow: 0px 0px 20px 0px ${(p) => p.theme.bigBtnShadow};
  width: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${(p) => p.theme.textLight};
  background: ${({ danger, theme }) =>
    danger ? `${theme.danger}` : `${theme.primary}`};
  outline: none;
  border: none;
  margin: 0 auto 24px auto;
  padding: 10px 20px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 700;

  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => p.theme.tertiary};
  }

  @media only screen and (max-width: 500px) {
    &:hover {
      color: ${(p) => p.theme.textLight};
      background: ${(p) => p.theme.tertiary};
    }
  }

  @media print {
    display: none;
  }
`;

export const BottomText = styled.div`
  color: #3700b3;
  /* padding: 10x;
  margin-bottom: 5px; */
`;

export const StyledLinkBtn = styled(Link)`
  box-shadow: 0px 0px 20px 0px ${(p) => p.theme.bigBtnShadow};
  width: 100px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${(p) => p.theme.textLight};
  background: ${(p) => p.theme.active};
  outline: none;
  border: none;
  margin: 24px auto;
  padding: 10px 20px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 700;

  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => p.theme.activeHover};
  }

  @media only screen and (max-width: 500px) {
    &:hover {
      color: ${(p) => p.theme.textLight};
      background: ${(p) => p.theme.tertiary};
    }
  }

  @media print {
    display: none;
  }
`;
