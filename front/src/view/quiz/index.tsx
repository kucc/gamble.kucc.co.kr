import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import StartButton from "../../component/start-button";
import { STATIC_URL } from "../../constant";

const Quiz: React.FC = () => {
  return (
    <Layout>
      <S.Quiz>
        <S.QuizContainer>
          <S.QuizImageContainer>
            <S.QuizImage src={STATIC_URL.DataStructure} />
          </S.QuizImageContainer>
          <S.ProblemContainer>
            <S.ProblemText>Q 김현채의 별명은? </S.ProblemText>
          </S.ProblemContainer>
          <S.AnswerContainer>
            <S.AnswerButton>초코송이</S.AnswerButton>
            <S.AnswerButton>양파링</S.AnswerButton>
            <S.AnswerButton>사과</S.AnswerButton>
            <S.AnswerButton>복숭아</S.AnswerButton>
          </S.AnswerContainer>
          <S.ExplainContainer>
            <S.ExplainText>김현채의 별명은 초코송이이다. </S.ExplainText>
          </S.ExplainContainer>
          <S.ProblemSourceContainer>
            <S.ExaminerText>16 박진용</S.ExaminerText>
            <S.SourceText>출처: 뇌피셜</S.SourceText>
          </S.ProblemSourceContainer>
        </S.QuizContainer>
      </S.Quiz>
    </Layout>
  );
};

export default Quiz;
