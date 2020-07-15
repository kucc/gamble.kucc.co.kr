import React from "react";

import * as S from "./styles";

interface QuizItemProps {}

const QuizItem: React.FC<QuizItemProps> = () => {
  return (
    <S.QuizItem>
      <S.QuizItemContainer to="/"></S.QuizItemContainer>
    </S.QuizItem>
  );
};

export default QuizItem;
