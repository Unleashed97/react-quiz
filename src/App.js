import React, {useState} from 'react'

import {
  HashRouter,
  Route,
  Link
} from "react-router-dom";

import './scss/main.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const [answerMode, setAnswerMode] = useState(false);

  const sidebarToggling = ()=>{
    setToggleSidebar(!toggleSidebar);
  }


  // Answer mode
  const handleCheckboxClick = () =>{
    setAnswerMode(!answerMode);
}
  
  return (

    <div className="wrapper">
      <div className="main">
        <HashRouter basename="/">
          <Header toggleSidebar={toggleSidebar} props={sidebarToggling}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz">
            <Quiz answerMode={answerMode} onChangeAnswerMode={handleCheckboxClick}/>
          </Route>
        </HashRouter>
      </div>
      <Sidebar toggleSidebar={toggleSidebar} answerMode={answerMode} onChangeAnswerMode={handleCheckboxClick}/>
      
    </div>
  );
}

export default App;
