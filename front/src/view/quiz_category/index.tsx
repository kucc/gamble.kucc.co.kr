import React from "react";
import Layout from "../../component/layout";
import * as S from "./styles";
import QuizCategoryItem from "../../component/quiz-category-item";

const QuizCategory: React.FC = () => {
  return (
    <Layout>
      <S.QuizCategory>
        <S.QuizCategoryContainer>
          <S.CategoryContainer>
            <S.TitleContainer>
              <S.Title>동아리</S.Title>
            </S.TitleContainer>
            <QuizCategoryItem text="동아리 역사"></QuizCategoryItem>
            <QuizCategoryItem text="회원"></QuizCategoryItem>
          </S.CategoryContainer>
          <S.CategoryContainer>
            <S.TitleContainer>
              <S.Title>잡동사니</S.Title>
            </S.TitleContainer>
            <QuizCategoryItem text="넌센스"></QuizCategoryItem>
            <QuizCategoryItem text="알쓸신잡"></QuizCategoryItem>
          </S.CategoryContainer>
          <S.CategoryContainer>
            <S.TitleContainer>
              <S.Title>Computer Science</S.Title>
            </S.TitleContainer>
            <QuizCategoryItem text="자료구조"></QuizCategoryItem>
            <QuizCategoryItem text="컴퓨터구조"></QuizCategoryItem>
            <QuizCategoryItem text="운영체제"></QuizCategoryItem>
            <QuizCategoryItem text="Network"></QuizCategoryItem>
            <QuizCategoryItem text="데이터베이스"></QuizCategoryItem>
          </S.CategoryContainer>
        </S.QuizCategoryContainer>
      </S.QuizCategory>
    </Layout>
  );
};

export default QuizCategory;
