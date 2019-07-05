import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { Editor, EditorState, ContentState, convertToRaw } from "draft-js"
import { useDebounce } from "src/hooks/useDebounce"
import { primaryColor } from "src/theme"
import "draft-js/dist/Draft.css"

type PropType = {
  initialValue: string
  onChange: (value: string) => void
  onFocus?: any
  onBlur?: any
}

export const MarkdownEditor = (props: PropType) => {
  const { initialValue, onChange, ...rest } = props
  const [value, setValue] = useState(
    EditorState.createWithContent(ContentState.createFromText(initialValue))
  )
  const debouncedValue = useDebounce(value)

  useEffect(() => {
    const textValue = convertToRaw(debouncedValue.getCurrentContent())
      .blocks.map(({ text }) => text)
      .join("\n")
    props.onChange(textValue)
  }, [debouncedValue])

  return (
    <TextEditor>
      <Editor editorState={value} onChange={setValue} {...rest} />
    </TextEditor>
  )
}

export const TextEditor = styled.div`
  line-height: 1.2em;
  height: 100%;

  .public-DraftEditor-content:focus {
    border: 1px solid ${primaryColor};
  }
`
