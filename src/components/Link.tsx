import * as React from "react";
import styled from "styled-components";
import history from "../history";

const A = styled.a`
  cursor: pointer;
`;

type Props = {
  to: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default (props: Props) => {
  const onClick = (e: React.MouseEvent<Element>) => {
    e.preventDefault();
    history.push(props.to);
  };
  return (
    <A onClick={onClick} {...props}>
      {props.children}
    </A>
  );
};
