import React, { useCallback, useContext, useEffect, useRef } from "react"
import { SlideType, NodeType } from "src/models"
import styled from "@emotion/styled"
import { SlideWrap, SlidePlaceholder } from "../Slide"
import { TextNode, TextNodeEditor } from "../TextNode"
import { SelectionContext } from "./selection"
type SlideEditorProps = {
  slide: SlideType
  onChange: (slide: SlideType) => void
}

export const SlideEditor = (props: SlideEditorProps) => {
  const slideRef = useRef<HTMLDivElement>(null)

  const scale = slideRef.current
    ? slideRef.current.getBoundingClientRect().width / props.slide.width
    : 1
  const [selection, setSelection] = useContext(SelectionContext)
  const updateNode = (updatedNode: NodeType) =>
    props.onChange({
      ...props.slide,
      nodes: props.slide.nodes.map(node =>
        node.id === updatedNode.id ? updatedNode : node
      ),
    })

  return (
    <SlideEditorWrap>
      <SlideWrap
        ref={slideRef}
        width={props.slide.width}
        height={props.slide.height}
      >
        {props.slide.nodes.map(node => {
          if (node.type === "Text") {
            return (
              <TextNodeEditor key={node.id} node={node} onUpdate={updateNode} />
            )
          }
        })}
      </SlideWrap>
    </SlideEditorWrap>
  )
}
export const SlideEditorPlaceholder = () => (
  <SlideEditorWrap>
    <SlidePlaceholder />
  </SlideEditorWrap>
)
const SlideEditorWrap = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  justify-self: stretch;
  align-self: stretch;
  padding: 64px;
  @media (max-width: 750px) {
    padding: 0 32px;
    align-content: center;
    display: none;
  }
`
