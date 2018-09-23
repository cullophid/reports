import * as React from "react";
import { Report } from "../../services/report.service";
import styled from "styled-components";
import Spinner from "../Spinner";
import Header from "../Header";
import { FrontPage, FrontPageEditor } from "../Slides/FrontPage";
import NewSlide from "../Slides/NewSlide";
import { dispatch } from "../../store";
import { ReportEditor } from "../../app";

const Page = styled.main`
  background: #eee;
  flex: 1;
  height: 100vh;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;
const Aside = styled.aside`
  box-sizing: border-box;
  background: #686e75;
  width: 300px;
  flex: 0 0 300px;
  box-shadow: -1px 0 4px rgba(0, 0, 0, 0.4) inset;
`;
const SlideList = styled.div`
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: 15px;
  }
  & > *:last-child {
    margin-bottom:0;
`;

const Stage = styled.div`
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

export default (props: Props) => {
  if (props.reportEditor === null) return <Spinner color="black" size={48} />;
  const { report, unsaveChanges } = props.reportEditor;

  const update = (report: Report) =>
    dispatch({
      type: "ReportEditorUpdate",
      reportEditor: { report, unsaveChanges: true }
    });
  return (
    <Page>
      <Aside>
        <Header title="" />
        <SlideList>
          <FrontPage page={report.frontPage} />
          <NewSlide onClick={console.log} />
        </SlideList>
      </Aside>
      <Stage>
        <FrontPageEditor
          page={report.frontPage}
          onChange={(frontPage) => update({ ...report, frontPage })}
        />
      </Stage>
      {unsaveChanges ? (
        <Save onClick={() => dispatch({ type: "ReportSave", report })}>
          SAVE
        </Save>
      ) : null}
    </Page>
  );
};
