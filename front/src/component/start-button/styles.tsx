import styled from "styled-components/macro";
import { THEME_COLOR } from "../../constant";

interface StartButtonProps {
  text: string;
  icon: string;
  color: string;
}

export const StartButton = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 4rem;
  background-color: #5a5a66;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: ${THEME_COLOR.PRIMARY};
    transform: scale(1.2) perspective(0.7rem);
  }
`;

export const ButtonText = styled.div`
  font-size: 1.4rem;
  justify-content: center;
  color: #fbfffb;
  font-weight: 500;
`;

export const ButtonIcon = styled.img`
  padding: 0.2rem;
  width: 2.7rem;
  height: 2.7rem;
  left: 1rem;
`;
export const StartButtonColumn1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
`;
export const StartButtonColumn2 = styled.div`
  display: flex;
  width: 100%;

  justify-content: left;
  align-items: center;
  padding: 0rem 1rem;
`;