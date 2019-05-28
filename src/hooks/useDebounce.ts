import { useEffect } from "react"

export const useDebounce = (f: () => void, ms: number, triggers: any[]) => {
  useEffect(() => {
    const timeOut = setTimeout(f, ms)
    return () => clearTimeout(timeOut)
  }, triggers)
}
