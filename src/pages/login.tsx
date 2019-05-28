import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import { Page } from "src/components/Page"
import firebase from "src/firebase"
import { Spinner } from "src/components/Spinner"
import { Alert } from "src/components/Alert"
import { Google } from "src/icons/google"
import { Github } from "src/icons/github"
import { Remote } from "src/remote"

const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()

const LoginPage = () => {
  const [response, setResponse] = useState<Remote<{}>>({})
  const login = (provider: firebase.auth.AuthProvider) => async () => {
    try {
      setResponse({ loading: true })
      await firebase.auth().signInWithRedirect(provider)
      navigate("/")
    } catch (error) {
      setResponse({ error })
    }
  }

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        console.log("Auth Result", result)
        if (result.user) {
          navigate("/")
        } else {
          setResponse({ loading: false })
        }
      })
      .catch(function(error) {
        console.error("Auth Error", error)
        setResponse({ error })
      })
  }, [])

  return (
    <Page>
      <Layout>
        {response.loading && <Spinner />}
        {!response.loading && (
          <>
            <Title>Sign In</Title>
            <LoginButton onClick={login(googleProvider)}>
              <LoginButtonLayout>
                <ButtonTitle>Google</ButtonTitle>
                <LoginButtonLogoBg>
                  <Google />
                </LoginButtonLogoBg>
              </LoginButtonLayout>
            </LoginButton>
            <LoginButton onClick={login(githubProvider)}>
              <LoginButtonLayout>
                <ButtonTitle>Github</ButtonTitle>
                <LoginButtonLogoBg style={{ background: "black" }}>
                  <Github />
                </LoginButtonLogoBg>
              </LoginButtonLayout>
            </LoginButton>
            {response.error && <Alert> {response.error.message} </Alert>}
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
