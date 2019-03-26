import React from "react"
import styled from "@emotion/styled"
import { HomeButton } from "./Button"

type HeaderProps = {
  gridArea?: string
  children: React.ReactNode
}
export const Header = ({ children, gridArea }: HeaderProps) => (
  <HeaderEl gridArea={gridArea}>
    <NavButton>
      <HomeButton to="/">HOME</HomeButton>
    </NavButton>
    {children}
  </HeaderEl>
)
const HeaderEl = styled.header<{
  gridArea?: string
}>`
  grid-area: ${p => p.gridArea || "auto"};
  display: grid;
  padding: 0 32px;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`

const NavButton = styled.nav`
  @media (max-width: 500px) {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }
`
export const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  margin: 0;
`
