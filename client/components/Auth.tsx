import React, { ReactChild, createContext, useContext, useState, useEffect } from "react"
import fetch from "isomorphic-fetch"

import Router from "next/router"
type Props = {
  children: ReactChild
}

const AuthContext = createContext<string | null>(undefined)



const fetchAuthToken = async () => {
  const res = await fetch("/api/refresh_token")
  if (res.status !== 200) {
    Router.push("/login")
  }
  const { auth_token } = await res.json()
  console.log({ auth_token })
  return auth_token
}

export const AuthProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState<string | null>(null)
  useEffect(() => {
    fetchAuthToken()
      .then(setAuthToken)

    const interval = setInterval(() => {
      fetchAuthToken()
        .then(setAuthToken)
    }, 5 * 60 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <AuthContext.Provider value={authToken}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => useContext(AuthContext)