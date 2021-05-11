import React, { useState, useContext } from "react";
import {
  NavLink,
  NavLinkBtnContainer,
  NavLinkBtn,
  HoverDiv,
  HeaderWrapper,
  Logo,
  HeaderText,
  HeaderRightWrapper,
  HeaderContainer,
  UserName,
  NavLinkBtnContainerMobile,
} from "./Header.elem";
import { ThemeContext } from "styled-components";
import { dark, light } from "../../configs/colors";
import Toggle from "../Toggle/Toggle";
import { useAuthState } from "../../contexts/AuthContext";
import { useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();
  const { token, user } = useAuthState();
  const { id, setTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(id === "light" ? false : true);

  function handleToggle() {
    if (isActive) {
      setTheme(light);
      setIsActive(false);
      localStorage.setItem("shopilistTheme", "light");
    }
    if (!isActive) {
      setTheme(dark);
      setIsActive(true);
      localStorage.setItem("shopilistTheme", "dark");
    }
  }

  const loginPage = pathname === "/login" ? "active" : undefined;
  const registerPage = pathname === "/register" ? "active" : undefined;
  const profilePage = pathname === "/profile" ? "active" : undefined;
  const savedListPage = pathname === "/saved-lists" ? "active" : undefined;
  const homePage = pathname === "/" ? "active" : undefined;

  return (
    <>
      {loginPage || registerPage ? (
        <Logo style={{ textAlign: "center" }}>
          <NavLink to="/">Shopilist</NavLink>
        </Logo>
      ) : (
        <HeaderWrapper>
          <HeaderContainer>
            <Logo>
              <NavLink to="/">Shopilist</NavLink>
            </Logo>
            {token && (
              <NavLinkBtnContainer>
                <NavLinkBtn active={homePage} to="/">
                  <HoverDiv active={homePage}>Create New</HoverDiv>
                </NavLinkBtn>

                <NavLinkBtn active={savedListPage} to="/saved-lists">
                  <HoverDiv active={savedListPage}>Saved Lists</HoverDiv>
                </NavLinkBtn>
              </NavLinkBtnContainer>
            )}

            <HeaderRightWrapper>
              {registerPage || loginPage ? null : (
                <HeaderText>
                  {token ? (
                    <NavLink to="/profile">
                      <UserName active={profilePage}>
                        {user.name.split(" ")[0]}
                      </UserName>
                    </NavLink>
                  ) : (
                    <NavLink to="/login">Sign in</NavLink>
                  )}
                </HeaderText>
              )}

              <div>
                <Toggle isActive={isActive} handleToggle={handleToggle} />
              </div>
            </HeaderRightWrapper>
          </HeaderContainer>
          {token ? (
            <NavLinkBtnContainerMobile>
              <NavLinkBtn active={homePage} to="/">
                <HoverDiv active={homePage}>Create New</HoverDiv>
              </NavLinkBtn>
              <NavLinkBtn active={savedListPage} to="/saved-lists">
                <HoverDiv active={savedListPage}>Saved Lists</HoverDiv>
              </NavLinkBtn>
            </NavLinkBtnContainerMobile>
          ) : null}
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
