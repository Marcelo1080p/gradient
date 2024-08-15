// GradientMain.tsx
import React from "react";
import styled, { css } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { backgroundTransition } from "../../../Animations/AnimeBackground";

interface GradientMainProps {
  linearGradient: string;
  onChange: () => void;
  active: boolean;
  duration: number;
  infinite: boolean;
  direction: string;
}

const AnimatedDiv = styled.div<{
  active: boolean;
  duration: number;
  infinite: boolean;
  direction: string;
}>`
  background-size: 300% 300% !important;
  ${({ active, duration, infinite, direction }) =>
    active &&
    css`
      animation: ${backgroundTransition(duration, infinite, direction)} ${duration}s
        ${infinite ? "infinite" : "ease"} ${direction};
    `}
`;

export const GradientMain: React.FC<GradientMainProps> = ({
  linearGradient,
  onChange,
  active,
  duration,
  infinite,
  direction,
}) => {
  const style: React.CSSProperties = {
    background: linearGradient,
    height: "400px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  };

  const stylePlus: React.CSSProperties = {
    fontSize: "5rem",
  };

  return (
    <AnimatedDiv
      active={active}
      duration={duration}
      infinite={infinite}
      direction={direction}
      style={style}
    >
      <PlusOutlined
        onClick={onChange}
        className="plus-color"
        style={stylePlus}
      />
    </AnimatedDiv>
  );
};
