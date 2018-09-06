
import * as React from "react"
type Component<Props, State> = React.ComponentClass<Props, State> | React.StatelessComponent<Props>
export default <Props, State>(Component:Component<Props,State>) => {
  return class extends React.PureComponent<Props,State> {
    render() {
      return (
        <Component {...this.props}> {this.props.children} </Component>
      )
    }
  }
}