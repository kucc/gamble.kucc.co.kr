import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";

const QuizList: React.FC = () => {
  return (
    <Layout>
      <S.QuizList>
        <S.QuizListContainer>
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>{" "}
          <S.QuizItemContainer to="/quiz">
            <S.QuizItem> 문제 1 </S.QuizItem>
          </S.QuizItemContainer>
        </S.QuizListContainer>
      </S.QuizList>
    </Layout>
  );
};

export default QuizList;
