
import React from "react";
import { Slider } from "antd";

export const SliderGradient: React.FC = () => {
  return <Slider min={2} max={360}
  
  styles={{
    track: {
        background: "#8f6ae1"
    }
  }}/>;
};
