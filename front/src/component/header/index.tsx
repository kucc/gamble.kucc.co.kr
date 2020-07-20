import React from "react";

import { STATIC_URL } from "../../constant";

import * as S from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="Logo"></S.Logo>
      </S.DesktopLink>
      <S.MobileLink to="/">
        <S.MobileLogo src={STATIC_URL.LOGO_WITHOUT_TEXT} alt="Mobile Logo" />
      </S.MobileLink>
      <S.DesktopButtons>
        <S.DesktopLink to="/rank">
          <S.Button>랭킹</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to="sso.kucc.co.kr">
          <S.Button>로그인</S.Button>
        </S.DesktopLink>
        {/* 로그인 시 -> 로그인 -> 정보 확인 페이지로 전환  
        <S.DesktopLink to="/member">
          <S.Button>내정보</S.Button>
        </S.DesktopLink> */}
      </S.DesktopButtons>
      <S.MobileButtons>
        <S.Button>
          <img src={STATIC_URL.MEMBER_ICON} alt="Member Icon" />
        </S.Button>
      </S.MobileButtons>
    </S.Header>
  );
};

export default Header;
