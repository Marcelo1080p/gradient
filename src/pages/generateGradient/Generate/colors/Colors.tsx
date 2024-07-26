import React from "react";

interface Props {
  numColor: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Colors: React.FC<Props> = (props: Props) => {

    const styleColorContainer: React.CSSProperties = {
        color: "#8f6ae1",
    }
  return (
    <section style={styleColorContainer} >
      <p>Color {props.numColor}</p>
      <input type="color" onChange={props.onChange}/>
    </section>
  );
};
