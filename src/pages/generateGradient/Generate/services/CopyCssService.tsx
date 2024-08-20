import { Alert } from "antd";
import React from "react";

export class CopyCssService {
  static handleCopy(
    gradient: string,
    hasAnimation: boolean,
    duration: number,
    infinite: boolean,
    direction: string
  ) {

    
    const ANIMATION_CSS = `gradientFlow ${duration}s ${infinite ? "infinite" : "ease"} ${direction}`;
    const CODE_CSS = `
      .your-class-css {
        background-size: 300% 300%;
        background: linear-gradient(${gradient});
        background: -webkit-linear-gradient(${gradient});
        background: -moz-linear-gradient(${gradient});
        background: -o-linear-gradient(${gradient});
        background: -ms-linear-gradient(${gradient});
        ${
          hasAnimation
        ?`/*Your animation here */
        animation: ${ANIMATION_CSS};
        `: ""
        }
      }
      ${
        hasAnimation
        ? `
      @keyframes gradientFlow {
        from {
          background-position: 0% 50%;
        }
        to {
          background-position: 100% 0%;
        }
      }  
      `
        : ""
      }
      
    `;

    navigator.clipboard
      .writeText(CODE_CSS)
      .then(() => {
        return <Alert message="Success Text" type="success" />;
      })
      .catch((error) => {
        console.log("Erro ao copiar o texto: ", error);
      });
  }
}
