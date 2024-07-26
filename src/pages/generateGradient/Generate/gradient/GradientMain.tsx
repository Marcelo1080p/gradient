import React from "react";

interface GradientMainProps {
  linearGradient: string;
}

export const GradientMain: React.FC<GradientMainProps> = ({ linearGradient }) => {
  const style: React.CSSProperties = {
    background: linearGradient,
    height: "400px", // ou qualquer altura que você desejar
    width: "100%", // ou qualquer largura que você desejar
  };

  return <div style={style}></div>;
};
