import ApolloClient, { Operation, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-fetch";
import { ApolloProvider } from "@apollo/react-hooks";
import { ReactChild, useMemo, useEffect, useRef } from "react";
import React from "react";
import { Global, css } from "@emotion/core";
import { useRouter } from "next/router";

const globalStyles = css`
  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
`;

type Props = {
  children: ReactChild;
};

const UNAUTHENTICATED_ROUTES = ["/login", "/check-email"];

export const Page = ({ children }: Props) => {
  const router = useRouter();
  const fetchAuthToken = async () => {
    try {
      const res = await fetch(process.env.ORIGIN + "/api/refresh_token");
      if (res.status !== 200) {
        throw new Error(await res.text());
      }
      const { auth_token } = await res.json();
      return auth_token;
    } catch (e) {
      console.error(e);
      if (UNAUTHENTICATED_ROUTES.includes(router.pathname) === false) {
        router.push("/login");
      }
    }
  };
  const jwt = useRef<Promise<string>>(fetchAuthToken());

  useEffect(() => {
    const interval = setInterval(() => {
      jwt.current = fetchAuthToken();
    }, 5 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        uri: "/api/graphql",
        request: async (operation: Operation) => {
          try {
            const authToken = await jwt.current;
            operation.setContext({
              headers: {
                Authorization: `Bearer ${authToken}`
              }
            });
          } catch (e) {
            console.error(e);
          }
        },
        onError: ({ response, operation }) => {
          if (response && response.errors) {
            console.error(response, operation);
          }
        },
        cache: new InMemoryCache({
          dataIdFromObject: object => object.id
        }),
        fetch
      }),
    []
  );
  return (
    <ApolloProvider client={apolloClient}>
      <Global styles={globalStyles} />
      {children}
    </ApolloProvider>
  );
};
