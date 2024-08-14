import React from "react";

export class GradientServices {
  static onChangeDirection(
    value: number | number[],
    setDirection: (value: number) => void
  ) {
    const directionValue = Array.isArray(value) ? value[0] : value;
    setDirection(directionValue);
  }

  static onChangeBackground(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    colors: string[],
    setColors: (value: string[]) => void
  ) {
    const newColor = event.target.value;
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  }

  static addNewColor(
    limitColors: number,
    defaultColor: string,
    colors: string[],
    setColors: (value: string[]) => void
  ) {
    colors.length < limitColors
      ? setColors([...colors, defaultColor])
      : console.log("Máximo de cores no gradients são 10 cores!");
  }
}
