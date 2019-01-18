import { removeListener } from "cluster";
import { removeDirectivesFromDocument } from "apollo-utilities";

export type t<Data, Error> =
  | { state: "Idle" }
  | { state: "Loading" }
  | { state: "Error"; error: Error }
  | { state: "Success"; data: Data };

export const idle: t<any, any> = {
  state: "Idle"
};
export const loading: t<any, any> = {
  state: "Loading"
};
export const error = <Data, Error>(error: Error): t<Data, Error> => ({
  state: "Error",
  error
});
export const success = <Data, Error>(data: Data): t<Data, Error> => ({
  state: "Success",
  data
});

export const toNullable = <Data>(remote: t<Data, any>): Data | null =>
  remote.state === "Success" ? remote.data : null;
