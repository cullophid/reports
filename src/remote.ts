export type Remote<Data, Err = Error> =
  | { loading?: false; data?: undefined; error?: undefined } // idle
  | { loading: true; data?: undefined; error?: undefined } // loading
  | { data: Data; loading?: false; error?: undefined } // success
  | { error: Err; loading?: false; data?: undefined } // error
