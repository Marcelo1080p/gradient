import React, { useState, useEffect } from "react";
import "./PopoverAnime.css";
import { Button, Popover, Checkbox, InputNumber, Row, Col } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { AnimationService } from "../../pages/generateGradient/Generate/services/AnimationsServices";
import { ICfgBGServices } from "../../pages/generateGradient/Generate/services/ICfgBGServices";
import { SelectDirection } from "./selectDirection/SelectDirection";

interface PopoverProps {
  cfgBG: ICfgBGServices;
  updateCfgBG: (newCfg: ICfgBGServices) => void;
}

export const PopoverAnime: React.FC<PopoverProps> = ({
  cfgBG,
  updateCfgBG,
}) => {
  const [checked, setChecked] = useState<boolean>(cfgBG.active);
  const [duration, setDuration] = useState<number>(cfgBG.duration);
  const [infinite, setInfinite] = useState<boolean>(cfgBG.infinite);

  useEffect(() => {
    setChecked(cfgBG.active);
    setDuration(cfgBG.duration);
    setInfinite(cfgBG.infinite);
  }, [cfgBG]);

  useEffect(() => {
    AnimationService.activeLinearBackgroundTransition(
      checked,
      duration,
      infinite
    );
  }, [checked, duration, infinite]);

  const handleDurationChange = (value: number | null) => {
    if (value !== null) {
      setDuration(value);
      updateCfgBG({ ...cfgBG, duration: value });
    }
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    updateCfgBG({ ...cfgBG, active: newChecked });
  };

  const handleInfiniteChange = (e: CheckboxChangeEvent) => {
    const newInfinite = e.target.checked;
    setInfinite(newInfinite);
    updateCfgBG({ ...cfgBG, infinite: newInfinite });
  };

  const content = (
    <Row
      style={{
        width: "250px",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Col span={24}>
        <Checkbox className="custom-checkbox" checked={checked} onChange={handleCheckboxChange}>
          Active animation
        </Checkbox>
        <Checkbox checked={infinite} onChange={handleInfiniteChange}>
          Infinite
        </Checkbox>
      </Col>

      <Col span={24}>
        <p>Animation Direction</p>
        <SelectDirection />
      </Col>

      <Col span={24}>
        <InputNumber
          placeholder="Duration Animation"
          value={duration}
          onChange={handleDurationChange}
          addonBefore="Duration: "
          addonAfter="s"
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  );

  return (
    <Popover
    visible={true}
      content={content}
      title="Animation info"
      className="containerPopover"
    >
      <Button >Transition gradient</Button>
    </Popover>
  );
};
