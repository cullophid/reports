export type editorSelection =
  | { type: "TextElement"; edit: boolean; slideId: string; elementId: string }
  | { type: "Slide"; slideId: string }
  | { type: "None"; slideId: string };
