import styled from "styled-components";

export const LoginPageWrapper = styled.form`
  color: #00FF00;
  width: 500px;
  margin: 90px auto;
  h3 {
    width: 200px;
    margin: 8px auto;
  }
  input {
    font-weight: 800;
  }
`;

export const LoginButtonWrapper = styled.div`
  width: 200px;
  margin: 40px auto;
  button {
    height: 50px;
    width: 200px;
    text-decoration: none;
    display: inline-block;
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
    background-size: 200% auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    transition: .5s;
  }

  button:hover {
    background-position: right center;
  }
`;
