import { keyframes, css } from "styled-components";

export class AnimatedBackground {
  static BackgroundTransition(duration: number, infinite: boolean) {
    return css`
      ${keyframes`
        from {
          background-position: 0% 50%;
        }
        to {
          background-position: 100% 0%;
        }
      `}
      ${duration}s ${infinite ? "infinite" : "forwards"}
    `;
  }
}
