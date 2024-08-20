import React, { useState } from "react";
import { GradientMain } from "./components/gradient/GradientMain";
import { Row, Col, Button } from "antd";
import { ButtonDirection } from "./components/buttonDirection/ButtonDirection";
import { SliderGradient } from "./components/slide/SliderGradient";
import { Colors } from "./components/colors/Colors";
import { GenerateStyle } from "./style/GenerateStyle";
import { GradientServices } from "./services/GradientServices";
import { PopoverAnime } from "./components/PopoverAnime/PopoverAnime";

import { ICfgBGServices } from "./services/ICfgBGServices";
import { PopoverFilter } from "./components/PopoverFilter/PopoverFilter";
import { CopyCssService } from "./services/CopyCssService";
import { DownloadOutlined } from "@ant-design/icons";
import { ICfgFilterServices } from "./services/ICfgFilterBlur";
import { DownloadService } from "./services/DownloadService";


export const Generate: React.FC = () => {
  const styleGenerate: React.CSSProperties = {
    border: "1px solid white",
  };
  const styleBtns = GenerateStyle.styleBtns();
  const styleMainCol = GenerateStyle.styleMainCol();

  const [colors, setColors] = useState<string[]>(["#ffffff", "#00ff00"]);
  const [direction, setDirection] = useState<number>(120);
  const [cfgBG, setCfgBG] = useState<ICfgBGServices>({
    active: false,
    duration: 3,
    infinite: false,
    direction: "",
  });
  const [cfgBlur, setCfgBlur] = useState<ICfgFilterServices>({
    active: false,
    px: 2,
  });
  const updateCfgBG = (newCfg: ICfgBGServices) => {
    setCfgBG(newCfg);
  };
  const updateCfgBlur = (newFilter: ICfgFilterServices) => {
    setCfgBlur(newFilter);
  };
  const linearGradient = `${direction}deg, ${colors.join(", ")}`;

  return (
    <Row style={styleGenerate} wrap={true}>
      <Col span={24}>
        <GradientMain
          active={cfgBG.active}
          duration={cfgBG.duration}
          infinite={cfgBG.infinite}
          direction={cfgBG.direction}
          activeFilter={cfgBlur.active}
          px={cfgBlur.px}
          onChange={() =>
            GradientServices.addNewColor(10, "#FF00FF", colors, setColors)
          }
          linearGradient={linearGradient}
        />
      </Col>
      <Col style={styleMainCol} span={24} className="btn-directions">
        <Col
          span={5}
          style={{ display: "flex", gap: "0.5rem", border: "1px solid white"}}
        >
          <Col span={12} style={styleBtns}>
            <ButtonDirection
              title="Left"
              onClick={() =>
                GradientServices.onChangeDirection(270, setDirection)
              }
            />
            <ButtonDirection
              title="Top"
              onClick={() =>
                GradientServices.onChangeDirection(0, setDirection)
              }
            />
          </Col>
          <Col span={12} style={styleBtns}>
            <ButtonDirection
              title="Bottom"
              onClick={() =>
                GradientServices.onChangeDirection(180, setDirection)
              }
            />
            <ButtonDirection
              title="Right"
              onClick={() =>
                GradientServices.onChangeDirection(90, setDirection)
              }
            />
          </Col>
        </Col>
        <Col span={5} style={{ border: "1px solid white" }} className="range">
          <SliderGradient
            onChangeDirection={(value) =>
              GradientServices.onChangeDirection(value, setDirection)
            }
          />
        </Col>
        <Col span={5} style={{ border: "1px solid white", color: "white" }} className="btn-colors">
          <h2>Colors</h2>
          <section style={{ display: "flex", flexWrap: "wrap" }}>
            {colors.map((color, index) => (
              <Colors
                value={color}
                key={index}
                numColor={`${index + 1}`.toString()}
                onChange={(event) =>
                  GradientServices.onChangeBackground(
                    index,
                    event,
                    colors,
                    setColors
                  )
                }
              />
            ))}
          </section>
        </Col>
        <Col
          className="btn-properties"
          span={6}
          style={{
            border: "1px solid #FFFF",
            display: "flex",
            gap: "1rem",
            height: "80%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col style={{display: "flex",
            gap: "1rem", flexDirection: "column"}}>
            <PopoverAnime cfgBG={cfgBG} updateCfgBG={updateCfgBG} />
            <PopoverFilter cfgBlur={cfgBlur} updateCfgBlur={updateCfgBlur} />
          </Col>
          <Col style={{ display: "flex",
            gap: "1rem", flexDirection: "column"}}>
            <Button
              onClick={() =>
                CopyCssService.generateCss(
                  linearGradient,
                  cfgBG.active,
                  cfgBG.duration,
                  cfgBG.infinite,
                  cfgBG.direction
                )
              }
            >
              Copy CSS
            </Button>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size="middle"
              onClick={() =>
                DownloadService.downloadCssFile(
                  linearGradient,
                  cfgBG.active,
                  cfgBG.duration,
                  cfgBG.infinite,
                  cfgBG.direction
                )
              }
            >
              Download CODE
            </Button>
          </Col>
        </Col>
      </Col>
    </Row>
  );
};
