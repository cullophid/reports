import * as React from "react"
import history from "../history"

type Props = {
  to:string
} & React.HTMLAttributes<HTMLAnchorElement>

export default (props:Props) =>{
  const onClick = (e:React.MouseEvent<Element>) => {
    e.preventDefault()
    history.push(props.to)
  }
  return (

    <a onClick={onClick} {...props} >{props.children}</a>
  )

}