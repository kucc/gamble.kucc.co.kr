import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import StartButton from "../../component/start-button";
import { STATIC_URL } from "../../constant";

const Profile: React.FC = () => {
  return (
    <Layout>
      <S.Profile>
        <S.ProfileContainer>
          <S.UserProfileContainer>
            <S.UserIconContainer>
              <S.UserIcon src={STATIC_URL.Level1_Icon} />
            </S.UserIconContainer>
            <S.UserInfoContainer>
              <S.UserNameContainer>
                <S.UserName>16 박진용</S.UserName>
              </S.UserNameContainer>
              <S.UserDecsriptionContainer>
                <S.UserLevel>Level 1</S.UserLevel>
                <S.UserPoint>100 </S.UserPoint>
                <S.Coin src={STATIC_URL.Coin} />
              </S.UserDecsriptionContainer>
            </S.UserInfoContainer>
          </S.UserProfileContainer>
          <S.TabMenuContainer>
            <S.TabLinkButton>
              <S.TabButtonText> Level </S.TabButtonText>
            </S.TabLinkButton>
            <S.TabLinkButton>
              <S.TabButtonText> 기록 </S.TabButtonText>
            </S.TabLinkButton>
          </S.TabMenuContainer>
          <S.TabContentContainer>
            <S.LevelContentContainer>
              다음 레벨 까지 ~포인트
            </S.LevelContentContainer>
            <S.HistoryContentContainer>
              지금까지 푼 문제
            </S.HistoryContentContainer>
          </S.TabContentContainer>
        </S.ProfileContainer>
      </S.Profile>
    </Layout>
  );
};

export default Profile;
