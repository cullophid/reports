type Location = {
  path: string;
  hash: string;
  query: {
    [s: string]: string;
  };
  params: {
    [s: string]: string;
  };
};
type Resolver<T> = (location: Location) => T;
type Route<T> = [string, Resolver<T>];

const parseQuery = (query: string) =>
  query
    .split("?")
    .map((param) => param.split("=").map(decodeURIComponent))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

let parseUrl = (url: string) => {
  let a = document.createElement("a");
  a.href = url;
  return {
    path: a.pathname,
    hash: a.hash,
    query: parseQuery(a.search),
    params: {}
  };
};

let isVar = (s: string) => s.indexOf(":") == 0;
const matchRoute = (selector: string, location: Location) => {
  let path = location.path.split("/");
  let params = {};
  for (let i in selector.split("/")) {
    // vars gets added to params
    if (selector[i] === "*") {
      return { ...location, params };
    } else if (isVar(selector[i])) {
      params[selector[i].slice(1)] = path[i];
    } else if (selector[i] !== path[i]) {
      // non vars must match the selector
      return null;
    }
  }
  if (selector.length > path.length) return null; // ensure we match the full url

  return { ...location, params };
};

export const resolve = <T>(url: string, routes: Route<T>[], fallback: T) => {
  const location = parseUrl(url);
  console.log(location);
  for (let [selector, handler] of routes) {
    let match = matchRoute(selector, location);
    if (match !== null) {
      return handler(match);
    }
  }
  return fallback;
};
