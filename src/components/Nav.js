import React from 'react'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

import Home from '../pages/Home';
import Quiz from '../pages/Quiz';

const Nav = () => {
    return (
        <nav className="nav">
                <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/quiz" className="nav__link">Quizzes</Link>
                        </li>
                </ul>
        </nav>
        
    )
}

export default Nav
