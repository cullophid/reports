import * as React from "react"
import styled from "styled-components"


const Label = styled.label`
  display: block;
  margin-bottom: 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;
  color: #4E4D50;
`

const Input = styled.input`
display:block;
width: 100%;
color:#4E4D50;
height:56px;
font-size: 18px;
background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 2px;
padding: 0 15px;
`
const FormElement = styled.div`
  width:100%;
`

type Props = {
  label?:string
  onInput: (value:string) => void
  value: string
}
export const TextInputLarge = (props:Props) => 
  <FormElement>
    <Label> {props.label || ""}</Label>
    <Input onChange ={e => props.onInput(e.target.value)} value={props.value} />
  </FormElement>