import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import StartButton from "../../component/start-button";
import { STATIC_URL } from "../../constant";

const QuizList: React.FC = () => {
  return (
    <Layout>
      <S.QuizList>
        <S.QuizListContainer>퀴즈 리스트 추가예정</S.QuizListContainer>
      </S.QuizList>
    </Layout>
  );
};

export default QuizList;
