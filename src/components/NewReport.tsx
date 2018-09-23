import * as React from "react"
import styled from "styled-components"
import {TextInputLarge} from "../components/TextInput"

let Page = styled.div`
  display:flex;
  height:100vh;
  align-items: center;
  justify-content:center;
  background: #eee;
`

type State = {
 name:string
}

export default class CreateReportPage extends React.Component<{}, State> {
  constructor({}:{}) {
    super({})
    this.state = {name:""}
  }
  render () {
    return (
      <Page>
      <form>
        <TextInputLarge label="Name" value={this.state.name} onInput={name => this.setState({name})} />
        </form> 
      </Page>
    )
  }
}