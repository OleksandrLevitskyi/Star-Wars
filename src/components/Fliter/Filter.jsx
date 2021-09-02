import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import Context from "../../context/context";
import SearchDropDown from "../SearchDropDown";
import { FilterWrapper } from "./styles";
import { ALL_PERSONS } from "../../mocked/scheme";


const Filter = () => {
  const { data } = useQuery(ALL_PERSONS, {
    fetchPolicy: "catch-first",
  });

  const { setFilteredPersons, setShowDropDown } = useContext(Context);

  const filterHandler = ({ target: { value } }) => searchPerson(value);

  const searchPerson = (value) => {
    setFilteredPersons(
      data.allPeople.people.filter((person) =>
        person.name.toLowerCase().trim().includes(value.toLowerCase().trim())
      )
    );
    onShowDropDown(value);
  };

  const onShowDropDown = (value) => {
    if (value.length !== 0) {
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  return (
    <FilterWrapper>
      <input type="text" placeholder="Choose Person" onChange={filterHandler} />
      <SearchDropDown />
    </FilterWrapper>
  );
};

export default Filter;
