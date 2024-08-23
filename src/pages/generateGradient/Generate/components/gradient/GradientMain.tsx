import "./GradientMain.css";
import React from "react";
import styled, { css } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { backgroundTransition } from "../../../Animations/AnimeBackground";
import { Stars } from "../star/Stars";

interface GradientMainProps {
  linearGradient: string;
  onChange: () => void;
  active: boolean;
  duration: number;
  infinite: boolean;
  direction: string;
  px: number;
  activeFilter: boolean;
  activeRain: boolean;
  quantityStars: number;
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
      animation: ${backgroundTransition(duration, infinite, direction)}
        ${duration}s ${infinite ? "infinite" : "ease"} ${direction};
    `}
`;

const Filter = styled.div<{ activeFilter: boolean; px: number }>`
  background-color: rgba(0, 0, 0, 0.849);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  ${({ activeFilter, px }) =>
    activeFilter &&
    css`
      backdrop-filter: blur(${px}px);
    `}
`;

export const GradientMain: React.FC<GradientMainProps> = ({
  linearGradient,
  onChange,
  active,
  duration,
  infinite,
  direction,
  px,
  activeFilter,
  activeRain,
  quantityStars
}) => {
  const style: React.CSSProperties = {
    background: `linear-gradient(${linearGradient})`,
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
      {activeRain && <Stars quantity={quantityStars} />}
      {activeFilter && <Filter activeFilter={activeFilter} px={px} />}

      <PlusOutlined
        onClick={onChange}
        className="plus-color"
        style={stylePlus}
      />
    </AnimatedDiv>
  );
};
