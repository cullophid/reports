import styled from "@emotion/styled";
import { colors } from "../theme";
import { ReactNode } from "react";
import Link from "next/link";

import { Text, Title } from "./Typography";

export const Crumbs = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  place-content: center start;

  & > * {
    position: relative;
    ::after {
      content: "/";
      margin-left: 8px;
      color: ${colors.text};
    }
    :last-child::after {
      content: none;
    }
  }
`;

type CrumbLinkProps = {
  href: string;
  children: ReactNode;
};
export const CrumbLink = (props: CrumbLinkProps) => (
  <Link href={props.href}>
    <a>
      <Text color={colors.primary} fontSize="1rem;">
        {props.children}
      </Text>
    </a>
  </Link>
);

export const CrumbTitle = (props: { children: ReactNode }) => (
  <Title as="h1" fontSize="1rem">
    {props.children}
  </Title>
);
