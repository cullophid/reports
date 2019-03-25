import React, { useRef, ReactNode } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import useResizeAware from "react-resize-aware"
import { Slide, SlideTextElement, SlideChartElement } from "../models"

const SLIDE_HEIGHT = 900
const SLIDE_WIDTH = 1280

type SlideWrapProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export const SlideWrap = (props: SlideWrapProps) => {
  const style = props.style || {}
  const [resizeListener] = useResizeAware()
  const slideRef = useRef<HTMLDivElement>(null)
  const bbox = slideRef.current && slideRef.current.getBoundingClientRect()
  const scale = bbox ? bbox.width / SLIDE_WIDTH : 1
  return (
    <SlideBackGround
      ref={slideRef}
      style={{ ...style, height: SLIDE_HEIGHT * scale }}
      className={props.className || ""}
    >
      {resizeListener}
      {slideRef.current && (
        <SlideContent style={{ transform: `scale(${scale})` }}>
          {props.children}
        </SlideContent>
      )}
    </SlideBackGround>
  )
}

type SlideProps = {
  slide: Slide
  style?: React.CSSProperties
}
export const SlideView = (props: SlideProps) => {
  return (
    <SlideWrap style={props.style || {}}>
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

export const SlidePlaceholder = ({
  style = {},
}: {
  style?: React.CSSProperties
}) => (
  <SlideWrap style={style}>
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 1080px;
        top: 130px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 500px;
        top: 300px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 450px;
        top: 450px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 300px;
        top: 600px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 364px;
        right: 100px;
        width: 500px;
        top: 300px;
      `}
    />
  </SlideWrap>
)

const TextPlaceholder = styled.div`
  position: absolute;
  background: #ccc;
  height: 30px;
  border-radius: 5px;
`

const SlideBackGround = styled.div`
  position: relative;
  background: white;
  box-shadow: 0 3px 10px #00000088;
  overflow: hidden;
`

const SlideChart = styled.div<SlideChartElement>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`

const SlideText = styled.div<SlideTextElement>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  font-size: ${p => p.fontSize}px;
  text-align: ${p => p.textAlign};
  width: ${p => p.width}px;
`

const SlideContent = styled.div`
  position: relative;
  transform-origin: 0 0;
  width: ${SLIDE_WIDTH}px;
  height: ${SLIDE_HEIGHT}px;
`
