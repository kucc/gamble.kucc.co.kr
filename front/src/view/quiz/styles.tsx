import styled from "styled-components/macro";
import { STATIC_URL } from "../../constant";

export const Quiz = styled.div`
  width: 100%;
  height: 100rem;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: absolute;
  background-size: auto;
  margin-top: 1rem;
`;

export const QuizContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizImageContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const QuizImage = styled.img`
  width: 35rem;
  height: 20rem;
  border-radius: 10px;
`;

export const ProblemContainer = styled.div`
  width: 35rem;
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const ProblemText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  padding-left: 0.8rem;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AnswerButton = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  width: 30rem;
  height: 6rem;
  margin: 1.3rem 1rem;
  border: none;
  background-color: #bd9984;
  border-radius: 10px;
`;
export const ExplainContainer = styled.div`
  margin-top: 1rem;
  width: 35rem;
  display: flex;
  flex-direction: column;
`;

export const ExplainText = styled.div`
  padding-left: 3rem;
  font-size: 1.5rem;
`;
export const ProblemSourceContainer = styled.div`
  margin-top: 2rem;
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 3rem;
`;

export const ExaminerText = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  right: 0rem;
`;
export const SourceText = styled.div`
  font-size: 1.45rem;
`;
