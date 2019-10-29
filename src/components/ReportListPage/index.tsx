import { Text, Title } from "..//Typography";
import styled from "@emotion/styled";
import Link from "next/link";
import {
  useReportListGetQuery,
  useReportListCreateReportMutation
} from "../../codegen/client";
import { Button } from "..//Button";
import { useRouter } from "next/router";
import { Slide } from "..//Slide";
import { Crumbs, CrumbLink, CrumbTitle } from "..//Crumbs";
import { Header } from "../Header";

export const ReportListPage = () => {
  const router = useRouter();
  const reportsRequest = useReportListGetQuery();

  const [createReport, createReportRequest] = useReportListCreateReportMutation(
    {
      onCompleted: res => {
        router.push(`/reports/${res.createReport.id}`);
      }
    }
  );
  const reports = reportsRequest.data && reportsRequest.data.reports;

  return (
    <Layout>
      <Header>
        <Crumbs>
          <CrumbLink href="/">Home</CrumbLink>
          <CrumbTitle>Reports</CrumbTitle>
        </Crumbs>
        <CreateReportButton
          disabled={createReportRequest.loading}
          onClick={() =>
            createReport({
              variables: {
                title: "Untitled"
              }
            })
          }
          name="CreateReport"
        >
          New
        </CreateReportButton>
      </Header>
      <Main>
        {reportsRequest.loading && <Text>...</Text>}
        {reports && (
          <List>
            {reports.map(report => (
              <Report
                key={report.id}
                onClick={e => {
                  const location = `/reports/edit?id=${report.id}`;
                  if (e.nativeEvent.metaKey || e.nativeEvent.ctrlKey) {
                    window.open(location);
                  } else {
                    router.push(location);
                  }
                }}
              >
                <Slide width={report.width} height={report.height}></Slide>
                <ReportActions>
                  <Link href={`/reports/edit?id=${report.id}`}>
                    <a>
                      <Title color="white" fontWeight="bold">
                        {report.title}
                      </Title>
                    </a>
                  </Link>
                </ReportActions>
              </Report>
            ))}
          </List>
        )}
      </Main>
    </Layout>
  );
};

const CreateReportButton = styled(Button)`
  justify-self: end;
`;

const Layout = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr;
  background: #f5f5f5;
`;
const Main = styled.main`
  display: grid;
  padding: 64px 5%;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 400px));
  place-content: start center;
  grid-gap: 5%;
  padding: 0;
  width: 100%;
`;

const Report = styled.li`
  list-style-type: none;
  position: relative;
`;

const ReportActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  margin: 0;
  padding: 8px 16px;
  box-sizing: border-box;
  /* background: rgba(255, 255, 255, 0.3); */
  text-shadow: 0 1px 3px black;
`;
