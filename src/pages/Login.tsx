import * as React from "react"
import styled from "styled-components"
import {dispatch} from "../store"
import Spinner from "../components/Spinner"
import {Session} from "../app"

let Page = styled.div`
  display:flex;
  height:100vh;
  align-items: center;
  justify-content:center;
  background: #eee;
`

let LoginForm = styled.form`
  height: 56px;
  width: 500px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display:flex;
  align-items:stretch;
`

let Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  background:none;
  border:none;
  flex:1;
  color: #656565;
  font-size: 24px;
  padding: 0 20px;
  &:focus {
    outline:none
  }
  &::placeholder {
    color: #999;
  }
`

let Submit = styled.button`
  font-family: 'Montserrat', sans-serif;
  display:flex;
  align-items: center;
  justify-content:center;
  background:#88BC32;
  border:none;
  color:white;
  font-size:18px;
  width: 70px;
  &:focus {
    outline:none;
  }
`


type Props = {
  session:Session
}
type State = {
  email: string
}
export default class Login extends React.Component<Props, State> {
  constructor(p:Props) {
    super(p)
    this.state = {
      email: ""
    }
  }
  render() {
    let login = (e:React.FormEvent) => {
      e.preventDefault()
      dispatch({type:"Login", email: this.state.email})
    }
    return (
      <Page>
    <LoginForm onSubmit={login}>
      <Input value={this.state.email} onChange={e => this.setState({email:e.target.value})} placeholder="Email"/>
      <Submit onClick={login}>
      { this.props.session === "Loading" ? <Spinner size={20} color="white" /> : "GO"} 
      </Submit>
    </LoginForm>
    </Page>
  )
}
};