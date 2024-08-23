import React, { useEffect, useState } from "react";
import { Button, Checkbox, Col, InputNumber, Popover, Row } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ICfgRainServices } from "../../services/ICfgRainServices";

interface PropsRain {
  activeRain: ICfgRainServices;
  updateCfgRain: (newCfg: ICfgRainServices) => void;
}

export const PopoverRain: React.FC<PropsRain> = ({
  activeRain,
  updateCfgRain,
}) => {
  const [active, setActive] = useState<boolean>(activeRain.activeRain);
  const [quantityRain, setQuantityRain] = useState<number>(activeRain.quantityRain);

  useEffect(() => {
    setActive(activeRain.activeRain);
    setQuantityRain(activeRain.quantityRain);
  }, [activeRain])


  const handleCheckBoxChange = (event: CheckboxChangeEvent) => {
    const newValue = event.target.checked;
    setActive(newValue);
    updateCfgRain({...activeRain, activeRain: newValue})
    console.log(activeRain);
  };

  const handleQuantityRainChange = ( value: number | null) => {
    if(value != null) {
      setQuantityRain(value);
      updateCfgRain({...activeRain, quantityRain: value});
    }
  }

  
  const content = (
    <Row>
      <Col span={24}>
        <Checkbox checked={active} onChange={handleCheckBoxChange} />
      </Col>
      <Col span={24}>
        <InputNumber
          placeholder="Rains:"
          value={activeRain.quantityRain}
          onChange={handleQuantityRainChange}
          addonBefore="Quantity Rain: "
          addonAfter="s"
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  );
  return (
    <Popover open={true} content={content} title="Rain">
      <Button type="primary">ADD RAIN</Button>
    </Popover>
  );
};
