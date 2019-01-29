export type t<Data, Error> =
  | { kind: "Error"; error: Error }
  | { kind: "Ok"; data: Data };

export const ok = <Data, Error = any>(data: Data): t<Data, Error> => ({
  kind: "Ok",
  data
});
export const error = <Error, Data = any>(error: Error): t<Data, Error> => ({
  kind: "Error",
  error
});
