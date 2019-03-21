import React from "react"
import { ReportType, SlideType } from "../models"
import styled from "@emotion/styled"
import { Slide, SlideWrap } from "./Slide"

type ReportEditorProps = {
  reportId: string
  report: ReportType
}
export const ReportEditor = (props: ReportEditorProps) => {
  return (
    <EditorLayout>
      <SlideList slides={props.report.slides} />
      <SlideEditor slide={props.report.slides[0]!} />
    </EditorLayout>
  )
}

const EditorLayout = styled.div`
  padding: 64px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: stretch;
`

type SlideEditorProps = {
  slide: SlideType
}
const SlideEditor = (props: SlideEditorProps) => {
  return <SlideWrap>Slide</SlideWrap>
}

type SlideListProps = {
  slides: SlideType[]
}
const SlideList = (props: SlideListProps) => {
  return (
    <Ul>
      {props.slides.map(slide => (
        <Li>
          <Slide slide={slide} />
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  width: 300px;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  list-style-type: none;
`
