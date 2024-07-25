import "./Gradient.css"
import React from "react";

interface Props {
  linearGradient: string;
  title: string;
}

export const Gradient: React.FC<Props> = (props: Props) => {
  const styleMain: React.CSSProperties = {
    flex:" 1 1 calc(33.333% - 16px)",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem ",
    maxWidth: 500, 
    height: 200,
    overflow: "hidden",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
           
  };

  const styleGradient:React.CSSProperties = {
    width: '500px',
    height: '200px',
    background: `-webkit-linear-gradient(${props.linearGradient}) `
  };

  const styleTitle: React.CSSProperties = {
    textAlign: "start",
    fontFamily: '"Outfit", sans-serif',
    color: "#9b71f5",
    fontSize: "1rem",
    fontWeight: 600
  }

  return (
    <main className="gradientContainer" style={styleMain}>
      <p style={styleTitle}>{props.title}</p>
      <section className="gradient" style={styleGradient}></section>
    </main>
  );
};
