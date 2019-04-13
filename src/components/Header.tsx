import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

type HeaderProps = {
  gridArea?: string
  children?: React.ReactNode
  title: string
}
export const Header = ({ children, gridArea, title }: HeaderProps) => (
  <HeaderEl gridArea={gridArea}>
    <nav>
      <HomeButton to="/">HOME</HomeButton>
    </nav>
    <Title>{title}</Title>
    {children}
  </HeaderEl>
)

const HeaderEl = styled.header<{
  gridArea?: string
}>`
  grid-area: ${p => p.gridArea || "auto"};
  display: grid;
  padding: 0 32px;
  grid-template-columns: auto 1fr;
  grid-auto-columns: auto 1fr;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 16px;
`
const HomeButton = styled(Link)`
  font-weight: 400;
  color: #474747;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid #474747;
  &:hover,
  &:visited {
    color: #373737;
  }
`
const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  margin: 0;
`
