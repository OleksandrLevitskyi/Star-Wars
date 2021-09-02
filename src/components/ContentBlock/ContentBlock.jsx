import React from "react";
import AllPersons from "../AllPersons";
import SideBar from "../SideBar";
import { BlockWrapper, AllPersonsWrapper } from "./styles";

const ContentBlock = () => {
  return (
    <BlockWrapper>
      <SideBar />
      <AllPersonsWrapper>
        <AllPersons />
      </AllPersonsWrapper>
    </BlockWrapper>
  );
};

export default ContentBlock;
