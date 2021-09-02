import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.div`
  width: 1400px;
  padding: 20px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const NavItem = styled(NavLink)`
  width: 250px;
  font-size: 20px;
  font-weight: bold;
  color: #00FF00;
`;

