import React from "react";
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'gatsby';

const AccountMenu = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      {user && <span>Logged in as {user.nickname} </span>}
      {isAuthenticated ? (
        <ButtonGroup>
          <ActionButtonLink to={"/profile"}>
            Profile
          </ActionButtonLink>
          <ActionButtonSecondary onClick={logout}>Logout</ActionButtonSecondary>
        </ButtonGroup>
      ) : (
          <ActionButtonSecondary onClick={loginWithRedirect}>Login</ActionButtonSecondary>
        )}
    </div>
  )
}

export default AccountMenu

const ButtonGroup = styled.div`
  display: inline-block;
`

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
`

const ActionButtonLink = styled(Link)`
  font-size: 12px;
  margin: 0;
  margin-left: 2px;
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
  text-decoration: none;
  background: ${props => props.theme.color.primary};
`

const ActionButtonPrimary = styled(ActionButton)`
    background: ${props => props.theme.color.primary};
`

const ActionButtonSecondary = styled(ActionButton)`
    background: ${props => props.theme.color.secondary};
`