import React from "react"
import styled, { css } from "styled-components"
import useResizeListener from "react-resize-aware"
import { primaryColor } from "src/theme"
type SlideProps<ComponentType = React.Component> = {
  children?: React.ReactNode
  width: number
  height: number
  onClick?: (e: React.MouseEvent) => void
  selected?: boolean
}
export const Slide = (props: SlideProps) => {
  const [resizeListener, sizes] = useResizeListener()
  const { width, height, children } = props
  const scale = sizes.width / width
  return (
    <Background
      onClick={props.onClick}
      scale={scale}
      height={height}
      selected={props.selected}
    >
      {resizeListener}
      <Content height={height} width={width} scale={scale}>
        {children}
      </Content>
    </Background>
  )
}
type BackgroundProps = {
  scale: number
  height: number
  selected: boolean
}
const Background = styled.section<BackgroundProps>`
  background: white;
  position: relative;
  justify-self: stretch;
  overflow: hidden;
  height: ${p => p.height * p.scale}px;
  box-shadow: 0 ${p => 1 + 5 * p.scale}px ${p => 3 + 10 * p.scale}px
    rgba(0, 0, 0, 0.4);

  border: ${p =>
    p.selected ? `1px solid  ${primaryColor}` : "1px solid transparent"};
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
