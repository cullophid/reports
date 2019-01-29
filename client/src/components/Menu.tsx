import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import * as Theme from "../theme";

type Props = {
  page: "Reports" | "Datasources";
};
export const Menu = (props: Props) => {
  const [showMenu, toggleMenu] = useState(false);
  const documentClick = useCallback(() => toggleMenu(false), []);

  useEffect(() => {
    document.addEventListener("click", documentClick);
    () => document.removeEventListener("click", documentClick);
  }, []);

  return (
    <SideMenu show={showMenu}>
      <MenuButton
        active={showMenu}
        onClick={(e: React.MouseEvent<any>) => {
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
          toggleMenu(!showMenu);
        }}
      >
        AM
      </MenuButton>
      <MenuNav>
        <Pages>
          <Link
            to="/reports"
            onClick={(e: React.MouseEvent<any>) =>
              e.nativeEvent.stopPropagation()
            }
          >
            <Page active={props.page == "Reports"}>Reports</Page>
          </Link>
          <Link
            to="/datasources"
            onClick={(e: React.MouseEvent<any>) =>
              e.nativeEvent.stopPropagation()
            }
          >
            <Page active={props.page == "Datasources"}>Datasources</Page>
          </Link>
        </Pages>
      </MenuNav>
    </SideMenu>
  );
};

const MenuButton = styled.button<{ active: boolean }>`
  display: grid;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: ${(p) => (p.active ? 75 : 30)}px;
  top: ${(p) => (p.active ? 40 : 30)}px;
  transition: all 300ms;
  transition-timing-function: ease-in-out;
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
  box-shadow: ${(p) => (p.active ? "0px 8px 15px" : "0px 2px 3px")}
    rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const SideMenu = styled.aside<{ show: boolean }>`
  grid-area: sidebar;
  width: ${(p) => (p.show ? 200 : 0)}px;
  transition: width 300ms;
  transition-timing-function: ease-out;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px auto;
  & > nav {
    visibility: ${(p) => (p.show ? "visible" : "hidden")};
    opacity: ${(p) => (p.show ? 1 : 0)};
    transition: opacity 300ms;
    transition-delay: 300ms;
  }
`;

const MenuNav = styled.nav`
  grid-row: 2;
`;

const Pages = styled.ul`
  margin: 0;
  padding: 0;
  align-self: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-row: 2 / span 1;
`;

const Page = styled.li<{ active?: boolean }>`
  display: grid;
  align-content: center;
  padding-left: 16px;
  border-left: 8px solid transparent;
  height: 50px;
  color: #656466;
  &:hover {
    border-left: 8px solid ${Theme.primary};
  }
  ${(p) =>
    p.active &&
    css`
      border-left: 8px solid ${Theme.primary};
      background: #eeeeee;
      box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.1);
    `};
`;
