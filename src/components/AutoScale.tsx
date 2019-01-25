import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import resizeEvent from "element-resize-event";

type Props = {
  children: React.ReactNode;
};
export const AutoScale = (props: Props) => {
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const content = contentRef.current && contentRef.current.children[0];

    const wrapper = wrapperRef.current;
    if (!content || !wrapper) throw new Error("Actual content not loaded");

    setContentSize({
      width: content.getBoundingClientRect().width,
      height: content.getBoundingClientRect().height
    });
    setWrapperSize({
      width: wrapper.getBoundingClientRect().width,
      height: wrapper.getBoundingClientRect().height
    });

    setScale(
      wrapper.getBoundingClientRect().width /
        content.getBoundingClientRect().width
    );

    resizeEvent(contentRef.current as Element, () => {
      setContentSize({
        width: content.getBoundingClientRect().width,
        height: content.getBoundingClientRect().height
      });
      setScale(
        wrapper.getBoundingClientRect().width /
          content.getBoundingClientRect().width
      );
    });

    resizeEvent(wrapperRef.current as Element, () => {
      setWrapperSize({
        width: wrapper.getBoundingClientRect().width,
        height: wrapper.getBoundingClientRect().height
      });
      setScale(
        wrapper.getBoundingClientRect().width /
          content.getBoundingClientRect().width
      );
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Container
        style={{
          height: contentSize.height * scale,
          width: contentSize.width * scale
        }}
      >
        <Content ref={contentRef} style={{ transform: `scale(${scale})` }}>
          {props.children}
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  max-width: 100%;
  overflow: visible;
`;

const Content = styled.div`
  transform-origin: 0 0 0;
`;
