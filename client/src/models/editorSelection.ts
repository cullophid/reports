export type editorSelection =
  | { type: "Element"; edit: boolean; elementId: string }
  | { type: "Slide"; slideId: string }
  | { type: "None" };
