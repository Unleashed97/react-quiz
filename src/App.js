import React, {useState} from 'react'

import {
  HashRouter,
  Route,
  Link
} from "react-router-dom";

import './scss/main.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="wrapper">
      <HashRouter basename="/">
        <Header/>

          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
      </HashRouter>
    </div>
  );
}

export default App;
