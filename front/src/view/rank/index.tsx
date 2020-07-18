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
            <S.RankNumberColumn>
              <S.RankText>1</S.RankText>
            </S.RankNumberColumn>
            <S.RankIconColumn>
              <S.RankIcon src={STATIC_URL.Level2_Icon} />
            </S.RankIconColumn>
            <S.RankUserNameColumn>
              <S.UserName>16 박진용</S.UserName>
            </S.RankUserNameColumn>
            <S.RankPointColumn>
              <S.UserPoint>5773</S.UserPoint>
            </S.RankPointColumn>
            <S.RankCoinColumn>
              <S.PointImg src={STATIC_URL.Coin} />
            </S.RankCoinColumn>
          </S.SelfRankContainer>
          <S.TotalRankContainer>
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level4_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진용</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>2</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level3_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진용</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>773</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level5_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진용</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>73</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level4_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진용진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level4_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진용진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>5773</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level2_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>0</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>{" "}
            <S.UserRankContainer>
              <S.RankNumberColumn>
                <S.RankText>1</S.RankText>
              </S.RankNumberColumn>
              <S.RankIconColumn>
                <S.RankIcon src={STATIC_URL.Level1_Icon} />
              </S.RankIconColumn>
              <S.RankUserNameColumn>
                <S.UserName>16 박진</S.UserName>
              </S.RankUserNameColumn>
              <S.RankPointColumn>
                <S.UserPoint>53</S.UserPoint>
              </S.RankPointColumn>
              <S.RankCoinColumn>
                <S.PointImg src={STATIC_URL.Coin} />
              </S.RankCoinColumn>
            </S.UserRankContainer>
          </S.TotalRankContainer>
        </S.RankContainer>
      </S.Rank>
    </Layout>
  );
};

export default Rank;
