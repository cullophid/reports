import React from "react"
import { Global, css } from "@emotion/core"

const global = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
  body {
    margin: 0;
    background: #f5f5f5;
    font-family: "Roboto", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`

type props = {
  children: React.ReactNode
}

export const Page = ({ children }: props) => (
  <>
    <Global styles={global} />
    {children}
  </>
)
