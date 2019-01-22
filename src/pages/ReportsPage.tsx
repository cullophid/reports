import * as React from "react";
import styled from "styled-components";
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
        <>
          <NewReport />
          {result.data.reports.map((report: report) => (
            <Link to={`/reports/${report.id}`} key={report.id}>
              <Slide slide={report.slides[0]} />
            </Link>
          ))}
        </>
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
        <NewButton onClick={() => create({})}>
          <img style={{ height: 50 }} src={plus} />
        </NewButton>
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
  display: grid;
  min-height: 100vh;
  grid-template-rows: 150px auto;
  background: #eee;
`;
const Main = styled.main`
  box-sizing: border-box;
  padding: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 32px;
`;

const NewButton = styled.button`
  ${center};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 8px dashed #88bc32;
`;
