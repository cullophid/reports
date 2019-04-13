import React, { useState, useCallback } from "react"
import styled from "@emotion/styled"
import { Report, Slide } from "../models"
import { reportsCollection } from "../firestore"
import { v4 as uuid } from "uuid"
import { SlideView, SlideWrap, SlidePlaceholder } from "./Slide"
import { NewSlideButton } from "./Button"
import { TextElementEditor } from "./TextElement"
import { ChartElement } from "./ChartElement"
import { slideTemplates } from "../slide-templates"
import { keyframes } from "@emotion/core"

const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity: 1;
}
`

type ReportEditorProps = {
  report: Report
  updateReport: (report: Report) => void
}

export const ReportEditor = ({ report, updateReport }: ReportEditorProps) => {
  const [selectedSlideId, setSelectedSlideId] = useState<string | undefined>(
    report.slides[0] && report.slides[0].id
  )
  const [selectSlideTemplate, setSelectSlideTemplate] = useState(false)

  const selectedSlide = report.slides.find(
    slide => slide.id === selectedSlideId
  )

  const addSlide = async (slideTemplate: Slide) => {
    const slide = {
      ...slideTemplate,
      id: uuid(),
    }
    await reportsCollection.doc(report.id).set({
      ...report,
      slides: [...report.slides, slide],
    })
    setSelectedSlideId(slide.id)
    setSelectSlideTemplate(false)
  }

  const updateSlide = (slide: Slide) =>
    updateReport({
      ...report,
      slides: report.slides.map(current =>
        current.id === slide.id ? slide : current
      ),
    })

  return (
    <>
      {report.slides.length > 0 && !selectSlideTemplate && (
        <SlideList>
          {report.slides.map(slide => (
            <SlideLi
              key={slide.id}
              onClick={() => setSelectedSlideId(slide.id)}
              style={
                selectedSlideId && selectedSlideId === slide.id
                  ? { border: "1px solid blue" }
                  : {}
              }
            >
              <SlideView slide={slide} />
            </SlideLi>
          ))}
          <SlideLi>
            <NewSlideButton onClick={() => setSelectSlideTemplate(true)} />
          </SlideLi>
        </SlideList>
      )}
      {selectedSlide && !selectSlideTemplate ? (
        <SlideEditor slide={selectedSlide} onChange={updateSlide} />
      ) : (
        <SlideTemplates onSelect={addSlide} />
      )}
    </>
  )
}

type SlideEditorProps = {
  slide: Slide
  onChange: (slide: Slide) => void
}

const SlideEditor = (props: SlideEditorProps) => {
  const updateElement = useCallback(
    element =>
      props.onChange({
        ...props.slide,
        elements: props.slide.elements.map(el =>
          el.id === element.id ? element : el
        ),
      }),
    [props.onChange, props.slide]
  )
  console.log("SLIDE EDITOR", props.slide.elements)
  return (
    <SlideEditorWrap>
      <SlideWrap>
        {props.slide.elements.map(slideElement => {
          if (slideElement.type === "Text") {
            return (
              <TextElementEditor
                key={slideElement.id}
                {...slideElement}
                onSaveText={value => {
                  updateElement({ ...slideElement, value })
                }}
              />
            )
          }
          if (slideElement.type === "Chart") {
            return (
              <ChartElement
                key={slideElement.id}
                {...slideElement}
                onClick={e => {
                  e.nativeEvent.stopPropagation()
                }}
              />
            )
          }
        })}
      </SlideWrap>
    </SlideEditorWrap>
  )
}

const SlideEditorWrap = styled.div`
  display: grid;
  justify-self: stretch;
  grid-area: slide-editor;
  @media (max-width: 500px) {
    padding: 0 5%;
    align-content: center;
  }
`

const SlideList = styled.ul`
  overflow-y: auto;
  grid-area: slide-list;
  min-width: 0;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 100%;
  grid-gap: 5%;
  justify-items: stretch;
  align-content: start;
  padding: 8px;
  margin: 0;
  @media (max-width: 500px) {
    width: 100%;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-gap: 5%;
    align-items: center;
    justify-content: start;
    justify-content: start;
    overflow-x: auto;
    padding: 5%;
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

export const Placeholder = () => (
  <>
    <SlideList>
      <SlideLi>
        <SlidePlaceholder />
      </SlideLi>
      <SlideLi>
        <SlidePlaceholder />
      </SlideLi>
      <SlideLi>
        <SlidePlaceholder />
      </SlideLi>
    </SlideList>
    <SlideEditorWrap>
      <SlidePlaceholder style={{ gridArea: "slide-editor" }} />
    </SlideEditorWrap>
  </>
)

type SlideTemplateProps = {
  onSelect: (slide: Slide) => void
}
const SlideTemplates = ({ onSelect }: SlideTemplateProps) => {
  return (
    <SlideTemplateList>
      {slideTemplates.map(slide => (
        <SlideLi key={slide.id} onClick={() => onSelect(slide)}>
          <SlideView slide={slide} />
        </SlideLi>
      ))}
    </SlideTemplateList>
  )
}
const SlideTemplateList = styled.ul`
  grid-row: 2 / span 1;
  grid-column: 1 / span 3;
  margin: 0;
  display: grid;
  width: 100%;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
`
