import React, { useState, useEffect } from "react";
import { Button, Popover, Checkbox, InputNumber } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { AnimationService } from "../../pages/generateGradient/Generate/services/AnimationsServices";
import { ICfgBGServices } from "../../pages/generateGradient/Generate/services/ICfgBGServices";

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

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    updateCfgBG({ ...cfgBG, active: newChecked });
  };

  const handleDurationChange = (value: number | null) => {
    if (value !== null) {
      setDuration(value);
      updateCfgBG({ ...cfgBG, duration: value });
    }
  };

  const handleInfiniteChange = (e: CheckboxChangeEvent) => {
    const newInfinite = e.target.checked;
    setInfinite(newInfinite);
    updateCfgBG({ ...cfgBG, infinite: newInfinite });
  };

  const content = (
    <div>
      <div>
        <Checkbox checked={checked} onChange={handleCheckboxChange}>
          Active animation
        </Checkbox>
        <Checkbox checked={infinite} onChange={handleInfiniteChange}>
          Infinite
        </Checkbox>
      </div>
      <InputNumber
        placeholder="Duration Animation"
        value={duration}
        onChange={handleDurationChange}
        addonBefore="Duration: "
        addonAfter="s"
        style={{ width: 200 }}
      />
    </div>
  );

  return (
    <Popover content={content} title="Animation info">
      <Button type="primary">Transition gradient</Button>
    </Popover>
  );
};
