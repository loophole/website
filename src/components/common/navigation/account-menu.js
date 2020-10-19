import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "gatsby";

const AccountMenu = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <AccountMenuWrapper>
      {isAuthenticated ? (
        <ButtonGroup>
          <ActionButtonLink to={"/profile"}>Profile</ActionButtonLink>
          <ActionButtonSecondary onClick={logout} onKeyDown={logout}>Logout</ActionButtonSecondary>
        </ButtonGroup>
      ) : (
          <ActionButtonSecondary onClick={loginWithRedirect} onKeyDown={loginWithRedirect}>
            Login
          </ActionButtonSecondary>
        )}
      {user && <span>Logged in as {user.nickname} </span>}
    </AccountMenuWrapper>
  );
};

export default AccountMenu;

const AccountMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    text-align: right;
    margin: 5px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  font-size: 12px;
  display: inline-block;
  color: white;
  letter-spacing: 1px;
  margin-left: 2px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  padding: 10px 16px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
`;

const ActionButtonLink = styled(Link)`
  font-size: 12px;
  margin: 0;
  margin-left: 2px;
  display: inline-block;
  color: ${(props) => props.theme.color.white.regular};
  letter-spacing: 1px;
  margin-left: 2px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  padding: 10px 16px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  text-decoration: none;
  background: ${(props) => props.theme.color.primary};

  &:hover {
    color: ${(props) => props.theme.color.white.regular};
  }
`;

const ActionButtonSecondary = styled(ActionButton)`
  background: ${(props) => props.theme.color.secondary};
`;
