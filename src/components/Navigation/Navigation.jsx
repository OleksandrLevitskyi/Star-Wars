import React, { useContext } from "react";
import Context from "../../context/context";
import { NavigationWrapper, NavItem } from "./styles";

const Navigation = () => {
  const { loggedIn } = useContext(Context);
  return (
    <NavigationWrapper>
      <NavItem to="/home">
        Home Page
      </NavItem>
      {loggedIn ? (
        null
      ) : (
        <NavItem to="/login">
          Login Page
        </NavItem>
      )}
      {loggedIn ? (
        <NavItem to="/logout">
          Logout Page
        </NavItem>
      ) : (
        null
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
