import React, { useState } from "react"
import { Button } from "../components/Button";
import styled from "styled-components"
import { theme } from "../theme";
import { useSignInMutation } from "../codegen/graphql"
import Router from "next/router";


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [login, loginRequest] = useSignInMutation()

  return (
    <Layout>
      <Form onSubmit={async e => {
        e.preventDefault();
        await login({
          variables: {
            email
          }
        })
        Router.push("/check-email")
      }}>
        <EmailInput placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <Button name="login" disabled={loginRequest.loading}> Hellow</Button >
      </Form>
    </Layout>
  )
}


export default LoginPage

const EmailInput = styled.input`
height: 40px;
padding: 4px;
font-size: 1rem;
font-family: 'Montserrat', sans-serif;
border: 1px solid transparent;
border-bottom-color: ${theme.colors.lightgray};

  :focus {
    outline:none;
    border-bottom-color: ${ theme.colors.primary};
  }
`


const Form = styled.form`
  width: 500px;
  max-width: 90%;
  display:grid;
  grid-auto-flow: row;
  grid-gap: 16px;
`

const Layout = styled.div`
  width:100%;
  height:100%;
  display:grid;
  place-content: center center;
`