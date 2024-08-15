// AnimeBackground.ts
import { keyframes } from "styled-components";

export const backgroundTransition = (duration: number, infinite: boolean, direction: string) => {
  return keyframes`
    from {
     background-position: 0% 50%; 
    }
    to { 
      background-position: 100% 0%; 
    }
    
  `;
};
