import * as React from "react";
import styled from "react-emotion";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import { report, reportQuery } from "../models/reports";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router";
import * as Remote from "../models/remote";
import gql from "graphql-tag";
import Slide from "../components/Slide";
import plus from "../plus.svg";
import { center } from "../styles";
import { useQuery, useMutation } from "../hooks";

type State = {
  reports: Remote.t<report[], string>;
};

const FETCH_REPORTS = gql`
  {
    reports ${reportQuery}
  }
`;

const ReportsList = () => {
  const result = useQuery<{ reports: report[] }>({ query: FETCH_REPORTS });
  switch (result.status) {
    case "Loading":
      return <Spinner size={24} color="primary" />;
    case "Error":
      return <p> Could not fetch reports</p>;
    case "Ready":
      return (
        <React.Fragment>
          <NewReport />
          {result.data.reports.map((report: report) => (
            <Link to={`/reports/${report.id}`} key={report.id}>
              <Tile>
                <Slide slide={report.slides[0]} />
              </Tile>
            </Link>
          ))}
        </React.Fragment>
      );
  }
};

const CREATE_REPORT = gql`
  mutation {
    createReport(title: "Untitled") ${reportQuery}
  }
`;

const NewReport = () => {
  const [create, result] = useMutation<{ createReport: report }, {}>({
    mutation: CREATE_REPORT,
    refetchQueries: () => [{ query: FETCH_REPORTS }]
  });
  switch (result.status) {
    case "Ready":
      return <Redirect push to={`/reports/${result.data.createReport.id}`} />;
    case "Error":
      console.log(result.error);
    default:
      return (
        <Tile>
          <NewButton onClick={() => create({})}>
            <img style={{ height: 50 }} src={plus} />
          </NewButton>
        </Tile>
      );
  }
};

const ReportsPage = () => {
  return (
    <Page>
      <Menu />
      <Main>
        <ReportsList />
      </Main>
    </Page>
  );
};

export default ReportsPage;

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: stretch;
  background: #eee;
`;
const Main = styled.main`
  flex: 1;
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Tile = styled.div`
  margin: 15px;
  width: 228px;
  height: 128.25px;
`;

const NewButton = styled.button`
  ${center};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 8px dashed #88bc32;
`;
