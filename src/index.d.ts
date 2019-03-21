declare module "*.png"
declare module "*.svg"
declare module "*.jpg"

declare module "react-auto-scale" {
  import { Component, ReactNode, Component } from "react"
  type Props = {
    children: ReactNode
  }
  export default class AutoScale extends Component<Props, {}> {}
}

declare module "react-resize-aware" {
  class ResizeListener extends Component<{}, {}> {}
  export default () => [ResizeListener]
}
