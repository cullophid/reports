import React, { ReactNode, HTMLAttributes, KeyboardEvent } from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { Slide, SlideTextElement } from "../models"
import { TextElement } from "./TextElement"
import { navigate } from "gatsby"

const SLIDE_HEIGHT = 720
const SLIDE_WIDTH = 1280

type SlideWrapProps = {
  children: ReactNode
} & HTMLAttributes<SVGElement>

export const SlideWrap = (props: SlideWrapProps) => {
  return (
    <SlideSVG
      viewBox={`0 0 ${SLIDE_WIDTH} ${SLIDE_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    />
  )
}

type SlideProps = {
  slide: Slide
  highlight?: boolean
  onPress?: () => void
  href?: string
} & HTMLAttributes<SVGElement>

export const SlideView = ({
  slide,
  onClick,
  onPress,
  onKeyPress,
  href,
  ...rest
}: SlideProps) => {
  const navigateToHref = (
    e: React.MouseEvent<SVGElement> | KeyboardEvent<SVGElement>
  ) => {
    e.metaKey || e.ctrlKey ? window.open(href, "_blank") : navigate(href)
  }
  return (
    <SlideWrap
      role={href ? "link" : (onClick || onPress) && "button"}
      tabIndex={rest.tabIndex || (onPress || href ? 0 : undefined)}
      onClick={e => {
        href && navigateToHref(e)
        onPress && onPress()
        onClick && onClick(e)
      }}
      onKeyPress={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()

          onPress && onPress()
          href && navigateToHref(e)
        }
        onKeyPress && onKeyPress(e)
      }}
      {...rest}
    >
      {slide.elements.map(element => {
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
const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`
const SlideSVG = styled.svg<{ highlight?: boolean }>`
  width: 100%;
  background: white;
  box-shadow: 0 3px 10px #00000088;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 500ms;
  &:focus {
    outline: none;
    border: 3px solid #ffcc59;
  }
  @media print {
    position: relative;
    box-shadow: none;
  }
`
