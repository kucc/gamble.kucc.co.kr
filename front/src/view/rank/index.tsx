import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import { STATIC_URL } from "../../constant";
import PaginationBar from "../../container/pagination-bar";

const Rank: React.FC = () => {
  return (
    <Layout>
      <S.Rank>
        <S.RankContainer>
          <S.TopThreeContainer>
            <S.MedalColumn>
              <S.MedalLogo src={STATIC_URL.Silver_Medal} alt="Gold Logo" />
              <S.TopUserNameContainer>
                <S.TopUserName>19 김현채</S.TopUserName>
              </S.TopUserNameContainer>
            </S.MedalColumn>
            <S.MedalColumn>
              <S.MedalLogo src={STATIC_URL.Gold_Medal} alt="Gold Logo" />
              <S.TopUserNameContainer>
                <S.TopUserName>16 박진용</S.TopUserName>
              </S.TopUserNameContainer>
            </S.MedalColumn>
            <S.MedalColumn>
              <S.MedalLogo src={STATIC_URL.Bronze_Medal} alt="Gold Logo" />
              <S.TopUserNameContainer>
                <S.TopUserName>14 강관훈</S.TopUserName>
              </S.TopUserNameContainer>
            </S.MedalColumn>
          </S.TopThreeContainer>
          <S.SelfRankContainer>
            <S.RankColumn>
              <S.RankText>1</S.RankText>
            </S.RankColumn>
            <S.RankColumn>
              <S.RankIcon src={STATIC_URL.Level2_Icon} />
            </S.RankColumn>
            <S.RankColumn>
              <S.UserName>16 박진용</S.UserName>
            </S.RankColumn>
            <S.RankColumn>
              <S.UserPoint>5773</S.UserPoint>
            </S.RankColumn>
            <S.RankColumn>
              <S.PointImg src={STATIC_URL.Coin} />
            </S.RankColumn>
          </S.SelfRankContainer>
          <S.TotalRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>1</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level4_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>16 박진용</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>2</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level3_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>19 김현채</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>10</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>3</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level5_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>14 강관훈</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>4</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 서태수</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankColumn>
                <S.RankText>5</S.RankText>
              </S.RankColumn>
              <S.RankColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankColumn>
              <S.RankColumn>
                <S.UserName>15 이무원</S.UserName>
              </S.RankColumn>
              <S.RankColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankColumn>
              <S.RankColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankColumn>
            </S.UserRankContainer>
          </S.TotalRankContainer>
        </S.RankContainer>
      </S.Rank>
    </Layout>
  );
};

export default Rank;
