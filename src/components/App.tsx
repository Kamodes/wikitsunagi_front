import React, { useState } from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./Game";
import Title from "./Title";
import Result from "./Result";
import ButtonAppBar from "./modules/ButtonAppBar";

//ここのinitialの時点でAPIからデータ取ってきても良いと思う
const initialQuestWord: string[] = ["京都大学", "レッドブル"];
const initialModelAnswer: string[] = [
  "京都大学",
  "大分県",
  "島根県",
  "島根市",
  "卑弥呼",
];
function App() {
  const [questWord, setQuestWord] = useState(initialQuestWord);
  return (
    <div className="App">
      <Router>
        <ButtonAppBar />
        <div>
          <Route exact path="/" component={Title} />
          <Route
            exact
            path="/Main"
            render={() => <Game questWords={questWord} maxWord={5} />}
          />
          <Route
            exact
            path="/Result"
            render={() => (
              <Result judge={false} modelAnswer={initialModelAnswer} />
            )}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
