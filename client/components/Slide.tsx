import React, { forwardRef, Ref, RefObject } from "react"
import styled from "@emotion/styled"
import useResizeListener from "react-resize-aware"
import { colors } from "../theme"

type SlideProps = {
  children?: React.ReactNode
  width: number
  height: number
  onClick?: (e: React.MouseEvent) => void
  selected?: boolean
}
export const Slide = forwardRef((props: SlideProps, ref: RefObject<HTMLElement>) => {
  const [resizeListener, sizes] = useResizeListener()
  const { width, height, children } = props
  const scale = sizes.width / width
  return (
    <Background
      ref={ref}
      onClick={props.onClick}
      scale={scale}
      height={height}
      selected={props.selected}
      show={scale != 0}
    >
      {resizeListener}
      <Content height={height} width={width} scale={scale}>
        {children}
      </Content>
    </Background>
  )
})
type BackgroundProps = {
  scale: number
  height: number
  selected: boolean
  show: boolean
}
const Background = styled.section<BackgroundProps>`
  opacity:${p => p.show ? 1 : 0};
  transition: 600ms opacity;
  background: white;
  position: relative;
  justify-self: stretch;
  overflow: hidden;
  height: ${p => p.height * p.scale}px;
  box-shadow: 0 ${p => 1 + 2 * p.scale}px ${p => 1 + 8 * p.scale}px
    rgba(0, 0, 0, 0.4);

  border: ${p =>
    p.selected ? `1px solid  ${colors.primary}` : "1px solid transparent"};
`

const Content = styled.div<{ scale: number; height: number; width: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  transform: scale(${p => p.scale});
  transform-origin: top left;
`