import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import Burger from './Burger';

const Nav = ({toggleSidebar, props}) => {
    return (
        <nav className="nav">
                <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/quiz" className="nav__link">Quizzes</Link>
                        </li>
                        <li className="nav__item">
                            <Burger toggleSidebar={toggleSidebar} handleBurgerBtnClick={props}/>
                        </li>
                </ul>
        </nav>
        
    )
}

export default Nav
