import React from "react";

import * as S from "./styles";

interface QuizCategoryItemProps {
  text: string;
}

const QuizCategoryItem: React.FC<QuizCategoryItemProps> = (props) => {
  return (
    <S.QuizCategoryItem>
      <S.QuizCategoryItemContainer to="/quiz">
        <S.QuizCategoryIcon></S.QuizCategoryIcon>
        <S.QuizCategoryTitle>{props.text}</S.QuizCategoryTitle>
      </S.QuizCategoryItemContainer>
    </S.QuizCategoryItem>
  );
};
export default QuizCategoryItem;
