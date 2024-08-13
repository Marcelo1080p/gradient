import React from "react";
import { Slider } from "antd";

interface Props {
  onChangeDirection: (value: number | number[]) => void;
}

export const SliderGradient: React.FC<Props> = (props: Props) => {
  return (
    <Slider
    onChange={props.onChangeDirection}
      min={2}
      max={360}
      styles={{
        track: {
          background: "#8f6ae1",
        },
      }}
    />
  );
};
