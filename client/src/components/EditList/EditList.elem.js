import styled from "styled-components";

export const Input = styled.input`
  padding: 7px 5px;
  margin: 5px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 400;
  background-color: ${(p) => p.theme.inputBg};
  border: none;
  color: ${(p) => p.theme.inputPlaceHolderTextColor};
  border-radius: 16.5px;
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : "50px")};
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
  border: 0px solid #000000;
  box-shadow: 0px 0px 8px 0px ${(p) => p.theme.shadow};
  padding: 0.5rem;
  margin: 0.8rem 0.4rem;
  background-color: ${(p) => p.theme.cardContainerBg};
  position: relative;
  transition: all 0.2s linear;
`;

export const SmallButton = styled.button`
  color: ${(p) => p.theme.text};
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(p) => p.theme.cardContainerBg};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 8px;
  right: 37px;
  transition: all 0.2s linear;
`;
export const SmallButtonCross = styled.button`
  color: ${(p) => p.theme.text};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(p) => p.theme.cardContainerBg};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 7px;
  transition: all 0.2s linear;
`;

export const SummaryCard = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 8px 0px ${(p) => p.theme.shadow};
  padding: 0.5rem;
  margin: 0.8rem 0.4rem;
  background-color: ${(p) => p.theme.cardContainerBg};
  transition: all 0.2s linear;
  position: sticky;
  top: 60px;
  z-index: 1000;
  @media screen and (max-width: 500px) {
    position: sticky;
    top: 85px;
    top: ${(p) => (p.isLoggedIn ? "85px" : "60px")};
  }
`;

export const BrandingText = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
  font-style: italic;
  color: ${(p) => p.theme.text};
`;

export const Summary = styled.div`
  color: ${(p) => p.theme.text};
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px 3px 5px;
`;
