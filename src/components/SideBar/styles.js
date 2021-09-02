import styled from "styled-components";

export const SideBarWrapper = styled.div`
  height: 100vh;
  width: 20%;
  background: #00FF00;
  text-align: center;
  h3 {
    font-size: 25px;
    margin-top: 15px;
    font-weight: bolder;
  }
`;

export const SideBarListItem = styled.li`
  width: 250px;
  padding: 0 6px;
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  border: 2px solid black;
  border-radius: 3px;
`;

export const SideBarList = styled.ul`
  background: #00FF00;
  width: 22%;
  padding: 15px;
  text-align: center;
  list-style: none;
  font-size: 23px;
  font-weight: 700;
`;
