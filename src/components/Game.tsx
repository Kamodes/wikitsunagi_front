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

const StyledQuestion = styled.section`
  margin: 30px;
`;

const Game = (Prop: GameProps) => {
  return (
    <>
      <TitleStyle>ゲーム開始！</TitleStyle>
      <StyledQuestion>
        問題：{Prop.questWords[0]}　から　{Prop.questWords[1]} までを{" "}
        {Prop.maxWord} 回でつなげろ
      </StyledQuestion>

      <AnswersList />
      <StyledLink>
        <Link to="/result">解答</Link>
      </StyledLink>
    </>
  );
};

export default Game;
