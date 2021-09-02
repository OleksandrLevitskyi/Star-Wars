import React from "react";
import {
  PersonItemWrapper,
  NameWrapper,
  GenderWrapper,
  CardWrapper,
  NameGenderWrapper,
  HomeWrapper,
} from "./styles";

const PersonItem = ({ gender, name, home }) => {
  return (
    <PersonItemWrapper className="card mt-6">
      <CardWrapper className="card-body">
        <NameGenderWrapper>
          <NameWrapper>
            <label htmlFor="name">Name</label>
            <h5 id="name">
              {name}
            </h5>
          </NameWrapper>
          <GenderWrapper>
            <label htmlFor="phone">Gender</label>
            <h5 id="phone">
              {gender}
            </h5>
          </GenderWrapper>
        </NameGenderWrapper>
        <HomeWrapper>
          <label htmlFor="home">Planet</label>
          <h5 id="home">
            {home}
          </h5>
        </HomeWrapper>
      </CardWrapper>
    </PersonItemWrapper>
  );
};

export default PersonItem;
