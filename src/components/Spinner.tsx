import styled, {keyframes} from "styled-components"

const spin = keyframes`
  from {
    transform:rotate(0)
  }
  to {
    transform:rotate(360deg)
  }
`

type Props = {
  size:number,
  color: string
}

export default styled.div<Props>`
  border: 2px solid transparent;
  border-bottom-color: ${props => props.color};
  border-right-color: ${props => props.color};
  border-radius: 1000px;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${spin};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`

