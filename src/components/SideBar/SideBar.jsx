import React, { useContext } from "react";
import Context from "../../context/context";
import { SideBarWrapper, SideBarList, SideBarListItem } from "./styles";

const SideBar = () => {
  const { choosePerson, setChoosePerson } = useContext(Context);

  const handleDelete = (id) => {
    setChoosePerson(choosePerson.filter((item) => item.id !== id));
  };

  if (choosePerson.length === 0) {
    return (
      <SideBarWrapper>
        <h3>Choose something</h3>
      </SideBarWrapper>
    );
  } else {
    return (
      <SideBarList>
        {choosePerson.map((item) => (
          <SideBarListItem key={Math.random()}>
            {item.name}
            <div onClick={() => handleDelete(item.id)}>X</div>
          </SideBarListItem>
        ))}
      </SideBarList>
    );
  }
};

export default SideBar;
