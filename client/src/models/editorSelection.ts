export type EditorSelectionType =
  | { type: "Element"; elementId: string }
  | { type: "Slide"; slideId: string }
  | { type: "None" };
