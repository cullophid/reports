import { Text } from "../components/Typography"
import styled from "styled-components"
import Link from "next/link"
import { useReportListGetQuery } from "../codegen/graphql"
export const ReportListPage = () => {
  const reportsRequest = useReportListGetQuery();
  const reports = reportsRequest.data && reportsRequest.data.reports

  return (
    <Layout>
      <Text as="p">
        report list page
    </Text>
      <Link href="/">
        <Text as="a">Home</Text>
      </Link>
      {reportsRequest.loading && <Text>...</Text>}
      {reports && (
        <ul>
          {reports.map(report =>
            <li key={report.id}>
              <Text> {report.title}</Text>
            </li>
          )}
        </ul>
      )}
    </Layout>
  )
}

const Layout = styled.div`
  display:grid;
  height: 100%;
  place-content: center center;
`