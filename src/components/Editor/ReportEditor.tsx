import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { ReportType, SlideType } from "src/models"
import { Remote } from "src/remote"
import { reportsCollection } from "src/firestore"
import { v4 as uuid } from "uuid"
import { SlideTemplateModal } from "../SlideTemplateModal"
import qs from "qs"
import { AddBox } from "../Icon"
import { MarkdownEditor } from "../MarkdownEditor"
import { Slide } from "../Slide"
import { TextNode } from "../TextNode"

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

  const [selection, setSelection] = useState<string | undefined>(undefined)

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

  return (
    <>
      <div
        css={css`
          display: grid;
          grid-template-rows: auto 1fr;
        `}
      >
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
        {selectedSlide && (
          <div
            css={css`
              padding: 64px;
            `}
          >
            <Slide width={selectedSlide.width} height={selectedSlide.height}>
              {selectedSlide.nodes.map(node => {
                switch (node.type) {
                  case "Text": {
                    return (
                      <TextNode {...node} key={node.id}>
                        <MarkdownEditor
                          onFocus={() => setSelection(node.id)}
                          onBlur={() =>
                            setSelection(s => (s == node.id ? undefined : s))
                          }
                          initialValue={node.value}
                          onChange={value => {
                            console.log(value)
                            updateSlide({
                              ...selectedSlide,
                              nodes: selectedSlide.nodes.map(n =>
                                n.id == node.id ? { ...node, value } : n
                              ),
                            })
                          }}
                        />
                        {node.value}
                      </TextNode>
                    )
                  }
                }
              })}
            </Slide>
          </div>
        )}
      </div>
      <SlideTemplateModal
        showDialog={selectSlideTemplate}
        onDismiss={() => setSelectSlideTemplate(false)}
        onSelect={addSlide}
      />
    </>
  )
}

type SlideEditorProps = {
  children?: React.ReactNode
  slide: SlideType
}

const Toolbar = styled.div`
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
