import styled from "styled-components";
import { Link } from "react-router-dom";

export const SavedCard = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px ${(p) => p.theme.shadow};
  flex: 1 1 20rem;
  padding: 1rem;
  margin-bottom: 5px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.cardContainerBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.2s linear;
  @media print {
    color: black;
  }
`;
export const Card = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px ${(p) => p.theme.shadow};
  width: 95%;
  padding: 1rem;
  margin-bottom: 10px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.cardBg};
  transition: all 0.2s linear;
  @media print {
    color: black;
  }
`;

export const TextLink = styled(Link)`
  color: ${(p) => p.theme.primary};
  text-decoration: none;
  font-weight: 400;
  transition: all 0.2s linear;
`;
