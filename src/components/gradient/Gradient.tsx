import React from "react";

interface Props {
  linearGradient: string;
  title: string;
}

export const Gradient: React.FC<Props> = (props: Props) => {
  const styleMain: React.CSSProperties = {
    width: 300,
    height: 300,
    border: "1px solid",
    overflow: "hidden",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    textAlign: "center",
    fontFamily: '"Outfit", sans-serif',
  };

  const styleGradient: React.CSSProperties = {
    background: `linear-gradient(${props.linearGradient})`,
    width: 320,
    height: 200,
  };

  return (
    <main style={styleMain}>
      <p>{props.title}</p>
      <section style={styleGradient}></section>
    </main>
  );
};
