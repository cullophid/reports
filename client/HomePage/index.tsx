
import React from "react";
import styled from "styled-components"
import { Box } from "../components/Box"
import { Button } from "../components/Button";
import { AuthProvider } from "../components/Auth";
import Link from "next/link"
import { Text } from "../components/Typography";
export const HomePage = () => {
  return (
    <AuthProvider>
      <Layout>
        <Box p={2}>
          <Link href="/reports">
            <Text as="a">Reports</Text>
          </Link>
        </Box>
      </Layout>
    </AuthProvider>
  )
}

const Layout = styled.div`
  display:grid;
  height:100%;
  grid-template-rows: auto 1fr;
`
