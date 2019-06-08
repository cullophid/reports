import { createContext, useContext } from "react"
import { Editor } from "draft-js"

export type EditorSelection =
  | {
      type: "Node" | "Slide"
      id: string
    }
  | undefined

export const SelectionContext = createContext<
  [EditorSelection, (selection: EditorSelection) => void]
>([undefined, () => undefined])
