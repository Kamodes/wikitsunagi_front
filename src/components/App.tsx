import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./Game";
import Title from "./Title";
import Result from "./Result";
import ButtonAppBar from "./modules/ButtonAppBar";
import Footer from "./footer";
import Page404 from "./Page404";

//ここのinitialの時点でAPIからデータ取ってきても良いと思う
const initialQuestWord: string[] = ["京都大学", "レッドブル"];
const initialAnswer: AnswerType = {
  first: "",
  second: "",
  third: "",
  forth: "",
  fifth: "",
};
const initialModelAnswer: string[] = [
  "京都大学",
  "大分県",
  "島根県",
  "島根市",
  "卑弥呼",
];

type AnswerType = {
  first: string;
  second: string;
  third: string;
  forth: string;
  fifth: string;
};
function App() {
  const [questWord, setQuestWord] = useState(initialQuestWord);
  const [modelAnswer, setModelAnswer] = useState(initialModelAnswer);
  const [judge, setJudge] = useState(false);

  const [answers, setAnswers] = useState(initialAnswer);
  const handleAnswerChange = (data: AnswerType) => {
    setAnswers(data);
  };

  useEffect(() => {
    // "ここでanswersをバックエンドに送る";
    // 受け取ったデータに基づいてjudgeの値を変える
    // さらに模範解答を受け取りmodelAnswerに代入する
    setJudge(true);
    setModelAnswer(["かも", "taka", "koba", "hira", "mura"]);
    console.log("useEffectOK");
    return () => {};
  }, [answers]);

  return (
    <div className="App">
      <head>
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
      </head>
      <Router>
        <ButtonAppBar />
        <div>
          <Route exact path="/" component={Title} />
          <Route
            exact
            path="/Main"
            render={() => (
              <Game
                questWords={questWord}
                maxWord={5}
                handleAnswerChange={handleAnswerChange}
              />
            )}
          />
          <Route
            exact
            path="/Result"
            render={() => <Result judge={judge} modelAnswer={modelAnswer} />}
          />
          <Route component={Page404} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
