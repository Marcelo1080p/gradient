import React from "react";

export class GenerateStyle {
  static styleBtns(): React.CSSProperties {
    return {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      
    };
  }

  static styleMainCol(): React.CSSProperties {
    return {
      height: 120,
      display: "flex",
      alignItems: "center",
    };
  }
}

