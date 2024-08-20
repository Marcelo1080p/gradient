export class CopyCssService {
  static generateCss(
    gradient: string,
    hasAnimation: boolean,
    duration: number,
    infinite: boolean,
    direction: string
  ): string {
    const ANIMATION_CSS = `gradientFlow ${duration}s ${
      infinite ? "infinite" : "ease"
    } ${direction}`;
    return `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.your-class-css {
  background-size: 300% 300% !important;
  background: linear-gradient(${gradient});
  background: -webkit-linear-gradient(${gradient});
  background: -moz-linear-gradient(${gradient});
  background: -o-linear-gradient(${gradient});
  background: -ms-linear-gradient(${gradient});
    ${
      hasAnimation
        ? `/*Your animation here */
animation: ${ANIMATION_CSS};
      `
        : ""
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
  }
}
