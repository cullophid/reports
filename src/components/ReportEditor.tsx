import * as React from "react";
import { Report } from "../reports";
import styled, { keyframes } from "styled-components";
import Spinner from "./Spinner";
import * as Page from "./Pages/Page";
import { dispatch } from "../store";
import { ReportEditor } from "../app";
import PageList from "./PageList";
import Header from "./Header";
import { ReportPage } from "../reports";
import PageTemplates from "./PageTemplates";
import { Column } from "./Layout";

const slideOut = keyframes`
  from {
    transform:translateX(0)
  }
  to {
    transform:translateX(100%)
  }
`;

const PageWrap = styled.main`
  background: #eee;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;
const Aside = styled.aside`
  flex-grow: 0;
  flex-shrink: 0;
  width: 300px;
  box-sizing: border-box;
  background: #ccc;
  transition: width 300ms;
  box-shadow: -1px 0 4px rgba(0, 0, 0, 0.4) inset;
`;
const Stage = styled(Column)`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 200ms;
  animation-name: ${slideOut};
`;

const Save = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #88bc32;
  border-radius: 1000px;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;

type Props = {
  reportEditor: ReportEditor | null;
};

export default class Editor extends React.PureComponent<Props, {}> {
  render() {
    if (this.props.reportEditor === null)
      return <Spinner color="black" size={48} />;
    const { reportEditor } = this.props;
    const { report, unsavedChanges } = reportEditor;
    const selectedPage = report.pages[reportEditor.selectedPage];
    const update = (reportEditor: ReportEditor) =>
      dispatch({
        type: "ReportEditorUpdate",
        reportEditor
      });
    const updateReport = (report: Report) =>
      dispatch({
        type: "ReportEditorUpdate",
        reportEditor: {
          ...reportEditor,
          unsavedChanges: true,
          report
        }
      });
    return (
      <PageWrap>
        <Aside>
          <Header title={report.title} />
          <PageList
            report={report}
            show={!reportEditor.showNewSlideModal}
            updateReport={updateReport}
            onNewSlide={() =>
              update({ ...reportEditor, showNewSlideModal: true })
            }
            onSelect={(page: number) =>
              update({ ...reportEditor, selectedPage: page })
            }
          />
          <PageTemplates
            show={reportEditor.showNewSlideModal}
            selectPageTemplate={(page: ReportPage) =>
              update({
                ...reportEditor,
                selectedPage: report.pages.length,
                report: { ...report, pages: [...report.pages, page] },
                showNewSlideModal: false
              })
            }
          />
        </Aside>
        <Stage
          spacing="15px"
          style={
            reportEditor.showNewSlideModal
              ? { animationPlayState: "running" }
              : {
                  animationPlayState: "running",
                  animationDirection: "reverse",
                  animationDelay: "400ms"
                }
          }
        >
          {selectedPage ? (
            <Page.Editor
              page={selectedPage}
              onChange={(page) =>
                updateReport({
                  ...report,
                  pages: report.pages.map(
                    (p, i) => (i === reportEditor.selectedPage ? page : p)
                  )
                })
              }
            />
          ) : null}
        </Stage>
        {unsavedChanges ? (
          <Save onClick={() => dispatch({ type: "ReportSave", report })}>
            SAVE
          </Save>
        ) : null}
      </PageWrap>
    );
  }
}
