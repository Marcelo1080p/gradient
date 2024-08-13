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

  const [colors, setColors] = useState<string[]>(["#ffffff", "#00ff00"]);
  const [direction, setDirection] = useState<number>(120);

  console.log(colors)
  function onChangeBackground(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newColor = event.target.value;
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  }

  function onChangeDirection(value: number | number[]) {
    const directionValue = Array.isArray(value) ? value[0] : value;
    linearGradient = `linear-gradient(${directionValue}deg, ${colors.join(
      ", "
    )})`;
    setDirection(directionValue);
  }

  function addNewColor() {
    setColors([...colors, "#FF00FF"]);
  }

  let linearGradient = `linear-gradient(${direction}deg, ${colors.join(", ")})`;

  return (
    <Row style={styleGenerate}>
      <Col span={24}>
        <GradientMain onChange={addNewColor} linearGradient={linearGradient} />
      </Col>
      <Col style={styleMainCol} span={24}>
        <Col
          span={5}
          style={{ display: "flex", gap: "0.5rem", border: "1px solid white" }}
        >
          <Col span={12} style={styleBtns}>
            <ButtonDirection title="Left" onClick={() => setDirection(270)} />
            <ButtonDirection title="Top" onClick={() => setDirection(0)} />
          </Col>
          <Col span={12} style={styleBtns}>
            <ButtonDirection title="Bottom" onClick={() => setDirection(180)} />
            <ButtonDirection title="Right" onClick={() => setDirection(90)} />
          </Col>
        </Col>
        <Col span={5} style={{ border: "1px solid white" }}>
          <SliderGradient onChangeDirection={onChangeDirection} />
        </Col>
        <Col span={5} style={{ border: "1px solid white", color: "white" }}>
          <h2>Colors</h2>
          <section style={{ display: "flex", flexWrap: "wrap" }}>
            {colors.map((color, index) => (
              <Colors
                value={color}
                key={index}
                numColor={`${index+1}`.toString()}
                onChange={(e) => onChangeBackground(index, e)}
              />
            ))}
          </section>
        </Col>
      </Col>
    </Row>
  );
};
