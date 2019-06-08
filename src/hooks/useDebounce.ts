import { useEffect, useState } from "react"

export const useDebounce = <Value>(value: Value, ms = 300) => {
  const [currentValue, setCurrentValue] = useState<Value>(value)
  useEffect(() => {
    const timeOut = setTimeout(() => setCurrentValue(value), ms)
    return () => clearTimeout(timeOut)
  }, [value])
  return currentValue
}
