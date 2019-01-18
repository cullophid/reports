import { useEffect, useState } from "react";
import { client } from "./apollo";
import {
  QueryOptions,
  ApolloQueryResult,
  MutationOptions,
  ApolloCurrentResult,
  ApolloError
} from "apollo-boost";

export type QueryResult<T> =
  | { status: "Loading" }
  | { status: "Ready"; data: T }
  | { status: "Error"; error: ApolloError };

const queryResult = <T>({
  loading,
  error,
  data
}: ApolloCurrentResult<T>): QueryResult<T> => {
  if (loading) return { status: "Loading" };
  if (error) return { status: "Error", error };
  return { status: "Ready", data: data as T };
};

export const useQuery = <T>(options: QueryOptions): QueryResult<T> => {
  const [response, setResponse] = useState<ApolloCurrentResult<T>>({
    networkStatus: 1,
    data: {},
    loading: true
  });

  useEffect(
    () => {
      const observable = client.watchQuery<T>(options);
      const subscription = observable.subscribe((res: ApolloQueryResult<T>) => {
        if (res.data !== response.data) {
          setResponse(res);
        }
      });
      return () => subscription.unsubscribe();
    },
    [options]
  );

  return queryResult(response);
};

export type MutationResult<T> =
  | { status: "Idle" }
  | { status: "Loading" }
  | { status: "Ready"; data: T }
  | { status: "Error"; error: ApolloError };

export const useMutation = <T, Vars = { [key: string]: any }>(
  options: MutationOptions<T, Vars>
): [(vars: Vars) => void, MutationResult<T>] => {
  const [response, setResponse] = useState<MutationResult<T>>({
    status: "Idle"
  });
  const run = (vars: Vars) => {
    const variables = Object.assign({}, options.variables || {}, vars);
    setResponse({ status: "Loading" });
    client.mutate<T, Vars>({ ...options, variables }).then(
      ({ data }: { data: T }) => {
        setResponse({
          status: "Ready",
          data
        });
      },
      (error: ApolloError) => {
        setResponse({
          status: "Error",
          error
        });
      }
    );
  };
  return [run, response];
};
