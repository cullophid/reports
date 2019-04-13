import React, { useState, useEffect } from "react"
import { navigateTo } from "gatsby"
import styled from "@emotion/styled"
import { Page } from "../components/Page"
import firebase from "../firebase"
import { Spinner } from "../components/Spinner"

import googleIcon from "../images/google.svg"
import githubIcon from "../images/github.svg"

const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()

const LoginPage = () => {
  const [authMessage, setAuthMessage] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const login = (provider: firebase.auth.AuthProvider) => async () => {
    try {
      setLoading(true)
      const result = await firebase.auth().signInWithRedirect(provider)
      navigateTo("/")
    } catch (e) {
      setAuthMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        console.log("Auth Result", result)
        if (result.user) {
          navigateTo("/")
        } else {
          setLoading(false)
        }
      })
      .catch(function(error) {
        console.error("Auth Error", error)
        setAuthMessage(error.message)
      })
  }, [])

  return (
    <Page>
      <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Title>Sign In</Title>
            <LoginButton onClick={login(googleProvider)}>
              <LoginButtonLayout>
                <ButtonTitle>Google</ButtonTitle>
                <LoginButtonLogoBg>
                  <img src={googleIcon} />
                </LoginButtonLogoBg>
              </LoginButtonLayout>
            </LoginButton>
            <LoginButton onClick={login(githubProvider)}>
              <LoginButtonLayout>
                <ButtonTitle>Github</ButtonTitle>
                <LoginButtonLogoBg style={{ background: "black" }}>
                  <img src={githubIcon} />
                </LoginButtonLogoBg>
              </LoginButtonLayout>
            </LoginButton>
            {authMessage && <ErrorMessage> {authMessage} </ErrorMessage>}
          </>
        )}
      </Layout>
    </Page>
  )
}
export default LoginPage

const Layout = styled.main`
  display: grid;
  min-height: 100vh;
  place-content: center center;
  grid-auto-flow: row;
  justify-items: center;
  grid-gap: 32px;
`
const Title = styled.h1`
  color: #4e4d50;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: normal;
  margin: 0;
`

const LoginButton = styled.button`
  background: white;
  padding: 0;
  border: none;
  box-shadow: 0 4px 10px #00000025;
  width: 300px;
  height: 56px;
`
const LoginButtonLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 70px;
`

const ButtonTitle = styled.div`
  justify-self: center;
  align-self: center;
  font-size: 24px;
  color: #4e4d50;
  line-height: 1;
`

const LoginButtonLogoBg = styled.div`
  background: #4285f4;
  display: grid;
  place-content: center center;
`
const ErrorMessage = styled.p`
  width: 300px;
  background: #00000002;
  border: 1px solid red;
  padding: 32px;
  border-radius: 5px;
`
