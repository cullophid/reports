import ApolloClient, { Operation, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-fetch";

import { ApolloProvider } from "@apollo/react-hooks";
import { ReactChild, useMemo } from "react";
import { useAuth } from "./Auth";

export const Apollo = ({ children }: { children: ReactChild }) => {
  const jwt = useAuth()
  const client = useMemo(() => new ApolloClient({
    uri: "/api/graphql",
    request: async (operation: Operation) => {
      operation.setContext({
        headers: jwt ? {
          Authorization: `Bearer ${jwt}`
        } : {},
      });
    },
    onError: ({ response, operation }) => {
      if (response && response.errors) {
        console.error(response, operation);
      }
    },
    cache: new InMemoryCache({
      dataIdFromObject: object => object.id,
    }),
    fetch,
  }), [jwt])

  return (
    <ApolloProvider client={client} >
      {children}
    </ApolloProvider>
  )
}