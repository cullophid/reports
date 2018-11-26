import * as React from "react";
import { css, keyframes } from "emotion";
import Menu from "../components/Menu";
import { Query, QueryResult, Mutation, MutationResult } from "react-apollo";
import gql from "graphql-tag";
import ReportEditor from "../components/ReportEditor/ReportEditor";
import { Spinner } from "../components/Spinner";
import { report, cleanReport, reportQuery } from "../reports";
import { debounce } from "../util";

const Styles = {
  pageWrap: css`
    background: #eee;
    height: 100vh;
    padding-top: 80px;
  `,

  saving: css`
    position: fixed;
    top: 40px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};

const FETCH_REPORT = gql`
  query FetchReport($reportId: ID!) {
    report(id: $reportId) ${reportQuery}
  }
`;

const UPDATE_REPORT = gql`
  mutation UpdateReport($report: ReportUpdate!) {
    updateReport(report: $report) ${reportQuery}
  }
`;
type Props = {
  reportId: string;
  slideId: string | null;
};

const ReportEditorPage = (props: Props) => {
  const { reportId, slideId } = props;
  return (
    <Query query={FETCH_REPORT} variables={{ reportId }}>
      {(reportRes: QueryResult<{ report: report }>) => {
        const report = reportRes.data && reportRes.data.report;
        return (
          <Mutation mutation={UPDATE_REPORT}>
            {(
              updateReport,
              updateRes: MutationResult<{ updateReport: report }>
            ) => {
              const saveReport = debounce(
                (report: report) =>
                  updateReport({
                    variables: { report: cleanReport(report) }
                  }),
                500
              );
              return (
                <React.Fragment>
                  {updateRes.loading && (
                    <div css={Styles.saving}>
                      <Spinner />
                    </div>
                  )}
                  <div css={Styles.pageWrap}>
                    <Menu />
                    {reportRes.loading && <Spinner />}
                    {report && (
                      <ReportEditor
                        report={report}
                        slideId={slideId}
                        saveReport={saveReport}
                      />
                    )}
                  </div>
                </React.Fragment>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};
export default ReportEditorPage;
