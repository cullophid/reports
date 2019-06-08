import React, { ReactNode, HTMLAttributes, KeyboardEvent } from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { SlideType } from "../models"
import { TextNode } from "./TextNode"
import { navigate } from "gatsby"

type SlideWrapProps = {
  width: number
  height: number
  children: ReactNode
} & HTMLAttributes<SVGElement>

export const SlideWrap = React.forwardRef<any, SlideWrapProps>((props, ref) => {
  const { width, height, ...rest } = props
  return (
    <SlideSVG
      ref={ref}
      viewBox={`0 0 ${props.width} ${props.height}`}
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    />
  )
})

type SlideProps = {
  slide: SlideType
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
    e.metaKey || e.ctrlKey ? window.open(href, "_blank") : navigate(href || "#")
  }
  return (
    <SlideWrap
      width={slide.width}
      height={slide.height}
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
      {slide.nodes.map(node => {
        switch (node.type) {
          case "Text":
            return <TextNode key={node.id} {...node} />
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
  <SlideWrap style={style} width={1280} height={720}>
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
      x={1280 - 600}
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
  box-shadow: 0 3px 8px #00000055;
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
