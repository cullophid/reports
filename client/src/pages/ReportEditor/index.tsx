import * as React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu";
import gql from "graphql-tag";
import { ReportEditor } from "./Editor";
import { Spinner } from "../../components/Spinner";
import { ReportType, cleanReport, reportQuery } from "../../models/reports";
import { debounce } from "../../util";
import { useQuery, useMutation } from "../../hooks";
import { Page } from "../../components/Page";

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

export const ReportEditorPage = (props: Props) => {
  const { reportId, slideId } = props;
  const reportResult = useQuery<{ report: ReportType }>({
    query: FETCH_REPORT,
    variables: { reportId }
  });
  const report = reportResult.status === "Ready" && reportResult.data.report;
  const [updateReport, updateReportResult] = useMutation<
    { updateReport: ReportType },
    { report: ReportType }
  >({
    mutation: UPDATE_REPORT
  });
  const saveReport = debounce(
    (report: ReportType) => updateReport({ report: cleanReport(report) }),
    500
  );
  return (
    <>
      {updateReportResult.status === "Loading" && (
        <Saving>
          <Spinner />
        </Saving>
      )}
      <Page page="Reports">
        {reportResult.status === "Loading" && <Spinner />}
        {report && (
          <ReportEditor
            report={report}
            slideId={slideId}
            updateReport={saveReport}
          />
        )}
      </Page>
    </>
  );
};

const Saving = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
