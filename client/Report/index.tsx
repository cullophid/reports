import { useRouter } from "next/router"
import { useReportGetQuery } from "../codegen/graphql";
import styled from "@emotion/styled";
import { ErrorBox } from "../components/ErrorBox";
import { Crumbs, CrumbTitle, CrumbLink } from "../components/Crumbs";
import css from "@emotion/css";
import { Slide } from "../components/Slide";
import { Title } from "../components/Typography";

export const ReportPage = () => {
  const router = useRouter();

  const reportId = router.query.reportId as string

  console.log({ reportId })
  const reportQuery = useReportGetQuery({
    variables: {
      id: reportId
    }
  })

  const report = reportQuery.data && reportQuery.data.report

  console.log(reportQuery)
  return (
    <Layout>
      <Crumbs css={css`
        position:absolute;
        top: 32px;
        left: 32px;
      `}>
        <CrumbLink href="/reports">Reports</CrumbLink>
        <CrumbTitle>{report ? report.title : "..."}</CrumbTitle>
      </Crumbs>
      <Toolbar />
      {report &&
        <Slide width={report.width} height={report.height}>
        </Slide>
      }

      {reportQuery.error && <ErrorBox error={reportQuery.error} />}

    </Layout>
  )

}


const Layout = styled.div`
  display:grid;
  height:100%;
  padding: 96px 10%;
  grid-gap: 32px;
  background:#f5f5f5;
  grid-template-rows: auto 1fr;
  place-content: start stretch;
`

const Toolbar = styled.div`
  height:60px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  border-radius: 3px;
  background:white;
`