import React from "react";
import "./Colors.css"

interface Props {
  numColor: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const Colors: React.FC<Props> = (props: Props) => {
  const styleColorContainer: React.CSSProperties = {
    color: "#ffffffce",
  };

  return (
    <section style={styleColorContainer} className="containerColor">
      <p>Color {props.numColor}</p>
      <input type="color" onChange={props.onChange} value={props.value} />
    </section>
  );
};
