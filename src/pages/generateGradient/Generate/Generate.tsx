import React, { useState } from "react";
import { GradientMain } from "./gradient/GradientMain";
import { Row, Col } from "antd";
import { ButtonDirection } from "./buttonDirection/ButtonDirection";
import { SliderGradient } from "./slide/SliderGradient";
import { Colors } from "./colors/Colors";

export const Generate: React.FC = () => {
  const styleGenerate: React.CSSProperties = {
    border: "1px solid white",
  };
  const styleBtns: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };
  const styleMainCol: React.CSSProperties = {
    border: "1px solid green",
    height: 120,
    display: "flex",
    alignItems: "center",
  };

  // Inicializa o estado colors com o número de componentes Colors
  const [colors, setColors] = useState<string[]>(["#ffffff", "#0f0"]);
  const [direction, setDirection] = useState<string>("120deg");

  function onChangeBackground(index: number, event: React.ChangeEvent<HTMLInputElement>) {
    const newColor = event.target.value;
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  }
      
  const linearGradient = `linear-gradient(${direction}, ${colors.join(", ")})`;

  return (
    <Row style={styleGenerate}>
      <Col span={24}>
        <GradientMain linearGradient={linearGradient} />
      </Col>
      <Col style={styleMainCol} span={24}>
        <Col span={5} style={{ display: "flex", gap: "0.5rem", border: "1px solid white" }}>
          <Col span={12} style={styleBtns}>
            <ButtonDirection title="Left" onClick={() => setDirection("to left")} />
            <ButtonDirection title="Top" onClick={() => setDirection("to top")} />
          </Col>
          <Col span={12} style={styleBtns}>
            <ButtonDirection title="Bottom" onClick={() => setDirection("to bottom")} />
            <ButtonDirection title="Right" onClick={() => setDirection("to right")} />
          </Col>
        </Col>
        <Col span={5} style={{ border: "1px solid white" }}>
          <SliderGradient />
        </Col>
        <Col span={5} style={{ border: "1px solid white", color: "white" }}>
          <h2>Colors</h2>
          <section style={{ display: "flex" }}>
            <Colors numColor="1" onChange={(e) => onChangeBackground(0, e)} />
            <Colors numColor="2" onChange={(e) => onChangeBackground(1, e)} />
          </section>
        </Col>
      </Col>
    </Row>
  );
};
