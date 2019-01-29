import React, { useState, useReducer, useEffect, useCallback } from "react";
import styled from "styled-components";
import { report, slide, newSlide } from "../../models/reports";
import { SlideEditor } from "./SlideEditor";
import { editorSelection } from "../../models/editorSelection";
import SlideList from "./SlideList";

type Props = {
  report: report;
  slideId: string | null;
  updateReport: (report: report) => void;
};

type State = {
  report: report;
  currentSlideId: string;
  selection: editorSelection;
  showTemplates: boolean;
  unsavedChanges: boolean;
};

const ReportEditor = (props: Props) => {
  const currentSlide =
    props.report.slides.find((s) => s.id === props.slideId) ||
    props.report.slides[0];

  const [state, setState] = useState<State>({
    report: props.report,
    currentSlideId: currentSlide.id,
    selection: { type: "None" },
    showTemplates: false,
    unsavedChanges: false
  });

  const { report } = state;

  const updateReport = (report: report) => {
    setState({ ...state, report });
    props.updateReport(report);
  };

  const deselect = () => setState({ ...state, selection: { type: "None" } });

  const updateSelection = (selection: editorSelection) => {
    setState({ ...state, selection });
  };

  const addSlide = (slide: slide) => {
    updateReport({ ...report, slides: [...report.slides, slide] });
  };

  const updateSlide = (slide: slide) => {
    updateReport({
      ...report,
      slides: report.slides.map((s: slide) => (s.id === slide.id ? slide : s))
    });
  };

  const selectedSlide = report.slides.find(
    (s: slide) => s.id === state.currentSlideId
  );
  return (
    <Main
      style={state.showTemplates ? { display: "none" } : {}}
      onMouseDown={deselect}
    >
      <SlideList
        currentSlideId={state.currentSlideId}
        slides={report.slides}
        selection={state.selection}
        selectSlide={(slide: slide) => {
          setState({
            ...state,
            selection: { type: "Slide", slideId: slide.id },
            currentSlideId: slide.id
          });
        }}
        newSlide={() => addSlide(newSlide())}
      />
      <Stage>
        {selectedSlide && (
          <SlideEditor
            slide={selectedSlide}
            selection={state.selection}
            updateSlide={updateSlide}
            updateSelection={updateSelection}
          />
        )}
      </Stage>
    </Main>
  );
};
export default ReportEditor;

const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 300px auto;
  padding: 0 16px;
  grid-column-gap: 30px;
  min-height: 0;
`;

const Stage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  box-sizing: border-box;
  padding: 30px 0;
  align-items: center;
  overflow: visible;
`;
