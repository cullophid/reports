import React from "react"
import { SlideType } from "src/models"
// @ts-ignore
import { Dialog } from "@reach/dialog"
import { slideTemplates } from "src/slide-templates"
import styled from "styled-components"
import { createGlobalStyle, css, keyframes } from "styled-components"
import { Button } from "src/components/Button"

type Props = {
  showDialog: boolean
  onDismiss: () => void
  onSelect: (slide: SlideType) => void
}
export const SlideTemplateModal = (props: Props) => {
  return (
    <>
      <Global />
      <Dialog isOpen={props.showDialog}>
        <Header>
          <Title> Select Template</Title>
          <CloseButton onClick={props.onDismiss}>CLOSE</CloseButton>
        </Header>
        <TemplateList>
          {slideTemplates.map(template => (
            <SlideLi key={template.id} />
          ))}
        </TemplateList>
      </Dialog>
    </>
  )
}
const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`
const scaleIn = keyframes`
from {
  opacity:0;
  transform: scale(0.5);
}
to {
  opacity:1;
  transform: scale(1);
}
`

const Global = createGlobalStyle`
  :root {
    --reach-dialog: 1;
  }

  [data-reach-dialog-overlay] {
    background: hsla(0, 0%, 0%, 0.33);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    opacity: 0;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 300ms;
  }

  [data-reach-dialog-content] {
    position: relative;
    width: 60vw;
    margin: 10vh auto;
    background: white;
    outline: none;
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-auto-flow: rows;
    height: 80vh;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    opacity: 0;
    animation-name: ${scaleIn};
    animation-fill-mode: forwards;
    animation-duration: 300ms;
    @media (max-width: 700px) {
      width: 80vw;
    }
  }
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 28px;
  right: 28px;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: auto;
  place-content: center center;
`

const Title = styled.h1`
  margin: 0;
  font-family: "Montserrat";
`

const TemplateList = styled.div`
  padding: 16px 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 32px;
  overflow-y: auto;
`

const SlideLi = styled.li`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 150px;
  }
`
