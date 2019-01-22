import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { center, column, columnSpacing } from "../styles";
import * as Theme from "../theme";

type State = {
  showMenu: boolean;
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <StyledHeader>
      {showMenu && <Overlay onClick={() => setShowMenu(!showMenu)} />}
      <Menu style={showMenu ? { transform: "translateX(0)" } : {}}>
        <Link to="/">Reports</Link>
        <Link to="/datastores">Datastores</Link>
      </Menu>
      <MenuButton onClick={() => setShowMenu(!showMenu)}>AM</MenuButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 50px auto;
  height: 60px;
`;

const MenuButton = styled.button`
  ${center};
  width: 50px;
  height: 50px;
  line-height: 1;
  border-radius: 1000px;
  border: 4px solid white;
  box-sizing: border-box;
  background: ${Theme.primary};
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  z-index: 100;
`;
const Menu = styled.nav`
  ${column};
  ${columnSpacing(15)};
  padding: 30px;
  position: fixed;
  height: 100%;
  width: 300px;
  background: ${Theme.primary};
  color: white;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 300ms;
  z-index: 200;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;
