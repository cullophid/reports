
import { useReportGetQuery, useReportUpdateMutation, ChartFragment, ReportUpdateMutationVariables, ReportFragment, ReportGetDocument } from "../codegen/graphql";
import styled from "@emotion/styled";
import { ErrorBox } from "../components/ErrorBox";
import { Crumbs, CrumbTitle, CrumbLink } from "../components/Crumbs";
import { Header, HeaderSection } from "../components/Header";
import { Icon } from "../components/Icon";
import { FlatButton, Button } from "../components/Button";
import { useState, KeyboardEvent, useEffect } from "react";
import { css, keyframes } from "@emotion/core";
import { useMouseDrag, Pos } from "../hooks/drag";
import { colors } from "../theme";
import cuid from "cuid"

type Tool =
  | "insert_chart"
  | "insert_image"
  | "insert_text"
  | "select"


type Selection = ChartFragment


const removeTypename = (report: ReportFragment): ReportUpdateMutationVariables["report"] => {
  const { __typename, slides, ...reportData } = report;
  return {
    ...reportData,
    slides: slides.map(({ __typename, charts, ...slideData }) => {
      return {
        ...slideData,
        charts: charts.map(({ __typename, ...chartData }) => {
          return chartData
        })
      }
    })
  }
}

const getModifiers = (e: KeyboardEvent) =>
  [
    e.nativeEvent.metaKey && "meta",
    e.nativeEvent.ctrlKey && "ctrl",
    e.nativeEvent.altKey && "alt",
    e.nativeEvent.shiftKey && "shift",
  ].filter(Boolean)

export const ReportPage = (props: { id: string, slide?: string }) => {
  const [scale, setScale] = useState(1)


  const [tool, setTool] = useState<Tool>("select")
  const [selection, setSelection] = useState<Selection[]>([])
  const reportQuery = useReportGetQuery({
    variables: {
      id: props.id
    },
    onCompleted: ({ report }) => {
      setScale(window.innerWidth * 0.8 / report.width)
    }
  })

  const [_updateReport, updateReportQuery] = useReportUpdateMutation()

  const updateReport = (report: ReportUpdateMutationVariables["report"]) => {
    reportQuery.client.writeQuery({
      query: ReportGetDocument,
      variables: { id: report.id },
      data: {
        report
      }
    })
    return _updateReport({
      variables: {
        report: removeTypename(report as ReportFragment)
      }
    })

  }

  const report = reportQuery.data && reportQuery.data.report

  useEffect(() => {
    const handler = () => {
      if (report) {

        setScale(window.innerWidth * 0.8 / report.width)
      }
    }
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler)
  }, [report])

  const selectedSlide = report && (report.slides.find(s => s.id === props.slide) || report.slides[0]);

  const getDragBox = (pos: Pos, origin: Pos) => {
    return {
      x: Math.min(pos.x, origin.x) / scale,
      y: Math.min(pos.y, origin.y) / scale,
      width: Math.abs(pos.x - origin.x) / scale,
      height: Math.abs(pos.y - origin.y) / scale,
    }
  }

  const { dragHandlers, dragPos, dragOrigin, isDragging, parentRef } = useMouseDrag({
    onDragEnd: (pos, origin) => {
      const box = getDragBox(pos, origin);
      switch (tool) {
        case "insert_chart": {

          const newChart = {
            id: cuid(),
            x: Math.round(box.x),
            y: Math.round(box.y),
            width: Math.round(box.width),
            height: Math.round(box.height),
            __typename: "Chart" as "Chart"
          }

          const newReport = {
            ...report,
            slides: report.slides.map(slide => {
              if (slide.id === selectedSlide.id) {
                return {
                  ...slide,
                  charts: [...slide.charts, newChart]
                }
              } else {
                return slide
              }
            })
          }
          updateReport(newReport)
          setTool("select");
          setSelection([newChart])
        }

      }
    }
  })

  return (
    <Layout tabIndex={-1} onKeyDown={e => {
      const modifiers = getModifiers(e);
      switch (e.key) {
        case "Escape":
          setTool("select")
          if (tool === "select") {
            setSelection([]);
          }
          return e.preventDefault();
        case "c":
          if (modifiers.length === 0) {
            setTool("insert_chart")
            return e.preventDefault();
          }
        case "i":
          if (modifiers.length === 0) {
            setTool("insert_image")
            return e.preventDefault();
          }
        case "t":
          if (modifiers.length === 0) {
            setTool("insert_text")
            return e.preventDefault();
          }
        case "Backspace": {
          updateReport({
            ...report,
            slides: report.slides.map(slide => ({
              ...slide,
              charts: slide.charts.filter(chart => selection.some(selection => selection.id === chart.id) === false)
            }))
          })
        }

      }
    }}>
      {(reportQuery.loading || updateReportQuery.loading) && <LoadingIndicator />}
      <Header>
        <HeaderSection>
          <Crumbs>
            <CrumbLink href="/">Home</CrumbLink>
            <CrumbLink href="/">Reports</CrumbLink>
            <CrumbTitle>{report ? report.title : "..."}</CrumbTitle>
          </Crumbs >
          <NewElements>
            <FlatButton name="insert_chart" onClick={() => setTool("insert_chart")} active={tool === "insert_chart"}>
              <Icon icon="insert_chart" />
            </FlatButton>
            <FlatButton name="insert_image" onClick={() => setTool("insert_image")} active={tool === "insert_image"}><Icon icon="insert_photo" /></FlatButton>
            <FlatButton name="insert_text" onClick={() => setTool("insert_text")} active={tool === "insert_text"}><Icon icon="insert_text" /></FlatButton>
          </NewElements>
        </HeaderSection>
      </Header >
      <div style={{ position: "absolute", bottom: 16, right: 16 }}>{scale}</div>
      <Stage tool={tool} scale={scale}>

        {
          selectedSlide &&
          <Slide ref={parentRef} {...dragHandlers} width={report.width} height={report.height}>
            {["insert_chart", "insert_image", "insert_text"].includes(tool) && isDragging &&
              <DragBox {...getDragBox(dragPos, dragOrigin)} />
            }
            {selectedSlide.charts.map(chart => {
              return (

                <Chart key={chart.id} selected={selection.some(s => s.id === chart.id)} {...chart} onClick={e => {
                  if (tool === "select") {
                    setSelection(e.nativeEvent.shiftKey ? [...selection, chart] : [chart]);
                  }
                }} />
              )
            })}
          </Slide>
        }
        {report && !selectedSlide &&
          <Center>
            <Button name="create slide" onClick={() => {
              updateReport({
                ...report,
                slides: [
                  ...report.slides,
                  { id: cuid(), charts: [] }
                ]
              })
            }}>
              Create You first Slide
            </Button>
          </Center>
        }
        {reportQuery.error && <ErrorBox error={reportQuery.error} />}
      </Stage>

    </Layout >
  )
}

const Chart = styled.div<ChartFragment & { selected: boolean }>`
  position:absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background: #f0f0f0;
  border: 1px solid #dedede;
  ${p => p.selected && css`border: 1px dashed ${colors.primary};`};
`


const Center = styled.div`
  height:100%;
  display:grid;
  place-content:center center;
  `


type DragBoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DragBox = styled.div<DragBoxProps>`
  position:absolute;
  width:${p => p.width}px;
  height:${p => p.height}px;
  left:${p => p.x}px;
  top:${p => p.y}px;
  border: 2px dashed ${colors.primary};
`

const Slide = styled.section<{ width: number, height: number }>`
  position:relative;
  background:white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  width: ${p => p.width}px;
  height:${p => p.height}px;
`

const NewElements = styled.div`
  display:grid;
  grid-auto-flow: column;
  grid-gap: 4px;
  place-content: center start;
`


const Layout = styled.div`
  display:grid;
  height:100%;
  grid-gap: 32px;
  background:#f5f5f5;
  grid-template-rows: auto 1fr;
  place-content: start stretch;
  overflow:hidden;
`

const Stage = styled.main<{ tool: Tool, scale: number }>`
  display:grid;
  width:100%;
  place-content:center center;
  overflow:hidden;
  ${p => {
    switch (p.tool) {
      case "insert_chart":
      case "insert_image":
      case "insert_text":
        return css`
        cursor: crosshair;
        `
    }
  }}
  & > * {
    transform: scale(${p => p.scale});
    transform-origin: 50% 50%;
  }
`


const LoadingIndicator = () =>
  <LoadingWrapper>
    <LoadingDot delay={0}>.</LoadingDot>
    <LoadingDot delay={200}>.</LoadingDot>
    <LoadingDot delay={400}>.</LoadingDot>
  </LoadingWrapper>

const jumpAnimation = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`


const LoadingWrapper = styled.div`
position:absolute;
  top: 0px;
  right: 32px;
  font-size: 2.5rem;
`
const LoadingDot = styled.span<{ delay: number }>`
  animation:${jumpAnimation} 1s ease infinite;
  animation-delay:${p => p.delay}ms;
`