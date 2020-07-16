import styled from "styled-components/macro";
import { STATIC_URL } from "../../constant";

export const Rank = styled.div`
  width: 100%;
  height: 100rem;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: absolute;
  background-size: auto;
  margin-top: 1rem;
`;

export const RankContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopThreeContainer = styled.div`
  display: flex;
  margin: 5rem;
  flex-direction: row;
`;
export const MedalColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MedalLogo = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0rem 3rem;
`;

export const TopUserName = styled.div`
  padding-top: 0.9rem;
  font-size: 1.6rem;
`;

export const SelfRankContainer = styled.div`
  background-color: #e1e9da;
  width: 26rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5rem;
  border-radius: 10px;
`;

export const RankColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankText = styled.div`
  font-size: 1.3rem;
`;
export const RankIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
export const UserName = styled.div`
  font-size: 1.5rem;
`;

export const UserDescription = styled.div`
  font-size: 1rem;
`;

export const UserPoint = styled.div`
  font-size: 1.3rem;
`;
