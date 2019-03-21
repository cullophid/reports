import React, { useEffect } from "react"
import { navigateTo } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigateTo("/reports")
  }, [])
  return null
}

export default IndexPage
