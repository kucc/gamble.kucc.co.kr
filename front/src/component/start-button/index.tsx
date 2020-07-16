import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";

interface StartButtonProps {
  text: string;
  icon: string;
  color: string;
  link: string;
}

const StartButton: React.FC<StartButtonProps> = (props) => {
  return (
    <S.StartButton>
      <S.StartButtonContainer to={props.link}>
        <S.StartButtonColumn1>
          <S.ButtonIcon src={props.icon}></S.ButtonIcon>
        </S.StartButtonColumn1>
        <div></div>
        <S.StartButtonColumn2>
          <S.ButtonText>{props.text}</S.ButtonText>
        </S.StartButtonColumn2>
      </S.StartButtonContainer>
    </S.StartButton>
  );
};

export default StartButton;
