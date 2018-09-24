import * as React from "react";
import { Report } from "../reports";
import styled from "styled-components";
import Spinner from "./Spinner";
import { FrontPageEditor } from "./Slides/FrontPage";
import { dispatch } from "../store";
import { ReportEditor } from "../app";
import SlideList from "./SlideList";
import Header from "./Header";
import NewSlide from "./NewSlide";

const Page = styled.main`
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
  background: #686e75;
  transition: width 300ms;
  box-shadow: -1px 0 4px rgba(0, 0, 0, 0.4) inset;
`;
const Stage = styled.div`
  transition: transform 300ms;
  transform: translateX(0);
  flex-grow: 1;
  flex-shrink: 1;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Page>
        <Aside>
          <Header title={report.title} />
          <SlideList
            report={report}
            show={!reportEditor.showNewSlideModal}
            updateReport={updateReport}
            onNewSlide={console.log}
          />
        </Aside>
        <Stage
          style={
            reportEditor.showNewSlideModal
              ? { transform: "translateX(100%)" }
              : {}
          }
        >
          <FrontPageEditor
            page={report.frontPage}
            onChange={(frontPage) => updateReport({ ...report, frontPage })}
          />
        </Stage>
        {unsavedChanges ? (
          <Save onClick={() => dispatch({ type: "ReportSave", report })}>
            SAVE
          </Save>
        ) : null}
      </Page>
    );
  }
}
