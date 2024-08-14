// AnimeBackground.ts
import { keyframes } from "styled-components";

export const backgroundTransition = () => {
  return keyframes`
    from {
     background-position: 0% 50%; 
    }
    to { 
      background-position: 100% 0%; 
    }
    
  `;
};
