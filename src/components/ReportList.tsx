import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import Link from "./Link";
import { Report } from "../reports";
import * as Slide from "./Slides/Slide";
import NewPage from "./NewSlide";
import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";
import { OperationVariables } from "apollo-boost";

const PageWrap = styled.div`
  display: flex;
  min-height: 100vh;
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

const FETCH_REPORTS = gql`
  {
    reports @client {
      id
      title
      slides {
        id
        template
        title
        subtitle
      }
    }
  }
`;

export default () => (
  <PageWrap>
    <Header title="Choose a report or create a new  " />
    <Main>
      <Tile>
        <NewPage onClick={() => {}} />
      </Tile>
      <Query query={FETCH_REPORTS}>
        {({ loading, error, data }) => {
          console.log("RES", loading, error, data);
          if (loading) return <h1>Loading</h1>;
          if (error) return <h1>Error</h1>;
          return data.reports.map((report: Report, i: number) => (
            <Link to={`/reports/${report.id}`} key={i}>
              <Tile>
                <Slide.Slide slide={report.slides[0]} />
              </Tile>
            </Link>
          ));
        }}
      </Query>
    </Main>
  </PageWrap>
);
