import React from "react"
import { Global, css } from "@emotion/core"

const global = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600");
  @import url("https://fonts.googleapis.com/css?family=Indie+Flower");
  body {
    margin: 0;
    background: #f5f5f5;
    font-family: "Roboto", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 200;
    margin: 0;
    font-family: "Roboto";
  }
  a,
  a:visited,
  a:active {
    color: inherit;
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
