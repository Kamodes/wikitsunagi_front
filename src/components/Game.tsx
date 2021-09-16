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
`;

const Game = (Prop: GameProps) => {
  return (
    <>
      <div>
        <TitleStyle>ゲーム開始！</TitleStyle>
        <div>
          問題：{Prop.questWords[0]}　から　{Prop.questWords[1]} までを{" "}
          {Prop.maxWord} 回でつなげろ
        </div>
        <AnswersList />
        <Link to="/result">解答</Link>
      </div>
    </>
  );
};

export default Game;
