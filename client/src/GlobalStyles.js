import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

body {
  margin: 0 0;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.bg};
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  transition: all 0.2s linear;
  overflow: scroll;
}

h1 {
  margin: 0 0;
}

p {
  margin: 0;
  padding: 0;
}

`;

export const Container = styled.div`
  min-width: 360px;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 0;
  text-align: center;
  @media (min-width: 750px) {
    max-width: 450px;
  }
`;

export const Button = styled.button`
  font-size: 22px;
  box-shadow: 5px 5px 20px 3px ${(p) => p.theme.shadow};
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${(p) => p.theme.textLight};
  background: ${(p) => (!p.disabled ? p.theme.tertiary : "#a477e4")};
  outline: none;
  border: none;
  margin: 5px;
  padding: 0px 0px;

  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => p.theme.primary};
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
export const RectBtn = styled.button`
  font-size: 16px;
  box-shadow: 5px 5px 20px 3px ${(p) => p.theme.shadow};
  min-width: 110px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${(p) => p.theme.textLight};
  background: ${(p) => (!p.disabled ? p.theme.tertiary : "#a477e4")};
  outline: none;
  border: none;
  margin: 5px;
  padding: 0px 5px;
  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => p.theme.primary};
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
export const RectBtnLink = styled(Link)`
  font-size: 16px;
  box-shadow: 5px 5px 20px 3px ${(p) => p.theme.shadow};
  min-width: 110px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${(p) => p.theme.textLight};
  background: ${(p) => (!p.disabled ? p.theme.tertiary : "#a477e4")};
  outline: none;
  border: none;
  margin: 5px;
  padding: 0px 15px;
  text-decoration: none;
  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => p.theme.primary};
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

export const RoundLink = styled(Link)`
  font-size: 22px;
  width: 50px;
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  color: ${(p) => p.theme.textLight};
  background: ${({ danger, theme }) =>
    danger ? `${theme.danger}` : `${theme.primary}`};

  outline: none;
  border: none;

  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => p.theme.tertiary};
  }

  @media print {
    display: none;
  }
`;

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GCard = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  color: ${(p) => p.theme.primary};
  box-shadow: 0px 0px 8px 0px ${(p) => p.theme.shadow};
  padding: 0.5rem;
  margin: 0 0.4rem;
  background-color: ${(p) => p.theme.cardContainerBg};
  position: relative;
  transition: all 0.2s linear;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${(p) => p.theme.text};
`;

export default GlobalStyle;
