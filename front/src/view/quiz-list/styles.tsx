import styled from "styled-components/macro";
import { STATIC_URL, THEME_COLOR } from "../../constant";
import { Link } from "react-router-dom";

export const QuizList = styled.div`
  width: 100%;
  height: 100rem;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: absolute;
  background-size: auto;
  margin-top: 1rem;
`;

export const QuizListContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const QuizItemContainer = styled(Link)`
  margin-top: 2rem;
  text-decoration: none;
  display: flex;
  width: 18rem;
  height: 3.8rem;
  background-color: #5a5a66;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: ${THEME_COLOR.PRIMARY};
    transform: scale(1.2) perspective(0.7rem);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const QuizItem = styled.div`
  text-decoration: none;
  color: #fbfffb;
  font-weight: 500;
  font-size: 2rem;
  border: none;
  border-radius: 5px;
`;
