import "./GradientMain.css";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { AnimatedBackground } from "../../Animations/AnimeBackground";
import styled from "styled-components";

interface GradientMainProps {
  linearGradient: string;
  onChange: () => void;
}

const AnimatedDiv = styled.div`
  background-size: 300% 300% !important;
  animation: ${AnimatedBackground.BackgroundTransition(10, true)};
`;

export const GradientMain: React.FC<GradientMainProps> = ({
  linearGradient,
  onChange,
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
    <AnimatedDiv style={style}>
      <PlusOutlined
        onClick={onChange}
        className="plus-color"
        style={stylePlus}
      />
    </AnimatedDiv>
  );
};
