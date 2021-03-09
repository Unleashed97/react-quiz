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
      {/* <input id="toggle-menu__input" className="toggle-menu__input" type="checkbox"/>
        <label className="toggle-menu" htmlFor="toggle-menu__input">
            <span className="burger">
                <div className="burger__item"></div>
                <div className="burger__item"></div>
                <div className="burger__item"></div>
            </span>
        </label> */}
      
      <div className="main">
        <HashRouter basename="/">
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
        </HashRouter>
      </div>
      <div className="sidebar">
        some text
      </div>
     
      
    </div>
  );
}

export default App;
