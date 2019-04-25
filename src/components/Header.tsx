import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { TextButton } from "./Button"
import firebase from "../firebase"

type HeaderProps = {
  children?: React.ReactNode
  title: string
}
export const Header = ({ children, title }: HeaderProps) => (
  <HeaderEl>
    <nav>
      <HomeButton to="/">HOME</HomeButton>
    </nav>
    <Title>{title}</Title>
    <LogOutButton onClick={() => firebase.auth().signOut()}>
      Fuck Off
    </LogOutButton>
  </HeaderEl>
)

const HeaderEl = styled.header`
  height: 40px;
  background: #373539;
  color: white;
  display: grid;
  padding: 0 32px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 16px;
`
const HomeButton = styled(Link)`
  font-weight: 400;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:visited {
    color: white;
  }
`
const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 24px;
  margin: 0;
`

const LogOutButton = styled(TextButton)`
  color: white;
  :focus {
    color: #474747;
  }
`
