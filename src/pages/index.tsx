import React, { useEffect } from "react"
import { navigateTo } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    console.log("INDEX")
    navigateTo("/reports")
  }, [])
  return null
}

export default IndexPage
