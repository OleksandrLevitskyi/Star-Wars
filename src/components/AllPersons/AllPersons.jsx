import React, { useContext } from "react";
import { Wrapper } from "./styles";
import PersonItem from "../PersonItem";
import Context from "../../context/context";

const AllPersons = () => {
  const { filteredPersons } = useContext(Context);
  return (
    <Wrapper>
      <div className="row">
        {filteredPersons.map((person) => (
          <div className="col-sm-4 mb-3" key={person.id}>
            <PersonItem
              name={person.name}
              gender={person.gender}
              id={person.id}
              home={person.homeworld.name}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AllPersons;
