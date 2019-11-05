import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { ErrorBox } from "..//ErrorBox";
import { Crumbs, CrumbTitle, CrumbLink } from "../Crumbs";
import { Header, HeaderSection } from "../Header";
import { Icon } from "../Icon";
import { FlatButton, Button } from "../Button";
import { useState, KeyboardEvent, useRef, useReducer } from "react";
import { css, keyframes } from "@emotion/core";
import cuid from "cuid";

import { useReport } from "./useReport";
import useMeasure from "../../hooks/useMeasure";
import { ReportContextType, ReportContext, Tool } from "./reportContext";
import { Slide } from "./Slide";

const getModifiers = (e: KeyboardEvent) =>
  new Set(
    [
      e.nativeEvent.metaKey && "meta",
      e.nativeEvent.ctrlKey && "ctrl",
      e.nativeEvent.altKey && "alt",
      e.nativeEvent.shiftKey && "shift"
    ].filter(Boolean)
  );

export const ReportPage = () => {
  const router = useRouter();
  const reportId = router.query.id as string;
  const slide = router.query.slide as string;
  const contextValue = useState<ReportContextType>({
    tool: "select",
    selection: []
  });

  const [context, setContext] = contextValue;

  const reportQuery = useReport(reportId);
  const report = reportQuery.data && reportQuery.data.report;

  const sceneRef = useRef(null);

  const sceneSize = useMeasure(sceneRef);

  const scale =
    sceneSize && report ? (sceneSize.width * 0.8) / report.width : 1;

  const selectedSlide =
    report && (report.slides.find(s => s.id === slide) || report.slides[0]);

  return (
    <ReportContext.Provider value={contextValue}>
      <Layout
        tabIndex={-1}
        onKeyDown={e => {
          const modifiers = getModifiers(e);
          switch (e.key) {
            case "Escape":
              setContext({
                ...context,
                tool: "select",
                selection: context.tool === "select" ? [] : context.selection
              });
              return e.preventDefault();
            case "c":
              if (modifiers.size === 0) {
                setContext({ ...context, tool: "insert_chart" });
                return e.preventDefault();
              }
            case "Backspace": {
              if (report) {
                reportQuery.update({
                  ...report,
                  slides: report.slides.map(slide => ({
                    ...slide,
                    charts: slide.charts.filter(
                      chart =>
                        context.selection.some(
                          selection => selection === chart.id
                        ) === false
                    )
                  }))
                });
                return e.preventDefault();
              }
            }
            case "z":
              if (modifiers.has("meta") && modifiers.has("shift")) {
                reportQuery.redo();
                return e.preventDefault();
              }

              if (modifiers.has("meta")) {
                reportQuery.undo();
                return e.preventDefault();
              }
          }
        }}
      >
        {reportQuery.loading && <LoadingIndicator />}
        <Header>
          <HeaderSection>
            <Crumbs>
              <CrumbLink href="/">Home</CrumbLink>
              <CrumbLink href="/">Reports</CrumbLink>
              <CrumbTitle>{report ? report.title : "..."}</CrumbTitle>
            </Crumbs>

            <NewElements>
              <FlatButton
                name="insert_chart"
                onClick={() => setContext({ ...context, tool: "insert_chart" })}
                active={context.tool === "insert_chart"}
              >
                <Icon icon="insert_chart" />
              </FlatButton>
            </NewElements>
          </HeaderSection>
        </Header>
        <Scene scale={scale} ref={sceneRef} tool={context.tool}>
          {selectedSlide && report && (
            <Slide
              width={report.width}
              height={report.height}
              slide={selectedSlide}
              update={slide =>
                reportQuery.update({
                  ...report,
                  slides: report.slides.map(s =>
                    s.id === slide.id ? slide : s
                  )
                })
              }
            />
          )}
          {report && !selectedSlide && (
            <Center>
              <Button
                name="create slide"
                onClick={async () => {
                  const id = cuid();
                  await reportQuery.update({
                    ...report,
                    slides: [...report.slides, { id, charts: [] }]
                  });
                  router.replace(`/report?id=${reportId}&slide=${id}`);
                }}
              >
                Create You first Slide
              </Button>
            </Center>
          )}
          {reportQuery.error && <ErrorBox error={reportQuery.error} />}
        </Scene>
      </Layout>
    </ReportContext.Provider>
  );
};

const Center = styled.div`
  height: 100%;
  display: grid;
  place-content: center center;
`;

const NewElements = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 4px;
  place-content: center start;
`;

const Layout = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 32px;
  background: #f5f5f5;
  grid-template-rows: auto 1fr;
  place-content: start stretch;
  overflow: hidden;
`;

const Scene = styled.main<{ tool: Tool; scale: number }>`
  display: grid;
  width: 100%;
  place-content: center center;
  overflow: hidden;
  ${p => {
    switch (p.tool) {
      case "insert_chart":
        return css`
          cursor: crosshair;
        `;
    }
  }}
  & > * {
    transform: scale(${p => p.scale});
    transform-origin: 50% 50%;
  }
`;

const LoadingIndicator = () => (
  <LoadingWrapper>
    <LoadingDot delay={0}>.</LoadingDot>
    <LoadingDot delay={200}>.</LoadingDot>
    <LoadingDot delay={400}>.</LoadingDot>
  </LoadingWrapper>
);

const jumpAnimation = keyframes`
  from {
          opacity:0;
      }
  to {
          opacity:1;
      }
    `;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 32px;
  font-size: 2.5rem;
`;
const LoadingDot = styled.span<{ delay: number }>`
  animation: ${jumpAnimation} 1s ease infinite;
  animation-delay: ${p => p.delay}ms;
`;
