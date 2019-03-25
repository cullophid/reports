import React, { useState, useEffect } from "react"
import * as Remote from "../../remote"
import { Report, Slide } from "../../models"
import { Document, reportsCollection } from "../../firestore"
import { Page } from "../../components/Page"
import { navigateTo } from "gatsby"
import { SlideView, SlideWrap, SlidePlaceholder } from "../../components/Slide"
import { Header, Title } from "../../components/Header"
import { HomeButton, Button } from "../../components/Button"
import styled from "@emotion/styled"
import { v4 as uuid } from "uuid"
import { slideTemplates } from "../../slide-templates"

type Props = {
  location: Location
}

const Edit = (props: Props) => {
  const reportId = props.location.hash.substring(1)
  const [report, setReport] = useState<Remote.t<Document<Report>>>(
    Remote.loading
  )
  useEffect(() => {
    return reportsCollection.doc(reportId).onSnapshot(
      doc => {
        if (!doc.data()) {
          return navigateTo("/404")
        }
        setReport(Remote.success(doc))
      },
      error => setReport(Remote.error(error))
    )
  }, [reportId])

  return (
    <Page>
      <EditorLayout>
        <Header gridArea="header">
          <HomeButton to="/">HOME</HomeButton>
          <Title>
            {report.status === "Success" ? report.data.data()!.title : "..."}
          </Title>
        </Header>
        {report.status === "Loading" && <Placeholder />}
        {report.status === "Error" && <p>{report.error.message}</p>}
        {report.status === "Success" && (
          <ReportEditor report={report.data.data()!} />
        )}
      </EditorLayout>
    </Page>
  )
}

export default Edit

const EditorLayout = styled.div`
  display: grid;
  grid-template-columns: 0 1fr 3fr 0;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header header header"
    ". slide-list slide-editor .";
  grid-gap: 5%;
  padding-bottom: 64px;
`

type ReportEditorProps = {
  report: Report
}

export const ReportEditor = ({ report }: ReportEditorProps) => {
  const [selectedSlide, setSelectedSlide] = useState<Slide | undefined>(
    report.slides[0]
  )
  const [selectSlideTemplate, setSelectSlideTemplate] = useState(false)
  const addSlide = async (slideTemplate: Slide) => {
    const slide = {
      ...slideTemplate,
      id: uuid(),
    }
    await reportsCollection.doc(report.id).set({
      ...report,
      slides: [...report.slides, slide],
    })
    setSelectedSlide(slide)
    setSelectSlideTemplate(false)
  }
  return (
    <>
      {(report.slides.length > 0 || setSelectSlideTemplate) && (
        <SlideList>
          {report.slides.map(slide => (
            <SlideLi
              onClick={() => setSelectedSlide(slide)}
              style={
                selectedSlide && selectedSlide.id === slide.id
                  ? { border: "1px solid blue" }
                  : {}
              }
            >
              <SlideView slide={slide} />
            </SlideLi>
          ))}
          <SlideLi>
            <Button
              style={{ display: "block", width: "100%" }}
              onClick={() => setSelectSlideTemplate(true)}
            >
              Add Slide
            </Button>
          </SlideLi>
        </SlideList>
      )}
      {selectedSlide && !selectSlideTemplate ? (
        <SlideEditor slide={selectedSlide} />
      ) : (
        <SlideTemplates onSelect={addSlide} />
      )}
    </>
  )
}

type SlideEditorProps = {
  slide: Slide
}

const SlideEditor = ({ slide }: SlideEditorProps) => {
  return <SlideView slide={slide} style={{ gridArea: "slide-editor" }} />
}

const SlideList = styled.ul`
  grid-area: slide-list;
  min-width: 0;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 100%;
  grid-gap: 32px;
  justify-items: stretch;
  align-content: start;
  padding: 0;
  margin: 0;
`

const SlideLi = styled.li`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

const Placeholder = () => (
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
    <SlidePlaceholder style={{ gridArea: "slide-editor" }} />
  </>
)

type SlideTemplateProps = {
  onSelect: (slide: Slide) => void
}
const SlideTemplates = ({ onSelect }: SlideTemplateProps) => {
  return (
    <SlideTemplateList>
      {slideTemplates.map(slide => (
        <SlideLi onClick={() => onSelect(slide)}>
          <SlideView slide={slide} />
        </SlideLi>
      ))}
    </SlideTemplateList>
  )
}
const SlideTemplateList = styled.ul`
  grid-area: slide-editor;
  margin: 0;
  display: grid;
  width: 100%;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
`
