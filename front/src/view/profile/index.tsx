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
          <S.ToggleMenuContainer>
            <S.ToggleButton>
              <S.ToggleButtonImage />
              <S.ToggleButtonText> Level </S.ToggleButtonText>
            </S.ToggleButton>
            <S.ToggleButton>
              <S.ToggleButtonImage />
              <S.ToggleButtonText> 기록 </S.ToggleButtonText>
            </S.ToggleButton>
          </S.ToggleMenuContainer>
        </S.ProfileContainer>
      </S.Profile>
    </Layout>
  );
};

export default Profile;
