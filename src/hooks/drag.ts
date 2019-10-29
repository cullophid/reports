import { MouseEvent, useState, MutableRefObject, useEffect, useRef } from "react"

export type Pos = { x: number, y: number }
type Config = {
  parentRef?: MutableRefObject<HTMLDivElement>,
  onDrag?: (pos: Pos, origin: Pos) => void;
  onDragStart?: (pos: Pos, origin: Pos) => void;
  onDragEnd?: (pos: Pos, origin: Pos) => void;
}

export const useMouseDrag = (config: Config = {}) => {
  const { parentRef = useRef() } = config

  const calculatePos = (e: MouseEvent) => {
    const box = parentRef.current && parentRef.current.getBoundingClientRect()
    return {
      x: e.clientX - (box ? box.left : 0),
      y: e.clientY - (box ? box.top : 0)
    }
  }
  const [dragOrigin, setDragOrigin] = useState<Pos | undefined>()
  const [dragPos, setDragPos] = useState<Pos | undefined>()

  useEffect(() => {
    const handler = () => {
      if (dragPos && config.onDragEnd) {
        config.onDragEnd(dragPos, dragOrigin)
      }
      setDragPos(undefined);
      setDragOrigin(undefined);
    }
    window.addEventListener("mouseup", handler)
    return () => window.removeEventListener("mouseup", handler)
  }, [dragPos, config.onDragEnd])



  return {
    dragHandlers: {

      onMouseDown: (e: MouseEvent) => {
        setDragOrigin(calculatePos(e))
      },
      onMouseMove: (e: MouseEvent) => {
        if (dragOrigin) {
          setDragPos(calculatePos(e))
          if (dragPos) {
            config.onDragStart && config.onDragStart(dragPos, dragOrigin)
          }
          config.onDrag && config.onDrag(dragPos, dragOrigin)
        }
      },
    },
    isDragging: !!dragPos,
    dragPos,
    dragOrigin: dragPos && dragOrigin,
    parentRef
  }

}