import styled from "styled-components/macro";
import { STATIC_URL } from "../../constant";

export const Quiz = styled.div`
  width: 100%;
  height: 100rem;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: absolute;
  background-size: auto;
  margin-top: 1rem;
`;

export const QuizContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ButtonsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 11rem;
`;
