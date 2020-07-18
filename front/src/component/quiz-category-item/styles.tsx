import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR, BREAKPOINT } from "../../constant";

export const QuizCategoryItem = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const QuizCategoryItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 20rem;
  height: 4.3rem;
  background-color: #5a5a66;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const QuizCategoryIcon = styled.img``;

export const QuizCategoryTitle = styled.div`
  text-decoration: none;
  color: #fbfffb;
  font-weight: 500;
  font-size: 2rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #e0456d;
    color: white;

    transition: background-color 0.5s, color 0.4s;
  }
`;
