import { useEffect, useState, useContext, useCallback } from "react";
import { client } from "./apollo";
import {
  QueryOptions,
  ApolloQueryResult,
  MutationOptions,
  ApolloCurrentResult,
  ApolloError,
  FetchResult
} from "apollo-boost";
import { SessionContext } from "./models/session";

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
  const session = useContext(SessionContext);
  const [response, setResponse] = useState<ApolloCurrentResult<T>>({
    networkStatus: 1,
    data: {},
    loading: true
  });

  const context = {
    headers: {
      Authorization: session && `Bearer ${session.accessToken}`
    }
  };

  useEffect(() => {
    const observable = client.watchQuery<T>({ ...options, context });
    const subscription = observable.subscribe((res: ApolloQueryResult<T>) => {
      if (res.data !== response.data) {
        setResponse(res);
      }
    });
    return () => subscription.unsubscribe();
  }, [options]);

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
  const session = useContext(SessionContext);
  const [response, setResponse] = useState<MutationResult<T>>({
    status: "Idle"
  });
  const context = {
    headers: {
      Authorization: session && `Bearer ${session.accessToken}`
    }
  };
  const run = (vars: Vars) => {
    const variables = Object.assign({}, options.variables || {}, vars);
    setResponse({ status: "Loading" });
    client.mutate<T, Vars>({ ...options, variables, context }).then(
      ({ data }: FetchResult<T>) => {
        data &&
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

export const useWindowSize = () => {
  let [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  let cb = useCallback(
    () => setSize({ width: window.innerWidth, height: window.innerHeight }),
    []
  );
  useEffect(() => {
    window.addEventListener("resize", cb);
    () => window.removeEventListener("resize", cb);
  }, []);

  return size;
};
