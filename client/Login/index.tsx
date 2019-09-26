import React, { useState } from "react"
import { useSignInMutation } from "../codegen/graphql"
import Router from "next/router";
import styled from "@emotion/styled";


export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [login, loginRequest] = useSignInMutation()
  return (
    <Layout>
      <Form
        onSubmit={async e => {
          e.preventDefault();
          await login({
            variables: {
              email
            }
          })
          Router.push("/check-email")
        }}>
        <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
        <SendButton disabled={loginRequest.loading} type="submit">
          {loginRequest.loading ? "..." : "SEND"}
        </SendButton>
      </Form>
    </Layout>
  )
}

const Layout = styled.div`
  display:grid;
  height:100%;
  place-content:center center;
  grid-auto-columns: 600px;
  @media (max-width: 700px) {
    grid-auto-columns: 80%;
  }
`



const Form = styled.form`
  display:grid;
  grid-template-columns: 1fr auto;
  background:white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const EmailInput = styled.input`
  height: 50px;
  padding: 16px;
  width:auto;
  font-family: 'Montserrat', sans-serif;
  color:#4b4b4b;
  ::placeholder {
    color:#8C8B8C;
  }
  border: 1px solid transparent;
  :focus {
    outline:none;
    border-color: #EF536F;
  }
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid transparent;
`

const SendButton = styled("button")`
display:block;
height:100%;
background: linear-gradient(180deg, #EF536F 0%, #CC475F 100%);
border:none;
border-radius: 0px 2px 2px 0px;
width: 77px;
color:white;
:focus {
  outline:none;
  box-shadow: 0 0 10px #fb5875;
}

`

