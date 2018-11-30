import React, { useState, useRef, useEffect } from "react";

type props = {
  width: number;
  style?: any;
  render: (scale: number) => React.ReactChild;
};

type state = {
  scale: number | null;
};

const AutoScale = (props: props) => {
  const [scale, setScale] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const calculateScale = () => {
    window.requestAnimationFrame(() => {
      if (wrapperRef.current === null)
        throw new Error("Cound not find wrapper");
      let { width } = wrapperRef.current.getBoundingClientRect();
      setScale(width / props.width);
    });
  };

  useEffect(() => {
    window.addEventListener("resize", calculateScale);
    calculateScale();
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  return (
    <div
      style={props.style || { width: "100%", overflowX: "visible" }}
      ref={wrapperRef}
    >
      {scale !== null && props.render(scale)}
    </div>
  );
};

export default AutoScale;
