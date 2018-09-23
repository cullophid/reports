import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NewButton from "../components/NewButton";
import Link from "../components/Link";
import { Report } from "../services/report.service";
import { dispatch } from "../store";
const Page = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: stretch;
  background: #eee;
`;

const Main = styled.main`
  flex: 1;
  padding: 30px 55px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Report = styled.div`
  display: flex;
  margin: 15px;
  align-items: center;
  justify-content: center;
  width: 228px;
  height: 138px;
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
`;
const ReportTitle = styled.span`
  font-family: Montserrat;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
`;

type Props = {
  reports: Report[];
};

export default (props: Props) => (
  <Page>
    <Header title="Choose a report or create a new  " />
    <Main>
      <NewButton onClick={() => dispatch({ type: "ReportCreate" })} />
      {props.reports.map((report, i) => (
        <Link to={`/reports/${report.id}`}>
          <Report key={i}>
            <ReportTitle>{report.name}</ReportTitle>
          </Report>
        </Link>
      ))}
    </Main>
  </Page>
);
