import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "gatsby";

const AccountMenu = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return null;
  // return (
  //   <AccountMenuWrapper>
  //     {isAuthenticated ? (
  //       <ButtonGroup>
  //         <ActionButtonLink to={"/profile"}><StyledImage src={user.picture} /></ActionButtonLink>
  //         <ActionButtonSecondary onClick={logout} onKeyDown={logout}>Logout</ActionButtonSecondary>
  //       </ButtonGroup>
  //     ) : (
  //         <ActionButtonSecondary onClick={loginWithRedirect} onKeyDown={loginWithRedirect}>
  //           Login
  //         </ActionButtonSecondary>
  //       )}
  //   </AccountMenuWrapper>
  // );
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

const StyledImage = styled.img`
  width: 34px;
`;

const ButtonGroup = styled.div`
  display: flex;
  height: 34px;
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
  img {
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
  }

  margin-right: 10px;
`;

const ActionButtonSecondary = styled(ActionButton)`
  background: ${(props) => props.theme.color.secondary};
`;
