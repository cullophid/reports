import * as React from "react"
import styled from "styled-components"


const Label = styled.label`
  margin-bottom: 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
`

const Input = styled.input`
width: 360px;
background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 2px;
padding: 0 15px;
`

type Props = {
  label?:string
  onInput: (value:string) => void
  value: string
}
export const TextInputLarge = (props:Props) => 
  <div>
    <Label> {props.label || ""}</Label>
    <Input onChange ={e => props.onInput(e.target.value)} value={props.value} />
  </div>