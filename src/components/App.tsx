import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Game from "./Game";
import Title from "./Title";
import Loading from "./Loading";
import Result from "./Result";
import ButtonAppBar from "./modules/ButtonAppBar";
import Footer from "./footer";
import Page404 from "./Page404";
import axios from "axios";

const initialQuestWord: string[] = ["京都大学", "ギター"];
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
  const [judge, setJudge] = useState(true);
  const [answers, setAnswers] = useState(initialAnswer);
  const handleAnswerChange = (data: AnswerType) => {
    setAnswers(data);
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
    console.log(answers);
    async function getAnswer() {
      await axios
        .post("http://localhost:3000/questions/verify_answer", {
          answer: answers,
        })
        .then(function (response) {
          console.log(response);
          setJudge(Boolean(response["data"]));
        })
        .catch(function (error) {
          console.log(error);
          console.log("途中のはず");
        });
    }
    getAnswer();
    // さらに模範解答を受け取りmodelAnswerに代入する
    // axios.get('http://localhost:3000/result/' + questWord[0] + '/' + questWord[1])
    //   .then(function (response) {
    //     console.log(response);
    //     setModelAnswer(response['data'])
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
                  maxWord={5}
                  handleAnswerChange={handleAnswerChange}
                />
              )}
            />
            <Route exact path="/Loading" render={() => <Loading />} />
            <Route
              exact
              path="/Result"
              render={() => <Result judge={judge} modelAnswer={modelAnswer} />}
            />
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
