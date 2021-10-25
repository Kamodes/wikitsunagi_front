import React from "react";
import AnswersList from "./AnswersList";
import styled from "styled-components";

type GameProps = {
  questWords: string[];
  handleJudgeChange: (data: boolean) => void;
};

const StyledWord = styled.span`
  font-size: 50px;
  color: red;
`;

const StyledQuestion = styled.section`
  margin: 30px;
  font-size: 30px;
`;

const Game = (Prop: GameProps) => {
  return (
    <>
      <StyledQuestion>
        問題：<StyledWord>{Prop.questWords[0]}</StyledWord>　から　
        <StyledWord>{Prop.questWords[1]} </StyledWord>までをつなげろ
      </StyledQuestion>
      <AnswersList
        handleJudgeChange={Prop.handleJudgeChange}
        questWords={Prop.questWords}
      />
    </>
  );
};

export default Game;
