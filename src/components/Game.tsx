import React, { useEffect, useState } from "react";
import AnswersList from "./AnswersList";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { type } from "os";

type GameProps = {
  questWords: string[];
  maxWord: number;
};

const TitleStyle = styled.h1`
  color: red;
  font-size: 60px;
  margin-bottom: 20px;
`;

const StyledLink = styled.section`
  margin-top: 30px;
`;

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
      <TitleStyle>ゲーム開始！</TitleStyle>
      <StyledQuestion>
        問題：<StyledWord>{Prop.questWords[0]}</StyledWord>　から　
        <StyledWord>{Prop.questWords[1]} </StyledWord>までを{" "}
        <StyledAnswerCount>{Prop.maxWord} </StyledAnswerCount>
        回でつなげろ
      </StyledQuestion>
      <AnswersList />
    </>
  );
};

export default Game;
