import React from "react";
import { GradientMain } from "./gradient/GradientMain";
import { Row, Col, Button } from "antd";
import { ButtonDirection } from "./buttonDirection/ButtonDirection";

export const Generate: React.FC = () => {
  const styleGenerate: React.CSSProperties = {
    border: "1px solid white",
  };
  const styleBtns: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const styleMainCol: React.CSSProperties={
    border: "1px solid green",
    height: 120,
    display: "flex",
    alignItems: "center",
  }
  return (
    <Row style={styleGenerate}>
      <Col span={24}>
        <GradientMain linearGradient="120deg, red, pink" />
      </Col>
      <Col
        style={styleMainCol}
        span={24}
      >
        <Col span={10} style={{ display: "flex" }}>
          <Col span={6} style={styleBtns}>
            <ButtonDirection title="Left" />
            <ButtonDirection title="Top" />
          </Col>
          <Col span={6} style={styleBtns}>
            <ButtonDirection title="Bottom" />
            <ButtonDirection title="Right" />
          </Col>
        </Col>
      </Col>
    </Row>
  );
};
