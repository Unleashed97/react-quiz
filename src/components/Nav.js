import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import Burger from './Burger';

const Nav = (props) => {
    const classes = [];

    // clicking by the menu item is closing down the sidebar

    if(props.isSidebarNav){
        classes.push('nav--sidebar')
    }
    return (
        <nav className={`nav ${classes.join(' ')}`}>
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
