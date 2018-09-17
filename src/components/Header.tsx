import * as React from "react"
import styled from "styled-components"

const Header = styled.header`
  position:relative;
  height:130px;
  display:flex; 
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

const Title = styled.h1`
margin:auto;
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight:normal;
color: #4E4D50;
margin:0;
align-self: flex-end;
color: #4E4D50;
`
const Menu = styled.div`
  width: 50px;
  height:50px;
  line-height: 1;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 1000px;
  border: 4px solid white;
  box-sizing: border-box;
  background: #88BC32;
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

type Props = {
  title:string
}
export default (props:Props) => 
  <Header>
    <Menu>AM</Menu>
    <Title>{props.title}</Title>
    <div></div>
  </Header>