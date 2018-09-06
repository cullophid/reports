import * as React from 'react';
import {State} from "./App"
import logo from './logo.svg';
import styled, {keyframes} from "styled-components"
import lazy from "./Lazy"
import Link from "./Link"

const spin = keyframes`
  from {
    transform:rotate(0);
  }
  to {
    transform:rotate(360deg);
  }
`
const Page = styled.div`
  display:flex;
  flex-direction: column;
  height:100%;
  align-items: stretch;
`

const Header = styled.header`
  flex: 0;
  height: 100px;
  background:#454545;
`

const Logo = styled.img`
  height: 40px;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const MainContent = styled.main`
  flex:1;
`
type User = {
  firstname:string,
  lastname:string,

}
const User = lazy((user: User) => {
  console.log("PAINTING");
  return <p> {user.firstname} {user.lastname}</p>
})

type Props = {
  state: State
}
export default ({state}:Props) =>
  <Page>
    <Header>
      <Logo src={logo} />
      <h1> {state.title} </h1>
    </Header>
    <MainContent>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
    <p> {state.page.name} </p>
    <Link to="/">Home</Link>
    <Link to="/reports">Reports</Link>
    <Link to="/reports/super">Super Report</Link>
    </MainContent>
  </Page>

