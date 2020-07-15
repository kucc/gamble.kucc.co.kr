import React from "react";

import * as S from "./styles";

interface QuizCategoryItemProps {
  text: string;
}

const QuizCategoryItem: React.FC<QuizCategoryItemProps> = (props) => {
  return (
    <S.QuizCategoryItem>
      <S.QuizCategoryItemContainer>
        <S.QuizCategoryIcon></S.QuizCategoryIcon>
        <S.QuizCategoryTitle to="/prob">{props.text}</S.QuizCategoryTitle>
      </S.QuizCategoryItemContainer>
    </S.QuizCategoryItem>
  );
};
export default QuizCategoryItem;
