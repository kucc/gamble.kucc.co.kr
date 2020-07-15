import React from "react";

import * as S from "./styles";

import QuizCategoryItem from "../../component/quiz-category-item";

interface QuizCategoryListProps {}

const QuizCategoryList: React.FC<QuizCategoryListProps> = () => {
  return (
    <S.QuizCategoryList>
      <QuizCategoryItem />
      <QuizCategoryItem />
      <QuizCategoryItem />
      <QuizCategoryItem />
      <QuizCategoryItem />
    </S.QuizCategoryList>
  );
};

export default QuizCategoryList;
