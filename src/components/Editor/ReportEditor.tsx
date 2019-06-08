import React, { useState, useEffect, useRef, useReducer, Reducer } from "react"
import styled from "@emotion/styled"
import { ReportType, SlideType, NodeType, TextNodeType } from "src/models"
import { Remote } from "src/remote"
import { reportsCollection } from "src/firestore"
import { v4 as uuid } from "uuid"
import { SlideView, SlidePlaceholder } from "../Slide"
import { SlideTemplateModal } from "./SlideTemplateModal"
import qs from "qs"
import { EditorSelection, SelectionContext } from "./selection"
import { SlideEditor, SlideEditorPlaceholder } from "./SlideEditor"
import { TextField, AddBox } from "../Icon"

type ReportEditorProps = {
  report: Remote<ReportType>
  updateReport: (report: ReportType) => void
  initialSlide?: string
}

export const ReportEditor = ({
  report,
  updateReport,
  initialSlide,
}: ReportEditorProps) => {
  const [selection, setSelection] = useState<EditorSelection>(undefined)
  const [selectedSlideId, setSelectedSlideId] = useState<string | undefined>(
    initialSlide ||
      (report.data && report.data.slides[0] && report.data.slides[0].id)
  )
  const [selectSlideTemplate, setSelectSlideTemplate] = useState(false)

  const selectedSlide =
    report.data &&
    (report.data.slides.find(slide => slide.id === selectedSlideId) ||
      report.data.slides[0])

  const addSlide = async (slideTemplate: SlideType) => {
    if (!report.data) {
      return
    }
    const slide: SlideType = {
      ...slideTemplate,
      id: uuid(),
      nodes: slideTemplate.nodes.map(e => ({ ...e, id: uuid() })),
    }
    await reportsCollection.doc(report.data.id).set({
      ...report.data,
      slides: [...report.data.slides, slide],
    })
    setSelectedSlideId(slide.id)
    setSelectSlideTemplate(false)
  }

  useEffect(() => {
    if (!report.data) {
      return
    }
    history.replaceState(
      {},
      "edit report",
      `${window.location.pathname}#${report.data.id}?${qs.stringify({
        slide: selectedSlideId,
      })}`
    )
  })

  const updateSlide = (slide: SlideType) => {
    if (!report.data) {
      return
    }
    updateReport({
      ...report.data,
      slides: report.data.slides.map(current =>
        current.id === slide.id ? slide : current
      ),
    })
  }
  const slideListRef = useRef<HTMLUListElement>(null)

  const focusSlide = (i: number) => {
    const listItem =
      slideListRef.current && slideListRef.current.children.item(i)
    const child = listItem && listItem.querySelector("svg")
    if (child) {
      child.focus()
    }
  }
  return (
    <SelectionContext.Provider value={[selection, setSelection]}>
      <ReportEditorLayout>
        <SlideTemplateModal
          showDialog={selectSlideTemplate}
          onDismiss={() => setSelectSlideTemplate(false)}
          onSelect={addSlide}
        />
        <SlideList ref={slideListRef}>
          {!report.data &&
            [1, 2, 3, 4, 5, 6].map((_, i) => (
              <SlideLi key={i}>
                <SlidePlaceholder />
              </SlideLi>
            ))}
          {report.data &&
            report.data.slides.map((slide, i) => (
              <SlideLi key={slide.id}>
                <SlideView
                  tabIndex={i === 0 ? 0 : -1}
                  onPress={() => setSelectedSlideId(slide.id)}
                  onKeyDown={e => {
                    switch (e.key) {
                      case "ArrowDown":
                        return focusSlide(i + 1)
                      case "ArrowUp":
                        return focusSlide(i - 1)
                    }
                  }}
                  slide={slide}
                />
              </SlideLi>
            ))}
        </SlideList>
        <Toolbar>
          <ToolbarButton
            onClick={() => setSelectSlideTemplate(true)}
            onKeyPress={e => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setSelectSlideTemplate(true)
              }
            }}
          >
            <AddBox color="#333" size={32} />
          </ToolbarButton>
          <ToolbarSeparator />
        </Toolbar>
        {report.loading && <SlideEditorPlaceholder />}
        {selectedSlide && (
          <SlideEditor slide={selectedSlide} onChange={updateSlide} />
        )}
      </ReportEditorLayout>
    </SelectionContext.Provider>
  )
}

const newTextNode = (): TextNodeType => ({
  id: uuid(),
  fontSize: 64,
  textAlign: "left",
  type: "Text",
  value: "hello",
  width: 1080,
  height: 80,
  x: 100,
  y: 360,
})
const Toolbar = styled.div`
  grid-area: toolbar;
  height: 60px;
  background: white;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-gap: 8px;
  padding: 0 16px;
  grid-auto-flow: column;
  align-content: center;
  justify-content: start;
`

const ToolbarButton = styled.button`
  border: none;
  background: none;
  padding: 0;
`
const ToolbarSeparator = styled.div`
  width: 1px;
  height: 32px;
  background: #ddd;
  padding: 0;
`

const ReportEditorLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 260px 1fr;
  grid-template-areas:
    "toolbar toolbar"
    "slideList slideEditor";
  overflow: hidden;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

const SlideList = styled.ul`
  grid-area: slideList;
  background: #fff;
  border-right: 1px solid #ddd;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0;
  padding: 32px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 100%;
  grid-gap: 32px;
  justify-items: stretch;
  align-content: start;
  @media (max-width: 500px) {
    width: 100%;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-gap: 32px;
    align-items: center;
    justify-content: start;
  }
`

const SlideLi = styled.li`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
  }
`
