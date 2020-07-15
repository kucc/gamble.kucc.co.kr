import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";

export const Quiz = styled.div``;

export const QuizContainer = styled.div``;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 2rem;

  justify-content: center;
`;

export const Title = styled.div`
  display: block;
  font-size: 2.2rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 0.3rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
