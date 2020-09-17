import React from "react";
import { AuthService, useAuth } from "gatsby-theme-auth0";

const AccountMenu = () => {
    const { isLoggedIn, profile } = useAuth();
    return (
        <div>
            {profile && <span>Hello {profile.name} </span>}
            {isLoggedIn ? (
                <button onClick={AuthService.logout}>Logout</button>
            ) : (
                <button onClick={AuthService.login}>Login</button>
            )}
        </div>
    )
}

export default AccountMenu