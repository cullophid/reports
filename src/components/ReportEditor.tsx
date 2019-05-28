import React, { useState, useCallback, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { ReportType, SlideType } from "src/models"
import { Remote } from "src/remote"
import { reportsCollection } from "src/firestore"
import { v4 as uuid } from "uuid"
import { SlideView, SlideWrap, SlidePlaceholder } from "./Slide"
import { NewSlideButton } from "./Button"
import { TextNodeEditor } from "./TextNode"
import { SlideTemplateModal } from "./SlideTemplateModal"
import qs from "qs"

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
        <AddSlideButton
          onClick={() => setSelectSlideTemplate(true)}
          onKeyPress={e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              setSelectSlideTemplate(true)
            }
          }}
        />
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
  slide: SlideType
  onChange: (slide: SlideType) => void
}

const SlideEditor = (props: SlideEditorProps) => {
  const updateElement = useCallback(
    updatedNode =>
      props.onChange({
        ...props.slide,
        nodes: props.slide.nodes.map(node =>
          node.id === updatedNode.id ? updatedNode : node
        ),
      }),
    [props.onChange, props.slide]
  )
  return (
    <SlideEditorWrap>
      <SlideWrap>
        {props.slide.nodes.map(node => {
          if (node.type === "Text") {
            return (
              <TextNodeEditor
                key={node.id}
                {...node}
                onSaveText={value => {
                  updateElement({ ...node, value })
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

const AddSlideButton = styled(NewSlideButton)`
  margin-bottom: 32px;
  @media (max-width: 750px) {
    display: none;
  }
`
