import * as React from "react"
import {push} from "./simpleRouter"
// import * as Finch from "finch"

type Props = {
  to:string
} & React.HTMLAttributes<HTMLAnchorElement>

export default (props:Props) =>{
  const onClick = (e:React.MouseEvent<Element>) => {
    e.preventDefault()
    push(props.to)
  }
  return (

    <a onClick={onClick} {...props} >{props.children}</a>
  )

}