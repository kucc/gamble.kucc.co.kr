import React from "react";
import Header from "../header";
import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <S.LayoutBorder />
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
};

export default Layout;
