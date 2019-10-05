import ApolloClient, { Operation, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-fetch";
import { ApolloProvider } from "@apollo/react-hooks";
import { ReactChild, useMemo, createContext, useState, useEffect } from "react";
import React from 'react'
import { Global, css } from "@emotion/core"
import Router from "next/router";

const globalStyles = css`
  html, body, #__next {
    margin:0;
    padding:0;
    height:100%;
  }
  a, a:hover, a:visited {
    text-decoration:none;
    color:inherit;
    
  }
  * {
    box-sizing:border-box;
  }
`

type Props = {
  children: ReactChild;
  requireAuth: boolean
}

const AuthContext = createContext<string | null>(undefined)



export const fetchAuthToken = async () => {

  const res = await fetch("/api/refresh_token")
  if (res.status !== 200) {
    Router.push("/login")
  }
  const { auth_token } = await res.json()
  console.log({ auth_token })
  return auth_token
}

const jwtPromise = fetchAuthToken()

export const Page = ({ requireAuth, children }: Props) => {

  const [authToken, setAuthToken] = useState<string | null>(null)

  useEffect(() => {
    jwtPromise
      .then(setAuthToken)
    const interval = setInterval(() => {
      fetchAuthToken()
        .then(setAuthToken)
    }, 5 * 60 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])


  const apolloClient = useMemo(() => new ApolloClient({
    uri: "/api/graphql",
    request: async (operation: Operation) => {
      if (authToken) {
        operation.setContext({
          headers: {
            Authorization: `Bearer ${authToken}`
          },
        })
      } else if (requireAuth) {
        const authToken = await jwtPromise
        operation.setContext({
          headers: {
            Authorization: `Bearer ${authToken}`
          },
        })
      }
    },
    onError: ({ response, operation }) => {
      if (response && response.errors) {
        console.error(response, operation);
      }
    },
    cache: new InMemoryCache({
      dataIdFromObject: object => object.id,
    }),
    fetch,
  }), [authToken])
  return (
    <AuthContext.Provider value={authToken}>
      <ApolloProvider client={apolloClient}>
        <Global styles={globalStyles} />
        {children}
      </ApolloProvider >
    </AuthContext.Provider>
  )
}
