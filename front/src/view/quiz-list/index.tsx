import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import StartButton from "../../component/start-button";
import { STATIC_URL } from "../../constant";

const QuizList: React.FC = () => {
  return (
    <Layout>
      <S.QuizList>
        <S.QuizListContainer>
          <S.ButtonsContainer>
            <StartButton
              color="#595965"
              link={"/quiz"}
              icon={STATIC_URL.PLAYBUTTON}
              text="문제1"
            />
            <StartButton
              color="#595965"
              link={"/quiz"}
              icon={STATIC_URL.Trophy}
              text="문제2"
            />
            <StartButton
              color="#595965"
              link={"/quiz"}
              icon={STATIC_URL.PROFILE}
              text="문제3"
            />
            <StartButton
              color="#595965"
              link={"/quiz"}
              icon={STATIC_URL.MINIGAME}
              text="문제4"
            />
          </S.ButtonsContainer>
        </S.QuizListContainer>
      </S.QuizList>
    </Layout>
  );
};

export default QuizList;
