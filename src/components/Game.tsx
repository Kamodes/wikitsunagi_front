import React, { useEffect, useState } from "react";
import AnswersList from "./AnswersList";
import{ Link } from 'react-router-dom'; 
import styled from "styled-components";

const initialQuestWord: string[] = ["京都大学", "レッドブル"];
const maxWord:number = 5;

const url = "https://random-word-api.herokuapp.com/word?number=2";

const Game = () =>{
    const [questWord, setQuestWord] = useState(initialQuestWord);
    return(
        <>
        <div>
            <h1>メイン画面</h1>
            <div>
                問題：{questWord[0]}　から　{questWord[1]} までを {maxWord} 回でつなげろ
            </div>
            <AnswersList/>
            <Link to="/result">解答</Link>
        </div>
        </>
    )
}

export default Game;