import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Button = styled.button`
  padding: 8px 24px;
  justify-self: end;
  font-weight: 400;
  color: #474747;
  background: white;
  font-size: 14px;
  border-radius: 999px;
  border: none;
  box-shadow: 0 2px 5px #00000055;
  text-transform: uppercase;
  cursor: pointer;
`

export const HomeButton = styled(Link)`
  text-decoration: none;
  justify-self: start;
  background: #373737;
  border: 5px solid white;
  box-shadow: 0 3px 10px #00000088;
  display: grid;
  place-content: center center;
  border-radius: 999px;
  width: 60px;
  height: 60px;
  font-size: 10px;
  color: white;
`
