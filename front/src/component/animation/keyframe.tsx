import { keyframes } from "styled-components";
import { THEME_COLOR } from "../../constant";

export const ClickEffect = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  } 
`;

export const ButtonHover = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    background-color: ${THEME_COLOR.PRIMARY};
    transform: scale(1.2) perspective(0.7rem);
  } 
`;

export const Spin = keyframes`
  from {
    transform: none;
  }
  to {
    transform: rotateY(360deg);
  }
`;
