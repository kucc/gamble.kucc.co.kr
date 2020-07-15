import styled from "styled-components/macro";
import { STATIC_URL } from "../../constant";

export const Main = styled.div`
  width: 100%;
  height: 100rem;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: absolute;
  background-size: auto;
  margin-top: 1rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 10rem;
`;
