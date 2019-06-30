import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { TextButton } from "./Button"
import firebase from "../firebase"

type HeaderProps = {
  children?: React.ReactNode
  title: string
}
export const Header = ({ children, title }: HeaderProps) => {
  const logOut = async () => {
    await firebase.auth().signOut()
    window.location.href = "/login"
  }
  return (
    <HeaderEl>
      <nav>
        <HomeButton to="/">HOME</HomeButton>
      </nav>
      <Title>{title}</Title>
      <TextButton color="white" size={12} onClick={logOut}>
        Fuck Off
      </TextButton>
    </HeaderEl>
  )
}

const HeaderEl = styled.header`
  height: 40px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #ddd;
  color: #333;
  display: grid;
  padding: 0 32px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 16px;

  @media print {
    display: none;
  }
`
const HomeButton = styled(Link)`
  font-weight: 400;
  color: #333;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  &:hover,
  &:visited {
    color: #333;
  }
  &:focus {
    outline: none;
    border-bottom-color: #ffcc59;
  }
`
const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 20px;
  margin: 0;
`
