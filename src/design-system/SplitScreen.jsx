import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100vw;
`;

export const Panel = styled.div`
  flex: ${(p) => p.flex};
  border: 1px dotted black;
  cursor: pointer;
  background-color: ${(p) => p.backgroundColor};
`;
const SplitScreen = ({ children, leftWidth, leftBg, rightWidth, rightBg }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth} backgroundColor={leftBg}>
        {left}
      </Panel>
      <Panel flex={rightWidth} backgroundColor={rightBg}>
        {right}
      </Panel>
    </Container>
  );
};

export default SplitScreen;
