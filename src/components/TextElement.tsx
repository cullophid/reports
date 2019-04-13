import React, { HTMLAttributes, useState, useCallback } from "react"
import styled from "@emotion/styled"
import { Editor } from "slate-react"
import { Value } from "slate"
import Plain from "slate-plain-serializer"
import { debounce } from "lodash-es"

import { SlideTextElement } from "../models"

export const TextPlaceholder = styled.div`
  position: absolute;
  background: #eee;
  height: 30px;
`

type TextElementProps = SlideTextElement & HTMLAttributes<HTMLDivElement>

export const TextElement = (props: TextElementProps) => (
  <TextEl {...props}>{props.value}</TextEl>
)

export const TextEl = styled.div<SlideTextElement>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  font-size: ${p => p.fontSize}pt;
  text-align: ${p => p.textAlign};
  width: ${p => p.width}px;
  & p {
    margin: 0;
  }
  white-space: pre-line;
`

type TextEditorProps = SlideTextElement & {
  onSaveText: (value: string) => void
}

export const TextElementEditor = (props: TextEditorProps) => {
  const { onSaveText, ...rest } = props
  const [value, setValue] = useState<Value>(Plain.deserialize(props.value))
  const save = useCallback(
    debounce(value => props.onSaveText(Plain.serialize(value)), 500),
    [props.onSaveText]
  )
  return (
    <TextEditor {...rest}>
      <Editor
        autoFocus
        value={value}
        onChange={({ value }) => {
          setValue(value)
          save(value)
        }}
      />
    </TextEditor>
  )
}

export const TextEditor = styled.div<SlideTextElement>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  font-size: ${p => p.fontSize}pt;
  text-align: ${p => p.textAlign};
  width: ${p => p.width}px;
  & [data-slate-editor] {
    border: 1px solid transparent;
  }
  & [data-slate-editor]:focus {
    border: 1px solid #676767;
  }
`
