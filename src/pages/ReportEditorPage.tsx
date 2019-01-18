import * as React from "react";
import styled, { keyframes } from "react-emotion";
import Menu from "../components/Menu";
import gql from "graphql-tag";
import ReportEditor from "../components/ReportEditor/ReportEditor";
import { Spinner } from "../components/Spinner";
import { report, cleanReport, reportQuery } from "../models/reports";
import { debounce } from "../util";
import { useQuery, useMutation } from "../hooks";

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
  const reportResult = useQuery<{ report: report }>({
    query: FETCH_REPORT,
    variables: { reportId }
  });
  const report = reportResult.status === "Ready" && reportResult.data.report;
  const [updateReport, updateReportResult] = useMutation<
    { updateReport: report },
    { report: report }
  >({
    mutation: UPDATE_REPORT
  });
  const saveReport = debounce(
    (report: report) => updateReport({ report: cleanReport(report) }),
    500
  );
  return (
    <React.Fragment>
      {updateReportResult.status === "Loading" && (
        <Saving>
          <Spinner />
        </Saving>
      )}
      <Page>
        <Menu />
        {reportResult.status === "Loading" && <Spinner />}
        {report && (
          <ReportEditor
            report={report}
            slideId={slideId}
            updateReport={saveReport}
          />
        )}
      </Page>
    </React.Fragment>
  );
};
export default ReportEditorPage;

const Page = styled.div`
  background: #eee;
  height: 100vh;
  padding-top: 80px;
`;

const Saving = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
