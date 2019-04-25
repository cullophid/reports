import React, { HTMLAttributes, forwardRef } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { SlideWrap } from "./Slide"

export const Button = styled.button`
  padding: 8px 24px;
  justify-self: end;
  font-weight: 400;
  color: #474747;
  background: white;
  font-size: 14px;
  border-radius: 999px;
  border: none;
  box-shadow: 0 2px 5px #00000055;
  text-transform: uppercase;
  cursor: pointer;
`

export const HomeButton = styled(Link)`
  text-decoration: none;
  justify-self: start;
  background: #373737;
  border: 5px solid white;
  box-shadow: 0 3px 10px #00000088;
  display: grid;
  place-content: center center;
  border-radius: 999px;
  width: 60px;
  height: 60px;
  font-size: 10px;
  color: white;
  &:visited,
  &:active {
    color: white;
  }
`
export const NewSlideButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <SlideWrap className={props.className}>
      <foreignObject x={0} y={0} width={1280} height={720}>
        <NewSlideButtonEl {...props}>+</NewSlideButtonEl>
      </foreignObject>
    </SlideWrap>
  )
}

const NewSlideButtonEl = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center center;
  color: #474747;
  background: white;
  border: none;
  font-size: 400px;
`

export const TextButton = styled.button<{ color?: string }>`
  padding: 8px 24px;
  justify-self: end;
  font-weight: 400;
  color: ${p => p.color || "#474747"};
  font-size: 14px;
  border-radius: 999px;
  border: none;
  text-transform: uppercase;
  background: none;
  cursor: pointer;
  :focus {
    outline: none;
    border: 1px solid ${p => p.color || "#474747"};
  }
`
