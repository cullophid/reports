import {
  useReportGetQuery,
  ReportUpdateMutationVariables,
  useReportUpdateMutation,
  ReportGetDocument,
  ReportFragment,
  ReportUpdateMutation
} from "../../codegen/client";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "debounce";

export const useReport = (id: string) => {
  const reportQuery = useReportGetQuery({
    variables: {
      id
    }
  });

  const [undoHistory, setUndoHistory] = useState<
    ReportUpdateMutationVariables["report"][]
  >([]);

  const [undoHistoryIndex, setUndoHistoryIndex] = useState<number>(0);
  const [updateReport, updateMutation] = useReportUpdateMutation();

  useEffect(() => {
    if (
      reportQuery.data &&
      reportQuery.data.report &&
      undoHistory.length === 0
    ) {
      setUndoHistory([reportQuery.data.report]);
    }
  }, [reportQuery.data]);

  const undo = () => {
    if (undoHistoryIndex === 0) {
      return;
    }
    const newIndex = undoHistoryIndex - 1;
    update(undoHistory[newIndex], false);
    setUndoHistoryIndex(newIndex);
  };
  const redo = () => {
    if (undoHistory.length <= undoHistoryIndex + 1) {
      return;
    }
    const newIndex = undoHistoryIndex + 1;
    update(undoHistory[newIndex], false);
    setUndoHistoryIndex(newIndex);
  };

  const save = useCallback(
    debounce(
      (
        report: ReportUpdateMutationVariables["report"],
        updateHistory: boolean
      ) => {
        if (updateHistory) {
          setUndoHistory([
            ...undoHistory.slice(0, undoHistoryIndex + 1),
            report
          ]);
          setUndoHistoryIndex(undoHistoryIndex + 1);
        }

        const { __typename, slides, ...reportData } = report as ReportFragment;
        return updateReport({
          variables: {
            report: {
              ...reportData,
              slides: slides.map(({ __typename, charts, ...slideData }) => {
                return {
                  ...slideData,
                  charts: charts.map(({ __typename, ...chartData }) => {
                    return chartData;
                  })
                };
              })
            }
          }
        });
      }
    ),
    [updateReport]
  );

  const update = (
    report: ReportUpdateMutationVariables["report"],
    updateHistory: boolean
  ) => {
    reportQuery.client.writeQuery({
      query: ReportGetDocument,
      variables: { id: report.id },
      data: {
        report: {
          ...report,
          __typename: "Report",
          slides: report.slides.map(slide => ({
            __typename: "Slide",
            ...slide,
            charts: slide.charts.map(chart => ({
              __typename: "Chart",
              ...chart
            }))
          }))
        }
      }
    });
    save(report, updateHistory);
  };

  return {
    ...reportQuery,
    loading: reportQuery.loading || updateMutation.loading,
    error: reportQuery.error || updateMutation.error,
    updateMutation,
    update: (report: ReportUpdateMutationVariables["report"]) => {
      return update(report, true);
    },
    undo,
    redo
  };
};
