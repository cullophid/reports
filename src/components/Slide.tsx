import React from "react"
import { css } from "styled-components"
import useResizeListener from "react-resize-aware"
type SlideProps<ComponentType = React.Component> = {
  children?: React.ReactNode
  width: number
  height: number
}
export const Slide = (props: SlideProps) => {
  const [resizeListener, sizes] = useResizeListener()
  const { width, height, children } = props
  const scale = sizes.width / width
  return (
    <section
      css={css`
        background: white;
        position: relative;
        justify-self: stretch;
        overflow: hidden;
        height: ${height * scale}px;
        box-shadow: 0 ${10 * scale}px ${20 * scale}px rgba(0, 0, 0, 0.25);
      `}
    >
      {resizeListener}
      <div
        css={css`
          position: absolute;
          left: 0;
          top: 0;
          height: ${height}px;
          width: ${width}px;
          transform: scale(${scale});
          transform-origin: top left;
        `}
      >
        {children}
      </div>
    </section>
  )
}
