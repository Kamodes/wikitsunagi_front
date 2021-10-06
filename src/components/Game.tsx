import React from "react";
import AnswersList from "./AnswersList";
import styled from "styled-components";

type GameProps = {
  questWords: string[];
  maxWord: number;
  handleAnswerChange: (data: AnswerType) => void;
};

type AnswerType = {
  first: string;
  second: string;
  third: string;
  forth: string;
  fifth: string;
};

const StyledAnswerCount = styled.span`
  font-size: 60px;
  color: red;
`;

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
        <StyledWord>{Prop.questWords[1]} </StyledWord>までを{" "}
        <StyledAnswerCount>{Prop.maxWord} </StyledAnswerCount>
        回でつなげろ
      </StyledQuestion>
      <AnswersList
        handleAnswerChange={Prop.handleAnswerChange}
        questWords={Prop.questWords}
      />
    </>
  );
};

export default Game;
