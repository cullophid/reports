import React, { useRef, ReactNode } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { TextPlaceholder, TextElement } from "./TextElement"
import { ChartElement } from "./ChartElement"

import useResizeAware from "react-resize-aware"
import { Slide } from "../models"

const SLIDE_HEIGHT = 720
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
  console.log("SlideWrap Render")
  return (
    <SlideBackGround
      ref={slideRef}
      style={{
        ...style,
        height: SLIDE_HEIGHT * scale,
        opacity: slideRef.current ? 1 : 0,
      }}
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
            return <TextElement key={element.id} {...element} />
          case "Chart":
            return <ChartElement key={element.id} {...element} />
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
        top: 100px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 500px;
        top: 250px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 450px;
        top: 400px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 64px;
        left: 100px;
        width: 300px;
        top: 550px;
      `}
    />
    <TextPlaceholder
      css={css`
        height: 364px;
        right: 100px;
        width: 500px;
        top: 250px;
      `}
    />
  </SlideWrap>
)

const SlideBackGround = styled.div`
  position: relative;
  background: white;
  box-shadow: 0 3px 10px #00000088;
  overflow: hidden;
`

const SlideContent = styled.div`
  position: relative;
  transform-origin: 0 0;
  width: ${SLIDE_WIDTH}px;
  height: ${SLIDE_HEIGHT}px;
`
