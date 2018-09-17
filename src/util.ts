export const values  = <T>(object:{[key:string]:T}): T[] => 
  Object.keys(object).map(key => object[key])