import React from 'react'

import {
    HashRouter,
    Route,
    Link
  } from "react-router-dom";

import Nav from './Nav'
import AnswerMode from './AnswerMode'
import LanguageSwitcher from './LanguageSwitcher'

const Sidebar = ({toggleSidebar, answerMode, onChangeAnswerMode}) => {
    const classes = []

    if(toggleSidebar){
        classes.push('active');
    }
    else{
        classes.pop();
    }

    // sidebar nav
    let isSidebarNav = true;
    return (
        <div className={`sidebar ${classes.join(' ')}`}>
            <div className="sidebar__inner">
                <nav className="sidebar__block sidebar__nav">
                    <h4 className="sidebar__title">Menu</h4>
                    <HashRouter>
                        <Nav isSidebarNav={isSidebarNav}/>
                        <Route exact path="/" />
                        <Route exact path="/quiz" />
                    </HashRouter>
                </nav>
                
                <div className="sidebar__block sidebar--settings">
                    <h4 className="sidebar__title">Settings</h4>
                    <div className="sidebar__block-content">
                        <div className="sidebar__block-item">
                            <AnswerMode answerMode={answerMode} onToggleAnswerMode={onChangeAnswerMode}/>
                        </div>
                        <div className="sidebar__block-item">
                            <LanguageSwitcher/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
