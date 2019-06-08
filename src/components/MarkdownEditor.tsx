import React, { useState, FocusEvent, Ref, RefObject, useEffect } from "react"
import styled from "@emotion/styled"
import { Editor, EventHook } from "slate-react"
import Plain from "slate-plain-serializer"
import { useDebounce } from "src/hooks/useDebounce"
import { primaryColor } from "src/theme"

type PropType = {
  initialValue: string
  onChange: (value: string) => void
  onFocus?: EventHook
  onBlur?: EventHook
}

export const MarkdownEditor = (props: PropType) => {
  const { initialValue, onChange, ...rest } = props
  const [value, setValue] = useState(Plain.deserialize(props.initialValue))
  const debouncedValue = useDebounce(value)

  useEffect(() => {
    props.onChange(Plain.serialize(debouncedValue))
  }, [debouncedValue])

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
  height: 100%;
  [data-slate-editor] {
    height: 100%;
    border: 2px solid transparent;
  }
  [data-slate-editor]:focus {
    border-color: ${primaryColor};
  }
`
