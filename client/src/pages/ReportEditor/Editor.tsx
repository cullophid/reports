import React, { useState, useReducer, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ReportType, SlideType, newSlide } from "../../models/reports";
import { SlideEditor } from "./SlideEditor";
import { EditorSelectionType } from "../../models/editorSelection";
import SlideList from "./SlideList";

type Props = {
  report: ReportType;
  slideId: string | null;
  updateReport: (report: ReportType) => void;
};

type State = {
  report: ReportType;
  currentSlideId?: string;
  selection: EditorSelectionType;
  showTemplates: boolean;
  unsavedChanges: boolean;
};

export const ReportEditor = (props: Props) => {
  const currentSlide =
    props.report.slides.find((s) => s.id === props.slideId) ||
    props.report.slides[0];

  const [state, setState] = useState<State>({
    report: props.report,
    currentSlideId: currentSlide && currentSlide.id,
    selection: { type: "None" },
    showTemplates: false,
    unsavedChanges: false
  });

  const [showTemplates, setShowTemplates] = useState(false);

  const { report } = state;

  const updateReport = (report: ReportType) => {
    setState({ ...state, report });
    props.updateReport(report);
  };

  const deselect = () => setState({ ...state, selection: { type: "None" } });

  const updateSelection = (selection: EditorSelectionType) => {
    setState({ ...state, selection });
  };

  const addSlide = (slide: SlideType) => {
    updateReport({ ...report, slides: [...report.slides, slide] });
  };

  const updateSlide = (slide: SlideType) => {
    updateReport({
      ...report,
      slides: report.slides.map((s: SlideType) =>
        s.id === slide.id ? slide : s
      )
    });
  };

  const selectedSlide = report.slides.find(
    (s: SlideType) => s.id === state.currentSlideId
  );
  return (
    <Main
      style={state.showTemplates ? { display: "none" } : {}}
      onMouseDown={deselect}
    >
      <SlideList
        show={!showTemplates}
        currentSlideId={state.currentSlideId}
        slides={report.slides}
        selection={state.selection}
        selectSlide={(slide: SlideType) => {
          setState({
            ...state,
            selection: { type: "Slide", slideId: slide.id },
            currentSlideId: slide.id
          });
        }}
        newSlide={() => setShowTemplates(true)}
      />
      <Stage show={!showTemplates}>
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

const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 120px 1fr;
  grid-template-areas:
    "header header"
    "slide-list stage";
  padding: 0 16px;
  grid-column-gap: 30px;
  min-height: 0;
`;

const Stage = styled.div<{ show: boolean }>`
  transition: transform 300ms;
  transform: translatex(${(p) => (p.show ? "0" : "100%")});
  flex: 1;
  grid-area: stage;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  box-sizing: border-box;
  padding: 30px 0;
  align-items: center;
  overflow: visible;
`;
