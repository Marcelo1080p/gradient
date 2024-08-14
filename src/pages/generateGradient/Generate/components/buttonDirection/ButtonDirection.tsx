import "./ButtonDirection.css";
import React from "react";

interface Props {
  title: string;
  onClick: () => void;
}

export const ButtonDirection: React.FC<Props> = ({ title, onClick }) => {
  return (
    <p className="btnDirection" onClick={onClick}>
      {title}
    </p>
  );
};
