import { Text } from "../components/Typography"
import styled from "styled-components"
import Link from "next/link"
export const ReportListPage = () => {


  return (
    <Layout>
      <Text as="p">
        report list page
    </Text>
      <Link href="/">
        <Text as="a">Home</Text>
      </Link>
    </Layout>
  )
}

const Layout = styled.div`
  display:grid;
  height: 100%;
  place-content: center center;
`