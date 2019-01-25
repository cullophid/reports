import styled from "styled-components";
export const Page = styled.div`
  position: relative;
  display: grid;
  min-height: 100vh;
  grid-template-columns: auto 1fr;
  grid-auto-flow: column;
  grid-template-areas: "sidebar main";
  background: #f5f5f5;
`;
