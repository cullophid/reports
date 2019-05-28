import React, { useState, FocusEvent } from "react"
import styled from "@emotion/styled"
import { Editor, EventHook } from "slate-react"
import Plain from "slate-plain-serializer"
import { useDebounce } from "src/hooks/useDebounce"

type PropType = {
  initialValue: string
  onChange: (value: string) => void
  onFocus?: EventHook
  onBlur?: EventHook
}

export const MarkdownEditor = (props: PropType) => {
  const { initialValue, onChange, ...rest } = props
  const [value, setValue] = useState(Plain.deserialize(props.initialValue))
  useDebounce(() => props.onChange(Plain.serialize(value)), 500, [value])

  return (
    <TextEditor>
      <Editor
        value={value}
        onChange={({ value }) => setValue(value)}
        {...rest}
      />
    </TextEditor>
  )
}

export const TextEditor = styled.div`
  line-height: 1.2em;
  & [data-slate-editor] {
    border: 2px solid transparent;
  }
  & [data-slate-editor]:focus {
    border: 2px solid #ffcc59;
  }
`
