import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import { Slide, SlideTextElement } from "../models"
import { TextElement } from "./TextElement"

const SLIDE_HEIGHT = 720
const SLIDE_WIDTH = 1280

type SlideWrapProps = {
  children: ReactNode
  className?: string
  highlight?: boolean
  style?: React.CSSProperties
}

export const SlideWrap = (props: SlideWrapProps) => {
  return (
    <SlideSVG
      viewBox={`0 0 ${SLIDE_WIDTH} ${SLIDE_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      className={props.className || ""}
      highlight={props.highlight}
    >
      {props.children}
      )}
    </SlideSVG>
  )
}

type SlideProps = {
  slide: Slide
  highlight?: boolean
}
export const SlideView = (props: SlideProps) => {
  return (
    <SlideWrap highlight={props.highlight}>
      {props.slide.elements.map(element => {
        switch (element.type) {
          case "Text":
            return <TextElement key={element.id} {...element} />
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
    <TextPlaceholder x="100" y="100" width="1080" height="60" rx={5} ry={5} />
    <g transform="translate(100, 240)">
      <TextPlaceholder x="0" y="0" width="500" height="30" rx={5} ry={5} />
      <TextPlaceholder x="0" y="60" width="500" height="30" rx={5} ry={5} />
      <TextPlaceholder x="0" y="120" width="450" height="30" rx={5} ry={5} />
      <TextPlaceholder x="0" y="180" width="500" height="30" rx={5} ry={5} />
      <TextPlaceholder x="0" y="240" width="500" height="30" rx={5} ry={5} />
      <TextPlaceholder x="0" y="300" width="450" height="30" rx={5} ry={5} />
    </g>

    <TextPlaceholder
      x={SLIDE_WIDTH - 600}
      y="240"
      width="500"
      height="364"
      rx={5}
      ry={5}
    />
  </SlideWrap>
)

const TextPlaceholder = styled.rect`
  fill: #eee;
  stroke: none;
`

const SlideSVG = styled.svg<{ highlight?: boolean }>`
  width: 100%;
  background: white;
  box-shadow: 0 3px 10px #00000088;
  border: 3px solid ${p => (p.highlight ? "#ffcc59" : "transparent")};
`
