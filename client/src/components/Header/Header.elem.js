import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.primary};
`;
export const NavLinkBtn = styled(Link)`
  text-decoration: none;
  color: ${(p) =>
    p.active ? p.theme.primary : p.theme.inputPlaceHolderTextColor};
  width: 110px;
  height: 51px;
  margin: 5px;
  border-bottom: 3px solid
    ${(p) => (p.active ? p.theme.primary : p.theme.cardBg)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  @media screen and (max-width: 500px) {
    height: 27px;
    border-bottom: 3px solid
      ${(p) => (p.active ? p.theme.primary : p.theme.cardBg)};
  }
`;

export const HoverDiv = styled.div`
  margin-top: 3px;
  &:hover {
    width: 120px;
    height: 43px;
    margin-top: 3px;
    background-color: ${(p) => (p.active ? p.theme.cardBg : p.theme.inputBg)};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 3px;
    &:hover {
      width: 120px;
      height: 22px;
      margin-top: 3px;
      background-color: ${(p) => (p.active ? p.theme.cardBg : p.theme.inputBg)};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
  }
`;

export const NavLinkBtnContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const NavLinkBtnContainerMobile = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const HeaderWrapper = styled.header`
  min-width: 360px;
  position: sticky;
  top: 0;
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.cardBg};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: all 0.2s linear;
  margin-bottom: 7px;
`;

export const HeaderContainer = styled.div`
  max-width: 750px;
  height: 50px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 0.2rem;
  text-shadow: ${(p) => p.theme.bigBtnShadow};
`;

export const HeaderText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-shadow: ${(p) => p.theme.bigBtnShadow};
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const UserName = styled.span`
  background-color: ${(p) => (p.active ? p.theme.activeUser : p.theme.cardBg)};
  padding: 2px 8px;
  font-size: 14px;
  border-radius: 20px;
  &:hover {
    background-color: ${(p) => p.theme.activeUser};
    padding: 2px 8px;
    font-size: 14px;
    border-radius: 20px;
  }
`;
