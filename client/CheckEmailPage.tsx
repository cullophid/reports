import React from "react"
import styled from "styled-components"
import { Text } from "../client/components/Typography"


export const CheckEmailPage = () => {

  return (
    <Layout>
      <Text as="p">
        We have sent you an email with a link to sign in.
      </Text>
    </Layout>
  )
}

const Layout = styled.div`
  height:100%;
  display:grid;
  place-content: center center;
`