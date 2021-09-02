import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
