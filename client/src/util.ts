export const values = <T>(object: { [key: string]: T }): T[] =>
  Object.keys(object).map((key) => object[key]);

export const debounce = <Arg>(f: (arg: Arg) => void, ms: number) => {
  let timer: any;
  return (arg: Arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => f(arg), ms);
  };
};
