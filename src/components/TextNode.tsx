import React from "react"
import { TextNodeType } from "../models"
import { MarkdownEditor } from "./MarkdownEditor"
import { EventHook } from "slate-react"

export const TextNode = (props: TextNodeType) => {
  return (
    <foreignObject x={props.x} y={props.y} width={props.width} height={1280}>
      <p>props.value</p>
    </foreignObject>
  )
}

type TextEditorProps = TextNodeType & {
  onSaveText: (value: string) => void
  onfocus?: EventHook
  onBlur?: EventHook
}

export const TextNodeEditor = (props: TextEditorProps) => {
  return (
    <foreignObject x={props.x} y={props.y} width={props.width} height={1280}>
      <MarkdownEditor
        initialValue={props.value}
        onChange={props.onSaveText}
        onFocus={props.onfocus}
        onBlur={props.onBlur}
      />
    </foreignObject>
  )
}
