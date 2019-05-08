import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    console.log("INDEX")
    navigate("/reports")
  }, [])
  return null
}

export default IndexPage
