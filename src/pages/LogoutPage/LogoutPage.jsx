import React, { useContext } from "react";
import Context from "../../context/context";
import { LogoutPageWrapper } from "./styles";

const LogoutPage = () => {
  const { onLogOut } = useContext(Context);

  return (
    <LogoutPageWrapper>
      <h3>Do you really want to exit?</h3>
      <button className="btn btn-danger" onClick={onLogOut}>
        Log Out
      </button>
    </LogoutPageWrapper>
  );
};

export default LogoutPage;
