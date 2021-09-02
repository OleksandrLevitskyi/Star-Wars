import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import Context from "./context/context";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import { verifUser } from "./mocked/user";
import { ALL_PERSONS } from "./mocked/scheme";
import { useQuery } from "@apollo/client";
import PrivateRoute from "./route/ProtectedRoute";

const AppWrapper = styled.div`
  width: 1350px;
  margin: 0 auto;
`;

const App = () => {
  const history = useHistory();

  const { data } = useQuery(ALL_PERSONS, {
    fetchPolicy: "catch-first",
  });

  

  const [loggedIn, setIsLogin] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [choosePerson, setChoosePerson] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const onLogin = ({ email, password }) => {
    if (email === verifUser.email && password === verifUser.password) {
      setIsLogin(true);
      setFilteredPersons(data.allPeople.people);
      history.push("/home");
    } else {
      alert("Pls try again");
    }
  };

  const onLogOut = () => {
    setIsLogin(false);
    history.push("/login");
  };

   const onChoose = (name, id) => {
    setChoosePerson([...choosePerson, { name, id }]);
    setFilteredPersons(filteredPersons.filter((person) => person.id === id));
    setShowDropDown(false);
  };

  
  

  return (
    <Context.Provider
      value={{
        loggedIn,
        onLogin,
        onLogOut,
        showDropDown,
        onChoose,
        choosePerson,
        setChoosePerson,
        setShowDropDown,
        setFilteredPersons,
        filteredPersons,
      }}
    >
      <AppWrapper>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <PrivateRoute path="/" component={HomePage} />
        </Switch>
      </AppWrapper>
    </Context.Provider>
  );
};

export default App;
