import React from "react"
import { TextNodeType } from "../models"
import { MarkdownEditor } from "./MarkdownEditor"
import { EventHook } from "slate-react"

export const TextNode = (props: TextNodeType) => {
  return <TextNodeWrap {...props}>{props.value}</TextNodeWrap>
}

type TextEditorProps = TextNodeType & {
  onSaveText: (value: string) => void
  onFocus?: EventHook
  onBlur?: EventHook
}

export const TextNodeEditor = (props: TextEditorProps) => {
  const { onFocus, onBlur, onSaveText, ...rest } = props
  return (
    <TextNodeWrap {...rest}>
      <MarkdownEditor
        initialValue={props.value}
        onChange={onSaveText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </TextNodeWrap>
  )
}

const TextNodeWrap = (props: TextNodeType & { children: React.ReactChild }) => (
  <foreignObject x={props.x} y={props.y} width={props.width} height={1280}>
    <div style={{ fontSize: props.fontSize }}>{props.children}</div>
  </foreignObject>
)
