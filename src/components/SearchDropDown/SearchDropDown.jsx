import React, { useContext } from "react";
import Context from "../../context/context";
import { SearchDropDownWrapper, DropDownItem } from "./styles";

const SearchDropDown = () => {
  const { showDropDown, filteredPersons, onChoose } = useContext(Context);

  if (!showDropDown) {
    return null;
  }

  return (
    <SearchDropDownWrapper>
      {filteredPersons.map((person) => (
        <DropDownItem
          onClick={() => onChoose(person.name, person.id)}
          key={person.id}
        >
          {person.name}
        </DropDownItem>
      ))}
    </SearchDropDownWrapper>
  );
};

export default SearchDropDown;
