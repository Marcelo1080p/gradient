import React, { useEffect, useState } from "react";
import { Button, Checkbox, Col, InputNumber, Popover, Row } from "antd";
import { ICfgFilterServices } from "../../services/ICfgFilterBlur";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface PopoverProps {
  cfgBlur: ICfgFilterServices;
  updateCfgBlur: (newCfg: ICfgFilterServices) => void;
}
export const PopoverFilter: React.FC<PopoverProps> = ({
  cfgBlur,
  updateCfgBlur,
}) => {
  const [active, setActive] = useState<boolean>(cfgBlur.active);
  const [px, setPx] = useState<number>(cfgBlur.px);

  useEffect(() => {
    setActive(cfgBlur.active);
    setPx(cfgBlur.px);
  }, [cfgBlur]);

  function handleCheckboxChange(e: CheckboxChangeEvent) {
    const newChecked = e.target.checked;
    setActive(newChecked);
    updateCfgBlur({ ...cfgBlur, active: newChecked });
  
  }

  function handlePxChange(value: number | null) {
    if (value != null) {
      setPx(value);
      updateCfgBlur({ ...cfgBlur, px: value });
      
    }
  }

  const content = (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Checkbox checked={active} onChange={handleCheckboxChange}>Add Backdrop Filter</Checkbox>
      </Col>
      <Col span={24}>
        <InputNumber
          onChange={handlePxChange}
          placeholder="filter-blur"
          addonBefore="Blur:"
          addonAfter="PX"
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  );

  return (
    <Popover  content={content} title="Title">
      <Button type="primary">Background Filter</Button>
    </Popover>
  );
};
