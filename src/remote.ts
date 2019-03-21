export type t<T> =
  | { status: "Loading" }
  | { status: "Error"; error: Error }
  | { status: "Success"; data: T }

export const loading: t<any> = { status: "Loading" }

export const error = <T = any>(error: Error): t<T> => ({
  status: "Error",
  error,
})

export const success = <T>(data: T): t<T> => ({
  status: "Success",
  data,
})

export const map = <T1, T2>(remote: t<T1>, f: (t: T1) => T2) => {
  if (remote.status === "Success") {
    return success(f(remote.data))
  }
  return remote
}
