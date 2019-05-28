import React, { useState, useEffect } from "react"

type Props = {
  onDragStart?: (e: React.MouseEvent) => void
  onDragEnd?: (e: MouseEvent) => void
  onDrag?: (e: React.MouseEvent) => void
}
export const useDraggable = (props: Props) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const onMouseDown = (e: MouseEvent) => {
    setIsPressed(true)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isPressed) {
      return
    }
    if (!isDragging) {
      props.onDragStart && props.onDragStart(e)
      setIsDragging(true)
    }
    props.onDrag && props.onDrag(e)
  }
  useEffect(() => {
    const mouseUp = (e: MouseEvent) => {
      if (isDragging) {
        props.onDragEnd && props.onDragEnd(e)
      }
      setIsDragging(false)
      setIsPressed(false)
    }
    document.addEventListener("mouseup", mouseUp)
    document.addEventListener("mouseleave", mouseUp)
    return () => {
      document.removeEventListener("mouseup", mouseUp)
      document.removeEventListener("mouseleave", mouseUp)
    }
  }, [isDragging, isPressed, props.onDragEnd])

  return { onMouseDown, onMouseMove }
}
