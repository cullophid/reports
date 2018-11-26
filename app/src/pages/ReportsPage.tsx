import * as React from "react";
import { css } from "emotion";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import { report, reportQuery } from "../reports";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router";
import * as Remote from "../remote";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import Slide from "../components/Slide";
import plus from "../plus.svg";
import { center } from "../styles";

const Styles = {
  pageWrap: css`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: stretch;
    background: #eee;
  `,

  main: css`
    flex: 1;
    padding: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  `,

  tile: css`
    margin: 15px;
    width: 228px;
    height: 128.25px;
  `,

  newButton: css`
    ${center};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 8px dashed #88bc32;
  `
};

type State = {
  reports: Remote.t<report[], string>;
};

const FETCH_REPORTS = gql`
  {
    reports ${reportQuery}
  }
`;

const ReportsList = () => (
  <Query query={FETCH_REPORTS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner size={24} color="primary" />;
      if (error) {
        return <p> Could not fetch reports</p>;
      }
      return (
        <React.Fragment>
          <NewReport />
          {data.reports.map((report: report) => (
            <Link to={`/reports/${report.id}`} key={report.id}>
              <div css={Styles.tile}>
                <Slide slide={report.slides[0]} />
              </div>
            </Link>
          ))}
        </React.Fragment>
      );
    }}
  </Query>
);

const CREATE_REPORT = gql`
  mutation {
    createReport(title: "Untitled") ${reportQuery}
  }
`;

const NewReport = () => (
  <Mutation
    mutation={CREATE_REPORT}
    refetchQueries={() => [{ query: FETCH_REPORTS }]}
  >
    {(create, { loading, error, data }) => {
      if (error) {
        console.log(error);
      }
      if (data) return <Redirect to={`/reports/${data.createReport.id}`} />;
      return (
        <div css={Styles.tile}>
          <button css={Styles.newButton} onClick={() => create({})}>
            <img style={{ height: 50 }} src={plus} />
          </button>
        </div>
      );
    }}
  </Mutation>
);

const ReportsPage = () => {
  return (
    <div css={Styles.pageWrap}>
      <Menu />
      <main css={Styles.main}>
        <ReportsList />
      </main>
    </div>
  );
};

export default ReportsPage;
