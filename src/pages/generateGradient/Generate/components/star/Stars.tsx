import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const RainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
  z-index: 3;
  overflow: hidden;
`;

const rainAnimation = keyframes`
  from {
    top: -135%
  } to {
    top: 120%;
  }
`


const Rain = styled.span`
  position: absolute;
  border-radius: 16px;
  background-color: pink;
  z-index: 400;
  animation: ${rainAnimation} infinite;
`;

export const Stars: React.FC = () => {
  const rainQuantity = Array.from({ length: 40 }, (_, index) => index + 1);

  useEffect(() => {

  }, [rainQuantity])

  return (
    <RainContainer>
      {rainQuantity.map((_, index) => (
        <Rain
          key={index}
          style={{
            width:  `${Math.floor(Math.random() * 5)}px`,
            height: `${Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() + 10}s`,
            animationDuration: `${Math.floor((Math.random() + 0.1) * 10)}s`
          }}
        />
      ))}
    </RainContainer>
  );
};
