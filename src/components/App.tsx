import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./Game";
import Title from "./Title";
import Loading from "./Loading";
import Result from "./Result";
import ButtonAppBar from "./modules/ButtonAppBar";
import Footer from "./footer";
import Page404 from "./Page404";
import Error from "./Error";
import axios from "axios";

const initialQuestWord: string[] = ["京都大学", "ギター"];

const initialModelAnswer: string[] = [
  "京都大学",
  "大分県",
  "島根県",
  "島根市",
  "卑弥呼",
];

function App() {
  console.log("App開始");
  const [questWord, setQuestWord] = useState(initialQuestWord);
  const [modelAnswer, setModelAnswer] = useState(initialModelAnswer);
  const [judge, setJudge] = useState(Boolean(true));
  const handleJudgeChange = (data: boolean) => {
    setJudge(data);
  };
  const setQuestion = () => {
    axios
      .get(
        "http://localhost:3000/questions/show/contents?category=computer&date=20211009&num=2"
      )
      .then(function (response) {
        console.log(response);
        setQuestWord(response["data"]["contents"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("")
      .then(function (response) {
        console.log(response);
        setModelAnswer(response["data"]["contents"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [questWord]);

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
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Title setQuestion={setQuestion} />}
            />
            <Route
              exact
              path="/Main"
              render={() => (
                <Game
                  questWords={questWord}
                  handleJudgeChange={handleJudgeChange}
                />
              )}
            />
            <Route exact path="/Loading" render={() => <Loading />} />
            <Route
              exact
              path="/Result"
              render={() => <Result judge={judge} modelAnswer={modelAnswer} />}
            />
            <Route exact path="/Error" render={() => <Error />} />
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
