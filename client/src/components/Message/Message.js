import React from "react";
import styled from "styled-components";

const Message = ({ text, error, children }) => {
  return (
    <Card error={error}>
      {text}
      {children}
    </Card>
  );
};

const Card = styled.div`
  border-radius: 5px;
  margin: auto;
  min-width: 50%;
  color: ${(p) => p.theme.text};
  box-shadow: 0px 0px ${(p) => (p.error ? "2px" : "4px")} 0px
    ${(p) => p.theme.shadow};
  padding: 1rem;
  margin-bottom: 12px;
  background-color: ${(p) => (p.error ? p.theme.danger : p.theme.cardBg)};
  font-weight: 500;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* transition: all 0.2s linear; */
`;

export default Message;
