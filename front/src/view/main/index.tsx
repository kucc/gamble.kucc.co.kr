import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import StartButton from "../../component/start-button";
import { STATIC_URL } from "../../constant";

const Main: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <S.TitleContainer>
            <S.Title>KUCC QUIZZ</S.Title>
          </S.TitleContainer>
          <S.ButtonsContainer>
            <StartButton
              color="#595965"
              icon={STATIC_URL.PLAYBUTTON}
              text="플레이"
            />
            <StartButton color="#595965" icon={STATIC_URL.Trophy} text="랭킹" />
            <StartButton
              color="#595965"
              icon={STATIC_URL.PROFILE}
              text="프로필"
            />
            <StartButton
              color="#595965"
              icon={STATIC_URL.MINIGAME}
              text="미니게임"
            />
          </S.ButtonsContainer>
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
