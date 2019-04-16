import React, { HTMLAttributes, useState, useCallback } from "react"
import styled from "@emotion/styled"
import { Editor } from "slate-react"
import { Value } from "slate"
import { debounce } from "lodash-es"

import { SlideTextElement } from "../models"

export const TextElement = (props: SlideTextElement) => {
  const lineHeight = props.fontSize * 1.2
  let row = 0
  let i = 0
  const renderNode = (node: any) => {
    switch (node.object) {
      case "block": {
        const children = node.nodes.map(renderNode)
        return <g key={++i}>{children}</g>
      }
      case "text": {
        const children = node.leaves.map(renderNode)
        return (
          <text dy={row++ * lineHeight} key={++i}>
            {children}
          </text>
        )
      }
      case "leaf": {
        return (
          <tspan style={{ fontSize: props.fontSize }} key={++i}>
            {node.text}
          </tspan>
        )
      }
    }
  }

  return (
    <g transform={`translate(${props.x}, ${props.y})`}>
      {props.value.document.nodes.map(renderNode)}
    </g>
  )
}
type TextEditorProps = Partial<SlideTextElement> & {
  onSaveText: (value: string) => void
  onfocus?: (e) => void
  onBlur?: (e) => void
}

export const TextElementEditor = (props: TextEditorProps) => {
  const { onSaveText, ...rest } = props
  const [value, setValue] = useState<Value>(Value.fromJSON(props.value))
  const save = useCallback(
    debounce(value => props.onSaveText(value.toJSON()), 500),
    [props.onSaveText]
  )
  return (
    <foreignObject x={props.x} y={props.y} width={props.width} height={1280}>
      <TextEditor fontSize={props.fontSize}>
        <Editor
          autoFocus
          value={value}
          onChange={({ value }) => {
            setValue(value)
            save(value)
          }}
        />
      </TextEditor>
    </foreignObject>
  )
}

export const TextEditor = styled.div<{
  fontSize: number
}>`
  font-size: ${p => p.fontSize}pt;
  line-height: 1.2em;
  & [data-slate-editor] {
    border: 2px solid transparent;
  }
  & [data-slate-editor]:focus {
    border: 2px solid #ffcc59;
  }
`
