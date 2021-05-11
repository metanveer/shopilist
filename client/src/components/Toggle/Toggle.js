import React from "react";
import styled from "styled-components";

const Toggle = ({ isActive, handleToggle }) => {
  return (
    <ToggleWrapper onClick={handleToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  width: 40px;
  min-width: 40px;
  height: 20px;
  margin-right: 4px;
  border-radius: 20px;
  border: 1px solid #666;
  display: flex;
  background: ${(p) => p.theme.primary};
  @media print {
    display: none;
  }
`;

const Notch = styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid #666;
  margin-top: 1px;
  background: ${(p) => (p.isActive ? `${p.theme.cardBg}` : "white")};
  border-radius: 50%;
  transition: all 0.2s linear;
  transform: translate(${(p) => (p.isActive ? "21px" : "1px")});
  @media print {
    display: none;
  }
`;

export default Toggle;
