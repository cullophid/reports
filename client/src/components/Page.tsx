import React from "react";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { Menu, MenuButton, HamBurger } from "../components/Menu";

type Props = {
  page: "Reports" | "Datasources";
  children?: React.ReactNode;
};
export const Page = (props: Props) => {
  const [showMenu, toggleMenu] = useState(false);
  const documentClick = useCallback(() => toggleMenu(false), []);

  useEffect(() => {
    document.addEventListener("click", documentClick);
    () => document.removeEventListener("click", documentClick);
  }, []);

  return (
    <>
      <MenuButton
        active={showMenu}
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
          toggleMenu(!showMenu);
        }}
      >
        <HamBurger />
      </MenuButton>
      <PageWrap showMenu={showMenu}>
        <Menu page={props.page} showMenu={showMenu} />
        {props.children}
      </PageWrap>
    </>
  );
};

export const PageWrap = styled.div<{ showMenu: boolean }>`
  transition: transform 300ms;
  transform: translateX(${(p) => (p.showMenu ? 200 : 0)}px);
  position: relative;
  background: #f5f5f5;
`;
