import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import { STATIC_URL } from "../../constant";

const Rank: React.FC = () => {
  return (
    <Layout>
      <S.Rank>
        <S.RankContainer>
          <S.TopThreeContainer>
            <S.MedalColumn>
              <S.MedalLogo src={STATIC_URL.Silver_Medal} alt="Gold Logo" />
              <S.TopUserName>19 김현채</S.TopUserName>
            </S.MedalColumn>
            <S.MedalColumn>
              <S.MedalLogo src={STATIC_URL.Gold_Medal} alt="Gold Logo" />
              <S.TopUserName>16 박진용</S.TopUserName>
            </S.MedalColumn>
            <S.MedalColumn>
              <S.MedalLogo src={STATIC_URL.Bronze_Medal} alt="Gold Logo" />
              <S.TopUserName>14 강관훈</S.TopUserName>
            </S.MedalColumn>
          </S.TopThreeContainer>
          <S.SelfRankContainer>
            <S.RankColumn>
              <S.RankText>1</S.RankText>
            </S.RankColumn>
            <S.RankColumn>
              <S.RankIcon></S.RankIcon>
            </S.RankColumn>
            <S.RankColumn>
              <S.UserName>16 박진용</S.UserName>
              <S.UserDescription></S.UserDescription>
            </S.RankColumn>
            <S.RankColumn>
              <S.UserPoint>5773</S.UserPoint>
            </S.RankColumn>
          </S.SelfRankContainer>
        </S.RankContainer>
      </S.Rank>
    </Layout>
  );
};

export default Rank;
