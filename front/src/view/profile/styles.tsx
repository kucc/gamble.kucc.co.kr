import styled from "styled-components/macro";
import { STATIC_URL } from "../../constant";
import { Spin } from "../../component/animation/keyframe";
export const Profile = styled.div`
  width: 100%;
  height: 100rem;
  background-image: url(${STATIC_URL.BACKGROUND});
  background-position: absolute;
  background-size: auto;
  margin-top: 1rem;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: solid;
  padding: 1rem 2rem;
`;

export const UserIconContainer = styled.div`
  display: flex;
  width: 6rem;
  height: 6rem;
  background-color: #f6fbf7;
  align-items: center;
  justify-content: center;
  border-radius: 3.5rem;
  border-style: outset;
`;
export const UserIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`;
export const UserNameContainer = styled.div`
  display: flex;
`;
export const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const UserDecsriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  height: 2rem;
  align-items: center;
`;
export const UserLevel = styled.div`
  font-size: 1.3rem;
  margin-right: 0.8rem;
`;
export const UserPoint = styled.div`
  font-size: 1.3rem;
`;
export const Coin = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.8rem;
  animation: ${Spin} 1.5s linear infinite;
`;
export const TabMenuContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  overflow: hidden;
  background-color: #f1f1f1;
`;
export const TabLinkButton = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }
`;
export const TabButtonImage = styled.div``;
export const TabButtonText = styled.div``;
export const TabContentContainer = styled.div`
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;
export const LevelContentContainer = styled.div``;
export const HistoryContentContainer = styled.div``;
