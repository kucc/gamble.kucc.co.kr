import styled from "styled-components/macro";
import { STATIC_URL } from "../../constant";
import { ClickEffect, ButtonHover } from "../../component/animation/keyframe";

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
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  flex-direction: row;
`;
export const MedalColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MedalLogo = styled.img`
  width: 6rem;
  height: 6rem;
  margin: 0rem 3rem;
`;

export const TopUserNameContainer = styled.div`
  display: flex;
  background-color: #d4d4d4;
  margin-top: 1rem;
  width: 8rem;
  height: 2.4rem;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  color: black;
`;

export const TopUserName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const SelfRankContainer = styled.div`
  background-color: #ffe783;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 35rem;
  height: 8.7rem;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
  padding: 1.6rem 1.5rem 1.5rem 1.5rem;
  border: 0.5px groove;
`;

export const RankColumn = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const RankText = styled.div`
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
export const RankIcon = styled.img`
  margin-top: 0.3rem;
  margin-left: 2.6rem;
  width: 3.7rem;
  height: 3.7rem;
`;
export const UserName = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  margin-left: 4.1rem;
  margin-right: 5rem;
`;

export const PointColumn = styled.div`
  display: flex;
  width: 5.5rem;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;
export const UserPoint = styled.div`
  font-size: 1.5rem;
`;
export const PointImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.5rem;
`;
export const TotalRankContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserRankContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background-color: #f6fbf7;
  width: 35rem;
  height: 7rem;
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  border-bottom: 0.5px groove;
`;
