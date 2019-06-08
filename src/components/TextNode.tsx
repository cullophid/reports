import React from "react"
import { TextNodeType } from "../models"
import { MarkdownEditor } from "./MarkdownEditor"
import css from "@emotion/css"
import { primaryColor } from "src/theme"

export const TextNode = (node: TextNodeType) => {
  return (
    <TextNodeWrap {...node}>
      <div
        css={css`
          font-size: ${node.fontSize}px;
          border-width: 2px;
          border-style: solid;
          height: 100%;
          border-color: transparent;
          white-space: pre;
        `}
      >
        {node.value}
      </div>
    </TextNodeWrap>
  )
}
type TextNodeEditorProps = {
  node: TextNodeType
  selected?: boolean
  onSelect?: (selected: boolean) => void
  onUpdate: (node: TextNodeType) => void
}
export const TextNodeEditor = (props: TextNodeEditorProps) => {
  const { node, onSelect = () => undefined } = props
  return (
    <TextNodeWrap {...props.node}>
      <div
        css={css`
          position: relative;
          font-size: ${props.node.fontSize}px;
          border-width: 2px;
          border-style: solid;
          height: 100%;
          border-color: ${props.selected ? primaryColor : "transparent"};
        `}
      >
        <MarkdownEditor
          onFocus={() => onSelect(true)}
          initialValue={node.value}
          onChange={value => props.onUpdate({ ...node, value })}
        />
      </div>
    </TextNodeWrap>
  )
}

const TextNodeWrap = (
  props: TextNodeType & { children: React.ReactChild; selected?: boolean }
) => (
  <g
    css={css`
      transform: translate(${props.x}px, ${props.y}px);
    `}
  >
    <foreignObject width={props.width} height={props.height}>
      {props.children}
    </foreignObject>
  </g>
)
