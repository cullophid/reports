import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import { Page } from "../components/Page"
import firebase from "../firebase"
import { Spinner } from "../components/Spinner"
import { Alert } from "../components/Alert"
import { Google } from "../icons/google"
import { Github } from "../icons/github"

const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()

const LoginPage = () => {
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const login = (provider: firebase.auth.AuthProvider) => async () => {
    try {
      setLoading(true)
      const result = await firebase.auth().signInWithRedirect(provider)
      navigate("/")
    } catch (e) {
      setError(e)
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
          navigate("/")
        } else {
          setLoading(false)
        }
      })
      .catch(function(error) {
        console.error("Auth Error", error)
        setError(error)
        setLoading(false)
      })
  }, [])

  return (
    <Page>
      <Layout>
        {loading && <Spinner />}
        {!loading && (
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
            {error && <Alert> {error.message} </Alert>}
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
