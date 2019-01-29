export const getItem = <T>(key: string): T | null => {
  let json = localStorage.getItem(key);
  if (!json) return null;
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error(`error parsening json from localStorage:${key}`, e.stack);
    return null;
  }
};

export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const deleteItem = localStorage.deleteItem;
