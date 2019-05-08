import React, { HTMLAttributes, forwardRef } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { SlideWrap } from "./Slide"
import { css } from "@emotion/core"

type ButtonProps = {
  size?: number
  color?: string
}
export const buttonStyle = ({ size = 14 }: ButtonProps) => css`
  padding: 0 1.5em;
  height: 2.2em;
  justify-self: end;
  display: grid;
  place-content: center center;
  font-weight: 400;
  color: #474747;
  background: white;
  font-size: ${size}px;
  border-radius: 999px;
  border: 1px solid transparent;
  box-shadow: 0 2px 5px #00000055;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  :focus {
    outline: none;
    border-color: #ffcc59;
  }
`
export const Button = styled.button<ButtonProps>`
  ${p => buttonStyle(p)}
`

export const NewSlideButton = (props: HTMLAttributes<SVGElement>) => {
  return (
    <SlideWrap {...props} tabIndex={0}>
      <foreignObject x={0} y={0} width={1280} height={720}>
        <NewSlideButtonEl>+</NewSlideButtonEl>
      </foreignObject>
    </SlideWrap>
  )
}

const NewSlideButtonEl = styled.span`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center center;
  color: #474747;
  background: white;
  border: none;
  font-size: 400px;
  &:focus {
    outline: none;
    border: 10px solid #ffcc59;
  }
`

export const textButtonStyle = ({
  color = "#474747",
  size = 14,
}: ButtonProps) => css`
  padding: 0 1.5em;
  height: 2.2em;
  line-height: 1;
  vertical-align: middle;
  display: grid;
  place-content: center center;
  font-size: ${size}px;
  border: 1px solid transparent;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  color: ${color};
  border-radius: 999px;
  background: none;
  :focus {
    outline: none;
    color: ${color || "#474747"};
    border-color: #ffcc59;
  }
`

export const TextButton = styled.button<ButtonProps>`
  ${p => textButtonStyle(p)}
`
