import React, { useState, useCallback, useEffect } from "react"
import styled from "@emotion/styled"
import { Report, Slide, Remote } from "../models"
import { reportsCollection } from "../firestore"
import { v4 as uuid } from "uuid"
import { SlideView, SlideWrap, SlidePlaceholder } from "./Slide"
import { NewSlideButton } from "./Button"
import { TextElementEditor } from "./TextElement"
import { ChartElement } from "./ChartElement"
import { slideTemplates } from "../slide-templates"
import { keyframes } from "@emotion/core"
import qs from "qs"

const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity: 1;
}
`

type ReportEditorProps = {
  report: Remote<Report>
  updateReport: (report: Report) => void
  initialSlide?: string
}

export const ReportEditor = ({
  report,
  updateReport,
  initialSlide,
}: ReportEditorProps) => {
  const [selectedSlideId, setSelectedSlideId] = useState<string | undefined>(
    initialSlide ||
      (report.data && report.data.slides[0] && report.data.slides[0].id)
  )
  const [selectSlideTemplate, setSelectSlideTemplate] = useState(false)

  const selectedSlide =
    report.data &&
    (report.data.slides.find(slide => slide.id === selectedSlideId) ||
      report.data.slides[0])

  const addSlide = async (slideTemplate: Slide) => {
    if (!report) {
      return
    }
    const slide = {
      ...slideTemplate,
      id: uuid(),
      elements: slideTemplate.elements.map(e => ({ ...e, id: uuid() })),
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

  const updateSlide = (slide: Slide) =>
    updateReport({
      ...report.data,
      slides: report.data.slides.map(current =>
        current.id === slide.id ? slide : current
      ),
    })

  if (selectSlideTemplate || (report.data && report.data.slides.length === 0)) {
    return (
      <ReportEditorLayout>
        <SlideTemplates onSelect={addSlide} />
      </ReportEditorLayout>
    )
  }

  return (
    <ReportEditorLayout>
      <SlideList>
        {!report.data &&
          [1, 2, 3].map((_, i) => (
            <SlideLi key={i}>
              <SlidePlaceholder />
            </SlideLi>
          ))}
        {report.data &&
          report.data.slides.map(slide => (
            <SlideLi
              key={slide.id}
              onClick={() => setSelectedSlideId(slide.id)}
            >
              <SlideView
                slide={slide}
                style={
                  selectedSlide && selectedSlide.id === slide.id
                    ? { border: "2px solid #ffcc59" }
                    : {}
                }
              />
            </SlideLi>
          ))}
        <AddSlideButton onClick={() => setSelectSlideTemplate(true)} />
      </SlideList>
      {report.loading && (
        <SlideEditorWrap>
          <SlidePlaceholder />
        </SlideEditorWrap>
      )}
      {selectedSlide && (
        <SlideEditor slide={selectedSlide} onChange={updateSlide} />
      )}
      <RightPanel />
    </ReportEditorLayout>
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

const ReportEditorLayout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-auto-columns: 200px;
  grid-auto-flow: column;
  align-items: stretch;
  overflow: hidden;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

const RightPanel = styled.aside`
  background: white;
  border-left: 1px solid #ddd;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 750px) {
    display: none;
  }
`

const SlideEditorWrap = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  justify-self: stretch;
  align-self: stretch;
  padding: 64px;
  @media (max-width: 750px) {
    padding: 0 32px;
    align-content: center;
    display: none;
  }
`

const SlideList = styled.ul`
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

const AddSlideButton = styled(NewSlideButton)`
  @media (max-width: 750px) {
    display: none;
  }
`
