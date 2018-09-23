import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import NewButton from "./NewButton";
import Link from "./Link";
import { Report } from "../services/report.service";
import { dispatch } from "../store";
import { FrontPage } from "./Slides/FrontPage";
import NewSlide from "./Slides/NewSlide";
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

const Tile = styled.div`
  margin: 15px;
  width: 228px;
  height: 138px;
`;

type Props = {
  reports: Report[];
};

export default (props: Props) => (
  <Page>
    <Header title="Choose a report or create a new  " />
    <Main>
      <Tile>
        <NewSlide onClick={() => dispatch({ type: "ReportCreate" })} />
      </Tile>
      {props.reports.map((report, i) => (
        <Link to={`/reports/${report.id}`}>
          <Tile key={i}>
            <FrontPage page={report.frontPage} />
          </Tile>
        </Link>
      ))}
    </Main>
  </Page>
);
