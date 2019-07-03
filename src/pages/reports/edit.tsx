import React, { useState, useEffect } from "react"
import { Page } from "src/components/Page"
import { navigate } from "gatsby"
import styled, { css } from "styled-components"
import { ReportType, SlideType } from "src/models"
import { Remote } from "src/remote"
import { reportsCollection } from "src/firestore"
import { v4 as uuid } from "uuid"
import { SlideTemplateModal } from "src/components/SlideTemplateModal"
import qs from "qs"
import { AddBox } from "src/components/Icon"
import { MarkdownEditor } from "src/components/MarkdownEditor"
import { Slide } from "src/components/Slide"
import { TextNode } from "src/components/TextNode"

type Props = {
  location: Location
}

const Edit = (props: Props) => {
  const queryParams = qs.parse(props.location.hash.split("?")[1])
  const initialSlide = queryParams.slide as string
  const reportId = props.location.hash.split("?")[0].substring(1)
  const [report, setReport] = useState<Remote<ReportType>>({ loading: true })

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

  useEffect(() => {
    return reportsCollection.doc(reportId).onSnapshot(
      doc => {
        if (!doc.data()) {
          return navigate("/404")
        }
        setReport({ data: doc.data()! })
      },
      error => setReport({ error })
    )
  }, [reportId])

  const addSlide = (slide: SlideType) => {
    if (!report.data) {
      return
    }
    reportsCollection.doc(report.data.id).set({
      ...report.data,
      slides: [...report.data.slides, { ...slide, id: uuid() }],
    })
  }

  const updateSlide = (slide: SlideType) => {
    if (!report.data) {
      return
    }
    reportsCollection.doc(report.data.id).set({
      ...report.data,
      slides: report.data.slides.map(current =>
        current.id === slide.id ? slide : current
      ),
    })
  }
  console.log({ selection })

  return (
    <Page>
      <EditorLayout>
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
          <Stage>
            <Slide width={selectedSlide.width} height={selectedSlide.height}>
              {selectedSlide.nodes.map(node => {
                switch (node.type) {
                  case "Text": {
                    return (
                      <TextNode {...node} key={node.id}>
                        <MarkdownEditor
                          onFocus={() => setSelection(node.id)}
                          onBlur={() => setSelection(undefined)}
                          initialValue={node.value}
                          onChange={value =>
                            updateSlide({
                              ...selectedSlide,
                              nodes: selectedSlide.nodes.map(n =>
                                n.id == node.id ? { ...node, value } : n
                              ),
                            })
                          }
                        />
                      </TextNode>
                    )
                  }
                }
              })}
            </Slide>
          </Stage>
        )}
        <SlideTemplateModal
          showDialog={selectSlideTemplate}
          onDismiss={() => setSelectSlideTemplate(false)}
          onSelect={addSlide}
        />
      </EditorLayout>
    </Page>
  )
}

export default Edit

const Stage = styled.div`
  padding: 64px;
`

const EditorLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`

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
