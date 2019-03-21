import React, { useRef, ReactNode } from "react"
import styled from "@emotion/styled"

import useResizeAware from "react-resize-aware"
import {
  SlideType,
  SlideTextElementType,
  SlideChartElementType,
} from "../models"
import { checkPropTypes } from "prop-types"

const SLIDE_HEIGHT = 900
const SLIDE_WIDTH = 1280

type SlideWrapProps = {
  children: ReactNode
  className?: string
}

export const SlideWrap = (props: SlideWrapProps) => {
  const [resizeListener] = useResizeAware()
  const slideRef = useRef<HTMLDivElement>(null)
  const bbox = slideRef.current && slideRef.current.getBoundingClientRect()
  const scale = bbox ? bbox.width / SLIDE_WIDTH : 1
  return (
    <SlideBackGround
      ref={slideRef}
      style={{ height: SLIDE_HEIGHT * scale }}
      className={props.className || ""}
    >
      {resizeListener}
      <SlideContent style={{ transform: `scale(${scale})` }}>
        {props.children}
      </SlideContent>
    </SlideBackGround>
  )
}

type SlideProps = {
  slide: SlideType
}
export const Slide = (props: SlideProps) => {
  return (
    <SlideWrap>
      {props.slide.elements.map(element => {
        switch (element.type) {
          case "Text":
            return <SlideText {...element}>{element.value}</SlideText>
          case "Chart":
            return <SlideChart {...element} />
        }
      })}
    </SlideWrap>
  )
}

const SlideBackGround = styled.div`
  background: white;
  box-shadow: 0 3px 10px #00000088;
  overflow: hidden;
`

const SlideChart = styled.div<SlideChartElementType>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`

const SlideText = styled.div<SlideTextElementType>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
`

const SlideContent = styled.div`
  position: relative;
  transform-origin: 0 0;
  width: ${SLIDE_WIDTH}px;
  height: ${SLIDE_HEIGHT}px;
`
