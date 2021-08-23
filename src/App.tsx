import React from 'react';
import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Game';
import Title from './Title';
import Result from './Result'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Title}/>
          <Route exact path='/Main' component={Game}/>
          <Route exact path='/Result' component={Result}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
