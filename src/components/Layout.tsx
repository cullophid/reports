import styled from "styled-components"

type Column = {
  flex?: number,
  top?:boolean,
  middle?:boolean,
  bottom?:boolean,
  left?:boolean,
  center?:boolean,
  right?:boolean,
  stretch?:boolean,
  spacing?: string,
  spaceEvenly?:boolean,
  spaceAround?:boolean,
  spaceBetween?:boolean
}

let alignColumn = (props:Column) => 
  props.bottom ? "flex-end"
    : props.center ? "center"
    : props.stretch ? "stretch"
    : "flex-start";

let justifyColumn = (props:Column) => 
  props.right ? "flex-end"
    : props.middle ? "center"
    : props.spaceEvenly ? "space-evenly"
    : props.spaceAround ? "space-around"
    : props.spaceBetween ? "space-between"
    : "flex-start"

export const Column = styled.div<Column>`
  display:flex;
  flex: ${props => props.flex || 0};
  flex-direction: column;
  align-items: ${props => alignColumn(props)};
  justify-content: ${props => justifyColumn(props)};
  & > * {
    margin-bottom: ${props => props.spacing || "0"};
  }
  & > *:last-child {
    margin-bottom: 0;
  }
 }
`
type Row = {
  flex?: number,
  top?:boolean,
  middle?:boolean,
  bottom?:boolean,
  left?:boolean,
  center?:boolean,
  right?:boolean,
  stretch?:boolean,
  spacing?: string,
  spaceEvenly?:boolean,
  spaceAround?:boolean,
  spaceBetween?:boolean
}

let justifyRow = (props:Row) => 
  props.right ? "flex-end"
    : props.center ? "center"
    : props.spaceEvenly ? "space-evenly"
    : props.spaceAround ? "space-around"
    : props.spaceBetween ? "space-between"
    : "flex-start"

let alignRow = (props:Row) => 
  props.right ? "flex-end"
    : props.middle ? "center"
    : props.stretch ? "stretch"
    : "flex-start"

export const Row = styled.div<Column>`
  display:flex;
  flex: ${props => props.flex || 0};
  flex-direction: column;
  align-items: ${props => alignRow(props)};
  justify-content: ${props => justifyRow(props)};
  & > * {
    margin-right: ${props => props.spacing || "0"};
  }
  & > *:last-child {
    margin-right: 0;
  }
 }
`

export const Center = styled.div`
  display:flex;
  height: 100%;
  justify-content:center;
  align-items: center;
`