import styled from "@emotion/styled"
export const Header = styled.header<{
  gridArea?: string
}>`
  grid-area: ${p => p.gridArea || "auto"};
  display: grid;
  padding: 0 32px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`
export const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 300;
  margin: 0;
`
