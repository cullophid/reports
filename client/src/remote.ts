export type t<Data, Error> =
  | { status: "Idle" }
  | { status: "Loading" }
  | { status: "Error"; error: Error }
  | { status: "Success"; data: Data };

export const idle: t<any, any> = {
  status: "Idle"
};
export const loading: t<any, any> = {
  status: "Loading"
};

export const success = <Data, Error>(data: Data): t<Data, Error> => ({
  status: "Success",
  data
});
export const error = <Data, Error>(error: Error): t<Data, Error> => ({
  status: "Error",
  error
});
