
import React from "react";
import styled from "styled-components"
import { Box } from "../src/components/Box"
import { Button } from "../src/components/Button";
const Home = () => {
  return (<Layout>
    <Box p={2}>
      <Button >Hello world</Button>
    </Box>
  </Layout>
  )
}

export default Home

const Layout = styled.div`
  display:grid;
  height:100%;
  grid-template-rows: auto 1fr;
`
