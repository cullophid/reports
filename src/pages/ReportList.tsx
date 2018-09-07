import * as React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import NewButton from "../components/NewButton"
import Link from "../components/Link"
const Page = styled.div`
  display:flex;
  height:100vh;
  flex-direction:column;
  align-items: stretch;
  background: #eee;
`

const Main = styled.main`
  flex:1;
  padding: 30px 55px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`
type Props = {

}

export default (props:Props) => 
  <Page>
    <Header title="Reports"/>
    <Main>
      <Link to="/reports/new"><NewButton /></Link>
    </Main>
  </Page>