
import React from "react";
import styled from "@emotion/styled"
import { Box } from "../components/Box"
import Link from "next/link"
import { Text } from "../components/Typography";
export const HomePage = () => {
  return (
    <Layout>
      <Box p={2}>
        <Link href="/reports">
          <Text as="a">Reports</Text>
        </Link>
      </Box>
    </Layout>
  )
}

const Layout = styled.div`
  display:grid;
  height:100%;
  grid-template-rows: auto 1fr;
`
