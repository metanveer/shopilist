import React from "react";
import { useAuthDispatch, useAuthState } from "../../contexts/AuthContext";
import styled from "styled-components";
import Message from "../../components/Message/Message";
import SavedLists from "../SavedLists/SavedLists";
import { deleteUser, logout } from "../../contexts/AuthContext";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const { user, token, loading, errorMessage } = useAuthState();

  async function handleLogout(e) {
    e.preventDefault();
    await logout(dispatch, token);
    history.push("/login");
  }

  async function handleDeleteAccount() {
    await deleteUser(dispatch, token);
    history.push("/register");
  }

  return (
    <>
      {loading ? (
        <Message text="Loading..." />
      ) : errorMessage ? (
        <Message text={errorMessage} />
      ) : (
        <Card>
          <StyledDiv>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </StyledDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleLogout}>Logout</Button>
            <Button danger onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          </div>
        </Card>
      )}
      <SavedLists />
    </>
  );
};

const Card = styled.div`
  border-radius: 5px;
  border: 0px solid #000000;
  color: ${(p) => p.theme.text};
  box-shadow: 0px 0px 4px 0px ${(p) => p.theme.shadow};
  padding: 1rem;
  margin-bottom: 5px;
  background-color: ${(p) =>
    p.error ? p.theme.danger : p.theme.cardContainerBg};
  font-weight: 500;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
`;

const StyledDiv = styled.div`
  margin: 10px;
`;

const Button = styled.button`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${(p) => p.theme.textLight};
  background: ${({ danger, theme }) =>
    danger ? `#ad2900` : `${theme.tertiary}`};
  outline: none;
  border: none;
  margin: 0 0 0 10px;
  padding: 8px 2px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.textLight};
    background: ${(p) => (p.danger ? "red" : `${p.theme.sqrBtnHover}`)};
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

export default Profile;
