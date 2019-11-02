import { useRef, useState, useEffect, MutableRefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useMeasure(ref: MutableRefObject<any>) {
  const [bounds, set] = useState<Omit<DOMRectReadOnly, "toJSON"> | null>(null);
  useEffect(() => {
    const ro = new ResizeObserver(() =>
      set(ref.current.getBoundingClientRect())
    );
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return bounds;
}
