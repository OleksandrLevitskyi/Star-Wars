import React, { useContext, useState } from "react";
import Context from "../../context/context";
import { LoginPageWrapper, LoginButtonWrapper } from "./styles";

const LoginPage = () => {
  const { onLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const changePassword = ({ target: { value } }) => setPassword(value);
  const changeEmail = ({ target: { value } }) => setEmail(value);

  const onReset = () => {
    setEmail("");
    setPassword("");
  };

  const onSumbit = (e) => {
    e.preventDefault();
    onLogin({
      email,
      password,
    });
    onReset();
  };


  return (
    <LoginPageWrapper onSubmit={onSumbit}>
      <div className="mb-4 mt-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address or Login
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="test"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={changeEmail}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="test"
          id="exampleInputPassword1"
          value={password}
          onChange={changePassword}
        />
      </div>
      <LoginButtonWrapper>
        <button type="submit" className="btn btn-warning">
          Log In
        </button>
      </LoginButtonWrapper>
    </LoginPageWrapper>
  );
};

export default LoginPage;
