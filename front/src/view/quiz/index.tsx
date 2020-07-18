import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import StartButton from "../../component/start-button";
import { STATIC_URL } from "../../constant";

const Quiz: React.FC = () => {
  return (
    <Layout>
      <S.Quiz>
        <S.QuizContainer>시이이이발~~</S.QuizContainer>
      </S.Quiz>
    </Layout>
  );
};

export default Quiz;
